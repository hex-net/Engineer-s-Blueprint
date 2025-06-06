// data/vanillaMedicalCryoData.ts

// Raw XML strings for base game Medical Room and Cryo Chamber blocks
// The xsi:type attribute has been removed from Definition tags.
export const vanillaMedicalCryoRawXml: string[] = [
`
<Definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <Definition>
            <Id>
                <TypeId>MedicalRoom</TypeId>
                <SubtypeId>LargeMedicalRoom</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_MedicalRoom</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\medical_room.dds</Icon>
            <Description>Description_MedicalRoom</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MedicalRoom.mwm</Model>
            <IdleSound>BlockMedical</IdleSound>
            <ProgressSound>BlockMedicalProgress</ProgressSound>
            <Components>
                <Component Subtype="InteriorPlate" Count="220" />
                <Component Subtype="Construction" Count="80" />
                <Component Subtype="MetalGrid" Count="60" />
                <Component Subtype="SmallTube" Count="20" />
                <Component Subtype="LargeTube" Count="5" />
                <Component Subtype="Display" Count="10" />
                <Component Subtype="Computer" Count="10" />
                <Component Subtype="Medical" Count="15" />
                <Component Subtype="InteriorPlate" Count="20" />
            </Components>
            <CriticalComponent Subtype="Medical" Index="0" />
            <Center x="0" y="0" z="1" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0.2" StartY="0.2" EndX="1.6" EndY="0.8" />
                <MountPoint Side="Top" StartX="0.3" StartY="0.8" EndX="0.6" EndY="1.2" />
                <MountPoint Side="Bottom" StartX="0.1" StartY="0.5" EndX="0.8" EndY="2" Default="true" />
                <MountPoint Side="Bottom" StartX="0.8" StartY="1.1" EndX="1.9" EndY="1.9" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\MedicalRoomConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\MedicalRoomConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MedicalRoomConstruction_3.mwm" />
            </BuildProgressModels>
            <ScreenAreas>
                <ScreenArea Name="CockpitScreen_01" DisplayName="Top panel" />
                <ScreenArea Name="CockpitScreen_02" DisplayName="Bottom panel" />
            </ScreenAreas>
            <VoxelPlacement>
                <StaticMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.14</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </StaticMode>
                <DynamicMode>
                    <PlacementMode>Volumetric</PlacementMode>
                    <MaxAllowed>0.14</MaxAllowed>
                    <MinAllowed>0</MinAllowed>
                </DynamicMode>
            </VoxelPlacement>
            <BlockPairName>MedicalRoom</BlockPairName>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>50</BuildTimeSeconds>
            <ResourceSinkGroup>LifeSupport</ResourceSinkGroup>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
			<WardrobeCharacterOffset x="-1.35" y="-0.9" z="1.7" />
            <PCU>30</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CryoChamber</TypeId>
                <SubtypeId>LargeBlockCryoChamber</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_CryoChamber</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\CryoPod.dds</Icon>
            <Description>Description_CryoChamber</Description>
            <CubeSize>Large</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\CryoPod.mwm</Model>
            <InteriorModel>Models\\Cubes\\Large\\CryoPodInterior.mwm</InteriorModel>
            <CharacterAnimation>Idle</CharacterAnimation>
            <Components>
                <Component Subtype="InteriorPlate" Count="30" />
                <Component Subtype="Construction" Count="20" />
                <Component Subtype="Motor" Count="8" />
                <Component Subtype="Display" Count="8" />
                <Component Subtype="Medical" Count="3" />
                <Component Subtype="Computer" Count="30" />
                <Component Subtype="InteriorPlate" Count="10" />
                <Component Subtype="BulletproofGlass" Count="10" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0.2" StartY="0.1" EndX="0.8" EndY="0.7" Default="true" />
                <MountPoint Side="Top" StartX="0.2" StartY="0.3" EndX="0.8" EndY="0.9" />
                <MountPoint Side="Back" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.7" />
                <MountPoint Side="Back" StartX="0.05" StartY="0.7" EndX="0.95" EndY="0.95" />
                <MountPoint Side="Left" StartX="0.4" StartY="0.4" EndX="0.8" EndY="0.8" />
                <MountPoint Side="Right" StartX="0.2" StartY="0.4" EndX="0.6" EndY="0.8" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\CryoPodConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\CryoPodConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CryoPodConstruction_3.mwm" />
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
            <BlockPairName>CryoChamber</BlockPairName>
            <OverlayTexture>Textures\\GUI\\Screens\\cryopod_interior.dds</OverlayTexture>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <EnableFirstPerson>true</EnableFirstPerson>
            <IsPressurized>true</IsPressurized>
            <OxygenCapacity>1</OxygenCapacity>
            <ResourceSinkGroup>LifeSupport</ResourceSinkGroup>
            <IdlePowerConsumption>0.00003</IdlePowerConsumption>
            <OutsideSound>BlockCryoOut</OutsideSound>
            <InsideSound>BlockCryoIn</InsideSound>
            <EnclosedCockpit>true</EnclosedCockpit>
            <EdgeType>Light</EdgeType>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>15</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
        <Definition>
            <Id>
                <TypeId>CryoChamber</TypeId>
                <SubtypeId>SmallBlockCryoChamber</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_CryoChamber</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\CryoPod.dds</Icon>
            <Description>Description_CryoChamber</Description>
            <CubeSize>Small</CubeSize>
            <GuiVisible>false</GuiVisible>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="4" z="3" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\small\\Cryopod.mwm</Model>
            <InteriorModel>Models\\Cubes\\small\\Cryopod.mwm</InteriorModel>
            <CharacterAnimation>Idle</CharacterAnimation>
            <Components>
                <Component Subtype="InteriorPlate" Count="15" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="Motor" Count="4" />
                <Component Subtype="Display" Count="4" />
                <Component Subtype="Medical" Count="3" />
                <Component Subtype="Computer" Count="15" />
                <Component Subtype="InteriorPlate" Count="5" />
                <Component Subtype="BulletproofGlass" Count="5" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="3" EndY="3" Default="true" />
                <MountPoint Side="Top" StartX="1" StartY="0" EndX="2" EndY="1" />
                <MountPoint Side="Back" StartX="1" StartY="1" EndX="2" EndY="4" />
                <MountPoint Side="Front" StartX="1" StartY="0" EndX="2" EndY="0.5" />
                <MountPoint Side="Left" StartX="1" StartY="0" EndX="2.5" EndY="2" />
                <MountPoint Side="Left" StartX="2" StartY="2" EndX="2.5" EndY="3" />
                <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="2" EndY="2" />
                <MountPoint Side="Right" StartX="0.5" StartY="2" EndX="1" EndY="3" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\small\\CryoPodConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\small\\CryoPodConstruction_2.mwm" />
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
            <BlockPairName>CryoChamber</BlockPairName>
            <OverlayTexture>Textures\\GUI\\Screens\\cryopod_interior.dds</OverlayTexture>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <BuildTimeSeconds>15</BuildTimeSeconds>
            <EnableFirstPerson>true</EnableFirstPerson>
            <IsPressurized>true</IsPressurized>
            <OxygenCapacity>1</OxygenCapacity>
            <ResourceSinkGroup>LifeSupport</ResourceSinkGroup>
            <IdlePowerConsumption>0.00003</IdlePowerConsumption>
            <OutsideSound>BlockCryoOut</OutsideSound>
            <InsideSound>BlockCryoIn</InsideSound>
            <EnclosedCockpit>true</EnclosedCockpit>
            <EdgeType>Light</EdgeType>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>15</PCU>
            <IsAirTight>false</IsAirTight>
        </Definition>
    </CubeBlocks>
</Definitions>
`];
