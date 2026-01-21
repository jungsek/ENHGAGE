import { MOCK_INSTITUTIONS } from "@/constants/socialData";
import { LeaderboardRow } from "./LeaderboardRow";

export const LeaderboardList = () => {
    // Skip top 3 since they're in the podium
    const remainingInstitutions = MOCK_INSTITUTIONS.slice(3);

    return (
        <div className="px-4 pb-6">
            <h3 className="text-xs font-din font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
                Full Rankings
            </h3>
            <div className="space-y-2">
                {remainingInstitutions.map((institution, index) => (
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
