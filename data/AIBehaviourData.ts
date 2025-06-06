// data/AIBehaviourData.ts

// Raw XML string for AI Behavior definitions
// Note: xsi:type attributes have been removed from AIBehavior tags for compatibility if parsed similarly to blocks.
// Namespace attributes from the root Definitions tag are also removed.
export const droneBehaviorRawXml: string[] = [ // Renamed from aiBehaviorRawXml
`
<Definitions>
  <AIBehaviors>
    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>DefaultDirect</SubtypeId>
      </Id>
      <StrafeWidth>20</StrafeWidth>
      <StrafeHeight>20</StrafeHeight>
      <StrafeDepth>10</StrafeDepth>
      <MinStrafeDistance>5</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>75</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>75</TargetDistance>
      <MaxManeuverDistance>200</MaxManeuverDistance>
      <StaticWeaponryUsage>300</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>3</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <!-- Burst only from gatling guns that lasts for 2-3 seconds and then pause for 1-3 seconds -->
          <Priority>30</Priority>
          <!-- Higher priority means that it will be used more often -->
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
            <!-- Must have at least 1 working gatling gun -->
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <!-- List of things drone can ignore when targeting - behavior will be ignored if it cannot open fire -->
          <IgnoresVoxels>false</IgnoresVoxels>
          <!-- Drone will not try to shoot through voxels -->
          <IgnoresGrids>false</IgnoresGrids>

          <TimeMin>1</TimeMin>
          <!-- Cooldown time after all firing is done - minimum -->
          <TimeMax>3</TimeMax>
          <!-- Cooldown time after all firing is done - maximum -->
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <!-- TypeId of weapon must match with this - check omitted when empty -->
              <TimeMin>2</TimeMin>
              <!-- Minimum firing time -->
              <TimeMax>3</TimeMax>
              <!-- Maximum firing time -->
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <!-- Once it starts shooting it will not stop even when not rotated to player -->
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
              <!-- Specific weapon can have different setting than the global one -->
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Rocket Volley</Name>
          <!-- Shoots one volley from rocket launchers and then pause for 4-6 seconds -->
          <Priority>10</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <!-- Behavior can start even when there is voxel -->
          <IgnoresGrids>false</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>5</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <!-- Only rocket launchers will work -->
            <Weapon>SmallMissileLauncherReload</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <!-- Both launchers will use this -->
              <TimeMin>0</TimeMin>
              <!-- Will be fired only once -->
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Other Weapons</Name>
          <!-- Shoots from non-vanilla weapons and then pause for 4-6 seconds -->
          <Priority>20</Priority>
          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>false</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>5</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>All Weapons</Name>
          <!-- Shoots from all weapons and then pause for 5-8 seconds -->
          <Priority>2</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>false</IgnoresGrids>
          <TimeMin>4</TimeMin>
          <TimeMax>6</TimeMax>
          <Requirements />
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon>SmallMissileLauncherReload</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallMissileLauncher</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallGatlingGun</Weapon>
              <!-- Gatlings -->
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon />
              <!-- modded weapons -->
              <TimeMin>2</TimeMin>
              <TimeMax>4</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>HoverDirect</SubtypeId>
      </Id>
      <StrafeWidth>20</StrafeWidth>
      <StrafeHeight>20</StrafeHeight>
      <StrafeDepth>10</StrafeDepth>
      <MinStrafeDistance>5</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>75</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>75</TargetDistance>
      <MaxManeuverDistance>200</MaxManeuverDistance>
      <StaticWeaponryUsage>300</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <UsePlanetHover>true</UsePlanetHover>
      <PlanetHoverMin>3</PlanetHoverMin>
      <PlanetHoverMax>50</PlanetHoverMax>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>3</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>1</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>2</TimeMin>
              <TimeMax>3</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Rocket Volley</Name>
          <Priority>10</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>5</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Other Weapons</Name>
          <Priority>20</Priority>
          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>5</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>All Weapons</Name>
          <Priority>2</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>4</TimeMin>
          <TimeMax>6</TimeMax>
          <Requirements />
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon>SmallMissileLauncherReload</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallMissileLauncher</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallGatlingGun</Weapon>
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon />
              <TimeMin>2</TimeMin>
              <TimeMax>4</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>DefaultDistant</SubtypeId>
      </Id>
      <StrafeWidth>50</StrafeWidth>
      <StrafeHeight>50</StrafeHeight>
      <StrafeDepth>50</StrafeDepth>
      <MinStrafeDistance>10</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>false</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior>DefaultDirect</AlternativeBehavior>

      <SpeedLimit>50</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>450</TargetDistance>
      <MaxManeuverDistance>550</MaxManeuverDistance>
      <StaticWeaponryUsage>0</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>0</WaypointDelayMsMin>
      <WaypointDelayMsMax>0</WaypointDelayMsMax>
      <WaypointMaxTime>8000</WaypointMaxTime>
      <WaypointThresholdDistance>5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>Carrier</SubtypeId>
      </Id>
      <StrafeWidth>200</StrafeWidth>
      <StrafeHeight>200</StrafeHeight>
      <StrafeDepth>200</StrafeDepth>
      <MinStrafeDistance>100</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>false</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>

      <SpeedLimit>40</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>450</TargetDistance>
      <MaxManeuverDistance>650</MaxManeuverDistance>
      <StaticWeaponryUsage>0</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>0</WaypointDelayMsMin>
      <WaypointDelayMsMax>0</WaypointDelayMsMax>
      <WaypointMaxTime>16000</WaypointMaxTime>
      <WaypointThresholdDistance>20</WaypointThresholdDistance>
      <LostTimeMs>30000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>DefaultGrinderBot</SubtypeId>
      </Id>
      <StrafeWidth>2</StrafeWidth>
      <StrafeHeight>2</StrafeHeight>
      <StrafeDepth>1</StrafeDepth>
      <MinStrafeDistance>0.5</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>75</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>2.5</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>16</ToolsUsage>
      <RammingBehaviorDistance>30</RammingBehaviorDistance>

      <WaypointDelayMsMin>500</WaypointDelayMsMin>
      <WaypointDelayMsMax>1000</WaypointDelayMsMax>
      <WaypointMaxTime>8000</WaypointMaxTime>
      <WaypointThresholdDistance>0.25</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>DefaultDrillBot</SubtypeId>
      </Id>
      <StrafeWidth>2</StrafeWidth>
      <StrafeHeight>2</StrafeHeight>
      <StrafeDepth>1</StrafeDepth>
      <MinStrafeDistance>0.5</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>25</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>2.5</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>80</ToolsUsage>
      <RammingBehaviorDistance>30</RammingBehaviorDistance>

      <WaypointDelayMsMin>500</WaypointDelayMsMin>
      <WaypointDelayMsMax>1000</WaypointDelayMsMax>
      <WaypointMaxTime>5000</WaypointMaxTime>
      <WaypointThresholdDistance>0.25</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>DefaultDummyBot</SubtypeId>
      </Id>
      <StrafeWidth>100</StrafeWidth>
      <StrafeHeight>100</StrafeHeight>
      <StrafeDepth>100</StrafeDepth>
      <MinStrafeDistance>25</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>30</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>200</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>200</ToolsUsage>
      <RammingBehaviorDistance>30</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>2000</WaypointDelayMsMax>
      <WaypointMaxTime>10000</WaypointMaxTime>
      <WaypointThresholdDistance>0.35</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>StationGrinderBot</SubtypeId>
      </Id>
      <StrafeWidth>2</StrafeWidth>
      <StrafeHeight>2</StrafeHeight>
      <StrafeDepth>1</StrafeDepth>
      <MinStrafeDistance>0.5</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>40</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>2.5</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>16</ToolsUsage>
      <RammingBehaviorDistance>30</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>2000</WaypointDelayMsMax>
      <WaypointMaxTime>5000</WaypointMaxTime>
      <WaypointThresholdDistance>0.25</WaypointThresholdDistance>
      <LostTimeMs>10000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_HoverTurretDrone</SubtypeId>
      </Id>
      <StrafeWidth>30</StrafeWidth>
      <StrafeHeight>20</StrafeHeight>
      <StrafeDepth>20</StrafeDepth>
      <MinStrafeDistance>10</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>false</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>50</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>100</TargetDistance>
      <MaxManeuverDistance>175</MaxManeuverDistance>
      <StaticWeaponryUsage>15</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>2000</WaypointDelayMsMin>
      <WaypointDelayMsMax>6000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>1</WaypointThresholdDistance>
      <LostTimeMs>60000</LostTimeMs>

      <UsePlanetHover>true</UsePlanetHover>
      <PlanetHoverMin>20</PlanetHoverMin>
      <PlanetHoverMax>40</PlanetHoverMax>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_TunnelGatlingDrone</SubtypeId>
      </Id>
      <StrafeWidth>7</StrafeWidth>
      <StrafeHeight>7</StrafeHeight>
      <StrafeDepth>3</StrafeDepth>
      <MinStrafeDistance>2</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>15</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>20</TargetDistance>
      <MaxManeuverDistance>30</MaxManeuverDistance>
      <StaticWeaponryUsage>50</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>1</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>2</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>1</TimeMin>
              <TimeMax>2</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>Bumblebee</SubtypeId>
      </Id>
      <StrafeWidth>8</StrafeWidth>
      <StrafeHeight>8</StrafeHeight>
      <StrafeDepth>4</StrafeDepth>
      <MinStrafeDistance>3</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>35</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>75</TargetDistance>
      <MaxManeuverDistance>100</MaxManeuverDistance>
      <StaticWeaponryUsage>125</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>500</WaypointDelayMsMin>
      <WaypointDelayMsMax>1500</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>10000</LostTimeMs>
      <SoundLoop>DroneLoopSmall</SoundLoop>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>1</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>false</IgnoresGrids>

          <TimeMin>1</TimeMin>
          <TimeMax>2</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>2</TimeMin>
              <TimeMax>3</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Rocket Volley</Name>
          <Priority>10</Priority>
          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>6</TimeMin>
          <TimeMax>9</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_CloseRangeGatlingDrone</SubtypeId>
      </Id>
      <StrafeWidth>8</StrafeWidth>
      <StrafeHeight>8</StrafeHeight>
      <StrafeDepth>5</StrafeDepth>
      <MinStrafeDistance>2</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>25</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>30</TargetDistance>
      <MaxManeuverDistance>40</MaxManeuverDistance>
      <StaticWeaponryUsage>60</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>1</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>2</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>2.5</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_LongRangeGatlingDrone</SubtypeId>
      </Id>
      <StrafeWidth>12</StrafeWidth>
      <StrafeHeight>12</StrafeHeight>
      <StrafeDepth>8</StrafeDepth>
      <MinStrafeDistance>4</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>60</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>150</TargetDistance>
      <MaxManeuverDistance>175</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>1500</WaypointDelayMsMin>
      <WaypointDelayMsMax>4500</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.75</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>1</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>2</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>2.5</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_TunnelDrillDrone</SubtypeId>
      </Id>
      <StrafeWidth>2</StrafeWidth>
      <StrafeHeight>2</StrafeHeight>
      <StrafeDepth>1</StrafeDepth>
      <MinStrafeDistance>0.5</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>25</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>2.5</MaxManeuverDistance>
      <StaticWeaponryUsage>200</StaticWeaponryUsage>
      <ToolsUsage>250</ToolsUsage>
      <RammingBehaviorDistance>30</RammingBehaviorDistance>

      <WaypointDelayMsMin>500</WaypointDelayMsMin>
      <WaypointDelayMsMax>1000</WaypointDelayMsMax>
      <WaypointMaxTime>5000</WaypointMaxTime>
      <WaypointThresholdDistance>0.25</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>
    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_LargeDrone</SubtypeId>
      </Id>
      <StrafeWidth>15</StrafeWidth>
      <StrafeHeight>15</StrafeHeight>
      <StrafeDepth>15</StrafeDepth>
      <MinStrafeDistance>4</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>true</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>40</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>50</TargetDistance>
      <MaxManeuverDistance>300</MaxManeuverDistance>
      <StaticWeaponryUsage>400</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>2500</WaypointDelayMsMin>
      <WaypointDelayMsMax>5000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>0.75</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>3</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>30</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>2</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>4</TimeMin>
              <TimeMax>6</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Rocket Volley</Name>
          <Priority>15</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>4</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>C_Mine</SubtypeId>
      </Id>
      <StrafeWidth>7</StrafeWidth>
      <StrafeHeight>7</StrafeHeight>
      <StrafeDepth>3</StrafeDepth>
      <MinStrafeDistance>2</MinStrafeDistance>

      <AvoidCollisions>false</AvoidCollisions>
      <RotateToPlayer>true</RotateToPlayer>
      <UseStaticWeaponry>false</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>true</UseRammingBehavior>
      <CanBeDisabled>false</CanBeDisabled>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>75</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>0</TargetDistance>
      <MaxManeuverDistance>0</MaxManeuverDistance>
      <StaticWeaponryUsage>50</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>75</RammingBehaviorDistance>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>3000</WaypointMaxTime>
      <WaypointThresholdDistance>0.5</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>
    </AIBehavior>

    <AIBehavior xsi:type="MyObjectBuilder_DroneBehaviorDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Id>
        <TypeId>DroneBehaviorDefinition</TypeId>
        <SubtypeId>PlanetDrone</SubtypeId>
      </Id>
      <StrafeWidth>200</StrafeWidth>
      <StrafeHeight>100</StrafeHeight>
      <StrafeDepth>50</StrafeDepth>
      <MinStrafeDistance>20</MinStrafeDistance>

      <AvoidCollisions>true</AvoidCollisions>
      <RotateToPlayer>false</RotateToPlayer>
      <UseStaticWeaponry>true</UseStaticWeaponry>
      <UseTools>false</UseTools>
      <UseRammingBehavior>false</UseRammingBehavior>
      <AlternativeBehavior></AlternativeBehavior>

      <SpeedLimit>100</SpeedLimit>
      <PlayerYAxisOffset>0.9</PlayerYAxisOffset>
      <TargetDistance>100</TargetDistance>
      <MaxManeuverDistance>300</MaxManeuverDistance>
      <StaticWeaponryUsage>600</StaticWeaponryUsage>
      <ToolsUsage>8</ToolsUsage>
      <RammingBehaviorDistance>50</RammingBehaviorDistance>

      <UsePlanetHover>true</UsePlanetHover>
      <PlanetHoverMin>20</PlanetHoverMin>
      <PlanetHoverMax>1000</PlanetHoverMax>

      <WaypointDelayMsMin>1000</WaypointDelayMsMin>
      <WaypointDelayMsMax>3000</WaypointDelayMsMax>
      <WaypointMaxTime>15000</WaypointMaxTime>
      <WaypointThresholdDistance>3</WaypointThresholdDistance>
      <LostTimeMs>20000</LostTimeMs>

      <UsesWeaponBehaviors>true</UsesWeaponBehaviors>
      <WeaponBehaviorNotFoundDelay>3</WeaponBehaviorNotFoundDelay>
      <WeaponBehaviors>
        <WeaponBehavior>
          <Name>Gatling Burst</Name>
          <Priority>40</Priority>
          <Requirements>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>

          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>

          <TimeMin>1</TimeMin>
          <TimeMax>3</TimeMax>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>2</TimeMin>
              <TimeMax>3</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Rocket Volley</Name>
          <Priority>10</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>1</TimeMin>
          <TimeMax>2</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>true</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>Other Weapons</Name>
          <Priority>20</Priority>
          <IgnoresVoxels>false</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>3</TimeMin>
          <TimeMax>5</TimeMax>
          <Requirements>
            <Weapon>SmallMissileLauncher</Weapon>
            <Weapon>SmallMissileLauncherReload</Weapon>
            <Weapon>SmallGatlingGun</Weapon>
          </Requirements>
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon />
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>

        <WeaponBehavior>
          <Name>All Weapons</Name>
          <Priority>2</Priority>
          <IgnoresVoxels>true</IgnoresVoxels>
          <IgnoresGrids>true</IgnoresGrids>
          <TimeMin>4</TimeMin>
          <TimeMax>6</TimeMax>
          <Requirements />
          <RequirementsIsWhitelist>false</RequirementsIsWhitelist>
          <WeaponRules>
            <WeaponRule>
              <Weapon>SmallMissileLauncherReload</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallMissileLauncher</Weapon>
              <TimeMin>0</TimeMin>
              <TimeMax>0</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>true</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon>SmallGatlingGun</Weapon>
              <TimeMin>3</TimeMin>
              <TimeMax>5</TimeMax>
              <FiringAfterLosingSight>true</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
            <WeaponRule>
              <Weapon />
              <TimeMin>2</TimeMin>
              <TimeMax>4</TimeMax>
              <FiringAfterLosingSight>false</FiringAfterLosingSight>
              <CanGoThroughVoxels>false</CanGoThroughVoxels>
            </WeaponRule>
          </WeaponRules>
        </WeaponBehavior>
      </WeaponBehaviors>
    </AIBehavior>

  </AIBehaviors>
</Definitions>
`
];