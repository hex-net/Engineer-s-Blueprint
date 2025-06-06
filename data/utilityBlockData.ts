// data/utilityBlockData.ts

// Raw XML strings for blocks from Utility.sbc
export const utilityBlockDataRawXml: string[] = [
`<?xml version="1.0" encoding="utf-8"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <Definition xsi:type="MyObjectBuilder_LandingGearDefinition">
            <Id>
                <TypeId>LandingGear</TypeId>
                <SubtypeId>LargeBlockLandingGear</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_LandingGear</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\landing_gear.dds</Icon>
            <Description>Description_LandingGear</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\LandingGear.mwm</Model>
            <LockSound>ShipLandGearOn</LockSound>
            <UnlockSound>ShipLandGearOff</UnlockSound>
            <FailedAttachSound>ShipLandGearNothing01</FailedAttachSound>
            <Components>
                <Component Subtype="SteelPlate" Count="100" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="Motor" Count="6" />
                <Component Subtype="SteelPlate" Count="50" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="1" EndX="1" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\LandingGearConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\LandingGearConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\LandingGearConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>LandingGear</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <MaxLockSeparatingVelocity>7</MaxLockSeparatingVelocity>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>35</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_LandingGearDefinition">
            <Id>
                <TypeId>LandingGear</TypeId>
                <SubtypeId>SmallBlockLandingGear</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_LandingGear</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\landing_gear.dds</Icon>
            <Description>Description_LandingGear</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\LandingGear.mwm</Model>
            <LockSound>ShipLandGearOn</LockSound>
            <UnlockSound>ShipLandGearOff</UnlockSound>
            <FailedAttachSound>ShipLandGearNothing01</FailedAttachSound>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="1" EndX="1" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\LandingGearConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\LandingGearConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>LandingGear</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BuildTimeSeconds>12</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <MaxLockSeparatingVelocity>7</MaxLockSeparatingVelocity>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>35</PCU>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LandingGearDefinition">
            <Id>
                <TypeId>LandingGear</TypeId>
                <SubtypeId>LargeBlockSmallMagneticPlate</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MagneticPlateSmall</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\SimpleMagneticPlate.dds</Icon>
            <Description>Description_LandingGear</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\SimpleMagneticPlate.mwm</Model>
            <LockSound>ShipLandGearOn</LockSound>
            <UnlockSound>ShipLandGearOff</UnlockSound>
            <FailedAttachSound>ShipLandGearNothing01</FailedAttachSound>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="3" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" Default="true" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
                <MountPoint Side="Left" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Front" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Back" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\SimpleMagneticPlateConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\SimpleMagneticPlateConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\SimpleMagneticPlateConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>MagneticPlate</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <MaxLockSeparatingVelocity>7</MaxLockSeparatingVelocity>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>35</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LandingGearDefinition">
            <Id>
                <TypeId>LandingGear</TypeId>
                <SubtypeId>SmallBlockSmallMagneticPlate</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MagneticPlateSmall</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\SimpleMagneticPlate.dds</Icon>
            <Description>Description_LandingGear</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\SimpleMagneticPlate.mwm</Model>
            <LockSound>ShipLandGearOn</LockSound>
            <UnlockSound>ShipLandGearOff</UnlockSound>
            <FailedAttachSound>ShipLandGearNothing01</FailedAttachSound>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" Default="true" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
                <MountPoint Side="Left" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Front" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
                <MountPoint Side="Back" StartX="0.1" StartY="0.8" EndX="0.9" EndY="0.95" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\SimpleMagneticPlateConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\SimpleMagneticPlateConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>MagneticPlate</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>8</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <MaxLockSeparatingVelocity>7</MaxLockSeparatingVelocity>
            <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
            <DestroySound>PoofExplosionCat3</DestroySound>
            <PCU>35</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_JumpDriveDefinition">
            <Id>
                <TypeId>JumpDrive</TypeId>
                <SubtypeId>LargeJumpDrive</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_JumpDrive</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\JumpDrive.dds</Icon>
            <Description>Description_JumpDrive</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\JumpDrive.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="40" />
                <Component Subtype="MetalGrid" Count="50" />
                <Component Subtype="GravityGenerator" Count="20" />
                <Component Subtype="Detector" Count="20" />
                <Component Subtype="PowerCell" Count="120" />
                <Component Subtype="Superconductor" Count="1000" />
                <Component Subtype="Computer" Count="300" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="2" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="2" EndY="3" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="3" EndY="3" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="2" EndY="3" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="2" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\JumpDriveConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\JumpDriveConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\JumpDriveConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>JumpDrive</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>120</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>

            <ResourceSinkGroup>Charging</ResourceSinkGroup>
            <RequiredPowerInput>32</RequiredPowerInput>
            <PowerNeededForJump>3</PowerNeededForJump>
            <PowerEfficiency>0.8</PowerEfficiency>

            <MaxJumpDistance>2000000</MaxJumpDistance>
            <MaxJumpMass>1250000</MaxJumpMass>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>Explosion_Warhead_30</DestroyEffect>
            <DestroySound>WepLrgWarheadExpl</DestroySound>
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
            <PCU>80</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_CameraBlockDefinition">
            <Id>
                <TypeId>CameraBlock</TypeId>
                <SubtypeId>SmallCameraBlock</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Camera</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Camera.dds</Icon>
            <Description>Description_Camera</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Camera.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" ExclusionMask="3" PropertiesMask="3" StartX="0.4" StartY="0.44" EndX="0.6" EndY="0.55" />
            </MountPoints>
            <IsStandAlone>false</IsStandAlone>
            <HasPhysics>false</HasPhysics>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CameraConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CameraConstruction_2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.4</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                    <MaxAllowed>0.4</MaxAllowed>
                    <MinAllowed>0.01</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BlockPairName>Camera</BlockPairName>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00003</RequiredPowerInput>
            <OverlayTexture>Textures\\GUI\\Screens\\camera_overlay.dds</OverlayTexture>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <Public>true</Public>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_CameraBlockDefinition">
            <Id>
                <TypeId>CameraBlock</TypeId>
                <SubtypeId>LargeCameraBlock</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Camera</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Camera.dds</Icon>
            <Description>Description_Camera</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Camera.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" ExclusionMask="3" PropertiesMask="3" StartX="0.4" StartY="0.44" EndX="0.6" EndY="0.55" />
            </MountPoints>
            <IsStandAlone>false</IsStandAlone>
            <HasPhysics>false</HasPhysics>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\CameraConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CameraConstruction_2.mwm" />
            </BuildProgressModels>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BlockPairName>Camera</BlockPairName>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00003</RequiredPowerInput>
            <RequiredChargingInput>0.001</RequiredChargingInput>
            <OverlayTexture>Textures\\GUI\\Screens\\camera_overlay.dds</OverlayTexture>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <RaycastConeLimit>45</RaycastConeLimit>
            <RaycastDistanceLimit>-1</RaycastDistanceLimit>
            <RaycastTimeMultiplier>2.0</RaycastTimeMultiplier>
            <Public>true</Public>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>1.1</Z>
            </DestroyEffectOffset>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>25</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_MergeBlockDefinition">
            <Id>
                <TypeId>MergeBlock</TypeId>
                <SubtypeId>LargeShipMergeBlock</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MergeBlock</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MergeBlock.dds</Icon>
            <Description>Description_MergeBlock</Description>
            <CubeSize>Large</CubeSize>
            <Strength>0.1</Strength>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MergeBlock.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="LargeTube" Count="6" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="SteelPlate" Count="7" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MergeBlockConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MergeBlockConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Large\\MergeBlockConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>MergeBlock</BlockPairName>
            <MirroringX>Y</MirroringX>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <DeformationRatio>0.5</DeformationRatio>
            <PCU>100</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MergeBlockDefinition">
            <Id>
                <TypeId>MergeBlock</TypeId>
                <SubtypeId>SmallShipMergeBlock</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MergeBlock</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MergeBlock.dds</Icon>
            <Description>Description_MergeBlock</Description>
            <CubeSize>Small</CubeSize>
            <Strength>0.015</Strength>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="3" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MergeBlock.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MergeBlockConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MergeBlockConstruction_2.mwm" />
            </BuildProgressModels>
            <MountPoints>
                <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="2.9" EndY="2.9" Default="true" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="2.9" EndY="2.9" />
                <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
                <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
                <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
            </MountPoints>
            <BlockPairName>MergeBlock</BlockPairName>
            <MirroringX>Y</MirroringX>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <DeformationRatio>0.5</DeformationRatio>
            <PCU>100</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_MergeBlockDefinition">
            <Id>
                <TypeId>MergeBlock</TypeId>
                <SubtypeId>SmallShipSmallMergeBlock</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MergeBlockSmall</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MergeBlockSmall.dds</Icon>
            <Description>Description_MergeBlock</Description>
            <CubeSize>Small</CubeSize>
            <Strength>0.005</Strength>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MergeBlockSmall.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="3" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="SmallTube" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MergeBlockSmallConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MergeBlockSmallConstruction_2.mwm" />
            </BuildProgressModels>
            <MountPoints>
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
            </MountPoints>
            <BlockPairName>MergeBlockSmall</BlockPairName>
            <MirroringX>Y</MirroringX>
            <MirroringY>X</MirroringY>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <DeformationRatio>0.5</DeformationRatio>
            <PCU>100</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_ParachuteDefinition">
            <Id>
                <TypeId>Parachute</TypeId>
                <SubtypeId>LgParachute</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ParachuteHatch</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\ParachuteHatch.dds</Icon>
            <Description>Description_ParachuteHatch</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\ParachuteHatch_Large.mwm</Model>
            <PlaceDecals>false</PlaceDecals>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="SmallTube" Count="5" />
                <Component Subtype="Motor" Count="3" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="SteelPlate" Count="4" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <BlockPairName>Parachute Hatch</BlockPairName>
            <MirroringX>None</MirroringX>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>22</BuildTimeSeconds>
            <DisassembleRatio>1.5</DisassembleRatio>
            <Public>true</Public>
            <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
            <PowerConsumptionIdle>0.00001</PowerConsumptionIdle>
            <PowerConsumptionMoving>0.001</PowerConsumptionMoving>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <ParachuteSubpartName>Parachute</ParachuteSubpartName>
            <DragCoefficient>1.0</DragCoefficient>
            <MaterialDeployCost>5</MaterialDeployCost>
            <MaterialSubtype>Canvas</MaterialSubtype>
            <ReefAtmosphereLevel>0.6</ReefAtmosphereLevel>
            <MinimumAtmosphereLevel>0.2</MinimumAtmosphereLevel>
            <RadiusMultiplier>8.0</RadiusMultiplier>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorConstruction_1.mwm" />
            </BuildProgressModels>
            <Subparts>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Large_Door1</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Large_Door2</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Large_Door3</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Large_Door4</Name>
                </SubpartDefinition>
            </Subparts>
            <OpeningSequence>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>-90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="0.58714" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="-0.58714" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="-0.58714" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.58714" y="1.19644" z="-0.58714" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>-90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="-0.58714" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="-0.58714" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.58714" y="1.19644" z="-0.58714" />
                </Opening>
            </OpeningSequence>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_ParachuteDefinition">
            <Id>
                <TypeId>Parachute</TypeId>
                <SubtypeId>SmParachute</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ParachuteHatch</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\ParachuteHatch.dds</Icon>
            <Description>Description_ParachuteHatch</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\ParachuteHatch_Small.mwm</Model>
            <PlaceDecals>false</PlaceDecals>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="SmallTube" Count="1" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <BlockPairName>Parachute Hatch</BlockPairName>
            <MirroringX>None</MirroringX>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <DisassembleRatio>1.5</DisassembleRatio>
            <Public>true</Public>
            <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
            <PowerConsumptionIdle>0.00001</PowerConsumptionIdle>
            <PowerConsumptionMoving>0.001</PowerConsumptionMoving>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <ParachuteSubpartName>Parachute</ParachuteSubpartName>
            <DragCoefficient>1.0</DragCoefficient>
            <MaterialDeployCost>1</MaterialDeployCost>
            <MaterialSubtype>Canvas</MaterialSubtype>
            <ReefAtmosphereLevel>0.6</ReefAtmosphereLevel>
            <MinimumAtmosphereLevel>0.2</MinimumAtmosphereLevel>
            <RadiusMultiplier>8.0</RadiusMultiplier>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorConstruction_1.mwm" />
            </BuildProgressModels>
            <Subparts>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Small_Door1</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Small_Door2</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Small_Door3</Name>
                </SubpartDefinition>
                <SubpartDefinition>
                    <Name>ParachuteHatch_Small_Door4</Name>
                </SubpartDefinition>
            </Subparts>
            <OpeningSequence>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>-90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>0</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>1</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="0.11671" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="-0.11671" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="-0.11671" />
                </Opening>
                <Opening>
                    <IDs>2</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="-0.11671" y="0.23928" z="-0.11671" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Z</RotationAxis>
                    <MaxOpen>-90</MaxOpen>
                    <Speed>140</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="-0.11671" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>X</RotationAxis>
                    <MaxOpen>-45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="-0.11671" />
                </Opening>
                <Opening>
                    <IDs>3</IDs>
                    <Move>Rotate</Move>
                    <RotationAxis>Y</RotationAxis>
                    <MaxOpen>45</MaxOpen>
                    <Speed>70</Speed>
                    <PivotPosition x="0.11671" y="0.23928" z="-0.11671" />
                </Opening>
            </OpeningSequence>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <IsAirTight>true</IsAirTight>
        </Definition>
		
        <Definition xsi:type="MyObjectBuilder_MedicalRoomDefinition">
            <Id>
                <TypeId>MedicalRoom</TypeId>
                <SubtypeId>InsetRefillStation</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_InsetRefillStation</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\RefillStationInset.dds</Icon>
            <Description>Description_RefillStation</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\RefillStationInset.mwm</Model>
            <IdleSound>BlockOxyGenIdle</IdleSound>
            <ProgressSound>BlockMedicalProgress</ProgressSound>
            <RespawnAllowed>false</RespawnAllowed> <!-- Spawning Disabled -->
            <HealingAllowed>false</HealingAllowed> <!-- Healing Disabled -->
            <RefuelAllowed>true</RefuelAllowed> <!-- Gas and Energy Enabled -->
            <SuitChangeAllowed>false</SuitChangeAllowed> <!-- Suit Room Disabled -->
            <Components>
				<Component Subtype="InteriorPlate" Count="10" />
				<Component Subtype="Construction" Count="20" />
				<Component Subtype="MetalGrid" Count="2" />
				<Component Subtype="Motor" Count="6" />
				<Component Subtype="Superconductor" Count="4" />
				<Component Subtype="Display" Count="4" />
				<Component Subtype="Construction" Count="10" />
				<Component Subtype="InteriorPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Display" Index="0" />
            <MountPoints>
				<MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1"/>
				<MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1"/>
				<MountPoint Side="Front" StartX="0.00" StartY="0.00" EndX="1.00" EndY="1.0"/>
				<MountPoint Side="Back" StartX="0.05" StartY="0.05" EndX="0.95" EndY="0.95"/>
				<MountPoint Side="Right" StartX="0.05" StartY="0.05" EndX="0.95" EndY="0.95"/>
				<MountPoint Side="Left" StartX="0.05" StartY="0.05" EndX="0.95" EndY="0.95"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\RefillStationInsetConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\RefillStationInsetConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\RefillStationInsetConstruction_3.mwm" />
            </BuildProgressModels>
            <ScreenAreas>
                <ScreenArea Name="CockpitScreen_01" DisplayName="Top panel" />
            </ScreenAreas>
            <BlockPairName>RefillStationInset</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
			<EmissiveColorPreset>Extended</EmissiveColorPreset>
            <PCU>30</PCU>
        </Definition>
		
        <Definition xsi:type="MyObjectBuilder_MedicalRoomDefinition">
            <Id>
                <TypeId>MedicalRoom</TypeId>
                <SubtypeId>LargeRefillStation</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_RefillStation</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\RefillStationCap.dds</Icon>
            <Description>Description_RefillStation</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\RefillStationCap.mwm</Model>
            <IdleSound>BlockOxyGenIdle</IdleSound>
            <ProgressSound>BlockMedicalProgress</ProgressSound>
            <RespawnAllowed>false</RespawnAllowed> <!-- Spawning Disabled -->
            <HealingAllowed>false</HealingAllowed> <!-- Healing Disabled -->
            <RefuelAllowed>true</RefuelAllowed> <!-- Gas and Energy Enabled -->
            <SuitChangeAllowed>false</SuitChangeAllowed> <!-- Suit Room Disabled -->
            <Components>
				<Component Subtype="InteriorPlate" Count="4" />
				<Component Subtype="Construction" Count="5" />
				<Component Subtype="MetalGrid" Count="2" />
				<Component Subtype="Motor" Count="6" />
				<Component Subtype="Superconductor" Count="4" />
				<Component Subtype="Display" Count="4" />
				<Component Subtype="Construction" Count="5" />
				<Component Subtype="InteriorPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Display" Index="0" />
            <MountPoints>
				<MountPoint Side="Back" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\RefillStationCapConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\RefillStationCapConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\RefillStationCapConstruction_3.mwm" />
            </BuildProgressModels>
            <ScreenAreas>
                <ScreenArea Name="CockpitScreen_01" DisplayName="Top panel" />
            </ScreenAreas>
            <BlockPairName>RefillStation</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
			<EmissiveColorPreset>Extended</EmissiveColorPreset>
            <PCU>30</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
		
        <Definition xsi:type="MyObjectBuilder_MedicalRoomDefinition">
            <Id>
                <TypeId>MedicalRoom</TypeId>
                <SubtypeId>SmallRefillStation</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_RefillStation</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\RefillStationCap.dds</Icon>
            <Description>Description_RefillStation</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\RefillStationCap.mwm</Model>
            <IdleSound>BlockOxyGenIdle</IdleSound>
            <ProgressSound>BlockMedicalProgress</ProgressSound>
            <RespawnAllowed>false</RespawnAllowed> <!-- Spawning Disabled -->
            <HealingAllowed>false</HealingAllowed> <!-- Healing Disabled -->
            <RefuelAllowed>true</RefuelAllowed> <!-- Gas and Energy Enabled -->
            <SuitChangeAllowed>false</SuitChangeAllowed> <!-- Suit Room Disabled -->
            <Components>
				<Component Subtype="InteriorPlate" Count="4" />
				<Component Subtype="Construction" Count="5" />
				<Component Subtype="MetalGrid" Count="2" />
				<Component Subtype="Motor" Count="6" />
				<Component Subtype="Superconductor" Count="4" />
				<Component Subtype="Display" Count="4" />
				<Component Subtype="Construction" Count="5" />
				<Component Subtype="InteriorPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Display" Index="0" />
            <MountPoints>
				<MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3"/>
                <MountPoint Side="Top" StartX="0.1" StartY="0" EndX="2.9" EndY="0.5"/>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.5" EndX="2.9" EndY="1"/>
                <MountPoint Side="Left" StartX="0.2" StartY="0.1" EndX="1" EndY="2.9"/>
                <MountPoint Side="Right" StartX="0" StartY="0.1" EndX="0.8" EndY="2.9"/>
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Small\\RefillStationCapConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Small\\RefillStationCapConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\RefillStationCapConstruction_3.mwm" />
            </BuildProgressModels>
            <ScreenAreas>
                <ScreenArea Name="CockpitScreen_01" DisplayName="Top panel" />
            </ScreenAreas>
            <BlockPairName>RefillStation</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
			<EmissiveColorPreset>Extended</EmissiveColorPreset>
            <PCU>30</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
		
    </CubeBlocks>
</Definitions>`
];
