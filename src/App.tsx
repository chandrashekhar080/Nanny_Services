import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Layout } from "./sections/Layout";
import { About } from "./pages/About";
import { Faq } from "./pages/Faq/Faq";
import { Contact } from "./pages/Contact";
import { Subscription } from "./pages/Subscription/Subscription";
import { Resources } from "./pages/Resources";
import PrivacyPolicy from "./pages/Policys/PrivacyPolicy";
import CookiePolicy from "./pages/Policys/CookiePolicy";
import TermsOfService from "./pages/Policys/TermsOfService";
import { SelectUserType } from "./Auth/SelectUserType";
import { Login } from "./Auth/Login";
import { FamilyAcc } from "./Auth/FamilyAccount";
import { CaregiverAcc } from "./Auth/Caregiver";
import { FamilyLayout } from "./sections/Layout/FamilyLayout";
import { HomeFamily } from "./pages/FamilyPages/HomeFamily";
import { Caregiver } from "./pages/FamilyPages/Caregiver/Caregiver";
import { CaregiverDetail } from "./pages/FamilyPages/CaregiverDetail";
import { WhislistPage } from "./pages/FamilyPages/Wishlist/WishlistPage";
import { FamilyChat } from "./pages/FamilyPages/FamilyChat";
import { Jobs } from "./pages/FamilyPages/Jobs/Jobpage/Jobs";
import { AddJob } from "./pages/FamilyPages/Jobs/AddJob/AddJob";
import { EditJob } from "./pages/FamilyPages/Jobs/EditJob";
import { AccountSettings } from "./pages/FamilyPages/AccountSettings/AccountSettings";
import { AccountSettingss } from "./pages/CareGiverPages/AccountSettings/AccountSettings";
import { SecuritySettings } from "./pages/FamilyPages/AccountSettings/SecuritySettings";
import { EditProfile } from "./pages/FamilyPages/AccountSettings/AccountsettingTabs/EditProfile";
import { EditProfilecaregiver } from "./pages/CareGiverPages/AccountSettings/AccountsettingTabs/EditProfile";
import { HelpCenter } from "./pages/FamilyPages/HelpCenter";
import { CaregiverLayout } from "./sections/Layout/CareGiverLayout/CareGiverLayout";
import HomeCareGiver from "./pages/CareGiverPages/HomeCareGiver/HomeCareGiver";
import { ProcessLayout } from "./sections/Layout/ProcessLayout";
import Family from "./pages/CareGiverPages/Family/Family";
import { FamilyDetail } from "./pages/CareGiverPages/FamilyDetails/FamilyDetails";
import NotificationPages from "./sections/Common/NotificationPages/NotificationPages";
import CareGiverDashboard from "./pages/CareGiverPages/CareGiverDashboard/CareGiverDashboard";
import EarningPayment from "./pages/CareGiverPages/EarningPayment/EarningPayment";
import ACHForm from "./pages/CareGiverPages/EarningPayment/AddPaymentMethod";

const router = createBrowserRouter([
  // { path: "/login", element: <Login /> },
  {
    element: <ProcessLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/join-now", element: <SelectUserType /> },
      { path: "/family-accounts-register", element: <FamilyAcc /> },
      { path: "/caregiver-accounts-register", element: <CaregiverAcc /> },
    ],
  },

  {
    element: <Layout />, // Common layout for all pages
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/faq", element: <Faq /> },
      { path: "/contact", element: <Contact /> },
      { path: "/subscription", element: <Subscription /> },
     
      { path: "/resources", element: <Resources /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/cookie-policy", element: <CookiePolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "*", element: <Home /> }, // fallback for unknown routes
    ],
  },
  {
    element: <FamilyLayout />,
    children: [
      { path: "/family", element: <HomeFamily /> },
      { path: "/family/care-givers", element: <Caregiver /> },
      { path: "/family/care-givers/profile/:id", element: <CaregiverDetail /> },
      { path: "/family/wishlist", element: <WhislistPage /> },
      { path: "/family/messages", element: <FamilyChat /> },
      { path: "/family/jobs", element: <Jobs /> },
      { path: "/family/jobs/add-job", element: <AddJob /> },
      { path: "/family/jobs/edit-job", element: <EditJob /> },
      { path: "/family/account-settings", element: <AccountSettings /> },
      {
        path: "/family/account-settings/edit-profile",
        element: <EditProfile />,
      },
      { path: "/family/subscription", element: <Subscription /> },
      { path: "/family/security", element: <SecuritySettings /> },
      { path: "/family/help-center", element: <HelpCenter /> },
      { path: "/family/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/family/cookie-policy", element: <CookiePolicy /> },
      { path: "/family/terms-of-service", element: <TermsOfService /> },
      { path: "/family/services", element: <Services /> },
      { path: "/family/about", element: <About /> },
      { path: "/family/faq", element: <Faq /> },
      { path: "/family/contact", element: <Contact /> },
    ],
  },

  {
    element: <CaregiverLayout />,
    children: [
      { path: "/care-giver", element: <HomeCareGiver /> },
      { path: "/care-giver/familys", element: <Family /> },
      { path: "/care-giver/familys/profile/:id", element: <FamilyDetail /> },
      { path: "/care-giver/dashboard", element: <CareGiverDashboard /> },
      { path: "/care-giver/messages", element: <FamilyChat /> },
      { path: "/care-giver/wishlist", element: <WhislistPage /> },
      { path: "/care-giver/services", element: <Jobs /> },
       { path: "/care-giver/notifications", element: <NotificationPages /> },
      { path: "/care-giver/services/add-service", element: <AddJob /> },
      { path: "/care-giver/services/edit-service", element: <EditJob /> },
      { path: "/care-giver/account-settings", element: <AccountSettingss /> },
      {
        path: "/care-giver/account-settings/edit-profile",
        element: <EditProfilecaregiver />,
      },
      { path: "/care-giver/subscription", element: <Subscription /> },
      { path: "/care-giver/security", element: <SecuritySettings /> },
      { path: "/care-giver/help-center", element: <HelpCenter /> },
      { path: "/care-giver/earnings-payments", element: <EarningPayment/> },
      { path: "/care-giver/add-payment-methods", element: <ACHForm/> },
      { path: "/care-giver/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/care-giver/cookie-policy", element: <CookiePolicy /> },
      { path: "/care-giver/terms-of-service", element: <TermsOfService /> },
      { path: "/care-giver/services", element: <Services /> },
      { path: "/care-giver/about", element: <About /> },
      { path: "/care-giver/faq", element: <Faq /> },
      { path: "/care-giver/contact", element: <Contact /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
