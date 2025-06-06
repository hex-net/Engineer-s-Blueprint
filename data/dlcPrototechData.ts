// data/dlcPrototechData.ts

// Raw XML strings for blocks with DLC "Automatons" (Corrected to Prototech)
// The xsi:type attribute has been removed from Definition tags.
export const dlcPrototechRawXml: string[] = [
`
<Definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <!-- Prototech Blocks-->
        <Definition>
            <Id>
                <TypeId>JumpDrive</TypeId>
                <SubtypeId>LargePrototechJumpDrive</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechJumpDrive</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_JumpDrive.dds</Icon>
            <Description>Description_Prototech_JumpDrive</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="3" />
            <Center x="1" y="0" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Prototech_JumpDrive.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="GravityGenerator" Count="30" />
                <Component Subtype="PrototechCapacitor" Count="30">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCircuitry" Count="20">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Superconductor" Count="1400" />
                <Component Subtype="Computer" Count="300" />
                <Component Subtype="Construction" Count="180" />
                <Component Subtype="PrototechPanel" Count="200" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Back" StartX="0.5" StartY="0" EndX="2.5" EndY="0.5" />
                <MountPoint Side="Back" StartX="2.5" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Back" StartX="1.2" StartY="1.2" EndX="1.8" EndY="1.8" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Front" StartX="0.5" StartY="0" EndX="2.5" EndY="0.5" />
                <MountPoint Side="Front" StartX="2.5" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Front" StartX="1.2" StartY="1.2" EndX="1.8" EndY="1.8" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_JumpDrive_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_JumpDrive_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_JumpDrive_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechJumpDrive</BlockPairName>
            <MirroringY>X</MirroringY>
            <MirroringX>Y</MirroringX>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>120</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <DamageEffectName>Damage_Electrical_Prototech_JumpDrive_L</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>

            <ResourceSinkGroup>Charging</ResourceSinkGroup>
            <RequiredPowerInput>64</RequiredPowerInput>
            <PowerNeededForJump>5</PowerNeededForJump>
            <PowerEfficiency>0.9</PowerEfficiency>

            <MaxJumpDistance>6000000</MaxJumpDistance>
            <MaxJumpMass>2500000</MaxJumpMass>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>Explosion_Warhead_30</DestroyEffect>
            <DestroySound>WepLrgWarheadExpl</DestroySound>

            <ShipJumpDriveChargingSound>ShipPrototechJumpDriveCharging</ShipJumpDriveChargingSound>
            <ShipJumpDriveJumpInSound>ShipPrototechJumpDriveJumpIn</ShipJumpDriveJumpInSound>
            <ShipJumpDriveJumpOutSound>ShipJumpDriveJumpOut</ShipJumpDriveJumpOutSound>
            <JumpParticleEffect>Warp_Prototech</JumpParticleEffect>
            
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
            <PCU>80</PCU>
            <DLC>Automatons</DLC> <!-- Assuming Prototech is part of Automatons based on folder structure of other DLCs, update if incorrect -->
        </Definition>

        <Definition>
            <Id>
                <TypeId>JumpDrive</TypeId>
                <SubtypeId>SmallPrototechJumpDrive</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechJumpDrive</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_JumpDrive_small.dds</Icon>
            <Description>Description_Prototech_JumpDrive</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="4" />
            <Center x="1" y="0" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Prototech_JumpDrive.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="GravityGenerator" Count="4" />
                <Component Subtype="PrototechCapacitor" Count="8">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCircuitry" Count="4">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Superconductor" Count="100" />
                <Component Subtype="Computer" Count="20" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="PrototechPanel" Count="15" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="1.1" StartY="1.4" EndX="1.9" EndY="2.6" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="2" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="4" EndY="2" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="3" EndY="2" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="4" EndY="2" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="4" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\Prototech_JumpDrive_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Prototech_JumpDrive_Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechJumpDrive</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>40</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <DamageEffectName>Damage_Electrical_Prototech_JumpDrive_S</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>

            <ResourceSinkGroup>Charging</ResourceSinkGroup>
            <RequiredPowerInput>24</RequiredPowerInput>
            <PowerNeededForJump>1.5</PowerNeededForJump>
            <PowerEfficiency>0.9</PowerEfficiency>

            <MaxJumpDistance>500000</MaxJumpDistance>
            <MaxJumpMass>120000</MaxJumpMass>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>Explosion_Warhead_30</DestroyEffect>
            <DestroySound>WepLrgWarheadExpl</DestroySound>

            <ShipJumpDriveChargingSound>ShipPrototechJumpDriveCharging</ShipJumpDriveChargingSound>
            <ShipJumpDriveJumpInSound>ShipPrototechJumpDriveJumpIn</ShipJumpDriveJumpInSound>
            <ShipJumpDriveJumpOutSound>ShipJumpDriveJumpOut</ShipJumpDriveJumpOutSound>
            <JumpParticleEffect>Warp_Prototech</JumpParticleEffect>
            
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
            <PCU>80</PCU>
            <DLC>Automatons</DLC>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Thrust</TypeId>
                <SubtypeId>LargeBlockPrototechThruster</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechThruster</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Thruster_Large.dds</Icon>
            <Description>Description_Prototech_Thrust</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="8" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="1" y="1" z="7" />
            <Model>Models\\Cubes\\Large\\Prototech_Thruster_Large.mwm</Model>
            <ThrusterType>Prototech</ThrusterType>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="200" />
                <Component Subtype="Construction" Count="280" />
                <Component Subtype="PrototechCoolingUnit" Count="5">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPropulsionUnit" Count="60">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="250" />
                <Component Subtype="LargeTube" Count="160" />
                <Component Subtype="Construction" Count="45" />
                <Component Subtype="PrototechPanel" Count="300" />
            </Components>
            <CriticalComponent Subtype="PrototechPropulsionUnit" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="3" />
                <MountPoint Side="Top" StartX="1" StartY="3" EndX="2" EndY="5" />
                <MountPoint Side="Top" StartX="0.5" StartY="5" EndX="2.5" EndY="5.5" />
                <MountPoint Side="Bottom" StartX="0.5" StartY="2.5" EndX="2.5" EndY="3" />
                <MountPoint Side="Bottom" StartX="1" StartY="3" EndX="2" EndY="5" />
                <MountPoint Side="Bottom" StartX="0" StartY="5" EndX="3" EndY="8" />
                <MountPoint Side="Left" StartX="2.5" StartY="0.5" EndX="3" EndY="2.5" />
                <MountPoint Side="Left" StartX="5" StartY="0" EndX="8" EndY="3" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="3" EndY="3" />
                <MountPoint Side="Right" StartX="5" StartY="0.5" EndX="5.5" EndY="2.5" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_Thruster_Large_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_Thruster_Large_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_Thruster_Large_Construction_3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>PrototechThruster</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>90</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>

            <ResourceSinkGroup>Thrust</ResourceSinkGroup>
            <ForceMagnitude>14040000</ForceMagnitude>
            <MaxPowerConsumption>67.2</MaxPowerConsumption>
            <MinPowerConsumption>0.000002</MinPowerConsumption>
            <SlowdownFactor>1</SlowdownFactor>

            <MinPlanetaryInfluence>0</MinPlanetaryInfluence>
            <MaxPlanetaryInfluence>1</MaxPlanetaryInfluence>
            <EffectivenessAtMinInfluence>1</EffectivenessAtMinInfluence>
            <EffectivenessAtMaxInfluence>0.3</EffectivenessAtMaxInfluence>

            <FlameDamageLengthScale>0.75</FlameDamageLengthScale>
            <FlameDamage>1</FlameDamage>
            <FlameLengthScale>1.30</FlameLengthScale>
            <FlameIdleColor>
                <X>0.3</X>
                <Y>0.5</Y>
                <Z>0.8</Z>
                <W>0.80</W>
            </FlameIdleColor>
            <FlameFullColor>
                <X>0.3</X>
                <Y>0.5</Y>
                <Z>0.8</Z>
                <W>0.80</W>
            </FlameFullColor>
            <FlamePointMaterial>PrototechPointThrustMiddle</FlamePointMaterial>
            <FlameLengthMaterial>PrototechThrustMiddle</FlameLengthMaterial>
            <FlameFlare>LargeGridLargeThruster</FlameFlare>
            <FlameVisibilityDistance>1500</FlameVisibilityDistance>
            <FlameGlareQuerySize>1.5</FlameGlareQuerySize>
            <PrimarySound>LrgShipLrgJet</PrimarySound>
            <DamageEffectName>Damage_Electrical_Prototech_Thruster_L</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>12</PCU>
            <DLC>Automatons</DLC>
            <TieredUpdateTimes>
                <unsignedInt>100</unsignedInt>
                <unsignedInt>3600</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Thrust</TypeId>
                <SubtypeId>SmallBlockPrototechThruster</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechThruster</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Thruster_Small.dds</Icon>
            <Description>Description_Prototech_Thrust</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="8" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="1" y="1" z="7" />
            <Model>Models\\Cubes\\Small\\Prototech_Thruster_Small.mwm</Model>
            <ThrusterType>Prototech</ThrusterType>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="2" />
                <Component Subtype="Construction" Count="4" />
                <Component Subtype="PrototechCoolingUnit" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPropulsionUnit" Count="3">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="5" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="Construction" Count="8" />
                <Component Subtype="PrototechPanel" Count="8" />
            </Components>
            <CriticalComponent Subtype="PrototechPropulsionUnit" Index="0" />			
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="2.2" />
                <MountPoint Side="Bottom" StartX="0" StartY="5.8" EndX="3" EndY="8" />
                <MountPoint Side="Left" StartX="2.3" StartY="1.3" EndX="3.8" EndY="1.7" />
                <MountPoint Side="Left" StartX="5.8" StartY="0" EndX="8" EndY="3" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="2.2" EndY="3" />
                <MountPoint Side="Right" StartX="4.2" StartY="1.3" EndX="5.7" EndY="1.7" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Prototech_Thruster_Small_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Prototech_Thruster_Small_Construction_2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.2</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>PrototechThruster</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <EdgeType>Light</EdgeType>

            <ResourceSinkGroup>Thrust</ResourceSinkGroup>
            <ForceMagnitude>561600</ForceMagnitude>
            <MaxPowerConsumption>4.8</MaxPowerConsumption>
            <MinPowerConsumption>0.000002</MinPowerConsumption>
            <SlowdownFactor>1</SlowdownFactor>

            <MinPlanetaryInfluence>0</MinPlanetaryInfluence>
            <MaxPlanetaryInfluence>1</MaxPlanetaryInfluence>
            <EffectivenessAtMinInfluence>1</EffectivenessAtMinInfluence>
            <EffectivenessAtMaxInfluence>0.3</EffectivenessAtMaxInfluence>

            <FlameDamageLengthScale>0.70</FlameDamageLengthScale>
            <FlameDamage>1</FlameDamage>
            <FlameLengthScale>1.5</FlameLengthScale>
            <FlameIdleColor>
                <X>0.3</X>
                <Y>0.5</Y>
                <Z>0.8</Z>
                <W>0.80</W>
            </FlameIdleColor>
            <FlameFullColor>
                <X>0.3</X>
                <Y>0.5</Y>
                <Z>0.8</Z>
                <W>0.80</W>
            </FlameFullColor>
            <FlamePointMaterial>PrototechPointThrustMiddle</FlamePointMaterial>
            <FlameLengthMaterial>PrototechThrustMiddle</FlameLengthMaterial>
            <FlameFlare>SmallGridLargeThruster</FlameFlare>
            <FlameVisibilityDistance>500</FlameVisibilityDistance>
            <FlameGlareQuerySize>0.5</FlameGlareQuerySize>
            <PrimarySound>SmShipLrgJet</PrimarySound>
            <DamageEffectName>Damage_Electrical_Prototech_Thruster_S</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>12</PCU>
            <DLC>Automatons</DLC>
            <TieredUpdateTimes>
                <unsignedInt>100</unsignedInt>
                <unsignedInt>3600</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Refinery</TypeId>
                <SubtypeId>LargePrototechRefinery</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechRefinery</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Refinery.dds</Icon>
            <Description>Description_Prototech_Refinery</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="2" z="4" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Prototech_Refinery.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="375" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="PrototechMachinery" Count="10">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCoolingUnit" Count="5">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="MetalGrid" Count="20" />
                <Component Subtype="Computer" Count="20" />
                <Component Subtype="PrototechPanel" Count="300" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <Center x="1" y="0" z="1" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0.1" EndX="0.1" EndY="1" />
                <MountPoint Side="Back" StartX="0.1" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Back" StartX="1" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Back" StartX="1.9" StartY="1" EndX="2" EndY="1.9" />
                <MountPoint Side="Back" StartX="1" StartY="1.9" EndX="1.9" EndY="2" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="2" />
                <MountPoint Side="Front" StartX="1" StartY="0" EndX="2" EndY="1.5" />
                <MountPoint Side="Front" StartX="1" StartY="1.5" EndX="1.5" EndY="2" />
                <MountPoint Side="Bottom" StartX="0" StartY="0.2" EndX="3" EndY="2" Default="true" />
                <MountPoint Side="Bottom" StartX="0.5" StartY="2" EndX="1.8" EndY="4" />
                <MountPoint Side="Top" StartX="1" StartY="0" EndX="1.6" EndY="2" />
                <MountPoint Side="Top" StartX="1.9" StartY="2" EndX="2" EndY="3.85" />
                <MountPoint Side="Top" StartX="0.5" StartY="3.85" EndX="2" EndY="4" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.15" EndY="1.5" />
                <MountPoint Side="Left" StartX="0.15" StartY="0" EndX="2" EndY="0.1" />
                <MountPoint Side="Left" StartX="2" StartY="0.4" EndX="4" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0.2" EndX="2" EndY="1.5" />
                <MountPoint Side="Right" StartX="2" StartY="0.2" EndX="4" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_Refinery_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_Refinery_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_Refinery_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechRefinery</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>90</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <InventoryMaxVolume>7.5</InventoryMaxVolume>
            <InventorySize>
                <X>2.5</X>
                <Y>2.5</Y>
                <Z>2.5</Z>
            </InventorySize>

            <InventoryFillFactorMin>0.3</InventoryFillFactorMin>
            <InventoryFillFactorMax>0.6</InventoryFillFactorMax>

            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <OperationalPowerConsumption>1.12</OperationalPowerConsumption>
            <BlueprintClasses>
                <Class>Ingots</Class>
            </BlueprintClasses>
            <RefineSpeed>5.5</RefineSpeed>
            <MaterialEfficiency>2.0</MaterialEfficiency>
            <IngotAmountPerPullRequest>2000</IngotAmountPerPullRequest>
            <DamageEffectName>Damage_Electrical_Prototech_Large</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <PrimarySound>BlockRafinery</PrimarySound>
            <ActionSound>BlockRafineryProcess</ActionSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <MirroringX>HalfZ</MirroringX>
            <MirroringY>ZHalfZ</MirroringY>
            <MirroringZ>YHalfZ</MirroringZ>
            <PCU>90</PCU>
            <DLC>Automatons</DLC>
            <TieredUpdateTimes>
                <unsignedInt>60</unsignedInt>
                <unsignedInt>120</unsignedInt>
                <unsignedInt>240</unsignedInt>
            </TieredUpdateTimes>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Refinery</TypeId>
                <SubtypeId>SmallPrototechRefinery</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechRefinery</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Refinery_Small.dds</Icon>
            <Description>Description_Prototech_Refinery</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="5" z="10" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Prototech_Refinery_Small.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="50" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="PrototechMachinery" Count="3">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCoolingUnit" Count="2">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="LargeTube" Count="16" />
                <Component Subtype="MetalGrid" Count="20" />
                <Component Subtype="Computer" Count="20" />
                <Component Subtype="PrototechPanel" Count="20" />			
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <Center x="2" y="2" z="5" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.5" StartY="0.4" EndX="4.5" EndY="4.6" />
                <MountPoint Side="Bottom" StartX="0" StartY="3" EndX="5" EndY="9.5" />
                <MountPoint Side="Bottom" StartX="1" StartY="2" EndX="4" EndY="3" />
                <MountPoint Side="Top" StartX="0.6" StartY="9.2" EndX="1.4" EndY="10" />
                <MountPoint Side="Top" StartX="3.6" StartY="9.2" EndX="4.4" EndY="10" />
                <MountPoint Side="Left" StartX="0" StartY="0.6" EndX="0.6" EndY="1.6" />
                <MountPoint Side="Left" StartX="0" StartY="3.6" EndX="0.6" EndY="4.4" />
                <MountPoint Side="Left" StartX="3.2" StartY="0" EndX="9" EndY="1.5" />
                <MountPoint Side="Right" StartX="1" StartY="0" EndX="6.8" EndY="1.5" />
                <MountPoint Side="Right" StartX="9.4" StartY="0.6" EndX="10" EndY="1.4" />
                <MountPoint Side="Right" StartX="9.4" StartY="3.6" EndX="10" EndY="4.4" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Prototech_Refinery_Small_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Prototech_Refinery_Small_Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechRefinery</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>40</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <InventoryMaxVolume>3.5</InventoryMaxVolume>
            <InventorySize>
                <X>1</X>
                <Y>1</Y>
                <Z>1</Z>
            </InventorySize>

            <InventoryFillFactorMin>0.3</InventoryFillFactorMin>
            <InventoryFillFactorMax>0.6</InventoryFillFactorMax>

            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <OperationalPowerConsumption>0.425</OperationalPowerConsumption>
            <BlueprintClasses>
                <Class>Ingots</Class>
            </BlueprintClasses>
            <RefineSpeed>1.5</RefineSpeed>
            <MaterialEfficiency>1.25</MaterialEfficiency>
            <IngotAmountPerPullRequest>2000</IngotAmountPerPullRequest>
            <DamageEffectName>Damage_Electrical_Prototech_Small</DamageEffectName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <PrimarySound>BlockRafinery</PrimarySound>
            <ActionSound>BlockRafineryProcess</ActionSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>90</PCU>
            <DLC>Automatons</DLC>
            <TieredUpdateTimes>
                <unsignedInt>60</unsignedInt>
                <unsignedInt>120</unsignedInt>
                <unsignedInt>240</unsignedInt>
            </TieredUpdateTimes>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Assembler</TypeId>
                <SubtypeId>LargePrototechAssembler</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechAssembler</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Assembler.dds</Icon>
            <Description>Description_PrototechAssembler</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="2" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Prototech_Assembler.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="160" />
                <Component Subtype="Construction" Count="130" />
                <Component Subtype="PrototechMachinery" Count="20">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCoolingUnit" Count="2">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="80" />
                <Component Subtype="Computer" Count="200" />
                <Component Subtype="Display" Count="10" />
                <Component Subtype="PrototechPanel" Count="80" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="0.2" />
                <MountPoint Side="Back" StartX="1.3" StartY="0.3" EndX="2.9" EndY="0.9" />
                <MountPoint Side="Back" StartX="0" StartY="1.9" EndX="3" EndY="2" />
                <MountPoint Side="Back" StartX="0" StartY="1.2" EndX="0.1" EndY="1.9" />
                <MountPoint Side="Back" StartX="2.9" StartY="1.2" EndX="3" EndY="1.9" />
                <MountPoint Side="Bottom" StartX="0" StartY="0.2" EndX="3" EndY="2" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="1" />
                <MountPoint Side="Top" StartX="0.1" StartY="1" EndX="0.9" EndY="1.9" />
                <MountPoint Side="Left" StartX="0.2" StartY="0" EndX="2" EndY="0.2" />
                <MountPoint Side="Left" StartX="0.7" StartY="0.2" EndX="1" EndY="1.8" />
                <MountPoint Side="Left" StartX="1" StartY="0.9" EndX="2" EndY="2" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1.8" EndY="0.2" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.2" EndX="1.2" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="1" EndX="1" EndY="2" />
                <MountPoint Side="Right" StartX="1" StartY="1" EndX="1.3" EndY="1.8" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_Assembler_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_Assembler_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_Assembler_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechAssembler</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>120</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <InventoryMaxVolume>6</InventoryMaxVolume>
            <InventorySize>
                <X>1</X>
                <Y>1</Y>
                <Z>1</Z>
            </InventorySize>
            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <OperationalPowerConsumption>4</OperationalPowerConsumption>
            <BlueprintClasses>
                <Class>PrototechComponents</Class>
            </BlueprintClasses>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <DamageEffectName>Damage_Electrical_Prototech_Assembler</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <PrimarySound>BlockAssembler</PrimarySound>
            <ActionSound>BlockAssemblerProcess</ActionSound>
            <IgnoreEfficiencyMultiplier>true</IgnoreEfficiencyMultiplier>
            <DestroyEffect>Explosion_Missile</DestroyEffect>
            <DestroySound>WepSmallMissileExpl</DestroySound>
            <PCU>40</PCU>
            <DLC>Automatons</DLC>
            <TieredUpdateTimes>
                <unsignedInt>60</unsignedInt>
                <unsignedInt>120</unsignedInt>
                <unsignedInt>240</unsignedInt>
            </TieredUpdateTimes>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Gyro</TypeId>
                <SubtypeId>LargeBlockPrototechGyro</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechGyroscope</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Gyroscope_large.dds</Icon>
            <Description>Description_Prototech_Gyroscope</Description>
            <CubeSize>Large</CubeSize>
            <SimpleUpdateVisualOnSkinChange>true</SimpleUpdateVisualOnSkinChange>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Prototech_Gyroscope.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="200" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="PrototechCircuitry" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechMachinery" Count="2">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="LargeTube" Count="16" />
                <Component Subtype="MetalGrid" Count="50" />
                <Component Subtype="Computer" Count="5" />
                <Component Subtype="PrototechPanel" Count="100" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Front" StartX="0" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0.1" EndX="0.1" EndY="0.9" />
                <MountPoint Side="Front" StartX="0.9" StartY="0.1" EndX="1" EndY="0.9" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Right" StartX="0" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0.1" EndX="0.1" EndY="0.9" />
                <MountPoint Side="Right" StartX="0.9" StartY="0.1" EndX="1" EndY="0.9" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Left" StartX="0" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0.1" EndX="0.1" EndY="0.9" />
                <MountPoint Side="Left" StartX="0.9" StartY="0.1" EndX="1" EndY="0.9" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_Gyroscope_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_Gyroscope_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_Gyroscope_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechGyroscope</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>60</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <PrimarySound>BlockGyroscope</PrimarySound>

            <ResourceSinkGroup>Gyro</ResourceSinkGroup>
            <ForceMagnitude>201600000</ForceMagnitude>
            <RequiredPowerInput>0.01</RequiredPowerInput>

            <DamageEffectName>Damage_Electrical_Prototech_Gyroscope_L</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <DLC>Automatons</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Gyro</TypeId>
                <SubtypeId>SmallBlockPrototechGyro</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechGyroscope</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Gyroscope_Small.dds</Icon>
            <Description>Description_Prototech_Gyroscope</Description>
            <CubeSize>Small</CubeSize>
            <SimpleUpdateVisualOnSkinChange>true</SimpleUpdateVisualOnSkinChange>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="2" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Prototech_Gyroscope.mwm</Model>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="30" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="PrototechCircuitry" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechMachinery" Count="2">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="LargeTube" Count="4" />
                <Component Subtype="MetalGrid" Count="5" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="PrototechPanel" Count="40" />
            </Components>			
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="2" EndY="2" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="2" EndY="2" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="2" EndY="2" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="0.1" />
                <MountPoint Side="Front" StartX="0" StartY="1.9" EndX="2" EndY="2" />
                <MountPoint Side="Front" StartX="0" StartY="0.1" EndX="0.1" EndY="1.9" />
                <MountPoint Side="Front" StartX="1.9" StartY="0.1" EndX="2" EndY="1.9" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="2" EndY="0.1" />
                <MountPoint Side="Right" StartX="0" StartY="1.9" EndX="2" EndY="2" />
                <MountPoint Side="Right" StartX="0" StartY="0.1" EndX="0.1" EndY="1.9" />
                <MountPoint Side="Right" StartX="1.9" StartY="0.1" EndX="2" EndY="1.9" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="2" EndY="0.1" />
                <MountPoint Side="Left" StartX="0" StartY="1.9" EndX="2" EndY="2" />
                <MountPoint Side="Left" StartX="0" StartY="0.1" EndX="0.1" EndY="1.9" />
                <MountPoint Side="Left" StartX="1.9" StartY="0.1" EndX="2" EndY="1.9" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Prototech_Gyroscope_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Prototech_Gyroscope_Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechGyroscope</BlockPairName>
            <BuildTimeSeconds>35</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <EdgeType>Light</EdgeType>
            <PrimarySound>BlockGyroscope</PrimarySound>

            <ResourceSinkGroup>Gyro</ResourceSinkGroup>
            <ForceMagnitude>4480000</ForceMagnitude>
            <RequiredPowerInput>0.002</RequiredPowerInput>

            <DamageEffectName>Damage_Electrical_Prototech_Gyroscope_S</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <DLC>Automatons</DLC>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>BatteryBlock</TypeId>
                <SubtypeId>LargeBlockPrototechBattery</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechBattery</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\PrototechBattery.dds</Icon>
            <Description>Description_Prototech_Battery</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\PrototechBattery.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="PrototechCircuitry" Count="3">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCapacitor" Count="20">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="16" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="Computer" Count="25" />
                <Component Subtype="PrototechPanel" Count="60" />
            </Components>
            <CriticalComponent Subtype="PrototechCapacitor" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0.1" EndX="2" EndY="0.9" />
                <MountPoint Side="Top" StartX="0" StartY="0.1" EndX="2" EndY="0.9" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0.1" EndX="2" EndY="0.9" />
                <MountPoint Side="Right" StartX="0.1" StartY="0" EndX="0.9" EndY="1" />
                <MountPoint Side="Left" StartX="0.1" StartY="0" EndX="0.9" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PrototechBattery_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PrototechBattery_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PrototechBattery_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechBattery</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>60</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>BatteryBlock</ResourceSinkGroup>
            <MaxPowerOutput>48</MaxPowerOutput>
            <RequiredPowerInput>24</RequiredPowerInput>
            <AdaptibleInput>true</AdaptibleInput>
            <MaxStoredPower>18</MaxStoredPower>
            <InitialStoreddPowerRatio>0.3</InitialStoreddPowerRatio>
            <RechargeMultiplier>0.9</RechargeMultiplier>
            <DamageEffectName>Damage_Electrical_Prototech_Battery_L</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>15</PCU>
            <IsAirTight>true</IsAirTight>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <DLC>Automatons</DLC>
            <TargetingGroups>
                <string>PowerSystems</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>BatteryBlock</TypeId>
                <SubtypeId>SmallBlockPrototechBattery</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechBattery</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\PrototechBatterySmall.dds</Icon>
            <Description>Description_Prototech_Battery</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\PrototechBatterySmall.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Construction" Count="2" />
               <Component Subtype="PrototechCircuitry" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCapacitor" Count="6">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="4" />
                <Component Subtype="Construction" Count="3" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="PrototechPanel" Count="6" />
            </Components>		
            <CriticalComponent Subtype="PrototechCapacitor" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="2.9" EndY="0.9" />
                <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="2.9" EndY="1.9" />
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="2.9" EndY="1.9" />
                <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="2.9" EndY="0.9" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="1.9" EndY="0.9" />
                <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="1.9" EndY="0.9" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\PrototechBatterySmall_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\PrototechBatterySmall_Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechBattery</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>BatteryBlock</ResourceSinkGroup>
            <MaxStoredPower>2</MaxStoredPower>
            <MaxPowerOutput>2.8</MaxPowerOutput>
            <RequiredPowerInput>8</RequiredPowerInput>
            <InitialStoreddPowerRatio>0.3</InitialStoreddPowerRatio>
            <RechargeMultiplier>0.9</RechargeMultiplier>
            <InventorySize>
                <X>1</X>
                <Y>1</Y>
                <Z>1</Z>
            </InventorySize>
            <DamageEffectName>Damage_Electrical_Prototech_Battery_S</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>15</PCU>
            <IsAirTight>true</IsAirTight>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <DLC>Automatons</DLC>
            <TargetingGroups>
                <string>PowerSystems</string>
            </TargetingGroups>
        </Definition>

        <Definition>
            <Id>
                <TypeId>Drill</TypeId>
                <SubtypeId>LargeBlockPrototechDrill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechDrill</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\PrototechDrill.dds</Icon>
            <Description>Description_Prototech_Drill</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="4" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\PrototechDrill.mwm</Model>
            <PlaceDecals>false</PlaceDecals>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Construction" Count="200" />
                <Component Subtype="LargeTube" Count="120" />
                <Component Subtype="PrototechMachinery" Count="20">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCoolingUnit" Count="3">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="MetalGrid" Count="80" />
                <Component Subtype="Computer" Count="20" />
                <Component Subtype="PrototechPanel" Count="200" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Right" StartX="0" StartY="0.5" EndX="0.4" EndY="2.5" />
                <MountPoint Side="Right" StartX="0" StartY="1.2" EndX="0.8" EndY="1.8" />
                <MountPoint Side="Left" StartX="3.6" StartY="0.5" EndX="4" EndY="2.5" />
                <MountPoint Side="Left" StartX="3.2" StartY="1.2" EndX="4" EndY="1.8" />
                <MountPoint Side="Top" StartX="0.5" StartY="0" EndX="2.5" EndY="0.4" />
                <MountPoint Side="Bottom" StartX="0.5" StartY="3.6" EndX="2.5" EndY="4" />
                <MountPoint Side="Back" StartX="0" StartY="0.3" EndX="3" EndY="2.7" Default="true" />
                <MountPoint Side="Back" StartX="0.3" StartY="0" EndX="2.7" EndY="0.3" />
                <MountPoint Side="Back" StartX="0.3" StartY="2.7" EndX="2.7" EndY="3" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PrototechDrill_Construction1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PrototechDrill_Construction2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PrototechDrill_Construction3.mwm" />
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
            <BlockPairName>PrototechDrill</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>60</BuildTimeSeconds>
            <DisassembleRatio>5</DisassembleRatio>
            <Center x="1" y="1" z="3" />
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <InventorySize>
                <X>0.5</X>
                <Y>0.5</Y>
                <Z>0.5</Z>
            </InventorySize>
            <SensorRadius>4</SensorRadius>
            <SensorOffset>3</SensorOffset>
            <CutOutRadius>6</CutOutRadius>
            <CutOutOffset>3</CutOutOffset>  
            <CounterRotatingSubparts>
                <string>Models\\Cubes\\Large\\PrototechDrill_Mid.mwm</string>
            </CounterRotatingSubparts>
            <DiscardingMultiplier>1.4</DiscardingMultiplier>
            <Speed>3</Speed>
            <ParticleOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-5.15</Z>
            </ParticleOffset>
            <DeformationRatio>0.2</DeformationRatio>
            <DamageEffectName>Damage_Electrical_Prototech_Drill</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <PrimarySound>ToolShipDrillIdle</PrimarySound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>

            <DustEffect>Smoke_DrillDust_Prototech</DustEffect>
            <DustStoneEffect>Smoke_DrillDust_Prototech</DustStoneEffect>
            <DrillingMaterialName>ShipDrill_Prototech</DrillingMaterialName>
            
            <PCU>300</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>HydrogenEngine</TypeId>
                <SubtypeId>LargePrototechReactor</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PrototechReactor</DisplayName>
            <Description>Description_PrototechReactor</Description>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Prototech_Reactor.dds</Icon>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="2" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Prototech_Reactor.mwm</Model>
            <Components>
                <Component Subtype="PrototechFrame" Count="1">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechPanel" Count="125" />
                <Component Subtype="Construction" Count="200" />
                <Component Subtype="PrototechCapacitor" Count="10">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="PrototechCoolingUnit" Count="30">
                    <DeconstructId>
                        <TypeId>Ingot</TypeId>
                        <SubtypeId>PrototechScrap</SubtypeId>
                    </DeconstructId>
                </Component>
                <Component Subtype="Superconductor" Count="400" />
                <Component Subtype="Reactor" Count="1000" />
                <Component Subtype="Computer" Count="100" />
                <Component Subtype="PrototechPanel" Count="275" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0.15" EndX="3" EndY="2" Default="true" />
                <MountPoint Side="Front" StartX="0" StartY="0.15" EndX="0.1" EndY="1" />
                <MountPoint Side="Front" StartX="2.9" StartY="0.15" EndX="3" EndY="1" />
                <MountPoint Side="Back" StartX="0.1" StartY="0" EndX="2.9" EndY="0.9" />
                <MountPoint Side="Back" StartX="0" StartY="0.9" EndX="0.9" EndY="1.5" />
                <MountPoint Side="Back" StartX="2.1" StartY="0.9" EndX="3" EndY="1.5" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1.9" EndY="1" />
                <MountPoint Side="Left" StartX="0.5" StartY="1" EndX="2" EndY="1.5" />
                <MountPoint Side="Right" StartX="0.1" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="1" EndX="1.5" EndY="1.5" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Prototech_Reactor_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Prototech_Reactor_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Prototech_Reactor_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>PrototechReactor</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>120</BuildTimeSeconds>
			<DisassembleRatio>5</DisassembleRatio>
            <ResourceSinkGroup>Generators</ResourceSinkGroup>
            <ResourceSourceGroup>Reactors</ResourceSourceGroup>
            <MaxPowerOutput>400</MaxPowerOutput>
            <FuelCapacity>150000</FuelCapacity>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <IsAirTight>false</IsAirTight>
            <InventorySize>
                <X>1</X>
                <Y>1</Y>
                <Z>1</Z>
            </InventorySize>
            <FuelInfos>
                <FuelInfo>
                    <Id>
                        <TypeId>GasProperties</TypeId>
                        <SubtypeId>Hydrogen</SubtypeId>
                    </Id>
                </FuelInfo>
            </FuelInfos>
            <FuelProductionToCapacityMultiplier>0.4</FuelProductionToCapacityMultiplier>
            <PrimarySound>ArcShipLrgFusionLrg</PrimarySound>

            <DamageEffectName>Damage_Electrical_Prototech_Reactor</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>Explosion_Warhead_02</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
			<AnimationSpeed>1.5</AnimationSpeed>
            <AnimationSpinUpSpeed>0.3</AnimationSpinUpSpeed>
            <AnimationSpinDownSpeed>0.3</AnimationSpinDownSpeed>

            <PCU>25</PCU>
            <DLC>Automatons</DLC>
            <TargetingGroups>
                <string>PowerSystems</string>
            </TargetingGroups>
        </Definition>
    </CubeBlocks>
</Definitions>
`
];