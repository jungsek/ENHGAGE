
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppStore } from "@/store/useAppStore";
import { MainLayout } from "@/layouts/MainLayout";
import { OnboardingFlow } from "@/screens/OnboardingFlow";

// Authenticated Screens
import { HomeScreen } from "@/screens/HomeScreen";
import { LearningScreen } from "@/screens/LearningScreen";
import { MapScreen } from "@/screens/MapScreen";
import { SocialScreen } from "@/screens/SocialScreen";
import { RewardsScreen } from "@/screens/RewardsScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { ProgrammeDetailScreen } from "@/screens/ProgrammeDetailScreen";

export default function App() {
  const { hasCompletedOnboarding } = useAppStore();

  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding/*" element={<OnboardingFlow />} />

          {/* Protected App Routes */}
          <Route path="/app" element={
            hasCompletedOnboarding ? <MainLayout /> : <Navigate to="/onboarding" replace />
          }>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="learn" element={<LearningScreen />} />
            <Route path="map" element={<MapScreen />} />
            <Route path="map/programme/:id" element={<ProgrammeDetailScreen />} />
            <Route path="social" element={<SocialScreen />} />
            <Route path="rewards" element={<RewardsScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}