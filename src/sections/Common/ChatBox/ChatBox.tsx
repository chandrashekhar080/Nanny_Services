import React, { useState, useMemo, useRef, useEffect } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";
import { Bell, Mail, Search, SlidersHorizontal, Smile, X, File } from "lucide-react";
import { PiPhoneCallFill } from "react-icons/pi";
import * as Popover from "@radix-ui/react-popover";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export interface MessageItem {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar: string;
    unread?: boolean;
    active?: boolean;
    online?: boolean; // true = online, false = offline, undefined = away
}

export interface ChatMessageGroup {
    id: number;
    sender: "user" | "other";
    messages: string[];
    timestamp?: string;
    read?: boolean;
    attachments?: { type: "image" | "file"; url: string; name: string; file?: File }[];
    reactions?: { emoji: string; count: number }[];
}

export interface NotificationItem {
    id: number;
    text: string;
    time: string;
}

export interface ChatBoxProps {
    messagesList: MessageItem[];
    chatMessages: ChatMessageGroup[];
    notifications?: NotificationItem[];
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    filterType?: "all" | "unread" | "read";
    onFilterChange?: (filter: "all" | "unread" | "read") => void;
    onSendMessage?: (message: string, attachments?: File[]) => void;
    onMessageUpdate?: (updatedMessages: ChatMessageGroup[]) => void;
    onMessagesListUpdate?: (updatedList: MessageItem[]) => void;
    onChatSelect?: (chat: MessageItem) => void;
    onNotificationClick?: (notification: NotificationItem) => void;
    userAvatar?: string;
    userName?: string;
    selectedChatId?: number | null;
}

// Common emojis for emoji picker - first 5 shown, rest on expand
const QUICK_EMOJIS = ["👍", "❤️", "😂", "😮", "😢"];
const ALL_EMOJIS = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩",
    "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "😣", "😖",
    "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯",
    "👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "👏", "🙌", "👐",
    "❤️", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️",
    "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️",
];

export const ChatBox: React.FC<ChatBoxProps> = ({
    messagesList: initialMessagesList,
    chatMessages: initialChatMessages,
    notifications = [],
    searchQuery: externalSearchQuery,
    onSearchChange,
    filterType: externalFilterType = "all",
    onFilterChange,
    onSendMessage,
    onMessageUpdate,
    onMessagesListUpdate,
    onChatSelect,
    onNotificationClick,
    userAvatar = "/frame-10-11.png",
    userName = "You",
    selectedChatId,
}) => {
    const [selectedChat, setSelectedChat] = useState<MessageItem | null>(null);
    const [messageText, setMessageText] = useState("");
    const [internalSearchQuery, setInternalSearchQuery] = useState("");
    const [internalFilterType, setInternalFilterType] = useState<"all" | "unread" | "read">("all");
    
    // Use external props if provided, otherwise use internal state
    const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalSearchQuery;
    const filterType = externalFilterType !== undefined ? externalFilterType : internalFilterType;
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showAllEmojis, setShowAllEmojis] = useState(false);
    const [emojiPickerPosition, setEmojiPickerPosition] = useState<{ top: number; left: number; messageId: string } | null>(null);
    const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    
    const handleSearchChange = (query: string) => {
        if (onSearchChange) {
            onSearchChange(query);
        } else {
            setInternalSearchQuery(query);
        }
    };
    
    const handleFilterChange = (filter: "all" | "unread" | "read") => {
        if (onFilterChange) {
            onFilterChange(filter);
        } else {
            setInternalFilterType(filter);
        }
    };
    const [attachments, setAttachments] = useState<File[]>([]);
    const [attachmentPreviews, setAttachmentPreviews] = useState<string[]>([]);
    const [messagesList, setMessagesList] = useState<MessageItem[]>(initialMessagesList);
    const [chatMessages, setChatMessages] = useState<ChatMessageGroup[]>(initialChatMessages);
    
    // Sync with external props if they change
    useEffect(() => {
        setMessagesList(initialMessagesList);
    }, [initialMessagesList]);
    
    useEffect(() => {
        setChatMessages(initialChatMessages);
    }, [initialChatMessages]);
    
    // Sync selected chat with external prop
    useEffect(() => {
        if (selectedChatId !== undefined) {
            const chat = messagesList.find(msg => msg.id === selectedChatId);
            if (chat) {
                setSelectedChat(chat);
            } else if (selectedChatId === null) {
                setSelectedChat(null);
            }
        }
    }, [selectedChatId, messagesList]);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const emojiPickerRef = useRef<HTMLDivElement>(null);
    const messageEndRef = useRef<HTMLDivElement>(null);

    // Filter messages based on search and filter type
    const filteredMessages = useMemo(() => {
        let filtered = messagesList;

        // Apply search filter
        if (searchQuery.trim()) {
            filtered = filtered.filter(
                (msg) =>
                    msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply read/unread filter
        if (filterType === "unread") {
            filtered = filtered.filter((msg) => msg.unread);
        } else if (filterType === "read") {
            filtered = filtered.filter((msg) => !msg.unread);
        }

        return filtered;
    }, [messagesList, searchQuery, filterType]);

    // Mark messages as read when chat is selected
    useEffect(() => {
        if (selectedChat) {
            const updatedList = messagesList.map((msg) =>
                msg.id === selectedChat.id ? { ...msg, unread: false, active: true } : { ...msg, active: false }
            );
            setMessagesList(updatedList);
            if (onMessagesListUpdate) {
                onMessagesListUpdate(updatedList);
            }
            if (onChatSelect) {
                onChatSelect(selectedChat);
            }
        }
    }, [selectedChat, messagesList, onMessagesListUpdate, onChatSelect]);

    // Track previous message count to only scroll on new messages, not reactions
    const prevMessageCountRef = useRef(chatMessages.length);
    const prevSelectedChatRef = useRef<MessageItem | null>(null);
    const isInitialLoadRef = useRef(false);
    
    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    
    // Reset scroll tracking when chat changes
    useEffect(() => {
        if (selectedChat?.id !== prevSelectedChatRef.current?.id) {
            // Chat changed, reset the message count tracking
            prevMessageCountRef.current = chatMessages.length;
            prevSelectedChatRef.current = selectedChat;
            isInitialLoadRef.current = true;
            // Don't auto-scroll when selecting a chat - let user see the conversation from the start
            // If you want to scroll to bottom on chat selection, uncomment the line below
            // setTimeout(() => {
            //     messageEndRef.current?.scrollIntoView({ behavior: "auto" });
            // }, 100);
            // Reset the flag after a short delay
            setTimeout(() => {
                isInitialLoadRef.current = false;
            }, 200);
        }
    }, [selectedChat?.id]);
    
    // Scroll to bottom when new messages arrive (not when reactions are added or chat is first loaded)
    useEffect(() => {
        if (isInitialLoadRef.current) {
            return; // Don't scroll on initial load
        }
        const currentMessageCount = chatMessages.length;
        if (currentMessageCount > prevMessageCountRef.current) {
            // Only scroll if a new message was added (not just loading existing messages)
            setTimeout(() => {
                messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
        prevMessageCountRef.current = currentMessageCount;
    }, [chatMessages.length]);

    // Close emoji picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                emojiPickerRef.current &&
                !emojiPickerRef.current.contains(event.target as Node)
            ) {
                const target = event.target as HTMLElement;
                // Don't close if clicking on a message
                if (!target.closest('[data-message-id]')) {
                    setShowEmojiPicker(false);
                    setEmojiPickerPosition(null);
                    setSelectedMessageId(null);
                }
            }
        };

        if (showEmojiPicker) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [showEmojiPicker]);

    const handleSend = () => {
        // Check if we have content to send
        const hasContent = messageText.trim() || attachments.length > 0;
        
        if (hasContent && onSendMessage) {
            onSendMessage(messageText.trim(), attachments.length > 0 ? attachments : undefined);
            
            // Add message to chat if we have a selected chat
            if (selectedChat) {
                const messageTextToSend = messageText.trim();
                const attachmentData = attachments.map((file) => {
                    if (file.type.startsWith("image/")) {
                        return {
                            type: "image" as const,
                            url: URL.createObjectURL(file),
                            name: file.name,
                            file: file,
                        };
                    } else {
                        return {
                            type: "file" as const,
                            url: URL.createObjectURL(file),
                            name: file.name,
                            file: file,
                        };
                    }
                });

                const newMessage: ChatMessageGroup = {
                    id: chatMessages.length + 1,
                    sender: "user",
                    messages: messageTextToSend ? [messageTextToSend] : [],
                    read: false,
                    attachments: attachmentData.length > 0 ? attachmentData : undefined,
                    reactions: [],
                };
                const updatedMessages = [...chatMessages, newMessage];
                setChatMessages(updatedMessages);
                if (onMessageUpdate) {
                    onMessageUpdate(updatedMessages);
                }
            }

            setMessageText("");
            setAttachments([]);
            setAttachmentPreviews([]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const files = Array.from(e.target.files);
            const newAttachments = [...attachments, ...files];
            setAttachments(newAttachments);

            // Create previews for images
            const newPreviews: string[] = [];
            files.forEach((file) => {
                if (file.type.startsWith("image/")) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if (e.target?.result) {
                            newPreviews.push(e.target.result as string);
                            setAttachmentPreviews((prev) => [...prev, ...newPreviews]);
                        }
                    };
                    reader.readAsDataURL(file);
                } else {
                    newPreviews.push("");
                }
            });
        }
        // Reset input to allow selecting the same file again
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const removeAttachment = (index: number) => {
        setAttachments((prev) => prev.filter((_, i) => i !== index));
        setAttachmentPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    const handleEmojiClick = (emoji: string, groupId?: number, messageIndex?: number) => {
        if (groupId !== undefined && messageIndex !== undefined) {
            // Add reaction to message (WhatsApp style)
            const updatedMessages = chatMessages.map((group) => {
                if (group.id === groupId) {
                    const currentReactions = group.reactions || [];
                    const existingReaction = currentReactions.find((r) => r.emoji === emoji);
                    
                    if (existingReaction) {
                        // Increment count if reaction exists
                        return {
                            ...group,
                            reactions: currentReactions.map((r) =>
                                r.emoji === emoji ? { ...r, count: r.count + 1 } : r
                            ),
                        };
                    } else {
                        // Add new reaction
                        return {
                            ...group,
                            reactions: [...currentReactions, { emoji, count: 1 }],
                        };
                    }
                }
                return group;
            });
            setChatMessages(updatedMessages);
            if (onMessageUpdate) {
                onMessageUpdate(updatedMessages);
            }
        } else {
            // Add emoji to input field
            setMessageText((prev) => prev + emoji);
        }
        setShowEmojiPicker(false);
        setShowAllEmojis(false);
        setEmojiPickerPosition(null);
        setSelectedMessageId(null);
    };

    const handleMessageClick = (e: React.MouseEvent<HTMLDivElement>, groupId: number, messageIndex: number) => {
        const messageElement = e.currentTarget;
        const rect = messageElement.getBoundingClientRect();
        const messageId = `${groupId}-${messageIndex}`;
        
        if (showEmojiPicker && selectedMessageId === messageId) {
            setShowEmojiPicker(false);
            setShowAllEmojis(false);
            setEmojiPickerPosition(null);
            setSelectedMessageId(null);
        } else {
            setSelectedMessageId(messageId);
            setShowAllEmojis(false);
            setEmojiPickerPosition({
                top: rect.bottom + 8,
                left: rect.left,
                messageId: messageId,
            });
            setShowEmojiPicker(true);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            // Prevent any file input from opening
            if (fileInputRef.current) {
                fileInputRef.current.blur();
            }
            // Always try to send if there's content (text or attachments)
            handleSend();
        }
    };

    const unreadCount = messagesList.filter((m) => m.unread).length;
    const notificationCount = notifications.length;

    return (
        <section className="flex w-full mb-10 h-full border-y border-[#00000014] relative overflow-hidden">
            {/* Chat List */}
            <aside
                className={`flex flex-col bg-white shadow-[1px_0px_0px_#00000014] w-full sm:w-[349px] h-full ${selectedChat ? "hidden sm:flex" : "flex"
                    }`}
            >
                <header className="flex flex-col">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-2.5">
                            <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg leading-[27px]">
                                Messages
                            </h1>
                            {unreadCount > 0 && (
                                <Badge className="bg-graygray-200 text-black rounded-3xl px-2 py-0.5 h-auto">
                                    <span className="[font-family:'Inter',Helvetica] font-semibold text-xs leading-[18px]">
                                        {unreadCount}
                                    </span>
                                </Badge>
                            )}
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="ghost" size="icon" className="h-6 w-6 p-0 relative">
                                <Mail />
                            </Button>
                            <DropdownMenu.Root open={showNotifications} onOpenChange={setShowNotifications}>
                                <DropdownMenu.Trigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0 relative">
                                        <Bell />
                                        {notificationCount > 0 && (
                                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-1 rounded-full flex items-center justify-center">
                                                <span className="text-white text-[10px] font-semibold">{notificationCount}</span>
                                            </span>
                                        )}
                                    </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content
                                        className="min-w-[280px] bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50"
                                        align="end"
                                    >
                                        <div className="px-3 py-2 border-b border-gray-200">
                                            <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-sm">
                                                Notifications
                                            </h3>
                                        </div>
                                        <div className="max-h-[300px] overflow-y-auto">
                                            {notifications.length > 0 ? (
                                                notifications.map((notif) => (
                                                    <DropdownMenu.Item
                                                        key={notif.id}
                                                        className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer outline-none"
                                                        onClick={() => {
                                                            if (onNotificationClick) {
                                                                onNotificationClick(notif);
                                                            }
                                                        }}
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm">
                                                                {notif.text}
                                                            </p>
                                                            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-500 text-xs">
                                                                {notif.time}
                                                            </p>
                                                        </div>
                                                    </DropdownMenu.Item>
                                                ))
                                            ) : (
                                                <div className="px-3 py-4 text-center">
                                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-500 text-sm">
                                                        No notifications
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>
                        </div>
                    </div>
                    <Separator className="opacity-[0.08]" />
                </header>

                {/* Search + Filter */}
                <div className="flex items-center gap-2.5 px-6 py-3">
                    <div className="flex flex-1 h-12 items-center gap-2.5 px-5 py-2.5 bg-[#f3f3f3] rounded-xl">
                        <Search className="opacity-60 w-4 h-4" />
                        <Input
                            placeholder="Search messages"
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="border-0 bg-transparent p-0 placeholder:opacity-40 placeholder:[font-family:'Poppins',Helvetica] placeholder:font-normal placeholder:text-black placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                        />
                    </div>
                    <Popover.Root open={showFilters} onOpenChange={setShowFilters}>
                        <Popover.Trigger asChild>
                            <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                                <SlidersHorizontal />
                            </Button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content
                                className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 min-w-[150px]"
                                align="end"
                            >
                                <div className="flex flex-col gap-2">
                                        <button
                                            onClick={() => {
                                                handleFilterChange("all");
                                                setShowFilters(false);
                                            }}
                                            className={`px-3 py-2 text-left rounded hover:bg-gray-100 [font-family:'Poppins',Helvetica] text-sm ${filterType === "all" ? "font-semibold text-primary-1" : "font-normal text-black"
                                                }`}
                                        >
                                            All Messages
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleFilterChange("unread");
                                                setShowFilters(false);
                                            }}
                                            className={`px-3 py-2 text-left rounded hover:bg-gray-100 [font-family:'Poppins',Helvetica] text-sm ${filterType === "unread" ? "font-semibold text-primary-1" : "font-normal text-black"
                                                }`}
                                        >
                                            Unread
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleFilterChange("read");
                                                setShowFilters(false);
                                            }}
                                            className={`px-3 py-2 text-left rounded hover:bg-gray-100 [font-family:'Poppins',Helvetica] text-sm ${filterType === "read" ? "font-semibold text-primary-1" : "font-normal text-black"
                                                }`}
                                        >
                                            Read
                                        </button>
                                </div>
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>

                {/* Scrollable Messages */}
                <ScrollArea className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <div className="flex flex-col gap-2 px-4">
                        {filteredMessages.length > 0 ? (
                            filteredMessages.map((contact) => (
                                <button
                                    key={contact.id}
                                    onClick={() => setSelectedChat(contact)}
                                    className={`flex items-start gap-4 p-3 w-full text-left rounded-xl transition-colors hover:bg-[#eeeeee] ${contact.active ? "bg-[#eeeeee]" : ""
                                        }`}
                                >
                                    <Avatar className="w-12 h-12 rounded-xl">
                                        <AvatarImage src={contact.avatar} alt={contact.name} />
                                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                                        <div className="flex items-start gap-3 relative">
                                            <h3 className={`flex-1 [font-family:'Poppins',Helvetica] font-semibold text-sm truncate ${contact.unread ? "text-black" : "text-black opacity-70"
                                                }`}>
                                                {contact.name}
                                            </h3>
                                            <div className="flex flex-col items-center gap-1 absolute top-0 right-0">
                                                <span className="opacity-50 [font-family:'Poppins',Helvetica] font-semibold text-black text-xs whitespace-nowrap">
                                                    {contact.time}
                                                </span>
                                                {contact.unread && (
                                                    <div className="w-[7px] h-[7px] bg-primary-1 rounded-3xl" />
                                                )}
                                            </div>
                                        </div>
                                        <p className={`[font-family:'Poppins',Helvetica] font-normal text-xs truncate max-w-[200px] ${contact.unread ? "text-heading font-semibold" : "text-description"
                                            }`}>
                                            {contact.message}
                                        </p>
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="flex items-center justify-center py-8">
                                <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-500 text-sm">
                                    No messages found
                                </p>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </aside>

            {/* Chat Content */}
            {selectedChat && (
                <main className="flex flex-col flex-1 bg-white border-l border-[#00000014] relative sm:relative w-full h-full overflow-hidden overflow-x-hidden">
                    {/* Chat Header */}
                    <header className="flex h-[78px] items-center justify-between p-6">
                        <div className="flex items-start gap-4">
                            <Avatar className="w-10 h-10 rounded-[10px]">
                                <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                                <AvatarFallback>{selectedChat.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-heading text-lg leading-[22.5px]">
                                    {selectedChat.name}
                                </h2>
                            </div>
                        </div>
                        <Button className="flex items-center gap-2 px-4 py-2.5 bg-[#f3f3f3] hover:bg-[#f3f3f3] text-heading rounded-lg h-auto">
                            <PiPhoneCallFill />
                            <span className="[font-family:'Poppins',Helvetica] font-semibold text-base">
                                Call
                            </span>
                        </Button>
                    </header>

                    <Separator className="opacity-[0.08]" />

                    {/* Chat messages */}
                    <ScrollArea className="flex-1 overflow-y-auto overflow-x-hidden" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        <div className="flex flex-col gap-8 p-6" style={{ overflowX: "hidden" }}>
                            {chatMessages.map((group) => (
                                <div
                                    key={group.id}
                                    className={`flex items-start gap-4 ${group.sender === "user" ? "justify-end" : ""
                                        }`}
                                >
                                    {group.sender === "other" && (
                                        <Avatar className="w-10 h-10 rounded-[8.33px]">
                                            <AvatarImage
                                                src={selectedChat.avatar}
                                                alt={selectedChat.name}
                                            />
                                            <AvatarFallback>{selectedChat.name.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div
                                        className={`flex flex-col gap-2.5 relative ${group.sender === "user" ? "items-end" : "items-start"
                                            }`}
                                        style={{ maxWidth: "calc(100% - 60px)" }}
                                    >
                                        {group.attachments && group.attachments.length > 0 && (
                                            <div className="flex flex-col gap-2">
                                                {group.attachments.map((att, idx) => (
                                                    <div key={idx} className="max-w-[200px]">
                                                        {att.type === "image" ? (
                                                            <img
                                                                src={att.url}
                                                                alt={att.name}
                                                                className="rounded-lg max-w-full h-auto"
                                                            />
                                                        ) : (
                                                            <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg border border-gray-200">
                                                                <File className="w-5 h-5 text-gray-600" />
                                                                <span className="text-sm font-medium text-gray-800 truncate">{att.name}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {group.messages.map((msg, i) => {
                                            const messageId = `${group.id}-${i}`;
                                            const isSelected = selectedMessageId === messageId && showEmojiPicker;
                                            const isLastMessage = i === group.messages.length - 1;
                                            return (
                                                <div key={i} className="flex flex-col relative">
                                                    <div
                                                        data-message-id={messageId}
                                                        onClick={(e) => handleMessageClick(e, group.id, i)}
                                                        className={`flex items-start gap-2.5 px-4 py-2 rounded-xl cursor-pointer relative ${group.sender === "user" ? "bg-primary-1" : "bg-[#f1f1f1]"
                                                            }`}
                                                    >
                                                        <p
                                                            className={`[font-family:'Poppins',Helvetica] font-normal text-sm ${group.sender === "user" ? "text-white" : "text-heading"
                                                                }`}
                                                        >
                                                            {msg}
                                                        </p>
                                                        {isSelected && emojiPickerPosition && (
                                                        <div
                                                            ref={emojiPickerRef}
                                                            className={`${isMobile ? "fixed" : "absolute"} z-50`}
                                                            style={{
                                                                top: isMobile ? "auto" : "100%",
                                                                bottom: isMobile ? "80px" : "auto",
                                                                marginTop: isMobile ? "0" : "8px",
                                                                left: isMobile ? "50%" : (group.sender === "user" ? "auto" : "0"),
                                                                right: isMobile ? "auto" : (group.sender === "user" ? "0" : "auto"),
                                                                transform: isMobile ? "translateX(-50%)" : (group.sender === "user" ? "translateX(0)" : "none"),
                                                                maxWidth: isMobile ? "min(280px, calc(100vw - 2rem))" : "280px",
                                                                width: isMobile ? "calc(100vw - 2rem)" : "max-content",
                                                            }}
                                                        >
                                                            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 w-full sm:w-auto" style={{ maxWidth: "min(280px, calc(100vw - 3rem))" }}>
                                                                {!showAllEmojis ? (
                                                                    <div className="flex items-center gap-1">
                                                                        {QUICK_EMOJIS.map((emoji, idx) => (
                                                                            <button
                                                                                key={idx}
                                                                                onClick={(e) => {
                                                                                    e.stopPropagation();
                                                                                    handleEmojiClick(emoji, group.id, i);
                                                                                }}
                                                                                className="text-2xl hover:bg-gray-100 rounded p-2 transition-colors min-w-[40px] h-[40px] flex items-center justify-center"
                                                                            >
                                                                                {emoji}
                                                                            </button>
                                                                        ))}
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setShowAllEmojis(true);
                                                                            }}
                                                                            className="text-lg hover:bg-gray-100 rounded p-2 transition-colors min-w-[40px] h-[40px] flex items-center justify-center border border-gray-300"
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                ) : (
                                                                    <div className="max-w-[calc(100vw-3rem)] sm:w-[280px] sm:max-w-none max-h-[200px] overflow-y-auto p-2" style={{ width: "max-content", maxWidth: "min(280px, calc(100vw - 3rem))" }}>
                                                                        <div className="grid grid-cols-8 gap-1 sm:gap-2">
                                                                            {ALL_EMOJIS.map((emoji, idx) => (
                                                                                <button
                                                                                    key={idx}
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        handleEmojiClick(emoji, group.id, i);
                                                                                    }}
                                                                                    className="text-2xl hover:bg-gray-100 rounded p-1 transition-colors"
                                                                                >
                                                                                    {emoji}
                                                                                </button>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    </div>
                                                    {isLastMessage && group.reactions && group.reactions.length > 0 && (
                                                        <div className={`flex items-center gap-1 mt-1 ${group.sender === "user" ? "justify-end" : "justify-start"}`}>
                                                            {group.reactions.map((reaction, rIdx) => (
                                                                <div
                                                                    key={rIdx}
                                                                    className="flex items-center gap-1 bg-white rounded-full px-2 py-0.5 text-xs shadow-sm border border-gray-200"
                                                                >
                                                                    <span className="text-base">{reaction.emoji}</span>
                                                                    <span className="text-gray-600 font-medium">{reaction.count}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                        {group.read !== undefined && group.sender === "user" && (
                                            <span className="text-xs opacity-50 [font-family:'Poppins',Helvetica]">
                                                {group.read ? "Read" : "Sent"}
                                            </span>
                                        )}
                                    </div>
                                    {group.sender === "user" && (
                                        <Avatar className="w-10 h-10 rounded-[8.33px]">
                                            <AvatarImage src={userAvatar} alt={userName} />
                                            <AvatarFallback>{userName.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                </div>
                            ))}
                            <div ref={messageEndRef} />
                        </div>
                    </ScrollArea>

                    {/* Attachment Previews */}
                    {attachmentPreviews.length > 0 && (
                        <div className="flex gap-2 px-6 py-2 border-t border-gray-200">
                            {attachmentPreviews.map((preview, index) => (
                                <div key={index} className="relative">
                                    {preview ? (
                                        <div className="relative w-20 h-20 rounded-lg overflow-visible border border-gray-200">
                                            <img
                                                src={preview}
                                                alt={`Preview ${index + 1}`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                            <button
                                                onClick={() => removeAttachment(index)}
                                                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 z-10"
                                                type="button"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="relative w-20 h-20 rounded-lg border border-gray-200 flex items-center justify-center bg-gray-100">
                                            <File className="w-6 h-6 text-gray-400" />
                                            <button
                                                onClick={() => removeAttachment(index)}
                                                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 z-10"
                                                type="button"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                            <span className="absolute bottom-1 left-1 right-1 text-[10px] truncate text-gray-600 px-1 z-0">
                                                {attachments[index]?.name}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Chat input */}
                    <footer className="flex items-center gap-2 sm:gap-6 p-4 sm:p-6 border-t border-gray-200">
                        {/* File upload */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            id="file-upload"
                            className="hidden"
                            accept="image/*,.pdf,.doc,.docx,.txt"
                            multiple
                            onChange={handleFileChange}
                            tabIndex={-1}
                            onKeyDown={(e) => {
                                // Prevent Enter from opening file dialog
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    // If there are attachments, send them
                                    if (attachments.length > 0 || messageText.trim()) {
                                        handleSend();
                                    }
                                }
                            }}
                        />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 p-0 cursor-pointer"
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            onKeyDown={(e) => {
                                // Prevent Enter from opening file dialog, send message instead
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (attachments.length > 0 || messageText.trim()) {
                                        handleSend();
                                    }
                                }
                            }}
                        >
                            <img className="w-6 h-6" alt="Attach" src="/assets/img/iconsax-1.svg" />
                        </Button>

                        {/* Emoji Picker Button */}
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 p-0 cursor-pointer"
                                onClick={() => {
                                    if (selectedMessageId) {
                                        setShowEmojiPicker(false);
                                        setShowAllEmojis(false);
                                        setEmojiPickerPosition(null);
                                        setSelectedMessageId(null);
                                    } else {
                                        setShowEmojiPicker(!showEmojiPicker);
                                        if (!showEmojiPicker) {
                                            setShowAllEmojis(false);
                                        }
                                    }
                                }}
                                type="button"
                            >
                                <Smile className="w-5 h-5" />
                            </Button>
                            {showEmojiPicker && !selectedMessageId && (
                                <div
                                    ref={emojiPickerRef}
                                    className="absolute bottom-full left-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50"
                                    style={{
                                        width: "max-content",
                                        maxWidth: "min(280px, calc(100vw - 2rem))",
                                    }}
                                >
                                    {!showAllEmojis ? (
                                        <div className="flex items-center gap-1 flex-wrap">
                                            {QUICK_EMOJIS.map((emoji: string, idx: number) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleEmojiClick(emoji)}
                                                    className="text-2xl hover:bg-gray-100 rounded p-2 transition-colors min-w-[40px] h-[40px] flex items-center justify-center"
                                                >
                                                    {emoji}
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => setShowAllEmojis(true)}
                                                className="text-lg hover:bg-gray-100 rounded p-2 transition-colors min-w-[40px] h-[40px] flex items-center justify-center border border-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="max-w-[calc(100vw-3rem)] sm:w-[280px] sm:max-w-none max-h-[200px] overflow-y-auto p-2" style={{ width: "max-content", maxWidth: "min(280px, calc(100vw - 3rem))" }}>
                                            <div className="grid grid-cols-8 gap-1 sm:gap-2">
                                                {ALL_EMOJIS.map((emoji: string, idx: number) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleEmojiClick(emoji)}
                                                        className="text-2xl hover:bg-gray-100 rounded p-1 transition-colors"
                                                    >
                                                        {emoji}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <form 
                            className="flex flex-1 h-12 items-center justify-between px-3 sm:px-5 py-2.5 bg-white rounded-xl border-2 border-solid border-slate-200"
                            onSubmit={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSend();
                            }}
                        >
                            <Input
                                placeholder="Type a message"
                                value={messageText}
                                onChange={(e) => setMessageText(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="border-0 bg-transparent p-0 placeholder:opacity-40 placeholder:[font-family:'Poppins',Helvetica] placeholder:font-normal placeholder:text-black placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
                                autoFocus={false}
                            />
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 p-0"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                type="submit"
                                disabled={!messageText.trim() && attachments.length === 0}
                            >
                                <img className="w-6 h-6" alt="Send" src="/assets/img/iconsax.svg" />
                            </Button>
                        </form>
                    </footer>
                </main>
            )}
        </section>
    );
};
