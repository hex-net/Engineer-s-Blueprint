// data/vanillaPistonHingeData.ts

// Raw XML strings for base game Piston and Hinge blocks
// The xsi:type attribute has been removed from Definition tags.
export const vanillaPistonHingeRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>PistonBase</TypeId>
        <SubtypeId>LargePistonBase</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBase</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Piston.dds</Icon>
    <Description>Description_Piston</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PistonBase.mwm</Model>
    <UseVanillaPlacementDetection>true</UseVanillaPlacementDetection>
    <PlaceDecals>false</PlaceDecals>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true"/>
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PistonBaseConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PistonBaseConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PistonBaseConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>PistonBase</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PrimarySound>BlockPiston</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <TopPart>PistonTop</TopPart>
    <Public>false</Public>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DefaultMaxImpulseAxis>50000</DefaultMaxImpulseAxis>
    <DefaultMaxImpulseNonAxis>50000</DefaultMaxImpulseNonAxis>
    <DangerousImpulseThreshold>100000</DangerousImpulseThreshold>
    <MaxImpulse>340282300000000000000000000000000000000</MaxImpulse>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ExtendedPistonBase</TypeId>
        <SubtypeId>LargePistonBase</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBase</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Piston.dds</Icon>
    <Description>Description_Piston</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <UseVanillaPlacementDetection>true</UseVanillaPlacementDetection>
    <Size x="1" y="3" z="1" />
    <Center x="0" y="0" z="0"></Center>
    <ModelOffset x="0" y="-1.25" z="0" />
    <Model>Models\\Cubes\\Large\\PistonBase.mwm</Model>
    <PlaceDecals>false</PlaceDecals>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PistonBaseConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PistonBaseConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PistonBaseConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>ExtendedPistonBase</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PrimarySound>BlockPiston</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <TopPart>PistonTop</TopPart>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DefaultMaxImpulseAxis>50000</DefaultMaxImpulseAxis>
    <DefaultMaxImpulseNonAxis>50000</DefaultMaxImpulseNonAxis>
    <DangerousImpulseThreshold>100000</DangerousImpulseThreshold>
    <MaxImpulse>340282300000000000000000000000000000000</MaxImpulse>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>PistonTop</TypeId>
        <SubtypeId>LargePistonTop</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonTop</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonTop.dds</Icon>
    <Description>Description_PistonTop</Description>
    <Public>true</Public>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PistonTop.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="LargeTube" Count="8" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Front" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Back" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PistonTopConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PistonTopConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PistonTopConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>PistonTop</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <DestroyEffect>BlockDestroyed_Large</DestroyEffect>
    <DestroySound>PoofExplosionCat3</DestroySound>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>PistonBase</TypeId>
        <SubtypeId>SmallPistonBase</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBase</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Piston.dds</Icon>
    <Description>Description_Piston</Description>
    <UseVanillaPlacementDetection>true</UseVanillaPlacementDetection>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\PistonBase.mwm</Model>
    <PlaceDecals>false</PlaceDecals>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\PistonBaseConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\PistonBaseConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>PistonBase</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PrimarySound>BlockPiston</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <TopPart>PistonTop</TopPart>
    <Maximum>2</Maximum>
    <Public>false</Public>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DefaultMaxImpulseAxis>50000</DefaultMaxImpulseAxis>
    <DefaultMaxImpulseNonAxis>50000</DefaultMaxImpulseNonAxis>
    <DangerousImpulseThreshold>100000</DangerousImpulseThreshold>
    <MaxImpulse>340282300000000000000000000000000000000</MaxImpulse>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>100</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ExtendedPistonBase</TypeId>
        <SubtypeId>SmallPistonBase</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonBase</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Piston.dds</Icon>
    <Description>Description_Piston</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <UseVanillaPlacementDetection>true</UseVanillaPlacementDetection>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <Center x="0" y="0" z="0"></Center>
    <ModelOffset x="0" y="-0.25" z="0" />
    <Model>Models\\Cubes\\Small\\PistonBase.mwm</Model>
    <PlaceDecals>false</PlaceDecals>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SmallTube" Count="4" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="1.7" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\PistonBaseConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1" File="Models\\Cubes\\Small\\PistonBaseConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>ExtendedPistonBase</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PrimarySound>BlockPiston</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <TopPart>PistonTop</TopPart>
    <Maximum>2</Maximum>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DefaultMaxImpulseAxis>50000</DefaultMaxImpulseAxis>
    <DefaultMaxImpulseNonAxis>50000</DefaultMaxImpulseNonAxis>
    <DangerousImpulseThreshold>100000</DangerousImpulseThreshold>
    <MaxImpulse>340282300000000000000000000000000000000</MaxImpulse>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <PCU>100</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>PistonTop</TypeId>
        <SubtypeId>SmallPistonTop</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PistonTop</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PistonTop.dds</Icon>
    <Description>Description_PistonTop</Description>
    <CubeSize>Small</CubeSize>
    <Public>true</Public>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\PistonTop.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
        <MountPoint Side="Left" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Right" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Front" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
        <MountPoint Side="Back" StartX="0.2" StartY="0.8" EndX="0.8" EndY="1" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.5" File="Models\\Cubes\\Small\\PistonTopConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\PistonTopConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>PistonTop</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
    <DestroySound>PoofExplosionCat1</DestroySound>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorStator</TypeId>
        <SubtypeId>LargeStator</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Rotor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\motor.dds</Icon>
    <Description>Description_Rotor</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="-1.25" z="0" />
    <Model>Models\\Cubes\\Large\\MotorStator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorStatorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorStatorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorStatorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorStator</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PrimarySound>BlockRotor</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <PropulsionForce>8000</PropulsionForce>
    <RotorPart>MotorRotor</RotorPart>
    <RotorDisplacementMin>-0.4</RotorDisplacementMin>
    <RotorDisplacementMax>0.2</RotorDisplacementMax>
    <RotorDisplacementMinSmall>-0.11</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0.11</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0.0</RotorDisplacementInModel>
    <GuiVisible>false</GuiVisible>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <RotorType>Rotor</RotorType>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeHingeHead</SubtypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorRotor</TypeId>
        <SubtypeId>LargeRotor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RotorPart</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RotorPart.dds</Icon>
    <Description>Description_RotorPart</Description>
    <BlockPairName>MotorRotor</BlockPairName>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\MotorRotor.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="LargeTube" Count="6" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorRotorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorRotorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorRotorConstruction_3.mwm" />
    </BuildProgressModels>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>5</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorStator</TypeId>
        <SubtypeId>SmallStator</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Rotor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\motor.dds</Icon>
    <Description>Description_Rotor</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="-0.25" z="0" />
    <Model>Models\\Cubes\\Small\\MotorStator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="3" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SmallTube" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorStatorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorStatorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorStator</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PrimarySound>BlockRotorSmall</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorPart>MotorRotor</RotorPart>
    <RotorDisplacementMin>-0.11</RotorDisplacementMin>
    <RotorDisplacementMax>0.11</RotorDisplacementMax>
    <RotorDisplacementMinSmall>-0.11</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0.11</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0.045</RotorDisplacementInModel>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <RotorType>Rotor</RotorType>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeHingeHead</SubtypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorRotor</TypeId>
        <SubtypeId>SmallRotor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RotorPart</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\RotorPart.dds</Icon>
    <Description>Description_RotorPart</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\MotorRotor.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="12" />
        <Component Subtype="SmallTube" Count="6" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorRotorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorRotorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorRotor</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>2</BuildTimeSeconds>
    <RotorPart>MotorRotor</RotorPart>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>LargeAdvancedStator</SubtypeId>
    </Id>
    <Public>true</Public>
    <DisplayName>DisplayName_Block_AdvancedRotor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedMotor_small.dds</Icon>
    <Description>Description_AdvancedRotor</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="-1.25" z="0" />
    <Model>Models\\Cubes\\Large\\MotorAdvancedStator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorAdvancedStatorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorAdvancedStatorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorAdvancedStatorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedStator</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PrimarySound>BlockRotor</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <MediumTopPart>MotorAdvancedRotor3x3</MediumTopPart>
    <RotorPart>MotorAdvancedRotor</RotorPart>
    <RotorDisplacementMin>-0.4</RotorDisplacementMin>
    <RotorDisplacementMax>0.2</RotorDisplacementMax>
    <RotorDisplacementMinSmall>-0.11</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0.11</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0.0</RotorDisplacementInModel>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <RotorType>Rotor</RotorType>
    <PCU>100</PCU>
    <IsAirTight>false</IsAirTight>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeHingeHead</SubtypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>LargeAdvancedRotor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AdvancedRotorPart</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedRotorPart.dds</Icon>
    <Description>Description_AdvancedRotorPart</Description>
    <Public>true</Public>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\MotorAdvancedRotor.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="30" />
        <Component Subtype="LargeTube" Count="10" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MotorAdvancedRotorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MotorAdvancedRotorConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MotorAdvancedRotorConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedRotor</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>SmallAdvancedStator</SubtypeId>
    </Id>
    <Public>true</Public>
    <DisplayName>DisplayName_Block_AdvancedRotor3x3</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedMotor.dds</Icon>
    <Description>Description_AdvancedRotor</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="2" z="3" />
    <ModelOffset x="0" y="-0.25" z="0" />
    <Model>Models\\Cubes\\Small\\MotorAdvancedStator.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="6" />
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="SmallTube" Count="1" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorAdvancedStatorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorAdvancedStatorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedStator3x3</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PrimarySound>BlockRotorSmall</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorPart>MotorAdvancedRotor3x3</RotorPart>
    <RotorDisplacementMin>-0.02</RotorDisplacementMin>
    <RotorDisplacementMax>0.11</RotorDisplacementMax>
    <RotorDisplacementMinSmall>-0.02</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0.11</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0.11</RotorDisplacementInModel>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <RotorType>Rotor</RotorType>
    <PCU>100</PCU>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeHingeHead</SubtypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>SmallAdvancedRotor</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AdvancedRotorPart3x3</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedRotorPart.dds</Icon>
    <Description>Description_AdvancedRotorPart</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="2" z="3" />
    <ModelOffset x="0" y="-0.25" z="0" />
    <Model>Models\\Cubes\\Small\\MotorAdvancedRotor.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="LargeTube" Count="6" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorAdvancedRotorConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorAdvancedRotorConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedRotor3x3</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <RotorPart>MotorAdvancedRotor</RotorPart>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>SmallAdvancedStatorSmall</SubtypeId>
    </Id>
    <Public>true</Public>
    <DisplayName>DisplayName_Block_AdvancedRotor</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedMotor_small.dds</Icon>
    <Description>Description_AdvancedRotor</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="1" />
    <ModelOffset x="0" y="-0.25" z="0" />
    <Model>Models\\Cubes\\Small\\MotorAdvancedStatorSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="3" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SmallTube" Count="1" />
        <Component Subtype="Motor" Count="1" />
        <Component Subtype="Computer" Count="1" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <MountPoints>
        <MountPoint Side="Bottom" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" Default="true" />
        <MountPoint Side="Left" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Right" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Front" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
        <MountPoint Side="Back" StartX="0.25" StartY="0" EndX="0.75" EndY="0.61" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorAdvancedStatorSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorAdvancedStatorSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedStator</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PrimarySound>BlockRotorSmall</PrimarySound>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.0002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorPart>MotorAdvancedRotor</RotorPart>
    <RotorDisplacementMin>-0.11</RotorDisplacementMin>
    <RotorDisplacementMax>0.11</RotorDisplacementMax>
    <RotorDisplacementMinSmall>-0.11</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0.11</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0.045</RotorDisplacementInModel>
    <DamageEffectName>Damage_HeavyMech_Damaged</DamageEffectName>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
    <DestroySound>WepSmallWarheadExpl</DestroySound>
    <RotorType>Rotor</RotorType>
    <PCU>100</PCU>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeHingeHead</SubtypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>SmallAdvancedRotorSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AdvancedRotorPart</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedRotor_Part_small.dds</Icon>
    <Description>Description_AdvancedRotorPart</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\MotorAdvancedRotorSmall.mwm</Model>
    <UseModelIntersection>true</UseModelIntersection>
    <Components>
        <Component Subtype="SteelPlate" Count="12" />
        <Component Subtype="SmallTube" Count="6" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <MountPoints>
        <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MotorAdvancedRotorSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MotorAdvancedRotorSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>MotorAdvancedRotor</BlockPairName>
    <MirroringY>Z</MirroringY>
    <MirroringZ>Y</MirroringZ>
    <EdgeType>Light</EdgeType>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <RotorPart>MotorAdvancedRotor</RotorPart>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>LargeHinge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeHinge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Hinge.dds</Icon>
    <Description>Description_Hinge</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\Hinge.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\HingeConstruction_1.mwm" />
        <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\HingeConstruction_2.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\HingeConstruction_3.mwm" />
    </BuildProgressModels>
    <BlockPairName>LargeHinge</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <MediumTopPart>HingeHead3x3</MediumTopPart>
    <RotorPart>HingeHead</RotorPart>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorDisplacementMin>0</RotorDisplacementMin>
    <RotorDisplacementMax>0</RotorDisplacementMax>
    <RotorDisplacementMinSmall>0</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0</RotorDisplacementInModel>
    <MinAngleDeg>-90</MinAngleDeg>
    <MaxAngleDeg>90</MaxAngleDeg>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DamageEffectId>212</DamageEffectId>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <PrimarySound>BlockRotor</PrimarySound>
    <RotorType>Hinge</RotorType>
    <PCU>100</PCU>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeRotor</SubtypeId>
        <SubtypeId>LargeAdvancedRotor</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>LargeHingeHead</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeHingeHead</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HingeHead.dds</Icon>
    <Description>Description_HingeHead</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HingeHead.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="8" />
        <Component Subtype="LargeTube" Count="4" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <MountPoints>
        <MountPoint Side="Left" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\HingeHeadConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>HingeHead</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>MediumHinge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MediumHinge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HingeMedium.dds</Icon>
    <Description>Description_Hinge</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HingeMedium.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="6" />
        <Component Subtype="Construction" Count="6" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0.1" StartY="0" EndX="2.9" EndY="3" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\HingeMediumConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HingeMediumConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>LargeHinge</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <RotorPart>HingeHead3x3</RotorPart>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorDisplacementMin>0</RotorDisplacementMin>
    <RotorDisplacementMax>0</RotorDisplacementMax>
    <RotorDisplacementMinSmall>0</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0</RotorDisplacementInModel>
    <MinAngleDeg>-90</MinAngleDeg>
    <MaxAngleDeg>90</MaxAngleDeg>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DamageEffectId>212</DamageEffectId>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <PrimarySound>BlockRotor</PrimarySound>
    <RotorType>Hinge</RotorType>
    <PCU>100</PCU>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>LargeRotor</SubtypeId>
        <SubtypeId>SmallAdvancedRotor</SubtypeId>
        <SubtypeId>LargeAdvancedRotor</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>MediumHingeHead</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MediumHingeHead</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HingeHeadMedium.dds</Icon>
    <Description>Description_HingeHead</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HingeHeadMedium.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <MountPoints>
        <MountPoint Side="Left" StartX="0" StartY="0" EndX="3" EndY="3" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HingeHeadMediumConstruction_1.mwm" />
    </BuildProgressModels>
    <BlockPairName>HingeHead3x3</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <PCU>1</PCU>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedStator</TypeId>
        <SubtypeId>SmallHinge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SmallHinge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HingeSmall.dds</Icon>
    <Description>Description_Hinge</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HingeSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="4" />
        <Component Subtype="Construction" Count="4" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <MountPoints>
        <MountPoint Side="Right" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\HingeSmallConstruction_1.mwm" />
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HingeSmallConstruction_2.mwm" />
    </BuildProgressModels>
    <BlockPairName>SmallHinge</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <RotorPart>HingeHead</RotorPart>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <ResourceSinkGroup>Utility</ResourceSinkGroup>
    <RequiredPowerInput>0.002</RequiredPowerInput>
    <MaxForceMagnitude>1000000000</MaxForceMagnitude>
    <DangerousTorqueThreshold>33600000</DangerousTorqueThreshold>
    <RotorDisplacementMin>0</RotorDisplacementMin>
    <RotorDisplacementMax>0</RotorDisplacementMax>
    <RotorDisplacementMinSmall>0</RotorDisplacementMinSmall>
    <RotorDisplacementMaxSmall>0</RotorDisplacementMaxSmall>
    <RotorDisplacementInModel>0</RotorDisplacementInModel>
    <MinAngleDeg>-90</MinAngleDeg>
    <MaxAngleDeg>90</MaxAngleDeg>
    <SafetyDetach>5</SafetyDetach>
    <SafetyDetachMax>5</SafetyDetachMax>
    <DamageEffectId>212</DamageEffectId>
    <DamagedSound>ParticleHeavyMech</DamagedSound>
    <PrimarySound>BlockRotor</PrimarySound>
    <RotorType>Hinge</RotorType>
    <PCU>100</PCU>
    <ForbiddenTopPartSubtypes>
        <SubtypeId>SmallRotor</SubtypeId>
        <SubtypeId>SmallAdvancedRotorSmall</SubtypeId>
    </ForbiddenTopPartSubtypes>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>MotorAdvancedRotor</TypeId>
        <SubtypeId>SmallHingeHead</SubtypeId>
    </Id>
    <BlockPairName>HingeHead</BlockPairName>
    <DisplayName>DisplayName_Block_SmallHingeHead</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HingeHeadSmall.dds</Icon>
    <Description>Description_HingeHead</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HingeHeadSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <MountPoints>
        <MountPoint Side="Left" StartX="0.1" StartY="0.1" EndX="0.9" EndY="0.9" />
    </MountPoints>
    <BuildProgressModels>
        <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\HingeHeadSmallConstruction_1.mwm" />
    </BuildProgressModels>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <UseModelIntersection>true</UseModelIntersection>
    <MirroringX>Y</MirroringX>
    <MirroringY>X</MirroringY>
    <PCU>1</PCU>
</Definition>`
];
