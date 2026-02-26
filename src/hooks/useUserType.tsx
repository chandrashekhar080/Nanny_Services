export const useUserType = () => {
  const userType = localStorage.getItem("UserType") || "family";
  return userType; // "family" or "caregiver"
};
