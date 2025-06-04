// data/dlcScrapRacePt1Data.ts

// Raw XML strings for blocks with DLC "ScrapRace" - Part 1
// The xsi:type attribute has been removed from Definition tags, and xmlns namespaces from the root.
export const dlcScrapRacePt1RawXml: string[] = [
`
<Definitions>
    <CubeBlocks>
        <Definition>
            <Id>
                <TypeId>ExhaustBlock</TypeId>
                <SubtypeId>SmallExhaustPipe</SubtypeId>
            </Id>

            <DisplayName>DisplayName_Block_ExhaustPipe</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\ExhaustPipe_Racing_Small.dds</Icon>
            <Description>Description_ExhaustPipe</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <Model>Models\\Cubes\\Small\\ExhaustPipe_Racing.mwm</Model>
            <ModelOffset x="0" y="0" z="0" />
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\ExhaustPipe_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ExhaustPipe_Racing_Construction2.mwm" />
            </BuildProgressModels>
            <BlockPairName>ExhaustPipe</BlockPairName>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>8</BuildTimeSeconds>
            <PCU>50</PCU>
            <IsAirTight>false</IsAirTight>
            <AvailableEffects>
                <string>Dummy</string>
                <string>CarSmoke</string>
                <string>CarSmokeSmall</string>
                <string>ElectricArc</string>
                <string>ElectricArcSmall</string>
                <string>Fire</string>
                <string>FireSmall</string>
                <string>FireAndSmoke</string>
                <string>FireAndSmokeSmall</string>
                <string>Smoke</string>
                <string>SmokeSmall</string>
                <string>SmokeElectric</string>
                <string>SmokeElectricSmall</string>
                <string>SmokeReactor</string>
                <string>SmokeReactorSmall</string>
                <string>SmokeWhite</string>
                <string>SmokeWhiteSmall</string>
            </AvailableEffects>
            <RequiredPowerInput>0.0002</RequiredPowerInput>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>ExhaustBlock</TypeId>
                <SubtypeId>LargeExhaustPipe</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ExhaustPipe</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\ExhaustPipe_Racing_Large.dds</Icon>
            <Description>Description_ExhaustPipe</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <Model>Models\\Cubes\\Large\\ExhaustPipe_Racing.mwm</Model>
            <ModelOffset x="0" y="0" z="0" />
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="LargeTube" Count="2" />
                <Component Subtype="Motor" Count="4" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\ExhaustPipe_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\ExhaustPipe_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ExhaustPipe_Racing_Construction3.mwm" />
            </BuildProgressModels>
            <BlockPairName>ExhaustPipe</BlockPairName>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <PCU>50</PCU>
            <IsAirTight>false</IsAirTight>
            <AvailableEffects>
                <string>Dummy</string>
                <string>CarSmoke</string>
                <string>CarSmokeSmall</string>
                <string>ElectricArc</string>
                <string>ElectricArcSmall</string>
                <string>Fire</string>
                <string>FireSmall</string>
                <string>FireAndSmoke</string>
                <string>FireAndSmokeSmall</string>
                <string>Smoke</string>
                <string>SmokeSmall</string>
                <string>SmokeElectric</string>
                <string>SmokeElectricSmall</string>
                <string>SmokeReactor</string>
                <string>SmokeReactorSmall</string>
                <string>SmokeWhite</string>
                <string>SmokeWhiteSmall</string>
            </AvailableEffects>
            <RequiredPowerInput>0.0002</RequiredPowerInput>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Cockpit</TypeId>
                <SubtypeId>BuggyCockpit</SubtypeId>
            </Id>
            <YesNoToolbarBackground>true</YesNoToolbarBackground>
            <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Cockpit_Yes</YesNoToolbarYesTooltip>
            <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Cockpit_No</YesNoToolbarNoTooltip>
            <DisplayName>DisplayName_Block_BuggyCockpit</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\BuggyCockpit_Racing.dds</Icon>
            <Description>Description_BuggyCockpit</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\BuggyCockpit_Racing.mwm</Model>
            <PrimarySound>BlockCockpitFlightSeat</PrimarySound>
            <CharacterAnimation>BuggyCockpitPose</CharacterAnimation>
            <UsesDeformation>false</UsesDeformation>
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
            <Center x="0" y="0" z="1" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="2" EndY="3" Default="true" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="1.5" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1.5" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Right" StartX="2" StartY="0" EndX="3" EndY="1.5" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="2" EndY="1" />
            </MountPoints>
            <ScreenAreas>
                <ScreenArea Name="CockpitScreen_01" DisplayName="DisplayName_Screen_Large" TextureResolution="256" ScreenWidth="5" ScreenHeight="3" Script="TSS_Velocity" />
                <ScreenArea Name="CockpitScreen_02" DisplayName="DisplayName_Screen_Left" TextureResolution="256" ScreenWidth="5" ScreenHeight="3" Script="TSS_EnergyHydrogen" />
                <ScreenArea Name="CockpitScreen_03" DisplayName="DisplayName_Screen_Right" TextureResolution="256" ScreenWidth="5" ScreenHeight="3"  Script="TSS_Weather" />
            </ScreenAreas>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\BuggyCockpit_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\BuggyCockpit_Racing_Construction2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>BuggyCockpit</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>24</BuildTimeSeconds>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <EnableFirstPerson>true</EnableFirstPerson>
            <EnableShipControl>true</EnableShipControl>
            <EnableBuilderCockpit>true</EnableBuilderCockpit>
            <TargetLockingEnabled>true</TargetLockingEnabled>
            <IsPressurized>false</IsPressurized>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <RaycastOffset>
                <X>0.016</X>
                <Y>0.4983</Y>
                <Z>0.15</Z>
            </RaycastOffset>
            <PCU>100</PCU>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>Viewport1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Viewport1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Viewport_Racing.dds</Icon>
            <Description>Description_ViewPort</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <GuiVisible>false</GuiVisible>
            <Model>Models\\Cubes\\Large\\Viewport_Racing.mwm</Model>
            <ModelOffset x="0" y="0" z="0" />
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="BulletproofGlass" Count="8" />
                <Component Subtype="Construction" Count="5" />
            </Components>
            <CriticalComponent Subtype="BulletproofGlass" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.5" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.35" />
                <MountPoint Side="Left" StartX="0" StartY="0.9" EndX="1" EndY="1.0" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" Enabled="false" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="0.5" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Viewport_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Viewport_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Viewport_Racing_Construction3.mwm" />
            </BuildProgressModels>
			<BlockPairName>Viewport1</BlockPairName>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>12</BuildTimeSeconds>
            <PCU>1</PCU>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>Viewport2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Viewport2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Viewport2_Racing.dds</Icon>
            <Description>Description_ViewPort</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <GuiVisible>false</GuiVisible>
            <Model>Models\\Cubes\\Large\\Viewport2_Racing.mwm</Model>
            <ModelOffset x="0" y="0" z="0" />
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="BulletproofGlass" Count="8" />
                <Component Subtype="Construction" Count="5" />
            </Components>
            <CriticalComponent Subtype="BulletproofGlass" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.5" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.35" />
                <MountPoint Side="Left" StartX="0" StartY="0.9" EndX="1" EndY="1.0" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" Enabled="false" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="0.5" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Viewport2_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Viewport2_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Viewport2_Racing_Construction3.mwm" />
            </BuildProgressModels>
			<BlockPairName>Viewport2</BlockPairName>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>12</BuildTimeSeconds>
            <PCU>1</PCU>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="15" Subtype="SteelPlate"/>
                <Component Count="15" Subtype="Construction"/>
                <Component Count="6" Subtype="LargeTube"/>
                <Component Count="12" Subtype="SmallTube"/>
                <Component Count="6" Subtype="Motor"/>
                <Component Count="10" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension3x3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension3x3mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.0</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <PropulsionForce>60000</PropulsionForce>
            <RotorPart>OffroadRealWheel</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <GuiVisible>false</GuiVisible>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="40" Subtype="SteelPlate"/>
                <Component Count="40" Subtype="Construction"/>
                <Component Count="20" Subtype="LargeTube"/>
                <Component Count="30" Subtype="SmallTube"/>
                <Component Count="20" Subtype="Motor"/>
                <Component Count="30" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension5x5</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>OffroadSuspension5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <PropulsionForce>100000</PropulsionForce>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel5x5</RotorPart>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large3X</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension1x1_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="15" Subtype="SteelPlate"/>
                <Component Count="15" Subtype="Construction"/>
                <Component Count="6" Subtype="LargeTube"/>
                <Component Count="12" Subtype="SmallTube"/>
                <Component Count="6" Subtype="Motor"/>
                <Component Count="10" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension1x1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <PropulsionForce>20000</PropulsionForce>
            <RotorPart>OffroadRealWheel1x1</RotorPart>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <IsAirTight>false</IsAirTight>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="6" />
                <Component Subtype="SmallTube" Count="12" />
                <Component Subtype="Motor" Count="6" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension2x2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.8</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>40000</PropulsionForce>
            <RotorPart>OffroadRealWheel2x2</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="5" Subtype="SteelPlate"/>
                <Component Count="7" Subtype="Construction"/>
                <Component Count="2" Subtype="SmallTube"/>
                <Component Count="1" Subtype="Motor"/>
                <Component Count="3" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension3x3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension3x3mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.2</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel</RotorPart>
            <PropulsionForce>1920</PropulsionForce>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <GuiVisible>false</GuiVisible>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="10" Subtype="SteelPlate"/>
                <Component Count="12" Subtype="Construction"/>
                <Component Count="4" Subtype="SmallTube"/>
                <Component Count="2" Subtype="Motor"/>
                <Component Count="6" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension5x5_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension5x5</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.3</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel5x5</RotorPart>
            <PropulsionForce>4800</PropulsionForce>
            <MinHeight>-0.5</MinHeight>
            <MaxHeight>0.35</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="5" Subtype="SteelPlate"/>
                <Component Count="7" Subtype="Construction"/>
                <Component Count="2" Subtype="SmallTube"/>
                <Component Count="1" Subtype="Motor"/>
                <Component Count="3" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension1x1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel1x1</RotorPart>
            <PropulsionForce>120</PropulsionForce>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingRight.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="7" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension2x2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.15</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>1000</PropulsionForce>
            <RotorPart>OffroadRealWheel2x2</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension3x3mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="15" Subtype="SteelPlate"/>
                <Component Count="15" Subtype="Construction"/>
                <Component Count="6" Subtype="LargeTube"/>
                <Component Count="12" Subtype="SmallTube"/>
                <Component Count="6" Subtype="Motor"/>
                <Component Count="10" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension3x3mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension3x3</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.0</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <PropulsionForce>60000</PropulsionForce>
            <RotorPart>OffroadRealWheelmirrored</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <Public>true</Public>
            <GuiVisible>false</GuiVisible>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="40" Subtype="SteelPlate"/>
                <Component Count="40" Subtype="Construction"/>
                <Component Count="20" Subtype="LargeTube"/>
                <Component Count="30" Subtype="SmallTube"/>
                <Component Count="20" Subtype="Motor"/>
                <Component Count="30" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension5x5_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension5x5mirrored</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>OffroadSuspension5x5</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <PropulsionForce>100000</PropulsionForce>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel5x5mirrored</RotorPart>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large3X</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\MotorSuspension1x1_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="15" Subtype="SteelPlate"/>
                <Component Count="15" Subtype="Construction"/>
                <Component Count="6" Subtype="LargeTube"/>
                <Component Count="12" Subtype="SmallTube"/>
                <Component Count="6" Subtype="Motor"/>
                <Component Count="10" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.8" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MotorSuspension1x1_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension1x1mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <PropulsionForce>20000</PropulsionForce>
            <RotorPart>OffroadRealWheel1x1mirrored</RotorPart>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSuspension2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension2x2Mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="6" />
                <Component Subtype="SmallTube" Count="12" />
                <Component Subtype="Motor" Count="6" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspension3x3_Racing_Construction3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension2x2Mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSuspension2x2</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.8</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>40000</PropulsionForce>
            <RotorPart>OffroadRealWheel2x2Mirrored</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-1.5</MinHeight>
            <MaxHeight>1.3</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.005</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension3x3mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="5" Subtype="SteelPlate"/>
                <Component Count="7" Subtype="Construction"/>
                <Component Count="2" Subtype="SmallTube"/>
                <Component Count="1" Subtype="Motor"/>
                <Component Count="3" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension3x3mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension3x3</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.2</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheelmirrored</RotorPart>
            <PropulsionForce>1920</PropulsionForce>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <GuiVisible>false</GuiVisible>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="10" Subtype="SteelPlate"/>
                <Component Count="12" Subtype="Construction"/>
                <Component Count="4" Subtype="SmallTube"/>
                <Component Count="2" Subtype="Motor"/>
                <Component Count="6" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension5x5_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension5x5mirrored</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension5x5</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.3</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel5x5mirrored</RotorPart>
            <PropulsionForce>4800</PropulsionForce>
            <MinHeight>-0.5</MinHeight>
            <MaxHeight>0.35</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension1x1Mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Count="5" Subtype="SteelPlate"/>
                <Component Count="7" Subtype="Construction"/>
                <Component Count="2" Subtype="SmallTube"/>
                <Component Count="1" Subtype="Motor"/>
                <Component Count="3" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="Motor"/>
            <MountPoints>
                <MountPoint Default="true" EndX="1.0" EndY="1.0" Side="Bottom" StartX="0.0" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Left" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Right" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Front" StartX="0.25" StartY="0.0"/>
                <MountPoint EndX="0.75" EndY="0.83" Side="Back" StartX="0.25" StartY="0.0"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension1x1mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1.0E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E7</DangerousTorqueThreshold>
            <RotorPart>OffroadRealWheel1x1mirrored</RotorPart>
            <PropulsionForce>120</PropulsionForce>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <Public>true</Public>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>OffroadSmallSuspension2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OffroadSuspension2x2Mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingLeft.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="7" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.83" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MotorSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>OffroadSuspension2x2Mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallSuspension2x2</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.15</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>1000</PropulsionForce>
            <RotorPart>OffroadRealWheel2x2Mirrored</RotorPart>
            <MaxSteer>0.8</MaxSteer>
            <MinHeight>-0.32</MinHeight>
            <MaxHeight>0.26</MaxHeight>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <SafetyDetach>5</SafetyDetach>
            <SafetyDetachMax>5</SafetyDetachMax>
            <AxleFriction>20000</AxleFriction>
            <SteeringSpeed>0.015</SteeringSpeed>
            <AirShockMinSpeed>10</AirShockMinSpeed>
            <AirShockMaxSpeed>25</AirShockMaxSpeed>
            <AirShockActivationDelay>60</AirShockActivationDelay>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <IsAirTight>false</IsAirTight>
            <PCU>50</PCU>
            <DLC>ScrapRace</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel1x1</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension1x1_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Count="1" Subtype="SteelPlate"/>
                <Component Count="5" Subtype="Construction"/>
                <Component Count="1" Subtype="LargeTube"/>
                <Component Count="1" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension1x1_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <MountPoints/>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>OffroadRealWheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheel1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel2x2</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <MechanicalTopInitialPlacementOffset x="-0.25" y="0" z="-0.25" />
            <Size x="2" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension2x2_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="3" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="3" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension2x2_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension2x2_Racing_Construction2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>0.9</ColliderDiameter>
                <ColliderHeight>0.85</ColliderHeight>
                <ColliderOffset>0.27</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints>
            </MountPoints>
            <BlockPairName>OffroadRealWheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallReal2x2WheelMirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="3" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="3" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>1.25</ColliderHeight>
                <ColliderOffset>0.22</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheelmirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <GuiVisible>false</GuiVisible>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel5x5</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension5x5_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel5x5</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheel5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
            <DestroySound>PoofExplosionCat2</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadRealWheel1x1</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\large\\WheelSuspension1x1_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadRealWheel1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
            <DestroySound>PoofExplosionCat2</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadRealWheel2x2</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-1.25" y="0" z="-1.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension2x2_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="LargeTube" Count="15" />
                <Component Subtype="SteelPlate" Count="35" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension2x2_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension2x2_Racing_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension2x2_Racing_Construction3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.88</ColliderHeight>
                <ColliderOffset>0.28</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints>
            </MountPoints>
            <BlockPairName>OffroadRealWheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheel2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadRealWheel</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="2" z="3"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\WheelSuspension3x3_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="50" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SteelPlate" Count="50" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension3x3_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\WheelSuspension3x3_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.62</ColliderHeight>
                <ColliderOffset>0.36</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadRealWheelmirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <GuiVisible>false</GuiVisible>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadRealWheel5x5</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingRight.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Large\\WheelSuspension5x5_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="30" />
                <Component Subtype="Construction" Count="70" />
                <Component Subtype="LargeTube" Count="30" />
                <Component Subtype="SteelPlate" Count="100" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension5x5_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\WheelSuspension5x5_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel5x5</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadRealWheel5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>30.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel1x1mirrored</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingLeft.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension1x1Mirrored_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Count="1" Subtype="SteelPlate"/>
                <Component Count="5" Subtype="Construction"/>
                <Component Count="1" Subtype="LargeTube"/>
                <Component Count="1" Subtype="SteelPlate"/>
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension1x1_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <MountPoints/>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.0058</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>OffroadRealWheel1x1mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheel1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>10.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel2x2Mirrored</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2_RacingLeft.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-0.25" y="0" z="-0.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension2x2mirrored_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="3" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="3" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension2x2_Racing_Construction1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension2x2_Racing_Construction2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>0.9</ColliderDiameter>
                <ColliderHeight>0.85</ColliderHeight>
                <ColliderOffset>0.387</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints>
            </MountPoints>
            <BlockPairName>OffroadRealWheel2x2Mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallReal2x2Wheel</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheelmirrored</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3_RacingLeft.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension3x3Mirrored_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="3" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="3" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension3x3_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension3x3_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>1.25</ColliderHeight>
                <ColliderOffset>0.22</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheelmirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheel</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <GuiVisible>false</GuiVisible>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadSmallRealWheel5x5mirrored</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5_RacingLeft.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\Small\\WheelSuspension5x5Mirrored_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension5x5_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WheelSuspension5x5_Racing_Construction2.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel5x5mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadSmallRealWheel5x5</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
            <DestroySound>PoofExplosionCat2</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>OffroadRealWheel1x1mirrored</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_OffroadWheel1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1_RacingLeft.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1"/>
            <ModelOffset x="0.0" y="0.0" z="0.0"/>
            <Model>Models\\Cubes\\large\\WheelSuspension1x1Mirrored_Racing.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Index="0" Subtype="LargeTube"/>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction1.mwm"/>
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction2.mwm"/>
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\WheelSuspension1x1_Racing_Construction3.mwm"/>
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints/>
            <BlockPairName>OffroadRealWheel1x1mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>OffroadRealWheel1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15.0</BuildTimeSeconds>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
            <DestroySound>PoofExplosionCat2</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
            <SilenceableByShipSoundSystem>false</SilenceableByShipSoundSystem>
            <InventoryMaxVolume>1.0</InventoryMaxVolume>
            <DLC>ScrapRace</DLC>
        </Definition>
    </CubeBlocks>
</Definitions>
`
];
