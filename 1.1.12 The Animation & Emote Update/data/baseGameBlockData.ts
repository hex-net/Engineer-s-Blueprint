// data/baseGameBlockData.ts

// Raw XML strings for base game blocks
// The xsi:type attribute has been removed from Definition tags to prevent parsing errors.
export const baseGameRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockArmorBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LightArmorBlock</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light_armor_cube.dds</Icon>
    <Description>Description_LightArmor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>Cube</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>LightArmorBlock</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockArmorSlope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LightArmorSlope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light_armor_slope.dds</Icon>
    <Description>Description_LightArmor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>Cube</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="3" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>LightArmorSlope</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockArmorCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LightArmorCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light_armor_corner.dds</Icon>
    <Description>Description_LightArmor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>Cube</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Components>
        <Component Subtype="SteelPlate" Count="3" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>LightArmorCorner</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockArmorCornerInv</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LightArmorInvCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light_armor_inv_corner.dds</Icon>
    <Description>Description_LightArmor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>Cube</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Components>
        <Component Subtype="SteelPlate" Count="16" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>LightArmorInvCorner</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeHeavyBlockArmorBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HeavyArmorBlock</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\heavy_armor_cube.dds</Icon>
    <Description>Description_HeavyArmor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>Cube</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Components>
        <Component Subtype="SteelPlate" Count="135" />
        <Component Subtype="MetalGrid" Count="50" />
        <Component Subtype="SteelPlate" Count="15" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>HeavyArmorBlock</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
  // ... (all other base game blocks from previous XMLs, with xsi:type removed) ...
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_Door</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\door.dds</Icon>
    <Description>Description_Door</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\door.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="InteriorPlate" Count="6" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="SteelPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Door</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>115</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Door</TypeId>
        <SubtypeId>SmallDoor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Door</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SmallDoor.dds</Icon>
    <Description>Description_Door</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="4" z="1" />
    <Model>Models\\Cubes\\Small\\door.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SteelPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Door</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>115</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirtightHangarDoor</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_AirtightHangarDoor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HangarDoor.dds</Icon>
    <Description>Description_HangarDoor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <Model>Models\\Cubes\\Large\\HangarDoor_base.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="250" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="40" />
        <Component Subtype="Motor" Count="16" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="SteelPlate" Count="100" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>AirtightHangarDoor</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>115</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirtightSlideDoor</TypeId>
        <SubtypeId>LargeBlockSlideDoor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirtightSlideDoor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SlideDoor.dds</Icon>
    <Description>Description_Door</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\SlideDoor.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="BulletproofGlass" Count="15" />
        <Component Subtype="SteelPlate" Count="15" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>AirtightSlide Door</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>115</PCU>
</Definition>`,
  // ... (Battery, Reactor, Hydrogen Engine, Solar Panel, Wind Turbine, Antenna, Beacon, etc. definitions from previous XMLs also belong here if they didn't have a DLC tag)

`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>ControlPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ControlPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Control Panel.dds</Icon>
    <Description>Description_ControlPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\ControlPanel.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>ControlPanel</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallControlPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ControlPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Control Panel.dds</Icon>
    <Description>Description_ControlPanel</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\ControlPanel.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>ControlPanel</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>LargeControlPanelPedestal</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ControlPanelPedestal</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\VanillaVerticalTerminalPanel.dds</Icon>
    <Description>Description_ControlPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\VanillaVerticalTerminalPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>ControlPanelPedestal</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TerminalBlock</TypeId>
        <SubtypeId>SmallControlPanelPedestal</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ControlPanelPedestal</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\VanillaVerticalTerminalPanel.dds</Icon>
    <Description>Description_ControlPanel</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <Model>Models\\Cubes\\Small\\VanillaVerticalTerminalPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>ControlPanelPedestal</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCockpit</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Cockpit2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Cockpit.dds</Icon>
    <Description>Description_ControlStation</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CockpitLarge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="100" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>CockpitLarge</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCockpitSeat</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Cockpit1</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CockpitSmall.dds</Icon>
    <Description>Description_Cockpit</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Cockpit.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Display" Count="8" />
        <Component Subtype="Computer" Count="100" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="60" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Cockpit</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>150</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>SmallBlockCockpit</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Cockpit1</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CockpitSmall.dds</Icon>
    <Description>Description_Cockpit</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <Model>Models\\Cubes\\Small\\cockpit.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Display" Count="5" />
        <Component Subtype="Computer" Count="15" />
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="BulletproofGlass" Count="30" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Cockpit</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>150</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>CockpitOpen</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Cockpit3</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CockpitOpen.dds</Icon>
    <Description>Description_FlightSeat</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CockpitOpen.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="100" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>CockpitOpen</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>RoverCockpit</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RoverCockpit</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RoverCockpit.dds</Icon>
    <Description>Description_RoverCockpit</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="3" z="3" />
    <Model>Models\\Cubes\\Small\\RoverCockpit.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>RoverCockpit</BlockPairName>
    <BuildTimeSeconds>24</BuildTimeSeconds>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Gyro</TypeId>
        <SubtypeId>LargeBlockGyro</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Gyroscope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\gyro.dds</Icon>
    <Description>Description_Gyroscope</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\gyroscope.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="500" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="MetalGrid" Count="50" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="SteelPlate" Count="100" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Gyroscope</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>50</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Gyro</TypeId>
        <SubtypeId>SmallBlockGyro</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Gyroscope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\gyro.dds</Icon>
    <Description>Description_Gyroscope</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Small\\gyroscope.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Gyroscope</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>50</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>OpenCockpitSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_OpenCockpitSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OpenCockpitSmall.dds</Icon>
    <Description>Description_OpenCockpitSmall</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <Model>Models\\Cubes\\Small\\OpenCockpitSmall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="15" />
        <Component Subtype="Display" Count="2" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>OpenCockpit</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCockpitSeatIndustrial</SubtypeId> <!-- Renamed from OpenCockpitLarge to match icon and likely intent -->
    </Id>
    <DisplayName>DisplayName_Block_OpenCockpitLarge</DisplayName> <!-- Keeping original for now, might need adjustment if this is actually "Industrial Seat" -->
    <Icon>Textures\\GUI\\Icons\\Cubes\\OpenCockpitLarge.dds</Icon> <!-- Icon suggests a simple seat, but might be an open version of the industrial one -->
    <Description>Description_OpenCockpitLarge</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\OpenCockpitLarge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="100" />
        <Component Subtype="Display" Count="6" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>OpenCockpit</BlockPairName> <!-- Original BlockPairName -->
    <BuildTimeSeconds>32</BuildTimeSeconds>
    <PCU>150</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>SmallBlockFlushCockpit</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CockpitFlush</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CockpitFlush.dds</Icon>
    <Description>Description_Cockpit</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="4" />
    <Model>Models\\Cubes\\Small\\CockpitFlush_LOD0.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Display" Count="5" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="BulletproofGlass" Count="40" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>FlushCockpit</BlockPairName>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <PCU>45</PCU>
</Definition>`,
// Added Gravity Blocks
`
<Definition>
    <Id>
        <TypeId>GravityGenerator</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_GravityGenerator</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\gravity_generator.dds</Icon>
    <Description>Description_GravityGenerator</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Sound>BlockGravityGen</Sound>
    <Model>Models\\Cubes\\Large\\GravityGenerator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="54" />
        <Component Subtype="GravityGenerator" Count="6" />
        <Component Subtype="Construction" Count="60" />
        <Component Subtype="SteelPlate" Count="56" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Computer" Count="40" />
        <Component Subtype="SteelPlate" Count="40" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\GravityGeneratorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\GravityGeneratorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\GravityGeneratorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>GravityGenerator</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>50</BuildTimeSeconds>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <MinFieldSize x="1" y="1" z="1"/>
    <MaxFieldSize x="150" y="150" z="150"/>
    <MinGravityAcceleration>-9.81</MinGravityAcceleration>
    <MaxGravityAcceleration>9.81</MaxGravityAcceleration>
    <RequiredPowerInput>0.56713</RequiredPowerInput>
    <DamageEffectName>Damage_GravGen_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>185</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>GravityGeneratorSphere</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_GravityGeneratorSphere</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\gravity_generator_spherical.dds</Icon>
    <Description>Description_GravityGeneratorSphere</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Sound>BlockGravityGen</Sound>
    <Model>Models\\Cubes\\Large\\GravityGeneratorSpherical.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="54" />
        <Component Subtype="GravityGenerator" Count="6" />
        <Component Subtype="Construction" Count="60" />
        <Component Subtype="SteelPlate" Count="56" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Computer" Count="40" />
        <Component Subtype="SteelPlate" Count="40" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\GravityGeneratorSphericalConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\GravityGeneratorSphericalConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\GravityGeneratorSphericalConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>GravityGeneratorSphere</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>50</BuildTimeSeconds>
    <MinRadius>10</MinRadius>
    <MaxRadius>400</MaxRadius>
    <MinGravityAcceleration>-9.81</MinGravityAcceleration>
    <MaxGravityAcceleration>9.81</MaxGravityAcceleration>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <BasePowerInput>0.4</BasePowerInput>
    <ConsumptionPower>1</ConsumptionPower>
    <DamageEffectName>Damage_GravGen_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>200</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>VirtualMass</TypeId>
        <SubtypeId>VirtualMassLarge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_VirtualMass</DisplayName>
    <Public>true</Public>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ArtificialMass.dds</Icon>
    <Description>Description_VirtualMass</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\VirtualMassBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="Superconductor" Count="20" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="GravityGenerator" Count="9" />
        <Component Subtype="SteelPlate" Count="60" />
    </Components>
    <CriticalComponent Subtype="GravityGenerator" Index="0" />
    <MountPoints>
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" Default="true" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\VirtualMassBlockConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\VirtualMassBlockConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\VirtualMassBlockConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>VirtualMass</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>24</BuildTimeSeconds>
    <VirtualMass>50000</VirtualMass>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.6</RequiredPowerInput>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>GravityBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>VirtualMass</TypeId>
        <SubtypeId>VirtualMassSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_VirtualMass</DisplayName>
    <Public>true</Public>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ArtificialMass.dds</Icon>
    <Description>Description_VirtualMass</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\VirtualMassBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="Superconductor" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="GravityGenerator" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="GravityGenerator" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.55" File="Models\\Cubes\\Small\\VirtualMassBlockConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\VirtualMassBlockConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>VirtualMass</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <VirtualMass>2000</VirtualMass>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.025</RequiredPowerInput>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>GravityBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>SpaceBall</TypeId>
        <SubtypeId>SpaceBallLarge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SpaceBall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SpaceBall.dds</Icon>
    <Description>Description_SpaceBall</Description>
    <BlockPairName>SpaceBall</BlockPairName>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\SpaceBallBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="90" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="GravityGenerator" Count="3" />
        <Component Subtype="SteelPlate" Count="135" />
    </Components>
    <CriticalComponent Subtype="GravityGenerator" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\SpaceBallBlockConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\SpaceBallBlockConstruction_2.mwm" />
    </BuildProgressModels>
    <MountPoints>
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
    </MountPoints>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MaxVirtualMass>20000</MaxVirtualMass>
    <RequiredPowerInput>0.0</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <EmissiveColorPreset>GravityBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>SpaceBall</TypeId>
        <SubtypeId>SpaceBallSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SpaceBall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SpaceBall.dds</Icon>
    <Description>Description_SpaceBall</Description>
    <BlockPairName>SpaceBall</BlockPairName>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\SpaceBallBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="50" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Computer" Count="7" />
        <Component Subtype="GravityGenerator" Count="1" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="GravityGenerator" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\SpaceBallBlockConstruction_1.mwm" />
    </BuildProgressModels>
    <MountPoints>
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
    </MountPoints>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <MaxVirtualMass>5000</MaxVirtualMass>
    <RequiredPowerInput>0.0</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <EmissiveColorPreset>GravityBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
// Added Text/LCD Panel blocks
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallTextPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_TextPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\TextPanel.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\TextPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="BulletproofGlass" Count="1" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" Default="true"/>
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.1" EndY="1" />
        <MountPoint Side="Right" StartX="0.9" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0.9" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\TextPanel_Construction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>TextPanel</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>45</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallLCDPanelWide</SubtypeId>
    </Id>
    <DisplayName>DisplayName_LCD_PanelWide</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LCDPanelWide.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="6" y="3" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\LCDPanelWide.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Display" Count="6" />
        <Component Subtype="BulletproofGlass" Count="2" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="6" EndY="3" Default="true"/>
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.1" EndY="3" />
        <MountPoint Side="Right" StartX="0.9" StartY="0" EndX="1" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0.9" EndX="6" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="6" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\LCDPanelWide_Construction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>LCDPanelWide</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallLCDPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_LCD_Panel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LCDPanel.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\LCDPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="BulletproofGlass" Count="2" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.1" EndY="3" />
        <MountPoint Side="Right" StartX="0.9" StartY="0" EndX="1" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0.9" EndX="3" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\LCDPanel_Construction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>LCDPanel</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeBlockCorner_LCD_1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCD</DisplayName>
    <BlockPairName>CornerLCD</BlockPairName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_1.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Corner_LCD_1.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Corner_LCD_1_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeBlockCorner_LCD_2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCD2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_2.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Corner_LCD_2.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Corner_LCD_2_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeBlockCorner_LCD_Flat_1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCDFlatTop</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_Flat_1.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Corner_LCD_Flat_1.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Corner_LCD_Flat_1_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeBlockCorner_LCD_Flat_2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCDFlatBottom</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_Flat_2.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Corner_LCD_Flat_2.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="3" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Corner_LCD_Flat_2_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallBlockCorner_LCD_1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCD</DisplayName>
    <BlockPairName>CornerLCD</BlockPairName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_1.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Corner_LCD_1.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="3" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Corner_LCD_1_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallBlockCorner_LCD_2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCD2</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_2.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Corner_LCD_2.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="3" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Corner_LCD_2_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallBlockCorner_LCD_Flat_1</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCDFlatTop</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_Flat_1.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Corner_LCD_Flat_1.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="3" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Corner_LCD_Flat_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>SmallBlockCorner_LCD_Flat_2</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLCDFlatBottom</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Corner_LCD_Flat_2.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Corner_LCD_Flat_2.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="3" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Display" Count="1" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Corner_LCD_Flat_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeTextPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_TextPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\TextPanel.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\TextPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="BulletproofGlass" Count="2" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" Default="true"/>
        <MountPoint Side="Left" StartX="0" StartY="0.2" EndX="0.1" EndY="0.8" />
        <MountPoint Side="Right" StartX="0.9" StartY="0.2" EndX="1" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\TextPanel_Construction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\TextPanel_Construction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>TextPanel</BlockPairName>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeLCDPanel</SubtypeId>
    </Id>
    <DisplayName>DisplayName_LCD_Panel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LCDPanel.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\LCDPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="BulletproofGlass" Count="6" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" Default="true"/>
        <MountPoint Side="Left" StartX="0" StartY="0.1" EndX="0.1" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.9" StartY="0.1" EndX="1" EndY="0.9" />
        <MountPoint Side="Top" StartX="0" StartY="0.9" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\LCDPanel_Construction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\LCDPanel_Construction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>LCDPanel</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>TextPanel</TypeId>
        <SubtypeId>LargeLCDPanelWide</SubtypeId>
    </Id>
    <DisplayName>DisplayName_LCD_PanelWide</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LCDPanelWide.dds</Icon>
    <Description>Description_TextPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\LCDPanelWide.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="Computer" Count="12" />
        <Component Subtype="Display" Count="20" />
        <Component Subtype="BulletproofGlass" Count="12" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="1" Default="true"/>
        <MountPoint Side="Left" StartX="0" StartY="0.1" EndX="0.1" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.9" StartY="0.1" EndX="1" EndY="0.9" />
        <MountPoint Side="Top" StartX="0" StartY="0.9" EndX="2" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="2" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\LCDPanelWide_Construction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\LCDPanelWide_Construction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>LCDPanelWide</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>45</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
// NEW LIGHT DEFINITIONS (with xsi:type removed)
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>LargeBlockFrontLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ReflectorLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\light.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="BulletproofGlass" Count="4" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
        <MountPoint Side="Left" StartX="0.5" StartY="0.38" EndX="0.9" EndY="0.62" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.38" EndX="0.5" EndY="0.62" />
        <MountPoint Side="Bottom" StartX="0.38" StartY="0.5" EndX="0.62" EndY="0.9" />
        <MountPoint Side="Top" StartX="0.38" StartY="0.1" EndX="0.62" EndY="0.5" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\LightConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\LightConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\LightConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>ReflectorLight</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <LightRadius Min="2" Max="10" Default="5" />
    <LightReflectorRadius Min="10" Max="160" Default="120" />
    <LightFalloff Min="1" Max="3" Default="1.5" />
    <LightIntensity Min="0.5" Max="5" Default="1" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.001</RequiredPowerInput>
    <Flare>SpotlightLarge</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <ReflectorThickness>11</ReflectorThickness>
    <ReflectorTexture>Textures\\Lights\\reflector_large.dds</ReflectorTexture>
    <ReflectorConeDegrees>52</ReflectorConeDegrees>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ReflectorLight</TypeId>
        <SubtypeId>SmallBlockFrontLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ReflectorLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\light.dds</Icon>
    <Description>Description_ReflectorLight</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\light.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="BulletproofGlass" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\LightConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\LightConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ReflectorLight</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <LightRadius Min="1" Max="5" Default="5" />
    <LightReflectorRadius Min="10" Max="120" Default="120" />
    <LightFalloff Min="1" Max="3" Default="1.5" />
    <LightIntensity Min="0.5" Max="5" Default="3" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <Flare>SpotlightSmall</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <ReflectorThickness>2.5</ReflectorThickness>
    <ReflectorTexture>Textures\\Lights\\reflector_small.dds</ReflectorTexture>
    <ReflectorConeDegrees>52</ReflectorConeDegrees>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
    <DestroySound>PoofExplosionCat2</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>SmallLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InteriorLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\interior_light.dds</Icon>
    <Description>Description_InteriorLight</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\InteriorLight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" ExclusionMask="3" PropertiesMask="3" StartX="0.4" StartY="0.44" EndX="0.6" EndY="0.55" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\InteriorLightConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>InteriorLight</BlockPairName>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <LightRadius Min="1" Max="20" Default="3.6" />
    <LightFalloff Min="0" Max="3" Default="1.3" />
    <LightIntensity Min="0.5" Max="10" Default="5" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00006</RequiredPowerInput>
    <Flare>InteriorLight</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroyEffectOffset>
        <X>0</X>
        <Y>0</Y>
        <Z>1.1</Z>
    </DestroyEffectOffset>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>SmallBlockSmallLight</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InteriorLight</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\interior_light.dds</Icon>
    <Description>Description_InteriorLight</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="-1" />
    <Model>Models\\Cubes\\Large\\InteriorLight.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" ExclusionMask="3" PropertiesMask="3" StartX="0.4" StartY="0.44" EndX="0.6" EndY="0.55" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\InteriorLightConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>InteriorLight</BlockPairName>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <Flare>InteriorLightSmall</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <LightRadius Min="1" Max="20" Default="3.6" />
    <LightFalloff Min="0" Max="3" Default="1.3" />
    <LightIntensity Min="0.5" Max="10" Default="5" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00006</RequiredPowerInput>
    <LightGlare>GlareLsInteriorLight</LightGlare>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>LargeBlockLight_1corner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLight</DisplayName>
    <BlockPairName>CornerLight</BlockPairName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Light_1corner.dds</Icon>
    <Description>Description_CornerLight</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Light_1corner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="3" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.1" StartY="0.00" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.00" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <EdgeType>Light</EdgeType>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Light_1corner_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <Flare>NoFlare</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <LightRadius Min="0.1" Max="20" Default="2.0" />
    <LightFalloff Min="0" Max="2" Default="1.0" />
    <LightIntensity Min="0.0" Max="10" Default="4.0" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00008</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <MirroringZ>Y</MirroringZ>
    <MirroringY>Z</MirroringY>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroyEffectOffset>
        <X>0</X>
        <Y>-1.1</Y>
        <Z>1.1</Z>
    </DestroyEffectOffset>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>LargeBlockLight_2corner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLightDouble</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Light_2corner.dds</Icon>
    <Description>Description_CornerLight</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\large\\Light_2corner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="6" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.1" StartY="0.00" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.00" />
        <MountPoint Side="Top" StartX="0.1" StartY="0.00" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.00" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <EdgeType>Light</EdgeType>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\large\\Light_2corner_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <Flare>NoFlare</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <LightRadius Min="0.1" Max="20" Default="2.0" />
    <LightFalloff Min="0" Max="2" Default="1.0" />
    <LightIntensity Min="0.0" Max="10" Default="4.0" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00008</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <MirroringZ>Y</MirroringZ>
    <MirroringY>Z</MirroringY>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroyEffectOffset>
        <X>0</X>
        <Y>0</Y>
        <Z>1.1</Z>
    </DestroyEffectOffset>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>SmallBlockLight_1corner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLight</DisplayName>
    <BlockPairName>CornerLight</BlockPairName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Light_1corner.dds</Icon>
    <Description>Description_CornerLight</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Light_1corner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <EdgeType>Light</EdgeType>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Light_1corner_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <Flare>NoFlare</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <LightRadius Min="0.1" Max="20" Default="2.0" />
    <LightFalloff Min="0" Max="2" Default="1.0" />
    <LightIntensity Min="0.0" Max="10" Default="4.0" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00008</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <MirroringZ>Y</MirroringZ>
    <MirroringY>Z</MirroringY>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>InteriorLight</TypeId>
        <SubtypeId>SmallBlockLight_2corner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CornerLightDouble</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Light_2corner.dds</Icon>
    <Description>Description_CornerLight</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\small\\Light_2corner.mwm</Model>
    <Components>
        <Component Subtype="Construction" Count="4" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Back" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
        <MountPoint Side="Top" StartX="0.00" StartY="0.00" EndX="1.00" EndY="0.24" />
        <MountPoint Side="Bottom" StartX="0.00" StartY="0.76" EndX="1.00" EndY="1.00" />
    </MountPoints>
    <IsStandAlone>false</IsStandAlone>
    <HasPhysics>false</HasPhysics>
    <EdgeType>Light</EdgeType>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\Light_2corner_Construction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <Flare>NoFlare</Flare>
    <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
    <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
    <LightRadius Min="0.1" Max="20" Default="2.0" />
    <LightFalloff Min="0" Max="2" Default="1.0" />
    <LightIntensity Min="0.0" Max="10" Default="4.0" />
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.00008</RequiredPowerInput>
    <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
    <DamagedSound>ParticleElectrical</DamagedSound>
    <MirroringZ>Y</MirroringZ>
    <MirroringY>Z</MirroringY>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>20</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`
];