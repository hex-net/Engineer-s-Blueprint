// data/blueprintRecipesData.ts

export const blueprintRecipesRawXml: string = `<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Blueprints>
		<!-- Resource Processing -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>StoneOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ingots</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\ingot_class.dds</Icon>
            <Prerequisites>
                <Item Amount="1000" TypeId="Ore" SubtypeId="Stone" />
            </Prerequisites>
            <Results>
                <Item Amount="14" TypeId="Ingot" SubtypeId="Stone" />
                <Item Amount="30" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="2.4" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="4.0" TypeId="Ingot" SubtypeId="Silicon" />
            </Results>
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0010_StoneOreToIngotBasic</SubtypeId>
            </Id>
            <DisplayName>DisplayName_BlueprintClass_Ingots</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\ingot_class.dds</Icon>
            <Prerequisites>
                <Item Amount="100" TypeId="Ore" SubtypeId="Stone" />
            </Prerequisites>
            <Results>
                <Item Amount="1.4" TypeId="Ingot" SubtypeId="Stone" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.24" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.4" TypeId="Ingot" SubtypeId="Silicon" />
            </Results>
            <Priority>1000</Priority>
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>StoneOreToIngot_Deconstruction</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Gravel</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\gravel_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Stone" />
            </Prerequisites>
            <Results>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Stone" />
            </Results>
            <BaseProductionTimeInSeconds>0.1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>IronOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_IronIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\iron_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="0.7" TypeId="Ingot" SubtypeId="Iron" />
            <BaseProductionTimeInSeconds>0.05</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>NickelOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_NickelIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\nickel_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="0.4" TypeId="Ingot" SubtypeId="Nickel" />
            <BaseProductionTimeInSeconds>0.66</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>CobaltOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_CobaltIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\cobalt_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Cobalt" />
            </Prerequisites>
            <Result Amount="0.3" TypeId="Ingot" SubtypeId="Cobalt" />
            <BaseProductionTimeInSeconds>3</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>MagnesiumOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_MagnesiumPowder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\magnesium_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="0.007" TypeId="Ingot" SubtypeId="Magnesium" />
            <BaseProductionTimeInSeconds>0.5</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SiliconOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SiliconWafer</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\silicon_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="0.7" TypeId="Ingot" SubtypeId="Silicon" />
            <BaseProductionTimeInSeconds>0.6</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SilverOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SilverIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\silver_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="0.1" TypeId="Ingot" SubtypeId="Silver" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>GoldOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_GoldIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\gold_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Gold" />
            </Prerequisites>
            <Result Amount="0.01" TypeId="Ingot" SubtypeId="Gold" />
            <BaseProductionTimeInSeconds>0.4</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PlatinumOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PlatinumIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\platinum_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="0.005" TypeId="Ingot" SubtypeId="Platinum" />
            <BaseProductionTimeInSeconds>3</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>UraniumOreToIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_UraniumIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\uranium_ingot.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Uranium" />
            </Prerequisites>
            <Result Amount="0.01" TypeId="Ingot" SubtypeId="Uranium" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ScrapIngotToIronIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_IronIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\ScrapMetalComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Scrap" />
            </Prerequisites>
            <Result Amount="0.8" TypeId="Ingot" SubtypeId="Iron" />
            <BaseProductionTimeInSeconds>0.04</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ScrapToIronIngot</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_IronIngot</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\ScrapMetalComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Scrap" />
            </Prerequisites>
            <Result Amount="0.8" TypeId="Ingot" SubtypeId="Iron" />
            <BaseProductionTimeInSeconds>0.04</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>IceToOxygen</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Oxygen</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\gravel_ingot.dds</Icon> <!-- Seems like placeholder icon -->
            <Prerequisites>
                <Item Amount="1" TypeId="Ore" SubtypeId="Ice" />
            </Prerequisites>
            <Result Amount="0.9" TypeId="Ingot" SubtypeId="Stone" /> <!-- This result seems incorrect for 'IceToOxygen', likely should be Oxygen gas -->
            <BaseProductionTimeInSeconds>0.1</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>OxygenBottlesRefill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_OxygenBottles</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\gravel_ingot.dds</Icon> <!-- Placeholder icon -->
            <Prerequisites>
                <Item Amount="1" TypeId="OxygenContainerObject" SubtypeId="OxygenBottle" />
            </Prerequisites>
            <Results /> <!-- Empty, but there is a singular Result tag below -->
            <Result Amount="0.9" TypeId="Ingot" SubtypeId="Stone" /> <!-- This is also suspect. Refilling a bottle shouldn't produce stone. -->
            <BaseProductionTimeInSeconds>0.1</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>HydrogenBottlesRefill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HydrogenBottles</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ingot\\gravel_ingot.dds</Icon> <!-- Placeholder icon -->
            <Prerequisites>
                <Item Amount="1" TypeId="GasContainerObject" SubtypeId="HydrogenBottle" />
            </Prerequisites>
            <Result Amount="0.9" TypeId="Ingot" SubtypeId="Stone" /> <!-- Suspect result -->
            <BaseProductionTimeInSeconds>0.1</BaseProductionTimeInSeconds>
        </Blueprint>


		<!-- Components -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ConstructionComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ConstructionComponent</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\construction_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="8" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Construction" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>GirderComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Girder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\girder_component.dds</Icon>
            <Prerequisites>
                <Item Amount="6" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Girder" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>MetalGrid</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_MetalGrid</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\metal_grid_component.dds</Icon>
            <Prerequisites>
                <Item Amount="12" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Cobalt" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="MetalGrid" />
            <BaseProductionTimeInSeconds>2</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>InteriorPlate</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_InteriorPlate</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\interior_plate_component.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="InteriorPlate" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SteelPlate</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SteelPlate</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\steel_plate_component.dds</Icon>
            <Prerequisites>
                <Item Amount="21" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="SteelPlate" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SmallTube</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SmallSteelTube</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\small_tube_component.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="SmallTube" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>LargeTube</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_LargeSteelTube</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\large_tube_component.dds</Icon>
            <Prerequisites>
                <Item Amount="30" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="LargeTube" />
            <BaseProductionTimeInSeconds>2</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>MotorComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Motor</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\motor_component.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Motor" />
            <BaseProductionTimeInSeconds>3</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Display</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Display</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\display_component.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Display" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>BulletproofGlass</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_BulletproofGlass</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\bulletproof_glass_component.dds</Icon>
            <Prerequisites>
                <Item Amount="15" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="BulletproofGlass" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ComputerComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Computer</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\computer_component.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Computer" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ReactorComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ReactorComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\reactor_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="15" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="20" TypeId="Ingot" SubtypeId="Stone" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Reactor" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ThrustComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ThrustComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\thrust_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="30" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Gold" />
                <Item Amount="0.4" TypeId="Ingot" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Thrust" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>GravityGeneratorComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_GravityGeneratorComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\gravity_generator_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Silver" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Gold" />
                <Item Amount="220" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="600" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="GravityGenerator" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>MedicalComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_MedicalComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\medical_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="60" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="70" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="20" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Medical" />
            <BaseProductionTimeInSeconds>6</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>RadioCommunicationComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_RadioCommunicationComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\radio_communication_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="8" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="RadioCommunication" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>DetectorComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_DetectorComponents</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\detector_components_component.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="15" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Detector" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ExplosivesComponent</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Explosives</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\ExplosivesComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2.0" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Explosives" />
            <BaseProductionTimeInSeconds>6</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SolarCell</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SolarCell</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\SolarCellComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="6" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="SolarCell" />
            <BaseProductionTimeInSeconds>2</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PowerCell</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PowerCell</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\BatteryComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="10" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PowerCell" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Superconductor</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Superconductor</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\superconductor_conducts_component.dds</Icon>
            <Prerequisites>
                <Item Amount="10" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Gold" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Superconductor" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>


		<!-- Equipment -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0010_OxygenBottle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_OxygenBottle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\OxygenBottleComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="80" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="30" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="OxygenContainerObject" SubtypeId="OxygenBottle" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0020_HydrogenBottle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HydrogenBottle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\HydrogenBottle_Component.dds</Icon>
            <Prerequisites>
                <Item Amount="80" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="30" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="GasContainerObject" SubtypeId="HydrogenBottle" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0030_Canvas</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_CanvasCartridge</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\Cartridge_Icon.dds</Icon>
            <Prerequisites>
                <Item Amount="35" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Iron" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="Canvas" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
        </Blueprint>
		
		<!-- Datapad blueprint is in Blueprints_Economy.sbc -->


		<!-- Weapons -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0010_SemiAutoPistol</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SemiAutoPistol</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponPistol_Warfare.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.3" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="SemiAutoPistolItem" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0020_FullAutoPistol</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FullAutoPistol</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponPistol_FullAuto_Warfare.dds</Icon>
            <Prerequisites>
                <Item Amount="1.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="FullAutoPistolItem" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0030_EliteAutoPistol</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ElitePistol</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponPistol_Elite_Warfare.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.4" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Platinum" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="ElitePistolItem" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0040_AutomaticRifle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AutomaticRifle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponAutomaticRifle.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AutomaticRifleItem" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0050_RapidFireAutomaticRifle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_RapidFireAutomaticRifle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponAutomaticRifle_RapidFire.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="8" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="RapidFireAutomaticRifleItem" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0060_PreciseAutomaticRifle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PreciseAutomaticRifle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponAutomaticRifle_Precise.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Cobalt" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="PreciseAutomaticRifleItem" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0070_UltimateAutomaticRifle</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_EliteAutomaticRifle</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponAutomaticRifle_Elite.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="4" TypeId="Ingot" SubtypeId="Platinum" />
                <Item Amount="6" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="UltimateAutomaticRifleItem" />
            <BaseProductionTimeInSeconds>15</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0080_BasicHandHeldLauncher</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_BasicHandHeldLauncher</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponRocketLauncher_Regular.dds</Icon>
            <Prerequisites>
                <Item Amount="30" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Cobalt" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="BasicHandHeldLauncherItem" />
            <BaseProductionTimeInSeconds>15</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0090_AdvancedHandHeldLauncher</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AdvancedHandHeldLauncher</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponRocketLauncher_Precise.dds</Icon>
            <Prerequisites>
                <Item Amount="30" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="10" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AdvancedHandHeldLauncherItem" />
            <BaseProductionTimeInSeconds>20</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0005_FlareGun</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FlareGun</DisplayName>
            <Icon>Textures\\GUI\\Icons\\FlareGun.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.3" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="FlareGunItem" />
            <BaseProductionTimeInSeconds>6</BaseProductionTimeInSeconds>
        </Blueprint>



        <!-- Tools -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0010_AngleGrinder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AngleGrinder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponGrinder.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Stone" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AngleGrinderItem" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0020_AngleGrinder2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AngleGrinder2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponGrinder_1.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="6" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AngleGrinder2Item" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0030_AngleGrinder3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AngleGrinder3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponGrinder_2.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AngleGrinder3Item" />
            <BaseProductionTimeInSeconds>36</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0040_AngleGrinder4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AngleGrinder4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponGrinder_3.dds</Icon>
            <Prerequisites>
                <Item Amount="3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="AngleGrinder4Item" />
            <BaseProductionTimeInSeconds>50</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0050_HandDrill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HandDrill</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponDrill.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="HandDrillItem" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0060_HandDrill2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HandDrill2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponDrill_1.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="HandDrill2Item" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0070_HandDrill3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HandDrill3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponDrill_2.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="HandDrill3Item" />
            <BaseProductionTimeInSeconds>36</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0080_HandDrill4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_HandDrill4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponDrill_3.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="HandDrill4Item" />
            <BaseProductionTimeInSeconds>50</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0090_Welder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Welder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponWelder.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Stone" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="WelderItem" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0100_Welder2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Welder2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponWelder_1.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silicon" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="Welder2Item" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0110_Welder3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Welder3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponWelder_2.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Silver" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="Welder3Item" />
            <BaseProductionTimeInSeconds>36</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0120_Welder4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Welder4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\WeaponWelder_3.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Platinum" />
            </Prerequisites>
            <Result Amount="1" TypeId="PhysicalGunObject" SubtypeId="Welder4Item" />
            <BaseProductionTimeInSeconds>50</BaseProductionTimeInSeconds>
        </Blueprint>


		<!-- Ammo -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0010_SemiAutoPistolMagazine</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SemiAutoPistolMagazine</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Pistol_Warfare_Ammo.dds</Icon>
            <Prerequisites>
                <Item Amount="0.25" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.05" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="SemiAutoPistolMagazine" />
            <BaseProductionTimeInSeconds>3</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0020_FullAutoPistolMagazine</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FullAutoPistolMagazine</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Pistol_FullAuto_Warfare_Ammo.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FullAutoPistolMagazine" />
            <BaseProductionTimeInSeconds>6</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0030_ElitePistolMagazine</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ElitePistolMagazine</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Pistol_Elite_Warfare_Ammo.dds</Icon>
            <Prerequisites>
                <Item Amount="0.3" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="ElitePistolMagazine" />
            <BaseProductionTimeInSeconds>5</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0040_AutomaticRifleGun_Mag_20rd</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AutomaticRifleGun_Mag_20rd</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Rifle_Ammo_SemiAuto.dds</Icon>
            <Prerequisites>
                <Item Amount="0.8" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.15" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="AutomaticRifleGun_Mag_20rd" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0050_RapidFireAutomaticRifleGun_Mag_50rd</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_RapidFireAutomaticRifleGun_Mag_50rd</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Rifle_Ammo_RapidFire.dds</Icon>
            <Prerequisites>
                <Item Amount="2" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.4" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="RapidFireAutomaticRifleGun_Mag_50rd" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0060_PreciseAutomaticRifleGun_Mag_5rd</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PreciseAutomaticRifleGun_Mag_5rd</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Rifle_Ammo_Precise.dds</Icon>
            <Prerequisites>
                <Item Amount="0.8" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.15" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="PreciseAutomaticRifleGun_Mag_5rd" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0070_UltimateAutomaticRifleGun_Mag_30rd</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_UltimateAutomaticRifleGun_Mag_30rd</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Rifle_Ammo_Elite.dds</Icon>
            <Prerequisites>
                <Item Amount="1.2" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.4" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.25" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="UltimateAutomaticRifleGun_Mag_30rd" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0080_NATO_25x184mmMagazine</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_NATO_25x184mm</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Ammo_Box.dds</Icon>
            <Prerequisites>
                <Item Amount="40" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3.0" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="NATO_25x184mm" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0090_AutocannonClip</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_AutoCannonClip</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\AutoCanonShellBox.dds</Icon>
            <Prerequisites>
                <Item Amount="25" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="AutocannonClip" />
            <BaseProductionTimeInSeconds>6</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0100_Missile200mm</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_Missile200mm</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\Small_Rocket.dds</Icon>
            <Prerequisites>
                <Item Amount="55" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="7" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Uranium" />
                <Item Amount="0.04" TypeId="Ingot" SubtypeId="Platinum" />
                <Item Amount="1.2" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="Missile200mm" />
            <BaseProductionTimeInSeconds>10</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0110_MediumCalibreAmmo</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_MediumCalibreAmmo</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\MediumCalibreShell.dds</Icon>
            <Prerequisites>
                <Item Amount="15" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="1.2" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="MediumCalibreAmmo" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0120_LargeCalibreAmmo</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_LargeCalibreAmmo</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\LargeCalibreShell.dds</Icon>
            <Prerequisites>
                <Item Amount="60" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="8" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Magnesium" />
                <Item Amount="0.1" TypeId="Ingot" SubtypeId="Uranium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="LargeCalibreAmmo" />
            <BaseProductionTimeInSeconds>14</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0130_SmallRailgunAmmo</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SmallRailgunAmmo</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\RailgunAmmo.dds</Icon>
            <Prerequisites>
                <Item Amount="4" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="5" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="0.2" TypeId="Ingot" SubtypeId="Uranium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="SmallRailgunAmmo" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0140_LargeRailgunAmmo</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_LargeRailgunAmmo</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\RailgunAmmoLarge.dds</Icon>
            <Prerequisites>
                <Item Amount="20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="30" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="1" TypeId="Ingot" SubtypeId="Uranium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="LargeRailgunAmmo" />
            <BaseProductionTimeInSeconds>14</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0005_FlareGunMagazine</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FlareClip</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FlareGun_Ammo.dds</Icon>
            <Prerequisites>
                <Item Amount="0.20" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.05" TypeId="Ingot" SubtypeId="Nickel" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FlareClip" />
            <BaseProductionTimeInSeconds>3</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position0007_FireworksBoxBlue</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxBlue</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxBlue" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position00071_FireworksBoxGreen</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxGreen</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxGreen" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position00072_FireworksBoxRed</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxRed</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxRed" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position00073_FireworksBoxYellow</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxYellow</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxYellow" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position00074_FireworksBoxPink</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxPink</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxPink" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>Position00075_FireworksBoxRainbow</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_FireworksBoxRainbow</DisplayName>
            <Icon>Textures\\GUI\\Icons\\ammo\\FireworksBox.dds</Icon>
            <Prerequisites>
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="0.5" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="AmmoMagazine" SubtypeId="FireworksBoxRainbow" />
            <BaseProductionTimeInSeconds>8</BaseProductionTimeInSeconds>
        </Blueprint>


		<!-- Special Items -->
        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>ZoneChip</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_ZoneChip</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Items\\ZoneChip_Item.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Component" SubtypeId="ZoneChip" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="ZoneChip" />
            <BaseProductionTimeInSeconds>99999</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>EngineerPlushie</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_EngineerPlushie</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Plushie.dds</Icon>
            <Prerequisites>
                <Item Amount="0" TypeId="Component" SubtypeId="EngineerPlushie" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="EngineerPlushie" />
            <BaseProductionTimeInSeconds>99999</BaseProductionTimeInSeconds>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>SabiroidPlushie</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_SabiroidPlushie</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\SabiroidPlushie.dds</Icon>
            <Prerequisites>
                <Item Amount="0" TypeId="Component" SubtypeId="SabiroidPlushie" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="SabiroidPlushie" />
            <BaseProductionTimeInSeconds>99999</BaseProductionTimeInSeconds>
        </Blueprint>
        
        <!-- Prototech -->

        <Blueprint> <!-- This blueprint is only used for economy prices -->
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechScrap</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechPanel</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechPanel_Component.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Ingot" SubtypeId="PrototechScrap" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint> <!-- This blueprint exists to prevent missing blueprint errors -->
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechFrame</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechPanel</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechPanel_Component.dds</Icon>
            <Prerequisites>
                <Item Amount="1" TypeId="Component" SubtypeId="PrototechFrame" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechFrame" />
            <BaseProductionTimeInSeconds>1</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechPanel</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechPanel</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechPanel_Component.dds</Icon>
            <Prerequisites>
                <Item Amount="35" TypeId="Ingot" SubtypeId="Iron" />
				<Item Amount="7" TypeId="Ingot" SubtypeId="Nickel" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="4" TypeId="Ingot" SubtypeId="Magnesium" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechPanel" />
            <BaseProductionTimeInSeconds>4</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechCapacitor</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechCapacitor</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechCapacitor_Component.dds</Icon>
            <Prerequisites>
                <Item Amount="12" TypeId="Ingot" SubtypeId="Iron" />
				<Item Amount="4" TypeId="Ingot" SubtypeId="Silicon" />
				<Item Amount="3" TypeId="Ingot" SubtypeId="Silver" />
				<Item Amount="6" TypeId="Ingot" SubtypeId="Gold" />
				<Item Amount="1.5" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechCapacitor" />
            <BaseProductionTimeInSeconds>16</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechPropulsionUnit</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechPropulsionUnit</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechThrusterComponent.dds</Icon>
            <Prerequisites>
                <Item Amount="60" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="24" TypeId="Ingot" SubtypeId="Cobalt" />
                <Item Amount="6" TypeId="Ingot" SubtypeId="Gold" />
                <Item Amount="3" TypeId="Ingot" SubtypeId="Platinum" />
				<Item Amount="1.25" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechPropulsionUnit" />
            <BaseProductionTimeInSeconds>14</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechMachinery</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechMachinery</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechMachinery_Icon.dds</Icon>
            <Prerequisites>
                <Item Amount="45" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="12" TypeId="Ingot" SubtypeId="Nickel" />
				<Item Amount="7" TypeId="Ingot" SubtypeId="Silicon" />
				<Item Amount="3" TypeId="Ingot" SubtypeId="Gold" />
                <Item Amount="1.15" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechMachinery" />
            <BaseProductionTimeInSeconds>12</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechCircuitry</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechCircuitry</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\prototech_circuitry_component.dds</Icon>
            <Prerequisites>
                <Item Amount="5" TypeId="Ingot" SubtypeId="Iron" />
				<Item Amount="8" TypeId="Ingot" SubtypeId="Silicon" />
                <Item Amount="2" TypeId="Ingot" SubtypeId="Gold" />
				<Item Amount="1.5" TypeId="Ingot" SubtypeId="Platinum" />
                <Item Amount="1.75" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechCircuitry" />
            <BaseProductionTimeInSeconds>11</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>

        <Blueprint>
            <Id>
                <TypeId>BlueprintDefinition</TypeId>
                <SubtypeId>PrototechCoolingUnit</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Item_PrototechCoolingUnit</DisplayName>
            <Icon>Textures\\GUI\\Icons\\component\\PrototechCoolingUnit.dds</Icon>
            <Prerequisites>
                <Item Amount="80" TypeId="Ingot" SubtypeId="Iron" />
                <Item Amount="12" TypeId="Ingot" SubtypeId="Gold" />
				<Item Amount="3.25" TypeId="Ingot" SubtypeId="Platinum" />
				<Item Amount="2.5" TypeId="Ingot" SubtypeId="PrototechScrap" />
            </Prerequisites>
            <Result Amount="1" TypeId="Component" SubtypeId="PrototechCoolingUnit" />
            <BaseProductionTimeInSeconds>9</BaseProductionTimeInSeconds>
            <IsPrimary>true</IsPrimary>
        </Blueprint>
    </Blueprints>
</Definitions>
`;