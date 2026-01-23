import { MOCK_INSTITUTIONS } from "@/constants/socialData";
import { LeaderboardRow } from "./LeaderboardRow";
import { useAppStore } from "@/store/useAppStore";

export const LeaderboardList = () => {
    const { profile } = useAppStore();
    // Show all institutions in one list
    const allInstitutions = MOCK_INSTITUTIONS;

    return (
        <div className="px-4 pb-6">
            <div className="space-y-2">
                {allInstitutions.map((institution, index) => (
                    <LeaderboardRow
                        key={institution.shortName}
                        institution={institution}
                        isUserSchool={institution.shortName === profile.institution}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
