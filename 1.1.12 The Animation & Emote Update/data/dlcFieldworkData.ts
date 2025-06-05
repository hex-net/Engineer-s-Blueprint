
// XML strings for blocks with DLC "Fieldwork"
export const dlcFieldworkRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>OxygenGenerator</TypeId>
        <SubtypeId>LargeBlockOxygenGeneratorLab</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_OxygenGeneratorLab</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Lab_O2H2_Generator.dds</Icon>
    <Description>Description_OxygenGenerator</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Lab_O2H2_Generator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="160" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="BulletproofGlass" Count="40" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>50</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenGenerator</TypeId>
        <SubtypeId>SmallBlockOxygenGeneratorLab</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_OxygenGeneratorLab</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Lab_O2H2_Generator_Small.dds</Icon>
    <Description>Description_OxygenGenerator</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\Lab_O2H2_Generator_Small.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="6" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="BulletproofGlass" Count="3" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>50</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CryoChamber</TypeId>
        <SubtypeId>LargeBlockCryoLabVat</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CryoLabVat</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\vatLab.dds</Icon>
    <Description>Description_LabVat</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\VatLab.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Medical" Count="3" />
        <Component Subtype="Computer" Count="30" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CorridorRound</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRound</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_Straight.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_Straight.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRound</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>CorridorRoundLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_Light.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <ModelOffset x="0" y="0" z="0"></ModelOffset>
    <Model>Models\\Cubes\\Large\\CorridorRound_Light.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRoundLight</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>20</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CorridorRoundCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_Corner.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_Corner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRoundCorner</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CorridorRoundT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_T.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_T.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="55" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRoundT</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CorridorRoundX</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundX</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_X.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_X.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRoundX</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CorridorRoundTransition</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundTransition</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_Flat.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_Flat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CorridorRoundFlat</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>CorridorRoundDoor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CorridorRoundDoor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CorridorRound_Door.dds</Icon>
    <Description>Description_Door</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CorridorRound_Door.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SteelPlate" Count="30" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>RoundDoor</BlockPairName>
    <BuildTimeSeconds>26</BuildTimeSeconds>
    <PCU>115</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorCenter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorCenter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorCenter.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorCenter.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorCenter</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorCenterMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorCenter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorCenter.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorCenterMirrored.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorCenterMirrored</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorEdge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorEdge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorEdge.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorEdge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorEdge</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorEdgeMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorEdge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorEdge.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorEdgeMirrored.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorEdgeMirrored</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorPassage</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorPassage</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorPassage.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorPassage.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorPassage</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorPassageMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorPassage</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorPassage.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorPassageMirrored.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorPassageMirrored</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorDecal</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorDecal</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorDecal.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorDecal.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorDecal</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorDecalMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorDecal</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorDecal.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorDecalMirrored.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorDecalMirrored</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockFloorSlab</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorSlab</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorSlab.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="1" z="3" />
    <Model>Models\\Cubes\\Large\\DecorativeFloorSlab.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="SteelPlate" Count="80" />
        <Component Subtype="Construction" Count="80" />
        <Component Subtype="SteelPlate" Count="80" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorSlab</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockFloorCenter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorCenter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorSmall.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\DecorativeFloor.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorCenter</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockFloorCenterMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorCenter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorSmall.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\DecorativeFloorMirrored.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorCenterMirrored</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockFloorSlab</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloorSlab</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DecorativeFloorSlabSmall.DDS</Icon>
    <Description>Description_DecorativeFloor</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="1" z="3" />
    <Model>Models\\Cubes\\Small\\DecorativeFloorSlab.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="8" />
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="SteelPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FloorSlab</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockLabDeskSeat</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabDeskSeat</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabDeskWithSeat.dds</Icon>
    <Description>Description_LabDesk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabDeskWithSeat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>			
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>LabDeskSeat</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockLabDesk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabDesk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabDesk.dds</Icon>
    <Description>Description_LabDeskChairless</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
		<Component Subtype="Motor" Count="2" />
		<Component Subtype="Detector" Count="4" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>LabDesk</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLabCornerDesk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabCornerDesk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabCornerDesk.dds</Icon>
    <Description>Description_LabDeskChairless</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabCornerDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Detector" Count="4" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>LabCornerDesk</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LCDPanelsBlock</TypeId>
        <SubtypeId>LargeBlockLabDeskMicroscope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabDeskMicroscope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\MicroscopeDesk.dds</Icon>
    <Description>Description_LabDeskChairless</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\MicroscopeDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Detector" Count="8" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="BulletproofGlass" Count="6" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>LabDeskMicroscope</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockLabSink</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabSink</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabSink.dds</Icon>
    <Description>Description_LabSink</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabSink.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>LabSink</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLabCabinet</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabCabinet</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabCabinet.dds</Icon>
    <Description>Description_LabCabinet</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabCabinet.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SmallTube" Count="8" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="BulletproofGlass" Count="2" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>LabCabinet</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ExhaustBlock</TypeId>
        <SubtypeId>LargeExhaustCap</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ExhaustCap</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ExhaustCap.dds</Icon>
    <Description>Description_ExhaustPipe</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\ExhaustCap.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ExhaustCap</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>50</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ExhaustBlock</TypeId>
        <SubtypeId>SmallExhaustCap</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ExhaustCap</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ExhaustCapSmall.dds</Icon>
    <Description>Description_ExhaustPipe</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\ExhaustCapSmall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ExhaustCap</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>50</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesStraight1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesStraight1</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipesStraight1.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesStraight1.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="12" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesStraight1</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesStraight2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesStraight2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipesStraight2.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesStraight2.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="12" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesStraight2</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesEnd</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesEnd</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipesEnd1.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesEnd1.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="12" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesEnd</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipesJunctionBox.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesJunctionBox.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="LargeTube" Count="14" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesJunction</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesCornerOuter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesCornerOuter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipesCornerOuter.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesCornerOuter.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="LargeTube" Count="6" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesCornerOuter</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesCorner</DisplayName>
	<Icon>Textures\\GUI\\Icons\\Cubes\\PipesCorner.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesCorner.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="12" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesCorner</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockPipesCornerInner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipesCornerInner</DisplayName>
	<Icon>Textures\\GUI\\Icons\\Cubes\\PipesCornerInner.dds</Icon>
    <Description>Description_Pipes</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PipesCornerInner.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="18" />
        <Component Subtype="Construction" Count="15" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>PipesCornerInner</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>LargeFreezer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabFreezer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Lab_Freezer_Block.dds</Icon>
    <Description>Description_LabFreezer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Lab_Freezer_Block.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LabFreezer</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LCDPanelsBlock</TypeId>
        <SubtypeId>LabEquipment1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabEquipment1</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\labEquipment1.dds</Icon>
    <Description>Description_LabEquipment</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabEquipment1.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="4" />
				<Component Subtype="Detector" Count="4" />
        <Component Subtype="BulletproofGlass" Count="40" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LabEquipment1</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>20</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>LabEquipment2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabEquipment2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\labEquipment2.dds</Icon>
    <Description>Description_LabEquipment</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="2" />
    <Model>Models\\Cubes\\Large\\LabEquipment2.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="40" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="4" />
				<Component Subtype="LargeTube" Count="4" />
        <Component Subtype="BulletproofGlass" Count="100" />
        <Component Subtype="Construction" Count="30" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LabEquipment2</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>20</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LCDPanelsBlock</TypeId>
        <SubtypeId>LabEquipment3</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabEquipment3</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\labEquipment3.dds</Icon>
    <Description>Description_LabEquipment</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="3" />
    <Model>Models\\Cubes\\Large\\LabEquipment3.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="60" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Motor" Count="12" />
				<Component Subtype="Reactor" Count="2" />
        <Component Subtype="Superconductor" Count="8" />
        <Component Subtype="BulletproofGlass" Count="16" />
        <Component Subtype="Construction" Count="20" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LabEquipment3</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>20</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CryoChamber</TypeId>
        <SubtypeId>LargeBlockHalfBed</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfBed</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HalfBedBlock.dds</Icon>
    <Description>Description_Bed</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfBlockBed.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="14" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>HalfBed</BlockPairName>
    <BuildTimeSeconds>9</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CryoChamber</TypeId>
        <SubtypeId>LargeBlockHalfBedOffset</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfBedOffset</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OffsetHalfBedBlock.dds</Icon>
    <Description>Description_Bed</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfBlockBedOffset.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="14" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>HalfBedOffset</BlockPairName>
    <BuildTimeSeconds>9</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>Fieldwork</DLC>
</Definition>`
];