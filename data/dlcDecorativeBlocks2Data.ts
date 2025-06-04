
// XML strings for blocks with DLC "DecorativeBlocks2"
// The xsi:type attribute has been removed from Definition tags.
export const dlcDecorativeBlocks2RawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>VendingMachine</TypeId>
        <SubtypeId>FoodDispenser</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FoodDispenser</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FoodDispenser.dds</Icon>
    <Description>Description_FoodDispenser</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\FoodDispenser.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Jukebox</TypeId>
        <SubtypeId>Jukebox</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Jukebox</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Jukebox.dds</Icon>
    <Description>Description_Jukebox</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Jukebox.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LCDPanelsBlock</TypeId>
        <SubtypeId>LabEquipment</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LabEquipment</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LabEquipment.dds</Icon>
    <Description>Description_LabEquipment</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LabEquipment.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="BulletproofGlass" Count="4" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LabEquipment</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Shower</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Shower</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Shower.dds</Icon>
    <Description>Description_Shower</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Shower.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="BulletproofGlass" Count="8" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>WindowWall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_WindowWall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\WindowWall.dds</Icon>
    <Description>Description_WindowWall</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\WindowWallCenter.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>WindowWall</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>WindowWallLeft</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_WindowWallLeft</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\WindowWallLeft.dds</Icon>
    <Description>Description_WindowWallLeft</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\WindowWallLeft.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="BulletproofGlass" Count="8" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>WindowWallLeft</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>WindowWallRight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_WindowWallRight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\WindowWallRight.dds</Icon>
    <Description>Description_WindowWallRight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\WindowWallRight.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="BulletproofGlass" Count="8" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>WindowWallRight</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LCDPanelsBlock</TypeId>
        <SubtypeId>MedicalStation</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MedicalStation</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\MedicalStation.dds</Icon>
    <Description>Description_MedicalStation</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\MedicalStation.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Medical" Count="1" />
        <Component Subtype="Display" Count="2" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>MedicalStation</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>TransparentLCDLarge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_TransparentLCD</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\TransparentLCD.dds</Icon>
    <Description>Description_TransparentLCD</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\TransparentLCD.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="BulletproofGlass" Count="10" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>TransparentLCD</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>TransparentLCDSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_TransparentLCD</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\TransparentLCD.dds</Icon>
    <Description>Description_TransparentLCD</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\TransparentLCD.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="BulletproofGlass" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>TransparentLCD</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Catwalk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalk.dds</Icon>
    <Description>Description_GratedCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalk.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="20" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>Catwalk</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkCorner.dds</Icon>
    <Description>Description_GratedCatwalkCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkCorner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="14" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="32" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkStraight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkStraight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkStraight.dds</Icon>
    <Description>Description_GratedCatwalkStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkStraight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="14" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="32" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkWall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkWall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkWall.dds</Icon>
    <Description>Description_GratedCatwalkWall</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkWall.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="26" />
        <Component Subtype="Construction" Count="8" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkRailingEnd</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkRailingEnd</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkRailingEnd.dds</Icon>
    <Description>Description_GratedCatwalkStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkRailingEnd.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="16" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="38" />
        <Component Subtype="Construction" Count="12" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkRailingHalfRight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkRailingHalfRight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkRailingHalfRight.dds</Icon>
    <Description>Description_GratedCatwalkWall</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkRailingHalfRight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="16" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="36" />
        <Component Subtype="Construction" Count="12" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingHalfRight</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkRailingHalfLeft</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedCatwalkRailingHalfLeft</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedCatwalkRailingHalfLeft.dds</Icon>
    <Description>Description_GratedCatwalkWall</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedCatwalkRailingHalfLeft.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="16" />
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SmallTube" Count="36" />
        <Component Subtype="Construction" Count="12" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingHalfLeft</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkHalf</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfGratedCatwalk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HalfGratedCatwalk.dds</Icon>
    <Description>Description_GratedCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfGratedCatwalk.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="Girder" Count="2" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>HalfGratedCatwalk</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkHalfRailing</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfGratedCatwalkRailing</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HalfGratedCatwalkRailing.dds</Icon>
    <Description>Description_GratedCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfGratedCatwalkRailing.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Girder" Count="2" />
        <Component Subtype="SmallTube" Count="22" />
        <Component Subtype="Construction" Count="8" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>HalfGratedCatwalkRailing</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkHalfCenterRailing</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfGratedCatwalkCenterRailing</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HalfGratedCatwalkInsideRailing.dds</Icon>
    <Description>Description_GratedCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfGratedCatwalkInsideRailing.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Girder" Count="2" />
        <Component Subtype="SmallTube" Count="16" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>HalfGratedCatwalkCenterRailing</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>CatwalkHalfOuterRailing</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HalfGratedCatwalkOuterRailing</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HalfGratedCatwalkOuterRailing.dds</Icon>
    <Description>Description_GratedCatwalk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\HalfGratedCatwalkOuterRailing.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Girder" Count="2" />
        <Component Subtype="SmallTube" Count="16" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>HalfGratedCatwalkOuterRailing</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>GratedStairs</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedStairs</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedStairs.dds</Icon>
    <Description>Description_GratedStairs</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedStairs.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="InteriorPlate" Count="16" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>GratedHalfStairs</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedHalfStairs</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedHalfStairs.dds</Icon>
    <Description>Description_GratedHalfStairs</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedHalfStairs.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="InteriorPlate" Count="8" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>GratedHalfStairsMirrored</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GratedHalfStairsMirrored</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GratedHalfStairsMirrored.dds</Icon>
    <Description>Description_GratedHalfStairs</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\GratedHalfStairsMirrored.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="InteriorPlate" Count="8" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="0" />
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingStraight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingStraight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingStraight.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingStraight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingStraight</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingDouble</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingDouble</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingDouble.dds</Icon>
    <Description>Description_RailingDouble</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingDouble.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Construction" Count="8" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingCorner.dds</Icon>
    <Description>Description_RailingCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingCorner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Construction" Count="8" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingDiagonal</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingDiagonal</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingDiagonal.dds</Icon>
    <Description>Description_RailingDiagonal</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingDiagonal.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="SmallTube" Count="9" />
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingHalfRight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingHalfRight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingHalfRight.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingHalfRight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingHalfRight</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingHalfLeft</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingHalfLeft</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingHalfLeft.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingHalfLeft.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingHalfLeft</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>RailingCenter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RailingCenter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RailingCenter.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\RailingCenter.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>RailingCenter</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Railing2x1Right</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_2x1RailingRight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\2x1RailingRight.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\2x1RailingRight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SmallTube" Count="7" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>2x1RailingRight</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>Railing2x1Left</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_2x1RailingLeft</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\2x1RailingLeft.dds</Icon>
    <Description>Description_RailingStraight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\2x1RailingLeft.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SmallTube" Count="7" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>2x1RailingLeft</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks2</DLC>
</Definition>`
// Add any other "DecorativeBlocks2" blocks here if missed
];