// data/vanillaWheelData.ts

// Raw XML strings for base game Wheel and MotorSuspension blocks
export const vanillaWheelDataRawXml: string[] = [
`
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_3.mwm" />
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
            <BlockPairName>Suspension3x3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>Suspension3x3mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>60000</PropulsionForce>
            <RotorPart>RealWheel</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspensionLarge.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="40" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SmallTube" Count="30" />
                <Component Subtype="Motor" Count="20" />
                <Component Subtype="SteelPlate" Count="30" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_3.mwm" />
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
            <BlockPairName>Suspension5x5</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>Suspension5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <PropulsionForce>100000</PropulsionForce>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel5x5</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension1x1.mwm</Model>
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
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true"/>
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_3.mwm" />
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
            <BlockPairName>Suspension1x1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>Suspension1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>20000</PropulsionForce>
            <RotorPart>RealWheel1x1</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
            <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
                <Id>
                    <TypeId>MotorSuspension</TypeId>
                    <SubtypeId>Suspension2x2</SubtypeId>
                </Id>
                <DisplayName>DisplayName_Block_Suspension2x2</DisplayName>
                <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Right.dds</Icon>
                <Description>Description_Suspension</Description>
                <CubeSize>Large</CubeSize>
                <BlockTopology>TriangleMesh</BlockTopology>
                <Size x="1" y="2" z="1" />
                <ModelOffset x="0" y="0" z="0" />
                <Model>Models\\Cubes\\Large\\MotorSuspension.mwm</Model>
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
                    <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_1.mwm" />
                    <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_2.mwm" />
                    <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_3.mwm" />
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
                <BlockPairName>Suspension2x2</BlockPairName>
                <MirroringY>Z</MirroringY>
                <MirroringZ>Y</MirroringZ>
                <MirroringBlock>Suspension2x2Mirrored</MirroringBlock>
                <EdgeType>Light</EdgeType>
                <BuildTimeSeconds>20</BuildTimeSeconds>
                <PrimarySound>BlockWheel3x3</PrimarySound>
                <ResourceSinkGroup>Utility</ResourceSinkGroup>
                <RequiredPowerInput>0.8</RequiredPowerInput>
                <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
                <MaxForceMagnitude>1E9</MaxForceMagnitude>
                <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
                <PropulsionForce>40000</PropulsionForce>
                <RotorPart>RealWheel2x2</RotorPart>
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
                <TargetingGroups>
                    <string>Propulsion</string>
                </TargetingGroups>
            </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension3x3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension3x3mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.2</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspensionLarge.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="12" />
                <Component Subtype="SmallTube" Count="4" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="SteelPlate" Count="6" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionLargeConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionLargeConstruction_2.mwm" />
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
            <BlockPairName>Suspension5x5</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>SmallSuspension5x5mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.3</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel5x5</RotorPart>
            <PropulsionForce>4800</PropulsionForce>
            <MinHeight>-0.50</MinHeight>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension1x1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel1x1</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Right.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension2x2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.15</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel2x2</RotorPart>
            <PropulsionForce>1000</PropulsionForce>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension3x3mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_3.mwm" />
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
            <BlockPairName>Suspension3x3mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>Suspension3x3</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>60000</PropulsionForce>
            <RotorPart>RealWheelmirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspensionLarge.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="40" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SmallTube" Count="30" />
                <Component Subtype="Motor" Count="20" />
                <Component Subtype="SteelPlate" Count="30" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionLargeConstruction_3.mwm" />
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
            <BlockPairName>Suspension5x5mirrored</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>Suspension5x5</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>30</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>1.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <PropulsionForce>100000</PropulsionForce>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel5x5mirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension1x1.mwm</Model>
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
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true"/>
                <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
                <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.80" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspension1x1Construction_3.mwm" />
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
            <BlockPairName>Suspension1x1mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>Suspension1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.5</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>20000</PropulsionForce>
            <RotorPart>RealWheel1x1mirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>Suspension2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension2x2Mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorSuspensionConstruction_3.mwm" />
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
            <BlockPairName>Suspension2x2Mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>Suspension2x2</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.8</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <PropulsionForce>40000</PropulsionForce>
            <RotorPart>RealWheel2x2Mirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension3x3mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension3x3mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension3x3</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.2</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheelmirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspensionLarge.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <SilenceableByShipSoundSystem>true</SilenceableByShipSoundSystem>
            <DeformationRatio>0.1</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="12" />
                <Component Subtype="SmallTube" Count="4" />
                <Component Subtype="Motor" Count="2" />
                <Component Subtype="SteelPlate" Count="6" />
            </Components>
            <CriticalComponent Subtype="Motor" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="1.9" EndY="1.9" Default="true" />
                <MountPoint Side="Left" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
                <MountPoint Side="Right" StartX="0.3" StartY="0.2" EndX="1.7" EndY="1.25" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionLargeConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionLargeConstruction_2.mwm" />
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
            <BlockPairName>Suspension5x5mirrored</BlockPairName>
            <MirroringY>ZThenOffsetX</MirroringY>
            <MirroringZ>YThenOffsetX</MirroringZ>
            <MirroringBlock>SmallSuspension5x5</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <PrimarySound>BlockWheel5x5</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.3</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel5x5mirrored</RotorPart>
            <PropulsionForce>4800</PropulsionForce>
            <MinHeight>-0.50</MinHeight>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension1x1mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel1x1</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.1</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel1x1mirrored</RotorPart>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_MotorSuspensionDefinition">
            <Id>
                <TypeId>MotorSuspension</TypeId>
                <SubtypeId>SmallSuspension2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Suspension2x2Mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Left.dds</Icon>
            <Description>Description_Suspension</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MotorSuspension.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\MotorSuspensionConstruction_2.mwm" />
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
            <BlockPairName>Suspension2x2Mirrored</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallSuspension2x2</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PrimarySound>BlockWheel3x3</PrimarySound>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.15</RequiredPowerInput>
            <RequiredIdlePowerInput>0.002</RequiredIdlePowerInput>
            <MaxForceMagnitude>1E9</MaxForceMagnitude>
            <DangerousTorqueThreshold>3.36E+07</DangerousTorqueThreshold>
            <RotorPart>RealWheel2x2Mirrored</RotorPart>
            <PropulsionForce>1000</PropulsionForce>
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
            <TargetingGroups>
                <string>Propulsion</string>
            </TargetingGroups>
        </Definition>
        
        <!-- Start Region Wheels -->
        
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension1x1.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension1x1Construction_2.mwm" />
            </BuildProgressModels>
            <MountPoints>
            </MountPoints>
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
            <BlockPairName>RealWheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallRealWheel1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>10</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel2x2</SubtypeId>
            </Id>
            <Public>false</Public>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-0.25" y="0" z="-0.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension2x2.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension2x2Construction_2.mwm" />
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
                <ColliderHeight>0.88</ColliderHeight>
                <ColliderOffset>0.25</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints>
            </MountPoints>
            <BlockPairName>RealWheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallReal2x2WheelMirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
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
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension3x3.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension3x3Construction_2.mwm" />
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
            <MountPoints>
            </MountPoints>
            <BlockPairName>RealWheel</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallRealWheelmirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension5x5.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension5x5Construction_2.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel5x5</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\large\\WheelSuspension1x1.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheel1x1mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension2x2Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-1.25" y="0" z="-1.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension2x2.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.88</ColliderHeight>
                <ColliderOffset>0.28</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheel2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="2" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension3x3.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="50" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SteelPlate" Count="50" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.62</ColliderHeight>
                <ColliderOffset>0.36</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheelmirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Right.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension5x5.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="30" />
                <Component Subtype="Construction" Count="70" />
                <Component Subtype="LargeTube" Count="30" />
                <Component Subtype="SteelPlate" Count="100" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel5x5</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>30</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension1x1mirrored.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension1x1Construction_2.mwm" />
            </BuildProgressModels>
            <MountPoints>
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
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
            <BlockPairName>RealWheel1x1mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallRealWheel1x1</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>10</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-0.25" y="0" z="-0.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension2x2mirrored.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension2x2Construction_2.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.9</ColliderDiameter>
                <ColliderHeight>0.88</ColliderHeight>
                <ColliderOffset>0.25</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel2x2Mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallReal2x2Wheel</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheelmirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension3x3mirrored.mwm</Model>
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
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension3x3Construction_2.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>1.25</ColliderHeight>
                <ColliderOffset>0.22</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheelmirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>SmallRealWheel</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallRealWheel5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WheelSuspension5x5mirrored.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\WheelSuspension5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\WheelSuspension5x5Construction_2.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel5x5mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel1x1mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension1x1Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\large\\WheelSuspension1x1mirrored.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension1x1Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.08</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel1x1mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>15</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel2x2Mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <MechanicalTopInitialPlacementOffset x="-1.25" y="0" z="-1.25" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension2x2mirrored.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension2x2Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.88</ColliderHeight>
                <ColliderOffset>0.28</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel2x2Mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheel2x2Mirrored</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheelmirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension3x3Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="2" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension3x3mirrored.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="50" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SteelPlate" Count="50" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension3x3Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>1</ColliderDiameter>
                <ColliderHeight>0.62</ColliderHeight>
                <ColliderOffset>0.36</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheelmirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <MirroringBlock>RealWheel</MirroringBlock>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>RealWheel5x5mirrored</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5mirrored</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WheelSuspension5x5Left.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="3" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WheelSuspension5x5mirrored.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <PhysicalMaterial>Wheel</PhysicalMaterial>
            <Components>
                <Component Subtype="SteelPlate" Count="30" />
                <Component Subtype="Construction" Count="70" />
                <Component Subtype="LargeTube" Count="30" />
                <Component Subtype="SteelPlate" Count="100" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WheelSuspension5x5Construction_3.mwm" />
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
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.95</ColliderDiameter>
                <ColliderHeight>0.9</ColliderHeight>
                <ColliderOffset>0.15</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>RealWheel5x5mirrored</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>false</Public>
            <BuildTimeSeconds>30</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>Wheel1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel1x1.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Wheel1x1.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="30" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="SteelPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Wheel1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Wheel1x1Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Wheel1x1Construction_3.mwm" />
            </BuildProgressModels>
            <MountPoints>
                <MountPoint Side="Top" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
                <MountPoint Side="Bottom" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
            </MountPoints>
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
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <Public>true</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallWheel1x1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel1x1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel1x1.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Wheel1x1.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="LargeTube" Count="1" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Wheel1x1Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Wheel1x1Construction_2.mwm" />
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
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <MountPoints>
                <MountPoint Side="Top" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
                <MountPoint Side="Bottom" StartX="0.25" StartY="0.25" EndX="0.75" EndY="0.75" />
            </MountPoints>
            <BlockPairName>Wheel1x1</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>5</BuildTimeSeconds>
            <Public>true</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>Wheel3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel3x3.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Wheel3x3.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="20" />
                <Component Subtype="Construction" Count="50" />
                <Component Subtype="LargeTube" Count="20" />
                <Component Subtype="SteelPlate" Count="50" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Wheel3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Wheel3x3Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Wheel3x3Construction_3.mwm" />
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
                <MountPoint Side="Top" StartX="0.6" StartY="0.6" EndX="2.4" EndY="2.4" />
                <MountPoint Side="Bottom" StartX="0.6" StartY="0.6" EndX="2.4" EndY="2.4" />
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel3x3</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallWheel3x3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel3x3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel3x3.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="1" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Wheel3x3.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="3" />
                <Component Subtype="Construction" Count="15" />
                <Component Subtype="LargeTube" Count="3" />
                <Component Subtype="SteelPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Wheel3x3Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Wheel3x3Construction_2.mwm" />
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
                <MountPoint Side="Top" StartX="0.6" StartY="0.6" EndX="2.4" EndY="2.4" />
                <MountPoint Side="Bottom" StartX="0.6" StartY="0.6" EndX="2.4" EndY="2.4" />
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel3x3</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
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
            <DestroyEffect>BlockDestroyed_Medium</DestroyEffect>
            <DestroySound>PoofExplosionCat2</DestroySound>
            <PCU>25</PCU>
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>Wheel5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel5x5.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="2" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Wheel5x5.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="30" />
                <Component Subtype="Construction" Count="70" />
                <Component Subtype="LargeTube" Count="30" />
                <Component Subtype="SteelPlate" Count="100" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Wheel5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Wheel5x5Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Wheel5x5Construction_3.mwm" />
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
                <MountPoint Side="Top" StartX="1" StartY="1" EndX="4" EndY="4" />
                <MountPoint Side="Bottom" StartX="1" StartY="1" EndX="4" EndY="4" />
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel5x5</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>30</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallWheel5x5</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel5x5</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel5x5.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="5" y="2" z="5" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Wheel5x5.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="5" />
                <Component Subtype="Construction" Count="25" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="SteelPlate" Count="10" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Wheel5x5Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Wheel5x5Construction_2.mwm" />
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
                <MountPoint Side="Top" StartX="1" StartY="1" EndX="4" EndY="4" />
                <MountPoint Side="Bottom" StartX="1" StartY="1" EndX="4" EndY="4" />
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel5x5</BlockPairName>
            <DeformationRatio>0.3</DeformationRatio>
            <UsesDeformation>false</UsesDeformation>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <Public>true</Public>
            <BuildTimeSeconds>20</BuildTimeSeconds>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>Wheel2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel2x2.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\Wheel2x2.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="15" />
                <Component Subtype="Construction" Count="40" />
                <Component Subtype="LargeTube" Count="15" />
                <Component Subtype="SteelPlate" Count="35" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\Wheel2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\Wheel2x2Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\Wheel2x2Construction_3.mwm" />
            </BuildProgressModels>
            <MountPoints>
                <MountPoint Side="Top" StartX="0.4" StartY="0.4" EndX="1.6" EndY="1.6" Default="true" />
                <MountPoint Side="Bottom" StartX="0.4" StartY="0.4" EndX="1.6" EndY="1.6" />
            </MountPoints>
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
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <Public>true</Public>
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
        </Definition>
        <Definition>
            <Id>
                <TypeId>Wheel</TypeId>
                <SubtypeId>SmallWheel2x2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_Wheel2x2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\Wheel2x2.dds</Icon>
            <Description>Description_Wheel</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\Wheel2x2.mwm</Model>
            <UseModelIntersection>true</UseModelIntersection>
            <Components>
                <Component Subtype="SteelPlate" Count="2" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="LargeTube" Count="2" />
                <Component Subtype="SteelPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\Wheel2x2Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\Wheel2x2Construction_2.mwm" />
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
                <MountPoint Side="Top" StartX="0.4" StartY="0.4" EndX="1.6" EndY="1.6" Default="true" />
                <MountPoint Side="Bottom" StartX="0.4" StartY="0.4" EndX="1.6" EndY="1.6" />
            </MountPoints>
            <WheelPlacementCollider>
                <ColliderDiameter>0.5</ColliderDiameter>
                <ColliderHeight>0.5</ColliderHeight>
                <ColliderOffset>0</ColliderOffset>
            </WheelPlacementCollider>
            <BlockPairName>Wheel2x2</BlockPairName>
            <UsesDeformation>false</UsesDeformation>
            <DeformationRatio>0.3</DeformationRatio>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <Public>true</Public>
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
        </Definition>
    </CubeBlocks>
</Definitions>
`
];
