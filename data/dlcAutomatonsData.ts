// data/dlcAutomatonsData.ts

// Raw XML strings for blocks with DLC "Automatons"
// The xsi:type attribute has been removed from Definition tags.
export const dlcAutomatonsRawXml: string[] = [
`
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <CubeBlocks>
        <!-- Decorative Blocks -->
        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>AngledInteriorWallA</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AngledInteriorWallA</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\AngledInteriorWallA.dds</Icon>
            <Description>Description_InteriorWall</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\AngledInteriorWallA.mwm</Model>
            <Components>
                <Component Subtype="InteriorPlate" Count="20" />
                <Component Subtype="Construction" Count="8" />
                <Component Subtype="InteriorPlate" Count="5" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="0.5" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Left" StartX="0.5" StartY="0" EndX="1" EndY="0.5" />
                <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.5" EndY="0.5" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\AngledInteriorWallAConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\AngledInteriorWallAConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\AngledInteriorWallAConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>AngledInteriorWallA</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <PCU>1</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>AngledInteriorWallB</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AngledInteriorWallB</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\AngledInteriorWallB.dds</Icon>
            <Description>Description_InteriorWall</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\AngledInteriorWallB.mwm</Model>
            <Components>
                <Component Subtype="InteriorPlate" Count="20" />
                <Component Subtype="Construction" Count="8" />
                <Component Subtype="InteriorPlate" Count="5" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="0.5" EndX="1" EndY="1" />
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="0.1" EndY="0.5" />
                <MountPoint Side="Top" StartX="0.9" StartY="0" EndX="1" EndY="0.5" />
                <MountPoint Side="Back" StartX="0.1" StartY="0" EndX="0.9" EndY="0.1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.1" EndY="1" />
                <MountPoint Side="Back" StartX="0.9" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Left" StartX="0.5" StartY="0" EndX="1" EndY="0.5" />
                <MountPoint Side="Left" StartX="0.5" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0.5" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.5" EndY="0.5" />
                <MountPoint Side="Right" StartX="0" StartY="0.9" EndX="0.5" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\AngledInteriorWallBConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\AngledInteriorWallBConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\AngledInteriorWallBConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>AngledInteriorWallB</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <PCU>1</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>InteriorLight</TypeId>
                <SubtypeId>LargeBlockInsetLight</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_InsetLight</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\InsetLightBlockLarge.dds</Icon>
            <Description>Description_InteriorLight</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\InsetLightBlock.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="10" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="InteriorPlate" Count="20" />
                <Component Subtype="Construction" Count="5" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\InsetLightBlockConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\InsetLightBlockConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\InsetLightBlockConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>InsetLight</BlockPairName>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>14</BuildTimeSeconds>
            <LightRadius Min="1" Max="20" Default="3.6" />
            <LightFalloff Min="0" Max="3" Default="1.3" />
            <LightIntensity Min="0.5" Max="10" Default="5" />
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00006</RequiredPowerInput>
            <Flare>InteriorLight</Flare>
            <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
            <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>1.1</Z>
            </DestroyEffectOffset>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>20</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>InteriorLight</TypeId>
                <SubtypeId>SmallBlockInsetLight</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_InsetLight</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\InsetLightBlockSmall.dds</Icon>
            <Description>Description_InteriorLight</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\InsetLightBlock.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="InteriorPlate" Count="1" />
                <Component Subtype="Construction" Count="1" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="0" />
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\InsetLightBlockConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\InsetLightBlockConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>InsetLight</BlockPairName>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <LightRadius Min="1" Max="20" Default="3.6" />
            <LightFalloff Min="0" Max="3" Default="1.3" />
            <LightIntensity Min="0.5" Max="10" Default="5" />
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00006</RequiredPowerInput>
            <Flare>InteriorLight</Flare>
            <PointLightEmissiveMaterial>Emissive</PointLightEmissiveMaterial>
            <SpotLightEmissiveMaterial>EmissiveSpotlight</SpotLightEmissiveMaterial>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyed_Small</DestroyEffect>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>1.1</Z>
            </DestroyEffectOffset>
            <DestroySound>PoofExplosionCat1</DestroySound>
            <PCU>20</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>PipeWorkBlockA</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PipeWorkBlockA</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\PipeworkBlock.dds</Icon>
            <Description>Description_InteriorWall</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\PipeworkBlock.mwm</Model>
            <Components>
                <Component Subtype="InteriorPlate" Count="20" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="Construction" Count="10" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="0.5" EndY="1" />
                <MountPoint Side="Back" StartX="0.5" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Back" StartX="0.5" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0.5" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="0.5" EndY="0.1" />
                <MountPoint Side="Front" StartX="0" StartY="0.9" EndX="0.5" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="1" EndY="0.1" />
                <MountPoint Side="Right" StartX="0" StartY="0.9" EndX="1" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PipeworkBlock_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PipeworkBlock_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PipeworkBlock_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>pipeLineBlockA</BlockPairName>
            <MirroringY>X</MirroringY>
            <MirroringX>Y</MirroringX>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>16</BuildTimeSeconds>
            <PCU>1</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>PipeWorkBlockB</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_PipeWorkBlockB</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\PipeworkBlock_AirTight.dds</Icon>
            <Description>Description_InteriorWall</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\PipeworkBlock_Airtight.mwm</Model>
            <Components>
                <Component Subtype="InteriorPlate" Count="20" />
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="LargeTube" Count="10" />
                <Component Subtype="Construction" Count="10" />
            </Components>
            <CriticalComponent Subtype="LargeTube" Index="0" />
            <MountPoints>
                <MountPoint Side="Top" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Back" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Left" StartX="0" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0" StartY="0" EndX="0.1" EndY="1" />
                <MountPoint Side="Right" StartX="0.9" StartY="0" EndX="1" EndY="1" />
                <MountPoint Side="Right" StartX="0.1" StartY="0" EndX="0.9" EndY="0.1" />
                <MountPoint Side="Right" StartX="0.1" StartY="0.9" EndX="0.9" EndY="1" />
                <MountPoint Side="Bottom" StartX="0" StartY="0" EndX="1" EndY="1" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\PipeworkBlock_AirTight_Construction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\PipeworkBlock_AirTight_Construction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\PipeworkBlock_AirTight_Construction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>pipeLineBlockB</BlockPairName>
            <MirroringY>X</MirroringY>
            <MirroringX>Y</MirroringX>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>16</BuildTimeSeconds>
            <IsAirTight>true</IsAirTight>
            <PCU>1</PCU>
            <DLC>Automatons</DLC>
        </Definition>
        <!-- End of Decorative Blocks -->

        <!-- Start of Maintainance Panels -->
        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>LargeBlockAccessPanel1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel1_Large.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MaintenancePanel1.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="Computer" Count="5" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="InteriorPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.7" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\MaintenancePanel1Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MaintenancePanel1Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel1</BlockPairName>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.2</Z>
            </DestroyEffectOffset>
            <PCU>5</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>  

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>LargeBlockAccessPanel2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel2_Large.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MaintenancePanel2.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="10" />
                <Component Subtype="SmallTube" Count="10" />
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="InteriorPlate" Count="5" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.7" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\MaintenancePanel2Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MaintenancePanel2Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.2</Z>
            </DestroyEffectOffset>
            <PCU>5</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>ButtonPanel</TypeId>
                <SubtypeId>LargeBlockAccessPanel3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel3_Large.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MaintenancePanel3.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="Construction" Count="3" />
                <Component Subtype="InteriorPlate" Count="3" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.1" StartY="0.3" EndX="0.4" EndY="0.7" Default="true" />
                <MountPoint Side="Front" StartX="0.55" StartY="0.3" EndX="0.8" EndY="0.7" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\MaintenancePanel3Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MaintenancePanel3Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel3</BlockPairName>
            <EdgeType>Light</EdgeType>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <ButtonCount>1</ButtonCount>
            <ButtonSymbols>
                <string>Textures\\GUI\\Icons\\buttons\\IconSquareHighlight.dds</string>
            </ButtonSymbols>
            <UnassignedButtonColor>
                <X>0.34</X>
                <Y>0.34</Y>
                <Z>0.34</Z>
                <W>0</W>
            </UnassignedButtonColor>
            <ButtonColors>
                <Vector4>
                    <X>1</X>
                    <Y>1</Y>
                    <Z>0.3</Z>
                    <W>1</W>
                </Vector4>
            </ButtonColors>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.2</Z>
            </DestroyEffectOffset>
            <PCU>5</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>LargeBlockAccessPanel4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel4_Large.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\MaintenancePanel4.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="InteriorPlate" Count="10" />
                <Component Subtype="Construction" Count="5" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.2" StartY="0.2" EndX="0.8" EndY="0.8" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\MaintenancePanel4Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\MaintenancePanel4Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel4</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.2</Z>
            </DestroyEffectOffset>
            <PCU>5</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>SmallBlockAccessPanel1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel1_Small.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="2" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MaintenancePanel1.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="4" />
                <Component Subtype="SmallTube" Count="2" />
                <Component Subtype="Construction" Count="4" />
                <Component Subtype="InteriorPlate" Count="2" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="2" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MaintenancePanel1Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MaintenancePanel1Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel1</BlockPairName>
            <MirroringZ>Y</MirroringZ>
            <MirroringY>Z</MirroringY>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>1.1</Z>
            </DestroyEffectOffset>
            <PCU>5</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>SmallBlockAccessPanel2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel2_Small.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MaintenancePanel2.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="SmallTube" Count="1" />
                <Component Subtype="Construction" Count="1" />
                <Component Subtype="InteriorPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MaintenancePanel2Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MaintenancePanel2Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>5</PCU>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>SmallBlockAccessPanel3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel3_Small.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="2" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MaintenancePanel3.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="SmallTube" Count="1" />
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Construction" Index="1" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="1" EndY="2" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MaintenancePanel3Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MaintenancePanel3Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel3</BlockPairName>
            <EdgeType>Light</EdgeType>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <ButtonCount>1</ButtonCount>
            <ButtonSymbols>
                <string>Textures\\GUI\\Icons\\buttons\\OneButton.dds</string>
            </ButtonSymbols>
            <UnassignedButtonColor>
                <X>0.34</X>
                <Y>0.34</Y>
                <Z>0.34</Z>
                <W>0</W>
            </UnassignedButtonColor>
            <ButtonColors>
                <Vector4>
                    <X>1</X>
                    <Y>1</Y>
                    <Z>0.3</Z>
                    <W>1</W>
                </Vector4>
                <Vector4>
                    <X>1</X>
                    <Y>1</Y>
                    <Z>0.3</Z>
                    <W>1</W>
                </Vector4>
                <Vector4>
                    <X>1</X>
                    <Y>1</Y>
                    <Z>0.3</Z>
                    <W>1</W>
                </Vector4>
            </ButtonColors>
            <DamageEffectName>Damage_Electrical_Damaged</DamageEffectName>
            <DamagedSound>ParticleElectrical</DamagedSound>
            <DestroyEffect>BlockDestroyedExplosion_Small</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>5</PCU>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>TerminalBlock</TypeId>
                <SubtypeId>SmallBlockAccessPanel4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AccessPanel4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\MaintenancePanel4_Small.dds</Icon>
            <Description>Description_AccesPanel</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="3" y="3" z="2" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\MaintenancePanel4.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="5" />
                <Component Subtype="InteriorPlate" Count="10" />
                <Component Subtype="Construction" Count="5" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.1" StartY="0.1" EndX="2.9" EndY="2.9" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\MaintenancePanel4Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\MaintenancePanel4Construction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AccessPanel4</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>
            <PCU>5</PCU>
            <EnableUseObjectSimpleTargeting>true</EnableUseObjectSimpleTargeting>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>
        <!-- End of Maintainance Panels -->

        <Definition>
            <Id>
                <TypeId>AirVent</TypeId>
                <SubtypeId>AirVentFan</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AirVentFan</DisplayName>
            <YesNoToolbarBackground>true</YesNoToolbarBackground>
            <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
            <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WallFanVentHalf.dds</Icon>
            <Description>Description_AirVent</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WallFanVentHalf.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WallFanVentHalfConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WallFanVentHalfConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WallFanVentHalfConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>AirVentFan</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>20</BuildTimeSeconds>

            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <OperationalPowerConsumption>0.1</OperationalPowerConsumption>
            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <VentilationCapacityPerSecond>300</VentilationCapacityPerSecond>
            <RotationSpeed>4</RotationSpeed>
            <SpinUpSpeed>1</SpinUpSpeed>
            <SpinDownSpeed>1</SpinDownSpeed>

            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <PressurizeSound>BlockAirVentExhale</PressurizeSound>
            <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
            <IdleSound>BlockAirVentIdle</IdleSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>10</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>AirVent</TypeId>
                <SubtypeId>AirVentFanFull</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AirVentFanFull</DisplayName>
            <YesNoToolbarBackground>true</YesNoToolbarBackground>
            <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
            <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WallFanVent.dds</Icon>
            <Description>Description_AirVent</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WallFanVent.mwm</Model>
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
                <Model BuildPercentUpperBound="0.33" File="Models\\Cubes\\Large\\WallFanVentConstruction_1.mwm" />
                <Model BuildPercentUpperBound="0.66" File="Models\\Cubes\\Large\\WallFanVentConstruction_2.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WallFanVentConstruction_3.mwm" />
            </BuildProgressModels>
            <BlockPairName>AirventFanFull</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>25</BuildTimeSeconds>

            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <OperationalPowerConsumption>0.1</OperationalPowerConsumption>
            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <VentilationCapacityPerSecond>300</VentilationCapacityPerSecond>
            <RotationSpeed>4</RotationSpeed>
            <SpinUpSpeed>1</SpinUpSpeed>
            <SpinDownSpeed>1</SpinDownSpeed>

            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <PressurizeSound>BlockAirVentExhale</PressurizeSound>
            <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
            <IdleSound>BlockAirVentIdle</IdleSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Large</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>10</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>AirVent</TypeId>
                <SubtypeId>SmallAirVentFan</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AirVentFan</DisplayName>
            <YesNoToolbarBackground>true</YesNoToolbarBackground>
            <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
            <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WallFanVentHalf.dds</Icon>
            <Description>Description_AirVent</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WallFanVentSmallHalf.mwm</Model>
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
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\WallFanVentSmallHalfConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WallFanVentSmallHalfConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AirVentFan</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>10</BuildTimeSeconds>

            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <OperationalPowerConsumption>0.01</OperationalPowerConsumption>
            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <VentilationCapacityPerSecond>30</VentilationCapacityPerSecond>
            <RotationSpeed>4</RotationSpeed>
            <SpinUpSpeed>1</SpinUpSpeed>
            <SpinDownSpeed>1</SpinDownSpeed>

            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <PressurizeSound>BlockAirVentExhale</PressurizeSound>
            <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
            <IdleSound>BlockAirVentIdle</IdleSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Tiny</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>10</PCU>
            <DLC>Automatons</DLC>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>AirVent</TypeId>
                <SubtypeId>SmallAirVentFanFull</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_AirVentFanFull</DisplayName>
            <YesNoToolbarBackground>true</YesNoToolbarBackground>
            <YesNoToolbarYesTooltip>YesNoToolbarTooltip_Airvent_Yes</YesNoToolbarYesTooltip>
            <YesNoToolbarNoTooltip>YesNoToolbarTooltip_Airvent_No</YesNoToolbarNoTooltip>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WallFanVent.dds</Icon>
            <Description>Description_AirVent</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WallFanVentSmall.mwm</Model>
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
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\WallFanVentSmallConstruction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WallFanVentSmallConstruction_2.mwm" />
            </BuildProgressModels>
            <BlockPairName>AirventFanFull</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>12</BuildTimeSeconds>

            <ResourceSourceGroup>Battery</ResourceSourceGroup>
            <ResourceSinkGroup>Factory</ResourceSinkGroup>
            <OperationalPowerConsumption>0.01</OperationalPowerConsumption>
            <StandbyPowerConsumption>0.001</StandbyPowerConsumption>
            <VentilationCapacityPerSecond>30</VentilationCapacityPerSecond>
            <RotationSpeed>4</RotationSpeed>
            <SpinUpSpeed>1</SpinUpSpeed>
            <SpinDownSpeed>1</SpinDownSpeed>

            <DamageEffectName>Damage_WeapExpl_Damaged</DamageEffectName>
            <DamagedSound>ParticleWeapExpl</DamagedSound>
            <PressurizeSound>BlockAirVentExhale</PressurizeSound>
            <DepressurizeSound>BlockAirVentDepressurize</DepressurizeSound>
            <IdleSound>BlockAirVentIdle</IdleSound>
            <EmissiveColorPreset>Extended</EmissiveColorPreset>
            <DestroyEffect>BlockDestroyedExplosion_Tiny</DestroyEffect>
            <DestroySound>WepSmallWarheadExpl</DestroySound>
            <PCU>10</PCU>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CameraBlock</TypeId>
                <SubtypeId>LargeCameraTopMounted</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_CameraReskin</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\CameraReskin.dds</Icon>
            <Description>Description_Camera</Description>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\CameraReskin.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" ExclusionMask="3" PropertiesMask="3" StartX="0.44" StartY="0.4" EndX="0.55" EndY="0.6" />
            </MountPoints>
            <IsStandAlone>false</IsStandAlone>
            <HasPhysics>false</HasPhysics>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Large\\CameraReskin_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\CameraReskin_Construction_2.mwm" />
            </BuildProgressModels>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BlockPairName>CameraTopMounted</BlockPairName>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00003</RequiredPowerInput>
            <RequiredChargingInput>0.001</RequiredChargingInput>
            <OverlayTexture>Textures\\GUI\\Screens\\camera_overlay.dds</OverlayTexture>
            <MinFov>0.1</MinFov>
            <MaxFov>1</MaxFov>
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
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CameraBlock</TypeId>
                <SubtypeId>SmallCameraTopMounted</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_CameraReskin</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\CameraReskin.dds</Icon>
            <Description>Description_Camera</Description>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\CameraReskin.mwm</Model>
            <Components>
                <Component Subtype="SteelPlate" Count="1" />
                <Component Subtype="Computer" Count="3" />
                <Component Subtype="SteelPlate" Count="1" />
            </Components>
            <CriticalComponent Subtype="Computer" Index="0" />
            <MountPoints>
                <MountPoint Side="Bottom" ExclusionMask="3" PropertiesMask="3" StartX="0.2" StartY="0.1" EndX="0.8" EndY="0.9" />
            </MountPoints>
            <IsStandAlone>false</IsStandAlone>
            <HasPhysics>false</HasPhysics>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="0.50" File="Models\\Cubes\\Small\\CameraReskin_Construction_1.mwm" />
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\CameraReskin_Construction_2.mwm" />
            </BuildProgressModels>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <BlockPairName>CameraTopMounted</BlockPairName>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <EdgeType>Light</EdgeType>
            <ResourceSinkGroup>Utility</ResourceSinkGroup>
            <RequiredPowerInput>0.00003</RequiredPowerInput>
            <RequiredChargingInput>0.001</RequiredChargingInput>
            <OverlayTexture>Textures\\GUI\\Screens\\camera_overlay.dds</OverlayTexture>
            <MinFov>0.1</MinFov>
            <MaxFov>1</MaxFov>
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
            <DLC>Automatons</DLC>
        </Definition>
        
        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>LargeWarningSign1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_TradeSign.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WarningSign1.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.8" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WarningSign3Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.1</Z>
            </DestroyEffectOffset>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>LargeWarningSign2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Access.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WarningSign2.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.8" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WarningSign3Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.1</Z>
            </DestroyEffectOffset>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>LargeWarningSign3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Safety.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WarningSign3.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.3" EndX="0.7" EndY="0.8" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WarningSign3Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.1</Z>
            </DestroyEffectOffset>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>LargeWarningSign4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Storage.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Large</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="1" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Large\\WarningSign4.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="2" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0.3" StartY="0.45" EndX="0.7" EndY="0.65" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Large\\WarningSign4Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign4</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <DestroyEffectOffset>
                <X>0</X>
                <Y>0</Y>
                <Z>-1.1</Z>
            </DestroyEffectOffset>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>SmallWarningSign1</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_TradeSign.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WarningSign1.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="3" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WarningSign1Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign1</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>SmallWarningSign2</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Access.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WarningSign2.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="2" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WarningSign2Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign2</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>SmallWarningSign3</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign3</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Safety.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="3" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WarningSign3.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="6" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="3" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WarningSign1Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign3</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>

        <Definition>
            <Id>
                <TypeId>CubeBlock</TypeId>
                <SubtypeId>SmallWarningSign4</SubtypeId>
            </Id>
            <DisplayName>DisplayName_Block_WarningSign4</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Cubes\\WarningSign_Storage.dds</Icon>
            <Description>Description_SignBlocks</Description>
            <GuiVisible>false</GuiVisible>
            <CubeSize>Small</CubeSize>
            <BlockTopology>TriangleMesh</BlockTopology>
            <Size x="2" y="1" z="1" />
            <ModelOffset x="0" y="0" z="0" />
            <Model>Models\\Cubes\\Small\\WarningSign4.mwm</Model>
            <Components>
                <Component Subtype="Construction" Count="2" />
                <Component Subtype="InteriorPlate" Count="2" />
                <Component Subtype="Construction" Count="2" />
            </Components>
            <CriticalComponent Subtype="InteriorPlate" Index="0" />
            <MountPoints>
                <MountPoint Side="Front" StartX="0" StartY="0" EndX="2" EndY="1" Default="true" />
            </MountPoints>
            <BuildProgressModels>
                <Model BuildPercentUpperBound="1.00" File="Models\\Cubes\\Small\\WarningSign2Construction_1.mwm" />
            </BuildProgressModels>
            <BlockPairName>WarningSign4</BlockPairName>
            <MirroringY>Z</MirroringY>
            <MirroringZ>Y</MirroringZ>
            <EdgeType>Light</EdgeType>
            <BuildTimeSeconds>6</BuildTimeSeconds>
            <PCU>1</PCU>
            <IsStandAlone>false</IsStandAlone>
            <IsAirTight>false</IsAirTight>
            <DLC>Automatons</DLC>
        </Definition>
    </CubeBlocks>
</Definitions>
`
];