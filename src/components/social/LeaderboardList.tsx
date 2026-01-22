import { MOCK_INSTITUTIONS } from "@/constants/socialData";
import { LeaderboardRow } from "./LeaderboardRow";

export const LeaderboardList = () => {
    // Show all institutions in one list
    const allInstitutions = MOCK_INSTITUTIONS;

    return (
        <div className="px-4 pb-6">
            <div className="space-y-2">
                {allInstitutions.map((institution, index) => (
                    <LeaderboardRow
                        key={institution.shortName}
                        institution={institution}
                        isUserSchool={institution.shortName === "NP"}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};
