// XML strings for blocks from the Grid AI Pack (commonly associated with these blocks)
// The xsi:type attribute has been removed from Definition tags.
export const dlcGridAIPackRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>Passage</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_Passage</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\passage.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\passage.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="74" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="48" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>Passage</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Passage2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Passage2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PassageStraight.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PassageStraight.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="74" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="48" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>Passage2Straight</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Passage2Wall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Passage2Side</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PassageWall.dds</Icon>
    <Description>Description_Passage</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PassageWall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="50" />
        <Component Subtype="Construction" Count="14" />
        <Component Subtype="SmallTube" Count="32" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>Passage2Wall</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeStairs</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Stairs</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\stairs.dds</Icon>
    <Description>Description_Stairs</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Stairs.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="40" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>Stairs</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeRamp</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Ramp</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ramp.dds</Icon>
    <Description>Description_Ramp</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Ramp.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="60" />
        <Component Subtype="Construction" Count="16" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>Ramp</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeSteelCatwalk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SteelCatwalk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\steel_catwalk.dds</Icon>
    <Description>Description_SteelCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\SteelCatwalk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SmallTube" Count="20" />
        <Component Subtype="InteriorPlate" Count="7" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>SteelCatwalk</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeSteelCatwalk2Sides</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SteelCatwalkTwoSides</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SteelCatwalk_2Sides.dds</Icon>
    <Description>Description_SteelCatwalk</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\SteelCatwalk_2Sides.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="7" />
        <Component Subtype="SmallTube" Count="25" />
        <Component Subtype="InteriorPlate" Count="12" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>LargeSteelCatwalk2Sides</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeSteelCatwalkCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SteelCatwalkCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SteelCatwalk_Corner.dds</Icon>
    <Description>Description_SteelCatwalk</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\SteelCatwalk_Corner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="7" />
        <Component Subtype="SmallTube" Count="25" />
        <Component Subtype="InteriorPlate" Count="12" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>LargeSteelCatwalkCorner</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeSteelCatwalkPlate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SteelCatwalkPlate</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SteelCatwalk_Plate.dds</Icon>
    <Description>Description_SteelCatwalk</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\SteelCatwalk_Plate.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="7" />
        <Component Subtype="SmallTube" Count="17" />
        <Component Subtype="InteriorPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>LargeSteelCatwalkPlate</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeCoverWall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FullCoverWall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\cover_wall_full.dds</Icon>
    <Description>Description_FullCoverWall</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CoverWall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>FullCoverWall</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeCoverWallHalf</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfCoverWall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\cover_wall.dds</Icon>
    <Description>Description_FullCoverWall</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CoverWallHalf.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>HalfCoverWall</BlockPairName>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeCoverWallHalfMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfCoverWallMirror</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\cover_wall_mirror.dds</Icon>
    <Description>Description_FullCoverWall</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CoverWallHalf_Mirror.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>HalfCoverWallMirrored</BlockPairName>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockInteriorWall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InteriorWall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\interior_wall.dds</Icon>
    <Description>Description_InteriorWall</Description>
    <CubeSize>Large</CubeSize>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <CubeDefinition>
        <CubeTopology>StandaloneBox</CubeTopology>
        <ShowEdges>false</ShowEdges>
        <Sides>
            <Side Model="Models\\Cubes\\Large\\InteriorWallSide.mwm" PatternWidth="1" PatternHeight="1" />
            <Side Model="Models\\Cubes\\Large\\InteriorWallTop.mwm" PatternWidth="1" PatternHeight="1" />
            <Side Model="Models\\Cubes\\Large\\InteriorWallSide.mwm" PatternWidth="1" PatternHeight="1" />
            <Side Model="Models\\Cubes\\Large\\InteriorWallSide.mwm" PatternWidth="1" PatternHeight="1" />
            <Side Model="Models\\Cubes\\Large\\InteriorWallBottom.mwm" PatternWidth="1" PatternHeight="1" />
            <Side Model="Models\\Cubes\\Large\\InteriorWallSide.mwm" PatternWidth="1" PatternHeight="1" />
        </Sides>
    </CubeDefinition>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>InteriorWall</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeInteriorPillar</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InteriorPillar</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\interior_pillar.dds</Icon>
    <Description>Description_InteriorPillar</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\InteriorPillar.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="25" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="4" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>InteriorPillar</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>PassengerSeatLarge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PassengerSeat</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PassengerSeat.dds</Icon>
    <Description>Description_PassengerSeat</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PassengerSeat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BlockPairName>PassengerSeat</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>PassengerSeatSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PassengerSeat</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PassengerSeat.dds</Icon>
    <Description>Description_PassengerSeat</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0.24" />
    <Model>Models\\Cubes\\Small\\PassengerSeat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BlockPairName>PassengerSeatOld</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <IsAirTight>false</IsAirTight>
    <Public>false</Public>
    <GuiVisible>false</GuiVisible>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>PassengerSeatSmallNew</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PassengerSeat</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PassengerSeat.dds</Icon>
    <Description>Description_PassengerSeat</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\PassengerSeat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BlockPairName>PassengerSeat</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>PassengerSeatSmallOffset</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PassengerSeatOffset</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OffsetPassengerSeat.dds</Icon>
    <Description>Description_PassengerSeat</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="3" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\PassengerSeat.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BlockPairName>OffsetPassengerSeat</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Ladder2</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_Ladder</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Ladder.dds</Icon>
    <Description>Description_Ladder</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size>
        <X>1</X>
        <Y>1</Y>
        <Z>1</Z>
    </Size>
    <ModelOffset>
        <X>0</X>
        <Y>0</Y>
        <Z>0</Z>
    </ModelOffset>
    <Model>Models\\Cubes\\large\\Ladder.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>Ladder2</BlockPairName>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Ladder2</TypeId>
        <SubtypeId>LadderShaft</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LadderShaft</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LadderShaft.dds</Icon>
    <Description>Description_Ladder</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size>
        <X>1</X>
        <Y>1</Y>
        <Z>1</Z>
    </Size>
    <ModelOffset>
        <X>0</X>
        <Y>0</Y>
        <Z>0</Z>
    </ModelOffset>
    <Model>Models\\Cubes\\large\\LadderShaft.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SmallTube" Count="50" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>LadderShaft</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Ladder2</TypeId>
        <SubtypeId>LadderSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Ladder</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Ladder.dds</Icon>
    <Description>Description_Ladder</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size>
        <X>3</X>
        <Y>5</Y>
        <Z>5</Z>
    </Size>
    <ModelOffset>
        <X>0</X>
        <Y>0</Y>
        <Z>0</Z>
    </ModelOffset>
    <Model>Models\\Cubes\\large\\Ladder.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>Ladder2</BlockPairName>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuct1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuct1</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctStraight01.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctStraight01.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuct1</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuct2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuct2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctStraight02.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctStraight02.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuct2</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>AirDuctLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctStraight03.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctStraight03.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuctLight</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>20</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuctCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctCorner.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuctCorner</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuctT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctTSection.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctTSection.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuctT</BlockPairName>
    <BuildTimeSeconds>13</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuctX</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctX</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctXSection.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctXSection.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuctX</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuctRamp</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctRamp</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctRamp.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctRamp.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="1" />
    <BlockPairName>AirDuctRamp</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>AirDuctGrate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirDuctGrate</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirDuctGrate.dds</Icon>
    <Description>Description_AirDucts</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AirDuctGrate.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>AirDuctGrate</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
</Definition>`
];
