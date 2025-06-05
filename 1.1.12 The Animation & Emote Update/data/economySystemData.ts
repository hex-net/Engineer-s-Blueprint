// data/economySystemData.ts

// Raw XML strings for Economy System Definition
export const economySystemRawXml: string[] = [
`
    <Definition>
        <Id Type="MyObjectBuilder_BankingSystemDefinition" Subtype="BankingSystem" />

        <Icon>Textures\\GUI\\Icons\\SpaceCredits.dds</Icon>
        <CurrencyFullName>Space Credits</CurrencyFullName>
        <CurrencyShortName>SC</CurrencyShortName>
        <StartingBalance>10000</StartingBalance>
        <AccountLogLen>25</AccountLogLen>

        <PhysicalItemId Type="MyObjectBuilder_PhysicalObject" Subtype="SpaceCredit" />
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectbuilder_SessionComponentEconomyDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>

        <PerFactionInitialCurrency>100000000</PerFactionInitialCurrency>
        <DeepSpaceStationStoreBonus>0.05</DeepSpaceStationStoreBonus>
        <DeepSpaceStationContractBonus>1.1</DeepSpaceStationContractBonus>

        <RepMult_Pos_Owner>1</RepMult_Pos_Owner>
        <RepMult_Pos_Friend>0.25</RepMult_Pos_Friend>
        <RepMult_Pos_Neutral>0</RepMult_Pos_Neutral>
        <RepMult_Pos_Enemy>-1.25</RepMult_Pos_Enemy>

        <RepMult_Neg_Owner>1</RepMult_Neg_Owner>
        <RepMult_Neg_Friend>0.5</RepMult_Neg_Friend>
        <RepMult_Neg_Neutral>0</RepMult_Neg_Neutral>
        <RepMult_Neg_Enemy>-0.25</RepMult_Neg_Enemy>

        <ReputationHostileMin>-1500</ReputationHostileMin>
        <ReputationHostileMid>-1000</ReputationHostileMid>
        <ReputationNeutralMin>-500</ReputationNeutralMin>
        <ReputationNeutralMid>0</ReputationNeutralMid>
        <ReputationFriendlyMin>500</ReputationFriendlyMin>
        <ReputationFriendlyMid>1000</ReputationFriendlyMid>
        <ReputationFriendlyMax>1500</ReputationFriendlyMax>

        <ReputationLevelValue>1000</ReputationLevelValue>
        <ReputationPlayerDefault>0</ReputationPlayerDefault>

        <Station_Distance_MinimalFromOtherStation>10000</Station_Distance_MinimalFromOtherStation>

        <PirateId>
            <TypeId>MyObjectBuilder_FactionDefinition</TypeId>
            <SubtypeId>SpacePirates</SubtypeId>
        </PirateId>
        <DatapadDefinition>
            <TypeId>MyObjectBuilder_Datapad</TypeId>
            <SubtypeId>Datapad</SubtypeId>
        </DatapadDefinition>
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_SessionComponentContractSystemDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>
        <ContractPerPlayerLimit>3</ContractPerPlayerLimit>
    </Definition>
`
];
