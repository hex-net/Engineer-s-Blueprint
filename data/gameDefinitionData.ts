// data/gameDefinitionData.ts

// Raw XML strings for GameDefinition blocks
export const gameDefinitionRawXml: string[] = [
`
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_GameDefinition</TypeId>
            <SubtypeId>VRageDefault</SubtypeId>
        </Id>
        <SessionComponents>
            <Component>MyAIComponent</Component>
            <Component>MyAiTargetManager</Component>
            <Component>MyAudioComponent</Component>
            <Component>MyChatSystem</Component>
            <Component>MyDamageSystem</Component>
            <Component>MyDebris</Component>
            <Component>MyFloatingObjects</Component>
            <Component>MyGamePruningStructure</Component>
            <Component>MyGlobalEvents</Component>
            <Component>MyHud</Component>
            <Component>MyHudWarnings</Component>
            <Component>MyLights</Component>
            <Component>MyMaterialPropertiesHelper</Component>
            <Component>MyParticlesManager</Component>
            <Component>MyPhysics</Component>
            <Component>MyPhysicsComponentSystem</Component>
            <Component>MyPrecalcComponent</Component>
            <Component>MyScriptManager</Component>
            <Component>MySector</Component>
            <Component>MySessionComponentAnimationSystem</Component>
            <Component Type="MyObjectBuilder_CoordinateSystemDefinition" Subtype="CoordinateSystem">MyCoordinateSystem</Component>
            <Component Type="MyObjectBuilder_ClipboardDefinition" Subtype="ClipboardBase">MyClipboardComponent</Component>
            <Component>MySessionComponentEntityTrigger</Component>
            <Component>MySessionComponentMissionTriggers</Component>
            <Component>MySessionComponentVoxelHand</Component>
            <Component>MySessionComponentTriggerSystem</Component>
            <Component>MySessionComponentCutscenes</Component>
            <Component>MyVisualScriptManagerSessionComponent</Component>
            <Component>MyThirdPersonSpectator</Component>
            <Component>MyTimerComponentSystem</Component>
            <Component>MyToolbarComponent</Component>
            <Component>MyRadialMenuComponent</Component>
            <Component>MyVoxelOperationsSessionComponent</Component>
            <Component>MySessionComponentExtDebug</Component>
            <Component>MyCubeGrids</Component>
            <Component>MyHighlightSystem</Component>            
            <Component>MyLocalizationSessionComponent</Component>
            <Component>MySessionComponentAssetModifiers</Component>
            <Component Type="MyObjectBuilder_ContainerDropSystemDefinition" Subtype="Default">MySessionComponentContainerDropSystem</Component>
            <Component Type="MyObjectbuilder_SessionComponentEconomyDefinition" Subtype="Default">MySessionComponentEconomy</Component>
            <Component Type="MyObjectbuilder_SessionComponentAntiCheatDefinition" Subtype="Default">MySessionComponentAntiCheat</Component>
            <Component Type="MyObjectBuilder_SessionComponentContractSystemDefinition" Subtype="Default">MySessionComponentContractSystem</Component>
            <Component>MySessionComponentReplay</Component>
            <Component>MySessionComponentIngameHelp</Component>
            <Component Type="MyObjectbuilder_AutopilotPathfindingComponentDefinition" Subtype="Default">MyAutopilotPathfindingComponent</Component>
            <Component Type="MyObjectbuilder_AiRvoComponentDefinition" Subtype="Default">MyAiRvoComponent</Component>
        </SessionComponents>
		<EncounterColors>
			<Color Hex="#801919" />
			<Color Hex="#174973" />
			<Color Hex="#233323" />
			<Color Hex="#E8B323" />
			<Color Hex="#B27224" />
		</EncounterColors>
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_GameDefinition</TypeId>
            <SubtypeId>Space</SubtypeId>
        </Id>

        <Default>true</Default>

        <InheritFrom>VRageDefault</InheritFrom>

        <SessionComponents Combine="Union">
            <Component>MyTerminalControls</Component>
            <Component>MySpaceFaunaComponent</Component>
            <Component>MySpaceBuildComponent</Component>
            <Component>MySpacePlanetTrackComponent</Component>
            <Component>MySpaceRespawnComponent</Component>
            <Component>MyAntennaSystem</Component>
            <Component>MyEnvironmentalParticles</Component>
            <Component>MyEncounterGenerator</Component>
            <Component>MyGravityProviderSystem</Component>
            <Component>MyTurretNotifications</Component>
            <Component>MyProceduralWorldGenerator</Component>
            <Component>MyPirateAntennas</Component>
            <Component>MyMeteorShower</Component>
            <Component>MyWarheads</Component>
            <Component>MyExplosions</Component>
            <Component>MyMissiles</Component>
            <Component>MyProjectiles</Component>
            <Component>MyOreDetectorSessionComponent</Component>
            <Component>MyNeutralShipSpawner</Component>
            <Component Type="MyObjectBuilder_CubeBuilderDefinition" Subtype="CubeBuilderBase">MyCubeBuilder</Component>
            <Component Type="MyObjectBuilder_DemoComponentDefinition" Subtype="Default">DemoComponent</Component>
            <Component>MyPlanets</Component>
            <Component>MyHeightMapLoadingSystem</Component>
            <Component>MySessionComponentPlanetAmbientSounds</Component>
            <Component>MyPlanetTrackComponent</Component>
            <Component>MySessionComponentScriptSharedStorage</Component>
            <Component>MyEnvironmentBotSpawningSystem</Component>
            <Component>MySectorWeatherComponent</Component>
            <Component>MyPlanets</Component>
            <Component>MyHeightMapLoadingSystem</Component>
            <Component>MySessionComponentPlanetAmbientSounds</Component>
            <Component>MyPlanetTrackComponent</Component>
            <Component>MyPlanetEnvironmentSessionComponent</Component>
            <Component>MyEnvironmentBotSpawningSystem</Component>
            <Component>MySectorWeatherComponent</Component>
            <Component>MyCampaignSessionComponent</Component>
            <Component>MyEntityTransformationSystem</Component>
            <Component>MySessionComponentResearch</Component>
            <Component>MySteamAchievements</Component>
            <Component>MySessionComponentTrash</Component>            
            <Component>MyAnselSessionComponent</Component>
            <Component>MySessionComponentSmartUpdater</Component>
            <Component>MySessionComponentTeamBalancer</Component>
            <Component>MySessionComponentDLC</Component>
            <Component>MySessionComponentGameInventory</Component>
            <Component>MyToolSwitcher</Component>
            <Component>MyEmoteSwitcher</Component>
            <Component Type="MyObjectBuilder_BankingSystemDefinition" Subtype="BankingSystem">MyBankingSystem</Component>
            <Component>MySessionComponentPanels</Component>
            <Component>MySessionComponentMatch</Component>
            <Component Type="MyObjectbuilder_GlobalEncountersGeneratorDefinition" Subtype="Default">MyGlobalEncountersGenerator</Component>
            <Component>MyPlanetaryEncountersGenerator</Component>
        </SessionComponents>
        <ExplosionAmmoVolumeMin>1</ExplosionAmmoVolumeMin>
        <ExplosionAmmoVolumeMax>15000</ExplosionAmmoVolumeMax>
        <ExplosionRadiusMin>0.3</ExplosionRadiusMin>
        <ExplosionRadiusMax>30</ExplosionRadiusMax>
        <ExplosionDamagePerLiter>1</ExplosionDamagePerLiter>
        <ExplosionDamageMax>5000</ExplosionDamageMax>
        <EncounterColors>
			<Color Hex="#801919" />
			<Color Hex="#174973" />
			<Color Hex="#233323" />
			<Color Hex="#E8B323" />
			<Color Hex="#B27224" />
        </EncounterColors>
    </Definition>
`,
`
    <!--Definition for Cube Builder Component (Building cubes)-->
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_CubeBuilderDefinition</TypeId>
            <SubtypeId>CubeBuilderBase</SubtypeId>
        </Id>

        <!--Building distance settings-->
        <DefaultBlockBuildingDistance>20</DefaultBlockBuildingDistance>
        <MaxBlockBuildingDistance>100</MaxBlockBuildingDistance>
        <MinBlockBuildingDistance>1</MinBlockBuildingDistance>
        <BuildingDistLargeSurvivalCharacter>10</BuildingDistLargeSurvivalCharacter>
        <BuildingDistSmallSurvivalCharacter>5</BuildingDistSmallSurvivalCharacter>
        <BuildingDistSmallSurvivalShip>12.5</BuildingDistSmallSurvivalShip>
        <BuildingDistLargeSurvivalShip>12.5</BuildingDistLargeSurvivalShip>

        <!--Placement settings-->
        <BuildingSettings>
            <StaticGridAlignToCenter>false</StaticGridAlignToCenter>
            <SmallStaticGrid>
                <SnapMode>OneFreeAxis</SnapMode>
                <SearchHalfExtentsDeltaRatio>-0.1</SearchHalfExtentsDeltaRatio>
                <SearchHalfExtentsDeltaAbsolute>-0.057</SearchHalfExtentsDeltaAbsolute>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <!--Voxel Placement Settings: Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
                <VoxelPlacement>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                </VoxelPlacement>
            </SmallStaticGrid>
            <SmallGrid>
                <SnapMode>OneFreeAxis</SnapMode>
                <SearchHalfExtentsDeltaRatio>-0.1</SearchHalfExtentsDeltaRatio>
                <SearchHalfExtentsDeltaAbsolute>-0.057</SearchHalfExtentsDeltaAbsolute>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                </VoxelPlacement>
            </SmallGrid>
            <LargeStaticGrid>
                <SnapMode>Base6Directions</SnapMode>
                <SearchHalfExtentsDeltaRatio>-0.1</SearchHalfExtentsDeltaRatio>
                <SearchHalfExtentsDeltaAbsolute>-0.065</SearchHalfExtentsDeltaAbsolute>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>true</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>Both</PlacementMode>
                </VoxelPlacement>
            </LargeStaticGrid>
            <LargeGrid>
                <SnapMode>OneFreeAxis</SnapMode>
                <SearchHalfExtentsDeltaRatio>-0.1</SearchHalfExtentsDeltaRatio>
                <SearchHalfExtentsDeltaAbsolute>-0.065</SearchHalfExtentsDeltaAbsolute>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                </VoxelPlacement>
            </LargeGrid>
        </BuildingSettings>

    </Definition>
`,
`
    <!--Definition for Clipboard Component (Copy/Paste functionality)-->
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_ClipboardDefinition</TypeId>
            <SubtypeId>ClipboardBase</SubtypeId>
        </Id>

        <!--Pasting settings-->
        <PastingSettings>
            <StaticGridAlignToCenter>false</StaticGridAlignToCenter>
            <SmallStaticGrid>
                <SnapMode>Base6Directions</SnapMode>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <!--Voxel Placement Settings: Possible settings Both,InVoxel,OutsideVoxel,Volumetric. If volumetric set than MaxAllowed and MinAllowed will be used.-->
                <VoxelPlacement>
                    <PlacementMode>Both</PlacementMode>
                </VoxelPlacement>
            </SmallStaticGrid>
            <SmallGrid>
                <SnapMode>Base6Directions</SnapMode>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>OutsideVoxel</PlacementMode>
                </VoxelPlacement>
            </SmallGrid>
            <LargeStaticGrid>
                <SnapMode>Base6Directions</SnapMode>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>Both</PlacementMode>
                </VoxelPlacement>
                <SearchHalfExtentsDeltaAbsolute>2.5</SearchHalfExtentsDeltaAbsolute>
            </LargeStaticGrid>
            <LargeGrid>
                <SnapMode>Base6Directions</SnapMode>
                <CanAnchorToStaticGrid>false</CanAnchorToStaticGrid>
                <EnablePreciseRotationWhenSnapped>false</EnablePreciseRotationWhenSnapped>
                <VoxelPlacement>
                    <PlacementMode>Both</PlacementMode>
                </VoxelPlacement>
            </LargeGrid>
        </PastingSettings>
    </Definition>
`,
`
    <!--Definition for Local Coordinate System-->
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_CoordinateSystemDefinition</TypeId>
            <SubtypeId>CoordinateSystem</SubtypeId>
        </Id>
        <!--Angle tolerance (in radians) used for deciding if block is aligned to coord system-->
        <AngleTolerance>0.0001</AngleTolerance>
        <!--Position tolerance (in meters) used for deciding if block is aligned to coord system-->
        <PositionTolerance>0.001</PositionTolerance>
        <!--Local coordinate system size (in meters)-->
        <CoordSystemSize>1000</CoordSystemSize>
    </Definition>
`,
`
    <!--Definition for container drop system-->
    <Definition>
        <Id>
            <TypeId>MyObjectBuilder_ContainerDropSystemDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>
        <!--Chance that the next cache will be personal-->
        <!-- OBSOLETE not used anymore-->
        <PersonalContainerRatio>0.9</PersonalContainerRatio>

        <!--Cooldown after cache is retrieved in minutes-->
        <!-- OBSOLETE, setting is part of session settings now (Min and Max values) -->
        <ContainerDropTime>2</ContainerDropTime>

        <!--Personal cache minimum distance in kilometers-->
        <PersonalContainerDistMin>1.5</PersonalContainerDistMin>

        <!--Personal cache maximum distance in kilometers-->
        <PersonalContainerDistMax>4.5</PersonalContainerDistMax>

        <!--Competetive cache minimum distance in kilometers-->
        <CompetetiveContainerDistMin>20</CompetetiveContainerDistMin>

        <!--Competetive cache maximum distance in kilometers-->
        <CompetetiveContainerDistMax>90</CompetetiveContainerDistMax>

        <!--Time in minutes how long will GPS stay after discovery for other players in competetive caches-->
        <CompetetiveContainerGPSTimeOut>3</CompetetiveContainerGPSTimeOut>

        <!--Time in minutes how long will competetive cache exist in the world-->
        <CompetetiveContainerGridTimeOut>15</CompetetiveContainerGridTimeOut>

        <!--Time in minutes how long will Personal cache exist in the world-->
        <PersonalContainerGridTimeOut>15</PersonalContainerGridTimeOut>

        <!--GPS color for competive containers before they are claimed.
        Was 255 255 0, changed 12.8.2024.-->
        <!--Was 54 233 179, changed 08.10.2024.-->
        <CompetetiveContainerGPSColorFree>
            <R>204</R>
            <G>255</G>
            <B>19</B>
        </CompetetiveContainerGPSColorFree>

        <!--GPS color for competive containers after they are claimed.
        Was 255 165 0, changed 12.8.2024.-->
        <!--Was 182 232 217, changed 08.10.2024.-->
        <CompetetiveContainerGPSColorClaimed>
            <R>226</R>
            <G>250</G>
            <B>151</B>
        </CompetetiveContainerGPSColorClaimed>

        <!--GPS color for personal containers-->
        <!--Was 173 255 47, changed 08.10.2024.-->
        <PersonalContainerGPSColor>
            <R>54</R>
            <G>233</G>
            <B>179</B>
        </PersonalContainerGPSColor>

        <!--Audio cue that will be looped until claimed-->
        <ContainerAudioCue>BlockContainer</ContainerAudioCue>
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectbuilder_AutopilotPathfindingComponentDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectbuilder_AiRvoComponentDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>
    </Definition>
`,
`
    <Definition>
        <Id>
            <TypeId>MyObjectbuilder_GlobalEncountersGeneratorDefinition</TypeId>
            <SubtypeId>Default</SubtypeId>
        </Id>
        <GpsColor Hex="#EDAA38" />
    </Definition>
`
];