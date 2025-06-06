// data/dlcWarfare1Data.ts

// Raw XML strings for blocks with DLC "Warfare1"
export const dlcWarfare1RawXml: string[] = [
`<?xml version="1.0" encoding="utf-8"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <Definition xsi:type="MyObjectBuilder_WarheadDefinition">
            <Id>
                <TypeId>Warhead</TypeId>
                <SubtypeId>LargeWarhead</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Warhead</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\warhead.dds</Icon>
            <Description>Description_Warhead</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\warhead.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Girder" Count="24" />
                <Component Subtype="Construction" Count="12" />
                <Component Subtype="SmallTube" Count="12" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="Explosives" Count="6" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Explosives" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Back" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Right" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Left" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
                <MountPoint Side="Top" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WarheadConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WarheadConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WarheadConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>Warhead</BlockPairName>
            <ActionSound>WepLrgWarheadExpl</ActionSound>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <ExplosionRadius>22.4415</ExplosionRadius>
            <WarheadExplosionDamage>15000</WarheadExplosionDamage>
            <EmissiveColorPreset>Timer</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>100</PCU>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <IsAirTight>false</IsAirTight>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_WarheadDefinition">
            <Id>
                <TypeId>Warhead</TypeId>
                <SubtypeId>SmallWarhead</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Warhead</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\warhead.dds</Icon>
            <Description>Description_Warhead</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\warhead.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Girder" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="Explosives" Count="2" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Explosives" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\WarheadConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WarheadConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>Warhead</BlockPairName>
            <ActionSound>WepLrgWarheadExpl</ActionSound>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <ExplosionRadius> 4.4883 </ExplosionRadius>
            <WarheadExplosionDamage>15000</WarheadExplosionDamage>
            <EmissiveColorPreset>Timer</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>50</PCU>
            <IsAirTight>false</IsAirTight>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_DecoyDefinition">
            <Id>
                <TypeId>Decoy</TypeId>
                <SubtypeId>LargeDecoy</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Decoy</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\decoy.dds</Icon>
            <Description>Description_Decoy</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\decoy.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="Computer" Count="10" />
                <Component Subtype="RadioCommunication" Count="1" />
                <Component Subtype="LargeTube" Count="2" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="RadioCommunication" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Back" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Right" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Left" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Top" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\DecoyConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\DecoyConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\DecoyConstruction_3.mwm" />
            </BuildProgressModels>
            <Public>true</Public>
            <BlockPairName>Decoy</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>16</BuildTimeSeconds>
            <!--<UseModelIntersection>true</UseModelIntersection>-->
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <PCU>5</PCU>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <IsAirTight>false</IsAirTight>
            <TargetingGroups>
                <string>Weapons</string>
                <string>Propulsion</string>
                <string>PowerSystems</string>
            </TargetingGroups>
            <PriorityModifier>10</PriorityModifier>
            <NotWorkingPriorityMultiplier>0</NotWorkingPriorityMultiplier>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_DecoyDefinition">
            <Id>
                <TypeId>Decoy</TypeId>
                <SubtypeId>SmallDecoy</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Decoy</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\decoy.dds</Icon>
            <Description>Description_Decoy</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\decoy.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="RadioCommunication" Count="1" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="RadioCommunication" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\DecoyConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\DecoyConstruction_2.mwm" />
            </BuildProgressModels>
            <Public>true</Public>
            <BlockPairName>Decoy</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>8</BuildTimeSeconds>
            <UseModelIntersection>true</UseModelIntersection>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <PCU>5</PCU>
            <IsAirTight>false</IsAirTight>
            <TargetingGroups>
                <string>Weapons</string>
                <string>Propulsion</string>
                <string>PowerSystems</string>
            </TargetingGroups>
            <PriorityModifier>10</PriorityModifier>
            <NotWorkingPriorityMultiplier>0</NotWorkingPriorityMultiplier>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LargeTurretBaseDefinition">
            <Id>
                <TypeId>LargeGatlingTurret</TypeId>
                <SubtypeId/>
            </Id>
            <DisplayName>DisplayName_Block_GatlingTurret</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\gatling_turret.dds</Icon>
            <Description>Description_GatlingTurret</Description>
            <CubeSize>Large</CubeSize>
            <PlaceDecals>false</PlaceDecals>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\GatlingTurret.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
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
            <MountPoints>
                <MountPoint Side="Bottom" StartX="1" StartY="1" EndX="2" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\GatlingTurretConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\GatlingTurretConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\GatlingTurretConstruction_3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <!--Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
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
            <BlockPairName>GatlingTurret</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <OverlayTexture>Textures\\GUI\\Screens\\turret_overlay.dds</OverlayTexture>
            <WeaponDefinitionId Subtype="LargeGatlingTurret" />
            <HiddenTargetingOptions>Friends</HiddenTargetingOptions>
            <InventoryMaxVolume>0.384</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <MinElevationDegrees>-43</MinElevationDegrees>
            <MaxElevationDegrees>90</MaxElevationDegrees>
            <MinAzimuthDegrees>-180</MinAzimuthDegrees>
            <MaxAzimuthDegrees>180</MaxAzimuthDegrees>
            <RotationSpeed>0.0015</RotationSpeed>
            <ElevationSpeed>0.0015 </ElevationSpeed>
            <IdleRotation>true</IdleRotation>
            <MaxRangeMeters>800</MaxRangeMeters>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>225</PCU>
            <IsAirTight>false</IsAirTight>
            <AmmoPullAmountPerTick>3</AmmoPullAmountPerTick>
            <InventoryFillFactorMin>.25</InventoryFillFactorMin>
            <InventoryFillFactorMax>.5</InventoryFillFactorMax>
            <TieredUpdateTimes>
                <unsignedInt>10</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <UpCameraOffset>0</UpCameraOffset>
            <ForwardCameraOffset>3.5</ForwardCameraOffset>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LargeTurretBaseDefinition">
            <Id>
                <TypeId>LargeGatlingTurret</TypeId>
                <SubtypeId>SmallGatlingTurret</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_GatlingTurret</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\gatling_turret.dds</Icon>
            <Description>Description_GatlingTurret</Description>
            <CubeSize>Small</CubeSize>
            <PlaceDecals>false</PlaceDecals>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="5" z="5" />
            <Center x="2" y="0" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\GatlingTurret.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
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
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="5" EndY="5" Default="true" />
                <MountPoint Side="Right" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Back" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Front" StartX="1" StartY="0" EndX="4" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.43" File="Models\\Cubes\\Small\\GatlingTurretConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\GatlingTurretConstruction_2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <!--Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
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
            <BlockPairName>GatlingTurret</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <OverlayTexture>Textures\\GUI\\Screens\\turret_overlay.dds</OverlayTexture>
            <WeaponDefinitionId Subtype="SmallGatlingTurret" />
            <HiddenTargetingOptions>Friends</HiddenTargetingOptions>
            <InventoryMaxVolume>0.084</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <MinElevationDegrees>-10</MinElevationDegrees>
            <MaxElevationDegrees>180</MaxElevationDegrees>
            <MinAzimuthDegrees>-180</MinAzimuthDegrees>
            <MaxAzimuthDegrees>180</MaxAzimuthDegrees>
            <RotationSpeed>0.002</RotationSpeed>
            <ElevationSpeed>0.002 </ElevationSpeed>
            <IdleRotation>true</IdleRotation>
            <MaxRangeMeters>600</MaxRangeMeters>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>225</PCU>
            <AmmoPullAmountPerTick>3</AmmoPullAmountPerTick>
            <InventoryFillFactorMin>.25</InventoryFillFactorMin>
            <InventoryFillFactorMax>.5</InventoryFillFactorMax>
            <TieredUpdateTimes>
                <unsignedInt>10</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LargeTurretBaseDefinition">
            <Id>
                <TypeId>LargeMissileTurret</TypeId>
                <SubtypeId />
            </Id>
            <DisplayName>DisplayName_Block_MissileTurret</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\missile_turret.dds</Icon>
            <Description>Description_MissileTurret</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <PlaceDecals>false</PlaceDecals>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MissileTurret.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
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
            <MountPoints>
                <MountPoint Side="Bottom" StartX="1" StartY="1" EndX="2" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MissileTurretConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MissileTurretConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MissileTurretConstruction_3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <!--Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
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
            <BlockPairName>MissileTurret</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>40</BuildTimeSeconds>
            <OverlayTexture>Textures\\GUI\\Screens\\turret_overlay.dds</OverlayTexture>
            <WeaponDefinitionId Subtype="LargeMissileTurret" />
            <EnabledTargetingOptions>SmallShips LargeShips Stations Enemies</EnabledTargetingOptions>
            <HiddenTargetingOptions>Friends Asteroids Missiles</HiddenTargetingOptions>
            <InventoryMaxVolume>0.384</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <MinElevationDegrees>-58</MinElevationDegrees>
            <MaxElevationDegrees>90</MaxElevationDegrees>
            <MinAzimuthDegrees>-180</MinAzimuthDegrees>
            <MaxAzimuthDegrees>180</MaxAzimuthDegrees>
            <IdleRotation>true</IdleRotation>
            <MaxRangeMeters>800</MaxRangeMeters>
            <RotationSpeed>0.001</RotationSpeed>
            <ElevationSpeed>0.001 </ElevationSpeed>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>275</PCU>
            <IsAirTight>false</IsAirTight>
            <AmmoPullAmountPerTick>3</AmmoPullAmountPerTick>
            <InventoryFillFactorMin>.25</InventoryFillFactorMin>
            <InventoryFillFactorMax>.5</InventoryFillFactorMax>
            <TieredUpdateTimes>
                <unsignedInt>10</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <UpCameraOffset>1.0</UpCameraOffset>
            <ForwardCameraOffset>0.5</ForwardCameraOffset>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LargeTurretBaseDefinition">
            <Id>
                <TypeId>LargeMissileTurret</TypeId>
                <SubtypeId>SmallMissileTurret</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MissileTurret</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\missile_turret.dds</Icon>
            <Description>Description_MissileTurret</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <PlaceDecals>false</PlaceDecals>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="5" z="5" />
            <Center x="2" y="0" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MissileTurret.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
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
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="5" EndY="5" Default="true" />
                <MountPoint Side="Right" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Back" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Front" StartX="1" StartY="0" EndX="4" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.43" File="Models\\Cubes\\Small\\MissileTurretConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\MissileTurretConstruction_2.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <!--Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
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
            <BlockPairName>MissileTurret</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>25</BuildTimeSeconds>
            <OverlayTexture>Textures\\GUI\\Screens\\turret_overlay.dds</OverlayTexture>
            <WeaponDefinitionId Subtype="SmallMissileTurret" />
            <EnabledTargetingOptions>SmallShips LargeShips Stations Enemies</EnabledTargetingOptions>
            <HiddenTargetingOptions>Friends Asteroids Missiles</HiddenTargetingOptions>
            <InventoryMaxVolume>0.12</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <MinElevationDegrees>-8</MinElevationDegrees>
            <MaxElevationDegrees>180</MaxElevationDegrees>
            <MinAzimuthDegrees>-180</MinAzimuthDegrees>
            <MaxAzimuthDegrees>180</MaxAzimuthDegrees>
            <IdleRotation>true</IdleRotation>
            <MaxRangeMeters>600</MaxRangeMeters>
            <RotationSpeed>0.0015</RotationSpeed>
            <ElevationSpeed>0.0015 </ElevationSpeed>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>100</PCU>
            <AmmoPullAmountPerTick>3</AmmoPullAmountPerTick>
            <InventoryFillFactorMin>.25</InventoryFillFactorMin>
            <InventoryFillFactorMax>.5</InventoryFillFactorMax>
            <TieredUpdateTimes>
                <unsignedInt>10</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_LargeTurretBaseDefinition">
            <Id>
                <TypeId>InteriorTurret</TypeId>
                <SubtypeId>LargeInteriorTurret</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_InteriorTurret</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\interior_turret.dds</Icon>
            <Description>Description_InteriorTurret</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <PlaceDecals>false</PlaceDecals>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\InteriorTurret.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="SmallTube" Count="1" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="Computer" Count="5" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="SteelPlate" Count="4" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.46" StartY="0.46" EndX="0.54" EndY="0.54" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\InteriorTurretConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\InteriorTurretConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\InteriorTurretConstruction_3.mwm" />
            </BuildProgressModels>
            <VoxelPlacement>
                <!--Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
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
            <BlockPairName>InteriorTurret</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>24</BuildTimeSeconds>
            <OverlayTexture>Textures\\GUI\\Screens\\turret_overlay.dds</OverlayTexture>
            <WeaponDefinitionId Subtype="LargeInteriorTurret" />
            <HiddenTargetingOptions>Friends</HiddenTargetingOptions>
            <InventoryMaxVolume>0.384</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <MinElevationDegrees>-76</MinElevationDegrees>
            <MaxElevationDegrees>90</MaxElevationDegrees>
            <MinAzimuthDegrees>-180</MinAzimuthDegrees>
            <MaxAzimuthDegrees>180</MaxAzimuthDegrees>
            <IdleRotation>true</IdleRotation>
            <MaxRangeMeters>600</MaxRangeMeters>
            <RotationSpeed>0.002</RotationSpeed>
            <ElevationSpeed>0.002 </ElevationSpeed>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <MinFov>0.1</MinFov>
            <MaxFov>1.04719755</MaxFov>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>125</PCU>
            <IsAirTight>false</IsAirTight>
            <AmmoPullAmountPerTick>3</AmmoPullAmountPerTick>
            <InventoryFillFactorMin>.25</InventoryFillFactorMin>
            <InventoryFillFactorMax>.5</InventoryFillFactorMax>
            <TieredUpdateTimes>
                <unsignedInt>10</unsignedInt>
                <unsignedInt>0</unsignedInt>
            </TieredUpdateTimes>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <UpCameraOffset>0.45</UpCameraOffset>
            <ForwardCameraOffset>0.2</ForwardCameraOffset>
            <DLC>Warfare1</DLC>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_WeaponBlockDefinition">
            <Id>
                <TypeId>SmallMissileLauncher</TypeId>
                <SubtypeId />
            </Id>
            <DisplayName>DisplayName_Block_RocketLauncher</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\missile_launcher_small.dds</Icon>
            <Description>Description_RocketLauncher</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="4" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\RocketLauncher.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="MetalGrid" Count="1" />
                <Component Subtype="LargeTube" Count="4" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="4" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="4" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="4" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="4" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\RocketLauncherConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\RocketLauncherConstruction_2.mwm" />
            </BuildProgressModels>
            <MirroringZ>X</MirroringZ>
            <MirroringX>Z</MirroringX>
            <BlockPairName>RocketLauncher</BlockPairName>
            <Center x="0" y="0" z="3" />
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <WeaponDefinitionId Subtype="SmallMissileLauncher" />
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <InventoryMaxVolume>0.24</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>425</PCU>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_WeaponBlockDefinition">
            <Id>
                <TypeId>SmallMissileLauncher</TypeId>
                <SubtypeId>LargeMissileLauncher</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_RocketLauncher</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\missile_launcher.dds</Icon>
            <Description>Description_LargeRocketLauncher</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\RocketLauncher.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="8" />
                <Component Subtype="MetalGrid" Count="30" />
                <Component Subtype="LargeTube" Count="25" />
                <Component Subtype="Motor" Count="6" />
                <Component Subtype="Computer" Count="4" />
                <Component Subtype="SteelPlate" Count="15" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="2" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="2" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="2" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\RocketLauncherConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\RocketLauncherConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\RocketLauncherConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>RocketLauncher</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <Center x="0" y="0" z="1" />
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <WeaponDefinitionId Subtype="LargeMissileLauncher" />
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <InventoryMaxVolume>1.14</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>825</PCU>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_WeaponBlockDefinition">
            <Id>
                <TypeId>SmallMissileLauncherReload</TypeId>
                <SubtypeId>SmallRocketLauncherReload</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_SmallRocketLauncherReload</DisplayName>
            <BlockPairName>SmallRocketLauncherReload</BlockPairName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\RocketLauncherReload.dds</Icon>
            <Description>Description_RocketLauncherReload</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="3" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\RocketLauncherReload.mwm</Model>
            <Components>
                <Component Subtype="SmallTube" Count="50" />
                <Component Subtype="InteriorPlate" Count="40" />
                <Component Subtype="Construction" Count="24" />
                <Component Subtype="LargeTube" Count="8" />
                <Component Subtype="MetalGrid" Count="10" />
                <Component Subtype="Motor" Count="4" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="SteelPlate" Count="8" />
                <Component Subtype="InteriorPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="3" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="3" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="3" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="3" EndY="3" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="3" EndY="3" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\small\\RocketLauncherReloadConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\RocketLauncherReloadConstruction_2.mwm" />
            </BuildProgressModels>
            <Center x="0" y="0" z="1" />
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <InventoryMaxVolume>0.24</InventoryMaxVolume>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <WeaponDefinitionId Subtype="SmallMissileLauncher" />
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>425</PCU>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_WeaponBlockDefinition">
            <Id>
                <TypeId>SmallGatlingGun</TypeId>
                <SubtypeId />
            </Id>
            <DisplayName>DisplayName_Block_GatlingGun</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\gatling_gun.dds</Icon>
            <Description>Description_GatlingGun</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="4" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\GatlingGun.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="MetalGrid" Count="2" />
                <Component Subtype="SmallTube" Count="6" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="3" EndX="1" EndY="4" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="3" StartY="0" EndX="4" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\GatlingGunConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\GatlingGunConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>GatlingGun</BlockPairName>
            <Center x="0" y="0" z="3" />
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BuildTimeSeconds>13</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <WeaponDefinitionId Subtype="GatlingGun" />
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <InventoryMaxVolume>0.064</InventoryMaxVolume>
            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>80</PCU>
            <InventoryFillFactorMin>.6</InventoryFillFactorMin>
            <TargetingGroups>
                <string>Weapons</string>
            </TargetingGroups>
            <DLC>Warfare1</DLC>
        </Definition>
    </CubeBlocks>
</Definitions>
`
];
