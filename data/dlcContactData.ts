
// data/dlcContactData.ts

// Raw XML strings for blocks with DLC "Contact"
// The xsi:type attribute has been removed from Definition tags.
export const dlcContactRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>ExtendedPistonBase</TypeId>
        <SubtypeId>LargePistonBaseReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBaseReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonReskin.dds</Icon>
    <Description>Description_Piston</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <Model>Models\\Cubes\\Large\\PistonReskinBase.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>ExtendedPistonBaseReskin</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>PistonTop</TypeId>
        <SubtypeId>LargePistonTopReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonTopReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonReskinTop.dds</Icon>
    <Description>Description_PistonTop</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\PistonReskinTop.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="LargeTube" Count="8" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>PistonTopReskin</BlockPairName>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ExtendedPistonBase</TypeId>
        <SubtypeId>SmallPistonBaseReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBaseReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonReskin.dds</Icon>
    <Description>Description_Piston</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <Model>Models\\Cubes\\Small\\PistonReskinBase.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>ExtendedPistonBaseReskin</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>PistonTop</TypeId>
        <SubtypeId>SmallPistonTopReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonTopReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonReskinTop.dds</Icon>
    <Description>Description_PistonTop</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\PistonReskinTop.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>PistonTopReskin</BlockPairName>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>LargeBlockSmallGate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallGate</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SmallGate.dds</Icon>
    <Description>Description_Gate</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="2" z="1" />
    <Model>Models\\Cubes\\Large\\SmallGate.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="200" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Motor" Count="10" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="100" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>SmallGate</BlockPairName>
    <BuildTimeSeconds>32</BuildTimeSeconds>
    <PCU>115</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>LargeBlockEvenWideDoor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_EvenWideDoor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\EvenWideDoor.dds</Icon>
    <Description>Description_Gate</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="4" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\EvenWideDoor.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="200" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Motor" Count="10" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="100" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>EvenWideDoor</BlockPairName>
    <BuildTimeSeconds>32</BuildTimeSeconds>
    <PCU>115</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>RadioAntenna</TypeId>
        <SubtypeId>LargeBlockCompactRadioAntennaReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CompactAntennaReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CompactAntennaReskin.dds</Icon>
    <Description>Description_RadioAntenna</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CompactAntennaReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="InteriorPlate" Count="80" />
        <Component Subtype="SmallTube" Count="30" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="RadioCommunication" Count="40" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="RadioCommunication" Index="0" />
    <BlockPairName>CompactAntennaReskin</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>RadioAntenna</TypeId>
        <SubtypeId>SmallBlockCompactRadioAntennaReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CompactAntennaReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CompactAntennaReskinSmall.dds</Icon>
    <Description>Description_RadioAntenna</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\CompactAntennaReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="InteriorPlate" Count="3" />
        <Component Subtype="SmallTube" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="RadioCommunication" Count="4" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="RadioCommunication" Index="0" />
    <BlockPairName>CompactAntennaReskin</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockModularBridgeCockpit</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ModularBridgeCockpit</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCockpit.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCockpit.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Computer" Count="100" />
        <Component Subtype="BulletproofGlass" Count="30" />
        <Component Subtype="InteriorPlate" Count="30" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>ModularBridgeCockpit</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCorner.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCorner.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCorner</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCornerFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCornerFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCornerFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCornerFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCornerFloorless</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeRaisedSlopedCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitRaisedSlopedCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeRaisedSlopedCorner.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeRaisedSlopedCorner.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="12" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="12" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitRaisedSlopedCorner</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeRaisedSlopedCornerFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitRaisedSlopedCornerFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeRaisedSlopedCornerFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeRaisedSlopedCornerFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="12" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="12" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitRaisedSlopedCornerFloorless</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeHalfSlopedCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitHalfSlopedCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeHalfSlopedCorner.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeHalfSlopedCorner.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitHalfSlopedCorner</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeHalfSlopedCornerFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitHalfSlopedCornerFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeHalfSlopedCornerFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeHalfSlopedCornerFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitHalfSlopedCornerFloorless</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCorner2x1BaseL</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCorner2x1Base</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCorner2x1baseL.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCorner2x1BaseL.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCorner2x1BaseL</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCorner2x1BaseLFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCorner2x1BaseFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCorner2x1baseLFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCorner2x1BaseLFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCorner2x1BaseLFloorless</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCorner2x1BaseR</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCorner2x1BaseR</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCorner2x1baseR.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCorner2x1BaseR.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCorner2x1BaseR</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeCorner2x1BaseRFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCorner2x1BaseRFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCorner2x1baseRFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCorner2x1BaseRFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitCorner2x1BaseRFloorless</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ButtonPanel</TypeId>
        <SubtypeId>LargeBlockModularBridgeButtonPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitButtonPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeButtonPanel.dds</Icon>
    <Description>Description_ButtonPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeButtonPanel.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="6" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="BulletproofGlass" Count="30" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitButtonPanel</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeEmpty</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitEmpty</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeGate.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeGate.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="6" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="30" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitEmpty</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeFloor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitFloor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeGateFloor.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeGateFloor.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="6" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="30" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitFloor</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeSideL</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitSideL</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCap_L.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCap_L.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitSideL</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeSideR</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitSideR</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeCap_R.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeCap_R.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="4" />
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitSideR</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeSlopedCornerBase</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCornerBase</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeSlopedCornerBase.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeSlopedCornerBase.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitDiagonalSlope</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockModularBridgeSlopedCornerBaseFloorless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BridgeCockpitCornerBaseFloorless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BridgeSlopedCornerBaseFloorless.dds</Icon>
    <Description>Description_ModularBridgeCockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BridgeSlopedCornerBaseFloorless.mwm</Model>
    <Components>
        <Component Subtype="Girder" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>BridgeCockpitDiagonalSlopeFloorless</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>LargeBlockFloodlight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Floodlight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLight.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Large\\FloodLight.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8"></Component>
        <Component Subtype="Girder" Count="10"></Component>
        <Component Subtype="InteriorPlate" Count="10"></Component>
        <Component Subtype="Construction" Count="20"></Component>
        <Component Subtype="BulletproofGlass" Count="4"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLight</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>LargeBlockFloodlightAngled</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightAngled</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightAngled.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Large\\FloodLightAngled.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8"></Component>
        <Component Subtype="Girder" Count="10"></Component>
        <Component Subtype="InteriorPlate" Count="10"></Component>
        <Component Subtype="Construction" Count="20"></Component>
        <Component Subtype="BulletproofGlass" Count="4"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightAngled</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>LargeBlockFloodlightCornerL</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightCornerL</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightCornerL.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Large\\FloodLightCornerL.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8"></Component>
        <Component Subtype="Girder" Count="10"></Component>
        <Component Subtype="InteriorPlate" Count="10"></Component>
        <Component Subtype="Construction" Count="20"></Component>
        <Component Subtype="BulletproofGlass" Count="4"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightCornerL</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>LargeBlockFloodlightCornerR</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightCornerR</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightCornerR.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Large\\FloodLightCornerR.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8"></Component>
        <Component Subtype="Girder" Count="10"></Component>
        <Component Subtype="InteriorPlate" Count="10"></Component>
        <Component Subtype="Construction" Count="20"></Component>
        <Component Subtype="BulletproofGlass" Count="4"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightCornerR</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Floodlight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLight_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLight.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLight</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlightAngled</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightAngled</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightAngled_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLightAngled.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightAngled</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlightCornerL</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightCornerL</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightCornerL_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLightCornerL.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightCornerL</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlightCornerR</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightCornerR</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightCornerR_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLightCornerR.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightCornerR</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlightDown</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightDown</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightDown_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLightDown.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightDown</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFloodlightAngledRotated</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FloodlightAngledRotated</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FloodLightAngledRotated_small.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FloodLightAngledRotated.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1"></Component>
        <Component Subtype="Girder" Count="4"></Component>
        <Component Subtype="InteriorPlate" Count="1"></Component>
        <Component Subtype="Construction" Count="1"></Component>
        <Component Subtype="BulletproofGlass" Count="2"></Component>
    </Components>
    <CriticalComponent Subtype="Construction" Index="0"></CriticalComponent>
    <BlockPairName>FloodLightRotated</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LargeMissileTurret</TypeId>
        <SubtypeId>LargeMissileTurretReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MissileTurretReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RocketTurretReskinLarge.dds</Icon>
    <Description>Description_MissileTurret</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <Model>Models\\Cubes\\Large\\RocketTurretReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="35" />
        <Component Subtype="MetalGrid" Count="15" />
        <Component Subtype="LargeTube" Count="6" />
        <Component Subtype="Motor" Count="16" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SteelPlate" Count="30" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>MissileTurretReskin</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>275</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LargeMissileTurret</TypeId>
        <SubtypeId>SmallMissileTurretReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MissileTurretReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RocketTurretReskinSmall.dds</Icon>
    <Description>Description_MissileTurret</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="5" z="5" />
    <Model>Models\\Cubes\\Small\\RocketTurretReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="MetalGrid" Count="5" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>MissileTurretReskin</BlockPairName>
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <PCU>100</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LargeGatlingTurret</TypeId>
        <SubtypeId>LargeGatlingTurretReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GatlingTurretReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GatlingTurretReskinLarge.dds</Icon>
    <Description>Description_GatlingTurret</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <Model>Models\\Cubes\\Large\\GatlingTurretReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="MetalGrid" Count="15" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="30" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>GatlingTurretReskin</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>225</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LargeGatlingTurret</TypeId>
        <SubtypeId>SmallGatlingTurretReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_GatlingTurretReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\GatlingTurretReskinSmall.dds</Icon>
    <Description>Description_GatlingTurret</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="5" z="5" />
    <Model>Models\\Cubes\\Small\\GatlingTurretReskin.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="MetalGrid" Count="5" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>GatlingTurretReskin</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>225</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCaptainDesk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CaptainDesk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CaptainDesk.dds</Icon>
    <Description>Description_Desk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CaptainDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>CaptainDesk</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>45</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Jukebox</TypeId>
        <SubtypeId>SmallBlockJukeboxReskin</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallBlockJukeboxReskin</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\jukeboxSmall.dds</Icon>
    <Description>Description_Jukebox</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\Jukebox.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="InteriorPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>JukeboxReskin</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallBlockFirstAidCabinet</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_FirstAidCabinet</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\FirstAidStation.dds</Icon>
    <Description>Description_FirstAidCabinet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1"></Size>
    <Model>Models\\Cubes\\Small\\FirstAidStation.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CryoChamber</TypeId>
        <SubtypeId>SmallBlockBunkBed</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BunkBed</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BunkBed_Small.dds</Icon>
    <Description>Description_Bed</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="2" z="4" />
    <Model>Models\\Cubes\\Small\\BunkBed_Small.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>BunkBed</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockKitchenSink</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_KitchenSink</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Sink.dds</Icon>
    <Description>Description_KitchenSet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="2" />
    <Model>Models\\Cubes\\Small\\Sink.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="2" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="SmallTube" Index="0" />
    <BlockPairName>KitchenSink</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallBlockKitchenOven</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_KitchenOven</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Oven.dds</Icon>
    <Description>Description_KitchenSet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="2" z="2" />
    <Model>Models\\Cubes\\Small\\Oven.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="8" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="BulletproofGlass" Count="4" />
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>KitchenOven</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>5</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallBlockKitchenMicrowave</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_KitchenMicrowave</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Microwave.dds</Icon>
    <Description>Description_KitchenSet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="1" z="2" />
    <Model>Models\\Cubes\\Small\\Microwave.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="BulletproofGlass" Count="2" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>KitchenMicrowave</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>5</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallBlockKitchenFridge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_KitchenFridge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\MiniFridge.dds</Icon>
    <Description>Description_KitchenSet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="2" />
    <Model>Models\\Cubes\\Small\\MiniFridge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="BulletproofGlass" Count="2" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>KitchenFridge</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockKitchenCoffeeMachine</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_KitchenCoffeeMachine</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CoffeeMachine.dds</Icon>
    <Description>Description_KitchenSet</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <Model>Models\\Cubes\\Small\\CoffeeMachine.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>KitchenCoffeeMachine</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>Contact</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>SmallBlockModularContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ModularCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CargoContainerReskin_Small.dds</Icon>
    <Description>Description_MediumCargoContainer</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="7" y="3" z="5" />
    <Model>Models\\Cubes\\Small\\CargoContainerReskin_Small.mwm</Model>
    <Components>                
        <Component Subtype="InteriorPlate" Count="35" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="InteriorPlate" Count="15" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>ModularCargoContainer</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Contact</DLC>
</Definition>`
// ... any other "Contact" DLC blocks
];