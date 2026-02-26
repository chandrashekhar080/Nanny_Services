import React, { useState } from "react";
import { ChatBox, MessageItem, ChatMessageGroup, NotificationItem } from "../../../sections/Common/ChatBox/ChatBox";

export const FamilyChat: React.FC = () => {
    // Mock client contacts with online status - managed in state
    const [messagesList, setMessagesList] = useState<MessageItem[]>([
        { id: 1, name: "Sarah Johnson", message: "Hi, are you available for this weekend?", time: "1h", avatar: "/avatar1.png", unread: true, online: true },
        { id: 2, name: "Michael Chen", message: "Thank you for today's session", time: "2h", avatar: "/avatar2.png", online: false },
        { id: 3, name: "Emily Rodriguez", message: "Can we schedule for next week?", time: "3h", avatar: "/avatar3.png", unread: true, online: true },
        { id: 4, name: "David Thompson", message: "The kids loved the activities today", time: "5h", avatar: "/avatar4.png", online: undefined },
    ]);

    // Mock chat messages per contact - managed in state
    // In a real app, you'd fetch these from your backend based on selectedChatId
    const [chatMessagesByContact, setChatMessagesByContact] = useState<Record<number, ChatMessageGroup[]>>({
        1: [ // Sarah Johnson
            { id: 1, sender: "other", messages: ["Hi, are you available for this weekend?", "We need someone for Saturday evening"] },
            { id: 2, sender: "user", messages: ["Hi Sarah! Yes, I'm available this weekend 👍"] },
            { id: 3, sender: "other", messages: ["Great! Can you confirm the time?"] },
            { id: 4, sender: "user", messages: ["Sure! I'll be there at 6 PM"] },
        ],
        2: [ // Michael Chen
            { id: 1, sender: "other", messages: ["Thank you for today's session", "The kids really enjoyed it"] },
            { id: 2, sender: "user", messages: ["You're welcome! I'm glad they had fun 😊"] },
        ],
        3: [ // Emily Rodriguez
            { id: 1, sender: "other", messages: ["Can we schedule for next week?"] },
            { id: 2, sender: "user", messages: ["Of course! What days work for you?"] },
            { id: 3, sender: "other", messages: ["Monday and Wednesday would be perfect"] },
        ],
        4: [ // David Thompson
            { id: 1, sender: "other", messages: ["The kids loved the activities today"] },
            { id: 2, sender: "user", messages: ["That's wonderful to hear! They're such great kids"] },
        ],
    });

    // Current chat messages for selected contact
    const [chatMessages, setChatMessages] = useState<ChatMessageGroup[]>([]);

    // Notifications - managed in state
    const [notifications, setNotifications] = useState<NotificationItem[]>([
        { id: 1, text: "New message from Sarah Johnson", time: "2m ago" },
        { id: 2, text: "Emily Rodriguez sentd you a photo", time: "15m ago" },
    ]);

    // Search and filter - managed in state
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState<"all" | "unread" | "read">("all");
    const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

    const handleSendMessage = (message: string, attachments?: File[]) => {
        console.log(`Sent message: ${message}`, attachments ? `with ${attachments.length} attachment(s)` : "");
        // In a real app, you would send this to your backend API
        // The ChatBox component will automatically update chatMessages via onMessageUpdate
    };

    const handleMessageUpdate = (updatedMessages: ChatMessageGroup[]) => {
        setChatMessages(updatedMessages);
        // Update the messages for the current contact
        if (selectedChatId) {
            setChatMessagesByContact((prev) => ({
                ...prev,
                [selectedChatId]: updatedMessages,
            }));
        }
        // In a real app, you would sync this with your backend
    };

    const handleMessagesListUpdate = (updatedList: MessageItem[]) => {
        setMessagesList(updatedList);
        // In a real app, you would sync this with your backend
    };

    const handleChatSelect = (chat: MessageItem) => {
        setSelectedChatId(chat.id);
        // Load chat messages for the selected contact
        const messages = chatMessagesByContact[chat.id] || [];
        setChatMessages(messages);
        // In a real app, you would fetch these from your backend API here
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        // In a real app, you might want to debounce this and filter on the backend
    };

    const handleFilterChange = (filter: "all" | "unread" | "read") => {
        setFilterType(filter);
        // In a real app, you might want to fetch filtered messages from the backend
    };

    const handleNotificationClick = (notification: NotificationItem) => {
        console.log("Notification clicked:", notification);
        // In a real app, you might want to navigate to the related chat or mark as read
        // Remove notification after click
        setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    };

    return (
        <div className="max-w-[1280px] mx-auto px-0 py-2 md:py-2 md:px-5  h-[calc(100vh-40px)]">
            <ChatBox
                messagesList={messagesList}
                chatMessages={chatMessages}
                notifications={notifications}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                filterType={filterType}
                onFilterChange={handleFilterChange}
                onSendMessage={handleSendMessage}
                onMessageUpdate={handleMessageUpdate}
                onMessagesListUpdate={handleMessagesListUpdate}
                onChatSelect={handleChatSelect}
                onNotificationClick={handleNotificationClick}
                selectedChatId={selectedChatId}
                userAvatar="/avatar-user.png"
                userName="You"
            />
        </div>
    );
};
