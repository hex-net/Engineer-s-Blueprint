// data/blockTagsData.ts

export const blockTagsRawXml: string = `<?xml version="1.0" encoding="utf-8"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <!--
	
	This file is used to tag groups of blocks for the block limit system.
	
	Blocks in these groups share a limit when placed, allowing server owners, admins, and scenario makers to limit specific blocks to their liking.
	
	-->
	
	<BlockTags>	
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ActionRelays</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ActionRelays</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_TransponderBlock" Subtype="LargeBlockTransponder" />
            <Block Type="MyObjectBuilder_TransponderBlock" Subtype="SmallBlockTransponder" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>AIBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_AIBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_BasicMissionBlock" Subtype="LargeBasicMission" />
            <Block Type="MyObjectBuilder_BasicMissionBlock" Subtype="SmallBasicMission" />
            <Block Type="MyObjectBuilder_DefensiveCombatBlock" Subtype="LargeDefensiveCombat" />
            <Block Type="MyObjectBuilder_DefensiveCombatBlock" Subtype="SmallDefensiveCombat" />
            <Block Type="MyObjectBuilder_FlightMovementBlock" Subtype="LargeFlightMovement" />
            <Block Type="MyObjectBuilder_FlightMovementBlock" Subtype="SmallFlightMovement" />
            <Block Type="MyObjectBuilder_OffensiveCombatBlock" Subtype="LargeOffensiveCombat" />
            <Block Type="MyObjectBuilder_OffensiveCombatBlock" Subtype="SmallOffensiveCombat" />
            <Block Type="MyObjectBuilder_PathRecorderBlock" Subtype="LargePathRecorderBlock" />
            <Block Type="MyObjectBuilder_PathRecorderBlock" Subtype="SmallPathRecorderBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>AirVents</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_AirVents</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_AirVent" Subtype="AirVentFan" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="AirVentFanFull" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="SmallAirVentFan" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="SmallAirVentFanFull" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="AirVentFull" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="SmallAirVent" />
            <Block Type="MyObjectBuilder_AirVent" Subtype="SmallAirVentFull" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Assemblers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Assemblers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Assembler" Subtype="LargeAssemblerIndustrial" />
            <Block Type="MyObjectBuilder_Assembler" Subtype="LargeAssembler" />
            <Block Type="MyObjectBuilder_Assembler" Subtype="BasicAssembler" />
            <Block Type="MyObjectBuilder_Assembler" Subtype="LargePrototechAssembler" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>AtmosphericThrusters</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_AtmosphericThrusters</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeAtmosphericThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallAtmosphericThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeAtmosphericThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallAtmosphericThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeFlatAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeFlatAtmosphericThrustDShape" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallFlatAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallFlatAtmosphericThrustDShape" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeFlatAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeFlatAtmosphericThrustDShape" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallFlatAtmosphericThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallFlatAtmosphericThrustDShape" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Batteries</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Batteries</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="LargeBlockBatteryBlock" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="SmallBlockBatteryBlock" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="SmallBlockSmallBatteryBlock" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="LargeBlockBatteryBlockWarfare2" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="SmallBlockBatteryBlockWarfare2" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="LargeBlockPrototechBattery" />
            <Block Type="MyObjectBuilder_BatteryBlock" Subtype="SmallBlockPrototechBattery" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Beacons</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Beacons</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Beacon" Subtype="LargeBlockBeacon" />
            <Block Type="MyObjectBuilder_Beacon" Subtype="SmallBlockBeacon" />
            <Block Type="MyObjectBuilder_Beacon" Subtype="LargeBlockBeaconReskin" />
            <Block Type="MyObjectBuilder_Beacon" Subtype="SmallBlockBeaconReskin" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>BroadcastControllers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_BroadcastControllers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_BroadcastController" Subtype="LargeBlockBroadcastController" />
            <Block Type="MyObjectBuilder_BroadcastController" Subtype="SmallBlockBroadcastController" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ButtonPanels</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ButtonPanels</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="ButtonPanelLarge" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="ButtonPanelSmall" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeButtonPanelPedestal" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="SmallButtonPanelPedestal" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeBlockInsetButtonPanel" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeBlockAccessPanel3" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="VerticalButtonPanelLarge" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="VerticalButtonPanelSmall" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeBlockConsoleModuleButtons" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="SmallBlockConsoleModuleButtons" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeSciFiButtonTerminal" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeSciFiButtonPanel" />
            <Block Type="MyObjectBuilder_ButtonPanel" Subtype="LargeBlockModularBridgeButtonPanel" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Cameras</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Cameras</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_CameraBlock" Subtype="LargeCameraTopMounted" />
            <Block Type="MyObjectBuilder_CameraBlock" Subtype="SmallCameraTopMounted" />
            <Block Type="MyObjectBuilder_CameraBlock" Subtype="SmallCameraBlock" />
            <Block Type="MyObjectBuilder_CameraBlock" Subtype="LargeCameraBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>CargoContainers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_CargoContainers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLockerRoom" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLockerRoomCorner" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLockers" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockInsetBookshelf" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLargeIndustrialContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="SmallBlockSmallContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="SmallBlockMediumContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="SmallBlockLargeContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockSmallContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLargeContainer" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockWeaponRack" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="SmallBlockWeaponRack" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockCargoTerminal" />
            <Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockCargoTerminalHalf" />
			<Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLabCabinet" />
			<Block Type="MyObjectBuilder_CargoContainer" Subtype="LargeBlockLabCornerDesk" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="LargeFreezer" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Cockpits</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Cockpits</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCockpitSeat" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SmallBlockCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="DBSmallBlockFighterCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="CockpitOpen" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="RoverCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="OpenCockpitSmall" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="OpenCockpitLarge" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SmallBlockCockpitIndustrial" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCockpitIndustrial" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SmallBlockCapCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SpeederCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SpeederCockpitCompact" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="BuggyCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="SmallBlockStandingCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockStandingCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockModularBridgeCockpit" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="FlushCockpit" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>RemoteControls</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_RemoteControls</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_RemoteControl" Subtype="LargeBlockRemoteControl" />
            <Block Type="MyObjectBuilder_RemoteControl" Subtype="SmallBlockRemoteControl" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Collectors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Collectors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Collector" Subtype="Collector" />
            <Block Type="MyObjectBuilder_Collector" Subtype="CollectorSmall" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Connectors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Connectors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="Connector" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="ConnectorSmall" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="ConnectorMedium" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="LargeBlockInsetConnector" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="LargeBlockInsetConnectorSmall" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="SmallBlockInsetConnector" />
            <Block Type="MyObjectBuilder_ShipConnector" Subtype="SmallBlockInsetConnectorMedium" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ControlPanels</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ControlPanels</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="ControlPanel" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="SmallControlPanel" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="LargeControlPanelPedestal" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="SmallControlPanelPedestal" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="SmallBlockAccessPanel1" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="LargeBlockSciFiTerminal" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ConveyorBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ConveyorBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Conveyor" Subtype="LargeBlockConveyorPipeJunction" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="LargeBlockConveyorPipeIntersection" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="LargeBlockConveyorPipeT" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="SmallBlockConveyor" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="SmallBlockConveyorConverter" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="LargeBlockConveyor" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="ConveyorTubeDuctT" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="ConveyorTubeDuctSmallT" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="SmallShipConveyorHub" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="ConveyorTubeSmallT" />
            <Block Type="MyObjectBuilder_Conveyor" Subtype="ConveyorTubeT" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="LargeBlockConveyorPipeSeamless" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="LargeBlockConveyorPipeCorner" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="LargeBlockConveyorPipeFlange" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="LargeBlockConveyorPipeEnd" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTube" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeDuct" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeDuctCurved" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeSmall" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeDuctSmall" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeDuctSmallCurved" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeMedium" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorFrameMedium" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeCurved" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeSmallCurved" />
            <Block Type="MyObjectBuilder_ConveyorConnector" Subtype="ConveyorTubeCurvedMedium" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ConveyorSorters</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ConveyorSorters</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ConveyorSorter" Subtype="LargeBlockConveyorSorterIndustrial" />
            <Block Type="MyObjectBuilder_ConveyorSorter" Subtype="LargeBlockConveyorSorter" />
            <Block Type="MyObjectBuilder_ConveyorSorter" Subtype="MediumBlockConveyorSorter" />
            <Block Type="MyObjectBuilder_ConveyorSorter" Subtype="SmallBlockConveyorSorter" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>CryoChambers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_CryoChambers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockCryoRoom" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockCryoChamber" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="SmallBlockCryoChamber" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockCryoLabVat" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockBed" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockHalfBed" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockHalfBedOffset" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="LargeBlockInsetBed" />
            <Block Type="MyObjectBuilder_CryoChamber" Subtype="SmallBlockBunkBed" />
          </Blocks>
        </BlockTag>

        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>CustomTurretControllers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_CustomTurretControllers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_TurretControlBlock" Subtype="LargeTurretControlBlock" />
            <Block Type="MyObjectBuilder_TurretControlBlock" Subtype="SmallTurretControlBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Decoys</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Decoys</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Decoy" Subtype="TrussPillarDecoy" />
            <Block Type="MyObjectBuilder_Decoy" Subtype="LargeDecoy" />
            <Block Type="MyObjectBuilder_Decoy" Subtype="SmallDecoy" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Drills</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Drills</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Drill" Subtype="SmallBlockDrill" />
            <Block Type="MyObjectBuilder_Drill" Subtype="LargeBlockDrill" />
            <Block Type="MyObjectBuilder_Drill" Subtype="LargeBlockPrototechDrill" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>EconomyBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_EconomyBlocks</DisplayName>
          <Blocks>
			<Block Type="MyObjectBuilder_ContractBlock" Subtype="ContractBlock" />
            <Block Type="MyObjectBuilder_StoreBlock" Subtype="StoreBlock" />
            <Block Type="MyObjectBuilder_StoreBlock" Subtype="AtmBlock" />
            <Block Type="MyObjectBuilder_VendingMachine" Subtype="VendingMachine" />
            <Block Type="MyObjectBuilder_VendingMachine" Subtype="FoodDispenser" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>EventControllers</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_EventControllers</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_EventControllerBlock" Subtype="EventControllerLarge" />
            <Block Type="MyObjectBuilder_EventControllerBlock" Subtype="EventControllerSmall" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ExhaustBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ExhaustBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ExhaustBlock" Subtype="SmallExhaustPipe" />
            <Block Type="MyObjectBuilder_ExhaustBlock" Subtype="LargeExhaustPipe" />
            <Block Type="MyObjectBuilder_ExhaustBlock" Subtype="SmallExhaustCap" />
            <Block Type="MyObjectBuilder_ExhaustBlock" Subtype="LargeExhaustCap" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Freight</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Freight</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="Freight1" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="Freight2" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="Freight3" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="LargeBarrel" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="SmallBarrel" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="LargeBarrelThree" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="LargeBarrelStack" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody01" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody02" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody03" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody04" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody05" />
            <Block Type="MyObjectBuilder_CubeBlock" Subtype="DeadBody06" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="LargeCrate" />
            <Block Type="MyObjectBuilder_TerminalBlock" Subtype="SmallBlockFirstAidCabinet" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>GasGenerators</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_GasGenerators</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_OxygenGenerator" Subtype="" />
            <Block Type="MyObjectBuilder_OxygenGenerator" Subtype="OxygenGeneratorSmall" />
            <Block Type="MyObjectBuilder_OxygenGenerator" Subtype="LargeBlockOxygenGeneratorLab" />
            <Block Type="MyObjectBuilder_OxygenGenerator" Subtype="SmallBlockOxygenGeneratorLab" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>GravityGenerators</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_GravityGenerators</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_GravityGenerator" Subtype="" />
            <Block Type="MyObjectBuilder_GravityGeneratorSphere" Subtype="" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Grinders</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Grinders</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ShipGrinder" Subtype="LargeShipGrinder" />
            <Block Type="MyObjectBuilder_ShipGrinder" Subtype="SmallShipGrinder" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Gyroscopes</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Gyroscopes</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Gyro" Subtype="LargeBlockGyro" />
            <Block Type="MyObjectBuilder_Gyro" Subtype="SmallBlockGyro" />
            <Block Type="MyObjectBuilder_Gyro" Subtype="LargeBlockPrototechGyro" />
            <Block Type="MyObjectBuilder_Gyro" Subtype="SmallBlockPrototechGyro" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Hinges</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Hinges</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="LargeHinge" />
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="MediumHinge" />
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="SmallHinge" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>HydrogenEngines</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_HydrogenEngines</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_HydrogenEngine" Subtype="LargeHydrogenEngine" />
            <Block Type="MyObjectBuilder_HydrogenEngine" Subtype="SmallHydrogenEngine" />
            <Block Type="MyObjectBuilder_HydrogenEngine" Subtype="LargePrototechReactor" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>HydrogenTanks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_HydrogenTanks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="LargeHydrogenTankIndustrial" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="LargeHydrogenTank" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="LargeHydrogenTankSmall" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="SmallHydrogenTank" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="SmallHydrogenTankSmall" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="LargeHydrogenTankSmallLab" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="SmallHydrogenTankLab" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>HydrogenThrusters</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_HydrogenThrusters</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeHydrogenThrustIndustrial" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallHydrogenThrustIndustrial" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeHydrogenThrustIndustrial" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallHydrogenThrustIndustrial" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeHydrogenThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallHydrogenThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeHydrogenThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallHydrogenThrust" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>IonThrusters</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_IonThrusters</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeThrustSciFi" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeThrust" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockSmallModularThruster" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockLargeModularThruster" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockSmallModularThruster" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockLargeModularThruster" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="LargeBlockPrototechThruster" />
            <Block Type="MyObjectBuilder_Thrust" Subtype="SmallBlockPrototechThruster" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>JumpDrives</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_JumpDrives</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_JumpDrive" Subtype="LargeJumpDrive" />
            <Block Type="MyObjectBuilder_JumpDrive" Subtype="LargePrototechJumpDrive" />
            <Block Type="MyObjectBuilder_JumpDrive" Subtype="SmallPrototechJumpDrive" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>LandingGear</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_LandingGear</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_LandingGear" Subtype="LargeBlockMagneticPlate" />
            <Block Type="MyObjectBuilder_LandingGear" Subtype="SmallBlockMagneticPlate" />
            <Block Type="MyObjectBuilder_LandingGear" Subtype="LargeBlockLandingGear" />
            <Block Type="MyObjectBuilder_LandingGear" Subtype="SmallBlockLandingGear" />
            <Block Type="MyObjectBuilder_LandingGear" Subtype="LargeBlockSmallMagneticPlate" />
            <Block Type="MyObjectBuilder_LandingGear" Subtype="SmallBlockSmallMagneticPlate" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>LargeDoors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_LargeDoors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_AirtightHangarDoor" Subtype="" />
            <Block Type="MyObjectBuilder_AirtightHangarDoor" Subtype="AirtightHangarDoorWarfare2A" />
            <Block Type="MyObjectBuilder_AirtightHangarDoor" Subtype="AirtightHangarDoorWarfare2B" />
            <Block Type="MyObjectBuilder_AirtightHangarDoor" Subtype="AirtightHangarDoorWarfare2C" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockGate" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockSmallGate" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockEvenWideDoor" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>LaserAntennas</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_LaserAntennas</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_LaserAntenna" Subtype="LargeBlockLaserAntenna" />
            <Block Type="MyObjectBuilder_LaserAntenna" Subtype="SmallBlockLaserAntenna" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>LCDBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_LCDBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_EmotionControllerBlock" Subtype="EmotionControllerLarge" />
            <Block Type="MyObjectBuilder_EmotionControllerBlock" Subtype="EmotionControllerSmall" />
            <Block Type="MyObjectBuilder_LCDPanelsBlock" Subtype="LabEquipment" />
            <Block Type="MyObjectBuilder_LCDPanelsBlock" Subtype="MedicalStation" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="TransparentLCDLarge" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="TransparentLCDSmall" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="HoloLCDLarge" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="HoloLCDSmall" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeFullBlockLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallFullBlockLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeDiagonalLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallDiagonalLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeCurvedLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallCurvedLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallTextPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallLCDPanelWide" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeBlockCorner_LCD_1" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeBlockCorner_LCD_2" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeBlockCorner_LCD_Flat_1" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeBlockCorner_LCD_Flat_2" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallBlockCorner_LCD_1" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallBlockCorner_LCD_2" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallBlockCorner_LCD_Flat_1" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallBlockCorner_LCD_Flat_2" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeTextPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeLCDPanel" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeLCDPanelWide" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="SmallBlockConsoleModuleScreens" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeLCDPanel5x5" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeLCDPanel5x3" />
            <Block Type="MyObjectBuilder_TextPanel" Subtype="LargeLCDPanel3x3" />
			<Block Type="MyObjectBuilder_LCDPanelsBlock" Subtype="LargeBlockLabDeskMicroscope" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Lights</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Lights</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_HeatVentBlock" Subtype="LargeHeatVentBlock" />
            <Block Type="MyObjectBuilder_HeatVentBlock" Subtype="SmallHeatVentBlock" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockInsetAquarium" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockInsetKitchen" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockInsetLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallBlockInsetLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="AirDuctLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallBlockSmallLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="OffsetLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockInsetWallLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="CorridorLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="CorridorNarrowStowage" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="CorridorRoundLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="TrussPillarLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="TrussPillarLightSmall" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="PassageSciFiLight" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeLightPanel" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallLightPanel" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockLight_1corner" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="LargeBlockLight_2corner" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallBlockLight_1corner" />
            <Block Type="MyObjectBuilder_InteriorLight" Subtype="SmallBlockLight_2corner" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="RotatingLightLarge" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="RotatingLightSmall" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="LargeBlockFrontLight" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFrontLight" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="OffsetSpotlight" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="LargeBlockFloodlight" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="LargeBlockFloodlightAngled" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="LargeBlockFloodlightCornerL" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="LargeBlockFloodlightCornerR" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlight" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlightAngled" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlightCornerL" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlightCornerR" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlightDown" />
            <Block Type="MyObjectBuilder_ReflectorLight" Subtype="SmallBlockFloodlightAngledRotated" />
            <Block Type="MyObjectBuilder_Searchlight" Subtype="SmallSearchlight" />
            <Block Type="MyObjectBuilder_Searchlight" Subtype="LargeSearchlight" />
			<Block Type="MyObjectBuilder_InteriorLight" Subtype="LabEquipment2" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>MassBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_MassBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_SpaceBall" Subtype="SpaceBallLarge" />
            <Block Type="MyObjectBuilder_SpaceBall" Subtype="SpaceBallSmall" />
            <Block Type="MyObjectBuilder_VirtualMass" Subtype="VirtualMassLarge" />
            <Block Type="MyObjectBuilder_VirtualMass" Subtype="VirtualMassSmall" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>MergeBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_MergeBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MergeBlock" Subtype="LargeShipMergeBlock" />
            <Block Type="MyObjectBuilder_MergeBlock" Subtype="SmallShipMergeBlock" />
            <Block Type="MyObjectBuilder_MergeBlock" Subtype="SmallShipSmallMergeBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>OreDetectors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_OreDetectors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_OreDetector" Subtype="LargeOreDetector" />
            <Block Type="MyObjectBuilder_OreDetector" Subtype="SmallBlockOreDetector" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>OxygenFarms</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_OxygenFarms</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_OxygenFarm" Subtype="LargeBlockOxygenFarm" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>OxygenTanks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_OxygenTanks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="OxygenTankSmall" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="LargeBlockOxygenTankLab" />
            <Block Type="MyObjectBuilder_OxygenTank" Subtype="SmallOxygenTankSmall" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Parachutes</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Parachutes</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Parachute" Subtype="LgParachute" />
            <Block Type="MyObjectBuilder_Parachute" Subtype="SmParachute" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>PassengerSeats</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_PassengerSeats</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockDesk" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockDeskCorner" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockDeskCornerInv" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCouch" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCouchCorner" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockBathroomOpen" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockBathroom" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockToilet" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockInsetPlantCouch" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="PassengerSeatLarge" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="PassengerSeatSmall" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="PassengerSeatSmallNew" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="PassengerSeatSmallOffset" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockConsoleModuleInvertedCorner" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockConsoleModuleScreens" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="PassengerBench" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockCaptainDesk" />
            <Block Type="MyObjectBuilder_Cockpit" Subtype="LargeBlockLabDeskSeat" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Pistons</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Pistons</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ExtendedPistonBase" Subtype="LargePistonBase" />
            <Block Type="MyObjectBuilder_ExtendedPistonBase" Subtype="SmallPistonBase" />
            <Block Type="MyObjectBuilder_ExtendedPistonBase" Subtype="LargePistonBaseReskin" />
            <Block Type="MyObjectBuilder_ExtendedPistonBase" Subtype="SmallPistonBaseReskin" />
            <Block Type="MyObjectBuilder_PistonBase" Subtype="LargePistonBase" />
            <Block Type="MyObjectBuilder_PistonBase" Subtype="SmallPistonBase" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>ProgrammableBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_ProgrammableBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MyProgrammableBlock" Subtype="SmallProgrammableBlock" />
            <Block Type="MyObjectBuilder_MyProgrammableBlock" Subtype="LargeProgrammableBlock" />
            <Block Type="MyObjectBuilder_MyProgrammableBlock" Subtype="LargeProgrammableBlockReskin" />
            <Block Type="MyObjectBuilder_MyProgrammableBlock" Subtype="SmallProgrammableBlockReskin" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Projectors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Projectors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Projector" Subtype="LargeProjector" />
            <Block Type="MyObjectBuilder_Projector" Subtype="SmallProjector" />
            <Block Type="MyObjectBuilder_Projector" Subtype="LargeBlockConsole" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>RadioAntennas</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_RadioAntennas</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="LargeBlockRadioAntenna" />
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="LargeBlockCompactRadioAntenna" />
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="SmallBlockRadioAntenna" />
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="LargeBlockRadioAntennaDish" />
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="LargeBlockCompactRadioAntennaReskin" />
            <Block Type="MyObjectBuilder_RadioAntenna" Subtype="SmallBlockCompactRadioAntennaReskin" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Reactors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Reactors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Reactor" Subtype="SmallBlockSmallGenerator" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="SmallBlockLargeGenerator" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="LargeBlockSmallGenerator" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="LargeBlockLargeGenerator" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="LargeBlockSmallGeneratorWarfare2" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="LargeBlockLargeGeneratorWarfare2" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="SmallBlockSmallGeneratorWarfare2" />
            <Block Type="MyObjectBuilder_Reactor" Subtype="SmallBlockLargeGeneratorWarfare2" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Refineries</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Refineries</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Refinery" Subtype="LargeRefineryIndustrial" />
            <Block Type="MyObjectBuilder_Refinery" Subtype="LargeRefinery" />
            <Block Type="MyObjectBuilder_Refinery" Subtype="Blast Furnace" />
            <Block Type="MyObjectBuilder_Refinery" Subtype="LargePrototechRefinery" />
            <Block Type="MyObjectBuilder_Refinery" Subtype="SmallPrototechRefinery" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>RespawnPoints</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_RespawnPoints</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MedicalRoom" Subtype="LargeMedicalRoomReskin" />
            <Block Type="MyObjectBuilder_MedicalRoom" Subtype="LargeMedicalRoom" />
            <Block Type="MyObjectBuilder_SurvivalKit" Subtype="SurvivalKitLarge" />
            <Block Type="MyObjectBuilder_SurvivalKit" Subtype="SurvivalKit" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>RefillStations</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_RefillStations</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MedicalRoom" Subtype="LargeRefillStation" />
			<Block Type="MyObjectBuilder_MedicalRoom" Subtype="SmallRefillStation" />
			<Block Type="MyObjectBuilder_MedicalRoom" Subtype="InsetRefillStation" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Rotors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Rotors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="LargeAdvancedStator" />
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="SmallAdvancedStator" />
            <Block Type="MyObjectBuilder_MotorAdvancedStator" Subtype="SmallAdvancedStatorSmall" />
            <Block Type="MyObjectBuilder_MotorStator" Subtype="LargeStator" />
            <Block Type="MyObjectBuilder_MotorStator" Subtype="SmallStator" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>SafeZones</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_SafeZones</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_SafeZoneBlock" Subtype="SafeZoneBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Sensors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Sensors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_SensorBlock" Subtype="SmallBlockSensor" />
            <Block Type="MyObjectBuilder_SensorBlock" Subtype="LargeBlockSensor" />
            <Block Type="MyObjectBuilder_SensorBlock" Subtype="SmallBlockSensorReskin" />
            <Block Type="MyObjectBuilder_SensorBlock" Subtype="LargeBlockSensorReskin" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>SmallDoors</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_SmallDoors</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_AirtightSlideDoor" Subtype="LargeBlockSlideDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="" />
            <Block Type="MyObjectBuilder_Door" Subtype="SmallDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockOffsetDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockNarrowDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockNarrowDoorHalf" />
            <Block Type="MyObjectBuilder_Door" Subtype="SmallSideDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="SlidingHatchDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="SlidingHatchDoorHalf" />
            <Block Type="MyObjectBuilder_Door" Subtype="CorridorRoundDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockLabDoor" />
            <Block Type="MyObjectBuilder_Door" Subtype="LargeBlockLabDoorInv" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>SolarPanels</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_SolarPanels</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="LargeBlockColorableSolarPanel" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="LargeBlockColorableSolarPanelCorner" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="LargeBlockColorableSolarPanelCornerInverted" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="SmallBlockColorableSolarPanel" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="SmallBlockColorableSolarPanelCorner" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="SmallBlockColorableSolarPanelCornerInverted" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="LargeBlockSolarPanel" />
            <Block Type="MyObjectBuilder_SolarPanel" Subtype="SmallBlockSolarPanel" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>SoundBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_SoundBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Jukebox" Subtype="Jukebox" />
            <Block Type="MyObjectBuilder_Jukebox" Subtype="LargeBlockInsetEntertainmentCorner" />
            <Block Type="MyObjectBuilder_Jukebox" Subtype="SmallBlockJukeboxReskin" />
            <Block Type="MyObjectBuilder_SoundBlock" Subtype="SmallBlockSoundBlock" />
            <Block Type="MyObjectBuilder_SoundBlock" Subtype="LargeBlockSoundBlock" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>StaticWeapons</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_StaticWeapons</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_SmallGatlingGun" Subtype="SmallGatlingGunWarfare2" />
            <Block Type="MyObjectBuilder_SmallGatlingGun" Subtype="" />
            <Block Type="MyObjectBuilder_SmallGatlingGun" Subtype="SmallBlockAutocannon" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="SmallMissileLauncherWarfare2" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="LargeMissileLauncher" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="LargeBlockLargeCalibreGun" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="LargeFlareLauncher" />
            <Block Type="MyObjectBuilder_SmallMissileLauncher" Subtype="SmallFlareLauncher" />
            <Block Type="MyObjectBuilder_SmallMissileLauncherReload" Subtype="SmallRocketLauncherReload" />
            <Block Type="MyObjectBuilder_SmallMissileLauncherReload" Subtype="SmallBlockMediumCalibreGun" />
            <Block Type="MyObjectBuilder_SmallMissileLauncherReload" Subtype="LargeRailgun" />
            <Block Type="MyObjectBuilder_SmallMissileLauncherReload" Subtype="SmallRailgun" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>TargetDummies</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_TargetDummies</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_TargetDummyBlock" Subtype="TargetDummy" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>TimerBlocks</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_TimerBlocks</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_TimerBlock" Subtype="TimerBlockLarge" />
            <Block Type="MyObjectBuilder_TimerBlock" Subtype="TimerBlockSmall" />
            <Block Type="MyObjectBuilder_TimerBlock" Subtype="TimerBlockReskinLarge" />
            <Block Type="MyObjectBuilder_TimerBlock" Subtype="TimerBlockReskinSmall" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Turrets</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Turrets</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_InteriorTurret" Subtype="LargeInteriorTurret" />
            <Block Type="MyObjectBuilder_LargeGatlingTurret" Subtype="" />
            <Block Type="MyObjectBuilder_LargeGatlingTurret" Subtype="SmallGatlingTurret" />
            <Block Type="MyObjectBuilder_LargeGatlingTurret" Subtype="AutoCannonTurret" />
            <Block Type="MyObjectBuilder_LargeGatlingTurret" Subtype="LargeGatlingTurretReskin" />
            <Block Type="MyObjectBuilder_LargeGatlingTurret" Subtype="SmallGatlingTurretReskin" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="SmallMissileTurret" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="LargeCalibreTurret" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="LargeBlockMediumCalibreTurret" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="SmallBlockMediumCalibreTurret" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="LargeMissileTurretReskin" />
            <Block Type="MyObjectBuilder_LargeMissileTurret" Subtype="SmallMissileTurretReskin" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>UpgradeModules</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_UpgradeModules</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_UpgradeModule" Subtype="LargeProductivityModule" />
            <Block Type="MyObjectBuilder_UpgradeModule" Subtype="LargeEffectivenessModule" />
            <Block Type="MyObjectBuilder_UpgradeModule" Subtype="LargeEnergyModule" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Warheads</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Warheads</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_Warhead" Subtype="LargeExplosiveBarrel" />
            <Block Type="MyObjectBuilder_Warhead" Subtype="SmallExplosiveBarrel" />
            <Block Type="MyObjectBuilder_Warhead" Subtype="LargeWarhead" />
            <Block Type="MyObjectBuilder_Warhead" Subtype="SmallWarhead" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>Welders</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_Welders</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_ShipWelder" Subtype="LargeShipWelder" />
            <Block Type="MyObjectBuilder_ShipWelder" Subtype="SmallShipWelder" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>WheelSuspensions</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_WheelSuspensions</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadShortSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="OffroadSmallShortSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="Suspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension3x3" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension5x5" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension1x1" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension2x2" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="ShortSuspension2x2Mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension3x3mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension5x5mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension1x1mirrored" />
            <Block Type="MyObjectBuilder_MotorSuspension" Subtype="SmallShortSuspension2x2Mirrored" />
          </Blocks>
        </BlockTag>
		
        <BlockTag>
          <Id>
            <TypeId>CubeBlockTagDefinition</TypeId>
            <SubtypeId>WindTurbines</SubtypeId>
          </Id>
          <DisplayName>DisplayName_BlockGroup_WindTurbines</DisplayName>
          <Blocks>
            <Block Type="MyObjectBuilder_WindTurbine" Subtype="LargeBlockWindTurbineReskin" />
            <Block Type="MyObjectBuilder_WindTurbine" Subtype="LargeBlockWindTurbine" />
          </Blocks>
        </BlockTag>
		
    </BlockTags>
</Definitions>
`;
