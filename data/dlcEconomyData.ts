
// XML strings for blocks with DLC "Economy"
export const dlcEconomyRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>StoreBlock</TypeId>
        <SubtypeId>StoreBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Store</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\StoreBlock.dds</Icon>
    <Description>Description_StoreBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\StoreBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Economy</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>SafeZoneBlock</TypeId>
        <SubtypeId>SafeZoneBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_SafeZone</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\SafeZoneBlock.dds</Icon>
    <Description>Description_SafeZone</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="2" y="2" z="3" />
    <Model>Models\\Cubes\\Large\\SafeZoneBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="750" />
        <Component Subtype="Construction" Count="180" />
        <Component Subtype="GravityGenerator" Count="10" />
        <Component Subtype="ZoneChip" Count="5" />
        <Component Subtype="MetalGrid" Count="80" />
        <Component Subtype="Computer" Count="120" />
        <Component Subtype="SteelPlate" Count="50" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>40</BuildTimeSeconds>
    <PCU>50</PCU>
    <DLC>Economy</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>ContractBlock</TypeId>
        <SubtypeId>ContractBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Contract</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ContractsBlock.dds</Icon>
    <Description>Description_ContractBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\ContractsBlock.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>25</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Economy</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>VendingMachine</TypeId>
        <SubtypeId>VendingMachine</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_VendingMachine</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\VendingMachine.dds</Icon>
    <Description>Description_VendingMachine</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\VendingMachine.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="InteriorPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>20</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Economy</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>StoreBlock</TypeId>
        <SubtypeId>AtmBlock</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_ATM</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\ATM.dds</Icon>
    <Description>Description_AtmBlock</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\ATM.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Computer" Count="10" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="SteelPlate" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>Economy</DLC>
</Definition>`
// ... other Economy DLC blocks
];