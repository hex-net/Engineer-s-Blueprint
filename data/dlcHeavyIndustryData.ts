// XML strings for blocks with DLC "HeavyIndustry"
// The xsi:type attribute has been removed from Definition tags.
export const dlcHeavyIndustryRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>LandingGear</TypeId>
        <SubtypeId>LargeBlockMagneticPlate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MagneticPlateLarge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\MagneticPlateLarge.dds</Icon>
    <Description>Description_LandingGear</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="2" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\MagneticPlateLarge.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="300" />
        <Component Subtype="Construction" Count="60" />
        <Component Subtype="Motor" Count="20" />
        <Component Subtype="SteelPlate" Count="150" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>LargeMagneticPlate</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>35</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>LandingGear</TypeId>
        <SubtypeId>SmallBlockMagneticPlate</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_MagneticPlateLarge</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\MagneticPlate.dds</Icon>
    <Description>Description_LandingGear</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="2" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\MagneticPlate.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="3" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Motor" Count="3" />
        <Component Subtype="SteelPlate" Count="3" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>LargeMagneticPlate</BlockPairName>
    <BuildTimeSeconds>16</BuildTimeSeconds>
    <PCU>35</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLargeIndustrialContainer</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeIndustrialCargoContainer</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CargoContainer.dds</Icon>
    <Description>Description_LargeCargoContainer</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\CargoContainer.mwm</Model>
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
    <BlockPairName>LargeCargoContainerIndustrial</BlockPairName>
    <BuildTimeSeconds>45</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ButtonPanel</TypeId>
        <SubtypeId>VerticalButtonPanelLarge</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_VerticalButtonPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\VerticalButtonPanel.dds</Icon>
    <Description>Description_ButtonPanel</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\VerticalButtonPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>VerticalButtonPanel</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ButtonPanel</TypeId>
        <SubtypeId>VerticalButtonPanelSmall</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_VerticalButtonPanel</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\VerticalButtonPanel.dds</Icon>
    <Description>Description_ButtonPanel</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="3" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\VerticalButtonPanel.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="Computer" Count="5" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>VerticalButtonPanel</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>5</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>LargeBlockConveyorPipeSeamless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeSeamless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeSeamless.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeSeamless.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeSeamless</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>LargeBlockConveyorPipeCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeCorner.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeCorner</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>LargeBlockConveyorPipeJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeNode.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeNode.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="20" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeJunction</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>LargeBlockConveyorPipeIntersection</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeIntersection</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeJunction.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeJunction.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="16" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="8" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeIntersection</BlockPairName>
    <BuildTimeSeconds>12</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>LargeBlockConveyorPipeFlange</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeFlange</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeFlange.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeFlange.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeFlange</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorConnector</TypeId>
        <SubtypeId>LargeBlockConveyorPipeEnd</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeEnd</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeEnd.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeEnd.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="12" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeEnd</BlockPairName>
    <BuildTimeSeconds>7</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Conveyor</TypeId>
        <SubtypeId>LargeBlockConveyorPipeT</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorPipeT</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeT.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <GuiVisible>false</GuiVisible>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeT.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="24" />
        <Component Subtype="SmallTube" Count="14" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="InteriorPlate" Count="6" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>ConveyorPipeT</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>HeavyIndustry</DLC>
    <IsAirTight>false</IsAirTight>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockConveyorPipeCap</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_PipeCap</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\PipeCap.dds</Icon>
    <Description>Description_ConveyorTube</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\PipeCap.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="InteriorPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>PipeCap</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>OxygenTank</TypeId>
        <SubtypeId>LargeHydrogenTankIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenTankIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenTankIndustrial.dds</Icon>
    <Description>Description_HydrogenTank</Description>
    <Public>true</Public>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="3" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HydrogenTankIndustrial.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="160" />
        <Component Subtype="LargeTube" Count="80" />
        <Component Subtype="SmallTube" Count="60" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="SteelPlate" Count="120" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>HydrogenTankIndustrial</BlockPairName>
    <BuildTimeSeconds>50</BuildTimeSeconds>
    <PCU>25</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Assembler</TypeId>
        <SubtypeId>LargeAssemblerIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_AssemblerIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedAssemblerIndustrial.dds</Icon>
    <Description>Description_Assembler</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="2" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AdvancedAssemblerIndustrial.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="120" />
        <Component Subtype="Construction" Count="80" />
        <Component Subtype="Motor" Count="20" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="MetalGrid" Count="10" />
        <Component Subtype="Computer" Count="160" />
        <Component Subtype="SteelPlate" Count="20" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>AssemblerIndustrial</BlockPairName>
    <BuildTimeSeconds>80</BuildTimeSeconds>
    <PCU>40</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Refinery</TypeId>
        <SubtypeId>LargeRefineryIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_RefineryIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\AdvancedRefinery.dds</Icon>
    <Description>Description_Refinery</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="4" z="2" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\AdvancedRefinery.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="1100" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="LargeTube" Count="20" />
        <Component Subtype="Motor" Count="16" />
        <Component Subtype="MetalGrid" Count="20" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="SteelPlate" Count="100" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>RefineryIndustrial</BlockPairName>
    <BuildTimeSeconds>90</BuildTimeSeconds>
    <PCU>90</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockCylindricalColumn</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CylindricalColumn</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CylindricalColumnLarge.dds</Icon>
    <Description>Description_InteriorPillar</Description>
    <CubeSize>Large</CubeSize>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <BlockTopology>TriangleMesh</BlockTopology>
    <Model>Models\\Cubes\\Large\\CylindricalColumn.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="8" />
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="2" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CylindricalColumn</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallBlockCylindricalColumn</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CylindricalColumn</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CylindricalColumnSmall.dds</Icon>
    <Description>Description_InteriorPillar</Description>
    <CubeSize>Small</CubeSize>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <BlockTopology>TriangleMesh</BlockTopology>
    <Model>Models\\Cubes\\Small\\CylindricalColumn.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="4" />
        <Component Subtype="Construction" Count="2" />
        <Component Subtype="InteriorPlate" Count="1" />
        <Component Subtype="Construction" Count="1" />
    </Components>
    <CriticalComponent Subtype="Construction" Index="0" />
    <BlockPairName>CylindricalColumn</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ConveyorSorter</TypeId>
        <SubtypeId>LargeBlockConveyorSorterIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ConveyorSorterIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ConveyorSorterReskin.dds</Icon>
    <Description>Description_ConveyorSorter</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\ConveyorSorterReskin.mwm</Model>
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
    <BlockPairName>ConveyorSorterIndustrial</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>25</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlock</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraight.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderStraight.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlock</BlockPairName>
    <BuildTimeSeconds>8</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockSlope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderSlope.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="3" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockRound</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockRound</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderRound.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderRound.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="3" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockRound</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockSlope2x1Base</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope2x1Base</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope2x1Base.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderSlope2x1Base.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="SteelPlate" Count="4" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope2x1Base</BlockPairName>
    <BuildTimeSeconds>6</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockSlope2x1Tip</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope2x1Tip</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope2x1Tip.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderSlope2x1Tip.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope2x1Tip</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockHalf</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockHalf</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraightHalf.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderStraightHalf.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockHalf</BlockPairName>
    <BuildTimeSeconds>4</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockHalfSlope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockHalfSlope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlopeHalf.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderSlopeHalf.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="5" />
        <Component Subtype="SteelPlate" Count="2" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockHalfSlope</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockEnd</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockEnd</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraightEnd.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderStraightEnd.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockEnd</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderJunction.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderJunction.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockJunction</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeGridBeamBlockTJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockTJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderT-Junction.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Large\\GirderT-Junction.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockTJunction</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlock</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraight.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderStraight.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlock</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockSlope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderSlope.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope</BlockPairName>
    <BuildTimeSeconds>2</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockRound</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockRound</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderRound.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderRound.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockRound</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockSlope2x1Base</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope2x1Base</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope2x1Base.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderSlope2x1Base.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope2x1Base</BlockPairName>
    <BuildTimeSeconds>2</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockSlope2x1Tip</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockSlope2x1Tip</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlope2x1Tip.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderSlope2x1Tip.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockSlope2x1Tip</BlockPairName>
    <BuildTimeSeconds>1</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockHalf</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockHalf</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraightHalf.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderStraightHalf.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockHalf</BlockPairName>
    <BuildTimeSeconds>2</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockHalfSlope</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockHalfSlope</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderSlopeHalf.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderSlopeHalf.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockHalfSlope</BlockPairName>
    <BuildTimeSeconds>1</BuildTimeSeconds>
    <IsAirTight>false</IsAirTight>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockEnd</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockEnd</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderStraightEnd.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderStraightEnd.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockEnd</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderJunction.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderJunction.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockJunction</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>SmallGridBeamBlockTJunction</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BeamBlockTJunction</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeGirderT-Junction.dds</Icon>
    <Description>Description_BeamBlock</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <GuiVisible>false</GuiVisible>
    <Model>Models\\Cubes\\Small\\GirderT-Junction.mwm</Model>
    <ModelOffset x="0" y="0" z="0" />
    <Components>
        <Component Subtype="SteelPlate" Count="1" />
    </Components>
    <CriticalComponent Subtype="SteelPlate" Index="0" />
    <BlockPairName>BeamBlockTJunction</BlockPairName>
    <BuildTimeSeconds>3</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Thrust</TypeId>
        <SubtypeId>LargeBlockLargeHydrogenThrustIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeHydrogenThrustIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenThrusterIndustrialLarge.dds</Icon>
    <Description>Description_HydrogenThrust</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="4" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HydrogenThrusterIndustrialLarge.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="100" />
        <Component Subtype="Construction" Count="150" />
        <Component Subtype="MetalGrid" Count="250" />
        <Component Subtype="LargeTube" Count="40" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="SteelPlate" Count="50" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>LargeHydrogenThrustIndustrial</BlockPairName>
    <BuildTimeSeconds>90</BuildTimeSeconds>
    <PCU>12</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Thrust</TypeId>
        <SubtypeId>LargeBlockSmallHydrogenThrustIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenThrustIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenThrusterIndustrialSmall.dds</Icon>
    <Description>Description_HydrogenThrust</Description>
    <CubeSize>Large</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Large\\HydrogenThrusterIndustrialSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="15" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="MetalGrid" Count="40" />
        <Component Subtype="LargeTube" Count="8" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>HydrogenThrustIndustrial</BlockPairName>
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>12</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Thrust</TypeId>
        <SubtypeId>SmallBlockLargeHydrogenThrustIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LargeHydrogenThrustIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenThrusterIndustrialLarge.dds</Icon>
    <Description>Description_HydrogenThrust</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="3" z="4" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HydrogenThrusterIndustrialLarge.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="MetalGrid" Count="22" />
        <Component Subtype="LargeTube" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>LargeHydrogenThrustIndustrial</BlockPairName>
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>12</PCU>
    <DLC>HeavyIndustry</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Thrust</TypeId>
        <SubtypeId>SmallBlockSmallHydrogenThrustIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_HydrogenThrustIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\HydrogenThrusterIndustrialSmall.dds</Icon>
    <Description>Description_HydrogenThrust</Description>
    <CubeSize>Small</CubeSize>
    <GuiVisible>false</GuiVisible>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <ModelOffset x="0" y="0" z="0" />
    <Model>Models\\Cubes\\Small\\HydrogenThrusterIndustrialSmall.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="2" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="MetalGrid" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Construction" Count="5" />
        <Component Subtype="SteelPlate" Count="5" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>HydrogenThrustIndustrial</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>12</PCU>
    <IsAirTight>false</IsAirTight>
    <DLC>HeavyIndustry</DLC>
</Definition>`
];
