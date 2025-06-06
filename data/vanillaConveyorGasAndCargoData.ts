// data/vanillaConveyorGasAndCargoData.ts

// Raw XML strings for base game conveyor, gas, and cargo blocks
// The xsi:type attribute has been removed from Definition tags.
export const vanillaConveyorGasAndCargoRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>OxygenTankSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_OxygenTank</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OxygenTankSmall.dds</Icon>
    <Description>Description_OxygenTank</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\OxygenStorage.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="LargeTube" Count="8" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Left" StartX="0" StartY="1" EndX="3" EndY="2" />
        <MountPoint Side="Right" StartX="0" StartY="1" EndX="3" EndY="2" />
        <MountPoint Side="Top" StartX="0" StartY="0.6" EndX="1.1" EndY="1.3" />
        <MountPoint Side="Top" StartX="1.9" StartY="0.6" EndX="3" EndY="1.3" />
        <MountPoint Side="Top" StartX="0" StartY="2.4" EndX="3" EndY="3" />
        <MountPoint Side="Bottom" StartX="0" StartY="1.7" EndX="1.1" EndY="2.4" />
        <MountPoint Side="Bottom" StartX="1.9" StartY="1.7" EndX="3" EndY="2.4" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="0.6" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\OxygenStorageConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\OxygenStorageConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>LargeOxygenTank</BlockPairName>
    <Center x="1" y="1" z="1" />
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <Capacity>50000</Capacity>
    <InventoryMaxVolume>4</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Oxygen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>OxygenBottles</Class>
    </BlueprintClasses>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <LeakPercent>0.0125</LeakPercent>
    <GasExplosionMaxRadius>4</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>50000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>WepSmallWarheadExpl</GasExplosionSound>
    <GasExplosionEffect>BlockDestroyedExplosion_Small</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>SmallOxygenTankSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallOxygenTank</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OxygenTank.dds</Icon>
    <Description>Description_OxygenTank</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\SmallOxygenTank.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="SmallTube" Count="1" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\SmallOxygenTankConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\SmallOxygenTankConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>OxygenTank</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <Capacity>3000</Capacity>
    <InventoryMaxVolume>0.12</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Oxygen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>OxygenBottles</Class>
    </BlueprintClasses>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <LeakPercent>0.025</LeakPercent>
    <GasExplosionMaxRadius>2</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>3000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>WepSmallWarheadExpl</GasExplosionSound>
    <GasExplosionEffect>BlockDestroyedExplosion_Small</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_SmallOxygenTank</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OxygenTank.dds</Icon>
    <Description>Description_OxygenTank</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\OxygenStorage.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="60" />
        <Component Subtype="LargeTube" Count="40" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" Default="true" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.3" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.1" />
        <MountPoint Side="Front" StartX="0.1" StartY="1.7" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.3" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.1" />
        <MountPoint Side="Back" StartX="0.1" StartY="1.7" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.3" />
        <MountPoint Side="Left" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.1" />
        <MountPoint Side="Left" StartX="0.1" StartY="1.7" EndX="0.9" EndY="1.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1.1" />
        <MountPoint Side="Right" StartX="0.1" StartY="1.7" EndX="0.9" EndY="1.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\OxygenStorageConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\OxygenStorageConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\OxygenStorageConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>OxygenTank</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <Capacity>100000</Capacity>
    <InventoryMaxVolume>4</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Oxygen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>OxygenBottles</Class>
    </BlueprintClasses>
    <BuildTimeSeconds>32</BuildTimeSeconds>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <DestroyEffect>Explosion_Missile</DestroyEffect>
    <DestroySound>WepSmallMissileExpl</DestroySound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <PCU>25</PCU>
    <LeakPercent>0.005</LeakPercent>
    <GasExplosionMaxRadius>10</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>100000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>WepSmallWarheadExpl</GasExplosionSound>
    <GasExplosionEffect>BlockDestroyedExplosion_Large</GasExplosionEffect>
    <IsAirTight>false</IsAirTight>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>LargeHydrogenTank</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenTank</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenTank.dds</Icon>
    <Description>Description_HydrogenTank</Description>
    <Public>true</Public>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HydrogenTank.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="160" />
        <Component Subtype="LargeTube" Count="80" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="120" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="1" EndX="3" EndY="2" />
        <MountPoint Side="Top" StartX="1" StartY="0" EndX="2" EndY="1" />
        <MountPoint Side="Top" StartX="1" StartY="2" EndX="2" EndY="3" />
        <MountPoint Side="Bottom" StartX="0" StartY="1" EndX="3" EndY="2" Default="true" />
        <MountPoint Side="Bottom" StartX="1" StartY="0" EndX="2" EndY="1" />
        <MountPoint Side="Bottom" StartX="1" StartY="2" EndX="2" EndY="3" />
        <MountPoint Side="Left" StartX="1" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Right" StartX="1" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Front" StartX="1" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Back" StartX="1" StartY="0" EndX="2" EndY="3" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\HydrogenTank_Construction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\HydrogenTank_Construction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\HydrogenTank_Construction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>HydrogenTank</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <Capacity>15000000</Capacity>
    <InventoryMaxVolume>0.75</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Hydrogen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>HydrogenBottles</Class>
    </BlueprintClasses>
    <BuildTimeSeconds>50</BuildTimeSeconds>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <DestroyEffect>Explosion_Warhead_30</DestroyEffect>
    <DestroySound>WepLrgWarheadExpl</DestroySound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <PCU>25</PCU>
    <LeakPercent>0.0025</LeakPercent>
    <GasExplosionMaxRadius>20</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>15000000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>HydrogenExplosion</GasExplosionSound>
    <GasExplosionEffect>Explosion_Warhead_30</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>LargeHydrogenTankSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenTankSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\largeHydrogenTankSmall.dds</Icon>
    <Description>Description_HydrogenTank</Description>
    <Public>true</Public>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HydrogenTankSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="60" />
        <Component Subtype="LargeTube" Count="40" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="2" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="2" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="2" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="2" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Large\\HydrogenTankSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\HydrogenTankSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>HydrogenTankSmall</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <Capacity>1000000 </Capacity>
    <InventoryMaxVolume>0.75</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Hydrogen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>HydrogenBottles</Class>
    </BlueprintClasses>
    <BuildTimeSeconds>32</BuildTimeSeconds>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <PCU>25</PCU>
    <LeakPercent>0.005</LeakPercent>
    <GasExplosionMaxRadius>10</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>1000000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>HydrogenExplosion</GasExplosionSound>
    <GasExplosionEffect>Explosion_Warhead_15</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>SmallHydrogenTank</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenTank</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenTank.dds</Icon>
    <Description>Description_HydrogenTank</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <Public>true</Public>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="5" z="5" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HydrogenTank.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="LargeTube" Count="20" />
        <Component Subtype="SmallTube" Count="30" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="1.0" StartY="1.0" EndX="4.0" EndY="4.0" />
        <MountPoint Side="Top" StartX="2.0" StartY="0.0" EndX="3.0" EndY="1.0" />
        <MountPoint Side="Top" StartX="2.0" StartY="4.0" EndX="3.0" EndY="5.0" />
        <MountPoint Side="Top" StartX="0.0" StartY="2.0" EndX="1.0" EndY="3.0" />
        <MountPoint Side="Top" StartX="4.0" StartY="2.0" EndX="5.0" EndY="3.0" />
        <MountPoint Side="Bottom" StartX="1.0" StartY="1.0" EndX="4.0" EndY="4.0" Default="true" />
        <MountPoint Side="Bottom" StartX="2.0" StartY="0.0" EndX="3.0" EndY="1.0" />
        <MountPoint Side="Bottom" StartX="2.0" StartY="4.0" EndX="3.0" EndY="5.0" />
        <MountPoint Side="Bottom" StartX="0.0" StartY="2.0" EndX="1.0" EndY="3.0" />
        <MountPoint Side="Bottom" StartX="4.0" StartY="2.0" EndX="5.0" EndY="3.0" />
        <MountPoint Side="Front" StartX="1.0" StartY="2.0" EndX="4.0" EndY="3.0" />
        <MountPoint Side="Front" StartX="2.0" StartY="0.0" EndX="3.0" EndY="2.0" />
        <MountPoint Side="Front" StartX="2.0" StartY="3.0" EndX="3.0" EndY="5.0" />
        <MountPoint Side="Back" StartX="1.0" StartY="2.0" EndX="4.0" EndY="3.0" />
        <MountPoint Side="Back" StartX="2.0" StartY="0.0" EndX="3.0" EndY="2.0" />
        <MountPoint Side="Back" StartX="2.0" StartY="3.0" EndX="3.0" EndY="5.0" />
        <MountPoint Side="Left" StartX="1.0" StartY="2.0" EndX="4.0" EndY="3.0" />
        <MountPoint Side="Left" StartX="2.0" StartY="0.0" EndX="3.0" EndY="2.0" />
        <MountPoint Side="Left" StartX="2.0" StartY="3.0" EndX="3.0" EndY="5.0" />
        <MountPoint Side="Right" StartX="1.0" StartY="2.0" EndX="4.0" EndY="3.0" />
        <MountPoint Side="Right" StartX="2.0" StartY="0.0" EndX="3.0" EndY="2.0" />
        <MountPoint Side="Right" StartX="2.0" StartY="3.0" EndX="3.0" EndY="5.0" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Small\\HydrogenTank_Construction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Small\\HydrogenTank_Construction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HydrogenTank_Construction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>HydrogenTank</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.001</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.000001</StandbyPowerConsumption>
    <Capacity>500000</Capacity>
    <InventoryMaxVolume>0.75</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Hydrogen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>HydrogenBottles</Class>
    </BlueprintClasses>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>Explosion_Warhead_02</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <LeakPercent>0.005</LeakPercent>
    <GasExplosionMaxRadius>5</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>500000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>WepSmallWarheadExpl</GasExplosionSound>
    <GasExplosionEffect>Explosion_Warhead_02</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>SmallHydrogenTankSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenTankSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SmallHydrogenTankSmall.dds</Icon>
    <Description>Description_HydrogenTank</Description>
    <Public>true</Public>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HydrogenTankSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="SmallTube" Count="2" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="2" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="2" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="2" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="2" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="2" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="2" EndY="2" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\HydrogenTankSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HydrogenTankSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>HydrogenTankSmall</BlockPairName>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <EdgeType>Light</EdgeType>
    <ResourceSourceGroup>Reactors</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.0002</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.0000002</StandbyPowerConsumption>
    <Capacity>15000 </Capacity>
    <InventoryMaxVolume>0.12</InventoryMaxVolume>
    <InventorySize>
        <X>2</X>
        <Y>2</Y>
        <Z>2</Z>
    </InventorySize>
    <StoredGasId>
        <TypeId>GasProperties</TypeId>
        <SubtypeId>Hydrogen</SubtypeId>
    </StoredGasId>
    <BlueprintClasses>
        <Class>HydrogenBottles</Class>
    </BlueprintClasses>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepLrgWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <LeakPercent>0.025</LeakPercent>
    <GasExplosionMaxRadius>3</GasExplosionMaxRadius>
    <GasExplosionNeededVolumeToReachMaxRadius>15000</GasExplosionNeededVolumeToReachMaxRadius>
    <GasExplosionDamageMultiplier>0.00015</GasExplosionDamageMultiplier>
    <GasExplosionSound>WepLrgWarheadExpl</GasExplosionSound>
    <GasExplosionEffect>BlockDestroyedExplosion_Large</GasExplosionEffect>
    <TieredUpdateTimes>
        <unsignedInt>100</unsignedInt>
        <unsignedInt>300</unsignedInt>
        <unsignedInt>600</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirVent</TypeId>
        <SubtypeId />
    </Id>
    <DisplayName>DisplayName_Block_AirVent</DisplayName>
    <YesNoToolbarBackground>true</YesNoToolbarBackground>
    <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
    <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirVent.dds</Icon>
    <Description>Description_AirVent</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\OxygenPressurizer.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="10" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0.5" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0.5" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.5" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="0.5" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\OxygenPressurizerConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\OxygenPressurizerConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\OxygenPressurizerConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>AirVent</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <ResourceSourceGroup>Battery</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.1</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
    <VentilationCapacityPerSecond>300</VentilationCapacityPerSecond>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <PressurizeSound>BlockAirVentExhale</PressurizeSound>
    <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
    <IdleSound>BlockAirVentIdle</IdleSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirVent</TypeId>
        <SubtypeId>AirVentFull</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirVentFull</DisplayName>
    <YesNoToolbarBackground>true</YesNoToolbarBackground>
    <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
    <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OxygenPressurizerFullLarge.dds</Icon>
    <Description>Description_AirVent</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\OxygenPressurizerFull.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="Motor" Count="10" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="SteelPlate" Count="15" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="0.2" />
        <MountPoint Side="Front" StartX="0" StartY="0.8" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0.2" EndX="0.2" EndY="0.8" />
        <MountPoint Side="Front" StartX="0.8" StartY="0.2" EndX="1" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\OxygenPressurizerFullConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\OxygenPressurizerFullConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\OxygenPressurizerFullConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>AirventFull</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <ResourceSourceGroup>Battery</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.1</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
    <VentilationCapacityPerSecond>300</VentilationCapacityPerSecond>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <PressurizeSound>BlockAirVentExhale</PressurizeSound>
    <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
    <IdleSound>BlockAirVentIdle</IdleSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirVent</TypeId>
        <SubtypeId>SmallAirVent</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirVent</DisplayName>
    <YesNoToolbarBackground>true</YesNoToolbarBackground>
    <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
    <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AirVent.dds</Icon>
    <Description>Description_AirVent</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\OxygenPressurizer.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0.5" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0.5" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.5" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="0.5" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Small\\OxygenPressurizerConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Small\\OxygenPressurizerConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\OxygenPressurizerConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>AirVent</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <ResourceSourceGroup>Battery</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.01</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
    <VentilationCapacityPerSecond>30</VentilationCapacityPerSecond>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <PressurizeSound>BlockAirVentExhale</PressurizeSound>
    <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
    <IdleSound>BlockAirVentIdle</IdleSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Tiny</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>AirVent</TypeId>
        <SubtypeId>SmallAirVentFull</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AirVentFull</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\OxygenPressurizerFullSmall.dds</Icon>
    <YesNoToolbarBackground>true</YesNoToolbarBackground>
    <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
    <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
    <Description>Description_AirVent</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\OxygenPressurizerFull.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="3" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="0.2" />
        <MountPoint Side="Front" StartX="0" StartY="0.8" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0.2" EndX="0.2" EndY="0.8" />
        <MountPoint Side="Front" StartX="0.8" StartY="0.2" EndX="1" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\OxygenPressurizerFullConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\OxygenPressurizerFullConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>AirventFull</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <ResourceSourceGroup>Battery</ResourceSourceGroup>
    <ResourceSinkGroup>Factory</ResourceSinkGroup>
    <OperationalPowerConsumption>0.01</OperationalPowerConsumption>
    <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
    <VentilationCapacityPerSecond>30</VentilationCapacityPerSecond>
    <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
    <DamagedSound>ParticleWeapExpl</DamagedSound>
    <PressurizeSound>BlockAirVentExhale</PressurizeSound>
    <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
    <IdleSound>BlockAirVentIdle</IdleSound>
    <EmissiveColorPreset>Extended</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Tiny</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>SmallBlockSmallContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\container.dds</Icon>
    <Description>Description_SmallCargoContainer</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\CargoContainerSmall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CargoContainerSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CargoContainerSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>SmallCargoContainer</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <EdgeType>Light</EdgeType>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>SmallBlockMediumContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MediumCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\container_medium.dds</Icon>
    <Description>Description_MediumCargoContainer</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\CargoContainerMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CargoContainerMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CargoContainerMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MediumCargoContainer</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>SmallBlockLargeContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\container_large.dds</Icon>
    <Description>Description_LargeCargoContainer</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="5" y="5" z="5" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\CargoContainerLarge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="55" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="InteriorPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="5" EndY="5" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="5" EndY="5" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="5" EndY="5" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="5" EndY="5" Default="true" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="5" EndY="5" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="5" EndY="5" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CargoContainerLargeConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CargoContainerLargeConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>LargeCargoContainer</BlockPairName>
    <MirroringX>Z</MirroringX>
    <MirroringZ>X</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockSmallContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\container.dds</Icon>
    <Description>Description_SmallCargoContainer</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CargoContainerSmall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="35" />
        <Component Subtype="MetalGrid" Count="4" />
        <Component Subtype="SmallTube" Count="20" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\CargoContainerSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\CargoContainerSmallConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CargoContainerSmallConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>SmallCargoContainer</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLargeContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\container_large.dds</Icon>
    <Description>Description_LargeCargoContainer</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CargoContainerLarge.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="300" />
        <Component Subtype="Construction" Count="60" />
        <Component Subtype="MetalGrid" Count="24" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Motor" Count="20" />
        <Component Subtype="Display" Count="1" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="60" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="1" StartY="1" EndX="2" EndY="2" />
        <MountPoint Side="Left" StartX="1" StartY="1" EndX="2" EndY="2" />
        <MountPoint Side="Top" StartX="1" StartY="1" EndX="2" EndY="2" />
        <MountPoint Side="Bottom" StartX="1" StartY="1" EndX="2" EndY="2" Default="true" />
        <MountPoint Side="Front" StartX="1" StartY="1" EndX="2" EndY="2" />
        <MountPoint Side="Back" StartX="1" StartY="1" EndX="2" EndY="2" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\CargoContainerLargeConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\CargoContainerLargeConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CargoContainerLargeConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>LargeCargoContainer</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>45</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>SmallBlockConveyor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\conveyor.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="InteriorPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0" />
        <MountPoint Side="Top" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0"  />
        <MountPoint Side="Back" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0"  />
        <MountPoint Side="Bottom" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0"  />
        <MountPoint Side="Right" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.0" StartY="0.0" EndX="1.0" EndY="1.0" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorSmall</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>SmallBlockConveyorConverter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorConverter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorConverter.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\conveyorConverter.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="2.9" EndY="2.9" />
        <MountPoint Side="Top" StartX="0.1" StartY="0.1" EndX="2.9" EndY="0.9" />
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.3" EndY="2.9" />
        <MountPoint Side="Back" StartX="2.7" StartY="0.1" EndX="2.9" EndY="2.9" />
        <MountPoint Side="Back" StartX="0.3" StartY="0.1" EndX="2.7" EndY="0.3" />
        <MountPoint Side="Back" StartX="0.3" StartY="2.7" EndX="2.7" EndY="2.9" />
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="2.9" EndY="0.9" />
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="2.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorConverterConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorConverterConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorConverter</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>LargeBlockConveyor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Conveyor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\conveyor.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\conveyor.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="20" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\ConveyorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\ConveyorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>Conveyor</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Collector</TypeId>
        <SubtypeId>Collector</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Collector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\collector.dds</Icon>
    <Description>Description_Collector</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Collector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="Construction" Count="50" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="SteelPlate" Count="15" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\CollectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\CollectorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CollectorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>Collector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <InventorySize>
        <X>2.5</X>
        <Y>2.5</Y>
        <Z>1</Z>
    </InventorySize>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockCollect</ActionSound>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Collector</TypeId>
        <SubtypeId>CollectorSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Collector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\collector.dds</Icon>
    <Description>Description_Collector</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\Collector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="25" />
        <Component Subtype="Construction" Count="35" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Display" Count="2" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CollectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CollectorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>Collector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <InventorySize>
        <X>1.5</X>
        <Y>1.5</Y>
        <Z>0.7</Z>
    </InventorySize>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="3" EndY="3" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="3" EndY="3" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockCollect</ActionSound>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>Connector</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Connector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Connector.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Connector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="130" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\ConnectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\ConnectorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConnectorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>Connector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Back" StartX="0.15" StartY="0.15" EndX="0.85" EndY="0.9" Default="true"/>
        <MountPoint Side="Top" StartX="0.3" StartY="0.6" EndX="0.7" EndY="0.7" />
        <MountPoint Side="Top" StartX="0.4" StartY="0.1" EndX="0.6" EndY="0.45" />
        <MountPoint Side="Top" StartX="0.3" StartY="0.0" EndX="0.7" EndY="0.1" />
        <MountPoint Side="Bottom" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.4" />
        <MountPoint Side="Bottom" StartX="0.4" StartY="0.55" EndX="0.6" EndY="0.9" />
        <MountPoint Side="Bottom" StartX="0.3" StartY="0.9" EndX="0.7" EndY="1.0" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <IsAirTight>false</IsAirTight>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>ConnectorSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConnectorSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConnectorSmall.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\Connector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConnectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConnectorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConnectorSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <IsAirTight>true</IsAirTight>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>ConnectorMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Connector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Connector.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConnectorMedium.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="SteelPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConnectorMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConnectorMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>Connector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <Center x="1" y="1" z="1" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
        <MountPoint Side="Left" StartX="1" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="1" EndX="3" EndY="2" />
    </MountPoints>
    <MirroringZ>X</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>LargeBlockInsetConnector</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InsetConnector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InsetConnector.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\InsetConnector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="130" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\InsetConnectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\InsetConnectorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\InsetConnectorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>InsetConnector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Left" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Right" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Front" StartX="0.1" StartY="0" EndX="0.5" EndY="0.05" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.05" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.9" EndX="0.5" EndY="0.95" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.95" EndX="0.9" EndY="1" />
        <MountPoint Side="Front" StartX="0.05" StartY="0.1" EndX="0.1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0" StartY="0.5" EndX="0.05" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.95" StartY="0.1" EndX="1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0.9" StartY="0.5" EndX="0.95" EndY="0.9" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>LargeBlockInsetConnectorSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InsetConnectorSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InsetConnector_medium.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\LargeGridSmallConnector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="130" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="8" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\LargeGridSmallConnectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\LargeGridSmallConnectorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\LargeGridSmallConnectorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>InsetConnectorSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>30</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Left" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Right" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Front" StartX="0.1" StartY="0" EndX="0.5" EndY="0.05" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.05" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.9" EndX="0.5" EndY="0.95" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.95" EndX="0.9" EndY="1" />
        <MountPoint Side="Front" StartX="0.05" StartY="0.1" EndX="0.1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0" StartY="0.5" EndX="0.05" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.95" StartY="0.1" EndX="1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0.9" StartY="0.5" EndX="0.95" EndY="0.9" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>SmallBlockInsetConnector</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InsetConnectorSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InsetConnector_medium.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\InsetConnector.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="4" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\InsetConnectorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\InsetConnectorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>InsetConnectorSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0.1" StartY="0" EndX="0.5" EndY="0.05" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.05" EndX="0.9" EndY="0.1" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.9" EndX="0.5" EndY="0.95" />
        <MountPoint Side="Front" StartX="0.5" StartY="0.95" EndX="0.9" EndY="1" />
        <MountPoint Side="Front" StartX="0.05" StartY="0.1" EndX="0.1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0" StartY="0.5" EndX="0.05" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.95" StartY="0.1" EndX="1" EndY="0.5" />
        <MountPoint Side="Front" StartX="0.9" StartY="0.5" EndX="0.95" EndY="0.9" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <IsAirTight>true</IsAirTight>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ShipConnector</TypeId>
        <SubtypeId>SmallBlockInsetConnectorMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_InsetConnector</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InsetConnector_Small.dds</Icon>
    <Description>Description_Connector</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\InsetConnectorMedium.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="SmallTube" Count="6" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Computer" Count="6" />
        <Component Subtype="SteelPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\InsetConnectorMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\InsetConnectorMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>InsetConnector</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <Center x="1" y="1" z="1" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="2" EndY="3" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="2" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="2" />
        <MountPoint Side="Front" StartX="0.2" StartY="0" EndX="1.5" EndY="0.05" />
        <MountPoint Side="Front" StartX="1.5" StartY="0.05" EndX="2.8" EndY="0.2" />
        <MountPoint Side="Front" StartX="0.2" StartY="2.8" EndX="1.5" EndY="2.95" />
        <MountPoint Side="Front" StartX="1.5" StartY="2.95" EndX="2.8" EndY="3" />
        <MountPoint Side="Front" StartX="0.05" StartY="0.2" EndX="0.2" EndY="1.5" />
        <MountPoint Side="Front" StartX="0" StartY="1.5" EndX="0.05" EndY="2.8" />
        <MountPoint Side="Front" StartX="2.8" StartY="1.5" EndX="2.95" EndY="2.8" />
        <MountPoint Side="Front" StartX="2.95" StartY="0.2" EndX="3" EndY="1.5" />
    </MountPoints>
    <MirroringZ>X</MirroringZ>
    <MirroringX>Z</MirroringX>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ActionSound>BlockEject</ActionSound>
    <EmissiveColorPreset>ConnectBlock</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>125</PCU>
    <AutoUnlockTime_Min>0</AutoUnlockTime_Min>
    <AutoUnlockTime_Max>3600</AutoUnlockTime_Max>
    <TieredUpdateTimes>
        <unsignedInt>80</unsignedInt>
        <unsignedInt>160</unsignedInt>
        <unsignedInt>320</unsignedInt>
    </TieredUpdateTimes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTube</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTube</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTube.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>true</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorTube.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorTubeConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorTubeConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTube</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" Default="true"/>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Bottom" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
        <MountPoint Side="Top" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" />
        <MountPoint Side="Top" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Top" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Top" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
    </MountPoints>
    <AutorotateMode>OppositeDirections</AutorotateMode>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeDuct</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuct</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuct.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>true</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorDuct.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorDuctConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorDuctConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeDuct</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Right" StartX="0.7" StartY="0" EndX="1" EndY="1.0" Default="true"/>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="0.7" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.5" StartY="0.7" EndX="0.7" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.3" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.95" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.3" StartY="0" EndX="0.5" EndY="0.3" />
        <MountPoint Side="Left" StartX="0.3" StartY="0.7" EndX="0.5" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Back" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Back" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
    </MountPoints>
    <AutorotateMode>OppositeDirections</AutorotateMode>
    <MirroringX>Z</MirroringX>
    <MirroringZ>X</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeDuctCurved</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuctCurved</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuctCurved.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>true</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorDuctCurved.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorDuctCurvedConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorDuctCurvedConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeDuctCurved</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Right" StartX="0.7" StartY="0" EndX="1" EndY="1.0" Default="true"/>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="0.7" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.5" StartY="0.7" EndX="0.7" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="0.3" />
        <MountPoint Side="Bottom" StartX="0" StartY="0.3" EndX="0.3" EndY="0.5" />
        <MountPoint Side="Bottom" StartX="0.7" StartY="0.3" EndX="1" EndY="0.5" />
        <MountPoint Side="Bottom" StartX="0" StartY="0.95" EndX="1" EndY="1.0" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.15" EndY="0.85" />
        <MountPoint Side="Back" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Back" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Back" StartX="0.9" StartY="0" EndX="1" EndY="0.1" />
    </MountPoints>
    <MirroringX>HalfZ</MirroringX>
    <MirroringY>ZHalfZ</MirroringY>
    <MirroringZ>YHalfZ</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>ConveyorTubeDuctT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuctT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuctT.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>true</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorDuctT.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="12" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="24" />
        <Component Subtype="SmallTube" Count="14" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="6" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorDuctTConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorDuctTConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeDuctT</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Right" StartX="0.7" StartY="0" EndX="1" EndY="1.0" Default="true"/>
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="0.7" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.5" StartY="0.7" EndX="0.7" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.3" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.95" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.3" StartY="0" EndX="0.5" EndY="0.3" />
        <MountPoint Side="Left" StartX="0.3" StartY="0.7" EndX="0.5" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="0.3" />
        <MountPoint Side="Bottom" StartX="0" StartY="0.3" EndX="0.3" EndY="0.5" />
        <MountPoint Side="Bottom" StartX="0.7" StartY="0.3" EndX="1" EndY="0.5" />
        <MountPoint Side="Bottom" StartX="0" StartY="0.95" EndX="1" EndY="1.0" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="0.05" />
        <MountPoint Side="Back" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Back" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
    </MountPoints>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTubeSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorTube.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.1" StartY="0.1" EndX="0.2" EndY="0.9" Default="true"/>
        <MountPoint Side="Back" StartX="0.8" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Back" StartX="0.2" StartY="0.1" EndX="0.8" EndY="0.2" />
        <MountPoint Side="Back" StartX="0.2" StartY="0.8" EndX="0.8" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="0.2" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.8" StartY="0.1" EndX="0.9" EndY="0.9" />
        <MountPoint Side="Front" StartX="0.2" StartY="0.1" EndX="0.8" EndY="0.2" />
        <MountPoint Side="Front" StartX="0.2" StartY="0.8" EndX="0.8" EndY="0.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorTubeConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeDuctSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuctSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuctSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorDuct.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.5" StartY="0" EndX="1" EndY="1.0" ExclusionMask="1" PropertiesMask="2" Default="true"/>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="0.5" EndY="1.0" ExclusionMask="1" PropertiesMask="2" />
        <MountPoint Side="Front" StartX="0.95" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="0.15" />
        <MountPoint Side="Left" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorDuctConstruction_1.mwm" />
    </BuildProgressModels>
    <MirroringX>Z</MirroringX>
    <MirroringZ>X</MirroringZ>
    <BlockPairName>ConveyorTubeDuctSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeDuctSmallCurved</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuctSmallCurved</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuctCurvedSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorDuctCurved.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="1" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Back" StartX="0.5" StartY="0" EndX="1" EndY="1.0" ExclusionMask="1" PropertiesMask="2" Default="true"/>
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0.5" StartY="0" EndX="1" EndY="1" ExclusionMask="1" PropertiesMask="2" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.15" EndY="0.85" />
        <MountPoint Side="Left" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
        <MountPoint Side="Left" StartX="0.9" StartY="0" EndX="1" EndY="0.1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorDuctCurvedConstruction_1.mwm" />
    </BuildProgressModels>
    <MirroringX>YMinusHalfX</MirroringX>
    <MirroringY>HalfX</MirroringY>
    <MirroringZ>XHalfX</MirroringZ>
    <BlockPairName>ConveyorTubeDuctSmallCurved</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>ConveyorTubeDuctSmallT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeDuctSmallT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorDuctTSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>true</GuiVisible>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorDuctT.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorDuctTConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeDuctSmallT</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Front" StartX="0.5" StartY="0" EndX="1" EndY="1.0" ExclusionMask="1" PropertiesMask="2" Default="true"/>
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="0.05" EndY="1.0" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.5" EndY="1.0" ExclusionMask="1" PropertiesMask="2" />
        <MountPoint Side="Back" StartX="0.95" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="0.5" EndY="1" ExclusionMask="1" PropertiesMask="2" />
        <MountPoint Side="Bottom" StartX="0.95" StartY="0" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="0.05" />
        <MountPoint Side="Right" StartX="0" StartY="0.85" EndX="1" EndY="1.0" />
        <MountPoint Side="Right" StartX="0.45" StartY="0.45" EndX="0.55" EndY="0.55" />
    </MountPoints>
    <MirroringY>X</MirroringY>
    <MirroringX>Y</MirroringX>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeMedium</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTube.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorTubeMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="8" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorTubeMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorTubeMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTube</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Left" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Left" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Left" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
        <MountPoint Side="Right" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Right" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Right" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
    </MountPoints>
    <AutorotateMode>OppositeDirections</AutorotateMode>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
    <DestroySound>PoofExplosionCat2</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorFrameMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorFrame</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorFrameMedium.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorFrameMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="12" />
        <Component Subtype="SmallTube" Count="5" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorFrameMediumConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorFrame</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Left" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Left" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Left" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
        <MountPoint Side="Right" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Right" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Right" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
    </MountPoints>
    <AutorotateMode>OppositeDirections</AutorotateMode>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
    <DestroySound>PoofExplosionCat2</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeCurved</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeCurved</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTubeCurved.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorTubeCurved.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorTubeCurvedConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorTubeCurvedConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeCurved</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Bottom" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Right" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
    </MountPoints>
    <AutorotateMode>FirstDirection</AutorotateMode>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeSmallCurved</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeCurvedSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorCurveSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorTubeCurved.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorTubeCurvedConstruction_1.mwm" />
    </BuildProgressModels>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BlockPairName>ConveyorTubeCurvedSmall</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>ConveyorTubeCurvedMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeCurved</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTubeCurved.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorTurnMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="10" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorTurnMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorTurnMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Bottom" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Bottom" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
        <MountPoint Side="Right" StartX="0.4" StartY="0.2" EndX="2.6" EndY="0.4" />
        <MountPoint Side="Right" StartX="0.4" StartY="2.6" EndX="2.6" EndY="2.8" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.4" EndX="0.4" EndY="2.6" />
        <MountPoint Side="Right" StartX="2.6" StartY="0.4" EndX="2.8" EndY="2.6" />
    </MountPoints>
    <BlockPairName>ConveyorTubeCurved</BlockPairName>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <AutorotateMode>FirstDirection</AutorotateMode>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
    <DestroySound>PoofExplosionCat2</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>SmallShipConveyorHub</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Conveyor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Conveyor.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorHub.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\ConveyorHubConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\ConveyorHubConstruction_2.mwm" />
    </BuildProgressModels>
    <MountPoints>
        <MountPoint Side="Top" StartX="0.25" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Bottom" StartX="0.25" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Right" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" />
        <MountPoint Side="Right" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Right" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
        <MountPoint Side="Right" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" />
        <MountPoint Side="Left" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" />
        <MountPoint Side="Left" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Left" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
        <MountPoint Side="Left" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" />
        <MountPoint Side="Back" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" />
        <MountPoint Side="Back" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Back" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
        <MountPoint Side="Back" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" />
        <MountPoint Side="Front" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" />
        <MountPoint Side="Front" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
        <MountPoint Side="Front" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
        <MountPoint Side="Front" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" />
    </MountPoints>
    <BlockPairName>Conveyor</BlockPairName>
    <MirroringZ>X</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <IsAirTight>true</IsAirTight>
    <PCU>10</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>ConveyorTubeSmallT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeTSmall</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTubeT_Small.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorTubeT.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="2" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorTubeTConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeTSmall</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>ConveyorTubeT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorTubeT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorTubeT.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorTubeT.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="24" />
        <Component Subtype="SmallTube" Count="14" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" Default="true" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Bottom" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Right" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.3" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.7" EndX="0.8" EndY="0.8" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.3" EndX="0.3" EndY="0.7" />
        <MountPoint Side="Left" StartX="0.7" StartY="0.3" EndX="0.8" EndY="0.7" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\ConveyorTubeTConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorTubeTConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorTubeT</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>10</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorSorter</TypeId>
        <SubtypeId>LargeBlockConveyorSorter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorSorter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorSorterLarge.dds</Icon>
    <Description>Description_ConveyorSorter</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorSorter.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="40" />
        <Component Subtype="Construction" Count="100" />
        <Component Subtype="SmallTube" Count="50" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\ConveyorSorterConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\ConveyorSorterConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorSorterConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorSorter</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
    <PowerInput>0.00025</PowerInput>
    <InventorySize>
        <X>1</X>
        <Y>1</Y>
        <Z>1</Z>
    </InventorySize>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorSorter</TypeId>
        <SubtypeId>MediumBlockConveyorSorter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorSorter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorSorterMedium.dds</Icon>
    <Description>Description_ConveyorSorter</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorSorterMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="5" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorSorterMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorSorterMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorSorter</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
    <PowerInput>0.0001</PowerInput>
    <InventorySize>
        <X>0.7</X>
        <Y>0.7</Y>
        <Z>0.7</Z>
    </InventorySize>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <PCU>25</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorSorter</TypeId>
        <SubtypeId>SmallBlockConveyorSorter</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallConveyorSorter</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorSorterSmall.dds</Icon>
    <Description>Description_ConveyorSorter</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorSorterSmall.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="5" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorSorterSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorSorterSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorSorterSmall</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <ResourceSinkGroup>Conveyors</ResourceSinkGroup>
    <PowerInput>0.0001</PowerInput>
    <InventorySize>
        <X>0.4</X>
        <Y>0.4</Y>
        <Z>0.4</Z>
    </InventorySize>
    <EmissiveColorPreset>Default</EmissiveColorPreset>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>25</PCU>
    <IsAirTight>true</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockConveyorCap</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorCap</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorCapLarge.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorCap.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\ConveyorCapConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\ConveyorCapConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\ConveyorCapConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorCap</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockConveyorCapMedium</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorCapMedium</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorCapMedium.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="1" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorCapMedium.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="2.9" EndY="2.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorCapMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorCapMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorCap</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockConveyorCap</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorCap</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorCapSmall.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\ConveyorCap.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\ConveyorCapConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\ConveyorCapConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ConveyorCapSmall</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
</Definition>`
];
