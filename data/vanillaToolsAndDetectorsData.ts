// data/vanillaToolsAndDetectorsData.ts

// Raw XML strings for base game ship tools and ore detectors
// The xsi:type attribute has been removed from Definition tags, and xmlns namespaces from the root.
export const vanillaToolsAndDetectorsRawXml: string[] = [
`
<Definitions>
    <CubeBlocks>
        <Definition>
            <Id>
                <TypeId>Drill</TypeId>
                <SubtypeId>SmallBlockDrill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Drill</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\drill.dds</Icon>
            <Description>Description_Drill</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="6" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\driller.mwm</Model>
            <PlaceDecals>false</PlaceDecals>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="4" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="SteelPlate" Count="12" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <Center x="1" y="1" z="5" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="1" EndX="3" EndY="2" Default="true" />
                <MountPoint Side="Right" StartX="0" StartY="1" EndX="2" EndY="2" />
                <MountPoint Side="Left" StartX="4" StartY="1" EndX="6" EndY="2" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\DrillerConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\DrillerConstruction_2.mwm" />
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
            <BlockPairName>Drill</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <SensorRadius>1.3</SensorRadius>
            <SensorOffset>0.8</SensorOffset>
            <CutOutRadius>1.3</CutOutRadius>
            <CutOutOffset>0.6</CutOutOffset>
            <ParticleOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.45</Z>
            </ParticleOffset>
            <DeformationRatio>0.2</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <PrimarySound>ToolShipDrillIdle</PrimarySound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>190</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>Drill</TypeId>
                <SubtypeId>LargeBlockDrill</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Drill</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\drill.dds</Icon>
            <Description>Description_Drill</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\drill.mwm</Model>
            <PlaceDecals>false</PlaceDecals>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="180" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="LargeTube" Count="12" />
                <Component Subtype="Motor" Count="5" />
                <Component Subtype="Computer" Count="5" />
                <Component Subtype="SteelPlate" Count="120" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="2" EndX="1" EndY="3" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="2" StartY="0" EndX="3" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\DrillConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\DrillConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\DrillConstruction_3.mwm" />
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
            <BlockPairName>Drill</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <Center x="0" y="0" z="2" />
            <ResourceSinkGroup>Defense</ResourceSinkGroup>
            <SensorRadius>1.9</SensorRadius>
            <SensorOffset>2.8</SensorOffset>
            <CutOutRadius>1.9</CutOutRadius>
            <CutOutOffset>2.8</CutOutOffset>
            <ParticleOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-3.6</Z>
            </ParticleOffset>
            <DeformationRatio>0.2</DeformationRatio>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <PrimarySound>ToolShipDrillIdle</PrimarySound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>190</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>ShipGrinder</TypeId>
                <SubtypeId>LargeShipGrinder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ShipGrinder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Grinder.dds</Icon>
            <Description>Description_ShipGrinder</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="0" y="0" z="1" />
            <Model>Models\\Cubes\\Large\\Grinder.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="Motor" Count="4" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\GrinderConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\GrinderConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\GrinderConstruction_3.mwm" />
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
            <MountPoints>
                <MountPoint Side="Left" StartX="1.18" StartY="0.20" EndX="1.92" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.08" StartY="0.20" EndX="0.82" EndY="0.80" />
                <MountPoint Side="Top" StartX="0.30" StartY="0.30" EndX="0.70" EndY="0.70" />
                <MountPoint Side="Bottom" StartX="0.30" StartY="1.30" EndX="0.70" EndY="1.70" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
            </MountPoints>
            <BlockPairName>ShipGrinder</BlockPairName>
            <MirroringZ>X</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>24</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <Flare></Flare>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <SensorRadius>1.4</SensorRadius>
            <PCU>100</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>ShipGrinder</TypeId>
                <SubtypeId>SmallShipGrinder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ShipGrinder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Grinder.dds</Icon>
            <Description>Description_ShipGrinder</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="6" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="1" y="1" z="3" />
            <Model>Models\\Cubes\\Small\\Grinder.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="SmallTube" Count="4" />
                <Component Subtype="Motor" Count="4" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="SteelPlate" Count="2" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\GrinderConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\GrinderConstruction_2.mwm" />
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
            <MountPoints>
                <MountPoint Side="Left" StartX="3.5" StartY="0.5" EndX="5.8" EndY="2.5" />
                <MountPoint Side="Right" StartX="0.2" StartY="0.5" EndX="2.5" EndY="2.5" />
                <MountPoint Side="Top" StartX="0.8" StartY="0.2" EndX="2.2" EndY="2.5" />
                <MountPoint Side="Bottom" StartX="0.8" StartY="3.5" EndX="2.2" EndY="5.8" />
                <MountPoint Side="Back" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" Default="true" />
                <MountPoint Side="Back" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
                <MountPoint Side="Back" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
                <MountPoint Side="Back" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" />
            </MountPoints>
            <BlockPairName>ShipGrinder</BlockPairName>
            <MirroringZ>X</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>18</BuildTimeSeconds>
            <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
            <DamagedSound>ParticleHeavyMech</DamagedSound>
            <Flare></Flare>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <SensorRadius>1.3</SensorRadius>
            <PCU>100</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
        <Definition>
            <Id>
                <TypeId>ShipWelder</TypeId>
                <SubtypeId>LargeShipWelder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ShipWelder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Welder.dds</Icon>
            <Description>Description_ShipWelder</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="0" y="0" z="1" />
            <Model>Models\\Cubes\\Large\\Welder.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WelderConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WelderConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WelderConstruction_3.mwm" />
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
            <MountPoints>
                <MountPoint Side="Left" StartX="1.18" StartY="0.20" EndX="1.92" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.08" StartY="0.20" EndX="0.82" EndY="0.80" />
                <MountPoint Side="Top" StartX="0.30" StartY="0.30" EndX="0.70" EndY="0.70" />
                <MountPoint Side="Bottom" StartX="0.30" StartY="1.30" EndX="0.70" EndY="1.70" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
            </MountPoints>
            <BlockPairName>ShipWelder</BlockPairName>
            <MirroringZ>X</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>24</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <Flare>ShipWelderLarge</Flare>
            <EmissiveColorPreset>Welder</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <SensorRadius>2.26</SensorRadius>
            <PCU>150</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>ShipWelder</TypeId>
                <SubtypeId>SmallShipWelder</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_ShipWelder</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Welder.dds</Icon>
            <Description>Description_ShipWelder</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="6" />
            <ModelOffset x="0" y="0" z="0" />
            <Center x="1" y="1" z="3" />
            <Model>Models\\Cubes\\Small\\Welder.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="SmallTube" Count="6" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="Computer" Count="2" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="SteelPlate" Count="2" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WelderConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.0" File="Models\\Cubes\\Small\\WelderConstruction_2.mwm" />
            </BuildProgressModels>
            <MountPoints>
                <MountPoint Side="Left" StartX="3.5" StartY="0.5" EndX="5.8" EndY="2.5" />
                <MountPoint Side="Right" StartX="0.2" StartY="0.5" EndX="2.5" EndY="2.5" />
                <MountPoint Side="Top" StartX="0.8" StartY="0.2" EndX="2.2" EndY="2.5" />
                <MountPoint Side="Bottom" StartX="0.8" StartY="3.5" EndX="2.2" EndY="5.8" />
                <MountPoint Side="Back" StartX="0.25" StartY="0.25" EndX="0.35" EndY="2.75" />
                <MountPoint Side="Back" StartX="2.65" StartY="0.25" EndX="2.75" EndY="2.75" />
                <MountPoint Side="Back" StartX="0.35" StartY="0.25" EndX="2.65" EndY="0.35" />
                <MountPoint Side="Back" StartX="0.35" StartY="2.65" EndX="2.65" EndY="2.75" Default="true" />
            </MountPoints>
            <BlockPairName>ShipWelder</BlockPairName>
            <MirroringZ>X</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>18</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <Flare>ShipWelder</Flare>
            <EmissiveColorPreset>Welder</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <SensorRadius>1.3</SensorRadius>
            <PCU>150</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
        <Definition>
            <Id>
                <TypeId>OreDetector</TypeId>
                <SubtypeId>LargeOreDetector</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OreDetector</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\detector.dds</Icon>
            <Description>Description_OreDetector</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\OreDetector.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="30" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="Motor" Count="5" />
                <Component Subtype="Computer" Count="25" />
                <Component Subtype="Detector" Count="20" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="Detector" Index="0" />
            <Center x="0" y="0" z="1" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="1" EndX="1" EndY="2" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\OreDetectorConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\OreDetectorConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\OreDetectorConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>OreDetector</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <MaximumRange>150</MaximumRange>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>40</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>OreDetector</TypeId>
                <SubtypeId>SmallBlockOreDetector</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_OreDetector</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\detector.dds</Icon>
            <Description>Description_OreDetector</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\OreDetector.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="Motor" Count="1" />
                <Component Subtype="Computer" Count="1" />
                <Component Subtype="Detector" Count="1" />
                <Component Subtype="SteelPlate" Count="2" />
            </Components>
            <CriticalComponent Subtype="Detector" Index="0" />
            <Center x="0" y="0" z="1" />
            <MountPoints>
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="1" EndX="1" EndY="2" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="2" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\OreDetectorConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\OreDetectorConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>OreDetector</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <MaximumRange>50</MaximumRange>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Default</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>40</PCU>
        </Definition>
    </CubeBlocks>
</Definitions>
`
];
