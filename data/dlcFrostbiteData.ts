
// XML strings for blocks with DLC "Frostbite"
export const dlcFrostbiteRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>RadioAntenna</TypeId>
        <SubtypeId>LargeBlockRadioAntennaDish</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AntennaDish</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AntennaDish.dds</Icon>
    <Description>Description_AntennaDish</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="3" z="5" />
    <Model>Models\\Cubes\\Large\\AntennaDish.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Girder" Count="120" />
        <Component Subtype="SteelPlate" Count="60" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="RadioCommunication" Count="40" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="RadioCommunication" Index="0" />
    <BuildTimeSeconds>60</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>LargeBlockGate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Gate</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Gate.dds</Icon>
    <Description>Description_Gate</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="2" z="1" />
    <Model>Models\\Cubes\\Large\\Gate.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="600" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SmallTube" Count="100" />
        <Component Subtype="Motor" Count="20" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Construction" Count="60" />
        <Component Subtype="SteelPlate" Count="200" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Gate</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>115</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>LargeBlockOffsetDoor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_OffsetDoor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OffsetDoor.dds</Icon>
    <Description>Description_OffsetDoor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\OffsetDoor.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="BulletproofGlass" Count="6" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>OffsetDoor</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>115</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody01</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody01</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_1.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody01.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" /> 
    <BlockPairName>DeadBody</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody02</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody02</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_2.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody02.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody03</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody03</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_3.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody03.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody04</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody04</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_4.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody04.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody05</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody05</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_5.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody05.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>DeadBody06</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeadBody06</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeadBody_6.dds</Icon>
    <Description>Description_DeadEngineer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeadBody06.mwm</Model>
    <Components>
        <Component Subtype="BulletproofGlass" Count="1" />
        <Component Subtype="RadioCommunication" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Frostbite</DLC>
</Definition>`
// ... other Frostbite DLC blocks
];