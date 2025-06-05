
// XML strings for blocks with DLC "DecorativeBlocks"
// The xsi:type attribute has been removed from Definition tags.
export const dlcDecorativeBlocksRawXml: string[] = [
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockDesk</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Desk</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Desk.dds</Icon>
    <Description>Description_Desk</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Desk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>Desk</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockDeskCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeskCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeskCorner.dds</Icon>
    <Description>Description_DeskCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeskCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>DeskCorner</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockDeskCornerInv</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeskCornerInv</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InvertedCornerDesk.dds</Icon>
    <Description>Description_DeskCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\InvertedCornerDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="40" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>DeskCornerInv</BlockPairName>
    <BuildTimeSeconds>18</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockDeskChairless</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeskChairless</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeskChairless.dds</Icon>
    <Description>Description_DeskChairless</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeskChairless.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>DeskChairless</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockDeskChairlessCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeskChairlessCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\DeskChairlessCorner.dds</Icon>
    <Description>Description_DeskChairlessCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\DeskChairlessCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="15" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="InteriorPlate" Count="5" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>DeskChairlessCorner</BlockPairName>
    <BuildTimeSeconds>10</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CubeBlock</TypeId>
        <SubtypeId>LargeBlockDeskChairlessCornerInv</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_DeskChairlessCornerInv</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\InvertedChairlessCornerDesk.dds</Icon>
    <Description>Description_DeskChairlessCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\InvertedChairlessCornerDesk.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="40" />
        <Component Subtype="Construction" Count="40" />
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>DeskChairlessCornerInv</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Kitchen</TypeId>
        <SubtypeId>LargeBlockKitchen</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Kitchen</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Kitchen.dds</Icon>
    <Description>Description_Kitchen</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Kitchen.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="LargeTube" Count="6" />
        <Component Subtype="Motor" Count="6" />
        <Component Subtype="BulletproofGlass" Count="4" />
    </Components>
    <CriticalComponent Subtype="Motor" Index="0" />
    <BlockPairName>Kitchen</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CryoChamber</TypeId>
        <SubtypeId>LargeBlockBed</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Bed</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Bed.dds</Icon>
    <Description>Description_Bed</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Bed.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="8" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>Bed</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLockerRoom</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LockerRoom</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LockerRoom.dds</Icon>
    <Description>Description_LockerRoomCorner</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LockerRoom.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LockerRoom</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLockerRoomCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_LockerRoomCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LockerRoomCorner.dds</Icon>
    <Description>Description_LockerRoom</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\LockerRoomCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="25" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="Display" Count="4" />
        <Component Subtype="BulletproofGlass" Count="10" />
        <Component Subtype="Construction" Count="15" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>LockerRoomCorner</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Planter</TypeId>
        <SubtypeId>LargeBlockPlanters</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Planters</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Planters.dds</Icon>
    <Description>Description_Planters</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Planters.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="8" />
        <Component Subtype="BulletproofGlass" Count="8" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="BulletproofGlass" Index="0" />
    <BlockPairName>Planters</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>1</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCouch</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Couch</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Couch.dds</Icon>
    <Description>Description_Couch</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Couch.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>Couch</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCouchCorner</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CouchCorner</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CouchCorner.dds</Icon>
    <Description>Description_CornerCouch</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CouchCorner.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="25" />
        <Component Subtype="Construction" Count="25" />
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="InteriorPlate" Index="1" />
    <BlockPairName>CouchCorner</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>CargoContainer</TypeId>
        <SubtypeId>LargeBlockLockers</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Lockers</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Lockers.dds</Icon>
    <Description>Description_Lockers</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Lockers.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="Display" Count="3" />
        <Component Subtype="Computer" Count="2" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>Lockers</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>10</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockBathroomOpen</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_BathroomOpen</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\BathroomOpen.dds</Icon>
    <Description>Description_BathroomOpen</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\BathroomOpen.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="15" />
        <Component Subtype="SmallTube" Count="8" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Construction" Count="15" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>BathroomOpen</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockBathroom</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Bathroom</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Bathroom.dds</Icon>
    <Description>Description_Bathroom</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Bathroom.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="30" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="SmallTube" Count="8" />
        <Component Subtype="Motor" Count="4" />
        <Component Subtype="LargeTube" Count="2" />
        <Component Subtype="Construction" Count="20" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>Bathroom</BlockPairName>
    <BuildTimeSeconds>15</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockToilet</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Toilet</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Toilet.dds</Icon>
    <Description>Description_ToiletSeat</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Toilet.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="10" />
        <Component Subtype="Construction" Count="10" />
        <Component Subtype="SmallTube" Count="2" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="LargeTube" Count="1" />
        <Component Subtype="Construction" Count="5" />
    </Components>
    <CriticalComponent Subtype="LargeTube" Index="0" />
    <BlockPairName>Toilet</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>15</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Projector</TypeId>
        <SubtypeId>LargeBlockConsole</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_Console</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\Console.dds</Icon>
    <Description>Description_Console</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\Console.mwm</Model>
    <Components>
        <Component Subtype="InteriorPlate" Count="20" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="Computer" Count="8" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="Construction" Count="10" />
    </Components>
    <CriticalComponent Subtype="Display" Index="0" />
    <BlockPairName>Console</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>150</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>SmallBlockCockpitIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CockpitIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\CockpitIndustrial.dds</Icon>
    <Description>Description_CockpitIndustrial</Description>
    <CubeSize>Small</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="3" y="4" z="4" />
    <Model>Models\\Cubes\\small\\CockpitIndustrial.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="10" />
        <Component Subtype="Construction" Count="20" />
        <Component Subtype="MetalGrid" Count="10" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Display" Count="6" />
        <Component Subtype="Computer" Count="20" />
        <Component Subtype="BulletproofGlass" Count="60" />
        <Component Subtype="SmallTube" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>CockpitIndustrial</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>150</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`,
`
<Definition>
    <Id>
        <TypeId>Cockpit</TypeId>
        <SubtypeId>LargeBlockCockpitIndustrial</SubtypeId>
    </Id>
    <DisplayName>DisplayName_Block_CockpitIndustrial</DisplayName>
    <Icon>Textures\\GUI\\Icons\\Cubes\\LargeCockpitIndustrial.dds</Icon>
    <Description>Description_CockpitIndustrial</Description>
    <CubeSize>Large</CubeSize>
    <BlockTopology>TriangleMesh</BlockTopology>
    <Size x="1" y="1" z="1" />
    <Model>Models\\Cubes\\Large\\CockpitIndustrial.mwm</Model>
    <Components>
        <Component Subtype="SteelPlate" Count="20" />
        <Component Subtype="Construction" Count="30" />
        <Component Subtype="MetalGrid" Count="15" />
        <Component Subtype="Motor" Count="2" />
        <Component Subtype="Display" Count="10" />
        <Component Subtype="Computer" Count="60" />
        <Component Subtype="BulletproofGlass" Count="80" />
        <Component Subtype="SmallTube" Count="10" />
    </Components>
    <CriticalComponent Subtype="Computer" Index="0" />
    <BlockPairName>CockpitIndustrial</BlockPairName>
    <BuildTimeSeconds>14</BuildTimeSeconds>
    <PCU>150</PCU>
    <DLC>DecorativeBlocks</DLC>
</Definition>`
// ... other "DecorativeBlocks" (original) DLC blocks
];