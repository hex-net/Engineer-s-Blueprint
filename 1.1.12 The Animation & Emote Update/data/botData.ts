// data/botData.ts

// Raw XML strings for Bot definitions
export const botDataRawXml: string[] = [
`
<Definitions>
    <Bots>
        <Bot xsi:type="MyObjectBuilder_AnimalBotDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Id>
                <TypeId>MyObjectBuilder_AnimalBot</TypeId>
                <SubtypeId>SpaceSpider</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Space_spider</DisplayName>
            <Icon>Textures\\GUI\\Icons\\SpawnDeer.dds</Icon>
            <BotModel>Space_spider</BotModel>
            <BotBehaviorTree Subtype="SpiderBehavior" />
            <BehaviorType>Spider</BehaviorType>
            <TargetType>Spider</TargetType>
            <Public>true</Public>
            <AvailableInSurvival>false</AvailableInSurvival>
            <RemoveAfterDeath>true</RemoveAfterDeath>
            <InventoryContentGenerated>true</InventoryContentGenerated>
            <InventoryContainerTypeId>
                <TypeId>ContainerTypeDefinition</TypeId>
                <SubtypeId>SpiderLoot</SubtypeId>
            </InventoryContainerTypeId>
            <FactionTag>SPID</FactionTag>
            <AttackLength>1000</AttackLength>
            <AttackRadius>0.9</AttackRadius>
            <CharacterDamage>35</CharacterDamage>
            <GridDamage>0</GridDamage>
            <TargetGrids>false</TargetGrids>
            <TargetCharacters>true</TargetCharacters>
            <AttackSound>ArcBotSpiderAttackClaw</AttackSound>
        </Bot>

        <Bot xsi:type="MyObjectBuilder_AnimalBotDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Id>
                <TypeId>MyObjectBuilder_AnimalBot</TypeId>
                <SubtypeId>SpaceSpiderBlack</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Space_spider_black</DisplayName>
            <Icon>Textures\\GUI\\Icons\\SpawnDeer.dds</Icon>
            <BotModel>Space_spider_black</BotModel>
            <BotBehaviorTree Subtype="SpiderBehavior" />
            <BehaviorType>Spider</BehaviorType>
            <TargetType>Spider</TargetType>
            <Public>true</Public>
            <AvailableInSurvival>false</AvailableInSurvival>
            <RemoveAfterDeath>true</RemoveAfterDeath>
            <InventoryContentGenerated>true</InventoryContentGenerated>
            <InventoryContainerTypeId>
                <TypeId>ContainerTypeDefinition</TypeId>
                <SubtypeId>SpiderLoot</SubtypeId>
            </InventoryContainerTypeId>
            <FactionTag>SPID</FactionTag>
            <AttackLength>1000</AttackLength>
            <AttackRadius>0.9</AttackRadius>
            <CharacterDamage>35</CharacterDamage>
            <GridDamage>0</GridDamage>
            <TargetGrids>false</TargetGrids>
            <TargetCharacters>true</TargetCharacters>
            <AttackSound>ArcBotSpiderAttackClaw</AttackSound>
        </Bot>

        <Bot xsi:type="MyObjectBuilder_AnimalBotDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Id>
                <TypeId>MyObjectBuilder_AnimalBot</TypeId>
                <SubtypeId>SpaceSpiderBrown</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Space_spider_brown</DisplayName>
            <Icon>Textures\\GUI\\Icons\\SpawnDeer.dds</Icon>
            <BotModel>Space_spider_brown</BotModel>
            <BotBehaviorTree Subtype="SpiderBehavior" />
            <BehaviorType>Spider</BehaviorType>
            <TargetType>Spider</TargetType>
            <Public>true</Public>
            <AvailableInSurvival>false</AvailableInSurvival>
            <RemoveAfterDeath>true</RemoveAfterDeath>
            <InventoryContentGenerated>true</InventoryContentGenerated>
            <InventoryContainerTypeId>
                <TypeId>ContainerTypeDefinition</TypeId>
                <SubtypeId>SpiderLoot</SubtypeId>
            </InventoryContainerTypeId>
            <FactionTag>SPID</FactionTag>
            <AttackLength>1000</AttackLength>
            <AttackRadius>0.9</AttackRadius>
            <CharacterDamage>35</CharacterDamage>
            <GridDamage>0</GridDamage>
            <TargetGrids>false</TargetGrids>
            <TargetCharacters>true</TargetCharacters>
            <AttackSound>ArcBotSpiderAttackClaw</AttackSound>
        </Bot>

        <Bot xsi:type="MyObjectBuilder_AnimalBotDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Id>
                <TypeId>MyObjectBuilder_AnimalBot</TypeId>
                <SubtypeId>SpaceSpiderGreen</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Space_spider_green</DisplayName>
            <Icon>Textures\\GUI\\Icons\\SpawnDeer.dds</Icon>
            <BotModel>Space_spider_green</BotModel>
            <BotBehaviorTree Subtype="SpiderBehavior" />
            <BehaviorType>Spider</BehaviorType>
            <TargetType>Spider</TargetType>
            <Public>true</Public>
            <AvailableInSurvival>false</AvailableInSurvival>
            <RemoveAfterDeath>true</RemoveAfterDeath>
            <InventoryContentGenerated>true</InventoryContentGenerated>
            <InventoryContainerTypeId>
                <TypeId>ContainerTypeDefinition</TypeId>
                <SubtypeId>SpiderLoot</SubtypeId>
            </InventoryContainerTypeId>
            <FactionTag>SPID</FactionTag>
            <AttackLength>1000</AttackLength>
            <AttackRadius>0.9</AttackRadius>
            <CharacterDamage>35</CharacterDamage>
            <GridDamage>0</GridDamage>
            <TargetGrids>false</TargetGrids>
            <TargetCharacters>true</TargetCharacters>
            <AttackSound>ArcBotSpiderAttackClaw</AttackSound>
        </Bot>

        <Bot xsi:type="MyObjectBuilder_AnimalBotDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <Id>
                <TypeId>MyObjectBuilder_AnimalBot</TypeId>
                <SubtypeId>Wolf</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Space_Wolf</DisplayName>
            <Icon>Textures\\GUI\\Icons\\SpawnDeer.dds</Icon>
            <BotModel>Space_Wolf</BotModel>
            <BotBehaviorTree Subtype="WolfBehavior" />
            <BehaviorType>Wolf</BehaviorType>
            <TargetType>Wolf</TargetType>
            <Public>true</Public>
            <AvailableInSurvival>false</AvailableInSurvival>
            <RemoveAfterDeath>true</RemoveAfterDeath>
            <InventoryContentGenerated>true</InventoryContentGenerated>
            <InventoryContainerTypeId>
                <TypeId>ContainerTypeDefinition</TypeId>
                <SubtypeId>WolfLoot</SubtypeId>
            </InventoryContainerTypeId>
            <FactionTag>SPID</FactionTag>
            <AttackLength>1000</AttackLength>
            <AttackRadius>0.5</AttackRadius>
            <CharacterDamage>12</CharacterDamage>
            <GridDamage>0</GridDamage>
            <TargetGrids>false</TargetGrids>
            <TargetCharacters>true</TargetCharacters>
            <AttackSound>ArcBotWolfAttack</AttackSound>
        </Bot>
    </Bots>
</Definitions>
`
];
