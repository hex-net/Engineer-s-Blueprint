// data/blueprintClassDefinitionsData.ts

export const blueprintClassDefinitionsRawXml: string = `<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <BlueprintClasses>

		<!-- Survival Kit -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SurvivalKitIngots</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_SurvivalKitIngots</DisplayName>
            <Description>Description_BlueprintClass_SurvivalKitIngots</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Ingots.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Ingots.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\IngotsFocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BasicComponents</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Components</DisplayName>
            <Description>Description_BlueprintClass_Components</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\component.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\component.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\component_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BasicEquipment</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Equipment</DisplayName>
            <Description>Description_BlueprintClass_Equipment</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\equipment.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\equipment.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\equipmentfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BasicTools</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Tools</DisplayName>
            <Description>Description_BlueprintClass_Tools</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\tool.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\tool.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\tool_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BasicWeapons</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Weapons</DisplayName>
            <Description>Description_BlueprintClass_Weapons</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\weapons.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\weapons.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\weaponsfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BasicConsumables</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ammo</DisplayName>
            <Description>Description_BlueprintClass_Ammo</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\AmmoFocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>
		

		<!-- Basic Assembler -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SimpleComponents</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Components</DisplayName>
            <Description>Description_BlueprintClass_Components</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\component.dds</Icon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\component.dds</FocusIcon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\component_focus.dds</HighlightIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SimpleEquipment</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Equipment</DisplayName>
            <Description>Description_BlueprintClass_Equipment</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\equipment.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\equipment.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\equipmentfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Tools</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Tools</DisplayName>
            <Description>Description_BlueprintClass_Tools</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\tool.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\tool.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\tool_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SimpleWeapons</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Weapons</DisplayName>
            <Description>Description_BlueprintClass_Weapons</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\weapons.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\weapons.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\weaponsfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Consumables</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ammo</DisplayName>
            <Description>Description_BlueprintClass_Ammo</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\AmmoFocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>


		<!-- Assembler -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>LargeBlocks</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_LargeBlocks</DisplayName>
            <Description>Description_BlueprintClass_LargeBlocks</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\large_block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SmallBlocks</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_SmallBlocks</DisplayName>
            <Description>Description_BlueprintClass_SmallBlocks</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\small_block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\small_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\small_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Components</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Components</DisplayName>
            <Description>Description_BlueprintClass_Components</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\component.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\component.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\component_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>EliteEquipment</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Equipment</DisplayName>
            <Description>Description_BlueprintClass_Equipment</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\equipment.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\equipment.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\equipmentfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>EliteTools</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Tools</DisplayName>
            <Description>Description_BlueprintClass_Tools</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\tool.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\tool.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\tool_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>EliteWeapons</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Weapons</DisplayName>
            <Description>Description_BlueprintClass_Weapons</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\weapons.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\weapons.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\weaponsfocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>EliteConsumables</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ammo</DisplayName>
            <Description>Description_BlueprintClass_Ammo</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\AmmoFocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>BuildPlanner</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_BuildPlanner</DisplayName>
            <Description>Description_BlueprintClass_BuildPlanner</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\Block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>

        <!-- Prototech Assembler -->

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>PrototechComponents</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_PrototechComponents</DisplayName>
            <Description>Description_BlueprintClass_PrototechComponents</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\component.dds</Icon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\component.dds</FocusIcon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\component_focus.dds</HighlightIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>LargePrototechBlocks</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_LargePrototechBlocks</DisplayName>
            <Description>Description_BlueprintClass_LargePrototechBlocks</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\large_block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>SmallPrototechBlocks</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_SmallPrototechBlocks</DisplayName>
            <Description>Description_BlueprintClass_SmallPrototechBlocks</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\small_block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\small_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\small_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>

		<!-- Unused by Vanilla Assemblers, keeping for backwards compatibility -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Ammo</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ammo</DisplayName>
            <Description>Description_BlueprintClass_Ammo</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\Ammo.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\AmmoFocus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</InputConstraintIcon>
        </Class>


		<!-- Refining and Misc Processing -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Ingots</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ingots</DisplayName>
            <Description>Description_BlueprintClass_Ingots</Description>
            <Icon>Textures\\GUI\\Icons\\ingot\\ingot_class.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\ingot\\ingot_class.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\ingot\\ingot_class_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>CommonMetals</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_CommonMetals</DisplayName>
            <Description>Description_BlueprintClass_CommonMetals</Description>
            <Icon>Textures\\GUI\\Icons\\buttons\\large_block.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>Ice</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ice</DisplayName>
            <Description>Description_BlueprintClass_Ice</Description>
            <Icon>Textures\\GUI\\Icons\\ore_H2O_ice.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>


		<!-- Gas Containers -->
        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>OxygenBottles</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_OxygenBottles</DisplayName>
            <Description>Description_BlueprintClass_OxygenBottles</Description>
            <Icon>Textures\\GUI\\Icons\\ore_H2O_ice.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>

        <Class>
            <Id>
                <TypeId>BlueprintClassDefinition</TypeId>
                <SubtypeId>HydrogenBottles</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_HydrogenBottles</DisplayName>
            <Description>Description_BlueprintClass_HydrogenBottles</Description>
            <Icon>Textures\\GUI\\Icons\\ore_H2O_ice.dds</Icon>
            <HighlightIcon>Textures\\GUI\\Icons\\buttons\\large_block.dds</HighlightIcon>
            <FocusIcon>Textures\\GUI\\Icons\\buttons\\large_block_focus.dds</FocusIcon>
            <InputConstraintIcon>Textures\\GUI\\Icons\\filter_ore.dds</InputConstraintIcon>
            <OutputConstraintIcon>Textures\\GUI\\Icons\\filter_ingot.dds</OutputConstraintIcon>
        </Class>
    </BlueprintClasses>	

    <BlueprintClassEntries>
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SpaceBall/SpaceBallLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeLCDPanelWide" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeLCDPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeLCDPanel3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeLCDPanel5x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeLCDPanel5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MyProgrammableBlock/LargeProgrammableBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MyProgrammableBlock/LargeProgrammableBlockReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TurretControlBlock/LargeTurretControlBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Assembler/LargeAssembler" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Assembler/BasicAssembler" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Assembler/LargeAssemblerIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirtightSlideDoor/LargeBlockSlideDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockOffsetDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/SlidingHatchDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/SlidingHatchDoorHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockNarrowDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockNarrowDoorHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockLabDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockLabDoorInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="BatteryBlock/LargeBlockBatteryBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="BatteryBlock/LargeBlockBatteryBlockWarfare2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Beacon/LargeBlockBeacon" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Beacon/LargeBlockBeaconReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SafeZoneBlock/SafeZoneBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/ButtonPanelLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeSciFiButtonPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeSciFiButtonTerminal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/VerticalButtonPanelLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeBlockInsetButtonPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLargeContainer" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLargeIndustrialContainer" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockSmallContainer" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockCargoTerminal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockCargoTerminalHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/CockpitOpen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockStandingCockpit" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockCockpit" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockCockpitSeat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/PassengerSeatLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockModularBridgeCockpit" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Collector/Collector" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/LargeBlockConveyor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/ConveyorTube" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/ConveyorTubeDuct" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/ConveyorTubeDuctCurved" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/ConveyorTubeDuctT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/ConveyorTubeCurved" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/ConveyorTubeT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorSorter/LargeBlockConveyorSorter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorSorter/LargeBlockConveyorSorterIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/LargeBlockConveyorPipeJunction" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/LargeBlockConveyorPipeIntersection" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Conveyor/LargeBlockConveyorPipeT" />       
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/LargeBlockConveyorPipeSeamless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/LargeBlockConveyorPipeFlange" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/LargeBlockConveyorPipeEnd" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ConveyorConnector/LargeBlockConveyorPipeCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockConveyorPipeCap" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockConveyorCap" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ArmorAlpha" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ArmorCenter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ArmorCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ArmorInvCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ArmorSide" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorRoundedSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorRoundedCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorAngledSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorAngledCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorRoundedSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorRoundedCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorAngledSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorAngledCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorRoundSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorRoundCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockArmorRoundCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorRoundSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorRoundCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorRoundCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockInteriorWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PipeWorkBlockA" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PipeWorkBlockB" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesStraight1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesStraight2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesEnd" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesJunction" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesCornerOuter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesCornerInner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockPipesCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AngledInteriorWallA" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AngledInteriorWallB" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorCenter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorEdge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorSlab" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorPassage" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorDecal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorCenterMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorEdgeMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorPassageMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockFloorDecalMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuct1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuct2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/AirDuctLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/LargeBlockInsetAquarium" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuctCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuctT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuctX" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuctRamp" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/AirDuctGrate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockCylindricalColumn" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockSciFiWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/LargeBlockSciFiTerminal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/LargeBlockAccessPanel1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/LargeBlockAccessPanel2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeBlockAccessPanel3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/LargeBlockAccessPanel4" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeBlockModularBridgeButtonPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeCoverWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeCoverWallHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeCoverWallHalfMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/FireCover" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/FireCoverCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeHeavyBlockArmorSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeInteriorPillar" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillar" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarSlanted" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarOffset" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarX" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/TrussPillarDiagonal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeRailStraight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeRamp" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeRoundArmor_Corner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeRoundArmor_CornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeRoundArmor_Slope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeStairs" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSteelCatwalk" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSteelCatwalk2Sides" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSteelCatwalkCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSteelCatwalkPlate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWindowCen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWindowEdge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWindowSquare" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1Flat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1FlatInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1Face" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/BridgeWindow1x1Face" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/BridgeWindow1x1FaceInverted" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/BridgeWindow1x1Slope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1Inv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1Side" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1SideInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x1Slope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2Flat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2FlatInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2Face" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2Inv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2SideLeft" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2SideLeftInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2SideRight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2SideRightInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window1x2Slope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window2x3Flat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window2x3FlatInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window3x3Flat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Window3x3FlatInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRound" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundFace" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundFaceInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundInwardsCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowRoundInwardsCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Viewport1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Viewport2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindowInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindowCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindowCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindowDiagonal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/HalfWindowRound" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowCornerInverted" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowCornerInvertedRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowDiagonal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowDiagonalRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowEnd" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/ExtendedWindowDome" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Embrasure" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Passage2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Passage2Wall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFi" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/PassageSciFiLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/LargeLightPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/LargeBlockInsetLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/TrussPillarLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFiWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFiIntersection" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFiGate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageScifiCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFiTjunction" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/PassageSciFiWindow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Corridor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/CorridorLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorX" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorWindow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorDoubleWindow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorWindowRoof" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorNarrow" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/CorridorNarrowStowage" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorRound" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/CorridorRoundLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorRoundCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorRoundT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorRoundX" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CorridorRoundTransition" />        
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/CorridorRoundDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolA" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolB" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolC" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolD" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolE" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolF" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolG" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolH" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolI" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolJ" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolK" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolL" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolM" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolN" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolO" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolP" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolQ" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolR" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolS" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolU" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolV" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolW" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolX" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolY" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolZ" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol0" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol4" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol6" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol7" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol8" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbol9" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolHyphen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolUnderscore" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolDot" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolApostrophe" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolAnd" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolColon" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolExclamationMark" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeSymbolQuestionMark" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ExhaustBlock/LargeExhaustPipe" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="ExhaustBlock/LargeExhaustCap" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="HeatVentBlock/LargeHeatVentBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Decoy/LargeDecoy" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockOffsetDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Drill/LargeBlockDrill" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesStraight1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesStraight2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesBendUp" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesBendDown" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesStraightEnd1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesStraightEnd2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesStraightDown" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesU" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesT" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EmissiveBlock/LargeNeonTubesCircle" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="GravityGenerator/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="GravityGeneratorSphere/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Gyro/LargeBlockGyro" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/SmallLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorTurret/LargeInteriorTurret" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LandingGear/LargeBlockLandingGear" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LandingGear/LargeBlockMagneticPlate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LandingGear/LargeBlockSmallMagneticPlate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeGatlingTurret/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeGatlingTurret/LargeGatlingTurretReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeMissileTurret/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeMissileTurret/LargeMissileTurretReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeMissileTurret/LargeCalibreTurret" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LargeMissileTurret/LargeBlockMediumCalibreTurret" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LaserAntenna/LargeBlockLaserAntenna" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MedicalRoom/LargeMedicalRoom" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MedicalRoom/LargeMedicalRoomReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MergeBlock/LargeShipMergeBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorAdvancedStator/LargeAdvancedStator" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorAdvancedStator/LargeHinge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorAdvancedRotor/LargeHingeHead" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorRotor/LargeRotor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorStator/LargeStator" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/Suspension1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/Suspension2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/Suspension3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/Suspension5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadSuspension1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadSuspension2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadSuspension3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadSuspension5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/ShortSuspension1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/ShortSuspension2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/ShortSuspension3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/ShortSuspension5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadShortSuspension1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadShortSuspension2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadShortSuspension3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="MotorSuspension/OffroadShortSuspension5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OreDetector/LargeOreDetector" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenGenerator/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenGenerator/LargeBlockOxygenGeneratorLab" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/LargeBlockOxygenTankLab" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/LargeHydrogenTank" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/LargeHydrogenTankSmall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/LargeHydrogenTankSmallLab" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenTank/LargeHydrogenTankIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="OxygenFarm/LargeBlockOxygenFarm" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Parachute/LgParachute" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CryoChamber/LargeBlockCryoChamber" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CryoChamber/LargeBlockCryoRoom" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CryoChamber/LargeBlockCryoLabVat" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="UpgradeModule/LargeProductivityModule" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="UpgradeModule/LargeEffectivenessModule" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="UpgradeModule/LargeEnergyModule" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="JumpDrive/LargeJumpDrive" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirVent/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirVent/AirVentFull" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirVent/AirVentFan" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirVent/AirVentFanFull" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Passage/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirtightHangarDoor/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockGate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockSmallGate" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Door/LargeBlockEvenWideDoor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirtightHangarDoor/AirtightHangarDoorWarfare2A" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirtightHangarDoor/AirtightHangarDoorWarfare2B" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="AirtightHangarDoor/AirtightHangarDoorWarfare2C" />
        <!--<Entry Class="LargeBlocks" BlueprintSubtypeId="PistonBase/LargePistonBase" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="PistonTop/LargePistonTop" />-->
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ExtendedPistonBase/LargePistonBase" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="PistonTop/LargePistonTop" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ExtendedPistonBase/LargePistonBaseReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="PistonTop/LargePistonTopReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Projector/LargeProjector" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="RadioAntenna/LargeBlockRadioAntenna" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="RadioAntenna/LargeBlockCompactRadioAntenna" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="RadioAntenna/LargeBlockRadioAntennaDish" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="RadioAntenna/LargeBlockCompactRadioAntennaReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Reactor/LargeBlockLargeGenerator" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Reactor/LargeBlockSmallGenerator" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Reactor/LargeBlockLargeGeneratorWarfare2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Reactor/LargeBlockSmallGeneratorWarfare2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Refinery/LargeRefinery" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Refinery/LargeRefineryIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Refinery/Blast Furnace" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ReflectorLight/LargeBlockFrontLight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="RemoteControl/LargeBlockRemoteControl" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SensorBlock/LargeBlockSensor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SensorBlock/LargeBlockSensorReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ShipConnector/Connector" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ShipConnector/LargeBlockInsetConnector" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ShipConnector/LargeBlockInsetConnectorSmall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ShipGrinder/LargeShipGrinder" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ShipWelder/LargeShipWelder" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SmallMissileLauncher/LargeMissileLauncher" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SmallMissileLauncher/LargeFlareLauncher" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SmallMissileLauncherReload/LargeRailgun" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SmallMissileLauncher/LargeBlockLargeCalibreGun" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SolarPanel/LargeBlockSolarPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SoundBlock/LargeBlockSoundBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/ControlPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/LargeTextPanel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TimerBlock/TimerBlockLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TimerBlock/TimerBlockReskinLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="EventControllerBlock/EventControllerLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CameraBlock/LargeCameraBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CameraBlock/LargeCameraTopMounted" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeThrustSciFi" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallThrustSciFi" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeAtmosphericThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallAtmosphericThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeAtmosphericThrustSciFi" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallAtmosphericThrustSciFi" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeHydrogenThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallHydrogenThrust" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeHydrogenThrustIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallHydrogenThrustIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockLargeModularThruster" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Thrust/LargeBlockSmallModularThruster" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="VirtualMass/VirtualMassLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Warhead/LargeWarhead" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/RealWheel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/RealWheel1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/RealWheel5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/Wheel1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/Wheel2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/Wheel3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/Wheel5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadRealWheel" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadWheel2x2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadRealWheel1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadRealWheel5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadWheel1x1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadWheel3x3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Wheel/OffroadWheel5x5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="SurvivalKit/SurvivalKitLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="HydrogenEngine/LargeHydrogenEngine" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="WindTurbine/LargeBlockWindTurbine" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="WindTurbine/LargeBlockWindTurbineReskin" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockDesk" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockDeskCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockDeskCornerInv" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockDeskChairless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockDeskChairlessCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockDeskChairlessCornerInv" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockLabDeskSeat" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockLabDesk" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLabCornerDesk" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="LCDPanelsBlock/LargeBlockLabDeskMicroscope" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockLabSink" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLabCabinet" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockConsoleModule" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockConsoleModuleCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockConsoleModuleInvertedCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockConsoleModuleScreens" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ButtonPanel/LargeBlockConsoleModuleButtons" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Kitchen/LargeBlockKitchen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockBarCounter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockBarCounterCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CryoChamber/LargeBlockBed" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CryoChamber/LargeBlockInsetBed" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLockerRoom" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLockerRoomCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Planter/LargeBlockPlanters" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockCouch" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockCouchCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockInsetPlantCouch" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockLockers" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TerminalBlock/LargeFreezer" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockWeaponRack" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CargoContainer/LargeBlockInsetBookshelf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/LargeBlockInsetKitchen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockBathroomOpen" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockBathroom" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockToilet" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Projector/LargeBlockConsole" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/LargeBlockCockpitIndustrial" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Ladder2/(null)" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Ladder2/LadderShaft" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="VendingMachine/FoodDispenser" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Jukebox/Jukebox" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Jukebox/LargeBlockInsetEntertainmentCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LCDPanelsBlock/LabEquipment" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="LCDPanelsBlock/LabEquipment1" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="InteriorLight/LabEquipment2" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="LCDPanelsBlock/LabEquipment3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Shower" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowWallLeft" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/WindowWallRight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="LCDPanelsBlock/MedicalStation" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TextPanel/TransparentLCDLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Catwalk" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkStraight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkWall" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkHalfRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkHalfOuterRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/CatwalkHalfCenterRailing" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/GratedStairs" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/GratedHalfStairs" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/GratedHalfStairsMirrored" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingStraight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingDouble" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingDiagonal" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingHalfLeft" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingHalfRight" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/RailingCenter" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Railing2x1Right" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Railing2x1Left" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Cockpit/OpenCockpitLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="ReflectorLight/RotatingLightLarge" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Freight1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Freight2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/Freight3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/StorageShelf1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/StorageShelf2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/StorageShelf3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="TargetDummyBlock/TargetDummy" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlock" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockRound" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockSlope2x1Base" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockSlope2x1Tip" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockHalf" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockHalfSlope" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockEnd" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockJunction" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeGridBeamBlockTJunction" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign1" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign3" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign4" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign5" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign6" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign7" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign8" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign9" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign10" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign11" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign12" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSign13" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="Searchlight/LargeSearchlight" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster3" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster9" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster10" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster11" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster13" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeWarningSignEaster2" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeEmpty" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeFloor" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeRaisedSlopedCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeRaisedSlopedCornerFloorless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCornerFloorless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeHalfSlopedCornerFloorless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCorner2x1BaseLFloorless" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCorner2x1BaseRFloorless" />      
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeHalfSlopedCorner" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCorner2x1BaseR" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeCorner2x1BaseL" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeSideR" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeSideL" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeSlopedCornerBase" />
        <Entry Class="LargeBlocks" BlueprintSubtypeId="CubeBlock/LargeBlockModularBridgeSlopedCornerBaseFloorless" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="MedicalRoom/LargeRefillStation" />
		<Entry Class="LargeBlocks" BlueprintSubtypeId="MedicalRoom/InsetRefillStation" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="JumpDrive/LargePrototechJumpDrive" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="Thrust/LargeBlockPrototechThruster" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="Refinery/LargePrototechRefinery" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="Assembler/LargePrototechAssembler" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="Gyro/LargeBlockPrototechGyro" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="BatteryBlock/LargeBlockPrototechBattery" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="Drill/LargeBlockPrototechDrill" />
        <Entry Class="LargePrototechBlocks" BlueprintSubtypeId="HydrogenEngine/LargePrototechReactor" />
        <Entry Class="SmallPrototechBlocks" BlueprintSubtypeId="JumpDrive/SmallPrototechJumpDrive" />
        <Entry Class="SmallPrototechBlocks" BlueprintSubtypeId="Thrust/SmallBlockPrototechThruster" />
        <Entry Class="SmallPrototechBlocks" BlueprintSubtypeId="Refinery/SmallPrototechRefinery" />
        <Entry Class="SmallPrototechBlocks" BlueprintSubtypeId="Gyro/SmallBlockPrototechGyro" />
        <Entry Class="SmallPrototechBlocks" BlueprintSubtypeId="BatteryBlock/SmallBlockPrototechBattery" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="TransponderBlock/SmallBlockTransponder" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="BroadcastController/SmallBlockBroadcastController" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlight" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlightAngled" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlightCornerL" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlightCornerR" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlightDown" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="ReflectorLight/SmallBlockFloodlightAngledRotated" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="CubeBlock/SmallBlockFloorCenter" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="CubeBlock/SmallBlockFloorSlab" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="CubeBlock/SmallBlockFloorCenterMirrored" />
        <Entry Class="SmallBlocks" BlueprintSubtypeId="Ladder2/LadderSmall" />
		<Entry Class="SmallBlocks" BlueprintSubtypeId="MedicalRoom/SmallRefillStation" />
    </BlueprintClassEntries>
</Definitions>
`;
