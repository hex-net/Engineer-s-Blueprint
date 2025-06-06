// data/localizationResxData.ts

export const resxXmlData: string = `<?xml version="1.0" encoding="utf-8"?>
<root>
  <!-- 
    Microsoft ResX Schema 
    
    Version 2.0
    
    The primary goals of this format is to allow a simple XML format 
    that is mostly human readable. The generation and parsing of the 
    various data types are done through the TypeConverter classes 
    associated with the data types.
    
    Example:
    
    ... ado.net/XML headers & schema ...
    <resheader name="resmimetype">text/microsoft-resx</resheader>
    <resheader name="version">2.0</resheader>
    <resheader name="reader">System.Resources.ResXResourceReader, System.Windows.Forms, ...</resheader>
    <resheader name="writer">System.Resources.ResXResourceWriter, System.Windows.Forms, ...</resheader>
    <data name="Name1"><value>this is my long string</value><comment>this is a comment</comment></data>
    <data name="Color1" type="System.Drawing.Color, System.Drawing">Blue</data>
    <data name="Bitmap1" mimetype="application/x-microsoft.net.object.binary.base64">
        <value>[base64 mime encoded serialized .NET Framework object]</value>
    </data>
    <data name="Icon1" type="System.Drawing.Icon, System.Drawing" mimetype="application/x-microsoft.net.object.bytearray.base64">
        <value>[base64 mime encoded string representing a byte array form of the .NET Framework object]</value>
        <comment>This is a comment</comment>
    </data>
                
    There are any number of "resheader" rows that contain simple 
    name/value pairs.
    
    Each data row contains a name, and value. The row also contains a 
    type or mimetype. Type corresponds to a .NET class that support 
    text/value conversion through the TypeConverter architecture. 
    Classes that don't support this are serialized and stored with the 
    mimetype set.
    
    The mimetype is used for serialized objects, and tells the 
    ResXResourceReader how to depersist the object. This is currently not 
    extensible. For a given mimetype the value must be set accordingly:
    
    Note - application/x-microsoft.net.object.binary.base64 is the format 
    that the ResXResourceWriter will generate, however the reader can 
    read any of the formats listed below.
    
    mimetype: application/x-microsoft.net.object.binary.base64
    value   : The object must be serialized with 
            : System.Runtime.Serialization.Formatters.Binary.BinaryFormatter
            : and then encoded with base64 encoding.
    
    mimetype: application/x-microsoft.net.object.soap.base64
    value   : The object must be serialized with 
            : System.Runtime.Serialization.Formatters.Soap.SoapFormatter
            : and then encoded with base64 encoding.

    mimetype: application/x-microsoft.net.object.bytearray.base64
    value   : The object must be serialized into a byte array 
            : using a System.ComponentModel.TypeConverter
            : and then encoded with base64 encoding.
    -->
  <xsd:schema id="root" xmlns="" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:msdata="urn:schemas-microsoft-com:xml-msdata">
    <xsd:import namespace="http://www.w3.org/XML/1998/namespace" />
    <xsd:element name="root" msdata:IsDataSet="true">
      <xsd:complexType>
        <xsd:choice maxOccurs="unbounded">
          <xsd:element name="metadata">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" />
              </xsd:sequence>
              <xsd:attribute name="name" use="required" type="xsd:string" />
              <xsd:attribute name="type" type="xsd:string" />
              <xsd:attribute name="mimetype" type="xsd:string" />
              <xsd:attribute ref="xml:space" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="assembly">
            <xsd:complexType>
              <xsd:attribute name="alias" type="xsd:string" />
              <xsd:attribute name="name" type="xsd:string" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="data">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
                <xsd:element name="comment" type="xsd:string" minOccurs="0" msdata:Ordinal="2" />
              </xsd:sequence>
              <xsd:attribute name="name" type="xsd:string" use="required" msdata:Ordinal="1" />
              <xsd:attribute name="type" type="xsd:string" msdata:Ordinal="3" />
              <xsd:attribute name="mimetype" type="xsd:string" msdata:Ordinal="4" />
              <xsd:attribute ref="xml:space" />
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="resheader">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="value" type="xsd:string" minOccurs="0" msdata:Ordinal="1" />
              </xsd:sequence>
              <xsd:attribute name="name" type="xsd:string" use="required" />
            </xsd:complexType>
          </xsd:element>
        </xsd:choice>
      </xsd:complexType>
    </xsd:element>
  </xsd:schema>
  <resheader name="resmimetype">
    <value>text/microsoft-resx</value>
  </resheader>
  <resheader name="version">
    <value>2.0</value>
  </resheader>
  <resheader name="reader">
    <value>System.Resources.ResXResourceReader, System.Windows.Forms, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
  </resheader>
  <resheader name="writer">
    <value>System.Resources.ResXResourceWriter, System.Windows.Forms, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089</value>
  </resheader>
  <data name="Add" xml:space="preserve">
    <value>Add</value>
  </data>
  <data name="AddAll" xml:space="preserve">
    <value>Add all</value>
  </data>
  <data name="AddNpcToFaction" xml:space="preserve">
    <value>Add NPC</value>
  </data>
  <data name="AddNpcToFactionHelp" xml:space="preserve">
    <value>Adds new NPC identity to this faction - faction will not cease to exist when last player leaves.
Available in scenario edit mode only.</value>
  </data>
  <data name="AdminMenuNotAvailable" xml:space="preserve">
    <value>Admin menu is available only when you're admin or when admin promotes you to Observer and beyond</value>
  </data>
  <data name="Afterburner" xml:space="preserve">
    <value>Sprint</value>
  </data>
  <data name="AGravity" xml:space="preserve">
    <value>A-Gravity</value>
  </data>
  <data name="Weather" xml:space="preserve">
    <value>Weather</value>
  </data>
  <data name="Align_Center" xml:space="preserve">
    <value>Center</value>
  </data>
  <data name="Align_Left" xml:space="preserve">
    <value>Left</value>
  </data>
  <data name="Align_Right" xml:space="preserve">
    <value>Right</value>
  </data>
  <data name="AngleGrinderPrimaryAction" xml:space="preserve">
    <value>Press {0} to dismount target</value>
  </data>
  <data name="GDPR_Caption" xml:space="preserve">
    <value>GDPR Consent agreement</value>
  </data>
  <data name="WorkshopConsent" xml:space="preserve">
    <value>Workshop Consent</value>
  </data>
  <data name="Consent" xml:space="preserve">
    <value>Consent</value>
  </data>
  <data name="ModIoConsent" xml:space="preserve">
    <value>Mod.io Consent</value>
  </data>
  <data name="GDPR_PrivacyPolicy" xml:space="preserve">
    <value>Read our Privacy Policy</value>
  </data>
  <data name="GDPR_Text1" xml:space="preserve">
    <value>Data protection laws have changed in the European Union and we want to make sure you review how your personal data is processed in Space Engineers.</value>
  </data>
  <data name="GDPR_Text2" xml:space="preserve">
    <value>By clicking Yes you agree to collect personal data according to GDPR. Read more info in our Privacy policy.</value>
  </data>
  <data name="Antenna_EnableBroadcast" xml:space="preserve">
    <value>Enable broadcasting</value>
  </data>
  <data name="Antenna_IgnoreAlliedBroadcast" xml:space="preserve">
    <value>Ignore Allied Broadcast</value>
  </data>
  <data name="Antenna_IgnoreAlliedBroadcastTooltip" xml:space="preserve">
    <value>Ignores broadcasts sent by friendly antenna that do not belong to you</value>
  </data>
  <data name="Antenna_IgnoreOtherBroadcast" xml:space="preserve">
    <value>Ignore Other Broadcast</value>
  </data>
  <data name="Antenna_IgnoreOtherBroadcastTooltip" xml:space="preserve">
    <value>Ignores broadcasts sent by neutral and enemy antenna</value>
  </data>
  <data name="AssemblerState_Disabled" xml:space="preserve">
    <value>Disabled</value>
  </data>
  <data name="AssemblerState_InventoryFull" xml:space="preserve">
    <value>Inventory is full</value>
  </data>
  <data name="AssemblerState_MissingItems" xml:space="preserve">
    <value>Missing items</value>
  </data>
  <data name="AssemblerState_NotEnoughPower" xml:space="preserve">
    <value>Not enough power</value>
  </data>
  <data name="AssemblerState_NothingBeingProduced" xml:space="preserve">
    <value>Nothing produced right now</value>
  </data>
  <data name="AssemblerState_NotWorking" xml:space="preserve">
    <value>Assembler damaged or dismounted</value>
  </data>
  <data name="Assembler_SlaveMode" xml:space="preserve">
    <value>Cooperative Mode</value>
  </data>
  <data name="Asteroids" xml:space="preserve">
    <value>Asteroids</value>
  </data>
  <data name="Asteroid_Amount" xml:space="preserve">
    <value>Asteroid amount</value>
  </data>
  <data name="AttachToSelectedEntity" xml:space="preserve">
    <value>Attach to selected entity</value>
  </data>
  <data name="AUTO" xml:space="preserve">
    <value>AUTO</value>
  </data>
  <data name="BatteryBlock" xml:space="preserve">
    <value>Battery</value>
  </data>
  <data name="BiggestDistanceFromPlayers" xml:space="preserve">
    <value>BiggestDistanceFromPlayers</value>
  </data>
  <data name="BiggestGrids" xml:space="preserve">
    <value>BiggestGrids</value>
  </data>
  <data name="BlindJump" xml:space="preserve">
    <value>Blind Jump</value>
  </data>
  <data name="BlockActionDropDownValue_RotationAuto" xml:space="preserve">
    <value>Auto</value>
  </data>
  <data name="BlockActionDropDownValue_RotationCW" xml:space="preserve">
    <value>Clockwise</value>
  </data>
  <data name="BlockActionDropDownValue_RotationCCW" xml:space="preserve">
    <value>Counter-Clockwise</value>
  </data>
  <data name="BlockActionDropDownValueTip_RotationAuto" xml:space="preserve">
    <value>Automatically chooses the shortest rotation to the set angle</value>
  </data>
  <data name="BlockActionDropDownValueTip_RotationCW" xml:space="preserve">
    <value>Rotate clockwise to the set angle</value>
  </data>
  <data name="BlockActionDropDownValueTip_RotationCCW" xml:space="preserve">
    <value>Rotate counter-clockwise to the set angle</value>
  </data>
  <data name="BlockActionTitle_AddPistonHead" xml:space="preserve">
    <value>Add Piston Head</value>
  </data>
  <data name="BlockActionTitle_AddRotorHead" xml:space="preserve">
    <value>Add Rotor Head</value>
  </data>
  <data name="BlockActionTitle_AddSmallRotorHead" xml:space="preserve">
    <value>Add Small Head</value>
  </data>
  <data name="BlockActionTitle_AddHingeHead" xml:space="preserve">
    <value>Add Hinge Head</value>
  </data>
  <data name="BlockActionTitle_AddSmallHingeHead" xml:space="preserve">
    <value>Add Small Head</value>
  </data>
  <data name="BlockActionTitle_AddWaypoint" xml:space="preserve">
    <value>Add</value>
  </data>
  <data name="BlockActionTitle_AddWheel" xml:space="preserve">
    <value>Add Wheel</value>
  </data>
  <data name="BlockActionTitle_Attach" xml:space="preserve">
    <value>Attach</value>
  </data>
  <data name="BlockActionTitle_AutoEnable" xml:space="preserve">
    <value>Enable Auto</value>
  </data>
  <data name="BlockActionTitle_Detach" xml:space="preserve">
    <value>Detach</value>
  </data>
  <data name="BlockActionTitle_Discharge" xml:space="preserve">
    <value>Discharge</value>
  </data>
  <data name="BlockActionTitle_Extend" xml:space="preserve">
    <value>Extend</value>
  </data>
  <data name="BlockActionTitle_Jump" xml:space="preserve">
    <value>Jump</value>
  </data>
  <data name="BlockActionTitle_Park" xml:space="preserve">
    <value>Park</value>
  </data>
  <data name="BlockActionTitle_Lock" xml:space="preserve">
    <value>Lock</value>
  </data>
  <data name="BlockActionTitle_MoveWaypointDown" xml:space="preserve">
    <value>Move Down</value>
  </data>
  <data name="BlockActionTitle_MoveWaypointUp" xml:space="preserve">
    <value>Move Up</value>
  </data>
  <data name="BlockActionTitle_Recharge" xml:space="preserve">
    <value>Recharge</value>
  </data>
  <data name="BlockActionTitle_RemoteCopy" xml:space="preserve">
    <value>Copy</value>
  </data>
  <data name="BlockActionTitle_RemotePaste" xml:space="preserve">
    <value>Paste</value>
  </data>
  <data name="BlockActionTitle_RemoveWaypoint" xml:space="preserve">
    <value>Remove</value>
  </data>
  <data name="BlockActionTitle_Retract" xml:space="preserve">
    <value>Retract</value>
  </data>
  <data name="BlockActionTitle_Reverse" xml:space="preserve">
    <value>Reverse</value>
  </data>
  <data name="BlockActionTitle_RotateToAngle" xml:space="preserve">
    <value>Rotate To Angle</value>
  </data>
  <data name="BlockActionTitle_SetRotationDirection" xml:space="preserve">
    <value>Set Rotation Direction</value>
  </data>
  <data name="BlockActionTitle_SetAndMove" xml:space="preserve">
    <value>Set And Move</value>
  </data>
  <data name="BlockActionTitle_SetAngle" xml:space="preserve">
    <value>Set Angle</value>
  </data>
  <data name="BlockActionTitle_SetBlinkInterval" xml:space="preserve">
    <value>Set Blink Interval</value>
  </data>
  <data name="BlockActionTitle_SetColor" xml:space="preserve">
    <value>Set Color</value>
  </data>
  <data name="BlockActionTitle_SetDistance" xml:space="preserve">
    <value>Set Distance</value>
  </data>
  <data name="BlockActionTitle_SetOverridePercentage" xml:space="preserve">
    <value>Set Override Percentage</value>
  </data>
  <data name="BlockActionTitle_SetPropulsionOverride" xml:space="preserve">
    <value>Set Propulsion Override</value>
  </data>
  <data name="BlockActionTitle_SetRadius" xml:space="preserve">
    <value>Set Radius</value>
  </data>
  <data name="BlockActionTitle_SetSteerOverride" xml:space="preserve">
    <value>Set Steer Override</value>
  </data>
  <data name="BlockActionTitle_SetSpeedLimit" xml:space="preserve">
    <value>Set Speed Limit</value>
  </data>
  <data name="BlockActionTitle_SetVelocity" xml:space="preserve">
    <value>Set Velocity</value>
  </data>
  <data name="BlockActionTitle_SetLowerLimit" xml:space="preserve">
    <value>Set Lower Limit</value>
  </data>
  <data name="BlockActionTitle_SetUpperLimit" xml:space="preserve">
    <value>Set Upper Limit</value>
  </data>
  <data name="BlockActionTitle_SwitchLock" xml:space="preserve">
    <value>Switch lock</value>
  </data>
  <data name="BlockActionTitle_Unlock" xml:space="preserve">
    <value>Unlock</value>
  </data>
  <data name="BlockActionTitle_View" xml:space="preserve">
    <value>View</value>
  </data>
  <data name="BlockActionTitle_WaypointReset" xml:space="preserve">
    <value>Reset waypoint</value>
  </data>
  <data name="BlockActionTooltip_AddPistonHead" xml:space="preserve">
    <value>Tries to add a piston head if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddRotorHead" xml:space="preserve">
    <value>Tries to add a Rotor head if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddSmallRotorHead" xml:space="preserve">
    <value>Tries to add a Small Rotor head on Large Rotor if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddHingeHead" xml:space="preserve">
    <value>Tries to add a Hinge head if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddSmallHingeHead" xml:space="preserve">
    <value>Tries to add a Small Hinge head on Large Hinge if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddWheel" xml:space="preserve">
    <value>Tries to add a Wheel if no wheel is present</value>
  </data>
  <data name="BlockActionTooltip_SelectedJumpTarget" xml:space="preserve">
    <value>To execute the jump, assign the "Jump" command to the toolbar of a cockpit</value>
  </data>
  <data name="BlockActionTooltip_WaypointReset" xml:space="preserve">
    <value>Sets the first waypoint to be the current target waypoint.</value>
  </data>
  <data name="BlockAction_ConveyorSorterBlacklist" xml:space="preserve">
    <value>Blacklist</value>
  </data>
  <data name="BlockAction_ConveyorSorterWhitelist" xml:space="preserve">
    <value>Whitelist</value>
  </data>
  <data name="BlockAction_DoorClosed" xml:space="preserve">
    <value>Closed</value>
  </data>
  <data name="BlockAction_DoorOpen" xml:space="preserve">
    <value>Open</value>
  </data>
  <data name="BlockAction_RemoveFromToolbar" xml:space="preserve">
    <value>[remove from toolbar]</value>
  </data>
  <data name="BlockAction_Switch" xml:space="preserve">
    <value>Switch</value>
  </data>
  <data name="BlockAction_Toggle" xml:space="preserve">
    <value>Toggle block</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelAccessOnlyOwner" xml:space="preserve">
    <value>Only owner</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelAccessReadAll" xml:space="preserve">
    <value>Everyone read-only</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelAccessReadFaction" xml:space="preserve">
    <value>Faction read-only</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelAccessReadWriteAll" xml:space="preserve">
    <value>Everyone read/write</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelAccessReadWriteFaction" xml:space="preserve">
    <value>Faction read/write</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelShowTextNone" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelShowTextPrivate" xml:space="preserve">
    <value>Private</value>
  </data>
  <data name="BlockComboBoxValue_TextPanelShowTextPublic" xml:space="preserve">
    <value>Public</value>
  </data>
  <data name="BlockCount" xml:space="preserve">
    <value>BlockCount</value>
  </data>
  <data name="BlockIsNotPowered" xml:space="preserve">
    <value>Block is not powered</value>
  </data>
  <data name="BlockOwner_Me" xml:space="preserve">
    <value>Me</value>
  </data>
  <data name="BlockOwner_Nobody" xml:space="preserve">
    <value>Nobody</value>
  </data>
  <data name="BlockOwner_Owner" xml:space="preserve">
    <value>Owner</value>
  </data>
  <data name="BlockOwner_ShareAll" xml:space="preserve">
    <value>Share with all</value>
  </data>
  <data name="BlockOwner_ShareFaction" xml:space="preserve">
    <value>Share with my faction</value>
  </data>
  <data name="BlockOwner_ShareNone" xml:space="preserve">
    <value>No share</value>
  </data>
  <data name="BlockOwner_Transfer" xml:space="preserve">
    <value>Transfer ownership</value>
  </data>
  <data name="BlockOwner_TransferTo" xml:space="preserve">
    <value>Transfer to:</value>
  </data>
  <data name="BlockOwner_Unknown" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="BlockPropertiesText_CurrentJump" xml:space="preserve">
    <value>Current jump:</value>
  </data>
  <data name="BlockPropertiesText_DepletedIn" xml:space="preserve">
    <value>Fully depleted in: </value>
  </data>
  <data name="BlockPropertiesText_Effectiveness" xml:space="preserve">
    <value>Yield Rate:</value>
  </data>
  <data name="BlockPropertiesText_Efficiency" xml:space="preserve">
    <value>Power Efficiency:</value>
  </data>
  <data name="BlockPropertiesText_HeadAttachingAny" xml:space="preserve">
    <value>Looking for any Head to attach</value>
  </data>
  <data name="BlockPropertiesText_HeadAttachingSpecific" xml:space="preserve">
    <value>Looking for specific Head to attach</value>
  </data>
  <data name="BlockPropertiesText_LockState" xml:space="preserve">
    <value>Lock State: </value>
  </data>
  <data name="BlockPropertiesText_LoopTimer" xml:space="preserve">
    <value>Loop timer: </value>
  </data>
  <data name="BlockPropertiesText_MainCockpit" xml:space="preserve">
    <value>Main ship cockpit</value>
  </data>
  <data name="BlockPropertiesText_MaxJump" xml:space="preserve">
    <value>Max jump distance:</value>
  </data>
  <data name="BlockPropertiesText_MaxOutput" xml:space="preserve">
    <value>Max Output: </value>
  </data>
  <data name="BlockPropertiesText_MaxRequiredInput" xml:space="preserve">
    <value>Max Required Input: </value>
  </data>
  <data name="BlockPropertiesText_MaxStoredPower" xml:space="preserve">
    <value>Max Stored Power: </value>
  </data>
  <data name="BlockPropertiesText_MotoLockOverrideDisabled" xml:space="preserve">
    <value>The current rotor rotation speed is too high.
Rotor will be locked when angular velocity gets lower.</value>
  </data>
  <data name="BlockPropertiesText_MotorAttached" xml:space="preserve">
    <value>Attached</value>
  </data>
  <data name="BlockPropertiesText_MotorAttachingAny" xml:space="preserve">
    <value>Looking for any rotor to attach</value>
  </data>
  <data name="BlockPropertiesText_MotorAttachingSpecific" xml:space="preserve">
    <value>Looking for specific rotor to attach</value>
  </data>
  <data name="BlockPropertiesText_MotorCurrentAngle" xml:space="preserve">
    <value>Current angle: </value>
  </data>
  <data name="BlockPropertiesText_MotorDetached" xml:space="preserve">
    <value>Detached</value>
  </data>
  <data name="BlockPropertiesText_MotorLimitsDisabled" xml:space="preserve">
    <value>The current rotor rotation is out of limits, the limits will be enabled when the rotor is within range</value>
  </data>
  <data name="BlockPropertiesText_MotorLocked" xml:space="preserve">
    <value>Safety locked</value>
  </data>
  <data name="BlockPropertiesText_OxygenOutput" xml:space="preserve">
    <value>Oxygen Output: </value>
  </data>
  <data name="BlockPropertiesText_PistonCurrentPosition" xml:space="preserve">
    <value>Current position: </value>
  </data>
  <data name="BlockPropertiesText_Productivity" xml:space="preserve">
    <value>Refine Speed:</value>
  </data>
  <data name="BlockPropertiesText_Productivity_Assembler" xml:space="preserve">
    <value>Production Speed:</value>
  </data>
  <data name="BlockPropertiesText_RechargedIn" xml:space="preserve">
    <value>Fully recharged in: </value>
  </data>
  <data name="BlockPropertiesText_RequiredInput" xml:space="preserve">
    <value>Required Input: </value>
  </data>
  <data name="BlockPropertiesText_StoredPower" xml:space="preserve">
    <value>Stored power: </value>
  </data>
  <data name="BlockPropertiesTooltip_Projector_GetOwnership" xml:space="preserve">
    <value>All blocks from the spawned ship will have the same ownership settings as this projector</value>
  </data>
  <data name="BlockPropertyButtonOff_Retract" xml:space="preserve">
    <value>Retract</value>
  </data>
  <data name="BlockPropertyButtonOn_Expand" xml:space="preserve">
    <value>Expand</value>
  </data>
  <data name="BlockPropertyDescription_AnyoneCanUse" xml:space="preserve">
    <value>If false checks whether player pressing button has access to the block</value>
  </data>
  <data name="BlockPropertyDescription_BreakForce" xml:space="preserve">
    <value>Landing gear will unlock automatically when force applied to keep it attached is larger than this value</value>
  </data>
  <data name="BlockPropertyDescription_BroadcastRadius" xml:space="preserve">
    <value>Broadcast radius</value>
  </data>
  <data name="BlockPropertyDescription_BroadcastUsingAntennas" xml:space="preserve">
    <value>Broadcast using antennas</value>
  </data>
  <data name="BlockPropertyDescription_Connector_Strength" xml:space="preserve">
    <value>Connector strength when aligning ship (yellow color), smaller strength of two connectors is used</value>
  </data>
  <data name="BlockPropertyDescription_Depressurize" xml:space="preserve">
    <value>The vent will remove air from the room and store it in tanks</value>
  </data>
  <data name="BlockPropertyDescription_GravityAcceleration" xml:space="preserve">
    <value>Gravitational acceleration of the generator</value>
  </data>
  <data name="BlockPropertyDescription_GravityFieldDepth" xml:space="preserve">
    <value>Depth of the gravity field of the generator</value>
  </data>
  <data name="BlockPropertyDescription_GravityFieldHeight" xml:space="preserve">
    <value>Height of the gravity field of the generator</value>
  </data>
  <data name="BlockPropertyDescription_GravityFieldRadius" xml:space="preserve">
    <value>Radius of the gravity field</value>
  </data>
  <data name="BlockPropertyDescription_GravityFieldWidth" xml:space="preserve">
    <value>Width of the gravity field of the generator</value>
  </data>
  <data name="BlockPropertyDescription_GyroOverride" xml:space="preserve">
    <value>If set, the gyro does not respond to cockpit controls, but can instead be controlled manually using the terminal control sliders</value>
  </data>
  <data name="BlockPropertyDescription_GyroPitchOverride" xml:space="preserve">
    <value>Pitch component of the constant torque that is applied by this gyro if the cockpit controls are overridden</value>
  </data>
  <data name="BlockPropertyDescription_GyroPower" xml:space="preserve">
    <value>Supplied power affects gyroscope force</value>
  </data>
  <data name="BlockPropertyDescription_GyroRollOverride" xml:space="preserve">
    <value>Roll component of the constant torque that is applied by this gyro if the cockpit controls are overridden</value>
  </data>
  <data name="BlockPropertyDescription_GyroYawOverride" xml:space="preserve">
    <value>Yaw component of the constant torque that is applied by this gyro if the cockpit controls are overridden</value>
  </data>
  <data name="BlockPropertyDescription_LaserRange" xml:space="preserve">
    <value>Range</value>
  </data>
  <data name="BlockPropertyDescription_LightBlinkInterval" xml:space="preserve">
    <value>Blinking interval of light (in seconds)</value>
  </data>
  <data name="BlockPropertyDescription_LightBlinkLenght" xml:space="preserve">
    <value>Length of blinking as percentage of blink interval</value>
  </data>
  <data name="BlockPropertyDescription_LightBlinkOffset" xml:space="preserve">
    <value>Offset of blinking as percentage of blink interval</value>
  </data>
  <data name="BlockPropertyDescription_LightColor" xml:space="preserve">
    <value>Color of the light</value>
  </data>
  <data name="BlockPropertyDescription_LightFalloff" xml:space="preserve">
    <value>Exponential falloff of the light (1 = linear, 2 = quadratic, etc)</value>
  </data>
  <data name="BlockPropertyDescription_LightIntensity" xml:space="preserve">
    <value>Intensity of the light</value>
  </data>
  <data name="BlockPropertyDescription_LightOffset" xml:space="preserve">
    <value>Offset of the light from model</value>
  </data>
  <data name="BlockPropertyDescription_LightRadius" xml:space="preserve">
    <value>Radius of influence of the light</value>
  </data>
  <data name="BlockPropertyDescription_LightReflectorRadius" xml:space="preserve">
    <value>Reflector radius of influence of the light</value>
  </data>
  <data name="BlockPropertyDescription_MotorBrakingTorque" xml:space="preserve">
    <value>Braking strength of the {0}: how fast it will stop (applied when the {0} is turned off)</value>
  </data>
  <data name="BlockPropertyDescription_MotorLock" xml:space="preserve">
    <value>Rotor will lock its current position</value>
  </data>
  <data name="BlockPropertyDescription_HingeLock" xml:space="preserve">
    <value>Hinge will lock its current position</value>
  </data>
  <data name="BlockPropertyDescription_MotorLowerLimit" xml:space="preserve">
    <value>Lower angular limit</value>
  </data>
  <data name="BlockPropertyDescription_MotorRotorDisplacement" xml:space="preserve">
    <value>Allows to move the rotor grid up or down to solve various alignment issues</value>
  </data>
  <data name="BlockPropertyDescription_MotorTorque" xml:space="preserve">
    <value>The torque of the {0}: how fast it will accelerate (applied when the {0} is turned on)</value>
  </data>
  <data name="BlockPropertyDescription_MotorUpperLimit" xml:space="preserve">
    <value>Upper angular limit</value>
  </data>
  <data name="BlockPropertyDescription_MotorUsesWheelCommands" xml:space="preserve">
    <value>Indicates whether motor is controlled like a wheel directly from cockpit</value>
  </data>
  <data name="BlockPropertyDescription_MotorVelocity" xml:space="preserve">
    <value>Target velocity of the {0}; the {0} will accelerate until the target velocity is reached</value>
  </data>
  <data name="BlockPropertyDescription_Motor_Friction" xml:space="preserve">
    <value>Regulates wheel friction by changing pressure in the tire</value>
  </data>
  <data name="BlockPropertyDescription_Motor_Height" xml:space="preserve">
    <value>Axle height offset from center</value>
  </data>
  <data name="BlockPropertyDescription_Motor_InvertPropulsion" xml:space="preserve">
    <value>Invert the propulsion direction</value>
  </data>
  <data name="BlockPropertyDescription_Motor_InvertSteer" xml:space="preserve">
    <value>Invert the steering direction</value>
  </data>
  <data name="BlockPropertyDescription_Motor_MaxSteerAngle" xml:space="preserve">
    <value>The maximum angle that the wheel will turn when steering</value>
  </data>
  <data name="BlockPropertyDescription_Motor_Power" xml:space="preserve">
    <value>Power supplied to propulsion</value>
  </data>
  <data name="BlockPropertyDescription_Motor_Propulsion" xml:space="preserve">
    <value>If the wheel is propelled</value>
  </data>
  <data name="BlockPropertyDescription_Motor_PropulsionOverride" xml:space="preserve">
    <value>Propulsion override</value>
  </data>
  <data name="BlockPropertyDescription_Motor_Steering" xml:space="preserve">
    <value>Control steering of this suspension from cockpit</value>
  </data>
  <data name="BlockPropertyDescription_Motor_SteerOverride" xml:space="preserve">
    <value>Steer override</value>
  </data>
  <data name="BlockPropertyDescription_Motor_SteerReturnSpeed" xml:space="preserve">
    <value>The wheel's return speed from turning</value>
  </data>
  <data name="BlockPropertyDescription_Motor_SteerSpeed" xml:space="preserve">
    <value>The wheel turn speed</value>
  </data>
  <data name="BlockPropertyDescription_Motor_SuspensionSpeed" xml:space="preserve">
    <value>Wheels will not be propeled over this speed</value>
  </data>
  <data name="BlockPropertyDescription_Motor_SuspensionTravel" xml:space="preserve">
    <value>Limits the suspension's travel height.
Setting to 0% will effectively lock the suspension.</value>
  </data>
  <data name="BlockPropertyDescription_OreDetectorRange" xml:space="preserve">
    <value>Maximum detection range</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldBack" xml:space="preserve">
    <value>How far the sensing field extends backwards from the sensor's position</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldBottom" xml:space="preserve">
    <value>How far the sensing field extends below the sensor's position</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldFront" xml:space="preserve">
    <value>How far the sensing field extends in front of the sensor</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldLeft" xml:space="preserve">
    <value>How far the sensing field extends to the left from the sensor's position</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldRight" xml:space="preserve">
    <value>How far the sensing field extends to the right from the sensor's position</value>
  </data>
  <data name="BlockPropertyDescription_SensorFieldTop" xml:space="preserve">
    <value>How far the sensing field extends above the sensor's position</value>
  </data>
  <data name="BlockPropertyDescription_SensorToolbarOpen" xml:space="preserve">
    <value>Opens toolbar</value>
  </data>
  <data name="BlockPropertyDescription_ShowShipName" xml:space="preserve">
    <value>Show ship name</value>
  </data>
  <data name="BlockPropertyDescription_SoundBlockRange" xml:space="preserve">
    <value>Range of played sound</value>
  </data>
  <data name="BlockPropertyDescription_SoundBlockVolume" xml:space="preserve">
    <value>Volume of played sound</value>
  </data>
  <data name="BlockPropertyDescription_SpaceBallFriction" xml:space="preserve">
    <value>Friction</value>
  </data>
  <data name="BlockPropertyDescription_SpaceBallRestitution" xml:space="preserve">
    <value>Restitution</value>
  </data>
  <data name="BlockPropertyDescription_SpaceBallVirtualMass" xml:space="preserve">
    <value>Virtual mass</value>
  </data>
  <data name="BlockPropertyDescription_Stockpile" xml:space="preserve">
    <value>Stockpiling tanks will not get drained by air vents</value>
  </data>
  <data name="BlockPropertyDescription_Suspension_AirShock" xml:space="preserve">
    <value>Automatically increases the strength of suspension spring when it is about to land hard.</value>
  </data>
  <data name="BlockPropertyDescription_Suspension_Brake" xml:space="preserve">
    <value>Enables sensitivity on brake input.</value>
  </data>
  <data name="BlockPropertyDescription_ThrustOverride" xml:space="preserve">
    <value>Overriding thruster will cause activation of thruster even without cockpit</value>
  </data>
  <data name="BlockPropertyPopup_AutoPilotToolbarOpen" xml:space="preserve">
    <value>Set actions to be done when autopilot reaches this waypoint</value>
  </data>
  <data name="BlockPropertyProperties_CurrentInput" xml:space="preserve">
    <value>Current Input: </value>
  </data>
  <data name="BlockPropertyProperties_ChargeEfficiency" xml:space="preserve">
    <value>Charge Efficiency: </value>
  </data>
  <data name="BlockPropertyProperties_CurrentMass" xml:space="preserve">
    <value>Current Mass: </value>
  </data>
  <data name="BlockPropertyProperties_CurrentOutput" xml:space="preserve">
    <value>Current Output: </value>
  </data>
  <data name="BlockPropertyText_AnyoneCanUse" xml:space="preserve">
    <value>Anyone Can Use</value>
  </data>
  <data name="BlockPropertyText_TargetOptions" xml:space="preserve">
    <value>Target Options</value>
  </data>
  <data name="BlockPropertyText_TargetOptions_Target" xml:space="preserve">
    <value>Target </value>
  </data>
  <data name="BlockPropertyItem_TargetOptions_Default" xml:space="preserve">
    <value>Default</value>
  </data>
  <data name="BlockPropertyItem_TargetOptions_Unknown" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="DisplayName_TargetOptions_Weapons" xml:space="preserve">
    <value>Weapons</value>
  </data>
  <data name="DisplayName_TargetOptions_Propulsion" xml:space="preserve">
    <value>Propulsion</value>
  </data>
  <data name="DisplayName_TargetOptions_PowerSystems" xml:space="preserve">
    <value>Power systems</value>
  </data>
  <data name="BlockPropertyItem_TargetOptions_CycleSubsystems" xml:space="preserve">
    <value>Cycle Subsystems</value>
  </data>
  <data name="BlockPropertyText_Button" xml:space="preserve">
    <value>Button</value>
  </data>
  <data name="BlockPropertyText_ButtonList" xml:space="preserve">
    <value>Available buttons</value>
  </data>
  <data name="BlockPropertyText_ButtonName" xml:space="preserve">
    <value>Button name</value>
  </data>
  <data name="BlockPropertyTitle_Alignment" xml:space="preserve">
    <value>Alignment:</value>
  </data>
  <data name="BlockPropertyTitle_AssignedCamera" xml:space="preserve">
    <value>Assigned camera</value>
  </data>
  <data name="BlockPropertyTitle_AssignedPB" xml:space="preserve">
    <value>Assigned Programmable Block</value>
  </data>
  <data name="BlockPropertyTitle_Auto" xml:space="preserve">
    <value>Auto</value>
  </data>
  <data name="BlockPropertyTitle_AutoPilot" xml:space="preserve">
    <value>Autopilot</value>
  </data>
  <data name="BlockPropertyTitle_AutoPilotToolbarOpen" xml:space="preserve">
    <value>Setup Actions</value>
  </data>
  <data name="BlockPropertyTitle_AutoRefill" xml:space="preserve">
    <value>Auto-Refill</value>
  </data>
  <data name="BlockPropertyTitle_BackgroundColor" xml:space="preserve">
    <value>Backgr.</value>
  </data>
  <data name="BlockPropertyTitle_Beacons" xml:space="preserve">
    <value>Beacons</value>
  </data>
  <data name="BlockPropertyTitle_BreakForce" xml:space="preserve">
    <value>Break Force</value>
  </data>
  <data name="BlockPropertyTitle_BroadcastRadius" xml:space="preserve">
    <value>Broadcast radius</value>
  </data>
  <data name="BlockPropertyTitle_ChargeMode" xml:space="preserve">
    <value>Charge Mode</value>
  </data>
  <data name="BlockPropertyTitle_CollisionAvoidance" xml:space="preserve">
    <value>Collision avoidance</value>
  </data>
  <data name="BlockPropertyTitle_Connector_Strength" xml:space="preserve">
    <value>Strength</value>
  </data>
  <data name="BlockPropertyTitle_PanelContent" xml:space="preserve">
    <value>Content</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterAdd" xml:space="preserve">
    <value>Add</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterCandidatesList" xml:space="preserve">
    <value>Add new filter</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterFilterItemsList" xml:space="preserve">
    <value>Active filters</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterFilterMode" xml:space="preserve">
    <value>Filter Mode</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterFilterModeBlacklist" xml:space="preserve">
    <value>Blacklist</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterFilterModeWhitelist" xml:space="preserve">
    <value>Whitelist</value>
  </data>
  <data name="BlockPropertyTitle_ConveyorSorterRemove" xml:space="preserve">
    <value>Remove</value>
  </data>
  <data name="BlockPropertyTitle_Depressurize" xml:space="preserve">
    <value>Depressurize</value>
  </data>
  <data name="BlockPropertyTitle_DestinationGPS" xml:space="preserve">
    <value>Destination GPS coordinates:</value>
  </data>
  <data name="BlockPropertyTitle_Discharge" xml:space="preserve">
    <value>Discharge</value>
  </data>
  <data name="BlockPropertyTitle_EnableDockingMode" xml:space="preserve">
    <value>Precision Mode</value>
  </data>
  <data name="BlockPropertyTitle_FlightMode" xml:space="preserve">
    <value>Flight Mode</value>
  </data>
  <data name="BlockPropertyTitle_FlightMode_Circle" xml:space="preserve">
    <value>Circle</value>
  </data>
  <data name="BlockPropertyTitle_FlightMode_OneWay" xml:space="preserve">
    <value>One Way</value>
  </data>
  <data name="BlockPropertyTitle_FlightMode_Patrol" xml:space="preserve">
    <value>Patrol</value>
  </data>
  <data name="BlockPropertyTitle_SetFlightModeFormat" xml:space="preserve">
    <value>Set Flight Mode: {0}</value>
  </data>
  <data name="BlockPropertyTitle_Font" xml:space="preserve">
    <value>Font</value>
  </data>
  <data name="BlockPropertyTitle_FontColor" xml:space="preserve">
    <value>Color</value>
  </data>
  <data name="BlockPropertyTitle_Force" xml:space="preserve">
    <value>Force</value>
  </data>
  <data name="BlockPropertyTitle_ForwardDirection" xml:space="preserve">
    <value>Forward Direction</value>
  </data>
  <data name="BlockPropertyTitle_GpsLocations" xml:space="preserve">
    <value>GPS Locations</value>
  </data>
  <data name="BlockPropertyTitle_GravityAcceleration" xml:space="preserve">
    <value>Acceleration</value>
  </data>
  <data name="BlockPropertyTitle_GravityFieldDepth" xml:space="preserve">
    <value>Field depth</value>
  </data>
  <data name="BlockPropertyTitle_GravityFieldHeight" xml:space="preserve">
    <value>Field height</value>
  </data>
  <data name="BlockPropertyTitle_GravityFieldRadius" xml:space="preserve">
    <value>Radius</value>
  </data>
  <data name="BlockPropertyTitle_GravityFieldWidth" xml:space="preserve">
    <value>Field width</value>
  </data>
  <data name="BlockPropertyTitle_GyroOverride" xml:space="preserve">
    <value>Override controls</value>
  </data>
  <data name="BlockPropertyTitle_GyroPitchOverride" xml:space="preserve">
    <value>Pitch override</value>
  </data>
  <data name="BlockPropertyTitle_GyroPower" xml:space="preserve">
    <value>Power</value>
  </data>
  <data name="BlockPropertyTitle_GyroRollOverride" xml:space="preserve">
    <value>Roll override</value>
  </data>
  <data name="BlockPropertyTitle_GyroYawOverride" xml:space="preserve">
    <value>Yaw override</value>
  </data>
  <data name="BlockPropertyTitle_JumpDistance" xml:space="preserve">
    <value>Distance</value>
  </data>
  <data name="BlockPropertyTitle_LandGearAutoLock" xml:space="preserve">
    <value>Autolock</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretEnableTurretIdleMovement" xml:space="preserve">
    <value>Enable idle movement</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurret_EnableTargetLocking" xml:space="preserve">
    <value>Enable target locking</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretRadius" xml:space="preserve">
    <value>AI aiming radius</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetCharacters" xml:space="preserve">
    <value>Target characters</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetDecoys" xml:space="preserve">
    <value>Target decoys</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetLargeGrids" xml:space="preserve">
    <value>Target large ships</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetMeteors" xml:space="preserve">
    <value>Target meteors</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetMissiles" xml:space="preserve">
    <value>Target rockets</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetMoving" xml:space="preserve">
    <value>Target moving objects</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetNeutrals" xml:space="preserve">
    <value>Target neutrals</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetSmallGrids" xml:space="preserve">
    <value>Target small ships</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetStations" xml:space="preserve">
    <value>Target stations</value>
  </data>
  <data name="BlockPropertyTitle_LaserRange" xml:space="preserve">
    <value>Range</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenDefinitionsTextures" xml:space="preserve">
    <value>Loaded textures</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenRefreshInterval" xml:space="preserve">
    <value>Image change interval</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenRemoveSelectedTextures" xml:space="preserve">
    <value>Remove selected</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenSelectedTextures" xml:space="preserve">
    <value>Selected textures</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenSelectTextures" xml:space="preserve">
    <value>Add to selection</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenTextSize" xml:space="preserve">
    <value>Font Size</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenTextPadding" xml:space="preserve">
    <value>Text Padding</value>
  </data>
  <data name="BlockPropertyTitle_LCDScreenPreserveAspectRatio" xml:space="preserve">
    <value>Preserve aspect ratio</value>
  </data>
  <data name="BlockPropertyTitle_LightBlinkInterval" xml:space="preserve">
    <value>Blink Interval</value>
  </data>
  <data name="BlockPropertyTitle_LightBlinkLenght" xml:space="preserve">
    <value>Blink Length</value>
  </data>
  <data name="BlockPropertyTitle_LightBlinkOffset" xml:space="preserve">
    <value>Blink Offset</value>
  </data>
  <data name="BlockPropertyTitle_LightColor" xml:space="preserve">
    <value>Color</value>
  </data>
  <data name="BlockPropertyTitle_LightColorAtMinimalLoad" xml:space="preserve">
    <value>Color at minimal load</value>
  </data>
  <data name="BlockPropertyTitle_LightColorAtMaximalLoad" xml:space="preserve">
    <value>Color at maximal load</value>
  </data>
  <data name="BlockPropertyTitle_LightFalloff" xml:space="preserve">
    <value>Falloff</value>
  </data>
  <data name="BlockPropertyTitle_LightIntensity" xml:space="preserve">
    <value>Intensity</value>
  </data>
  <data name="BlockPropertyTitle_LightOffset" xml:space="preserve">
    <value>Offset</value>
  </data>
  <data name="BlockPropertyTitle_LightRadius" xml:space="preserve">
    <value>Radius</value>
  </data>
  <data name="BlockPropertyTitle_LightReflectorRadius" xml:space="preserve">
    <value>Reflector radius</value>
  </data>
  <data name="BlockPropertyTitle_LightReflectorRotationSpeed" xml:space="preserve">
    <value>Rotation speed</value>
  </data>
  <data name="BlockPropertyTitle_MaximalDistance" xml:space="preserve">
    <value>Maximum distance</value>
  </data>
  <data name="BlockPropertyTitle_MaxImpulseAxis" xml:space="preserve">
    <value>Max Impulse Axis</value>
  </data>
  <data name="BlockPropertyTitle_MaxImpulseNonAxis" xml:space="preserve">
    <value>Max Impulse NonAxis</value>
  </data>
  <data name="BlockPropertyTitle_MinimalDistance" xml:space="preserve">
    <value>Minimum distance</value>
  </data>
  <data name="BlockPropertyTitle_MotorBrakingTorque" xml:space="preserve">
    <value>Braking torque</value>
  </data>
  <data name="BlockPropertyTitle_MotorLock" xml:space="preserve">
    <value>Rotor lock</value>
  </data>
  <data name="BlockPropertyTitle_HingeLock" xml:space="preserve">
    <value>Hinge lock</value>
  </data>
  <data name="BlockPropertyTitle_MotorMaxAngle" xml:space="preserve">
    <value>Upper limit</value>
  </data>
  <data name="BlockPropertyTitle_MotorMinAngle" xml:space="preserve">
    <value>Lower limit</value>
  </data>
  <data name="BlockPropertyTitle_MotorRotorDisplacement" xml:space="preserve">
    <value>Rotor displacement</value>
  </data>
  <data name="BlockPropertyTitle_MotorTargetVelocity" xml:space="preserve">
    <value>Velocity</value>
  </data>
  <data name="BlockPropertyTitle_MotorTorque" xml:space="preserve">
    <value>Torque</value>
  </data>
  <data name="BlockPropertyTitle_MotorUsesWheelCommands" xml:space="preserve">
    <value>Uses wheel commands</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Damping" xml:space="preserve">
    <value>Damping</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Friction" xml:space="preserve">
    <value>Friction</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Height" xml:space="preserve">
    <value>Height Offset</value>
  </data>
  <data name="BlockPropertyTitle_Motor_InvertPropulsion" xml:space="preserve">
    <value>Invert Propulsion</value>
  </data>
  <data name="BlockPropertyTitle_Motor_InvertSteer" xml:space="preserve">
    <value>Invert Steering</value>
  </data>
  <data name="BlockPropertyTitle_Motor_MaxSteerAngle" xml:space="preserve">
    <value>Steering Angle</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Power" xml:space="preserve">
    <value>Power</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Propulsion" xml:space="preserve">
    <value>Propulsion</value>
  </data>
  <data name="BlockPropertyTitle_Motor_PropulsionOverride" xml:space="preserve">
    <value>Propulsion override</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Steering" xml:space="preserve">
    <value>Steering</value>
  </data>
  <data name="BlockPropertyTitle_Motor_SteerOverride" xml:space="preserve">
    <value>Steer override</value>
  </data>
  <data name="BlockPropertyTitle_Motor_SteerReturnSpeed" xml:space="preserve">
    <value>Steer Return Speed</value>
  </data>
  <data name="BlockPropertyTitle_Motor_SteerSpeed" xml:space="preserve">
    <value>Steering Speed</value>
  </data>
  <data name="BlockPropertyTitle_Motor_Strength" xml:space="preserve">
    <value>Strength</value>
  </data>
  <data name="BlockPropertyTitle_Motor_SuspensionSpeed" xml:space="preserve">
    <value>Speed limit</value>
  </data>
  <data name="BlockPropertyTitle_Motor_SuspensionTravel" xml:space="preserve">
    <value>Suspension Travel</value>
  </data>
  <data name="BlockPropertyTitle_OreDetectorRange" xml:space="preserve">
    <value>Range</value>
  </data>
  <data name="BlockPropertyTitle_PanelScript" xml:space="preserve">
    <value>App</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionOffsetX" xml:space="preserve">
    <value>Horizontal offset</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionOffsetY" xml:space="preserve">
    <value>Vertical offset</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionOffsetZ" xml:space="preserve">
    <value>Forward offset</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionRotationX" xml:space="preserve">
    <value>Pitch</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionRotationY" xml:space="preserve">
    <value>Yaw</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionRotationZ" xml:space="preserve">
    <value>Roll</value>
  </data>
  <data name="BlockPropertyTitle_ProjectionSpawn" xml:space="preserve">
    <value>Spawn projection</value>
  </data>
  <data name="BlockPropertyTitle_Projector_BlocksPerProjection" xml:space="preserve">
    <value>Number of blocks</value>
  </data>
  <data name="BlockPropertyTitle_Projector_BlocksPerProjection_Tooltip" xml:space="preserve">
    <value>The maximum number of blocks a projection can have when building instantly</value>
  </data>
  <data name="BlockPropertyTitle_Projector_GetOwnership" xml:space="preserve">
    <value>Ownership from projector</value>
  </data>
  <data name="BlockPropertyTitle_Projector_InstantBuilding" xml:space="preserve">
    <value>Instant building</value>
  </data>
  <data name="BlockPropertyTitle_Projector_InstantBuilding_Tooltip" xml:space="preserve">
    <value>Enable the projector to build the blueprint instantly, even in survival</value>
  </data>
  <data name="BlockPropertyTitle_Projector_NumberOfProjections" xml:space="preserve">
    <value>Number of projections</value>
  </data>
  <data name="BlockPropertyTitle_Projector_NumberOfProjections_Tooltip" xml:space="preserve">
    <value>The maximum number of projections this projector can build instantly</value>
  </data>
  <data name="BlockPropertyTitle_Projector_MarkUnfinishedBlocks" xml:space="preserve">
    <value>Mark Unfinished Blocks</value>
  </data>
  <data name="BlockPropertyTitle_Projector_MarkUnfinishedBlocks_Tooltip" xml:space="preserve">
    <value>Blocks which have been placed but not yet completed are marked on the HUD.
These markers will be visible for any missing block within 150m. 
A maximum of {0} will be displayed at any given time.</value>
  </data>
  <data name="BlockPropertyTitle_Projector_MarkMissingBlocks" xml:space="preserve">
    <value>Mark Missing Blocks</value>
  </data>
  <data name="BlockPropertyTitle_Projector_MarkMissingBlocks_Tooltip" xml:space="preserve">
    <value>Blocks which have not yet been built are marked on the HUD. 
These markers will be visible for any missing block within 150m. 
A maximum of {0} will be displayed at any given time.</value>
  </data>
  <data name="BlockPropertyTitle_Recharge" xml:space="preserve">
    <value>Recharge</value>
    <comment>Recharge checkbox in terminal (eg. on BatteryBlock).</comment>
  </data>
  <data name="BlockPropertyTitle_Refill" xml:space="preserve">
    <value>Refill Bottles</value>
  </data>
  <data name="BlockPropertyTitle_RemoteBlockSpeedLimit" xml:space="preserve">
    <value>Speed limit</value>
  </data>
  <data name="BlockPropertyTitle_SafetyDetach" xml:space="preserve">
    <value>Safety detach</value>
  </data>
  <data name="BlockPropertyTitle_Semiauto" xml:space="preserve">
    <value>Semi-auto</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectAsteroids" xml:space="preserve">
    <value>Detect asteroids</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectEnemy" xml:space="preserve">
    <value>Detect enemy</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectFloatingObjects" xml:space="preserve">
    <value>Detect floating objects</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectFriendly" xml:space="preserve">
    <value>Detect friendly</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectLargeShips" xml:space="preserve">
    <value>Detect large ships</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectNeutral" xml:space="preserve">
    <value>Detect neutral</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectOwner" xml:space="preserve">
    <value>Detect owner</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectPlayers" xml:space="preserve">
    <value>Detect players</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectSmallShips" xml:space="preserve">
    <value>Detect small ships</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectStations" xml:space="preserve">
    <value>Detect stations</value>
  </data>
  <data name="BlockPropertyTitle_SensorDetectSubgrids" xml:space="preserve">
    <value>Detect subgrids</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldDepthMax" xml:space="preserve">
    <value>Back extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldDepthMin" xml:space="preserve">
    <value>Front extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldHeightMax" xml:space="preserve">
    <value>Top extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldHeightMin" xml:space="preserve">
    <value>Bottom extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldWidthMax" xml:space="preserve">
    <value>Right extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorFieldWidthMin" xml:space="preserve">
    <value>Left extent</value>
  </data>
  <data name="BlockPropertyTitle_SensorPlaySound" xml:space="preserve">
    <value>Audible Proximity Alert</value>
  </data>
  <data name="BlockPropertyTitle_SensorToolbarOpen" xml:space="preserve">
    <value>Setup actions</value>
  </data>
  <data name="BlockPropertyTitle_ShareTensor" xml:space="preserve">
    <value>Share inertia tensor</value>
  </data>
  <data name="BlockPropertyTitle_ShowShipName" xml:space="preserve">
    <value>Show ship name</value>
  </data>
  <data name="BlockPropertyTitle_ShowTextOnScreen" xml:space="preserve">
    <value>Show text on screen</value>
  </data>
  <data name="BlockPropertyTitle_ShowSpritesOnScreen" xml:space="preserve">
    <value>Show sprites on screen</value>
  </data>
  <data name="BlockPropertyTitle_Silent" xml:space="preserve">
    <value>Silent</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockLoopTime" xml:space="preserve">
    <value>Loop time</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockPlay" xml:space="preserve">
    <value>Play</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockRange" xml:space="preserve">
    <value>Range</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockSoundList" xml:space="preserve">
    <value>Sound list</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockStop" xml:space="preserve">
    <value>Stop</value>
  </data>
  <data name="BlockPropertyTitle_SoundBlockVolume" xml:space="preserve">
    <value>Volume</value>
  </data>
  <data name="BlockPropertyTitle_Stockpile" xml:space="preserve">
    <value>Stockpile</value>
  </data>
  <data name="BlockPropertyTitle_Suspension_AirShock" xml:space="preserve">
    <value>AirShock</value>
  </data>
  <data name="BlockPropertyTitle_Suspension_Brake" xml:space="preserve">
    <value>Brake</value>
  </data>
  <data name="BlockPropertyTitle_Suspension_EnableParking" xml:space="preserve">
    <value>Allow Parking Brake</value>
  </data>
  <data name="BlockPropertyTitle_Parking_EnableParking" xml:space="preserve">
    <value>Used for parking</value>
  </data>
  <data name="BlockPropertyTitle_Parking_EnableParkingTooltip" xml:space="preserve">
    <value>Is this block triggered by the parking signal?</value>
  </data>
  <data name="BlockPropertyTitle_TextPanelAccessType" xml:space="preserve">
    <value>Access type</value>
  </data>
  <data name="BlockPropertyTitle_TextPanelPublicTitle" xml:space="preserve">
    <value>Title</value>
  </data>
  <data name="BlockPropertyTitle_TextPanelShowPublicTextPanel" xml:space="preserve">
    <value>Edit text</value>
  </data>
  <data name="BlockPropertyTitle_TextPanelShowTextPanel" xml:space="preserve">
    <value>Edit private text</value>
  </data>
  <data name="BlockPropertyTitle_TextPanelTitle" xml:space="preserve">
    <value>Private title</value>
  </data>
  <data name="BlockPropertyTitle_TerrainClearingMode" xml:space="preserve">
    <value>Terrain Clearing Mode</value>
  </data>
  <data name="BlockPropertyTitle_ThrustOverride" xml:space="preserve">
    <value>Thrust override</value>
  </data>
  <data name="BlockPropertyTitle_TimerStart" xml:space="preserve">
    <value>Start</value>
  </data>
  <data name="BlockPropertyTitle_TimerStop" xml:space="preserve">
    <value>Stop</value>
  </data>
  <data name="BlockPropertyTitle_TimerToolbarOpen" xml:space="preserve">
    <value>Setup actions</value>
  </data>
  <data name="BlockPropertyTitle_CockpitOnLockedToolbarOpen" xml:space="preserve">
    <value>Setup Action</value>
  </data>
  <data name="BlockPropertyTooltip_CockpitOnLockedToolbarOpen" xml:space="preserve">
    <value>Triggers when this grid has been target locked by any other</value>
  </data>
  <data name="BlockPropertyTitle_TimerToTrigger" xml:space="preserve">
    <value>Time to trigger: </value>
  </data>
  <data name="BlockPropertyTitle_TimerTrigger" xml:space="preserve">
    <value>Trigger now</value>
  </data>
  <data name="BlockPropertyTitle_Velocity" xml:space="preserve">
    <value>Velocity</value>
  </data>
  <data name="BlockPropertyTitle_Warning" xml:space="preserve">
    <value>Warning: </value>
  </data>
  <data name="BlockPropertyTitle_Waypoints" xml:space="preserve">
    <value>Waypoints</value>
  </data>
  <data name="BlockPropertyTitle_AvailableEffects" xml:space="preserve">
    <value>Available Effects</value>
  </data>
  <data name="BlockPropertyTitle_WeldForce" xml:space="preserve">
    <value>Safety lock override</value>
  </data>
  <data name="BlockPropertyTitle_WeldSpeed" xml:space="preserve">
    <value>Safety lock speed</value>
  </data>
  <data name="BlockPropertyTooltip_MaxImpulseAxis" xml:space="preserve">
    <value>Maximum force the piston is allowed to apply to 
blocking obstacle along it's extending axis.

High values may result in unexpected behaviour.</value>
  </data>
  <data name="BlockPropertyTooltip_MaxImpulseNonAxis" xml:space="preserve">
    <value>Maximum force the piston is allowed to apply to 
blocking obstacle along it's lateral axis

High values may result in unexpected behaviour.</value>
  </data>
  <data name="BlockPropertyTooltip_SafetyDetach" xml:space="preserve">
    <value>Safety detach</value>
  </data>
  <data name="BlockPropertyTooltip_ShareTensor" xml:space="preserve">
    <value>Equalizes virtual masses of connected grids to 
achieve more stable behaviour</value>
  </data>
  <data name="BlockPropertyValue_Locked" xml:space="preserve">
    <value>Locked</value>
  </data>
  <data name="BlockPropertyValue_MotorAngleUnlimited" xml:space="preserve">
    <value>Unlimited</value>
  </data>
  <data name="BlockPropertyValue_ReadyToLock" xml:space="preserve">
    <value>Ready To Lock</value>
  </data>
  <data name="BlockPropertyValue_Unlocked" xml:space="preserve">
    <value>Unlocked</value>
  </data>
  <data name="BlockPropertyValue_NoContent" xml:space="preserve">
    <value>No Content</value>
  </data>
  <data name="BlockPropertyValue_TextAndImageContent" xml:space="preserve">
    <value>Text and Images</value>
  </data>
  <data name="BlockPropertyValue_ScriptContent" xml:space="preserve">
    <value>Apps</value>
  </data>
  <data name="BlockSize_NotAvailable" xml:space="preserve">
    <value>This block is for {0} only</value>
  </data>
  <data name="BlueprintInfo_Author" xml:space="preserve">
    <value>Author: </value>
  </data>
  <data name="BlueprintInfo_Name" xml:space="preserve">
    <value>Name: </value>
  </data>
  <data name="BlueprintInfo_NumberOfBlocks" xml:space="preserve">
    <value>Number of blocks: </value>
  </data>
  <data name="BlueprintsScreen" xml:space="preserve">
    <value>Blueprints Screen</value>
  </data>
  <data name="BriefingTutorial01Movements" xml:space="preserve">
    <value>Learn movement essentials, how to keep your engineer alive with life support energy and oxygen and how to use each of the character tools, the welder, grinder and hand drill.</value>
  </data>
  <data name="BriefingTutorial02Inventory" xml:space="preserve">
    <value>An introduction to player and cargo inventories, how to add/withdraw items and a basic initiation to control panels and terminals for controlling block functions.</value>
  </data>
  <data name="BriefingTutorial03Energy" xml:space="preserve">
    <value>Learn how to recharge your suit energy by tackling a series of small challenges that 
  explain the behaviour of power within Space Engineers and the different ways you can provide it.</value>
  </data>
  <data name="BriefingTutorial04Oxygen" xml:space="preserve">
    <value>This tutorial covers the various oxygen related blocks, oxygen farms, generators, vents, bottles, tanks and ice, including their control panel functions. The concept of creating an airtight room for pressurization is also addressed.</value>
  </data>
  <data name="BriefingTutorial05OreRefining" xml:space="preserve">
    <value>The basics of infrastructure and industry are taught in this tutorial. You will learn how to mine ores, process them in a refinery and then commission new block components to be made in the assembler from the refined elements.</value>
  </data>
  <data name="BriefingTutorial06Conveyors" xml:space="preserve">
    <value>Setting up a good conveyor system is very useful and can save you a lot of time. Learn how to move items through conveyors and the different ways to have separate systems interact or connect with each other.</value>
  </data>
  <data name="BriefingTutorial07Jetpack" xml:space="preserve">
    <value>The jetpack tutorial displays the controls needed for flight which is followed by a series of assault course style sections to challenge your ability to fly quickly and accurately, you have a limited time from the moment you begin each section to reach the exit door. Watch out for hazards!</value>
  </data>
  <data name="BriefingTutorial08YourFirstShip" xml:space="preserve">
    <value>The true test of any engineer is the ability to build a space-worthy ship from scratch, this tutorial will provide instruction on how to build a simple one-person transport vessel. Learn how to place blocks, weld them to completion and make a simple flight, you will also be taught essential rules of ship building that you can apply to create your own designs.</value>
  </data>
  <data name="BriefingTutorial09ShipFlight" xml:space="preserve">
    <value>This tutorial offers instruction on how to fly a ship and use the three ship tools. You must use each ship in turn to navigate through several chambers that demonstrate how to grind, weld and drill as well as how to stock a weld ships cargo and how to dock with connectors.</value>
  </data>
  <data name="BriefingTutorial10Grids" xml:space="preserve">
    <value>This tutorial aims to illuminate the nature of small, large and station grids, the rules that govern them and how you can join them with the merge block. There is also a brief section on floating objects.</value>
  </data>
  <data name="BroadcastScreen_NoOwnership" xml:space="preserve">
    <value>Wrong ownership setting:</value>
  </data>
  <data name="BroadcastScreen_Ownership" xml:space="preserve">
    <value>Ownership correct</value>
  </data>
  <data name="BroadcastScreen_TakeControlButton" xml:space="preserve">
    <value>Control</value>
  </data>
  <data name="BroadcastScreen_TakeControlButtonDisabled_ToolTip" xml:space="preserve">
    <value>Cannot take control of target grid.
Hover over status icons for more info.</value>
  </data>
  <data name="BroadcastScreen_TakeControlButton_NoMainRemoteControl" xml:space="preserve">
    <value>Multiple Remote Controllers on grid. Set one as main!</value>
  </data>
  <data name="BroadcastScreen_TakeControlButton_NoRemoteToolTip" xml:space="preserve">
    <value>No Remote Controller on grid</value>
  </data>
  <data name="BroadcastScreen_TakeControlButton_RemoteToolTip" xml:space="preserve">
    <value>Remote Control ready</value>
  </data>
  <data name="BroadcastScreen_TakeControlButton_ToolTip" xml:space="preserve">
    <value>Take control of target grid</value>
  </data>
  <data name="BroadcastScreen_TerminalButton" xml:space="preserve">
    <value>Terminal</value>
  </data>
  <data name="BroadcastScreen_TerminalButtonDisabled_ToolTip" xml:space="preserve">
    <value>Cannot open terminal of target grid.
Hover over status icons for more info.</value>
  </data>
  <data name="BroadcastScreen_TerminalButton_NoStableConnectionToolTip" xml:space="preserve">
    <value>Cannot establish connection to grid</value>
  </data>
  <data name="BroadcastScreen_TerminalButton_PlayerBroadcastOffToolTip" xml:space="preserve">
    <value>Players antenna off</value>
  </data>
  <data name="BroadcastScreen_TerminalButton_StableConnectionToolTip" xml:space="preserve">
    <value>Connection stable</value>
  </data>
  <data name="BroadcastScreen_TerminalButton_ToolTip" xml:space="preserve">
    <value>Open terminal of target grid.</value>
  </data>
  <data name="BroadcastScreen_UnavailableControlButton" xml:space="preserve">
    <value>Unavailable</value>
  </data>
  <data name="BroadcastStatus_Connected" xml:space="preserve">
    <value>Remote access</value>
  </data>
  <data name="BroadcastStatus_IsPreviewGrid" xml:space="preserve">
    <value>Preview Grid</value>
  </data>
  <data name="BroadcastStatus_Me" xml:space="preserve">
    <value>Me</value>
  </data>
  <data name="BroadcastStatus_OutOfBroadcastingRange" xml:space="preserve">
    <value>Out of broadcasting range</value>
  </data>
  <data name="BroadcastStatus_OutOfReceivingRange" xml:space="preserve">
    <value>Out of receiving range</value>
  </data>
  <data name="BroadcastStatus_PhysicallyConnected" xml:space="preserve">
    <value>Direct access</value>
  </data>
  <data name="BuilderModeOff" xml:space="preserve">
    <value>Builder mode off</value>
  </data>
  <data name="BuilderModeOn" xml:space="preserve">
    <value>Builder mode on</value>
  </data>
  <data name="buttonBrowseWorkshop" xml:space="preserve">
    <value>Browse Workshop</value>
  </data>
  <data name="buttonEdit" xml:space="preserve">
    <value>Edit</value>
  </data>
  <data name="buttonOpenInWorkshop" xml:space="preserve">
    <value>Open in Workshop</value>
  </data>
  <data name="buttonPublish" xml:space="preserve">
    <value>Publish</value>
  </data>
  <data name="buttonRefresh" xml:space="preserve">
    <value>Refresh</value>
  </data>
  <data name="buttonRemove" xml:space="preserve">
    <value>Remove</value>
  </data>
  <data name="CannotFindBlueprint" xml:space="preserve">
    <value>Cannot find the blueprint file.</value>
  </data>
  <data name="CannotFindBlueprintSteam" xml:space="preserve">
    <value>Couldn't load blueprints from {0} workshop</value>
  </data>
  <data name="Characters" xml:space="preserve">
    <value>Characters</value>
  </data>
  <data name="ChatScreen_TerminalSendMessage" xml:space="preserve">
    <value>Send the message</value>
  </data>
  <data name="ChatScreen_TerminalSendMessageDisabled" xml:space="preserve">
    <value>You cannot send an empty message</value>
  </data>
  <data name="ChatScreen_TerminaMessageBox" xml:space="preserve">
    <value>Insert your message</value>
  </data>
  <data name="Chat_screen" xml:space="preserve">
    <value>Chat screen</value>
  </data>
  <data name="Cobalt" xml:space="preserve">
    <value>Cobalt</value>
  </data>
  <data name="ContainerDropSystemBeaconText" xml:space="preserve">
    <value>Container drop</value>
  </data>
  <data name="ContainerDropSystemContainerLarge" xml:space="preserve">
    <value>Strong Unknown Signal</value>
  </data>
  <data name="ContainerDropSystemContainerSmall" xml:space="preserve">
    <value>Unknown Signal</value>
  </data>
  <data name="ContainerDropSystemContainerWasDetected" xml:space="preserve">
    <value>{0} was detected.</value>
  </data>
  <data name="ControlDescBrake" xml:space="preserve">
    <value>Brake</value>
  </data>
  <data name="ControlDescCameraZoom" xml:space="preserve">
    <value>Camera zoom</value>
  </data>
  <data name="ControlDescHoldToColor" xml:space="preserve">
    <value>Color block</value>
  </data>
  <data name="ControlDescLargeBrush" xml:space="preserve">
    <value>Large color brush</value>
  </data>
  <data name="ControlDescWholeBrush" xml:space="preserve">
    <value>Color whole grid</value>
  </data>
  <data name="ControlDescLoot" xml:space="preserve">
    <value>Loot dead body</value>
  </data>
  <data name="ControlDescMediumBrush" xml:space="preserve">
    <value>Medium color brush</value>
  </data>
  <data name="ControlDescNetgraph" xml:space="preserve">
    <value>Toggle statistics</value>
  </data>
  <data name="ControlDescSingleAllMode" xml:space="preserve">
    <value>Single / All weapon mode (cockpit)</value>
  </data>
  <data name="ControlDescSpectatorSpeed" xml:space="preserve">
    <value>Changes spectator speed</value>
  </data>
  <data name="ControlDescZoom" xml:space="preserve">
    <value>Zoom in third-person mode</value>
  </data>
  <data name="ControlMenuItemLabel_CameraMode" xml:space="preserve">
    <value>Toggle Camera Mode</value>
  </data>
  <data name="ControlMenuItemValue_FPP" xml:space="preserve">
    <value>FPP</value>
  </data>
  <data name="ControlMenuItemValue_TPP" xml:space="preserve">
    <value>TPP</value>
  </data>
  <data name="ControlMenuItemLabel_CommitSuicide" xml:space="preserve">
    <value>Respawn</value>
  </data>
  <data name="ControlMenuItemLabel_QuickLoad" xml:space="preserve">
    <value>Quick Load / Reconnect</value>
  </data>
  <data name="ControlMenuItemLabel_SelectColorTool" xml:space="preserve">
    <value>Select Color Tool</value>
  </data>
  <data name="ControlMenuItemLabel_ShowColorPicker" xml:space="preserve">
    <value>Open Color Picker</value>
  </data>
  <data name="ControlMenuItemLabel_ShowToolbarScreen" xml:space="preserve">
    <value>Show Toolbar Screen</value>
  </data>
  <data name="ControlMenuItemLabel_ToggleHud" xml:space="preserve">
    <value>Toggle HUD</value>
  </data>
  <data name="ControlMenuItemLabel_PauseGame" xml:space="preserve">
    <value>Pause Game</value>
  </data>
  <data name="ControlMenuItemLabel_Wardrobe" xml:space="preserve">
    <value>Change Appearance</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelHand" xml:space="preserve">
    <value>Voxel Hand</value>
  </data>
  <data name="ControlMenuItemLabel_Broadcasting" xml:space="preserve">
    <value>Toggle Broadcasting</value>
  </data>
  <data name="ControlMenuItemLabel_BuildMode" xml:space="preserve">
    <value>Build Mode</value>
  </data>
  <data name="ControlMenuItemLabel_Connectors" xml:space="preserve">
    <value>Toggle Landing Gears / Connectors</value>
  </data>
  <data name="ControlMenuItemLabel_Dampeners" xml:space="preserve">
    <value>Toggle Dampeners</value>
  </data>
  <data name="ControlMenuItemLabel_Helmet" xml:space="preserve">
    <value>Toggle Helmet</value>
  </data>
  <data name="ControlMenuItemLabel_Jetpack" xml:space="preserve">
    <value>Jetpack</value>
  </data>
  <data name="ControlMenuItemLabel_LandingGear" xml:space="preserve">
    <value>Landing Gears</value>
  </data>
  <data name="ControlMenuItemLabel_Lights" xml:space="preserve">
    <value>Toggle Lights</value>
  </data>
  <data name="ControlMenuItemLabel_OpenInventory" xml:space="preserve">
    <value>Open Inventory</value>
  </data>
  <data name="ControlMenuItemLabel_Reactors" xml:space="preserve">
    <value>Toggle Local Power Switch</value>
  </data>
  <data name="ControlMenuItemLabel_Reactors_All" xml:space="preserve">
    <value>Toggle Power Switch</value>
  </data>
  <data name="ControlMenuItemLabel_ScenarioBriefing" xml:space="preserve">
    <value>Show Scenario Briefing</value>
  </data>
  <data name="ControlMenuItemLabel_SetupButtons" xml:space="preserve">
    <value>Setup Buttons</value>
  </data>
  <data name="ControlMenuItemLabel_ShowAdminMenu" xml:space="preserve">
    <value>Open Admin Menu</value>
  </data>
  <data name="ControlMenuItemLabel_ShowBlueprints" xml:space="preserve">
    <value>Open Blueprints Screen</value>
  </data>
  <data name="ControlMenuItemLabel_ShowBuildScreen" xml:space="preserve">
    <value>Open Build Screen</value>
  </data>
  <data name="ControlMenuItemLabel_ShowControlPanel" xml:space="preserve">
    <value>Open Control Panel</value>
  </data>
  <data name="ControlMenuItemLabel_ShowHelp" xml:space="preserve">
    <value>Open Help Screen</value>
  </data>
  <data name="ControlMenuItemLabel_ShowPlayers" xml:space="preserve">
    <value>Open Players Screen</value>
  </data>
  <data name="ControlMenuItemLabel_ShowSpawnMenu" xml:space="preserve">
    <value>Open Spawn Menu</value>
  </data>
  <data name="ControlMenuItemLabel_ShowTerminal" xml:space="preserve">
    <value>Open Terminal</value>
  </data>
  <data name="ControlMenuItemLabel_Terminal" xml:space="preserve">
    <value>Open Terminal</value>
  </data>
  <data name="ControlMenuItemLabel_Thrusts" xml:space="preserve">
    <value>Thrusters</value>
  </data>
  <data name="ControlMenuItemLabel_ShowProgressionTree" xml:space="preserve">
    <value>Open Progression Tree</value>
  </data>
  <data name="ControlMenuItemLabel_ShowHelpScreen" xml:space="preserve">
    <value>Open Help Screen</value>
  </data>
  <data name="ControlMenuItemLabel_Chat" xml:space="preserve">
    <value>Open Chat</value>
  </data>
  <data name="ControlMenuItemLabel_Respawn" xml:space="preserve">
    <value>Respawn</value>
  </data>
  <data name="RadialMenu_Label_MultiplayerOnly" xml:space="preserve">
    <value>Available only in online mode.</value>
  </data>
  <data name="ControlMenuItemLabel_BlockAutoRotate" xml:space="preserve">
    <value>Toggle Block Auto Rotation</value>
  </data>
  <data name="ControlMenuItemLabel_CopyGrid" xml:space="preserve">
    <value>Copy Grid</value>
  </data>
  <data name="ControlMenuItemLabel_CreateBlueprint" xml:space="preserve">
    <value>Create Blueprint</value>
  </data>
  <data name="ControlMenuItemLabel_CutGrid" xml:space="preserve">
    <value>Cut Grid</value>
  </data>
  <data name="ControlMenuItemLabel_PasteGrid" xml:space="preserve">
    <value>Paste Grid</value>
  </data>
  <data name="ControlMenuItemLabel_PlacementMode" xml:space="preserve">
    <value>Toggle Placement Modes</value>
  </data>
  <data name="ControlMenuItemLabel_ToggleMultiBlock" xml:space="preserve">
    <value>Toggle Multi-block Building</value>
  </data>
  <data name="ControlMenuItemLabel_ToggleSignals" xml:space="preserve">
    <value>Toggle Signal Mode</value>
  </data>
  <data name="ControlMenuItemLabel_Unequip" xml:space="preserve">
    <value>Unequip</value>
  </data>
  <data name="ControlMenuItemLabel_ViewMode" xml:space="preserve">
    <value>Toggle Spectator Mode</value>
  </data>
  <data name="ControlMenuItemLabel_SymmetrySetup" xml:space="preserve">
    <value>Enter Symmetry Setup</value>
  </data>
  <data name="ControlMenuItemLabel_ExitSymmetrySetup" xml:space="preserve">
    <value>Exit Symmetry Setup</value>
  </data>
  <data name="ControlMenuItemLabel_ColorPicker" xml:space="preserve">
    <value>Open Color Picker</value>
  </data>
  <data name="ControlMenuItemLabel_UseSymmetry" xml:space="preserve">
    <value>Toggle Symmetry Mode On/Off:</value>
  </data>
  <data name="ControlMenuItemLabel_Reload" xml:space="preserve">
    <value>Reload Game</value>
  </data>
  <data name="ControlName_Helmet" xml:space="preserve">
    <value>Helmet</value>
  </data>
  <data name="ControlName_Broadcasting" xml:space="preserve">
    <value>Broadcasting</value>
  </data>
  <data name="ControlName_Console" xml:space="preserve">
    <value>Console</value>
  </data>
  <data name="ControlName_CubeDefaultMountpoint" xml:space="preserve">
    <value>Reset orientation</value>
  </data>
  <data name="ControlName_FirePrimaryWeapon" xml:space="preserve">
    <value>Use tool / Fire weapon</value>
  </data>
  <data name="ControlName_FireSecondaryWeapon" xml:space="preserve">
    <value>Secondary mode</value>
  </data>
  <data name="ControlName_InertialDampeners" xml:space="preserve">
    <value>Inertia dampeners</value>
  </data>
  <data name="ControlName_InertialDampenersOnOff" xml:space="preserve">
    <value>Inertia dampeners on / off</value>
  </data>
  <data name="ControlName_Jetpack" xml:space="preserve">
    <value>Jetpack on / off</value>
  </data>
  <data name="ControlName_LandingGear" xml:space="preserve">
    <value>Park</value>
  </data>
  <data name="ControlName_MissionSettings" xml:space="preserve">
    <value>Scenario settings</value>
  </data>
  <data name="ControlName_PowerSwitchOnOff" xml:space="preserve">
    <value>Local power switch on / off</value>
  </data>
  <data name="ControlName_PowerSwitchOnOff_All" xml:space="preserve">
    <value>Power switch on / off</value>
  </data>
  <data name="ControlName_RollLeft" xml:space="preserve">
    <value>Roll left (ship / jetpack)</value>
  </data>
  <data name="ControlName_RollRight" xml:space="preserve">
    <value>Roll right (ship / jetpack)</value>
  </data>
  <data name="ControlName_RotationDown" xml:space="preserve">
    <value>Rotate down</value>
  </data>
  <data name="ControlName_RotationLeft" xml:space="preserve">
    <value>Rotate left</value>
  </data>
  <data name="ControlName_RotationRight" xml:space="preserve">
    <value>Rotate right</value>
  </data>
  <data name="ControlName_RotationUp" xml:space="preserve">
    <value>Rotate up</value>
  </data>
  <data name="ControlName_SymmetrySwitch" xml:space="preserve">
    <value>Symmetry setup</value>
  </data>
  <data name="ControlName_TerminalOrInventory" xml:space="preserve">
    <value>Terminal / Inventory</value>
  </data>
  <data name="ControlName_ToggleHeadlights" xml:space="preserve">
    <value>Lights on / off</value>
  </data>
  <data name="ControlName_UseSymmetry" xml:space="preserve">
    <value>Toggle symmetry</value>
  </data>
  <data name="ControlPanel" xml:space="preserve">
    <value>Control Panel</value>
  </data>
  <data name="ControlRemote" xml:space="preserve">
    <value>Control</value>
  </data>
  <data name="ControlScreen_GridBlocksLabel" xml:space="preserve">
    <value>Grid blocks:</value>
  </data>
  <data name="ControlScreen_ShareCombobox" xml:space="preserve">
    <value>Share selected blocks with another player/faction</value>
  </data>
  <data name="ControlScreen_ShareComboboxDisabled" xml:space="preserve">
    <value>You need to be owner of the block
to access it's sharing options</value>
  </data>
  <data name="ControlScreen_ShareLabel" xml:space="preserve">
    <value>Share block:</value>
  </data>
  <data name="ControlScreen_TerminalBlockGroup" xml:space="preserve">
    <value>Insert name of a new block group</value>
  </data>
  <data name="ControlScreen_TerminalBlockGroupDelete" xml:space="preserve">
    <value>Remove selected block group</value>
  </data>
  <data name="ControlScreen_TerminalBlockGroupDeleteDisabled" xml:space="preserve">
    <value>You need to select a block group
before you can remove it</value>
  </data>
  <data name="ControlScreen_TerminalBlockGroupSave" xml:space="preserve">
    <value>Create a new block group from selected blocks</value>
  </data>
  <data name="ControlScreen_TerminalBlockGroupSaveDisabled" xml:space="preserve">
    <value>You need to insert a group name  
before you can create a new block group</value>
  </data>
  <data name="ControlScreen_TransferCombobox" xml:space="preserve">
    <value>Transfer ownership of selected blocks to another player/faction</value>
  </data>
  <data name="CopyObject" xml:space="preserve">
    <value>Copy object</value>
  </data>
  <data name="CopyObjectDetached" xml:space="preserve">
    <value>Copy object detached</value>
  </data>
  <data name="CreateFromClipboard" xml:space="preserve">
    <value>Create from clipboard</value>
  </data>
  <data name="CreateManageBlueprints" xml:space="preserve">
    <value>Create/manage blueprints</value>
  </data>
  <data name="ClipboardBlueprintIsTooBig" xml:space="preserve">
    <value>Blueprint too big, preview disabled.</value>
  </data>
  <data name="CubeBuilder_CubeSizeModeChange" xml:space="preserve">
    <value>Press {0} again{1}to change block size.</value>
  </data>
  <data name="CustomShipName_LargeShip" xml:space="preserve">
    <value>Large Ship</value>
  </data>
  <data name="CustomShipName_Platform" xml:space="preserve">
    <value>Platform</value>
  </data>
  <data name="CustomShipName_SmallShip" xml:space="preserve">
    <value>Small Ship</value>
  </data>
  <data name="CustomWorld_CrashedRedShip" xml:space="preserve">
    <value>Crashed Red Ship</value>
  </data>
  <data name="CustomWorld_DeadDropArena" xml:space="preserve">
    <value>Dead Drop Arena</value>
  </data>
  <data name="CustomWorld_EasyStartAlien" xml:space="preserve">
    <value>Alien Planet</value>
  </data>
  <data name="CustomWorld_EasyStartEarth" xml:space="preserve">
    <value>Earth Planet</value>
  </data>
  <data name="CustomWorld_EasyStartGreen" xml:space="preserve">
    <value>Green Station</value>
  </data>
  <data name="CustomWorld_EasyStartMars" xml:space="preserve">
    <value>Mars Planet</value>
  </data>
  <data name="CustomWorld_EasyStartMoon" xml:space="preserve">
    <value>Moon Base</value>
  </data>
  <data name="CustomWorld_EasyStartSpace" xml:space="preserve">
    <value>Red Ship</value>
  </data>
  <data name="CustomWorld_EmptyWorld" xml:space="preserve">
    <value>Empty World</value>
  </data>
  <data name="CustomWorld_LoneSurvivor" xml:space="preserve">
    <value>Lone Survivor</value>
  </data>
  <data name="CustomWorld_RivalPlatforms" xml:space="preserve">
    <value>Rival Platforms</value>
  </data>
  <data name="CustomWorld_StarSystem" xml:space="preserve">
    <value>Star System</value>
  </data>
  <data name="CustomWorld_HomeSystem" xml:space="preserve">
    <value>Home System</value>
  </data>
  <data name="CustomWorld_AlienSystem" xml:space="preserve">
    <value>Distant Worlds</value>
  </data>
  <data name="CustomWorld_DistantMoons" xml:space="preserve">
    <value>Distant Moons</value>
  </data>
  <data name="CutObject" xml:space="preserve">
    <value>Cut object</value>
  </data>
  <data name="CutsceneToolsButton" xml:space="preserve">
    <value>Cutscenes tools</value>
  </data>
  <data name="CycleHUD" xml:space="preserve">
    <value>Cycle HUD</value>
  </data>
  <data name="Dampeners" xml:space="preserve">
    <value>Dampeners</value>
  </data>
  <data name="Default_Astronaut" xml:space="preserve">
    <value>Male Astronaut</value>
    <comment>Name of the character model in select box of wardrobe</comment>
  </data>
  <data name="Default_Astronaut_Female" xml:space="preserve">
    <value>Female Astronaut</value>
  </data>
  <data name="Space_spider_black" xml:space="preserve">
    <value>Black Spider</value>
  </data>
  <data name="Space_spider_brown" xml:space="preserve">
    <value>Brown Spider</value>
  </data>
  <data name="Space_spider_green" xml:space="preserve">
    <value>Green Spider</value>
  </data>
  <data name="Space_spider" xml:space="preserve">
    <value>Default Spider</value>
  </data>
  <data name="Space_Wolf" xml:space="preserve">
    <value>Wolf</value>
  </data>
  <data name="DisplayName_Space_spider_black" xml:space="preserve">
    <value>Black Sabiroid</value>
  </data>
  <data name="DisplayName_Space_spider_brown" xml:space="preserve">
    <value>Brown Sabiroid</value>
  </data>
  <data name="DisplayName_Space_spider_green" xml:space="preserve">
    <value>Green Sabiroid</value>
  </data>
  <data name="DisplayName_Space_spider" xml:space="preserve">
    <value>Sabiroid</value>
  </data>
  <data name="DisplayName_Space_Wolf" xml:space="preserve">
    <value>Wolf</value>
  </data>
  <data name="DefinitionError_BlockWithComputerNotTerminalBlock" xml:space="preserve">
    <value>Definition for {0} contains computer, but the block's TypeId is not a terminal block. This means that the block can be owned, but the ownership cannot be changed via terminal.
Hint: Try setting the TypeId to any block that is in the terminal - the simplest case being just TerminalBlock</value>
  </data>
  <data name="DeleteBlueprintQuestion" xml:space="preserve">
    <value>Are you sure you want to delete this blueprint?</value>
  </data>
  <data name="DeleteEntity" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="DeleteObject" xml:space="preserve">
    <value>Delete object</value>
  </data>
  <data name="Department_AdditionalArtists" xml:space="preserve">
    <value>Additional Artists</value>
  </data>
  <data name="Department_AdditionalDesigners" xml:space="preserve">
    <value>Additional Designers</value>
  </data>
  <data name="Department_AdditionalProgrammers" xml:space="preserve">
    <value>Additional Programmers</value>
  </data>
  <data name="Department_AdditionalTesters" xml:space="preserve">
    <value>Additional Testers</value>
  </data>
  <data name="Department_Artists" xml:space="preserve">
    <value>Artists</value>
  </data>
  <data name="Department_AssistantProducer" xml:space="preserve">
    <value>Assistant Producer</value>
  </data>
  <data name="Department_CommunityManagers" xml:space="preserve">
    <value>Community Managers</value>
  </data>
  <data name="Department_CommunityPr" xml:space="preserve">
    <value>Community &amp; PR Manager</value>
  </data>
  <data name="Department_XboxPort" xml:space="preserve">
    <value>Xbox Port</value>
  </data>
  <data name="Department_PlaystationPort" xml:space="preserve">
    <value>PlayStation®4 and PlayStation®5 Port</value>
  </data>
  <data name="Department_ExecutiveProducer" xml:space="preserve">
    <value>Executive Producer &amp; Creative Director</value>
  </data>
  <data name="Department_GameDesigners" xml:space="preserve">
    <value>Game Designers</value>
  </data>
  <data name="Department_LeadProducer" xml:space="preserve">
    <value>Producer</value>
  </data>
  <data name="Department_LeadProgrammers" xml:space="preserve">
    <value>Lead Programmers</value>
  </data>
  <data name="Department_LeadTester" xml:space="preserve">
    <value>QA Lead</value>
  </data>
  <data name="Department_ModContributors" xml:space="preserve">
    <value>Mod Contributors</value>
  </data>
  <data name="Department_MoreInfo" xml:space="preserve">
    <value>For more information see</value>
  </data>
  <data name="Department_Music" xml:space="preserve">
    <value>Music</value>
  </data>
  <data name="Department_Office" xml:space="preserve">
    <value>Office</value>
  </data>
  <data name="Department_Programmers" xml:space="preserve">
    <value>Programmers</value>
  </data>
  <data name="Department_SoundDesign" xml:space="preserve">
    <value>Sound Design</value>
  </data>
  <data name="Department_SpecialThanks" xml:space="preserve">
    <value>Special Thanks (in alphabetical order)</value>
  </data>
  <data name="Department_Testers" xml:space="preserve">
    <value>QA Testers</value>
  </data>
  <data name="Department_Translators" xml:space="preserve">
    <value>Translators</value>
  </data>
  <data name="Depower" xml:space="preserve">
    <value>Depower</value>
  </data>
  <data name="Description_NotAvailable" xml:space="preserve">
    <value>Context help not available.</value>
  </data>
  <data name="Description_Welder" xml:space="preserve">
    <value>A tool for building and repairing. Hold {CONTROL:ABASE:PRIMARY_TOOL_ACTION} to weld. Press {CONTROL:ABASE:SECONDARY_TOOL_ACTION} to put missing components to Build Planner.</value>
  </data>
  <data name="Description_AngleGrinder" xml:space="preserve">
    <value>A tool for deconstructing and salvaging. Hold {CONTROL:ABASE:PRIMARY_TOOL_ACTION} to grind. </value>
  </data>
  <data name="Description_HandDrill" xml:space="preserve">
    <value>A tool to break down rock to collect minerals. Hold down {CONTROL:ABASE:PRIMARY_TOOL_ACTION} to drill. Hold {CONTROL:ABASE:SECONDARY_TOOL_ACTION} to quickly dig tunnels. </value>
  </data>
  <data name="Description_Rifle" xml:space="preserve">
    <value>The MR-20 is a staple of both military and police forces. An exceptionally reliable rifle. Easy to use, easy to clean.</value>
  </data>
  <data name="Description_LightArmor" xml:space="preserve">
    <value>Basic armor to give structure and shape to ships and stations. Not very durable but lightweight. </value>
  </data>
  <data name="Description_HeavyArmor" xml:space="preserve">
    <value>Heavy armor to give structure and shape to ships and stations. Durable but heavy. </value>
  </data>
  <data name="Description_AdvancedRotor" xml:space="preserve">
    <value>Advanced rotors enable connected grids to rotate with the ability to transfer items between the grids.</value>
  </data>
  <data name="Description_AdvancedRotorPart" xml:space="preserve">
    <value>The top part of an advanced rotor can be reattached to the rotor by accessing rotor settings. </value>
  </data>
  <data name="Description_AirVent" xml:space="preserve">
    <value>The Airvent can fill a sealed room with oxygen or extract oxygen from the atmosphere.

Oxygen is produced from ice in a O2/H2 generator or by oxygen farms. 
Use an oxygen tank for storage and conveyors to connect the blocks. </value>
  </data>
  <data name="Description_RadioAntenna" xml:space="preserve">
    <value>Antennas can be used to broadcast positions, messages HUD markers and allows grids to be accessed or controlled from a distance.

Antennas need to be able to send and receive, so make sure two antennas always overlap each other's position. </value>
  </data>
  <data name="Description_VirtualMass" xml:space="preserve">
    <value>Artificial mass or spaceballs enable grids to react to artificial gravity. </value>
  </data>
  <data name="Description_Assembler" xml:space="preserve">
    <value>Assemblers are highly advanced machines capable of producing tools and components.

Requires ingots and power to produce components.</value>
  </data>
  <data name="Description_AssemblerBasic" xml:space="preserve">
    <value>A basic assembler to produce a limited selection of components. 

Requires ingots and power to produce components.</value>
  </data>
  <data name="Description_AtmosphericThrust" xml:space="preserve">
    <value>Atmospheric thrusters can only function in planetary atmospheres. </value>
  </data>
  <data name="Description_Battery" xml:space="preserve">
    <value>Batteries are able to store and distribute a high amount of energy.</value>
  </data>
  <data name="Description_Beacon" xml:space="preserve">
    <value>A beacon is used to broadcast its position.</value>
  </data>
  <data name="Description_ButtonPanel" xml:space="preserve">
    <value>Button panels enable you to bind block functions to buttons that can be directly interacted with.

When highlighted, press {CONTROL:TERMINAL} to configure the buttons and {CONTROL:USE} to activate them.</value>
  </data>
  <data name="Description_Camera" xml:space="preserve">
    <value>The camera allows you to view remote locations and zoom in on distant objects.

Set up cameras on ship toolbars so you can zoom while using weapons or look behind you while docking.</value>
  </data>
  <data name="Description_SmallCargoContainer" xml:space="preserve">
    <value>Small containers can be used to store items. </value>
  </data>
  <data name="Description_MediumCargoContainer" xml:space="preserve">
    <value>Medium containers can be used to store items. </value>
  </data>
  <data name="Description_LargeCargoContainer" xml:space="preserve">
    <value>Large containers can be used to store many items. </value>
  </data>
  <data name="Description_SteelCatwalk" xml:space="preserve">
    <value>Catwalks can be used to build walkways or function as thin walls.</value>
  </data>
  <data name="Description_Cockpit" xml:space="preserve">
    <value>Cockpits are used to control your ship.

Connect a cockpit with oxygen tanks and O2/H2 generators to supply the cockpit with oxygen. </value>
  </data>
  <data name="Description_FighterCockpit" xml:space="preserve">
    <value>Fighter cockpits are used to control ships and offer a little more protection than normal cockpits.

Connect the cockpit with Oxygen tanks and O2/H2 generators to supply the cockpit with oxygen. </value>
  </data>
  <data name="Description_Collector" xml:space="preserve">
    <value>Collectors collects items when they get close to the collector's funnel.</value>
  </data>
  <data name="Description_Connector" xml:space="preserve">
    <value>The connector can be magnetically locked with other connectors to allow cross grid distribution of items and power.

Toggle the magnetic lock from your toolbar or press {CONTROL:LANDING_GEAR}. Connectors will show up yellow when in range.  Unlocking it will briefly disable the magnetic function.</value>
  </data>
  <data name="Description_ControlPanel" xml:space="preserve">
    <value>Control panels are simple panels that allow access to grid menus.

When highlighted, press {CONTROL:TERMINAL} to interact with the panel. </value>
  </data>
  <data name="Description_ControlStation" xml:space="preserve">
    <value>Control stations are used to control a large ship.</value>
  </data>
  <data name="Descripton_ConveyorJunction" xml:space="preserve">
    <value>Use conveyor tubes and junctions to connect inventories of blocks so that items and gases can move freely from one inventory to another. </value>
  </data>
  <data name="Description_ConveyorSorter" xml:space="preserve">
    <value>Conveyor sorters can be configured to only pass specific items through or stop specific items from passing through.

Sorters can be used to filter out unwanted materials or to collect specific items in a container. </value>
  </data>
  <data name="Description_ConveyorTube" xml:space="preserve">
    <value>Use conveyor tubes and junctions to connect inventories of blocks so that items can move freely from one inventory to another. </value>
  </data>
  <data name="Description_CornerLight" xml:space="preserve">
    <value>Lights are used to illuminate interiors or can be used to act as reference points on exteriors. </value>
  </data>
  <data name="Description_CryoChamber" xml:space="preserve">
    <value>Cryo rooms can store players while they are disconnected from a server.

Reduced oxygen consumption for player. Stores toolbar while offline. Connect the cryo room with Oxygen tanks, O2/H2 generators or oxygen farms with conveyors to supply oxygen. </value>
  </data>
  <data name="Description_Decoy" xml:space="preserve">
    <value>Decoys attract fire from enemy turrets and protect your property from lightning strikes.</value>
  </data>
  <data name="Description_Door" xml:space="preserve">
    <value>Doors can seal off interiors and make them air tight while still allowing access for the player.</value>
  </data>
  <data name="Description_Drill" xml:space="preserve">
    <value>Ship drills are utility tools for mining on planets or asteroids to collect raw ores.

Can be used from a cockpit or turned on manually. Be careful not to get too close while it's active. Use conveyors to connect the drill with more storage blocks or refineries. </value>
  </data>
  <data name="Description_Ejector" xml:space="preserve">
    <value>The ejector allows small items to be ejected from small ships. Can also be used to access inventories.

You can use the ejector together with the conveyor sorter to collect and throw out specific items. </value>
  </data>
  <data name="Description_EventController" xml:space="preserve">
    <value>Event Controllers trigger actions based on block or grid conditions.</value>
  </data>
  <data name="Description_FlightSeat" xml:space="preserve">
    <value>Flight seats are used to control a large ship and access all of its functions. </value>
  </data>
  <data name="Description_FullCoverWall" xml:space="preserve">
    <value>Armored walls provide cover in interiors or can be used to prevent players from walking off ledges. </value>
  </data>
  <data name="Description_GatlingGun" xml:space="preserve">
    <value>Fast-shooting gun that can be loaded through conveyors. Uses Gatling Ammo Boxes.

Maximum range: 800 m</value>
  </data>
  <data name="Description_GatlingTurret" xml:space="preserve">
    <value>Fast-shooting turret that can be loaded through conveyors. Uses Gatling Ammo Boxes.

Maximum range: 800 m</value>
  </data>
  <data name="Description_GravityGenerator" xml:space="preserve">
    <value>Gravity generators create configurable artificial gravity fields that affect players and items in an otherwise zero G environment. Has diminishing effects when inside a real gravity field. </value>
  </data>
  <data name="Description_GravityGeneratorSphere" xml:space="preserve">
    <value>Spherical gravity generators create a configurable artificial spherical gravity field that affects players and items in an otherwise zero G environment. Has diminishing effects when inside a real gravity field. </value>
  </data>
  <data name="Description_ShipGrinder" xml:space="preserve">
    <value>Ship grinders are utility tools for deconstructing grids. Can be used from a cockpit or turned on manually. Be careful not to get too close while it's active. </value>
  </data>
  <data name="Description_Gyroscope" xml:space="preserve">
    <value>Gyroscopes allow ships to orientate using the mouse movements and stabilize rotating grids.

Build more gyroscopes to increase sensitivity and the speed that a grid can turn. </value>
  </data>
  <data name="Description_HangarDoor" xml:space="preserve">
    <value>Hangar doors can be linked together to create large gates that can seal spaces air tight while allowing vehicles in and out. 

You can build and use a button panel to open hangar doors by interacting with it or sensors to make them open and close automatically.</value>
  </data>
  <data name="Description_HydrogenTank" xml:space="preserve">
    <value>Hydrogen tanks are used for storing hydrogen fuel.

Hydrogen is used for hydrogen thrusters, engines or jetpack fuel. Hydrogen can be produced from ice in a O2/H2 generator. Can store and refill hydrogen bottles. </value>
  </data>
  <data name="Description_HydrogenThrust" xml:space="preserve">
    <value>Hydrogen thrusters are powerful thrusters that consume hydrogen and function in every environment.

Hydrogen can be produced from ice in a O2/H2 generator. Use a hydrogen tank for storage. Use Conveyors to transport the hydrogen.</value>
  </data>
  <data name="Description_InteriorLight" xml:space="preserve">
    <value>Lights are used to illuminate interiors or can be used to act as reference points on exteriors. </value>
  </data>
  <data name="Description_InteriorPillar" xml:space="preserve">
    <value>Pillars and columns can be used to reinforce structures or as decoration.</value>
  </data>
  <data name="Description_InteriorTurret" xml:space="preserve">
    <value>Autonomous anti-personnel turret. Must be manually loaded with MR-50A Rifle Magazines.

Maximum range: 800 m</value>
  </data>
  <data name="Description_InteriorWall" xml:space="preserve">
    <value>Interior walls are blocks with emissive lights to function as interior walls, ceilings or floors. </value>
  </data>
  <data name="Description_IonThrust" xml:space="preserve">
    <value>Ion thrusters are advanced thrusters that function best in zero gravity environments. </value>
  </data>
  <data name="Description_JumpDrive" xml:space="preserve">
    <value>Jump drives allow ships to teleport over large distances.

They require a full charge to jump and can only be activated from the toolbar of a cockpit. </value>
  </data>
  <data name="Description_TextPanel" xml:space="preserve">
    <value>LCD panels display pictograms or customized text.</value>
  </data>
  <data name="Description_LandingGear" xml:space="preserve">
    <value>Landing gears and Magnetic Plates are capable of magnetically locking to any surface.

They can be locked and unlocked by pressing {CONTROL:SPACESHIP:LANDING_GEAR} when inside a cockpit. They will show up yellow when in range of a surface that they can lock onto. </value>
  </data>
  <data name="Description_LaserAntenna" xml:space="preserve">
    <value>Laser antennas do not broadcast a signal that other players can see but instead require direct line of sight to function.

This antenna is connected by using GPS coordinates. </value>
  </data>
  <data name="Description_MedicalRoom" xml:space="preserve">
    <value>The Medical room enables you to respawn, change your appearance and recharge your health and energy much faster than the survival kit. </value>
  </data>
  <data name="Description_MergeBlock" xml:space="preserve">
    <value>Merge blocks can be used to permanently or temporarily connect two grids together and function as one grid.

Merge blocks will show up yellow when in range of another merge block.</value>
  </data>
  <data name="Description_MissileTurret" xml:space="preserve">
    <value>Slow-shooting, explosive damage dealing, rocket launcher that can be loaded through conveyors. Uses Rockets.

Maximum range: 800 m</value>
  </data>
  <data name="Description_ProductivityModule" xml:space="preserve">
    <value>Speed modules increase the production speed of refineries or assemblers when connected.</value>
  </data>
  <data name="Description_EffectivenessModule" xml:space="preserve">
    <value>Yield modules increase production yield of refineries when connected. </value>
  </data>
  <data name="Description_PowerEfficiencyModule" xml:space="preserve">
    <value>Power modules decrease power consumption of refineries or assemblers when connected.</value>
  </data>
  <data name="Description_OreDetector" xml:space="preserve">
    <value>Ore detectors detect ores within a limited radius and makes them show up on your HUD. </value>
  </data>
  <data name="Description_OxygenFarm" xml:space="preserve">
    <value>Hydroponics farms produce small amounts of oxygen when in contact with sunlight.

Use an oxygen tank to store oxygen. </value>
  </data>
  <data name="Description_OxygenGenerator" xml:space="preserve">
    <value>O2/H2 generators produce oxygen and hydrogen from ice.

Use oxygen and hydrogen tanks for storage. Will refill bottles automatically. </value>
  </data>
  <data name="Description_OxygenTank" xml:space="preserve">
    <value>Oxygen tank store oxygen.

Able to store and refill oxygen bottles. Use O2/H2 generator to produce oxygen. </value>
  </data>
  <data name="Description_ParachuteHatch" xml:space="preserve">
    <value>Parachute hatches deploy parachutes to slow down the descent of ships when inside the atmosphere.

Can be configured to open automatically or used manually from the toolbar or settings. </value>
  </data>
  <data name="Description_Passage" xml:space="preserve">
    <value>Passages allow passage either vertically or horizontally. </value>
  </data>
  <data name="Description_PassengerSeat" xml:space="preserve">
    <value>A passenger seat can be used to transport other players.</value>
  </data>
  <data name="Description_Piston" xml:space="preserve">
    <value>The piston is an expandable block that allows the transfer of power and items.</value>
  </data>
  <data name="Description_PistonTop" xml:space="preserve">
    <value>This piston part is the top section of the piston. It has no function of its own, but can be used decoratively.</value>
  </data>
  <data name="Description_ProgrammableBlock" xml:space="preserve">
    <value>A Programmable Block is a computer that runs scripts to manage ship systems.

Scripts can be found on the Workshop or written manually. </value>
  </data>
  <data name="Description_Projector" xml:space="preserve">
    <value>The projector block projects saved blueprints of ships so that they can be built easily. The projection requires a connection point with the projector’s grid in order to start construction.

Each projected block costs 1 PCU while the projection is active.</value>
  </data>
  <data name="Description_Ramp" xml:space="preserve">
    <value>The ramp block can be used to traverse heights or simply used for aesthetics.</value>
  </data>
  <data name="Description_Reactor" xml:space="preserve">
    <value>Reactors generate high amounts of power at the cost of refined uranium ingots.
Uranium is one of the rarest elements and cannot be found on planets. Uranium can be found in asteroids, and in some craters left by meteorite impacts. </value>
  </data>
  <data name="Description_Refinery" xml:space="preserve">
    <value>Advanced refineries refine all ores into ingots.

They can be upgraded with upgrade modules. </value>
  </data>
  <data name="Description_RefineryBasic" xml:space="preserve">
    <value>Basic refineries refines limited types of ores into ingots. </value>
  </data>
  <data name="Description_RocketLauncherReload" xml:space="preserve">
    <value>An advanced version of the rocket launcher, capable of using the conveyor system to automatically reload. Uses Rockets.

Maximum range: 800 m</value>
  </data>
  <data name="Description_RemoteControl" xml:space="preserve">
    <value>Remote controls allow ships to be controlled from a distance when combined with an antenna or commands ships to fly automatically to waypoints.</value>
  </data>
  <data name="Description_RocketLauncher" xml:space="preserve">
    <value>Slow-shooting, explosive damage dealing, rocket launcher that must be loaded manually. Uses Rockets.

Maximum range: 800 m</value>
  </data>
  <data name="Description_Rotor" xml:space="preserve">
    <value>Rotors allows connected grids to rotate. </value>
  </data>
  <data name="Description_RotorPart" xml:space="preserve">
    <value>The rotor part is the top section of the rotor.

It can be reattached with a rotor within rotor settings. </value>
  </data>
  <data name="Description_Sensor" xml:space="preserve">
    <value>Sensors can be set up to activate ship systems when they detects players, ships or asteroids within a limited range. </value>
  </data>
  <data name="Description_SolarPanel" xml:space="preserve">
    <value>Solar panels generate power when exposed to sunlight.

Point solar panels directly at the sun to improve the amount of power generated. </value>
  </data>
  <data name="Description_Sound" xml:space="preserve">
    <value>Sound blocks emit sounds when activated. </value>
  </data>
  <data name="Description_SpaceBall" xml:space="preserve">
    <value>A spherical block that reacts to gravity.</value>
  </data>
  <data name="Description_ReflectorLight" xml:space="preserve">
    <value>Spotlights are powerful lights used to illuminate dark areas.</value>
  </data>
  <data name="Description_Stairs" xml:space="preserve">
    <value>Stairs can be used to traverse heights. </value>
  </data>
  <data name="Description_Timer" xml:space="preserve">
    <value>Timer blocks can be used to activate configured ship systems after a set amount of time.

Use multiple timer blocks to build sequences. Can be used to automate systems. </value>
  </data>
  <data name="Description_Transponder" xml:space="preserve">
    <value>Action Relay blocks, in conjunction with Antennas, can trigger actions on other Action Relay blocks on other grids using the corresponding channel.</value>
  </data>
  <data name="Description_Warhead" xml:space="preserve">
    <value>Warheads are powerful explosives that can be used to destroy asteroids, enemy ships and stations.

Safe when unarmed. They can be detonated manually, by taking damage or set to detonate after a configurable amount of time. </value>
  </data>
  <data name="Description_ShipWelder" xml:space="preserve">
    <value>A Ship welder is a utility tool that can construct blueprints and blocks using components from its inventory.

Can be used from a cockpit or turned on manually. Be careful not to get too close while it's active. 
Press RMB to put missing components to Build Planner.</value>
  </data>
  <data name="Description_Wheel" xml:space="preserve">
    <value>Wheels can be used to traverse terrain in environments with gravity. </value>
  </data>
  <data name="Description_Suspension" xml:space="preserve">
    <value>Suspensions are highly durable and enable vehicles to drive over most terrains. </value>
  </data>
  <data name="Description_Window" xml:space="preserve">
    <value>Transparent windows will keep the air in and space out while you enjoy the view. </value>
  </data>
  <data name="Description_VerticalWindow" xml:space="preserve">
    <value>Vertical windows can be used to funnel air through and keep engineers out.</value>
  </data>
  <data name="Description_DiagonalWindow" xml:space="preserve">
    <value>Diagonal window shutters can be used as stairs. </value>
  </data>
  <data name="Description_SurvivalKit" xml:space="preserve">
    <value>All in one factory to get a space engineer started, but it has limited refining and assembling capabilities. Allows the player to recharge. </value>
  </data>
  <data name="Description_WindTurbine" xml:space="preserve">
    <value>The Wind turbine generates low amounts of power when exposed to open areas. Only works on planets with atmosphere. </value>
  </data>
  <data name="Description_PowerGenerator" xml:space="preserve">
    <value>The hydrogen engine converts hydrogen into power and has its own internal hydrogen tank. </value>
  </data>
  <data name="Description_Ladder" xml:space="preserve">
    <value>The ladder enables you to traverse vertical spaces. </value>
  </data>
  <data name="Description_Desk" xml:space="preserve">
    <value>A desk for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_DeskCorner" xml:space="preserve">
    <value>A desk for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_DeskChairless" xml:space="preserve">
    <value>A desk for decorating interiors.</value>
  </data>
  <data name="Description_DeskChairlessCorner" xml:space="preserve">
    <value>A desk for decorating interiors.</value>
  </data>
  <data name="Description_FoodDispenser" xml:space="preserve">
    <value>A vending machine used to distract engineers from the hazards of space and boost morale.</value>
  </data>
  <data name="Description_Jukebox" xml:space="preserve">
    <value>A device that plays music. Great for hosting dance parties or winding down after a hard day’s work.</value>
  </data>
  <data name="Description_OpenCockpitLarge" xml:space="preserve">
    <value>Seat in between lots of consoles. More like a bridge seat.</value>
  </data>
  <data name="Description_OpenCockpitSmall" xml:space="preserve">
    <value>This control seat can be used to pilot anything from modest rovers to small-scale ships; they're also exceptionally comfortable.</value>
  </data>
  <data name="Description_LabEquipment" xml:space="preserve">
    <value>Whether you’re conducting experiments or you simply want to look smart, lab equipment is perfect for decorating interiors.</value>
  </data>
  <data name="Description_Shower" xml:space="preserve">
    <value>A shower for decorating interiors and an ideal place to practice singing. Show everyone you care about hygiene.</value>
  </data>
  <data name="Description_WindowWall" xml:space="preserve">
    <value>Transparent windows will keep the air inside and space outside while you enjoy the view in style.</value>
  </data>
  <data name="Description_WindowWallLeft" xml:space="preserve">
    <value>Transparent windows will keep the air inside and space outside while you enjoy the view in style.</value>
  </data>
  <data name="Description_WindowWallRight" xml:space="preserve">
    <value>Transparent windows will keep the air inside and space outside while you enjoy the view in style.</value>
  </data>
  <data name="Description_MedicalStation" xml:space="preserve">
    <value>A decorative station that allows engineers to examine their injuries.</value>
  </data>
  <data name="Description_TransparentLCD" xml:space="preserve">
    <value>Transparent LCD panels display pictograms, scripts or customized text.</value>
  </data>
  <data name="Description_RailingStraight" xml:space="preserve">
    <value>Railings stop engineers from falling off dangerous ledges. Safety first!</value>
  </data>
  <data name="Description_RailingDouble" xml:space="preserve">
    <value>Railings stop engineers from falling off dangerous ledges. Safety first!</value>
  </data>
  <data name="Description_RailingCorner" xml:space="preserve">
    <value>Railings stop engineers from falling off dangerous ledges. Safety first!</value>
  </data>
  <data name="Description_RailingDiagonal" xml:space="preserve">
    <value>Railings stop engineers from falling off dangerous ledges. Safety first!</value>
  </data>
  <data name="Description_GratedCatwalk" xml:space="preserve">
    <value>Catwalks can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_GratedCatwalkCorner" xml:space="preserve">
    <value>Catwalks can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_GratedCatwalkStraight" xml:space="preserve">
    <value>Catwalks can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_GratedCatwalkWall" xml:space="preserve">
    <value>Catwalks can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_GratedStairs" xml:space="preserve">
    <value>Stairs can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_GratedHalfStairs" xml:space="preserve">
    <value>Stairs can be used to create safe walkways throughout your creations.</value>
  </data>
  <data name="Description_RotatingLight" xml:space="preserve">
    <value>A rotating light to alert engineers of hazardous situations.</value>
  </data>
  <data name="Description_Freight" xml:space="preserve">
    <value>Crates left scattered around, indicating hard working engineers have been working in the area.</value>
  </data>
  <data name="Description_Kitchen" xml:space="preserve">
    <value>A kitchen for decorating interiors.</value>
  </data>
  <data name="Description_Planters" xml:space="preserve">
    <value>A planter for decorating interiors. </value>
  </data>
  <data name="Description_Lockers" xml:space="preserve">
    <value>Personalized lockers for decorating interiors and store your essentials. </value>
  </data>
  <data name="Description_LockerRoom" xml:space="preserve">
    <value>A locker to store tools, weapons, ammunition and bottles. </value>
  </data>
  <data name="Description_LockerRoomCorner" xml:space="preserve">
    <value>A locker to store tools, weapons, ammunition and bottles. </value>
  </data>
  <data name="Description_Couch" xml:space="preserve">
    <value>A couch for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_CornerCouch" xml:space="preserve">
    <value>A couch for decorating interior corners. Can be used as a seat.</value>
  </data>
  <data name="Description_Bathroom" xml:space="preserve">
    <value>A toilet for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_BathroomOpen" xml:space="preserve">
    <value>A toilet for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_ToiletSeat" xml:space="preserve">
    <value>A toilet for decorating interiors. Can be used as a seat.</value>
  </data>
  <data name="Description_Console" xml:space="preserve">
    <value>A console table for decorating interiors, projecting ships and stations in custom scale, as well as displaying pictograms or customized text on its displays.</value>
  </data>
  <data name="Description_CockpitIndustrial" xml:space="preserve">
    <value>Cockpits are used to control your ship.

Connect a cockpit with oxygen tanks and O2/H2 generators to supply the cockpit with oxygen. </value>
  </data>
  <data name="Description_CockpitFlush" xml:space="preserve">
    <value>flush cockpit placeholder</value>
  </data>
  <data name="Description_Bed" xml:space="preserve">
    <value>A bed for decorating interiors. Can preserve the players' inventory and toolbar while they're offline and keeps them alive as long as there is oxygen available in environment.</value>
  </data>
  <data name="DetailScreen_Button_Close" xml:space="preserve">
    <value>Close</value>
  </data>
  <data name="DetailScreen_Button_Delete" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="DetailScreen_Button_OpenInWorkshop" xml:space="preserve">
    <value>Open In Workshop</value>
  </data>
  <data name="DetailScreen_Button_OpenWorkshop" xml:space="preserve">
    <value>Open Workshop</value>
  </data>
  <data name="DetailScreen_Button_Publish" xml:space="preserve">
    <value>Publish</value>
  </data>
  <data name="DetailScreen_Button_Rename" xml:space="preserve">
    <value>Rename</value>
  </data>
  <data name="DetailScreen_Button_SendToPlayer" xml:space="preserve">
    <value>Send to Player:</value>
  </data>
  <data name="DetectedEntity_Asteroid" xml:space="preserve">
    <value>Asteroid</value>
  </data>
  <data name="DetectedEntity_CharacterHuman" xml:space="preserve">
    <value>Human</value>
  </data>
  <data name="DetectedEntity_CharacterOther" xml:space="preserve">
    <value>Animal</value>
  </data>
  <data name="DetectedEntity_LargeGrid" xml:space="preserve">
    <value>Large Grid</value>
  </data>
  <data name="DetectedEntity_Meteor" xml:space="preserve">
    <value>Meteor</value>
  </data>
  <data name="DetectedEntity_Planet" xml:space="preserve">
    <value>Planet</value>
  </data>
  <data name="DetectedEntity_SmallGrid" xml:space="preserve">
    <value>Small Grid</value>
  </data>
  <data name="DetectedEntity_Unknown" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="DialogTextJoinBattleFailed" xml:space="preserve">
    <value>Joining battle failed, reason: {0}</value>
  </data>
  <data name="DialogTextJoiningBattle" xml:space="preserve">
    <value>Joining battle</value>
  </data>
  <data name="DialogTextJoiningScenario" xml:space="preserve">
    <value>Joining scenario</value>
  </data>
  <data name="DialogText_RunArgument" xml:space="preserve">
    <value>Argument</value>
  </data>
  <data name="Difficulty" xml:space="preserve">
    <value>Difficulty</value>
  </data>
  <data name="DifficultyEasy" xml:space="preserve">
    <value>Easy</value>
  </data>
  <data name="DifficultyHard" xml:space="preserve">
    <value>Hard</value>
  </data>
  <data name="DifficultyNormal" xml:space="preserve">
    <value>Normal</value>
  </data>
  <data name="DisableTransformation" xml:space="preserve">
    <value>Disable Transformation</value>
  </data>
  <data name="DisplayName" xml:space="preserve">
    <value>DisplayName</value>
  </data>
  <data name="DisplayName_AlienLander" xml:space="preserve">
    <value>Alien Planet Landing</value>
  </data>
  <data name="DisplayName_Animation_SpiderAttackBite" xml:space="preserve">
    <value>Bite attack</value>
  </data>
  <data name="DisplayName_Animation_SpiderAttackLegs" xml:space="preserve">
    <value>Leg attack</value>
  </data>
  <data name="DisplayName_Animation_SpiderAttackStinger" xml:space="preserve">
    <value>Stinger attack</value>
  </data>
  <data name="DisplayName_Animation_SpiderBurrow" xml:space="preserve">
    <value>Burrow</value>
  </data>
  <data name="DisplayName_Animation_SpiderDeburrow" xml:space="preserve">
    <value>Deburrow</value>
  </data>
  <data name="DisplayName_Animation_ThumbUp" xml:space="preserve">
    <value>Thumb-Up</value>
  </data>
  <data name="DisplayName_Animation_Victory" xml:space="preserve">
    <value>Victory</value>
  </data>
  <data name="DisplayName_Animation_Wave" xml:space="preserve">
    <value>Wave Animation</value>
  </data>
  <data name="DisplayName_AstronautBackpack" xml:space="preserve">
    <value>Backpack</value>
  </data>
  <data name="DisplayName_Block_AdvancedRotor" xml:space="preserve">
    <value>Advanced Rotor</value>
  </data>
  <data name="DisplayName_Block_AdvancedRotorPart" xml:space="preserve">
    <value>Advanced Rotor Part</value>
  </data>
  <data name="DisplayName_Block_AirtightHangarDoor" xml:space="preserve">
    <value>Airtight Hangar Door</value>
  </data>
  <data name="DisplayName_Block_AirtightSlideDoor" xml:space="preserve">
    <value>Sliding Door</value>
  </data>
  <data name="DisplayName_Block_AirVent" xml:space="preserve">
    <value>Air Vent</value>
  </data>
  <data name="DisplayName_Block_Ammo_Assembler" xml:space="preserve">
    <value>Ammo Assembler</value>
  </data>
  <data name="DisplayName_Block_Antenna" xml:space="preserve">
    <value>Antenna</value>
  </data>
  <data name="DisplayName_Block_Arc_Furnace" xml:space="preserve">
    <value>Basic Refinery</value>
  </data>
  <data name="DisplayName_Block_ArmorCenter" xml:space="preserve">
    <value>Blast Doors</value>
  </data>
  <data name="DisplayName_Block_ArmorCorner" xml:space="preserve">
    <value>Blast Door Corner</value>
  </data>
  <data name="DisplayName_Block_ArmorInvCorner" xml:space="preserve">
    <value>Blast Door Corner Inverted</value>
  </data>
  <data name="DisplayName_Block_ArmorSide" xml:space="preserve">
    <value>Blast Door Edge</value>
  </data>
  <data name="DisplayName_Block_BasicAssembler" xml:space="preserve">
    <value>Basic Assembler</value>
  </data>
  <data name="DisplayName_Block_Assembler" xml:space="preserve">
    <value>Assembler</value>
  </data>
  <data name="DisplayName_Block_Base_Components_Assembler" xml:space="preserve">
    <value>Base Assembler Comp.</value>
  </data>
  <data name="DisplayName_Block_Battery" xml:space="preserve">
    <value>Battery</value>
  </data>
  <data name="DisplayName_Block_Beacon" xml:space="preserve">
    <value>Beacon</value>
  </data>
  <data name="DisplayName_Block_Big_Arc_Furnace" xml:space="preserve">
    <value>Big Arc Furnace</value>
  </data>
  <data name="DisplayName_Block_Big_Gas_Centrifugal_Refinery" xml:space="preserve">
    <value>Big Gas Centrifugal Refinery</value>
  </data>
  <data name="DisplayName_Block_Big_Precious_Furnace" xml:space="preserve">
    <value>Big Noble Metals Furnace</value>
  </data>
  <data name="DisplayName_Block_Big_Solids_Refinery" xml:space="preserve">
    <value>Big Solids Refinery</value>
  </data>
  <data name="DisplayName_Block_ButtonPanel" xml:space="preserve">
    <value>Button Panel</value>
  </data>
  <data name="DisplayName_Block_Camera" xml:space="preserve">
    <value>Camera</value>
  </data>
  <data name="DisplayName_Block_Cockpit1" xml:space="preserve">
    <value>Cockpit</value>
  </data>
  <data name="DisplayName_Block_Cockpit2" xml:space="preserve">
    <value>Control Station</value>
  </data>
  <data name="DisplayName_Block_Cockpit3" xml:space="preserve">
    <value>Flight Seat</value>
  </data>
  <data name="DisplayName_Block_Collector" xml:space="preserve">
    <value>Collector</value>
  </data>
  <data name="DisplayName_Block_Connector" xml:space="preserve">
    <value>Connector</value>
  </data>
  <data name="DisplayName_Block_ConnectorSmall" xml:space="preserve">
    <value>Small Connector</value>
  </data>
  <data name="DisplayName_Block_Construction_Components_Assembler" xml:space="preserve">
    <value>Construction Assembler Comp.</value>
  </data>
  <data name="DisplayName_Block_ControlPanel" xml:space="preserve">
    <value>Control Panel</value>
  </data>
  <data name="DisplayName_Block_Conveyor" xml:space="preserve">
    <value>Conveyor Junction</value>
  </data>
  <data name="DisplayName_Block_ConveyorFrame" xml:space="preserve">
    <value>Conveyor Frame</value>
  </data>
  <data name="DisplayName_Block_ConveyorSmall" xml:space="preserve">
    <value>Small Conveyor</value>
  </data>
  <data name="DisplayName_Block_ConveyorSorter" xml:space="preserve">
    <value>Conveyor Sorter</value>
  </data>
  <data name="DisplayName_Block_ConveyorTube" xml:space="preserve">
    <value>Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeCurved" xml:space="preserve">
    <value>Curved Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeCurvedSmall" xml:space="preserve">
    <value>Small Curved Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeMedium" xml:space="preserve">
    <value>Medium Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeSmall" xml:space="preserve">
    <value>Small Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_CornerLCD" xml:space="preserve">
    <value>Corner LCD Top</value>
  </data>
  <data name="DisplayName_Block_CornerLCD2" xml:space="preserve">
    <value>Corner LCD Bottom</value>
  </data>
  <data name="DisplayName_Block_CornerLCDFlatBottom" xml:space="preserve">
    <value>Corner LCD Flat Bottom</value>
  </data>
  <data name="DisplayName_Block_CornerLCDFlatTop" xml:space="preserve">
    <value>Corner LCD Flat Top</value>
  </data>
  <data name="DisplayName_Block_CornerLight" xml:space="preserve">
    <value>Corner Light</value>
  </data>
  <data name="DisplayName_Block_CornerLightDouble" xml:space="preserve">
    <value>Corner Light - Double</value>
  </data>
  <data name="DisplayName_Block_CryoChamber" xml:space="preserve">
    <value>Cryo Chamber</value>
  </data>
  <data name="DisplayName_Block_DebugSphere1" xml:space="preserve">
    <value>Debug spheres 1</value>
  </data>
  <data name="DisplayName_Block_DebugSphere2" xml:space="preserve">
    <value>Debug spheres 2 (no metal)</value>
  </data>
  <data name="DisplayName_Block_DebugSphere3" xml:space="preserve">
    <value>Debug spheres 3 (fixed gloss)</value>
  </data>
  <data name="DisplayName_Block_Decoy" xml:space="preserve">
    <value>Decoy</value>
  </data>
  <data name="DisplayName_Block_DiagonalWindow" xml:space="preserve">
    <value>Diagonal Window</value>
  </data>
  <data name="DisplayName_Block_Door" xml:space="preserve">
    <value>Door</value>
  </data>
  <data name="DisplayName_Block_Drill" xml:space="preserve">
    <value>Drill</value>
  </data>
  <data name="DisplayName_Block_EffectivenessModule" xml:space="preserve">
    <value>Yield Module</value>
  </data>
  <data name="DisplayName_Block_Electronics_Assembler" xml:space="preserve">
    <value>Electronics Assembler</value>
  </data>
  <data name="DisplayName_Block_EventController" xml:space="preserve">
    <value>Event Controller</value>
  </data>
  <data name="DisplayName_Block_FighterCockpit" xml:space="preserve">
    <value>Fighter Cockpit</value>
  </data>
  <data name="DisplayName_Block_FoodDispenser" xml:space="preserve">
    <value>Dispenser</value>
  </data>
  <data name="DisplayName_Block_LabEquipment" xml:space="preserve">
    <value>Lab Equipment</value>
  </data>
  <data name="DisplayName_Block_LabEquipment1" xml:space="preserve">
    <value>Lab Experiment A</value>
  </data>
  <data name="DisplayName_Block_LabEquipment2" xml:space="preserve">
    <value>Lab Experiment B</value>
  </data>
  <data name="DisplayName_Block_LabEquipment3" xml:space="preserve">
    <value>Lab Experiment C</value>
  </data>
  <data name="DisplayName_Block_Shower" xml:space="preserve">
    <value>Shower</value>
  </data>
  <data name="DisplayName_Block_Jukebox" xml:space="preserve">
    <value>Jukebox</value>
  </data>
  <data name="DisplayName_Block_WindowWall" xml:space="preserve">
    <value>Window Wall</value>
  </data>
  <data name="DisplayName_Block_WindowWallLeft" xml:space="preserve">
    <value>Window Wall Left</value>
  </data>
  <data name="DisplayName_Block_WindowWallRight" xml:space="preserve">
    <value>Window Wall Right</value>
  </data>
  <data name="DisplayName_Block_MedicalStation" xml:space="preserve">
    <value>Medical Station</value>
  </data>
  <data name="DisplayName_Block_TransparentLCD" xml:space="preserve">
    <value>Transparent LCD</value>
  </data>
  <data name="DisplayName_Block_RailingStraight" xml:space="preserve">
    <value>Railing Straight</value>
  </data>
  <data name="DisplayName_Block_RailingDouble" xml:space="preserve">
    <value>Railing Double</value>
  </data>
  <data name="DisplayName_Block_RailingCorner" xml:space="preserve">
    <value>Railing Corner</value>
  </data>
  <data name="DisplayName_Block_RailingDiagonal" xml:space="preserve">
    <value>Railing Diagonal</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalk" xml:space="preserve">
    <value>Grated Catwalk</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkCorner" xml:space="preserve">
    <value>Grated Catwalk Corner</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkStraight" xml:space="preserve">
    <value>Grated Catwalk Straight</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkWall" xml:space="preserve">
    <value>Grated Catwalk Wall</value>
  </data>
  <data name="DisplayName_Block_GratedStairs" xml:space="preserve">
    <value>Grated Stairs</value>
  </data>
  <data name="DisplayName_Block_GratedHalfStairs" xml:space="preserve">
    <value>Grated Half Stairs</value>
  </data>
  <data name="DisplayName_Block_RotatingLight" xml:space="preserve">
    <value>Rotating Light</value>
  </data>
  <data name="DisplayName_Block_Freight1" xml:space="preserve">
    <value>Freight 1</value>
  </data>
  <data name="DisplayName_Block_Freight2" xml:space="preserve">
    <value>Freight 2</value>
  </data>
  <data name="DisplayName_Block_Freight3" xml:space="preserve">
    <value>Freight 3</value>
  </data>
  <data name="DisplayName_Block_FullCoverWall" xml:space="preserve">
    <value>Cover Walls</value>
  </data>
  <data name="DisplayName_Block_GatlingGun" xml:space="preserve">
    <value>Gatling Gun</value>
  </data>
  <data name="DisplayName_Block_GatlingTurret" xml:space="preserve">
    <value>Gatling Turret</value>
  </data>
  <data name="DisplayName_Block_GravityGenerator" xml:space="preserve">
    <value>Gravity Generator</value>
  </data>
  <data name="DisplayName_Block_GravityGeneratorSphere" xml:space="preserve">
    <value>Spherical Gravity Generator</value>
  </data>
  <data name="DisplayName_Block_Gyroscope" xml:space="preserve">
    <value>Gyroscope</value>
  </data>
  <data name="DisplayName_Block_HalfCoverWall" xml:space="preserve">
    <value>Half Cover Wall</value>
  </data>
  <data name="DisplayName_Block_HalfHeavyArmorBlock" xml:space="preserve">
    <value>Half Heavy Armor Block</value>
  </data>
  <data name="DisplayName_Block_HalfLightArmorBlock" xml:space="preserve">
    <value>Half Light Armor Block</value>
  </data>
  <data name="DisplayName_Block_HalfSlopeHeavyArmorBlock" xml:space="preserve">
    <value>Half Slope Heavy Armor Block</value>
  </data>
  <data name="DisplayName_Block_HalfSlopeLightArmorBlock" xml:space="preserve">
    <value>Half Slope Light Armor Block</value>
  </data>
  <data name="DisplayName_Block_HeavyAngledArmorCorner" xml:space="preserve">
    <value>Angled Heavy Armor Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyAngledArmorSlope" xml:space="preserve">
    <value>Angled Heavy Armor Slope</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorBlock" xml:space="preserve">
    <value>Heavy Armor Block</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner" xml:space="preserve">
    <value>Heavy Armor Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2Base" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2BaseSmooth" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2Smooth" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2Tip" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCorner2TipSmooth" xml:space="preserve">
    <value>Heavy Armor Corner 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner" xml:space="preserve">
    <value>Heavy Armor Inv. Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2Base" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2BaseSmooth" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2Smooth" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2Tip" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorInvCorner2TipSmooth" xml:space="preserve">
    <value>Heavy Armor Inv. Corner 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope" xml:space="preserve">
    <value>Heavy Armor Slope</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2Base" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2BaseSmooth" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2Smooth" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2Tip" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlope2TipSmooth" xml:space="preserve">
    <value>Heavy Armor Slope 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_HeavyRoundArmorCorner" xml:space="preserve">
    <value>Heavy Armor Round Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyRoundArmorInvCorner" xml:space="preserve">
    <value>Heavy Armor Round Inv. Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyRoundArmorSlope" xml:space="preserve">
    <value>Heavy Armor Round Slope</value>
  </data>
  <data name="DisplayName_Block_HeavyRoundedArmorCorner" xml:space="preserve">
    <value>Rounded Heavy Armor Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyRoundedArmorSlope" xml:space="preserve">
    <value>Rounded Heavy Armor Slope</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfSlopeInverted" xml:space="preserve">
    <value>Half Slope Inv. Light Armor</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfSlopeInverted" xml:space="preserve">
    <value>Half Slope Inv. Heavy Armor</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfSlopeCorner" xml:space="preserve">
    <value>Half Slope Corner Light Armor</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfSlopeCorner" xml:space="preserve">
    <value>Half Slope Corner Heavy Armor</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfSlopeCornerInverted" xml:space="preserve">
    <value>Half Slope Corner Inv. Light Armor</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfSlopeCornerInverted" xml:space="preserve">
    <value>Half Slope Corner Inv. Heavy Armor</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopedCornerTip" xml:space="preserve">
    <value>Sloped Corner Light Armor Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopedCornerTip" xml:space="preserve">
    <value>Sloped Corner Heavy Armor Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopedCornerBase" xml:space="preserve">
    <value>Light Armor Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopedCornerBase" xml:space="preserve">
    <value>Heavy Armor Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopedCorner" xml:space="preserve">
    <value>Light Armor Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopedCorner" xml:space="preserve">
    <value>Heavy Armor Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfSlopedCornerBase" xml:space="preserve">
    <value>Light Armor Half Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfSlopedCornerBase" xml:space="preserve">
    <value>Heavy Armor Half Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfCorner" xml:space="preserve">
    <value>Light Armor Half Corner Block</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfCorner" xml:space="preserve">
    <value>Heavy Armor Half Corner Block</value>
  </data>
  <data name="DisplayName_Block_LightArmorCornerSquare" xml:space="preserve">
    <value>Light Armor Corner Square Block</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCornerSquare" xml:space="preserve">
    <value>Heavy Armor Corner Square Block</value>
  </data>
  <data name="DisplayName_Block_LightArmorCornerSquareInverted" xml:space="preserve">
    <value>Light Armor Corner Square Inv. Block</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorCornerSquareInverted" xml:space="preserve">
    <value>Heavy Armor Corner Square Inv. Block</value>
  </data>
  <data name="DisplayName_Block_LightArmorHalfSlopedCorner" xml:space="preserve">
    <value>Light Armor Half Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorHalfSlopedCorner" xml:space="preserve">
    <value>Heavy Armor Half Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_HydrogenTank" xml:space="preserve">
    <value>Hydrogen Tank</value>
  </data>
  <data name="DisplayName_Block_HydrogenTankSmall" xml:space="preserve">
    <value>Small Hydrogen Tank</value>
  </data>
  <data name="DisplayName_Block_InteriorLight" xml:space="preserve">
    <value>Interior Light</value>
  </data>
  <data name="DisplayName_Block_InteriorPillar" xml:space="preserve">
    <value>Interior Pillar</value>
  </data>
  <data name="DisplayName_Block_InteriorTurret" xml:space="preserve">
    <value>Interior Turret</value>
  </data>
  <data name="DisplayName_Block_InteriorWall" xml:space="preserve">
    <value>Interior Wall</value>
  </data>
  <data name="DisplayName_Block_JumpDrive" xml:space="preserve">
    <value>Jump Drive</value>
  </data>
  <data name="DisplayName_Block_LandingGear" xml:space="preserve">
    <value>Landing Gear</value>
  </data>
  <data name="DisplayName_Block_LargeAtmoThrust" xml:space="preserve">
    <value>Large Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_LargeAtmoThrustSciFi" xml:space="preserve">
    <value>Sci-Fi Large Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallAtmoThrustSciFi" xml:space="preserve">
    <value>Sci-Fi Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_LargeCargoContainer" xml:space="preserve">
    <value>Large Cargo Container</value>
  </data>
  <data name="DisplayName_Block_LargeHydrogenThrust" xml:space="preserve">
    <value>Large Hydrogen Thruster</value>
  </data>
  <data name="DisplayName_Block_LargeReactor" xml:space="preserve">
    <value>Large Reactor</value>
  </data>
  <data name="DisplayName_Block_LargeThrust" xml:space="preserve">
    <value>Large Ion Thruster</value>
  </data>
  <data name="DisplayName_Block_LaserAntenna" xml:space="preserve">
    <value>Laser Antenna</value>
  </data>
  <data name="DisplayName_Block_LightAngledArmorCorner" xml:space="preserve">
    <value>Angled Armor Corner</value>
  </data>
  <data name="DisplayName_Block_LightAngledArmorSlope" xml:space="preserve">
    <value>Angled Armor Slope</value>
  </data>
  <data name="DisplayName_Block_LightArmorBlock" xml:space="preserve">
    <value>Light Armor Block</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner" xml:space="preserve">
    <value>Light Armor Corner</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2" xml:space="preserve">
    <value>Light Armor Corner 2x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2Base" xml:space="preserve">
    <value>Light Armor Corner 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2BaseSmooth" xml:space="preserve">
    <value>Light Armor Corner 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2Smooth" xml:space="preserve">
    <value>Light Armor Corner 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2Tip" xml:space="preserve">
    <value>Light Armor Corner 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner2TipSmooth" xml:space="preserve">
    <value>Light Armor Corner 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner3" xml:space="preserve">
    <value>Light Armor Corner 3x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorCorner3Smooth" xml:space="preserve">
    <value>Light Armor Corner 3x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner" xml:space="preserve">
    <value>Light Armor Inv. Corner</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2Base" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2BaseSmooth" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2Smooth" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2Tip" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner2TipSmooth" xml:space="preserve">
    <value>Light Armor Inv. Corner 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner3" xml:space="preserve">
    <value>Light Armor Inv. Corner 3x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorInvCorner3Smooth" xml:space="preserve">
    <value>Light Armor Inv. Corner 3x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope" xml:space="preserve">
    <value>Light Armor Slope</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2" xml:space="preserve">
    <value>Light Armor Slope 2x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2Base" xml:space="preserve">
    <value>Light Armor Slope 2x1x1 Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2BaseSmooth" xml:space="preserve">
    <value>Light Armor Slope 2x1x1 Base Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2Smooth" xml:space="preserve">
    <value>Light Armor Slope 2x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2Tip" xml:space="preserve">
    <value>Light Armor Slope 2x1x1 Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope2TipSmooth" xml:space="preserve">
    <value>Light Armor Slope 2x1x1 Tip Smooth</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope3" xml:space="preserve">
    <value>Light Armor Slope 3x1x1</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlope3Smooth" xml:space="preserve">
    <value>Light Armor Slope 3x1x1 Smooth</value>
  </data>
  <data name="DisplayName_Block_LightRoundArmorCorner" xml:space="preserve">
    <value>Round Armor Corner</value>
  </data>
  <data name="DisplayName_Block_LightRoundArmorInvCorner" xml:space="preserve">
    <value>Round Armor Inv. Corner</value>
  </data>
  <data name="DisplayName_Block_LightRoundArmorSlope" xml:space="preserve">
    <value>Round Armor Slope</value>
  </data>
  <data name="DisplayName_Block_LightRoundedArmorCorner" xml:space="preserve">
    <value>Rounded Armor Corner</value>
  </data>
  <data name="DisplayName_Block_LightRoundedArmorSlope" xml:space="preserve">
    <value>Rounded Armor Slope</value>
  </data>
  <data name="DisplayName_Block_MedicalRoom" xml:space="preserve">
    <value>Medical Room</value>
  </data>
  <data name="DisplayName_Block_MediumCargoContainer" xml:space="preserve">
    <value>Medium Cargo Container</value>
  </data>
  <data name="DisplayName_Block_MergeBlock" xml:space="preserve">
    <value>Merge Block</value>
  </data>
  <data name="DisplayName_Block_MissileTurret" xml:space="preserve">
    <value>Rocket Turret</value>
  </data>
  <data name="DisplayName_Block_OpenCockpitLarge" xml:space="preserve">
    <value>Control Seat</value>
  </data>
  <data name="DisplayName_Block_OpenCockpitSmall" xml:space="preserve">
    <value>Control Seat</value>
  </data>
  <data name="DisplayName_Block_OreDetector" xml:space="preserve">
    <value>Ore Detector</value>
  </data>
  <data name="DisplayName_Block_OxygenFarm" xml:space="preserve">
    <value>Oxygen Farm</value>
  </data>
  <data name="DisplayName_Block_OxygenGenerator" xml:space="preserve">
    <value>O2/H2 Generator</value>
  </data>
  <data name="DisplayName_Block_OxygenTank" xml:space="preserve">
    <value>Oxygen Tank</value>
  </data>
  <data name="DisplayName_Block_ParachuteHatch" xml:space="preserve">
    <value>Parachute Hatch</value>
  </data>
  <data name="DisplayName_Block_Passage" xml:space="preserve">
    <value>Passage</value>
  </data>
  <data name="DisplayName_Block_PassengerSeat" xml:space="preserve">
    <value>Passenger Seat</value>
  </data>
  <data name="DisplayName_Block_PistonBase" xml:space="preserve">
    <value>Piston</value>
  </data>
  <data name="DisplayName_Block_PistonTop" xml:space="preserve">
    <value>Top Piston Part</value>
  </data>
  <data name="DisplayName_Block_PowerEfficiencyModule" xml:space="preserve">
    <value>Power Efficiency Module</value>
  </data>
  <data name="DisplayName_Block_ProductivityModule" xml:space="preserve">
    <value>Speed Module</value>
  </data>
  <data name="DisplayName_Block_Projector" xml:space="preserve">
    <value>Projector</value>
  </data>
  <data name="DisplayName_Block_Ramp" xml:space="preserve">
    <value>Ramp</value>
  </data>
  <data name="DisplayName_Block_Refinery" xml:space="preserve">
    <value>Refinery</value>
  </data>
  <data name="DisplayName_Block_ReflectorLight" xml:space="preserve">
    <value>Spotlight</value>
  </data>
  <data name="DisplayName_Block_RemoteControl" xml:space="preserve">
    <value>Remote Control</value>
  </data>
  <data name="DisplayName_Block_RocketLauncher" xml:space="preserve">
    <value>Rocket Launcher</value>
  </data>
  <data name="DisplayName_Block_Rotor" xml:space="preserve">
    <value>Rotor</value>
  </data>
  <data name="DisplayName_Block_RotorPart" xml:space="preserve">
    <value>Rotor Part</value>
  </data>
  <data name="DisplayName_Block_Sensor" xml:space="preserve">
    <value>Sensor</value>
  </data>
  <data name="DisplayName_Block_ShipGrinder" xml:space="preserve">
    <value>Grinder</value>
  </data>
  <data name="DisplayName_Block_ShipWelder" xml:space="preserve">
    <value>Welder</value>
  </data>
  <data name="DisplayName_Block_SmallAtmoThrust" xml:space="preserve">
    <value>Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallCargoContainer" xml:space="preserve">
    <value>Small Cargo Container</value>
  </data>
  <data name="DisplayName_Block_SmallConveyorSorter" xml:space="preserve">
    <value>Small Conveyor Sorter</value>
  </data>
  <data name="DisplayName_Block_SmallHydrogenThrust" xml:space="preserve">
    <value>Hydrogen Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallReactor" xml:space="preserve">
    <value>Small Reactor</value>
  </data>
  <data name="DisplayName_Block_SmallRocketLauncherReload" xml:space="preserve">
    <value>Reloadable Rocket Launcher</value>
  </data>
  <data name="DisplayName_Block_SmallThrust" xml:space="preserve">
    <value>Ion Thruster</value>
  </data>
  <data name="DisplayName_Block_SolarPanel" xml:space="preserve">
    <value>Solar Panel</value>
  </data>
  <data name="DisplayName_Block_SoundBlock" xml:space="preserve">
    <value>Sound Block</value>
  </data>
  <data name="DisplayName_Block_SpaceBall" xml:space="preserve">
    <value>Space Ball</value>
  </data>
  <data name="DisplayName_Block_Stairs" xml:space="preserve">
    <value>Stairs</value>
  </data>
  <data name="DisplayName_Block_SteelCatwalk" xml:space="preserve">
    <value>Steel Catwalk</value>
  </data>
  <data name="DisplayName_Block_SteelCatwalkCorner" xml:space="preserve">
    <value>Steel Catwalk Corner</value>
  </data>
  <data name="DisplayName_Block_SteelCatwalkPlate" xml:space="preserve">
    <value>Steel Catwalk Plate</value>
  </data>
  <data name="DisplayName_Block_SteelCatwalkTwoSides" xml:space="preserve">
    <value>Steel Catwalk Two Sides</value>
  </data>
  <data name="DisplayName_Block_Suspension1x1" xml:space="preserve">
    <value>Wheel Suspension 1x1 Right</value>
  </data>
  <data name="DisplayName_Block_Suspension1x1mirrored" xml:space="preserve">
    <value>Wheel Suspension 1x1 Left</value>
  </data>
  <data name="DisplayName_Block_Suspension3x3" xml:space="preserve">
    <value>Wheel Suspension 3x3 Right</value>
  </data>
  <data name="DisplayName_Block_Suspension3x3mirrored" xml:space="preserve">
    <value>Wheel Suspension 3x3 Left</value>
  </data>
  <data name="DisplayName_Block_Suspension5x5" xml:space="preserve">
    <value>Wheel Suspension 5x5 Right</value>
  </data>
  <data name="DisplayName_Block_Suspension5x5mirrored" xml:space="preserve">
    <value>Wheel Suspension 5x5 Left</value>
  </data>
  <data name="DisplayName_Block_TextPanel" xml:space="preserve">
    <value>Text Panel</value>
  </data>
  <data name="DisplayName_Block_TimerBlock" xml:space="preserve">
    <value>Timer Block</value>
  </data>
  <data name="DisplayName_Block_VerticalCen" xml:space="preserve">
    <value>Centered Window</value>
  </data>
  <data name="DisplayName_Block_VerticalWindow" xml:space="preserve">
    <value>Vertical Window</value>
  </data>
  <data name="DisplayName_Block_VirtualMass" xml:space="preserve">
    <value>Artificial Mass</value>
  </data>
  <data name="DisplayName_Block_Warhead" xml:space="preserve">
    <value>Warhead</value>
  </data>
  <data name="DisplayName_Block_Wheel1x1" xml:space="preserve">
    <value>Wheel 1x1</value>
  </data>
  <data name="DisplayName_Block_Wheel1x1mirrored" xml:space="preserve">
    <value>Wheel 1x1</value>
  </data>
  <data name="DisplayName_Block_Wheel3x3" xml:space="preserve">
    <value>Wheel 3x3</value>
  </data>
  <data name="DisplayName_Block_Wheel3x3mirrored" xml:space="preserve">
    <value>Wheel 3x3</value>
  </data>
  <data name="DisplayName_Block_Wheel5x5" xml:space="preserve">
    <value>Wheel 5x5</value>
  </data>
  <data name="DisplayName_Block_Wheel5x5mirrored" xml:space="preserve">
    <value>Wheel 5x5</value>
  </data>
  <data name="DisplayName_Block_Window1x1Face" xml:space="preserve">
    <value>Window 1x1 Face</value>
  </data>
  <data name="DisplayName_Block_Window1x1Flat" xml:space="preserve">
    <value>Window 1x1 Flat</value>
  </data>
  <data name="DisplayName_Block_Window1x1FlatInv" xml:space="preserve">
    <value>Window 1x1 Flat Inv.</value>
  </data>
  <data name="DisplayName_Block_Window1x1FaceInv" xml:space="preserve">
    <value>Window 1x1 Face Inv.</value>
  </data>
  <data name="DisplayName_Block_Window1x1Side" xml:space="preserve">
    <value>Window 1x1 Side</value>
  </data>
  <data name="DisplayName_Block_Window1x1SideInv" xml:space="preserve">
    <value>Window 1x1 Side Inv</value>
  </data>
  <data name="DisplayName_Block_Window1x1Slope" xml:space="preserve">
    <value>Window 1x1 Slope</value>
  </data>
  <data name="DisplayName_Block_Window1x2Face" xml:space="preserve">
    <value>Window 1x2 Face</value>
  </data>
  <data name="DisplayName_Block_Window1x2Flat" xml:space="preserve">
    <value>Window 1x2 Flat</value>
  </data>
  <data name="DisplayName_Block_Window1x2FlatInv" xml:space="preserve">
    <value>Window 1x2 Flat Inv.</value>
  </data>
  <data name="DisplayName_Block_Window1x2FaceInv" xml:space="preserve">
    <value>Window 1x2 Face Inv.</value>
  </data>
  <data name="DisplayName_Block_Window1x2SideLeft" xml:space="preserve">
    <value>Window 1x2 Side Left</value>
  </data>
  <data name="DisplayName_Block_Window1x2SideLeftInv" xml:space="preserve">
    <value>Window 1x2 Side Left Inv</value>
  </data>
  <data name="DisplayName_Block_Window1x2SideRight" xml:space="preserve">
    <value>Window 1x2 Side Right</value>
  </data>
  <data name="DisplayName_Block_Window1x2SideRightInv" xml:space="preserve">
    <value>Window 1x2 Side Right Inv</value>
  </data>
  <data name="DisplayName_Block_Window1x2Slope" xml:space="preserve">
    <value>Window 1x2 Slope</value>
  </data>
  <data name="DisplayName_Block_Window2x3Flat" xml:space="preserve">
    <value>Window 2x3 Flat</value>
  </data>
  <data name="DisplayName_Block_Window2x3FlatInv" xml:space="preserve">
    <value>Window 2x3 Flat Inv.</value>
  </data>
  <data name="DisplayName_Block_Window3x3Flat" xml:space="preserve">
    <value>Window 3x3 Flat</value>
  </data>
  <data name="DisplayName_Block_Window3x3FlatInv" xml:space="preserve">
    <value>Window 3x3 Flat Inv.</value>
  </data>
  <data name="DisplayName_BlueprintClass_Ammo" xml:space="preserve">
    <value>Ammo</value>
  </data>
  <data name="DisplayName_BlueprintClass_Base_Components" xml:space="preserve">
    <value>Base Comp.</value>
  </data>
  <data name="DisplayName_BlueprintClass_CommonMetals" xml:space="preserve">
    <value>Common Metals</value>
  </data>
  <data name="DisplayName_BlueprintClass_Components" xml:space="preserve">
    <value>Components</value>
  </data>
  <data name="DisplayName_BlueprintClass_BasicComponents" xml:space="preserve">
    <value>Basic Ingots and Components</value>
  </data>
  <data name="DisplayName_BlueprintClass_Construction_Components" xml:space="preserve">
    <value>Construction Comp.</value>
  </data>
  <data name="DisplayName_BlueprintClass_Electronics" xml:space="preserve">
    <value>Electronics</value>
  </data>
  <data name="DisplayName_BlueprintClass_EnergeticIngots" xml:space="preserve">
    <value>Energetic Ingots</value>
  </data>
  <data name="DisplayName_BlueprintClass_HydrogenBottles" xml:space="preserve">
    <value>Hydrogen Bottles</value>
  </data>
  <data name="DisplayName_BlueprintClass_Ice" xml:space="preserve">
    <value>Ice</value>
  </data>
  <data name="DisplayName_BlueprintClass_Ingots" xml:space="preserve">
    <value>Ingots</value>
  </data>
  <data name="DisplayName_BlueprintClass_LargeBlocks" xml:space="preserve">
    <value>Large Blocks</value>
  </data>
  <data name="DisplayName_BlueprintClass_BasicLargeBlocks" xml:space="preserve">
    <value>Basic Large Blocks
- Click on any Large Block to assemble all components
necessary for it's construction.</value>
  </data>
  <data name="DisplayName_BlueprintClass_OxygenBottles" xml:space="preserve">
    <value>Oxygen Bottles</value>
  </data>
  <data name="DisplayName_BlueprintClass_PreciousMetals" xml:space="preserve">
    <value>Noble Metals</value>
  </data>
  <data name="DisplayName_BlueprintClass_SmallBlocks" xml:space="preserve">
    <value>Small Blocks</value>
  </data>
  <data name="DisplayName_BlueprintClass_BasicSmallBlocks" xml:space="preserve">
    <value>Basic Small Blocks
- Click on any Small Block to assemble all components
necessary for it's construction.</value>
  </data>
  <data name="DisplayName_BlueprintClass_Solids" xml:space="preserve">
    <value>Solids</value>
  </data>
  <data name="DisplayName_CargoFilledEntityComponent" xml:space="preserve">
    <value>Cargo Filled %</value>
  </data>
  <data name="DisplayName_Category_AllBlocks" xml:space="preserve">
    <value>Home</value>
  </data>
  <data name="DisplayName_Category_ArmorBlocks" xml:space="preserve">
    <value>Armor Blocks</value>
  </data>
  <data name="DisplayName_Category_CharacterAnimations" xml:space="preserve">
    <value>   Emotes</value>
  </data>
  <data name="DisplayName_Category_CharacterTools" xml:space="preserve">
    <value>   Character Tools</value>
  </data>
  <data name="DisplayName_Category_CharacterWeapons" xml:space="preserve">
    <value>   Character Weapons</value>
  </data>
  <data name="DisplayName_Category_Cockpit" xml:space="preserve">
    <value>Cockpit Blocks</value>
  </data>
  <data name="DisplayName_Category_ConveyorBlocks" xml:space="preserve">
    <value>Conv./Cargo Blocks</value>
  </data>
  <data name="DisplayName_Category_GeneratedBlocks" xml:space="preserve">
    <value>Generated Blocks</value>
  </data>
  <data name="DisplayName_Category_LargeBlocks" xml:space="preserve">
    <value>Large Blocks</value>
  </data>
  <data name="DisplayName_Category_Power" xml:space="preserve">
    <value>   Power</value>
  </data>
  <data name="DisplayName_Category_Production" xml:space="preserve">
    <value>   Production</value>
  </data>
  <data name="DisplayName_Category_ShipGroups" xml:space="preserve">
    <value>Groups</value>
  </data>
  <data name="DisplayName_Category_ShipLights" xml:space="preserve">
    <value>Lights</value>
  </data>
  <data name="DisplayName_Category_ShipThrusters" xml:space="preserve">
    <value>Thrusters</value>
  </data>
  <data name="DisplayName_Category_ShipWeapons" xml:space="preserve">
    <value>Weapon Blocks</value>
  </data>
  <data name="DisplayName_Category_ShipTools" xml:space="preserve">
    <value>Tool Blocks</value>
  </data>
  <data name="DisplayName_Category_SmallBlocks" xml:space="preserve">
    <value>Small Blocks</value>
  </data>
  <data name="DisplayName_Category_VoxelHands" xml:space="preserve">
    <value>Voxel Hands</value>
  </data>
  <data name="DisplayName_Category_WindowBlocks" xml:space="preserve">
    <value>   Windows</value>
  </data>
  <data name="DisplayName_CloseHelmet" xml:space="preserve">
    <value>Close Helmet</value>
  </data>
  <data name="DisplayName_ConvSorterTypes_Ammo" xml:space="preserve">
    <value>*ammo*</value>
  </data>
  <data name="DisplayName_ConvSorterTypes_Component" xml:space="preserve">
    <value>*components*</value>
  </data>
  <data name="DisplayName_ConvSorterTypes_HandTool" xml:space="preserve">
    <value>*hand tools*</value>
  </data>
  <data name="DisplayName_ConvSorterTypes_Ingot" xml:space="preserve">
    <value>*ingots*</value>
  </data>
  <data name="DisplayName_ConvSorterTypes_Ore" xml:space="preserve">
    <value>*ore*</value>
  </data>
  <data name="DisplayName_Dead_Astronaut" xml:space="preserve">
    <value>Dead Astronaut</value>
  </data>
  <data name="DisplayName_Faction_FirstColonyFaction" xml:space="preserve">
    <value>{LOCG:DisplayName_Faction_FirstColonyFaction_Translation}</value>
  </data>
  <data name="DisplayName_Faction_FirstColonyFaction_Translation" xml:space="preserve">
    <value>First Colony</value>
  </data>
  <data name="DisplayName_Faction_SpacePirates" xml:space="preserve">
    <value>{LOCG:DisplayName_Faction_SpacePirates_Translation}</value>
  </data>
  <data name="DisplayName_Faction_SpacePirates_Translation" xml:space="preserve">
    <value>Space Pirates</value>
  </data>
  <data name="DisplayName_Faction_SpaceSpiders" xml:space="preserve">
    <value>{LOCG:DisplayName_Faction_SpaceSpiders_Translation}</value>
  </data>
  <data name="DisplayName_Faction_SpaceSpiders_Translation" xml:space="preserve">
    <value>Space Spiders</value>
  </data>
  <data name="DisplayName_GridCreateTool_CreateLargeShip" xml:space="preserve">
    <value>Create New Large Ship</value>
  </data>
  <data name="DisplayName_GridCreateTool_CreateSmallShip" xml:space="preserve">
    <value>Create New Small Ship</value>
  </data>
  <data name="DisplayName_GridCreateTool_CreateStation" xml:space="preserve">
    <value>Create New Station</value>
  </data>
  <data name="DisplayName_Item_AngleGrinder" xml:space="preserve">
    <value>Grinder</value>
    <comment>Angle grinder hand tool for dismounting blocks</comment>
  </data>
  <data name="DisplayName_Item_AngleGrinder2" xml:space="preserve">
    <value>Enhanced Grinder</value>
  </data>
  <data name="DisplayName_Item_AngleGrinder3" xml:space="preserve">
    <value>Proficient Grinder</value>
  </data>
  <data name="DisplayName_Item_AngleGrinder4" xml:space="preserve">
    <value>Elite Grinder</value>
  </data>
  <data name="DisplayName_Item_AutomaticRifle" xml:space="preserve">
    <value>MR-20 Rifle</value>
  </data>
  <data name="DisplayName_Item_BulletproofGlass" xml:space="preserve">
    <value>Bulletproof Glass</value>
  </data>
  <data name="DisplayName_Item_CanvasCartridge" xml:space="preserve">
    <value>Canvas</value>
  </data>
  <data name="DisplayName_Item_CobaltIngot" xml:space="preserve">
    <value>Cobalt Ingot</value>
  </data>
  <data name="DisplayName_Item_CobaltOre" xml:space="preserve">
    <value>Cobalt Ore</value>
  </data>
  <data name="DisplayName_Item_Computer" xml:space="preserve">
    <value>Computer</value>
  </data>
  <data name="DisplayName_Item_ConstructionComponent" xml:space="preserve">
    <value>Construction Comp.</value>
  </data>
  <data name="DisplayName_Item_DetectorComponents" xml:space="preserve">
    <value>Detector Comp.</value>
  </data>
  <data name="DisplayName_Item_Display" xml:space="preserve">
    <value>Display</value>
  </data>
  <data name="DisplayName_Item_EliteAutomaticRifle" xml:space="preserve">
    <value>MR-30E Rifle</value>
  </data>
  <data name="DisplayName_Item_Explosives" xml:space="preserve">
    <value>Explosives</value>
  </data>
  <data name="DisplayName_Item_Girder" xml:space="preserve">
    <value>Girder</value>
  </data>
  <data name="DisplayName_Item_GoldIngot" xml:space="preserve">
    <value>Gold Ingot</value>
  </data>
  <data name="DisplayName_Item_GoldOre" xml:space="preserve">
    <value>Gold Ore</value>
  </data>
  <data name="DisplayName_Item_Gravel" xml:space="preserve">
    <value>Gravel</value>
  </data>
  <data name="DisplayName_Item_GravityGeneratorComponents" xml:space="preserve">
    <value>Gravity Comp.</value>
  </data>
  <data name="DisplayName_Item_HandDrill" xml:space="preserve">
    <value>Hand Drill</value>
  </data>
  <data name="DisplayName_Item_HandDrill2" xml:space="preserve">
    <value>Enhanced Hand Drill</value>
  </data>
  <data name="DisplayName_Item_HandDrill3" xml:space="preserve">
    <value>Proficient Hand Drill</value>
  </data>
  <data name="DisplayName_Item_HandDrill4" xml:space="preserve">
    <value>Elite Hand Drill</value>
  </data>
  <data name="DisplayName_Item_Hydrogen" xml:space="preserve">
    <value>Hydrogen</value>
  </data>
  <data name="DisplayName_Item_HydrogenBottle" xml:space="preserve">
    <value>Hydrogen Bottle</value>
  </data>
  <data name="DisplayName_Item_HydrogenBottles" xml:space="preserve">
    <value>Hydrogen Bottles</value>
  </data>
  <data name="DisplayName_Item_Ice" xml:space="preserve">
    <value>Ice</value>
  </data>
  <data name="DisplayName_Item_InteriorPlate" xml:space="preserve">
    <value>Interior Plate</value>
  </data>
  <data name="DisplayName_Item_IronIngot" xml:space="preserve">
    <value>Iron Ingot</value>
  </data>
  <data name="DisplayName_Item_IronOre" xml:space="preserve">
    <value>Iron Ore</value>
  </data>
  <data name="DisplayName_Item_LargeSteelTube" xml:space="preserve">
    <value>Large Steel Tube</value>
  </data>
  <data name="DisplayName_Item_MagnesiumOre" xml:space="preserve">
    <value>Magnesium Ore</value>
  </data>
  <data name="DisplayName_Item_MagnesiumPowder" xml:space="preserve">
    <value>Magnesium Powder</value>
  </data>
  <data name="DisplayName_Item_MedicalComponents" xml:space="preserve">
    <value>Medical Comp.</value>
  </data>
  <data name="DisplayName_Item_MetalGrid" xml:space="preserve">
    <value>Metal Grid</value>
  </data>
  <data name="DisplayName_Item_Missile200mm" xml:space="preserve">
    <value>Rocket</value>
  </data>
  <data name="DisplayName_Item_Motor" xml:space="preserve">
    <value>Motor</value>
  </data>
  <data name="DisplayName_Item_NATO_25x184mm" xml:space="preserve">
    <value>Gatling Ammo Box</value>
  </data>
  <data name="DisplayName_Item_NATO_5p56x45mm" xml:space="preserve">
    <value>5.56x45mm NATO magazine</value>
  </data>
  <data name="DisplayName_Item_NickelIngot" xml:space="preserve">
    <value>Nickel Ingot</value>
  </data>
  <data name="DisplayName_Item_NickelOre" xml:space="preserve">
    <value>Nickel Ore</value>
  </data>
  <data name="DisplayName_Item_Organic" xml:space="preserve">
    <value>Organic</value>
  </data>
  <data name="DisplayName_Item_Oxygen" xml:space="preserve">
    <value>Oxygen</value>
  </data>
  <data name="DisplayName_Item_OxygenBottle" xml:space="preserve">
    <value>Oxygen Bottle</value>
  </data>
  <data name="DisplayName_Item_OxygenBottles" xml:space="preserve">
    <value>Oxygen Bottles</value>
  </data>
  <data name="DisplayName_Item_PlatinumIngot" xml:space="preserve">
    <value>Platinum Ingot</value>
  </data>
  <data name="DisplayName_Item_PlatinumOre" xml:space="preserve">
    <value>Platinum Ore</value>
  </data>
  <data name="DisplayName_Item_Potassium" xml:space="preserve">
    <value>Potassium</value>
  </data>
  <data name="DisplayName_Item_PowerCell" xml:space="preserve">
    <value>Power Cell</value>
  </data>
  <data name="DisplayName_Item_PreciseAutomaticRifle" xml:space="preserve">
    <value>MR-8P Rifle</value>
  </data>
  <data name="DisplayName_Item_RadioCommunicationComponents" xml:space="preserve">
    <value>Radio-comm Comp.</value>
  </data>
  <data name="DisplayName_Item_RapidFireAutomaticRifle" xml:space="preserve">
    <value>MR-50A Rifle</value>
  </data>
  <data name="DisplayName_Item_ReactorComponents" xml:space="preserve">
    <value>Reactor Comp.</value>
  </data>
  <data name="DisplayName_Item_Scrap" xml:space="preserve">
    <value>Scrap Metal</value>
  </data>
  <data name="DisplayName_Item_ScrapIngot" xml:space="preserve">
    <value>Old Scrap Metal</value>
  </data>
  <data name="DisplayName_Item_SiliconOre" xml:space="preserve">
    <value>Silicon Ore</value>
  </data>
  <data name="DisplayName_Item_SiliconWafer" xml:space="preserve">
    <value>Silicon Wafer</value>
  </data>
  <data name="DisplayName_Item_SilverIngot" xml:space="preserve">
    <value>Silver Ingot</value>
  </data>
  <data name="DisplayName_Item_SilverOre" xml:space="preserve">
    <value>Silver Ore</value>
  </data>
  <data name="DisplayName_Item_SmallSteelTube" xml:space="preserve">
    <value>Small Steel Tube</value>
  </data>
  <data name="DisplayName_Item_SolarCell" xml:space="preserve">
    <value>Solar Cell</value>
  </data>
  <data name="DisplayName_Item_SteelPlate" xml:space="preserve">
    <value>Steel Plate</value>
  </data>
  <data name="DisplayName_Item_StoneOre" xml:space="preserve">
    <value>Stone</value>
  </data>
  <data name="DisplayName_Item_Superconductor" xml:space="preserve">
    <value>Superconductor</value>
  </data>
  <data name="DisplayName_Item_ThrustComponents" xml:space="preserve">
    <value>Thruster Comp.</value>
  </data>
  <data name="DisplayName_Item_UraniumIngot" xml:space="preserve">
    <value>Uranium Ingot</value>
  </data>
  <data name="DisplayName_Item_UraniumOre" xml:space="preserve">
    <value>Uranium Ore</value>
  </data>
  <data name="DisplayName_Item_Welder" xml:space="preserve">
    <value>Welder</value>
  </data>
  <data name="DisplayName_Item_Welder2" xml:space="preserve">
    <value>Enhanced Welder</value>
  </data>
  <data name="DisplayName_Item_Welder3" xml:space="preserve">
    <value>Proficient Welder</value>
  </data>
  <data name="DisplayName_Item_Welder4" xml:space="preserve">
    <value>Elite Welder</value>
  </data>
  <data name="DisplayName_LCD_Panel" xml:space="preserve">
    <value>LCD Panel</value>
  </data>
  <data name="DisplayName_LCD_PanelWide" xml:space="preserve">
    <value>Wide LCD Panel</value>
  </data>
  <data name="DisplayName_MarsLander" xml:space="preserve">
    <value>Mars Planet Landing</value>
  </data>
  <data name="DisplayName_OpenHelmet" xml:space="preserve">
    <value>Open Helmet</value>
  </data>
  <data name="DisplayName_PlanetaryLander" xml:space="preserve">
    <value>PlanetaryLander</value>
  </data>
  <data name="DisplayName_Programmable_Block" xml:space="preserve">
    <value>Programmable Block</value>
  </data>
  <data name="DisplayName_RespawnShip_Assembler" xml:space="preserve">
    <value>Respawn Ship 2</value>
  </data>
  <data name="DisplayName_RespawnShip_EscapePod" xml:space="preserve">
    <value>Escape Pod</value>
  </data>
  <data name="DisplayName_RespawnShip_RefineryAssembler" xml:space="preserve">
    <value>Respawn Ship 3</value>
  </data>
  <data name="DisplayName_RespawnShip_ShipDrill" xml:space="preserve">
    <value>Small Drill Ship</value>
  </data>
  <data name="DisplayName_RespawnPodSpace" xml:space="preserve">
    <value>Space Pod</value>
  </data>
  <data name="DisplayName_RewardPunishmentTool" xml:space="preserve">
    <value>GoodAI Bot Feedback</value>
  </data>
  <data name="DisplayName_Rifle" xml:space="preserve">
    <value>MR-20 Rifle</value>
  </data>
  <data name="DisplayName_Scenario_2Planets" xml:space="preserve">
    <value>2 planets</value>
  </data>
  <data name="DisplayName_Scenario_AlienEasyStart" xml:space="preserve">
    <value>Easy Start Alien</value>
  </data>
  <data name="DisplayName_Scenario_Asteroids" xml:space="preserve">
    <value>Asteroids</value>
  </data>
  <data name="DisplayName_Scenario_BigSmall" xml:space="preserve">
    <value>Big and small planet</value>
  </data>
  <data name="DisplayName_Scenario_CrashedRedShip" xml:space="preserve">
    <value>Crashed Red Ship</value>
  </data>
  <data name="DisplayName_Scenario_DebugStart" xml:space="preserve">
    <value>Debug fast start</value>
  </data>
  <data name="DisplayName_Scenario_EarthEasyStart" xml:space="preserve">
    <value>Easy Start Earth</value>
  </data>
  <data name="DisplayName_Scenario_EasyStart1" xml:space="preserve">
    <value>Easy Start 1</value>
  </data>
  <data name="DisplayName_Scenario_EasyStart2" xml:space="preserve">
    <value>Easy Start 2</value>
  </data>
  <data name="DisplayName_Scenario_EasyStart3" xml:space="preserve">
    <value>Easy Start 3 (64-bit only)</value>
  </data>
  <data name="DisplayName_Scenario_EmptyWorld" xml:space="preserve">
    <value>Empty World</value>
  </data>
  <data name="DisplayName_Scenario_MarsEasyStart" xml:space="preserve">
    <value>Easy Start Mars</value>
  </data>
  <data name="DisplayName_Scenario_MoonEasyStart" xml:space="preserve">
    <value>Easy Start Moon</value>
  </data>
  <data name="DisplayName_Scenario_Planet" xml:space="preserve">
    <value>Habitable planet</value>
  </data>
  <data name="DisplayName_Scenario_ScaleTest" xml:space="preserve">
    <value>Scale test</value>
  </data>
  <data name="DisplayName_Scenario_StarSystem" xml:space="preserve">
    <value>Star System</value>
  </data>
  <data name="DisplayName_Scenario_StarSystemAligned" xml:space="preserve">
    <value>Star System Aligned</value>
  </data>
  <data name="DisplayName_Scenario_Survival" xml:space="preserve">
    <value>Lone Survivor</value>
  </data>
  <data name="DisplayName_Scenario_TestStarSystem" xml:space="preserve">
    <value>Test Star System</value>
  </data>
  <data name="DisplayName_Scenario_TwoPlatforms" xml:space="preserve">
    <value>Two platforms</value>
  </data>
  <data name="DisplayName_VoxelHand_AutoLevel" xml:space="preserve">
    <value>Terrain Auto Level</value>
  </data>
  <data name="DisplayName_VoxelHand_Box" xml:space="preserve">
    <value>Box</value>
  </data>
  <data name="DisplayName_VoxelHand_Capsule" xml:space="preserve">
    <value>Capsule</value>
  </data>
  <data name="DisplayName_VoxelHand_Ramp" xml:space="preserve">
    <value>Ramp</value>
  </data>
  <data name="DisplayName_VoxelHand_Sphere" xml:space="preserve">
    <value>Sphere</value>
  </data>
  <data name="DisplaySettings" xml:space="preserve">
    <value>Display settings</value>
  </data>
  <data name="DistanceFromCenter" xml:space="preserve">
    <value>DistanceFromCenter</value>
  </data>
  <data name="DistanceFromPlayers" xml:space="preserve">
    <value>DistanceFromPlayers</value>
  </data>
  <data name="EnableDamageEffects" xml:space="preserve">
    <value>Enable damage effects</value>
  </data>
  <data name="EntityRename" xml:space="preserve">
    <value>Entity Rename</value>
  </data>
  <data name="EntitySpawnOn" xml:space="preserve">
    <value>Entity Spawn on</value>
  </data>
  <data name="Factions_EnemyFaction" xml:space="preserve">
    <value>Enemy faction</value>
  </data>
  <data name="Factions_NeutralFaction" xml:space="preserve">
    <value>Neutral faction</value>
  </data>
  <data name="Factions_YourBlock" xml:space="preserve">
    <value>Your block (no faction)</value>
  </data>
  <data name="Factions_YourFaction" xml:space="preserve">
    <value>Your faction</value>
  </data>
  <data name="Fastest" xml:space="preserve">
    <value>Fastest</value>
  </data>
  <data name="FirstApril2014" xml:space="preserve">
    <value>1st April! Don't tell anyone!</value>
  </data>
  <data name="FlaresIntensity" xml:space="preserve">
    <value>Flares intensity</value>
  </data>
  <data name="FloatingObjects" xml:space="preserve">
    <value>Floating Objects</value>
  </data>
  <data name="Gold" xml:space="preserve">
    <value>Gold</value>
  </data>
  <data name="Gps" xml:space="preserve">
    <value>GPS</value>
  </data>
  <data name="GpsScreen_GpsListLabel" xml:space="preserve">
    <value>GPS list:</value>
  </data>
  <data name="GPS_Body_Location_Desc" xml:space="preserve">
    <value>Last known body location</value>
  </data>
  <data name="GPS_Body_Location_Name" xml:space="preserve">
    <value>Body Location</value>
  </data>
  <data name="GPS_Respawn_Location_Name" xml:space="preserve">
    <value>Respawn Pod</value>
  </data>
  <data name="GPS_Respawn_Location_Desc" xml:space="preserve">
    <value>Location of your respawn pod</value>
  </data>
  <data name="Grids" xml:space="preserve">
    <value>Grids</value>
  </data>
  <data name="GuiLabelVideoOnStart" xml:space="preserve">
    <value>Video on start:</value>
  </data>
  <data name="GuiMissionTriggersLostCondition" xml:space="preserve">
    <value>Lost condition:</value>
  </data>
  <data name="GuiMissionTriggersWinCondition" xml:space="preserve">
    <value>Win condition:</value>
  </data>
  <data name="GuiScenarioCannotJoin" xml:space="preserve">
    <value>Scenario is already running, cannot join game.</value>
  </data>
  <data name="GuiScenarioCannotJoinCaption" xml:space="preserve">
    <value>CANNOT JOIN</value>
  </data>
  <data name="GuiScenarioDescription" xml:space="preserve">
    <value>Scenario description</value>
  </data>
  <data name="GuiScenarioEdit_CopyIds" xml:space="preserve">
    <value>Copy block IDs</value>
  </data>
  <data name="GuiScenarioEdit_CopyIdsTooltip" xml:space="preserve">
    <value>You can then paste them into "Block destroyed" trigger</value>
  </data>
  <data name="GuiScenarioPlayerName" xml:space="preserve">
    <value>Player name</value>
  </data>
  <data name="GuiScenarioPlayerStatus" xml:space="preserve">
    <value>Status</value>
  </data>
  <data name="GuiScenarioSend" xml:space="preserve">
    <value>Send</value>
  </data>
  <data name="GuiScenarioStart" xml:space="preserve">
    <value>Start</value>
  </data>
  <data name="GuiScenarioTimeout" xml:space="preserve">
    <value>Connection timeout:</value>
  </data>
  <data name="GuiScenarioTimeout10min" xml:space="preserve">
    <value>10 min</value>
  </data>
  <data name="GuiScenarioTimeout3min" xml:space="preserve">
    <value>3 min</value>
  </data>
  <data name="GuiScenarioTimeout5min" xml:space="preserve">
    <value>5 min</value>
  </data>
  <data name="GuiScenarioTimeoutUnlimited" xml:space="preserve">
    <value>Unlimited</value>
  </data>
  <data name="GuiTriggerBlockDestroyedSingleMessage" xml:space="preserve">
    <value>Message after each block is destroyed</value>
  </data>
  <data name="GuiTriggerBlockDestroyed_ColumnName" xml:space="preserve">
    <value>Block name</value>
  </data>
  <data name="GuiTriggerCaptionAllOthersLost" xml:space="preserve">
    <value>All others lost</value>
  </data>
  <data name="GuiTriggerCaptionBlockDestroyed" xml:space="preserve">
    <value>Block destroyed</value>
  </data>
  <data name="GuiTriggerCaptionLives" xml:space="preserve">
    <value>Limited lives</value>
  </data>
  <data name="GuiTriggerCaptionNoSpawn" xml:space="preserve">
    <value>Spawn screen time limit</value>
  </data>
  <data name="GuiTriggerCaptionPositionLeft" xml:space="preserve">
    <value>Leave game area</value>
  </data>
  <data name="GuiTriggerCaptionPositionReached" xml:space="preserve">
    <value>Reach GPS position</value>
  </data>
  <data name="GuiTriggerCaptionSomeoneWon" xml:space="preserve">
    <value>Someone Won</value>
  </data>
  <data name="GuiTriggerCaptionTimeLimit" xml:space="preserve">
    <value>Scenario time limit</value>
  </data>
  <data name="GuiTriggerDeleteBlocks" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="GuiTriggerMessage" xml:space="preserve">
    <value>Message</value>
  </data>
  <data name="GuiTriggerNextMission" xml:space="preserve">
    <value>Next mission</value>
  </data>
  <data name="GuiTriggerNextMissionTooltip" xml:space="preserve">
    <value>You can put a scenario name here (must already exist on local computer to be loaded) 
or workshop ID number (user does *not* have to have it subscribed in that case).
Workshop ID can be seen in the URL link of scenario in question on {0} workshop web.</value>
  </data>
  <data name="GuiTriggerNoSpawnTimeLimit" xml:space="preserve">
    <value>Time limit (sec):</value>
  </data>
  <data name="GuiTriggerPasteBlocks" xml:space="preserve">
    <value>Add blocks</value>
  </data>
  <data name="GuiTriggerPasteBlocksTooltip" xml:space="preserve">
    <value>Adds blocks copied through button at the end of block terminal screen.</value>
  </data>
  <data name="GuiTriggerPasteGps" xml:space="preserve">
    <value>Paste GPS</value>
  </data>
  <data name="GuiTriggerPositionRadius" xml:space="preserve">
    <value>Radius</value>
  </data>
  <data name="GuiTriggersLives" xml:space="preserve">
    <value>Lives</value>
  </data>
  <data name="GuiTriggerTimeLimit" xml:space="preserve">
    <value>Limit (in minutes)</value>
  </data>
  <data name="GuiTriggerWwwLink" xml:space="preserve">
    <value>WWW link</value>
  </data>
  <data name="HelpScreen_FactionColor_Blue" xml:space="preserve">
    <value>Blue</value>
  </data>
  <data name="HelpScreen_FactionColor_Green" xml:space="preserve">
    <value>Green</value>
  </data>
  <data name="HelpScreen_FactionColor_Red" xml:space="preserve">
    <value>Red</value>
  </data>
  <data name="HelpScreen_FactionColor_White" xml:space="preserve">
    <value>White</value>
  </data>
  <data name="HelpScreen_ControllerPrimaryAction" xml:space="preserve">
    <value>Primary Action</value>
  </data>
  <data name="HelpScreen_ControllerSecondaryAction" xml:space="preserve">
    <value>Secondary Action</value>
  </data>
  <data name="HelpScreen_ControllerModifier" xml:space="preserve">
    <value>Modifier</value>
  </data>
  <data name="HelpScreen_ControllerHorizontalMover" xml:space="preserve">
    <value>Hor. Movement</value>
  </data>
  <data name="HelpScreen_ControllerShipActions" xml:space="preserve">
    <value>Ship Actions</value>
  </data>
  <data name="HelpScreen_ControllerFlyUp" xml:space="preserve">
    <value>Fly Up</value>
  </data>
  <data name="HelpScreen_ControllerFlyDown" xml:space="preserve">
    <value>Fly Down</value>
  </data>
  <data name="HelpScreen_ControllerLeaveControl" xml:space="preserve">
    <value>Leave Control</value>
  </data>
  <data name="HelpScreen_ControllerSystemMenu" xml:space="preserve">
    <value>System Menu</value>
  </data>
  <data name="HelpScreen_ControllerRotation" xml:space="preserve">
    <value>Rotation</value>
  </data>
  <data name="HelpScreen_ControllerShipControl" xml:space="preserve">
    <value>Ship Control</value>
  </data>
  <data name="HelpScreen_ControllerCharacterControl" xml:space="preserve">
    <value>Character Control</value>
  </data>
  <data name="HelpScreen_ControllerBuildMenu" xml:space="preserve">
    <value>Build Menu</value>
  </data>
  <data name="HelpScreen_ControllerTools" xml:space="preserve">
    <value>Select Tool</value>
  </data>
  <data name="HelpScreen_ControllerCycleShipToolbar" xml:space="preserve">
    <value>Cycle Ship Toolbar</value>
  </data>
  <data name="HelpScreen_ControllerCycleEmoteToolbar" xml:space="preserve">
    <value>Cycle Emote Toolbar</value>
  </data>
  <data name="HelpScreen_ControllerEmoteToolbarActions" xml:space="preserve">
    <value>Emote Toolbar Actions</value>
  </data>
  <data name="HelpScreen_ControllerTurretControl" xml:space="preserve">
    <value>Turret Control</value>
  </data>
  <data name="HelpScreen_ControllerLookAround" xml:space="preserve">
    <value>Look Around</value>
  </data>
  <data name="HelpScreen_ControllerLookAround_PassengerSeat" xml:space="preserve">
    <value>Look Around in passenger seat</value>
  </data>
  <data name="HelpScreen_ControllerColorTool" xml:space="preserve">
    <value>Color Tool</value>
  </data>
  <data name="HelpScreen_ControllerCharacterSurvival" xml:space="preserve">
    <value>Survival Only Character</value>
  </data>
  <data name="HelpScreen_ControllerCharacterCreative" xml:space="preserve">
    <value>Creative Only Character</value>
  </data>
  <data name="HelpScreen_ControllerBuilding" xml:space="preserve">
    <value>Building</value>
  </data>
  <data name="HelpScreen_ControllerRoll" xml:space="preserve">
    <value>Roll</value>
  </data>
  <data name="HelpScreen_ControllerBuildingSurvival" xml:space="preserve">
    <value>Survival Only Building</value>
  </data>
  <data name="HelpScreen_ControllerBuildingCreative" xml:space="preserve">
    <value>Creative Only Building</value>
  </data>
  <data name="HelpScreen_ControllerSecondaryBuildSurvival" xml:space="preserve">
    <value>Switch from Building to Grinder</value>
  </data>
  <data name="HelpScreen_ControllerSecondayBuildCreative" xml:space="preserve">
    <value>Remove Block</value>
  </data>
  <data name="HelpScreen_ControllerPlacing" xml:space="preserve">
    <value>Placing Blocks and Blueprints</value>
  </data>
  <data name="HelpScreen_ControllerPlace" xml:space="preserve">
    <value>Place</value>
  </data>
  <data name="HelpScreen_ControllerRotateCw" xml:space="preserve">
    <value>Rotate Clockwise</value>
  </data>
  <data name="HelpScreen_ControllerRotateCcw" xml:space="preserve">
    <value>Rotate Counter-Clockwise</value>
  </data>
  <data name="HelpScreen_ControllerChangeRotationAxis" xml:space="preserve">
    <value>Change Rotation Axis</value>
  </data>
  <data name="HelpScreen_ControllerFurther" xml:space="preserve">
    <value>Move Item Further</value>
  </data>
  <data name="HelpScreen_ControllerPaint" xml:space="preserve">
    <value>Paint</value>
  </data>
  <data name="HelpScreen_ControllerScaleUp" xml:space="preserve">
    <value>Scale Up</value>
  </data>
  <data name="HelpScreen_ControllerScaleDown" xml:space="preserve">
    <value>Scale Down</value>
  </data>
  <data name="HelpScreen_ControllerCloser" xml:space="preserve">
    <value>Move Item Closer</value>
  </data>
  <data name="HelpScreen_ControllerRevert" xml:space="preserve">
    <value>Revert</value>
  </data>
  <data name="HelpScreen_ControllerHint1" xml:space="preserve">
    <value>You can change "brush" size while recoloring with {GAMEPAD_CONTROL:COLOR_PICKER:MEDIUM_COLOR_BRUSH} and {GAMEPAD_CONTROL:COLOR_PICKER:LARGE_COLOR_BRUSH}</value>
  </data>
  <data name="HelpScreen_ControllerHint2" xml:space="preserve">
    <value>You can change Saturation and Value of the selected color with {GAMEPAD:AXIS_DPAD} while recoloring.</value>
  </data>
  <data name="HelpScreen_ControllerHint3" xml:space="preserve">
    <value>If you make mistake while placing blocks in survival mode you can press {GAMEPAD_CONTROL:BUILD:SECONDARY_TOOL_ACTION} to switch to Grinder tool. When you have Grinder equipped you can press {GAMEPAD_CONTROL:BUILD:SECONDARY_TOOL_ACTION} again to switch to the last equipped block.</value>
  </data>
  <data name="HelpScreen_ControllerHint4" xml:space="preserve">
    <value>You can move through complicated windows more easily with Right Stick.</value>
  </data>
  <data name="HelpScreen_ControllerHint5" xml:space="preserve">
    <value>If you are building a symmetrical ship, you can activate Symmetry Building Mode through Systems Radial Menu.</value>
  </data>
  <data name="HelpScreen_ControllerHint6" xml:space="preserve">
    <value>You can modify voxels with Voxel Hand Tool, which can be accesed from System Radial Menu in Creative Mode. You can then place, remove, revert and paint voxels with {GAMEPAD_CONTROL:VOXEL:PRIMARY_TOOL_ACTION} , {GAMEPAD_CONTROL:VOXEL:SECONDARY_TOOL_ACTION} , {GAMEPAD_CONTROL:VOXEL:VOXEL_REVERT} and {GAMEPAD_CONTROL:VOXEL:VOXEL_PAINT} respectively.</value>
  </data>
  <data name="HelpScreen_ControllerHint7" xml:space="preserve">
    <value>Emotes toolbar is predefined and cannot be changed.</value>
  </data>
  <data name="HelpScreen_ControllerHint8" xml:space="preserve">
    <value>Most common actions on Systems Menu have shortcuts.
Pros use shortcuts!</value>
  </data>
  <data name="HelpScreen_ControllerHint9" xml:space="preserve">
    <value>When firing a block weapon in ship that has multiple weapons of the same type you can toggle firing a single weapon or all at once with LB+LT</value>
  </data>
  <data name="HelpScreen_ControllerHint10" xml:space="preserve">
    <value>When looking at inventory port with blocks in Build Planner queue, you can add components for queued blocks into production by pressing {GAMEPAD_CONTROL:CHARACTER:BUILD_PLANNER_ADD_COMPONNETS}.</value>
  </data>
  <data name="RadialMenu_Materials" xml:space="preserve">
    <value>Material Radial Menu</value>
  </data>
  <data name="HideEmpty" xml:space="preserve">
    <value>Hide empty</value>
  </data>
  <data name="Hint00Text" xml:space="preserve">
    <value>Did you know? 
    
    
You can build blocks from any cockpit by pressing Ctrl-G.</value>
  </data>
  <data name="HintKeyboardOnly01Control0" xml:space="preserve">
    <value>CUBE_DEFAULT_MOUNTPOINT</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintKeyboardOnly01Text" xml:space="preserve">
    <value>Did you know? 
    
    
You can toggle off the block auto rotation function with {0}.</value>
  </data>
  <data name="HintKeyboardOnly02Control0" xml:space="preserve">
    <value>TERMINAL</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintKeyboardOnly02Text" xml:space="preserve">
    <value>Did you know? 
    
    
Shift-{0} will directly bring you to the antenna menu.</value>
  </data>
  <data name="Hint03Text" xml:space="preserve">
    <value>You can steer vehicles from a turret if the cockpit is set to main cockpit.
Hold Alt to enable mouse control.</value>
  </data>
  <data name="Hint04Control0" xml:space="preserve">
    <value>SUICIDE</value>
    <comment>do not translate</comment>
  </data>
  <data name="Hint04Text" xml:space="preserve">
    <value>Stuck? 
    
    
Pressing {0} enables you to respawn.</value>
  </data>
  <data name="HintKeyboardOnly05Text" xml:space="preserve">
    <value>Did you know? 
    
    
You can dig tunnels quickly without producing ore by using right mouse function with your drill.</value>
  </data>
  <data name="Hint06Text" xml:space="preserve">
    <value>A few well placed decoy blocks can make the difference between a victory and a loss.</value>
  </data>
  <data name="Hint07Text" xml:space="preserve">
    <value>Did you know? 
    
    
Meteor impact craters can leave valuable resources.</value>
  </data>
  <data name="Hint08Text" xml:space="preserve">
    <value>Did you know? 
    
    
Dark spots on planets indicate ore deposits.</value>
  </data>
  <data name="Hint09Text" xml:space="preserve">
    <value>Did you know? 
    
    
Rocks on the surface of planets often contain valuable resources.</value>
  </data>
  <data name="Hint10Control0" xml:space="preserve">
    <value>JUMP</value>
    <comment>do not translate</comment>
  </data>
  <data name="Hint10Text" xml:space="preserve">
    <value>Did you know? 
    
    
While driving a rover, hold {0} to brake.</value>
  </data>
  <data name="Hint11Text" xml:space="preserve">
    <value>Be careful using your jetpack on planets.  Your hydrogen fuel will run out quickly. </value>
  </data>
  <data name="Hint12Control0" xml:space="preserve">
    <value>LANDING_GEAR</value>
    <comment>do not translate</comment>
  </data>
  <data name="Hint12Text" xml:space="preserve">
    <value>Did you know?
    
    
You can open the color picker by pressing {0}.</value>
  </data>
  <data name="Hint13Text" xml:space="preserve">
    <value>Batteries will automatically charge and distribute power when necessary according to their settings.</value>
  </data>
  <data name="Hint14Text" xml:space="preserve">
    <value>Upgrade modules will improve the performance of your refineries and assemblers.</value>
  </data>
  <data name="HintKeyboardOnly09Text" xml:space="preserve">
    <value>You can save Creations by pressing CTRL-B. Open the blueprint menu with F10.</value>
  </data>
  <data name="HintKeyboardOnly08Text" xml:space="preserve">
    <value>While holding a blueprint in creative mode, you can use B to align them to a planet's Gravity.</value>
  </data>
  <data name="Hint17Text" xml:space="preserve">
    <value>Using a ship to grind down a container will also pick up whatever was inside of the container.</value>
  </data>
  <data name="HintKeyboardOnly07Text" xml:space="preserve">
    <value>Double clicking items will automatically transfer the whole stack between inventories. </value>
  </data>
  <data name="HintKeyboardOnly06Text" xml:space="preserve">
    <value>Holding Ctrl, Shift or Ctrl-Shift enables you to move stacks of items by 10, 100 and 1000 at the time.</value>
  </data>
  <data name="HintKeyboardOnly04Text" xml:space="preserve">
    <value>Did you know? 
    
    
Scrolling while using a camera or turret enables you to zoom in and out.</value>
  </data>
  <data name="Hint21Text" xml:space="preserve">
    <value>Did you know? 
    
    
You can manually control turrets to carefully pick off targets.</value>
  </data>
  <data name="Hint22Text" xml:space="preserve">
    <value>Did you know? 
    
    
Your magnetic boots only work when there is no gravity around.</value>
  </data>
  <data name="HintKeyboardOnly03Text" xml:space="preserve">
    <value>Did you know? 
    
    
Double click while wielding a tool will keep it continuously working.</value>
  </data>
  <data name="Hint24Text" xml:space="preserve">
    <value>Did you know? 
    
    
Warheads are perfectly safe until you arm them.</value>
  </data>
  <data name="Hint25Text" xml:space="preserve">
    <value>Did you know? 
    
    
O2/H2 generator can produce small amounts of hydrogen for thrusters without having a hydrogen tank involved.</value>
  </data>
  <data name="HintKeyboardOnly00Control0" xml:space="preserve">
    <value>TOGGLE_SIGNALS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintKeyboardOnly00Text" xml:space="preserve">
    <value>Did you know?
    
    
Press {0} to change the way GPS coordinates and Antennas are displayed on your HUD.</value>
  </data>
  <data name="Hint27Text" xml:space="preserve">
    <value>Did you know?
    
    
Blocks that are destroyed during collisions or combat can cause damage around them.</value>
  </data>
  <data name="Hint26Text" xml:space="preserve">
    <value>Did you know?
    
    
Pressurized environments will maintain optimal temperatures and recharge your health and oxygen.</value>
  </data>
  <data name="Hint23Text" xml:space="preserve">
    <value>Did you know?
    
    
Your suit's power drains faster when residing in cold or hot temperatures.</value>
  </data>
  <data name="Hint20Text" xml:space="preserve">
    <value>Did you know?
    
    
The medical room recharges your energy and health five times as fast as the survival kit.</value>
  </data>
  <data name="Hint19Text" xml:space="preserve">
    <value>Did you know?
    
    
You can use sensors to detect enemies located underground who are attempting to infiltrate your base.</value>
  </data>
  <data name="Hint18Text" xml:space="preserve">
    <value>Did you know?
    
    
Wind turbines are more efficient when placed in high and open spaces.</value>
  </data>
  <data name="Hint16Text" xml:space="preserve">
    <value>Did you know?
    
    
Rovers can use their wheel suspensions to jump out of tight situations.</value>
  </data>
  <data name="Hint15Text" xml:space="preserve">
    <value>Did you know?
    
    
Advanced refineries give better yield when refining minerals.</value>
  </data>
  <data name="Hint05Text" xml:space="preserve">
    <value>Did you know?
    
    
Your jet pack can match the velocity of nearby grids using relative dampeners.</value>
  </data>
  <data name="Hint02Text" xml:space="preserve">
    <value>Did you know?
    
    
Wheel suspensions use power based on their power setting.</value>
  </data>
  <data name="Hint01Text" xml:space="preserve">
    <value>Did you know?
    
    
You can use /f to chat with your faction only or /g for global.</value>
  </data>
  <data name="HudBlockInfo_Components" xml:space="preserve">
    <value>Components</value>
  </data>
  <data name="HudBlockInfo_Installed_Required" xml:space="preserve">
    <value>Installed / Required</value>
  </data>
  <data name="HudBlockInfo_LargeShip_Station" xml:space="preserve">
    <value>Large Ship / Station</value>
  </data>
  <data name="HudBlockInfo_SmallShip" xml:space="preserve">
    <value>Small Ship</value>
  </data>
  <data name="HudEnergyGroupBatteries" xml:space="preserve">
    <value>Batteries</value>
  </data>
  <data name="HudEnergyGroupCharging" xml:space="preserve">
    <value>Charging</value>
  </data>
  <data name="HudEnergyGroupConveyors" xml:space="preserve">
    <value>Conveyors</value>
  </data>
  <data name="HudEnergyGroupDefense" xml:space="preserve">
    <value>Defense</value>
  </data>
  <data name="HudEnergyGroupDoors" xml:space="preserve">
    <value>Doors</value>
  </data>
  <data name="HudEnergyGroupFactory" xml:space="preserve">
    <value>Factory</value>
  </data>
  <data name="HudEnergyGroupGyroscope" xml:space="preserve">
    <value>Gyroscope</value>
  </data>
  <data name="HudEnergyGroupThrust" xml:space="preserve">
    <value>Thrusters</value>
  </data>
  <data name="HudEnergyGroupUtility" xml:space="preserve">
    <value>Utility</value>
  </data>
  <data name="HudEnergyMissingTotal" xml:space="preserve">
    <value>MISSING TOTAL</value>
  </data>
  <data name="HudInfoBroadcasting" xml:space="preserve">
    <value>Broadcasting</value>
  </data>
  <data name="HudInfoControllingStation" xml:space="preserve">
    <value>Controlling Station</value>
  </data>
  <data name="HudInfoCrouching" xml:space="preserve">
    <value>Crouching</value>
  </data>
  <data name="HudInfoFalling" xml:space="preserve">
    <value>Falling</value>
  </data>
  <data name="HudInfoFlying" xml:space="preserve">
    <value>Flying</value>
  </data>
  <data name="HudInfoGravity" xml:space="preserve">
    <value>Actual Gravity:</value>
  </data>
  <data name="HudInfoGravityArtificial" xml:space="preserve">
    <value>Artif. Gravity:</value>
  </data>
  <data name="HudInfoGravityNatural" xml:space="preserve">
    <value>Planet Gravity:</value>
  </data>
  <data name="HudInfoHelmet" xml:space="preserve">
    <value>Helmet</value>
  </data>
  <data name="HudInfoInventoryVolume" xml:space="preserve">
    <value>Volume:</value>
  </data>
  <data name="HudInfoMagnetic" xml:space="preserve">
    <value>Magnetic</value>
  </data>
  <data name="HudInfoNameBroadcastRange" xml:space="preserve">
    <value>Radio:</value>
  </data>
  <data name="HudInfoNameDampeners" xml:space="preserve">
    <value>Dampeners:</value>
  </data>
  <data name="HudInfoNameEnergy" xml:space="preserve">
    <value>Energy:</value>
  </data>
  <data name="HudInfoNameFuelTime" xml:space="preserve">
    <value>Fuel Time:</value>
  </data>
  <data name="HudInfoNameGyroscopes" xml:space="preserve">
    <value>Gyroscopes:</value>
  </data>
  <data name="HudInfoNameHealth" xml:space="preserve">
    <value>Health:</value>
  </data>
  <data name="HudInfoNameInProximity" xml:space="preserve">
    <value>In proximity:</value>
  </data>
  <data name="HudInfoNameJetpack" xml:space="preserve">
    <value>Jetpack</value>
  </data>
  <data name="HudInfoNameLandingGear" xml:space="preserve">
    <value>Landing gears:</value>
  </data>
  <data name="HudInfoNameLights" xml:space="preserve">
    <value>Lights:</value>
  </data>
  <data name="HudInfoNameLocked" xml:space="preserve">
    <value>Locked:</value>
  </data>
  <data name="HudInfoNameMass" xml:space="preserve">
    <value>Mass:</value>
  </data>
  <data name="HudInfoNameNumberOfBatteries" xml:space="preserve">
    <value>Number of batteries in use:</value>
  </data>
  <data name="HudInfoNamePowerUsage" xml:space="preserve">
    <value>Power Usage:</value>
  </data>
  <data name="HudInfoNameReactors" xml:space="preserve">
    <value>Reactors:</value>
  </data>
  <data name="HudInfoNameSpeed" xml:space="preserve">
    <value>Speed:</value>
  </data>
  <data name="HudInfoNameThrusts" xml:space="preserve">
    <value>Thrusters:</value>
  </data>
  <data name="HudInfoNoGravity" xml:space="preserve">
    <value>No gravity</value>
  </data>
  <data name="HudInfoNoPower" xml:space="preserve">
    <value>No Power</value>
  </data>
  <data name="HudInfoNoReflectors" xml:space="preserve">
    <value>No Spotlights</value>
  </data>
  <data name="HudInfoOff" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="HudInfoOn" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="HudInfoOxygen" xml:space="preserve">
    <value>Oxygen: </value>
  </data>
  <data name="HudInfoPilotingLargeShip" xml:space="preserve">
    <value>Piloting Large Ship</value>
  </data>
  <data name="HudInfoPilotingSmallShip" xml:space="preserve">
    <value>Piloting Small Ship</value>
  </data>
  <data name="HudInfoPowerOverload" xml:space="preserve">
    <value>Overload</value>
  </data>
  <data name="HudInfoReflectorsOff" xml:space="preserve">
    <value>Spotlights Off</value>
  </data>
  <data name="HudInfoReflectorsOn" xml:space="preserve">
    <value>Spotlights On</value>
  </data>
  <data name="HudInfoStanding" xml:space="preserve">
    <value>Standing</value>
  </data>
  <data name="HudInfoState" xml:space="preserve">
    <value>State</value>
  </data>
  <data name="HudScenarioInfoLivesLeft" xml:space="preserve">
    <value>Lives:</value>
  </data>
  <data name="HudScenarioInfoTimeLeft" xml:space="preserve">
    <value>Time left:</value>
  </data>
  <data name="Ice" xml:space="preserve">
    <value>Ice</value>
  </data>
  <data name="IconSymbol_Ag" xml:space="preserve">
    <value>Ag</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Au" xml:space="preserve">
    <value>Au</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Co" xml:space="preserve">
    <value>Co</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Fe" xml:space="preserve">
    <value>Fe</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Gravel" xml:space="preserve">
    <value>Gravel</value>
    <comment>Text written on icon in inventory. Keep it short!</comment>
  </data>
  <data name="IconSymbol_Ice" xml:space="preserve">
    <value>Ice</value>
    <comment>Text written on icon in inventory. Keep it short!</comment>
  </data>
  <data name="IconSymbol_K" xml:space="preserve">
    <value>K</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Mg" xml:space="preserve">
    <value>Mg</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Ni" xml:space="preserve">
    <value>Ni</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Organic" xml:space="preserve">
    <value>Organic</value>
  </data>
  <data name="IconSymbol_Pt" xml:space="preserve">
    <value>Pt</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Si" xml:space="preserve">
    <value>Si</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IconSymbol_Stone" xml:space="preserve">
    <value>Stone</value>
    <comment>Text written on icon in inventory. Keep it short!</comment>
  </data>
  <data name="IconSymbol_U" xml:space="preserve">
    <value>U</value>
    <comment>Chemical symbol. Do not translate!</comment>
  </data>
  <data name="IngameHelp_Intro_Detail1" xml:space="preserve">
    <value>Hello, Engineer! My name is Good.bot. I am an AI teacher that helps you by offering directions. Let's get you started! You can access useful information in the help screen.</value>
  </data>
  <data name="IngameHelp_Intro_Detail2" xml:space="preserve">
    <value>Press {CONTROL:HELP_SCREEN} to open help screen.</value>
  </data>
  <data name="IngameHelp_Intro_Detail2:Gamepad" xml:space="preserve">
    <value>Press {CONTROL:SYSTEM_RADIAL_MENU} to open the radial menu, navigate to the [Menu] tab and and choose the [Help] option.</value>
  </data>
  <data name="IngameHelp_Intro_Title" xml:space="preserve">
    <value>Good.bot: Introduction</value>
  </data>
  <data name="IngameHelp_Jetpack_Title" xml:space="preserve">
    <value>Good.bot: Jetpack</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail1" xml:space="preserve">
    <value>Your jetpack runs on hydrogen fuel. Be careful not to run out of it while flying.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail2" xml:space="preserve">
    <value>Toggle jetpack with {CONTROL:THRUSTS}.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail3" xml:space="preserve">
    <value>{CONTROL:JUMP} and {CONTROL:CROUCH} to fly up and down.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail4" xml:space="preserve">
    <value>Use {CONTROL:FORWARD} {CONTROL:BACKWARD} {CONTROL:STRAFE_LEFT} {CONTROL:STRAFE_RIGHT} to move and strafe.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail4:Gamepad" xml:space="preserve">
    <value>Use {GAMEPAD:AXIS_MOTION} to move and strafe.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail5" xml:space="preserve">
    <value>Press {CONTROL:ROLL_LEFT} and {CONTROL:ROLL_RIGHT} to roll.</value>
  </data>
  <data name="IngameHelp_Jetpack_Detail5:Gamepad" xml:space="preserve">
    <value>Use {CONTROL:JETPACK:ROLL_LEFT} and {CONTROL:JETPACK:ROLL_RIGHT} to roll.</value>
  </data>
  <data name="IngameHelp_Movement_Detail1" xml:space="preserve">
    <value>Let's get you started on the basics of movement. Don't forget to stay on the ground.</value>
  </data>
  <data name="IngameHelp_Movement_Detail2" xml:space="preserve">
    <value>Use {CONTROL:FORWARD} {CONTROL:BACKWARD} {CONTROL:STRAFE_LEFT} {CONTROL:STRAFE_RIGHT} to walk and strafe.</value>
  </data>
  <data name="IngameHelp_Movement_Detail2:Gamepad" xml:space="preserve">
    <value>Use {GAMEPAD:AXIS_MOTION} to walk and strafe.</value>
  </data>
  <data name="IngameHelp_Movement_Detail3" xml:space="preserve">
    <value>Hold {CONTROL:SPRINT}+{CONTROL:FORWARD} to sprint.</value>
  </data>
  <data name="IngameHelp_Movement_Detail3:Gamepad" xml:space="preserve">
    <value>Push {CONTROL:FORWARD} all the way to sprint forward.</value>
  </data>
  <data name="IngameHelp_Movement_Detail4" xml:space="preserve">
    <value>Use {CONTROL:JUMP} to jump.</value>
  </data>
  <data name="IngameHelp_Movement_Detail5" xml:space="preserve">
    <value>Toggle {CONTROL:CROUCH} to crouch.</value>
  </data>
  <data name="IngameHelp_Camera_Detail1" xml:space="preserve">
    <value>Changing your point of view can be useful in many situations.</value>
  </data>
  <data name="IngameHelp_Camera_Detail2" xml:space="preserve">
    <value>Toggle {CONTROL:CAMERA_MODE} to switch between first and third person view.</value>
  </data>
  <data name="IngameHelp_Camera_Detail3" xml:space="preserve">
    <value>Use [ALT + Mouse Wheel] to adjust the distance of third person view.</value>
  </data>
  <data name="IngameHelp_Camera_Detail3:Gamepad" xml:space="preserve">
    <value>Use {CONTROL:CAMERA_ZOOM_IN} and {CONTROL:CAMERA_ZOOM_OUT} to adjust the distance of third person view.</value>
  </data>
  <data name="IngameHelp_Movement_Title" xml:space="preserve">
    <value>Good.bot: Movement</value>
  </data>
  <data name="INVALID" xml:space="preserve">
    <value>INVALID TEXT WRAPPER ENUM</value>
    <comment>DON'T TRANSLATE</comment>
  </data>
  <data name="Inventory" xml:space="preserve">
    <value>Inventory</value>
  </data>
  <data name="Iron" xml:space="preserve">
    <value>Iron</value>
  </data>
  <data name="Jump_Achievable" xml:space="preserve">
    <value>Achievable percentage of the jump </value>
  </data>
  <data name="Jump_Blind" xml:space="preserve">
    <value>Blind Jump</value>
  </data>
  <data name="Jump_CrewCount" xml:space="preserve">
    <value>Seated crew on board: </value>
  </data>
  <data name="Jump_Destination" xml:space="preserve">
    <value>Jump destination: </value>
  </data>
  <data name="Jump_Distance" xml:space="preserve">
    <value>Distance to the proximity of coordinate: </value>
  </data>
  <data name="Jump_DistanceToDest" xml:space="preserve">
    <value>Distance to destination: </value>
  </data>
  <data name="Jump_DriveCount" xml:space="preserve">
    <value>Operational jump drives: </value>
  </data>
  <data name="Jump_MinDistance" xml:space="preserve">
    <value>Minimum jump distance: </value>
  </data>
  <data name="Jump_Obstacle" xml:space="preserve">
    <value>(Obstacle Detected)</value>
  </data>
  <data name="Jump_ObstacleTruncation" xml:space="preserve">
    <value>Obstacle Detected! Jump Distance will be truncated.</value>
  </data>
  <data name="Jump_Weight" xml:space="preserve">
    <value>Weight of transported mass: </value>
  </data>
  <data name="KeepProjectionToggle" xml:space="preserve">
    <value>Keep Projection</value>
  </data>
  <data name="KeepProjectionTooltip" xml:space="preserve">
    <value>Keep projection after building is complete. Useful for automated building, but can degrade performance.</value>
  </data>
  <data name="LargeGrids" xml:space="preserve">
    <value>LargeGrids</value>
  </data>
  <data name="LargeMissileTurretReloadingNotification" xml:space="preserve">
    <value>Reloading</value>
  </data>
  <data name="LaserAntennaConnectButton" xml:space="preserve">
    <value>Connect to receiver</value>
  </data>
  <data name="LaserAntennaConnectGPS" xml:space="preserve">
    <value>Connect to coords</value>
  </data>
  <data name="LaserAntennaCopyCoords" xml:space="preserve">
    <value>Copy my coords</value>
  </data>
  <data name="LaserAntennaCopyCoordsHelp" xml:space="preserve">
    <value>Copy this antenna's position into clipboard</value>
  </data>
  <data name="LaserAntennaCopyTargetCoords" xml:space="preserve">
    <value>Copy target coords</value>
  </data>
  <data name="LaserAntennaCopyTargetCoordsHelp" xml:space="preserve">
    <value>Copy target's current or last known position into clipboard</value>
  </data>
  <data name="LaserAntennaIdleButton" xml:space="preserve">
    <value>Idle</value>
  </data>
  <data name="LaserAntennaModeConnectedTo" xml:space="preserve">
    <value>Connected to </value>
  </data>
  <data name="LaserAntennaModeContactRec" xml:space="preserve">
    <value>Trying to establish connection to </value>
  </data>
  <data name="LaserAntennaModeIdle" xml:space="preserve">
    <value>Idle</value>
  </data>
  <data name="LaserAntennaModeRotGPS" xml:space="preserve">
    <value>Rotating towards GPS coordinates </value>
  </data>
  <data name="LaserAntennaModeRotRec" xml:space="preserve">
    <value>Rotating towards </value>
  </data>
  <data name="LaserAntennaModeSearchGPS" xml:space="preserve">
    <value>Searching for a laser at GPS coordinates </value>
  </data>
  <data name="LaserAntennaOnlyPerm" xml:space="preserve">
    <value>Only receivers set to permanent connection found</value>
  </data>
  <data name="LaserAntennaOutsideLimits" xml:space="preserve">
    <value>Target outside movement range</value>
  </data>
  <data name="LaserAntennaPasteGPS" xml:space="preserve">
    <value>Paste coords</value>
  </data>
  <data name="LaserAntennaPermanentCheckbox" xml:space="preserve">
    <value>Permanent connection</value>
  </data>
  <data name="LaserAntennaReceiversList" xml:space="preserve">
    <value>Known receivers</value>
  </data>
  <data name="LaserAntennaReceiversListHelp" xml:space="preserve">
    <value>These receivers are in radio range and can report their position.
Their current state and target is in parenthesis:
idle   laser is idling
&gt;&gt; laser is rotating towards other receiver or GPS coordinates
?&gt;  searching for other laser at requested GPS coordinates
~&gt; contacting other side of link (this includes waiting for other laser
       to turn its face to me or futile effort to contact receiver
       which is turned off or is not there any more)
=&gt; connection is established
To connect to lasers not listed here you can connect to coordinates.</value>
  </data>
  <data name="LaserAntennaSelectedCoords" xml:space="preserve">
    <value>Selected GPS coordinates</value>
  </data>
  <data name="LCD_Arrow" xml:space="preserve">
    <value>Arrow</value>
  </data>
  <data name="LCD_Construction" xml:space="preserve">
    <value>Construction</value>
  </data>
  <data name="LCD_Cross" xml:space="preserve">
    <value>Cross</value>
  </data>
  <data name="LCD_Danger" xml:space="preserve">
    <value>Danger</value>
  </data>
  <data name="LCD_NoEntry" xml:space="preserve">
    <value>No Entry</value>
  </data>
  <data name="LCD_Offline" xml:space="preserve">
    <value>Offline</value>
  </data>
  <data name="LCD_Online" xml:space="preserve">
    <value>Online</value>
  </data>
  <data name="LCD_WhiteScreen" xml:space="preserve">
    <value>White screen</value>
  </data>
  <data name="LCD_Grid" xml:space="preserve">
    <value>Grid</value>
  </data>
  <data name="LoadingError_ModifiedOriginalContent" xml:space="preserve">
    <value>Error loading original game content, cannot load file:
{0}

Original game content has been probably modified, revert any modification and try again. Best way to do it is to delete folder 'SpaceEngineers\Content\Data' and then select in {0} 'Verify local game cache'.

Reinstalling the game is not enough, because {0} does not delete unknown files!</value>
  </data>
  <data name="LoadingWheel_Streaming" xml:space="preserve">
    <value>Streaming</value>
  </data>
  <data name="LowMemSwitchToLowQuestion" xml:space="preserve">
    <value>Your game has ran out of memory last time. Do you want to switch to LOW preset and restart game to apply changes?</value>
  </data>
  <data name="Magnesium" xml:space="preserve">
    <value>Magnesium</value>
  </data>
  <data name="Mass" xml:space="preserve">
    <value>Mass</value>
  </data>
  <data name="MaxBackupSaves" xml:space="preserve">
    <value>Max backup saves</value>
  </data>
  <data name="MaxFloatingObjects" xml:space="preserve">
    <value>Max objects</value>
  </data>
  <data name="TotalBotLimit" xml:space="preserve">
    <value>Animal NPC limit</value>
  </data>
  <data name="MedicalRoom_factionAssignmentLabel" xml:space="preserve">
    <value>Assign player to faction</value>
  </data>
  <data name="MedicalRoom_factionAssignmentTooltip" xml:space="preserve">
    <value>Respawned player will be assigned to this medical room's faction</value>
  </data>
  <data name="MedicalRoom_ownershipAssignmentLabel" xml:space="preserve">
    <value>Ownership Assignment</value>
  </data>
  <data name="MedicalRoom_ownershipAssignmentTooltip" xml:space="preserve">
    <value>Medical room's owner will be set to anyone who spawns in it as long as former ownership is set to nobody</value>
  </data>
  <data name="MessageBoxCaptionDoYouWishToPublishScenario" xml:space="preserve">
    <value>PUBLISH SCENARIO</value>
  </data>
  <data name="MessageBoxCaptionDoYouWishToUpdateScenario" xml:space="preserve">
    <value>UPDATE SCENARIO</value>
  </data>
  <data name="MessageBoxCaptionRecommend" xml:space="preserve">
    <value>Recommend Space Engineers</value>
  </data>
  <data name="MessageBoxCaptionRespawn" xml:space="preserve">
    <value>You will lose all ownership and spawn as new player!
Respawn?</value>
  </data>
  <data name="MessageBoxCaptionScenarioPublished" xml:space="preserve">
    <value>SCENARIO PUBLISHED</value>
  </data>
  <data name="MessageBoxCaptionScenarioPublishFailed" xml:space="preserve">
    <value>PUBLISH FAILED</value>
  </data>
  <data name="MessageBoxCaptionTutorial" xml:space="preserve">
    <value>Tutorial</value>
  </data>
  <data name="MessageBoxCaptionVideo" xml:space="preserve">
    <value>Video</value>
  </data>
  <data name="MessageBoxTextAreYouSureEnableOxygen" xml:space="preserve">
    <value>Are you sure you want to enable oxygen? Doing so will cause materials on untouched asteroids to change. This is irreversible.</value>
  </data>
  <data name="MessageBoxTextAreYouSureEnableOxygenPressurization" xml:space="preserve">
    <value>Are you sure you want to enable airtightness? This can have negative influence to performance.</value>
  </data>
  <data name="MessageBoxTextAreYouSureToRemoveAsteroid" xml:space="preserve">
    <value>Are you sure you want to delete selected asteroid? (this can not be undone!)</value>
  </data>
  <data name="MessageBoxTextDoYouWishToPublishScenario" xml:space="preserve">
    <value>Are you sure you want to upload and publish selected scenario on {0} Workshop?
Note that by submitting this item, you agree to the workshop terms of service (see {1}).</value>
  </data>
  <data name="MessageBoxTextDoYouWishToUpdateScenario" xml:space="preserve">
    <value>Are you sure you want to upload and overwrite selected scenario on {0} Workshop?</value>
  </data>
  <data name="MessageBoxTextRecommend" xml:space="preserve">
    <value>If you like Space Engineers, you can recommend it to your {0} friends on the following page.
Recommendations help to grow the community. Thank you!</value>
  </data>
  <data name="MessageBoxTextRestartNeededAfterLanguageSwitch" xml:space="preserve">
    <value>Some texts might need game restart to be reloaded.</value>
  </data>
  <data name="MessageBoxTextRestartNeededAfterRendererSwitch" xml:space="preserve">
    <value>Applied changes will be visible after restarting the game</value>
  </data>
  <data name="MessageBoxTextScenarioNotFound" xml:space="preserve">
    <value>Next scenario was not found and cannot be loaded.
Both {0} and {1} does not exist or contain invalid data.
Please contact scenario author to fix it.</value>
  </data>
  <data name="MessageBoxTextScenarioPublishFailed" xml:space="preserve">
    <value>Failed to publish on {0} Workshop</value>
  </data>
  <data name="MessageBoxTextTutorialQuestion" xml:space="preserve">
    <value>Do you want to see basic tutorial video?</value>
  </data>
  <data name="MessageBoxTextWatchVideo" xml:space="preserve">
    <value>Would you like to watch video before tutorial starts?</value>
  </data>
  <data name="MessageBoxTextWorkshopDownloadFailed" xml:space="preserve">
    <value>Download failed, please try again later.</value>
  </data>
  <data name="MessageBoxTextThumbnailTooBig" xml:space="preserve">
    <value>Thumbnail is too big. Maximum allowed size is 1MB. Re-create the blueprint and try again.</value>
  </data>
  <data name="MissileLauncherReloadingNotification" xml:space="preserve">
    <value>Reloading</value>
  </data>
  <data name="MissionScreenCaption" xml:space="preserve">
    <value>Scenario Settings</value>
  </data>
  <data name="MissionTriggerOtherWon" xml:space="preserve">
    <value>Other side won</value>
  </data>
  <data name="MissionTriggerReachPosition" xml:space="preserve">
    <value>Reach GPS position</value>
  </data>
  <data name="MostActiveDrills" xml:space="preserve">
    <value>MostActiveDrills</value>
  </data>
  <data name="MostActiveProductionBuildings" xml:space="preserve">
    <value>MostActiveProductionBuildings</value>
  </data>
  <data name="MostActiveReactors" xml:space="preserve">
    <value>MostActiveReactors</value>
  </data>
  <data name="MostActiveSensors" xml:space="preserve">
    <value>MostActiveSensors</value>
  </data>
  <data name="MostActiveThrusters" xml:space="preserve">
    <value>MostActiveThrusters</value>
  </data>
  <data name="MostWheels" xml:space="preserve">
    <value>MostWheels</value>
  </data>
  <data name="MultiplayerJoinProductionMultipliers" xml:space="preserve">
    <value>Production multipliers</value>
  </data>
  <data name="MyGuiScreenTriggerBlockDestroyed" xml:space="preserve">
    <value>Block destroyed</value>
  </data>
  <data name="MyGuiScreenTriggerNoSpawn" xml:space="preserve">
    <value>No spawn place</value>
  </data>
  <data name="MyGuiScreenTriggerTimeLimit" xml:space="preserve">
    <value>Time limit</value>
  </data>
  <data name="NewVersionAvailable" xml:space="preserve">
    <value>New version of Space Engineers is available!</value>
  </data>
  <data name="Nickel" xml:space="preserve">
    <value>Nickel</value>
  </data>
  <data name="None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="NotAvailable" xml:space="preserve">
    <value>Not Available</value>
  </data>
  <data name="NotEnoughMaterial" xml:space="preserve">
    <value>Not enough materials to create a new block. At least one steel plate is required.</value>
  </data>
  <data name="NoticeLine_01" xml:space="preserve">
    <value>Powered by VRAGE 2.0</value>
  </data>
  <data name="NoticeLine_02" xml:space="preserve">
    <value>Copyright © 2013-2019 KEEN SWH LTD.</value>
  </data>
  <data name="NoticeLine_03" xml:space="preserve">
    <value>Space Engineers® and VRAGE™ are trademarks of KEEN SWH LTD.</value>
  </data>
  <data name="NoticeLine_04" xml:space="preserve">
    <value>www.keenswh.com</value>
  </data>
  <data name="NoticeLine_05" xml:space="preserve">
    <value>"Space Engineers" uses Havok®.</value>
  </data>
  <data name="NoticeLine_06" xml:space="preserve">
    <value>©Copyright 1999-2008 Havok.com, Inc (and its Licensors). All Rights Reserved.</value>
  </data>
  <data name="NoticeLine_07" xml:space="preserve">
    <value>See www.havok.com for details.</value>
  </data>
  <data name="Department_Licenses" xml:space="preserve">
    <value>3rd Party Software</value>
  </data>
  <data name="NotificationArgAngleGrinder" xml:space="preserve">
    <value>Angle grinder</value>
  </data>
  <data name="NotificationArgDrill" xml:space="preserve">
    <value>Drill</value>
  </data>
  <data name="NotificationArgLargeShip" xml:space="preserve">
    <value>large ship</value>
    <comment>Possible value for argument {1} in NotificationBlockNotAvailableFor ( {0} is not available for {1}. )</comment>
  </data>
  <data name="NotificationArgMissile" xml:space="preserve">
    <value>Rocket</value>
  </data>
  <data name="NotificationArgProjectile" xml:space="preserve">
    <value>Projectile</value>
  </data>
  <data name="NotificationArgSmallShip" xml:space="preserve">
    <value>small ship</value>
    <comment>Possible value for argument {1} in NotificationBlockNotAvailableFor ( {0} is not available for {1}. )</comment>
  </data>
  <data name="NotificationArgStation" xml:space="preserve">
    <value>station</value>
    <comment>Possible value for argument {1} in NotificationBlockNotAvailableFor ( {0} is not available for {1}. )</comment>
  </data>
  <data name="NotificationArgWelder" xml:space="preserve">
    <value>Welder</value>
  </data>
  <data name="NotificationBlockNotAvailableFor" xml:space="preserve">
    <value>{0} {1} is not available for a {2}</value>
    <comment>{0} + {2} are type of grid, {1} is DisplayName</comment>
  </data>
  <data name="NotificationBottleRefill" xml:space="preserve">
    <value>Oxygen refilled from bottles.</value>
  </data>
  <data name="NotificationCannotJumpFromGravity" xml:space="preserve">
    <value>Jump drives cannot be used in natural gravity.</value>
  </data>
  <data name="NotificationCannotJumpIntoGravity" xml:space="preserve">
    <value>Jump drives cannot be used to jump into natural gravity field.</value>
  </data>
  <data name="NotificationCannotJumpOutsideWorld" xml:space="preserve">
    <value>Jump drives cannot be used to jump outside world limits.</value>
  </data>
  <data name="NotificationCharacterBroadcastingOff" xml:space="preserve">
    <value>Broadcasting Off</value>
  </data>
  <data name="NotificationCharacterBroadcastingOn" xml:space="preserve">
    <value>Broadcasting On</value>
  </data>
  <data name="NotificationConnectorsDisabled" xml:space="preserve">
    <value>Connectors Disabled</value>
  </data>
  <data name="NotificationConnectorsEnabled" xml:space="preserve">
    <value>Connectors Enabled</value>
  </data>
  <data name="NotificationParkingSuccessful" xml:space="preserve">
    <value>Parking engaged</value>
  </data>
  <data name="NotificationParkingFailed" xml:space="preserve">
    <value>Unable to park</value>
  </data>
  <data name="NotificationCannotPaint" xml:space="preserve">
    <value>You are not allowed to paint this grid</value>
  </data>
  <data name="NotificationParkingReleased" xml:space="preserve">
    <value>Parking released</value>
  </data>
  <data name="NotificationCopyPasteAsteroidObstructed" xml:space="preserve">
    <value>Can not place asteroids/voxels over ships(except stations), players, or out of world bounds</value>
  </data>
  <data name="NotificationEnergyCritical" xml:space="preserve">
    <value>Energy is critical.</value>
  </data>
  <data name="NotificationEnergyLow" xml:space="preserve">
    <value>Energy is low.</value>
  </data>
  <data name="NotificationEnergyNo" xml:space="preserve">
    <value>No Energy</value>
  </data>
  <data name="NotificationFuelCritical" xml:space="preserve">
    <value>Fuel is critical.</value>
  </data>
  <data name="NotificationFuelLow" xml:space="preserve">
    <value>Fuel is low.</value>
  </data>
  <data name="NotificationFuelNo" xml:space="preserve">
    <value>No Fuel</value>
  </data>
  <data name="NotificationGasBottleRefill" xml:space="preserve">
    <value>Gas refilled from bottles.</value>
  </data>
  <data name="NotificationGridReachedPhysicalLimit" xml:space="preserve">
    <value>Warning! Grid's number of physical shapes is approaching limit. Further modifications may cause issues with physics.</value>
  </data>
  <data name="NotificationHandbrakeOff" xml:space="preserve">
    <value>Handbrake off</value>
  </data>
  <data name="NotificationHandbrakeOn" xml:space="preserve">
    <value>Handbrake on</value>
  </data>
  <data name="NotificationHandbrakeFailedToEngage" xml:space="preserve">
    <value>Cannot engage handbrake</value>
  </data>
  <data name="NotificationHealthCritical" xml:space="preserve">
    <value>Warning: Your health is critically low.</value>
  </data>
  <data name="NotificationHealthLow" xml:space="preserve">
    <value>Warning: Your health is low.</value>
  </data>
  <data name="NotificationHelmetOff" xml:space="preserve">
    <value>Helmet Off</value>
  </data>
  <data name="NotificationHelmetOn" xml:space="preserve">
    <value>Helmet On</value>
  </data>
  <data name="NotificationHintJoystickPressToOpenButtonPanel" xml:space="preserve">
    <value>Access control menu to setup panel's buttons</value>
  </data>
  <data name="NotificationHintJoystickPressToOpenControlPanel" xml:space="preserve">
    <value>Access control menu to open control panel of {0}</value>
  </data>
  <data name="NotificationHintJoystickPressToOpenInventory" xml:space="preserve">
    <value>Press {CONTROL:GUI:VIEW} to open inventory of {0}</value>
  </data>
  <data name="NotificationHintJoystickPressToOpenTerminal" xml:space="preserve">
    <value>Access control menu to open terminal</value>
  </data>
  <data name="NotificationHintLeaveCockpit" xml:space="preserve">
    <value>Press {0} to leave {1}</value>
  </data>
  <data name="NotificationHintLeaveCryoChamber" xml:space="preserve">
    <value>Press {0} to leave cryo chamber</value>
  </data>
  <data name="NotificationHintNoAction" xml:space="preserve">
    <value>Empty</value>
  </data>
  <data name="NotificationHintOpenShipControlPanel" xml:space="preserve">
    <value>Press {0} to open ship control panel</value>
  </data>
  <data name="NotificationHintPressToClimbUpDown" xml:space="preserve">
    <value>Press {0} or {1} to climb up and down</value>
  </data>
  <data name="NotificationHintPressToEnterCockpit" xml:space="preserve">
    <value>Press {0} to enter {1}</value>
  </data>
  <data name="NotificationHintPressToEnterCryochamber" xml:space="preserve">
    <value>Press {0} to enter {1}</value>
  </data>
  <data name="NotificationHintPressToExitCamera" xml:space="preserve">
    <value>Press {0} to exit camera view</value>
  </data>
  <data name="NotificationHintPressToGetDownFromLadder" xml:space="preserve">
    <value>Press {0} to get down from ladder</value>
  </data>
  <data name="NotificationHintLadderBlocked" xml:space="preserve">
    <value>Ladder area is blocked</value>
  </data>
  <data name="NotificationHintPressToGetOnLadder" xml:space="preserve">
    <value>Press {0} to get on ladder</value>
  </data>
  <data name="NotificationHintPressToJumpOffLadder" xml:space="preserve">
    <value>Press {0} to jump off from ladder</value>
  </data>
  <data name="NotificationHintPressToOpenButtonPanel" xml:space="preserve">
    <value>Press {0} to setup panel's buttons</value>
  </data>
  <data name="NotificationHintPressToOpenControlPanel" xml:space="preserve">
    <value>Press {0} to open control panel of {1}</value>
  </data>
  <data name="NotificationHintPressToOpenDoor" xml:space="preserve">
    <value>Press {0} to open/close {1}</value>
  </data>
  <data name="NotificationHintPressToOpenInventory" xml:space="preserve">
    <value>Press {0} to open inventory of {1}</value>
  </data>
  <data name="NotificationHintPressToOpenInventoryConnector" xml:space="preserve">
    <value>Press {0} to open inventory</value>
  </data>
  <data name="NotificationHintPressToOpenTerminal" xml:space="preserve">
    <value>Press {0} to open terminal</value>
  </data>
  <data name="NotificationHintPressToRechargeInMedicalRoom" xml:space="preserve">
    <value>Hold {0} to recharge and heal</value>
  </data>
  <data name="NotificationHintPressToShowScreen" xml:space="preserve">
    <value>Press {0} to show screen</value>
  </data>
  <data name="NotificationHintSwitchWeaponMode" xml:space="preserve">
    <value>Press {0} to switch between single/all weapon mode.</value>
  </data>
  <data name="NotificationHintTurnPowerOff" xml:space="preserve">
    <value>Press {0} to turn power off</value>
  </data>
  <data name="NotificationHintTurnPowerOn" xml:space="preserve">
    <value>Press {0} to turn power on</value>
  </data>
  <data name="NotificationHint_CubeDefaultMountpoint" xml:space="preserve">
    <value>Press {0} to toggle auto orientation</value>
  </data>
  <data name="NotificationJetpackOff" xml:space="preserve">
    <value>Jetpack Off</value>
  </data>
  <data name="NotificationJetpackOffNoHydrogen" xml:space="preserve">
    <value>Jetpack Off (no hydrogen)</value>
  </data>
  <data name="NotificationJetpackOn" xml:space="preserve">
    <value>Jetpack On</value>
  </data>
  <data name="NotificationJoystickColorFormat" xml:space="preserve">
    <value>Press {0} to apply color, access control menu to change color</value>
  </data>
  <data name="NotificationWeaponNotFullyCharged" xml:space="preserve">
    <value>Weapon is only {0} charged!</value>
  </data>
  <data name="NotificationJumpAborted" xml:space="preserve">
    <value>Jump was aborted!</value>
  </data>
  <data name="NotificationJumpDriveNotFullyCharged" xml:space="preserve">
    <value>Jump drive is only {0} charged!</value>
  </data>
  <data name="NotificationJumpWarmupTime" xml:space="preserve">
    <value>Ship will jump in {0} seconds.</value>
  </data>
  <data name="NotificationLandingGearSwitchLocked" xml:space="preserve">
    <value>Landing gears Locked</value>
  </data>
  <data name="NotificationLandingGearSwitchUnlocked" xml:space="preserve">
    <value>Landing gears Unlocked</value>
  </data>
  <data name="NotificationLimitsGridSize" xml:space="preserve">
    <value>Maximum grid size limit reached.</value>
  </data>
  <data name="NotificationLimitsNoFaction" xml:space="preserve">
    <value>Player without faction can not build. Press {0} to join a faction.</value>
  </data>
  <data name="NotificationLimitsPCU" xml:space="preserve">
    <value>PCU limit reached.</value>
  </data>
  <data name="NotificationLimitsPerBlockType" xml:space="preserve">
    <value>Maximum blocks of specific type limit reached.</value>
  </data>
  <data name="NotificationLimitsPlayer" xml:space="preserve">
    <value>Player block limit reached.</value>
  </data>
  <data name="NotificationMeteorInbound" xml:space="preserve">
    <value>Meteor storm inbound.</value>
  </data>
  <data name="NotificationNextScenarioWillLoad" xml:space="preserve">
    <value>Prepare for next scenario ...</value>
  </data>
  <data name="NotificationNoHelmetVariation" xml:space="preserve">
    <value>Cannot remove helmet on this suit.</value>
  </data>
  <data name="NotificationObstructingBlockDuringMerge" xml:space="preserve">
    <value>Cannot merge ships! Some blocks would occupy the same space after the merge!</value>
  </data>
  <data name="NotificationOxygenCritical" xml:space="preserve">
    <value>Oxygen is critical.</value>
  </data>
  <data name="NotificationOxygenLow" xml:space="preserve">
    <value>Oxygen is low.</value>
  </data>
  <data name="NotificationPlayerDemoted_Moderator" xml:space="preserve">
    <value>You have heen demoted to Observer</value>
  </data>
  <data name="NotificationPlayerDemoted_None" xml:space="preserve">
    <value>You have been demoted to Player</value>
  </data>
  <data name="NotificationPlayerDemoted_Scripter" xml:space="preserve">
    <value>You have been demoted to Scripter</value>
  </data>
  <data name="NotificationPlayerDemoted_SpaceMaster" xml:space="preserve">
    <value>You have been demoted to Space Master</value>
  </data>
  <data name="NotificationPlayerPromoted_Admin" xml:space="preserve">
    <value>You have been promoted to Administrator</value>
  </data>
  <data name="NotificationPlayerPromoted_Moderator" xml:space="preserve">
    <value>You have been promoted to Observer</value>
  </data>
  <data name="NotificationPlayerPromoted_Scripter" xml:space="preserve">
    <value>You have been promoted to Scripter</value>
  </data>
  <data name="NotificationPlayerPromoted_SpaceMaster" xml:space="preserve">
    <value>You have been promoted to Space Master</value>
  </data>
  <data name="NotificationProjectorGridSize" xml:space="preserve">
    <value>Incorrect grid size. Blueprint size must match that of the projector.</value>
  </data>
  <data name="NotificationProjectorMultipleGrids" xml:space="preserve">
    <value>Multiple grids are not supported. Only the largest grid will be used.</value>
  </data>
  <data name="NotificationRespawnShipDelete" xml:space="preserve">
    <value>Temporary ship. It will get removed after you leave the game or spawn in a new one.</value>
  </data>
  <data name="NotificationBuildingOnRespawnShip" xml:space="preserve">
    <value>Respawn ship. It will get removed if you spawn a new one.</value>
  </data>
  <data name="NotificationShipEnergyCritical" xml:space="preserve">
    <value>Warning: Ship fuel is critically low. Life support failure imminent.</value>
  </data>
  <data name="NotificationShipEnergyCriticalNoDamage" xml:space="preserve">
    <value>Warning: Ship fuel is critically low.</value>
  </data>
  <data name="NotificationShipEnergyLow" xml:space="preserve">
    <value>Warning: Ship fuel is low. Life support systems may fail.</value>
  </data>
  <data name="NotificationShipEnergyLowNoDamage" xml:space="preserve">
    <value>Warning: Ship fuel is low.</value>
  </data>
  <data name="NotificationStationRotation" xml:space="preserve">
    <value>Station rotation mode, press {0} to switch off</value>
  </data>
  <data name="NotificationStationRotationOff" xml:space="preserve">
    <value>Press {0} for station rotation mode</value>
  </data>
  <data name="NotificationSuitEnergyCritical" xml:space="preserve">
    <value>Warning: Suit energy is critically low. Life support failure imminent.</value>
  </data>
  <data name="NotificationSuitEnergyCriticalNoDamage" xml:space="preserve">
    <value>Warning: Suit energy is critically low.</value>
  </data>
  <data name="NotificationSuitEnergyLow" xml:space="preserve">
    <value>Warning: Suit energy is low. Life support systems may fail.</value>
  </data>
  <data name="NotificationSuitEnergyLowNoDamage" xml:space="preserve">
    <value>Warning: Suit energy is low.</value>
  </data>
  <data name="NotificationSuitFuelCritical" xml:space="preserve">
    <value>Jetpack fuel is critical</value>
  </data>
  <data name="NotificationSuitFuelLow" xml:space="preserve">
    <value>Jetpack fuel is low</value>
  </data>
  <data name="NotificationUsingWeaponType" xml:space="preserve">
    <value>Using {0}</value>
  </data>
  <data name="NotificationWheelNotPlaced" xml:space="preserve">
    <value>Wheel could not be placed.</value>
  </data>
  <data name="Notification_BlueprintScriptRemoved" xml:space="preserve">
    <value>Some scripts were removed from this blueprint because you do not have Scripter permissions</value>
  </data>
  <data name="Notification_ControllableBlockIsDamaged" xml:space="preserve">
    <value>{0} is damaged!</value>
  </data>
  <data name="Notification_NoControl" xml:space="preserve">
    <value>Someone else is using this ship!</value>
  </data>
  <data name="Notification_NoControlAutoPilot" xml:space="preserve">
    <value>Autopilot enabled</value>
  </data>
  <data name="Notification_NoControlLowerPriority" xml:space="preserve">
    <value>Grid control forbidden.
Seat/Remote with higher priority is already occupied.</value>
  </data>
  <data name="Notification_NoControlNotMain" xml:space="preserve">
    <value>This is not main cockpit!</value>
  </data>
  <data name="Notification_NoControlOtherShip" xml:space="preserve">
    <value>A connected ship has taken control</value>
  </data>
  <data name="Notification_NoControlStation" xml:space="preserve">
    <value>Someone else is using this station!</value>
  </data>
  <data name="Notification_PistonHeadAlreadyExists" xml:space="preserve">
    <value>Piston head already exists.</value>
  </data>
  <data name="Notification_PistonHeadNotPlaced" xml:space="preserve">
    <value>Piston head could not be placed.</value>
  </data>
  <data name="Notification_WheelNotPlaced" xml:space="preserve">
    <value>Wheel could not be placed. Try to remove any obstacles first.</value>
  </data>
  <data name="Notification_DeconstructionLoss" xml:space="preserve">
    <value>Some components will be lost if removed.</value>
  </data>
  <data name="Number" xml:space="preserve">
    <value>Number</value>
  </data>
  <data name="O2High" xml:space="preserve">
    <value>High</value>
  </data>
  <data name="O2Low" xml:space="preserve">
    <value>Low</value>
  </data>
  <data name="O2None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="TemperatureFreeze" xml:space="preserve">
    <value>Freeze</value>
  </data>
  <data name="TemperatureCold" xml:space="preserve">
    <value>Cold</value>
  </data>
  <data name="TemperatureWarm" xml:space="preserve">
    <value>Warm</value>
  </data>
  <data name="TemperatureHot" xml:space="preserve">
    <value>Hot</value>
  </data>
  <data name="TemperatureInferno" xml:space="preserve">
    <value>Inferno</value>
  </data>
  <data name="OFF" xml:space="preserve">
    <value>OFF</value>
  </data>
  <data name="ON" xml:space="preserve">
    <value>ON</value>
  </data>
  <data name="OpenAdminScreen" xml:space="preserve">
    <value>Open admin screen</value>
  </data>
  <data name="OpenBlueprints" xml:space="preserve">
    <value>Open blueprint screen</value>
  </data>
  <data name="OpenSpawnScreen" xml:space="preserve">
    <value>Open spawn screen</value>
  </data>
  <data name="OwnerLastLogin" xml:space="preserve">
    <value>OwnerLastLogin</value>
  </data>
  <data name="OwnerLoginTime" xml:space="preserve">
    <value>OwnerLoginTime</value>
  </data>
  <data name="OwnerName" xml:space="preserve">
    <value>OwnerName</value>
  </data>
  <data name="Oxygen_Disabled" xml:space="preserve">
    <value>Oxygen or Airtightness disabled in world settings!</value>
  </data>
  <data name="Oxygen_Filled" xml:space="preserve">
    <value>Filled: {0}% ({1}L/{2}L)</value>
  </data>
  <data name="Oxygen_NotPressurized" xml:space="preserve">
    <value>Room pressure: Not pressurized</value>
  </data>
  <data name="Oxygen_Pressure" xml:space="preserve">
    <value>Room pressure:</value>
  </data>
  <data name="Turbine_WindClearance" xml:space="preserve">
    <value>Wind Clearance: {0}</value>
  </data>
  <data name="Turbine_WindClearanceOptimal" xml:space="preserve">
    <value>Optimal</value>
  </data>
  <data name="Turbine_WindClearanceGood" xml:space="preserve">
    <value>Good</value>
  </data>
  <data name="Turbine_WindClearancePoor" xml:space="preserve">
    <value>Poor</value>
  </data>
  <data name="Turbine_WindClearanceNone" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="Parachute_AutoDeploy" xml:space="preserve">
    <value>Auto deploy</value>
  </data>
  <data name="Parachute_AutoDeployOff" xml:space="preserve">
    <value>Auto deploy off</value>
  </data>
  <data name="Parachute_AutoDeployOn" xml:space="preserve">
    <value>Auto deploy on</value>
  </data>
  <data name="Parachute_AutoDeployTooltip" xml:space="preserve">
    <value>Parachute will auto deploy at auto deploy height if descending to the ground</value>
  </data>
  <data name="Parachute_ConstraintItem" xml:space="preserve">
    <value>Parachute Material</value>
  </data>
  <data name="Parachute_DeployHeightTitle" xml:space="preserve">
    <value>Auto deploy height</value>
  </data>
  <data name="Parachute_DeployHeightTooltip" xml:space="preserve">
    <value>Height that the parachute will automatically deploy if auto deploy is On</value>
  </data>
  <data name="PasteObject" xml:space="preserve">
    <value>Paste object</value>
  </data>
  <data name="Person_FB" xml:space="preserve">
    <value>Like us on Facebook: www.facebook.com/SpaceEngineers</value>
  </data>
  <data name="Person_Twitter" xml:space="preserve">
    <value>Follow us on Twitter: twitter.com/SpaceEngineersG</value>
  </data>
  <data name="Person_Web" xml:space="preserve">
    <value>www.SpaceEngineersGame.com</value>
  </data>
  <data name="PGravity" xml:space="preserve">
    <value>P-Gravity</value>
  </data>
  <data name="PickColorFromCube" xml:space="preserve">
    <value>Pick color from cube into slot</value>
  </data>
  <data name="Planets" xml:space="preserve">
    <value>Planets</value>
  </data>
  <data name="Platinum" xml:space="preserve">
    <value>Platinum</value>
  </data>
  <data name="PlayerCharacterColorBlack" xml:space="preserve">
    <value>Black</value>
  </data>
  <data name="PlayerCharacterColorBlue" xml:space="preserve">
    <value>Blue</value>
  </data>
  <data name="PlayerCharacterColorDefault" xml:space="preserve">
    <value>Shadow</value>
  </data>
  <data name="PlayerCharacterColorGreen" xml:space="preserve">
    <value>Green</value>
  </data>
  <data name="PlayerCharacterColorRed" xml:space="preserve">
    <value>Red</value>
  </data>
  <data name="PlayerCharacterColorWhite" xml:space="preserve">
    <value>White</value>
  </data>
  <data name="PlayerCharacterColorYellow" xml:space="preserve">
    <value>Yellow</value>
  </data>
  <data name="PressNumberAgain" xml:space="preserve">
    <value>Press number again to switch size</value>
  </data>
  <data name="ProductionScreen_AssemblerList" xml:space="preserve">
    <value>List of available assemblers</value>
  </data>
  <data name="ProductionScreen_TerminalControlScreen" xml:space="preserve">
    <value>Show this assembler in the control panel</value>
  </data>
  <data name="ProductionScreen_TerminalInventoryScreen" xml:space="preserve">
    <value>Show this assembler in the inventory screen</value>
  </data>
  <data name="ProgrammableBlock_ButtonCreateFromEditor" xml:space="preserve">
    <value>Create from Editor</value>
  </data>
  <data name="ProgrammableBlock_ButtonDetails" xml:space="preserve">
    <value>Details</value>
  </data>
  <data name="ProgrammableBlock_ButtonRefreshScripts" xml:space="preserve">
    <value>Refresh Scripts</value>
  </data>
  <data name="ProgrammableBlock_ButtonRename" xml:space="preserve">
    <value>Rename</value>
  </data>
  <data name="ProgrammableBlock_ButtonReplaceFromEditor" xml:space="preserve">
    <value>Replace from Editor</value>
  </data>
  <data name="ProgrammableBlock_CodeChanged" xml:space="preserve">
    <value>Code changed</value>
  </data>
  <data name="ProgrammableBlock_CodeEditor_SaveExit" xml:space="preserve">
    <value>Remember &amp; Exit</value>
  </data>
  <data name="ProgrammableBlock_CodeEditor_SaveExit_Tooltip" xml:space="preserve">
    <value>Remembers code inside editor and returns to terminal panel</value>
  </data>
  <data name="ProgrammableBlock_CodeEditor_Title" xml:space="preserve">
    <value>Code Editor</value>
  </data>
  <data name="ProgrammableBlock_DefaultScript_Constructor" xml:space="preserve">
    <value>The constructor, called only once every session and
always before any other method is called. Use it to
initialize your script. 
    
The constructor is optional and can be removed if not
needed.

It's recommended to set RuntimeInfo.UpdateFrequency 
here, which will allow your script to run itself without a 
timer block.</value>
  </data>
  <data name="ProgrammableBlock_DefaultScript_Main" xml:space="preserve">
    <value>The main entry point of the script, invoked every time
one of the programmable block's Run actions are invoked,
or the script updates itself. The updateSource argument
describes where the update came from.

The method itself is required, but the arguments above
can be removed if not needed.</value>
  </data>
  <data name="ProgrammableBlock_DefaultScript_Save" xml:space="preserve">
    <value>Called when the program needs to save its state. Use
this method to save your state to the Storage field
or some other means. 

This method is optional and can be removed if not
needed.</value>
  </data>
  <data name="ProgrammableBlock_DeleteScriptDialogText" xml:space="preserve">
    <value>Are you sure you want to delete this script ?</value>
  </data>
  <data name="ProgrammableBlock_Editor_BrowseWorkshop_Tooltip" xml:space="preserve">
    <value>Open screen with list of available scripts</value>
  </data>
  <data name="ProgrammableBlock_Editor_CharacterLimit" xml:space="preserve">
    <value>Character Limit :</value>
  </data>
  <data name="ProgrammableBlock_Editor_CheckCode" xml:space="preserve">
    <value>Check Code</value>
  </data>
  <data name="ProgrammableBlock_Editor_CheckingCode" xml:space="preserve">
    <value>Checking Code</value>
  </data>
  <data name="ProgrammableBlock_Editor_CheckCode_Tooltip" xml:space="preserve">
    <value>Checks code inside editor for errors</value>
  </data>
  <data name="ProgrammableBlock_Editor_CompilationFailed" xml:space="preserve">
    <value>Compilation failed</value>
  </data>
  <data name="ProgrammableBlock_Editor_NotSupported" xml:space="preserve">
    <value>Script compilation and execution is not supported.</value>
  </data>
  <data name="ProgrammableBlock_Editor_CompilationFailedErrorFormat" xml:space="preserve">
    <value>Line {0} : {1}</value>
  </data>
  <data name="ProgrammableBlock_Editor_CompilationFailedErrorList" xml:space="preserve">
    <value>Error list</value>
  </data>
  <data name="ProgrammableBlock_Editor_CompilationOk" xml:space="preserve">
    <value>Compilation successful.</value>
  </data>
  <data name="ProgrammableBlock_Editor_CompilationOkWarningList" xml:space="preserve">
    <value>Warning list</value>
  </data>
  <data name="ProgrammableBlock_Editor_Help" xml:space="preserve">
    <value>Help</value>
  </data>
  <data name="ProgrammableBlock_Editor_HelpTooltip" xml:space="preserve">
    <value>Opens workshop page with description about in-game programming</value>
  </data>
  <data name="ProgrammableBlock_Editor_LineNo" xml:space="preserve">
    <value>Line : {0} / {1}</value>
  </data>
  <data name="ProgrammableBlock_Editor_RememberCode" xml:space="preserve">
    <value>Remember code</value>
  </data>
  <data name="ProgrammableBlock_Editor_RememberCode_Tooltip" xml:space="preserve">
    <value>Remember current script and leave editor window open</value>
  </data>
  <data name="ProgrammableBlock_Editor_TextTooLong" xml:space="preserve">
    <value>Text is too long. It won't be saved.</value>
  </data>
  <data name="ProgrammableBlock_Error_NotExperimental" xml:space="preserve">
    <value>Error: This world is not in experimental mode.</value>
  </data>
  <data name="ProgrammableBlock_Error_ScriptsDisabled" xml:space="preserve">
    <value>Error: This world has disabled scripts.</value>
  </data>
  <data name="ProgrammableBlock_Exception_AllreadyRunning" xml:space="preserve">
    <value>Program is already running.</value>
  </data>
  <data name="ProgrammableBlock_Exception_ExceptionCaught" xml:space="preserve">
    <value>Caught exception during execution of script:</value>
  </data>
  <data name="ProgrammableBlock_Exception_NestedTooComplex" xml:space="preserve">
    <value>Script execution halted temporarily. The combined execution between a calling programmable block and this script became too complex. This script has not been terminated, but the calling script has.</value>
  </data>
  <data name="ProgrammableBlock_Exception_NoAssembly" xml:space="preserve">
    <value>Assembly not found. Please compile script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_NoMain" xml:space="preserve">
    <value>Main method not found. Please add Main method into script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_NotAllowed" xml:space="preserve">
    <value>In-game scripts are disabled for this world</value>
  </data>
  <data name="ProgrammableBlock_Exception_NoValidConstructor" xml:space="preserve">
    <value>This program has no valid constructor.</value>
  </data>
  <data name="ProgrammableBlock_Exception_Ownershipchanged" xml:space="preserve">
    <value>Ownership of programmable block changed. Please recompile program.</value>
  </data>
  <data name="ProgrammableBlock_Exception_TooComplex" xml:space="preserve">
    <value>Script execution terminated, script is too complex. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_OutOfTime" xml:space="preserve">
    <value>Script execution terminated, script ran longer than the {0} s time limit. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_OutOfInstructions" xml:space="preserve">
    <value>Script execution terminated, script used more instructions than the {0} limit. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_OutOfMethodCalls" xml:space="preserve">
    <value>Script execution terminated, script used more method calls than the {0} limit. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_OutOfCallChainDepth" xml:space="preserve">
    <value>Script execution terminated, script had higher call chain depth than the {0} limit. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_Exception_OutOfMemory" xml:space="preserve">
    <value>Script execution terminated, script is estimated to use a higher amount of memory than the {0} limit. Please edit and rebuild script.</value>
  </data>
  <data name="ProgrammableBlock_NewScriptName" xml:space="preserve">
    <value>Enter new name</value>
  </data>
  <data name="ProgrammableBlock_OpenInWorkshop" xml:space="preserve">
    <value />
  </data>
  <data name="ProgrammableBlock_PublishScriptDialogText" xml:space="preserve">
    <value>Do you want to publish this script?</value>
  </data>
  <data name="WorkshopItemPublished" xml:space="preserve">
    <value>PUBLISHED</value>
  </data>
  <data name="ProgrammableBlock_PublishScriptPublished" xml:space="preserve">
    <value>SCRIPT PUBLISHED</value>
  </data>
  <data name="ProgrammableBlock_ReplaceScriptDialogText" xml:space="preserve">
    <value>Are you sure to replace existing script with new one from editor ?</value>
  </data>
  <data name="ProgrammableBlock_ReplaceScriptNameDialogText" xml:space="preserve">
    <value>Script with the name  {0} already exists. Do you want to replace it?</value>
  </data>
  <data name="ProgrammableBlock_ReplaceScriptNameDialogTitle" xml:space="preserve">
    <value>Replace</value>
  </data>
  <data name="ProgrammableBlock_ReplaceScriptNameUsed" xml:space="preserve">
    <value>Cannot rename script because it is used by another process.</value>
  </data>
  <data name="ProgrammableBlock_SaveChanges" xml:space="preserve">
    <value>Do you want to remember changes ?</value>
  </data>
  <data name="ProgrammableBlock_ScriptNotFound" xml:space="preserve">
    <value>Cannot find the script file</value>
  </data>
  <data name="ProgrammableBlock_ScriptsScreenTitle" xml:space="preserve">
    <value>Scripts Screen</value>
  </data>
  <data name="QuickstartDX11NotAvailable" xml:space="preserve">
    <value>It seems that your system does not support DirectX 11, game will load scenario with no planets</value>
  </data>
  <data name="QuickstartDX11PleaseRestartGame" xml:space="preserve">
    <value>Please restart the game to finish switching to DX11</value>
  </data>
  <data name="QuickstartDX11SwitchQuestion" xml:space="preserve">
    <value>Please switch to DirectX 11 to play a planet scenario</value>
  </data>
  <data name="QuickstartNoDx9SelectDifferent" xml:space="preserve">
    <value>It seems that your system does not support DirectX 11, please select scenario with no planets</value>
  </data>
  <data name="QuickstartNoPlanets" xml:space="preserve">
    <value>Game will load scenario with no planets</value>
  </data>
  <data name="QuickstartSelectDifferent" xml:space="preserve">
    <value>Please select scenario with no planets</value>
  </data>
  <data name="Quote00Author" xml:space="preserve">
    <value>Theodore Von Karman</value>
  </data>
  <data name="Quote00Text" xml:space="preserve">
    <value>Scientists discover the world that exists; Engineers create the world that never was.</value>
  </data>
  <data name="Quote01Author" xml:space="preserve">
    <value>Max Planck</value>
  </data>
  <data name="Quote01Text" xml:space="preserve">
    <value>Scientific discovery and scientific knowledge have been achieved only by those who have gone in pursuit of it without any practical purpose whatsoever in view.</value>
  </data>
  <data name="Quote02Author" xml:space="preserve">
    <value>Archimedes</value>
  </data>
  <data name="Quote02Text" xml:space="preserve">
    <value>Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.</value>
  </data>
  <data name="Quote03Author" xml:space="preserve">
    <value>Arthur C. Clarke</value>
  </data>
  <data name="Quote03Text" xml:space="preserve">
    <value>When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.</value>
  </data>
  <data name="Quote04Author" xml:space="preserve">
    <value>Bertrand Russell</value>
  </data>
  <data name="Quote04Text" xml:space="preserve">
    <value>Science may set limits to knowledge, but should not set limits to imagination.</value>
  </data>
  <data name="Quote05Author" xml:space="preserve">
    <value>Indiana Jones</value>
  </data>
  <data name="Quote05Text" xml:space="preserve">
    <value>Nothing shocks me. I'm a scientist.</value>
  </data>
  <data name="Quote06Author" xml:space="preserve">
    <value>Immanuel Kant</value>
  </data>
  <data name="Quote06Text" xml:space="preserve">
    <value>Science is organized knowledge. Wisdom is organized life.</value>
  </data>
  <data name="Quote07Author" xml:space="preserve">
    <value>Max Planck</value>
  </data>
  <data name="Quote07Text" xml:space="preserve">
    <value>A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.</value>
  </data>
  <data name="Quote08Author" xml:space="preserve">
    <value>Benjamin Franklin</value>
  </data>
  <data name="Quote08Text" xml:space="preserve">
    <value>An investment in knowledge pays the best interest.</value>
  </data>
  <data name="Quote09Author" xml:space="preserve">
    <value>Albert Einstein</value>
  </data>
  <data name="Quote09Text" xml:space="preserve">
    <value>Anyone who has never made a mistake has never tried anything new.</value>
  </data>
  <data name="Quote10Author" xml:space="preserve">
    <value>Leonardo da Vinci</value>
  </data>
  <data name="Quote10Text" xml:space="preserve">
    <value>Nature never breaks her own laws.</value>
  </data>
  <data name="Quote11Author" xml:space="preserve">
    <value>Leonardo da Vinci</value>
  </data>
  <data name="Quote11Text" xml:space="preserve">
    <value>Simplicity is the ultimate sophistication.</value>
  </data>
  <data name="Quote12Author" xml:space="preserve">
    <value>Leonardo da Vinci</value>
  </data>
  <data name="Quote12Text" xml:space="preserve">
    <value>Where there is shouting, there is no true knowledge.</value>
  </data>
  <data name="Quote13Author" xml:space="preserve">
    <value>Leonardo da Vinci</value>
  </data>
  <data name="Quote13Text" xml:space="preserve">
    <value>I have offended God and mankind because my work didn't reach the quality it should have.</value>
  </data>
  <data name="Quote14Author" xml:space="preserve">
    <value>Leonardo da Vinci</value>
  </data>
  <data name="Quote14Text" xml:space="preserve">
    <value>All our knowledge has its origins in our perceptions.</value>
  </data>
  <data name="Quote15Author" xml:space="preserve">
    <value>Galileo Galilei</value>
  </data>
  <data name="Quote15Text" xml:space="preserve">
    <value>By denying scientific principles, one may maintain any paradox.</value>
  </data>
  <data name="Quote16Author" xml:space="preserve">
    <value>Galileo Galilei</value>
  </data>
  <data name="Quote16Text" xml:space="preserve">
    <value>Mathematics is the language in which God has written the universe.</value>
  </data>
  <data name="Quote17Author" xml:space="preserve">
    <value>Galileo Galilei</value>
  </data>
  <data name="Quote17Text" xml:space="preserve">
    <value>If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.</value>
  </data>
  <data name="Quote18Author" xml:space="preserve">
    <value>Johann W. Goethe</value>
  </data>
  <data name="Quote18Text" xml:space="preserve">
    <value>We see only what we know.</value>
  </data>
  <data name="Quote19Author" xml:space="preserve">
    <value>Niels H. D. Bohr</value>
  </data>
  <data name="Quote19Text" xml:space="preserve">
    <value>If anybody says he can think about quantum problems without getting giddy, that only shows he has not understood the first thing about them.</value>
  </data>
  <data name="Quote20Author" xml:space="preserve">
    <value>Ancient paradox</value>
  </data>
  <data name="Quote20Text" xml:space="preserve">
    <value>Only one thing is certain - that is, nothing is certain. If this statement is true, it is also false.</value>
  </data>
  <data name="Quote21Author" xml:space="preserve">
    <value>Richard Feynman</value>
  </data>
  <data name="Quote21Text" xml:space="preserve">
    <value>Scientists are explorers. Philosophers are tourists.</value>
  </data>
  <data name="Quote22Author" xml:space="preserve">
    <value>Walter Bagehot</value>
  </data>
  <data name="Quote22Text" xml:space="preserve">
    <value>A great pleasure in life is doing what people say you cannot do.</value>
  </data>
  <data name="Quote23Author" xml:space="preserve">
    <value>Thomas A. Edison</value>
  </data>
  <data name="Quote23Text" xml:space="preserve">
    <value>Genius is one percent inspiration and ninety-nine percent perspiration.</value>
  </data>
  <data name="Quote24Author" xml:space="preserve">
    <value>Socrates</value>
  </data>
  <data name="Quote24Text" xml:space="preserve">
    <value>I know one thing: that I know nothing.</value>
  </data>
  <data name="Quote25Author" xml:space="preserve">
    <value>Arthur C. Clarke</value>
  </data>
  <data name="Quote25Text" xml:space="preserve">
    <value>Any sufficiently advanced technology is indistinguishable from magic.</value>
  </data>
  <data name="Quote26Author" xml:space="preserve">
    <value>William Gibson</value>
  </data>
  <data name="Quote26Text" xml:space="preserve">
    <value>When you want to know how things really work, study them when they're coming apart.</value>
  </data>
  <data name="Quote27Author" xml:space="preserve">
    <value>Scott Adams</value>
  </data>
  <data name="Quote27Text" xml:space="preserve">
    <value>Engineers like to solve problems. If there are no problems handily available, they will create their own problems.</value>
  </data>
  <data name="Quote28Author" xml:space="preserve">
    <value>Robert A. Heinlein</value>
  </data>
  <data name="Quote28Text" xml:space="preserve">
    <value>One man's "magic" is another man's engineering. "Supernatural" is a null word.</value>
  </data>
  <data name="Quote29Author" xml:space="preserve">
    <value>Freeman Dyson</value>
  </data>
  <data name="Quote29Text" xml:space="preserve">
    <value>A good scientist is a person with original ideas. A good engineer is a person who makes a design that works with as few original ideas as possible. There are no prima donnas in engineering.</value>
  </data>
  <data name="Quote30Author" xml:space="preserve">
    <value>Freeman Dyson</value>
  </data>
  <data name="Quote30Text" xml:space="preserve">
    <value>Aviation is the branch of engineering that is least forgiving of mistakes.</value>
  </data>
  <data name="Quote31Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote31Text" xml:space="preserve">
    <value>A space engineer is a professional practitioner who uses scientific knowledge, mathematics, physics, astronomy, propulsion technology, materials science, structural analysis, manufacturing and ingenuity to solve practical problems in space.</value>
  </data>
  <data name="Quote32Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote32Text" xml:space="preserve">
    <value>Space engineers design materials, structures, and systems while considering the limitations imposed by practicality, regulation, safety, ethicality and cost.</value>
  </data>
  <data name="Quote33Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote33Text" xml:space="preserve">
    <value>Space engineers are grounded in applied sciences, and their work in research and development is distinct from the basic research focus of space scientists.</value>
  </data>
  <data name="Quote34Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote34Text" xml:space="preserve">
    <value>In war times, space engineering involves military engineering as well. Such tasks typically include construction and demolition tasks under combat conditions.</value>
  </data>
  <data name="Quote35Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote35Text" xml:space="preserve">
    <value>Space engineers are in a high demand, especially since the Second Space Race of 2029.</value>
  </data>
  <data name="Quote36Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote36Text" xml:space="preserve">
    <value>Space engineers take pride for their ability to get the job done right - no matter how big, how complex, or how remote.</value>
  </data>
  <data name="Quote37Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote37Text" xml:space="preserve">
    <value>The word engineer is derived from the Latin roots 'ingeniare' ("to contrive, devise") and 'ingenium' ("cleverness").</value>
  </data>
  <data name="Quote38Author" xml:space="preserve">
    <value>Anonym</value>
  </data>
  <data name="Quote38Text" xml:space="preserve">
    <value>To the optimist, the glass is half full. To the pessimist, the glass is half empty. To the engineer, the glass is twice as big as it needs to be.</value>
  </data>
  <data name="Quote39Author" xml:space="preserve">
    <value>Albert Einstein</value>
  </data>
  <data name="Quote39Text" xml:space="preserve">
    <value>Scientists investigate that which already is; engineers create that which has never been.</value>
  </data>
  <data name="Quote40Author" xml:space="preserve">
    <value>U.S. Army Ordnance</value>
  </data>
  <data name="Quote40Text" xml:space="preserve">
    <value>Tracers work both ways.</value>
  </data>
  <data name="Quote41Author" xml:space="preserve">
    <value>USAF Ammo Troop</value>
  </data>
  <data name="Quote41Text" xml:space="preserve">
    <value>If you see a bomb technician running, follow him.</value>
  </data>
  <data name="Quote42Author" xml:space="preserve">
    <value>Anonym</value>
  </data>
  <data name="Quote42Text" xml:space="preserve">
    <value>The only time you have too much fuel is when you're on fire.</value>
  </data>
  <data name="Quote43Author" xml:space="preserve">
    <value>Anonym</value>
  </data>
  <data name="Quote43Text" xml:space="preserve">
    <value>Never trade luck for skill.</value>
  </data>
  <data name="Quote44Author" xml:space="preserve">
    <value>Jon McBride</value>
  </data>
  <data name="Quote44Text" xml:space="preserve">
    <value>A pilot who doesn't have any fear probably isn't flying his plane to its maximum.</value>
  </data>
  <data name="Quote45Author" xml:space="preserve">
    <value>Alexander Calder</value>
  </data>
  <data name="Quote45Text" xml:space="preserve">
    <value>To an engineer, good enough means perfect. With an artist, there's no such thing as perfect.</value>
  </data>
  <data name="Quote46Author" xml:space="preserve">
    <value>Buzz Aldrin</value>
  </data>
  <data name="Quote46Text" xml:space="preserve">
    <value>Mars is there, waiting to be reached.</value>
  </data>
  <data name="Quote47Author" xml:space="preserve">
    <value>Neil Armstrong</value>
  </data>
  <data name="Quote47Text" xml:space="preserve">
    <value>This is one small step for a man, one giant leap for mankind.</value>
  </data>
  <data name="Quote48Author" xml:space="preserve">
    <value>Yuri Gagarin</value>
  </data>
  <data name="Quote48Text" xml:space="preserve">
    <value>I see Earth! It is so beautiful!</value>
  </data>
  <data name="Quote49Author" xml:space="preserve">
    <value>Yuri Gagarin</value>
  </data>
  <data name="Quote49Text" xml:space="preserve">
    <value>I could have gone on flying through space forever.</value>
  </data>
  <data name="Quote50Author" xml:space="preserve">
    <value>Michael Collins</value>
  </data>
  <data name="Quote50Text" xml:space="preserve">
    <value>To go places and do things that have never been done before - that's what living is all about.</value>
  </data>
  <data name="Quote51Author" xml:space="preserve">
    <value>Ralph W. Emerson</value>
  </data>
  <data name="Quote51Text" xml:space="preserve">
    <value>Do not go where the path may lead, go instead where there is no path and leave a trail.</value>
  </data>
  <data name="Quote52Author" xml:space="preserve">
    <value>Yuri Gagarin</value>
  </data>
  <data name="Quote52Text" xml:space="preserve">
    <value>To be the first to enter the cosmos, to engage, single-handed, in an unprecedented duel with nature - could one dream of anything more?</value>
  </data>
  <data name="Quote53Author" xml:space="preserve">
    <value>Yuri Gagarin</value>
  </data>
  <data name="Quote53Text" xml:space="preserve">
    <value>The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.</value>
  </data>
  <data name="Quote54Author" xml:space="preserve">
    <value>Robert H. Goddard</value>
  </data>
  <data name="Quote54Text" xml:space="preserve">
    <value>The dreams of yesterday are the hopes of today and the reality of tomorrow.</value>
  </data>
  <data name="Quote55Author" xml:space="preserve">
    <value>Gene Kranz</value>
  </data>
  <data name="Quote55Text" xml:space="preserve">
    <value>Failure is not an option.</value>
  </data>
  <data name="Quote56Author" xml:space="preserve">
    <value>Albert Einstein</value>
  </data>
  <data name="Quote56Text" xml:space="preserve">
    <value>No amount of experimentation can ever prove me right; a single experiment can prove me wrong.</value>
  </data>
  <data name="Quote57Author" xml:space="preserve">
    <value>George B. Shaw</value>
  </data>
  <data name="Quote57Text" xml:space="preserve">
    <value>Science never solves a problem without creating ten more.</value>
  </data>
  <data name="Quote58Author" xml:space="preserve">
    <value>The first law of thermodynamics</value>
  </data>
  <data name="Quote58Text" xml:space="preserve">
    <value>The law of conservation of energy states that energy can be neither created nor destroyed. However, energy can change forms, and energy can flow from one place to another. The total energy of an isolated system remains the same.</value>
  </data>
  <data name="Quote59Author" xml:space="preserve">
    <value>The first law of thermodynamics</value>
  </data>
  <data name="Quote59Text" xml:space="preserve">
    <value>The flow of heat is a form of energy transfer. In other words, a quantity of heat that flows from a hot body to a cold one can be expressed as an amount of energy being transferred from the hot body to the cold one.</value>
  </data>
  <data name="Quote60Author" xml:space="preserve">
    <value>Newton's first law</value>
  </data>
  <data name="Quote60Text" xml:space="preserve">
    <value>Every body persists in its state of being at rest or of moving uniformly straight forward, except insofar as it is compelled to change its state by force impressed.</value>
  </data>
  <data name="Quote61Author" xml:space="preserve">
    <value>Newton's first law</value>
  </data>
  <data name="Quote61Text" xml:space="preserve">
    <value>An object that is at rest will stay at rest unless an external force acts upon it.</value>
  </data>
  <data name="Quote62Author" xml:space="preserve">
    <value>Newton's first law</value>
  </data>
  <data name="Quote62Text" xml:space="preserve">
    <value>An object that is in motion will not change its velocity unless an external force acts upon it.</value>
  </data>
  <data name="Quote63Author" xml:space="preserve">
    <value>Newton's second law</value>
  </data>
  <data name="Quote63Text" xml:space="preserve">
    <value>The acceleration of a body is directly proportional to, and in the same direction as, the net force acting on the body, and inversely proportional to its mass.</value>
  </data>
  <data name="Quote64Author" xml:space="preserve">
    <value>Newton's third law</value>
  </data>
  <data name="Quote64Text" xml:space="preserve">
    <value>To every action there is always an equal and opposite reaction: or the forces of two bodies on each other are always equal and are directed in opposite directions.</value>
  </data>
  <data name="Quote65Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote65Text" xml:space="preserve">
    <value>SCIENTIFIC METHOD: principles and procedures for the systematic pursuit of knowledge involving the recognition and formulation of a problem, the collection of data through observation and experiment, and the formulation and testing of hypotheses.</value>
  </data>
  <data name="Quote66Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote66Text" xml:space="preserve">
    <value>To be termed scientific, a method of inquiry must be based on empirical and measurable evidence subject to specific principles of reasoning.</value>
  </data>
  <data name="Quote67Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote67Text" xml:space="preserve">
    <value>The laws of science or scientific laws are statements that describe, predict, and perhaps explain why, a range of phenomena behave as they appear to in nature.</value>
  </data>
  <data name="Quote68Author" xml:space="preserve">
    <value>Wikipedia, 2077</value>
  </data>
  <data name="Quote68Text" xml:space="preserve">
    <value>Scientific laws are strongly supported by empirical evidence - they are scientific knowledge that experiments have repeatedly verified (and never falsified).</value>
  </data>
  <data name="Quote69Author" xml:space="preserve">
    <value>Newton's law of universal gravitation</value>
  </data>
  <data name="Quote69Text" xml:space="preserve">
    <value>Every point mass in the universe attracts every other point mass with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them.</value>
  </data>
  <data name="Quote70Author" xml:space="preserve">
    <value>Albert Einstein</value>
  </data>
  <data name="Quote70Text" xml:space="preserve">
    <value>Creativity is intelligence having fun.</value>
  </data>
  <data name="Reactor" xml:space="preserve">
    <value>Reactor</value>
  </data>
  <data name="RefreshBlueprints" xml:space="preserve">
    <value>Refresh blueprints</value>
  </data>
  <data name="RemoteAccess_Description" xml:space="preserve">
    <value>You can remotely access grids in the world using the antenna in your suit. Make sure your antenna is enabled.
(Check the antenna symbol in the bottom left corner of the in-game HUD)

To access a grid, it must be powered and have an antenna. You also need to stay within the antenna broadcast range to be able to access it.

You can control grids from a distance by equipping them with a remote control block.</value>
  </data>
  <data name="RemoteControlCoord" xml:space="preserve">
    <value>Coords:</value>
  </data>
  <data name="RemoteControlUsedBy" xml:space="preserve">
    <value>Controlled by another player: </value>
  </data>
  <data name="RemoteControlWaypoint" xml:space="preserve">
    <value>Current waypoint:</value>
  </data>
  <data name="Remove" xml:space="preserve">
    <value>Remove</value>
  </data>
  <data name="RemoveAll" xml:space="preserve">
    <value>Remove all</value>
  </data>
  <data name="RemoveProjectionButton" xml:space="preserve">
    <value>Remove</value>
  </data>
  <data name="RenderQuality" xml:space="preserve">
    <value>Render quality</value>
  </data>
  <data name="RenderQualityExtreme" xml:space="preserve">
    <value>Photo Mode</value>
  </data>
  <data name="RenderQualityHigh" xml:space="preserve">
    <value>High</value>
  </data>
  <data name="RenderQualityNormal" xml:space="preserve">
    <value>Normal</value>
  </data>
  <data name="ReplaceWithClipboard" xml:space="preserve">
    <value>Replace with clipboard</value>
  </data>
  <data name="RespawnShip" xml:space="preserve">
    <value>Respawn Ship</value>
  </data>
  <data name="PlanetRespawnPod" xml:space="preserve">
    <value>{0} Drop Pod</value>
  </data>
  <data name="RunningLevelScripts" xml:space="preserve">
    <value>Running Mission Scripts</value>
  </data>
  <data name="RunningStateMachines" xml:space="preserve">
    <value>Running State Machines</value>
  </data>
  <data name="SafeZone_CubeAxis" xml:space="preserve">
    <value>Cube Axis:</value>
  </data>
  <data name="SafeZone_Cubical" xml:space="preserve">
    <value>Cubical</value>
  </data>
  <data name="SafeZone_ListOfEntities" xml:space="preserve">
    <value>List of Entities:</value>
  </data>
  <data name="SafeZone_Mode" xml:space="preserve">
    <value>Mode:</value>
  </data>
  <data name="SafeZone_SafeZoneFilter" xml:space="preserve">
    <value>Safe Zone Filter:</value>
  </data>
  <data name="SafeZone_SelectZoneShape" xml:space="preserve">
    <value>Select Zone Shape:</value>
  </data>
  <data name="SafeZone_Spherical" xml:space="preserve">
    <value>Spherical</value>
  </data>
  <data name="ScenarioProgressDestroyBlocks" xml:space="preserve">
    <value>Destroy blocks:</value>
  </data>
  <data name="ScenarioProgressLimitedLives" xml:space="preserve">
    <value>Limited lives: {0} left</value>
  </data>
  <data name="ScenarioProgressLoseConditions" xml:space="preserve">
    <value>Lose conditions</value>
  </data>
  <data name="ScenarioProgressNoSpawn" xml:space="preserve">
    <value>Spend more than {0} seconds in respawn screen.</value>
  </data>
  <data name="ScenarioProgressOthersLost" xml:space="preserve">
    <value>All others lost. Players pending:</value>
  </data>
  <data name="ScenarioProgressPositionLeft" xml:space="preserve">
    <value>Leave sphere [{0:0},{1:0},{2:0}], radius {3:0} meters</value>
  </data>
  <data name="ScenarioProgressPositionReached" xml:space="preserve">
    <value>Get closer than {3:0} meters to [{0:0},{1:0},{2:0}]</value>
  </data>
  <data name="ScenarioProgressSomeoneWon" xml:space="preserve">
    <value>Somebody else wins the scenario. Possible winners:</value>
  </data>
  <data name="ScenarioProgressTimeLimit" xml:space="preserve">
    <value>Scenario time limit {0} minutes</value>
  </data>
  <data name="ScenarioProgressWinConditions" xml:space="preserve">
    <value>Win conditions</value>
  </data>
  <data name="ScenarioSettings_CanJoinRunning" xml:space="preserve">
    <value>Players can join when game is already running</value>
  </data>
  <data name="ScenarioSettings_CanJoinRunningShort" xml:space="preserve">
    <value>Players can join running game</value>
  </data>
  <data name="ScreenButtonBattle" xml:space="preserve">
    <value>Battle</value>
  </data>
  <data name="ScreenCaptionAISchool" xml:space="preserve">
    <value>AI School Scenario</value>
  </data>
  <data name="ScreenCaptionScenario" xml:space="preserve">
    <value>Scenario</value>
  </data>
  <data name="ScreenCaptionTutorials" xml:space="preserve">
    <value>Tutorials</value>
  </data>
  <data name="ScreenCaptionVideoOptions" xml:space="preserve">
    <value>Video options</value>
  </data>
  <data name="ScreenCaptionWorldGeneratorSettings" xml:space="preserve">
    <value>World generator settings</value>
  </data>
  <data name="ScreenCubeBuilderAddGoodAiBot" xml:space="preserve">
    <value>Add GoodAI bot</value>
  </data>
  <data name="ScreenCubeBuilderNewLargeShip" xml:space="preserve">
    <value>New Large Ship</value>
  </data>
  <data name="ScreenCubeBuilderNewSmallShip" xml:space="preserve">
    <value>New Small Ship</value>
  </data>
  <data name="ScreenCubeBuilderNewStation" xml:space="preserve">
    <value>New Station</value>
  </data>
  <data name="ScreenDebugAdminMenu_AdminTools" xml:space="preserve">
    <value>Admin Tools</value>
  </data>
  <data name="ScreenDebugAdminMenu_Caption" xml:space="preserve">
    <value>Space Master</value>
  </data>
  <data name="ScreenDebugAdminMenu_Cleanup" xml:space="preserve">
    <value>Trash Removal</value>
  </data>
  <data name="ScreenDebugAdminMenu_Controlled" xml:space="preserve">
    <value>Controlled</value>
  </data>
  <data name="ScreenDebugAdminMenu_Depower" xml:space="preserve">
    <value>Depower</value>
  </data>
  <data name="ScreenDebugAdminMenu_DepowerTrash" xml:space="preserve">
    <value>Depower trash</value>
  </data>
  <data name="ScreenDebugAdminMenu_EntityList" xml:space="preserve">
    <value>Entity List</value>
  </data>
  <data name="ScreenDebugAdminMenu_GlobalSafeZone" xml:space="preserve">
    <value>Global Permissions</value>
  </data>
  <data name="ScreenDebugAdminMenu_Invulnerable" xml:space="preserve">
    <value>Invulnerable</value>
  </data>
  <data name="ScreenDebugAdminMenu_InvulnerableToolTip" xml:space="preserve">
    <value>Makes you invulnerable to all damage.</value>
  </data>
  <data name="ScreenDebugAdminMenu_MedbayNotification" xml:space="preserve">
    <value>Removing ships or stations with Respawn point can be dangerous, because you can remove players' only respawn points, be careful</value>
  </data>
  <data name="ScreenDebugAdminMenu_ModeSelect" xml:space="preserve">
    <value>Admin Screen</value>
  </data>
  <data name="ScreenDebugAdminMenu_Powered" xml:space="preserve">
    <value>Powered</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveCharacterNotification" xml:space="preserve">
    <value>Cannot remove online player!</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveSeatedCharacterNotification" xml:space="preserve">
    <value>Cannot remove seated player!</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveFloating" xml:space="preserve">
    <value>Remove floating obj.</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveOwner" xml:space="preserve">
    <value>Remove inactive owner and his grids</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveOwnerToolTip" xml:space="preserve">
    <value>Remove inactive owner and all his grids, remove him from checkpoint too. Owner must be offline, or kicked/banned first</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplicateEverythingServer_Tooltip" xml:space="preserve">
    <value>You are on server and allready have all objects</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones" xml:space="preserve">
    <value>Safe Zones</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowBuilding" xml:space="preserve">
    <value>Allow Building</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowBuildingProjections" xml:space="preserve">
    <value>Allow Building Projections</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowDamage" xml:space="preserve">
    <value>Allow Damage</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowDrilling" xml:space="preserve">
    <value>Allow Drilling</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowGrinding" xml:space="preserve">
    <value>Allow Grinding</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowShooting" xml:space="preserve">
    <value>Allow Shooting</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowVoxelHands" xml:space="preserve">
    <value>Allow Voxel Hands</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowWelding" xml:space="preserve">
    <value>Allow Welding</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_ChangePosition" xml:space="preserve">
    <value>Change Position</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_ConfigureFilter" xml:space="preserve">
    <value>Configure Filter</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_FilterContained" xml:space="preserve">
    <value>Add Contained</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_MoveToSafeZone" xml:space="preserve">
    <value>Move To Safe Zone</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_NewSafeZone" xml:space="preserve">
    <value>New Safe Zone</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_SelectSafeZone" xml:space="preserve">
    <value>Select Safe Zone:</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_ZoneEnabled" xml:space="preserve">
    <value>Zone Enabled</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_ZoneRadius" xml:space="preserve">
    <value>Zone Radius:</value>
  </data>
  <data name="ScreenDebugAdminMenu_ShowPlayers" xml:space="preserve">
    <value>Show All Players</value>
  </data>
  <data name="ScreenDebugAdminMenu_ShowPlayersToolTip" xml:space="preserve">
    <value>Shows all player names on HUD, even when broadcast is off.</value>
  </data>
  <data name="ScreenDebugAdminMenu_SortBy" xml:space="preserve">
    <value>Sort by</value>
  </data>
  <data name="ScreenDebugAdminMenu_SortOptions" xml:space="preserve">
    <value>Sort Options</value>
  </data>
  <data name="ScreenDebugAdminMenu_Stationary" xml:space="preserve">
    <value>Stationary</value>
  </data>
  <data name="ScreenDebugAdminMenu_Stations" xml:space="preserve">
    <value>Fixed (stations)</value>
  </data>
  <data name="ScreenDebugAdminMenu_StopAll" xml:space="preserve">
    <value>Stop All Entities</value>
  </data>
  <data name="ScreenDebugAdminMenu_TeleportHere" xml:space="preserve">
    <value>Teleport Here</value>
  </data>
  <data name="ScreenDebugAdminMenu_TeleportHereToolTip" xml:space="preserve">
    <value>Teleports your character to the spectator camera.</value>
  </data>
  <data name="ScreenDebugAdminMenu_Player" xml:space="preserve">
    <value>Player</value>
  </data>
  <data name="ScreenDebugAdminMenu_Date" xml:space="preserve">
    <value>Date</value>
  </data>
  <data name="ScreenDebugAdminMenu_Cheaters" xml:space="preserve">
    <value>Cheaters</value>
  </data>
  <data name="ScreenDebugAdminMenu_KickPlayer" xml:space="preserve">
    <value>Kick player</value>
  </data>
  <data name="ScreenDebugAdminMenu_KickPlayerTooltip" xml:space="preserve">
    <value>Kicks player. Player may return in some time.</value>
  </data>
  <data name="ScreenDebugAdminMenu_BanPlayer" xml:space="preserve">
    <value>Ban player</value>
  </data>
  <data name="ScreenDebugAdminMenu_BanPlayerTooltip" xml:space="preserve">
    <value>Ban player. Player no longer may join server</value>
  </data>
  <data name="ScreenDebugAdminMenu_UnbanPlayer" xml:space="preserve">
    <value>Unban player</value>
  </data>
  <data name="ScreenDebugAdminMenu_UnbanPlayerTooltip" xml:space="preserve">
    <value>Unban player. Player no longer may join server</value>
  </data>
  <data name="ScreenDebugAdminMenu_Refresh" xml:space="preserve">
    <value>Refresh</value>
  </data>
  <data name="ScreenDebugAdminMenu_Clear" xml:space="preserve">
    <value>Clear selected</value>
  </data>
  <data name="ScreenDebugAdminMenu_ClearAll" xml:space="preserve">
    <value>Clear all</value>
  </data>
  <data name="ScreenDebugAdminMenu_CheaterRowTooltip" xml:space="preserve">
    <value>Reason: {0} Happened at: {1}</value>
  </data>
  <data name="ScreenDebugAdminMenu_TimeOfDay" xml:space="preserve">
    <value>Time of day offset:</value>
  </data>
  <data name="ScreenDebugAdminMenu_Untargetable" xml:space="preserve">
    <value>Untargetable</value>
  </data>
  <data name="ScreenDebugAdminMenu_UntargetableToolTip" xml:space="preserve">
    <value>Makes you invisible to all turrets.</value>
  </data>
  <data name="ScreenDebugAdminMenu_UseTerminals" xml:space="preserve">
    <value>Can Use All Terminals</value>
  </data>
  <data name="ScreenDebugAdminMenu_UseTerminalsToolTip" xml:space="preserve">
    <value>Allows you to use any terminal, regardless of ownership.</value>
  </data>
  <data name="ScreenDebugAdminMenu_WithMedBay" xml:space="preserve">
    <value>With respawn point</value>
  </data>
  <data name="ScreenDebugAdminMenu_RevertCloseToNPCGrids" xml:space="preserve">
    <value>Revert close to NPC grids</value>
  </data>
  <data name="ScreenDebugAdminMenu_WithProduction" xml:space="preserve">
    <value>With production</value>
  </data>
  <data name="ScreenDebugSpawnMenu_Asteroid" xml:space="preserve">
    <value>Select Type :</value>
  </data>
  <data name="ScreenDebugSpawnMenu_AsteroidAddRandomMaterials" xml:space="preserve">
    <value>Add Random Materials</value>
  </data>
  <data name="ScreenDebugSpawnMenu_AsteroidCoreMaterial" xml:space="preserve">
    <value>Core Material</value>
  </data>
  <data name="ScreenDebugSpawnMenu_AsteroidGenerationCanTakeLong" xml:space="preserve">
    <value>Generating asteroids can take a long time!</value>
  </data>
  <data name="ScreenDebugSpawnMenu_Asteroids" xml:space="preserve">
    <value>Asteroids</value>
  </data>
  <data name="ScreenDebugSpawnMenu_AsteroidSurfaceMaterial" xml:space="preserve">
    <value>Surface Material</value>
  </data>
  <data name="ScreenDebugSpawnMenu_Caption" xml:space="preserve">
    <value>Spawn Menu</value>
  </data>
  <data name="ScreenDebugSpawnMenu_CreateLayer" xml:space="preserve">
    <value>Create layer</value>
  </data>
  <data name="ScreenDebugSpawnMenu_CurrentTarget" xml:space="preserve">
    <value>Current target: </value>
  </data>
  <data name="ScreenDebugSpawnMenu_EmptyVoxelMap" xml:space="preserve">
    <value>Empty Voxel Map</value>
  </data>
  <data name="ScreenDebugSpawnMenu_GenerateSeed" xml:space="preserve">
    <value>Generate seed</value>
  </data>
  <data name="ScreenDebugSpawnMenu_InvalidAmount" xml:space="preserve">
    <value>Invalid amount</value>
  </data>
  <data name="ScreenDebugSpawnMenu_ItemAmount" xml:space="preserve">
    <value>Amount :</value>
  </data>
  <data name="ScreenDebugSpawnMenu_Items" xml:space="preserve">
    <value>Items</value>
  </data>
  <data name="ScreenDebugSpawnMenu_ItemType" xml:space="preserve">
    <value>Item type</value>
  </data>
  <data name="ScreenDebugSpawnMenu_PickPlanet" xml:space="preserve">
    <value>Pick planet to edit</value>
  </data>
  <data name="ScreenDebugSpawnMenu_Planets" xml:space="preserve">
    <value>Planets</value>
  </data>
  <data name="ScreenDebugSpawnMenu_PredefinedAsteroids" xml:space="preserve">
    <value>Predefined Asteroids</value>
  </data>
  <data name="ScreenDebugSpawnMenu_ProceduralAsteroids" xml:space="preserve">
    <value>Procedural Asteroids</value>
  </data>
  <data name="ScreenDebugSpawnMenu_ProceduralSeed" xml:space="preserve">
    <value>Generation Seed :</value>
  </data>
  <data name="ScreenDebugSpawnMenu_ProceduralSize" xml:space="preserve">
    <value>Select Size :</value>
  </data>
  <data name="ScreenDebugSpawnMenu_RemoveLayer" xml:space="preserve">
    <value>Remove layer</value>
  </data>
  <data name="ScreenDebugSpawnMenu_SelectAsteroidType" xml:space="preserve">
    <value>Select Asteroid Type</value>
  </data>
  <data name="ScreenDebugSpawnMenu_SpawnAsteroid" xml:space="preserve">
    <value>Spawn</value>
  </data>
  <data name="ScreenDebugSpawnMenu_SpawnFlora" xml:space="preserve">
    <value>Spawn flora</value>
  </data>
  <data name="ScreenDebugSpawnMenu_SpawnObject" xml:space="preserve">
    <value>Spawn Object</value>
  </data>
  <data name="ScreenDebugSpawnMenu_SpawnTargeted" xml:space="preserve">
    <value>Spawn into targeted container</value>
  </data>
  <data name="ScreenDebugSpawnMenu_UpdatePlanet" xml:space="preserve">
    <value>Update planet</value>
  </data>
  <data name="ScreenGraphicsOptions_Renderer" xml:space="preserve">
    <value>Renderer</value>
  </data>
  <data name="ScreenGraphicsOptions_ShaderQuality" xml:space="preserve">
    <value>Shader quality</value>
  </data>
  <data name="ScreenGraphicsOptions_ShadowMapResolution" xml:space="preserve">
    <value>Shadow quality</value>
  </data>
  <data name="ScreenGraphicsOptions_LightsQuality" xml:space="preserve">
    <value>Lights quality</value>
  </data>
  <data name="ScreenGraphicsOptions_ShadowMapResolution_Medium" xml:space="preserve">
    <value>Medium</value>
  </data>
  <data name="ScreenGraphicsOptions_VoxelQuality" xml:space="preserve">
    <value>Voxel quality</value>
  </data>
  <data name="ScreenMainMenu_DeluxeLine1" xml:space="preserve">
    <value>DELUXE version is now available!</value>
  </data>
  <data name="ScreenMainMenu_DeluxeLine2" xml:space="preserve">
    <value>Buy it on {0} to get special content!</value>
  </data>
  <data name="ScreenMainMenu_GhostSkinLine1" xml:space="preserve">
    <value>Special Halloween offer!</value>
  </data>
  <data name="ScreenMainMenu_GhostSkinLine2" xml:space="preserve">
    <value>Grab it on {0}!</value>
  </data>
  <data name="ScreenMainMenu_SkinSaleLine1" xml:space="preserve">
    <value>Limited offer of skins!</value>
  </data>
  <data name="ScreenMainMenu_SkinSaleLine2" xml:space="preserve">
    <value>Grab it on {0}!</value>
  </data>
  <data name="ScreenMainMenu_DecoBlockDlcLine1" xml:space="preserve">
    <value>Decorative blocks are now available!</value>
  </data>
  <data name="ScreenMainMenu_DecoBlockDlcLine2" xml:space="preserve">
    <value>Grab them on {0}!</value>
  </data>
  <data name="ScreenMedicals_NoRespawnPlace" xml:space="preserve">
    <value>No respawn point is available! 
Try the refresh button for any available respawn points.
If there is no chance of accessing them, the game will be over in {0:00}:{1:00}.</value>
  </data>
  <data name="ScreenMedicals_NoRespawnPlaceHeader" xml:space="preserve">
    <value>You must spawn in:  {0:00}:{1:00}</value>
  </data>
  <data name="ScreenMedicals_NoRespawnPossible" xml:space="preserve">
    <value>No respawn point is available! 
Try the refresh button for any available respawn points.
If there is no chance of accessing them, the game is over and you can leave the game.</value>
  </data>
  <data name="ScreenMedicals_RespawnOutsideWorld" xml:space="preserve">
    <value>The spawn points in this world are outside of the world size limit and/or the spawn points are obstructed. 
Please increase the world size limit.</value>
  </data>
  <data name="ScreenMedicals_OwnerTimeoutColumn" xml:space="preserve">
    <value>Available in</value>
  </data>
  <data name="ScreenMedicals_Owner" xml:space="preserve">
    <value>Owner</value>
  </data>
  <data name="ScreenMedicals_RespawnShipNotReady" xml:space="preserve">
    <value>Not ready</value>
  </data>
  <data name="ScreenMedicals_RespawnShipReady" xml:space="preserve">
    <value>Ready</value>
  </data>
  <data name="ScreenMedicals_RespawnWhenShipReady" xml:space="preserve">
    <value>Will spawn on "{0}" when it is ready.</value>
  </data>
  <data name="ScreenMedicals_ActivateSpectator" xml:space="preserve">
    <value>Press Shift + Escape to enable spectator mode.</value>
  </data>
  <data name="ScreenMedicals_ActivateSpectator_Confirm" xml:space="preserve">
    <value>After enabling spectator mode from the respawn screen there is no
way back to the respawn screen! You will have to reload/reconnect
in order to respawn again.

Are you sure you wish to continue?</value>
  </data>
  <data name="ScreenOptionsButtonVideo" xml:space="preserve">
    <value>Video</value>
  </data>
  <data name="ScreenTerminalError_NoAssemblers" xml:space="preserve">
    <value>There are no assemblers on this ship.</value>
  </data>
  <data name="ScreenTerminalError_ShipHasBeenDisconnected" xml:space="preserve">
    <value>Ship has been disconnected from terminal</value>
  </data>
  <data name="ScreenTerminalError_ShipNotConnected" xml:space="preserve">
    <value>Terminal is not connected to any ship</value>
  </data>
  <data name="ScreenTerminalInventory_Mass" xml:space="preserve">
    <value>Mass: {0} kg</value>
  </data>
  <data name="ScreenTerminalInventory_Volume" xml:space="preserve">
    <value>Volume:</value>
  </data>
  <data name="ScreenTerminalProduction_AssemblingButton" xml:space="preserve">
    <value>Assembling</value>
  </data>
  <data name="ScreenTerminalProduction_Blueprints" xml:space="preserve">
    <value>Blueprints:</value>
  </data>
  <data name="ScreenTerminalProduction_ControlPanelButton" xml:space="preserve">
    <value>Control panel</value>
  </data>
  <data name="ScreenTerminalProduction_DisassembleAllButton" xml:space="preserve">
    <value>Disassemble all</value>
  </data>
  <data name="ScreenTerminalProduction_DisassemblingButton" xml:space="preserve">
    <value>Disassembling</value>
  </data>
  <data name="ScreenTerminalProduction_GainedAndAvailable" xml:space="preserve">
    <value>Gained / Available</value>
  </data>
  <data name="ScreenTerminalProduction_Inventory" xml:space="preserve">
    <value>Inventory:</value>
  </data>
  <data name="ScreenTerminalProduction_InventoryButton" xml:space="preserve">
    <value>Inventory</value>
  </data>
  <data name="ScreenTerminalProduction_MaterialType" xml:space="preserve">
    <value>Material type</value>
  </data>
  <data name="ScreenTerminalProduction_ProductionQueue" xml:space="preserve">
    <value>Production queue:</value>
  </data>
  <data name="ScreenTerminalProduction_RequiredAndAvailable" xml:space="preserve">
    <value>Required / Available</value>
  </data>
  <data name="ScreenTerminalProduction_StoredMaterials" xml:space="preserve">
    <value>Stored materials:</value>
  </data>
  <data name="ScreenTerminal_Infinite" xml:space="preserve">
    <value>Infinite</value>
  </data>
  <data name="ScreenTerminal_ShipCombobox" xml:space="preserve">
    <value>Current grid</value>
  </data>
  <data name="ScreenTerminal_ShipList" xml:space="preserve">
    <value>Accessible grids</value>
  </data>
  <data name="ScriptingToolsCutscenes" xml:space="preserve">
    <value>Scripting Tools - Cutscenes</value>
  </data>
  <data name="ScriptingToolsTransformations" xml:space="preserve">
    <value>Scripting Tools - Transformations</value>
  </data>
  <data name="SelectedBlock" xml:space="preserve">
    <value>Selected Block</value>
  </data>
  <data name="SelectedEntity" xml:space="preserve">
    <value>Selected Entity</value>
  </data>
  <data name="SelectedTrigger" xml:space="preserve">
    <value>Selected Trigger</value>
  </data>
  <data name="ServerDetails_AssemblerEfficiencyMultiplier" xml:space="preserve">
    <value>Assembler Efficiency Multiplier</value>
  </data>
  <data name="ServerDetails_AssemblerSpeedMultiplier" xml:space="preserve">
    <value>Assembler Speed Multiplier</value>
  </data>
  <data name="ServerDetails_AutoHealing" xml:space="preserve">
    <value>Auto Healing</value>
  </data>
  <data name="ServerDetails_BlockTypeLimits" xml:space="preserve">
    <value>Block Type Limits</value>
  </data>
  <data name="ServerDetails_CargoShipsEnabled" xml:space="preserve">
    <value>Cargo Ships</value>
  </data>
  <data name="ServerDetails_DestructibleBlocks" xml:space="preserve">
    <value>Destructible Blocks</value>
  </data>
  <data name="ServerDetails_Enable3rdPersonView" xml:space="preserve">
    <value>3rd Person View</value>
  </data>
  <data name="ServerDetails_EnableBlockLimits" xml:space="preserve">
    <value>Block Limits</value>
  </data>
  <data name="ServerDetails_EnableConvertToStation" xml:space="preserve">
    <value>Enable Convert To Station</value>
  </data>
  <data name="ServerDetails_EnableDrones" xml:space="preserve">
    <value>Drones</value>
  </data>
  <data name="ServerDetails_EnableEncounters" xml:space="preserve">
    <value>Encounters</value>
  </data>
  <data name="ServerDetails_EnableFlora" xml:space="preserve">
    <value>Flora</value>
  </data>
  <data name="ServerDetails_EnableIngameScripts" xml:space="preserve">
    <value>Ingame Scripts</value>
  </data>
  <data name="ServerDetails_EnableJetpack" xml:space="preserve">
    <value>Jetpack</value>
  </data>
  <data name="ServerDetails_EnableOxygen" xml:space="preserve">
    <value>Oxygen</value>
  </data>
  <data name="ServerDetails_EnableOxygenPressurization" xml:space="preserve">
    <value>Airtightness</value>
  </data>
  <data name="ServerDetails_EnableRemoteBlockRemoval" xml:space="preserve">
    <value>Remote Removal of Owned Blocks</value>
  </data>
  <data name="ServerDetails_EnableScripterRole" xml:space="preserve">
    <value>Scripter Role</value>
  </data>
  <data name="ServerDetails_EnableSpiders" xml:space="preserve">
    <value>Spiders</value>
  </data>
  <data name="ServerDetails_EnableSunRotation" xml:space="preserve">
    <value>Sun Rotation</value>
  </data>
  <data name="ServerDetails_EnableToolShake" xml:space="preserve">
    <value>Tool Shake</value>
  </data>
  <data name="ServerDetails_EnableVoxelDestruction" xml:space="preserve">
    <value>Voxel Destruction</value>
  </data>
  <data name="ServerDetails_EnableWolfs" xml:space="preserve">
    <value>Wolves</value>
  </data>
  <data name="ServerDetails_EnvironmentHostility" xml:space="preserve">
    <value>Environment Hostility</value>
  </data>
  <data name="ServerDetails_FloraDensity" xml:space="preserve">
    <value>Flora Density</value>
  </data>
  <data name="ServerDetails_GrinderSpeedMultiplier" xml:space="preserve">
    <value>Grinder Speed Multiplier</value>
  </data>
  <data name="ServerDetails_HackSpeedMultiplier" xml:space="preserve">
    <value>Hack Speed Multiplier</value>
  </data>
  <data name="ServerDetails_MaxBlocksPerPlayer" xml:space="preserve">
    <value>Max Blocks Per Player</value>
  </data>
  <data name="ServerDetails_MaxFloatingObjects" xml:space="preserve">
    <value>Max Floating Objects</value>
  </data>
  <data name="ServerDetails_MaxGridSize" xml:space="preserve">
    <value>Max Grid Size</value>
  </data>
  <data name="ServerDetails_PermanentDeath" xml:space="preserve">
    <value>Permanent Death</value>
  </data>
  <data name="ServerDetails_ProceduralDensity" xml:space="preserve">
    <value>Procedural Density</value>
  </data>
  <data name="ServerDetails_RealisticSound" xml:space="preserve">
    <value>Realistic Sound</value>
  </data>
  <data name="ServerDetails_RefinerySpeedMultiplier" xml:space="preserve">
    <value>Refinery Speed Multiplier</value>
  </data>
  <data name="ServerDetails_RespawnShipDelete" xml:space="preserve">
    <value>Delete Respawn Ships</value>
  </data>
  <data name="ServerDetails_ServerManagement" xml:space="preserve">
    <value>Server Management</value>
  </data>
  <data name="ServerDetails_ShowPlayerNamesOnHud" xml:space="preserve">
    <value>Show Player Names On HUD</value>
  </data>
  <data name="ServerDetails_SpawnShipTimeMultiplier" xml:space="preserve">
    <value>Respawn Ship Time Multiplier</value>
  </data>
  <data name="ServerDetails_SpawnWithTools" xml:space="preserve">
    <value>Spawn With Tools</value>
  </data>
  <data name="ServerDetails_StationVoxelSupport" xml:space="preserve">
    <value>Unsupported Stations</value>
  </data>
  <data name="ServerDetails_SunRotationIntervalMinutes" xml:space="preserve">
    <value>Sun Rotation Interval</value>
  </data>
  <data name="ServerDetails_ThrusterDamage" xml:space="preserve">
    <value>Thruster Damage</value>
  </data>
  <data name="ServerDetails_ViewDistance" xml:space="preserve">
    <value>View Distance</value>
  </data>
  <data name="ServerDetails_WeaponsEnabled" xml:space="preserve">
    <value>Weapons</value>
  </data>
  <data name="ServerDetails_WelderSpeedMultiplier" xml:space="preserve">
    <value>Welder Speed Multiplier</value>
  </data>
  <data name="ServerDetails_WorldSizeKm" xml:space="preserve">
    <value>World Size in Km</value>
  </data>
  <data name="SetTriggerSizeDialog" xml:space="preserve">
    <value>Set trigger size dialog</value>
  </data>
  <data name="SharedBlueprint" xml:space="preserve">
    <value>Shared Blueprint</value>
  </data>
  <data name="SharedBlueprintNotify" xml:space="preserve">
    <value>{0} just shared a blueprint with you.</value>
  </data>
  <data name="SharedBlueprintQuestion" xml:space="preserve">
    <value>Do you want to open this blueprint in {0} workshop?</value>
  </data>
  <data name="ShowOnlyBuildableBlockToggle" xml:space="preserve">
    <value>Show Only Buildable</value>
  </data>
  <data name="ShowOnlyBuildableTooltip" xml:space="preserve">
    <value>Show Only Buildable</value>
  </data>
  <data name="Signal_Enemy" xml:space="preserve">
    <value> Enemy Signals</value>
  </data>
  <data name="Signal_Friendly" xml:space="preserve">
    <value> Friendly Signals</value>
  </data>
  <data name="Signal_Mixed" xml:space="preserve">
    <value> Mixed Signals</value>
  </data>
  <data name="Signal_Neutral" xml:space="preserve">
    <value> Neutral Signals</value>
  </data>
  <data name="Signal_Own" xml:space="preserve">
    <value> Own Signals</value>
  </data>
  <data name="Silicon" xml:space="preserve">
    <value>Silicon</value>
  </data>
  <data name="Silver" xml:space="preserve">
    <value>Silver</value>
  </data>
  <data name="SmallGrids" xml:space="preserve">
    <value>SmallGrids</value>
  </data>
  <data name="SoundBlock_SoundName_Alert1" xml:space="preserve">
    <value>Alert 1</value>
  </data>
  <data name="SoundBlock_SoundName_Alert2" xml:space="preserve">
    <value>Alert 2</value>
  </data>
  <data name="SoundBlock_SoundName_Alert3" xml:space="preserve">
    <value>Alert 3</value>
  </data>
  <data name="SoundBlock_SoundName_Drone_Huge" xml:space="preserve">
    <value>Drone - Huge</value>
  </data>
  <data name="SoundBlock_SoundName_Drone_Large" xml:space="preserve">
    <value>Drone - Large</value>
  </data>
  <data name="SoundBlock_SoundName_Drone_Medium" xml:space="preserve">
    <value>Drone - Medium</value>
  </data>
  <data name="SoundBlock_SoundName_Drone_Small" xml:space="preserve">
    <value>Drone - Small</value>
  </data>
  <data name="SoundBlock_SoundName_EnemyDetected" xml:space="preserve">
    <value>Enemy detected</value>
  </data>
  <data name="SoundBlock_SoundName_LightsOff" xml:space="preserve">
    <value>Lights off</value>
  </data>
  <data name="SoundBlock_SoundName_LightsOn" xml:space="preserve">
    <value>Lights on</value>
  </data>
  <data name="SoundBlock_SoundName_Music1" xml:space="preserve">
    <value>Music 1</value>
  </data>
  <data name="SoundBlock_SoundName_Music2" xml:space="preserve">
    <value>Music 2</value>
  </data>
  <data name="SoundBlock_SoundName_ObjectiveComplete" xml:space="preserve">
    <value>Objective complete</value>
  </data>
  <data name="SpawnEntity" xml:space="preserve">
    <value>Spawn</value>
  </data>
  <data name="SpawnInSpaceSuit" xml:space="preserve">
    <value>Space Suit</value>
  </data>
  <data name="SpectatorControls_Free_Desc" xml:space="preserve">
    <value>Free spectator. You can still shoot and do actions with controlled object</value>
  </data>
  <data name="SpectatorControls_None_Desc" xml:space="preserve">
    <value>Get back into controlled character / cockpit</value>
  </data>
  <data name="SpectatorControls_Static_Desc" xml:space="preserve">
    <value>Static spectator. You control character / cockpit, but camera is static</value>
  </data>
  <data name="Speed" xml:space="preserve">
    <value>Speed</value>
  </data>
  <data name="StaticObjects" xml:space="preserve">
    <value>StaticObjects</value>
  </data>
  <data name="StationRotation_Static" xml:space="preserve">
    <value>Cycle placement modes</value>
  </data>
  <data name="StationRotation_Static_Desc" xml:space="preserve">
    <value>Cycles between 3 placement modes:
Local Grid - snap to local coordinate system
Free Placement - rotate and place freely
Gravity-aligned - rotate and place freely, but aligned to gravity</value>
  </data>
  <data name="Stop" xml:space="preserve">
    <value>Stop</value>
  </data>
  <data name="String1TerminalTab_Factions_LeaveToolTip" xml:space="preserve">
    <value>Leave selected faction</value>
  </data>
  <data name="SunRotationPeriod" xml:space="preserve">
    <value>Day duration</value>
  </data>
  <data name="SwitchBuilderMode" xml:space="preserve">
    <value>Switch cockpit builder mode</value>
  </data>
  <data name="SwitchText_Close" xml:space="preserve">
    <value>Close</value>
    <comment>Open/Close buttons in terminal (eg. on Door). Keep it short!!!</comment>
  </data>
  <data name="SwitchText_Off" xml:space="preserve">
    <value>Off</value>
    <comment>On/Off buttons in terminal. Don't translate or keep it short if you have to!!!</comment>
  </data>
  <data name="SwitchText_On" xml:space="preserve">
    <value>On</value>
    <comment>On/Off buttons in terminal. Don't translate or keep it short if you have to!!!</comment>
  </data>
  <data name="SwitchText_Open" xml:space="preserve">
    <value>Open</value>
    <comment>Open/Close buttons in terminal (eg. on Door). Keep it short!!!</comment>
  </data>
  <data name="SwitchToNormalVT" xml:space="preserve">
    <value>With this release we changed visuals of the game a lot. Your graphics settings were changed to Medium to avoid any performance issues.</value>
  </data>
  <data name="Terminal" xml:space="preserve">
    <value>Terminal</value>
  </data>
  <data name="TerminalAccess" xml:space="preserve">
    <value>Open Terminal</value>
  </data>
  <data name="TerminalButton_GroupSave" xml:space="preserve">
    <value>Save</value>
  </data>
  <data name="TerminalControl" xml:space="preserve">
    <value>Take Control</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_ControlThrusters" xml:space="preserve">
    <value>Control thrusters</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_ControlWheels" xml:space="preserve">
    <value>Control wheels</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_Handbrake" xml:space="preserve">
    <value>Handbrake</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_Park" xml:space="preserve">
    <value>Park</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_HorizonIndicator" xml:space="preserve">
    <value>Show horizon and altitude</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_EnableTargetLocking" xml:space="preserve">
    <value>Enable target locking</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_MainCockpit" xml:space="preserve">
    <value>Main cockpit</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_MainRemoteControl" xml:space="preserve">
    <value>Main Remote Control</value>
  </data>
  <data name="TerminalControlPanel_EditCode" xml:space="preserve">
    <value>Edit</value>
  </data>
  <data name="TerminalControlPanel_EditCode_Tooltip" xml:space="preserve">
    <value>Opens code editor where you can create new scripts and upload/download them from workshop</value>
  </data>
  <data name="TerminalControlPanel_Recompile" xml:space="preserve">
    <value>Recompile</value>
  </data>
  <data name="TerminalControlPanel_Recompile_Tooltip" xml:space="preserve">
    <value>Recompiles the current script</value>
  </data>
  <data name="TerminalControlPanel_RunArgument" xml:space="preserve">
    <value>Argument</value>
  </data>
  <data name="TerminalControlPanel_RunArgument_ToolTip" xml:space="preserve">
    <value>An argument passed to your code when clicking the Run button</value>
  </data>
  <data name="TerminalControlPanel_RunCode" xml:space="preserve">
    <value>Run</value>
  </data>
  <data name="TerminalControlPanel_RunCodeDefault" xml:space="preserve">
    <value>Run with default argument</value>
  </data>
  <data name="TerminalControlPanel_RunCode_Tooltip" xml:space="preserve">
    <value>Run current script and notifies about any exception during run</value>
  </data>
  <data name="TerminalControlPanel_TimerDelay" xml:space="preserve">
    <value>Delay</value>
  </data>
  <data name="TerminalControlPanel_Warhead_Detonate" xml:space="preserve">
    <value>Detonate</value>
  </data>
  <data name="TerminalControlPanel_Warhead_DetonationTime" xml:space="preserve">
    <value>Detonation time</value>
  </data>
  <data name="TerminalControlPanel_Warhead_Safety" xml:space="preserve">
    <value>Arm warhead</value>
  </data>
  <data name="TerminalControlPanel_Warhead_SafetyTooltip" xml:space="preserve">
    <value>When checked, the warhead can be detonated manually or by unwary handle. This does not affect automatic detonation after the countdown.</value>
  </data>
  <data name="TerminalControlPanel_Warhead_StartCountdown" xml:space="preserve">
    <value>Start countdown</value>
  </data>
  <data name="TerminalControlPanel_Warhead_StopCountdown" xml:space="preserve">
    <value>Stop countdown</value>
  </data>
  <data name="TerminalControlPanel_Warhead_SwitchTextArmed" xml:space="preserve">
    <value>Armed</value>
  </data>
  <data name="TerminalControlPanel_Warhead_SwitchTextDisarmed" xml:space="preserve">
    <value>Disarmed</value>
  </data>
  <data name="TerminalDistance" xml:space="preserve">
    <value>Distance</value>
  </data>
  <data name="TerminalName" xml:space="preserve">
    <value>Grid Name</value>
  </data>
  <data name="TerminalScenarioSettingsLabel" xml:space="preserve">
    <value>Scenario settings:</value>
  </data>
  <data name="TerminalStatus" xml:space="preserve">
    <value>Status</value>
  </data>
  <data name="TerminalTab_Chat" xml:space="preserve">
    <value>Comms</value>
  </data>
  <data name="TerminalTab_Chat_ChatHistory" xml:space="preserve">
    <value>-Global Chat History-</value>
  </data>
  <data name="TerminalTab_Chat_GlobalChat" xml:space="preserve">
    <value>-Broadcast-</value>
  </data>
  <data name="TerminalTab_Chat_NoFaction" xml:space="preserve">
    <value>Only faction members can use faction-to-faction communications</value>
  </data>
  <data name="TerminalTab_Chat_Offline" xml:space="preserve">
    <value>offline</value>
  </data>
  <data name="TerminalTab_Chat_Pending" xml:space="preserve">
    <value>PENDING</value>
  </data>
  <data name="TerminalTab_Factions" xml:space="preserve">
    <value>Factions</value>
  </data>
  <data name="TerminalTab_FactionsTableLabel" xml:space="preserve">
    <value>Factions:</value>
  </data>
  <data name="TerminalTab_Factions_AcceptPeaceRequest" xml:space="preserve">
    <value>Accept peace</value>
  </data>
  <data name="TerminalTab_Factions_AcceptToolTip" xml:space="preserve">
    <value>Accept selected member to your faction</value>
  </data>
  <data name="TerminalTab_Factions_AutoAccept" xml:space="preserve">
    <value>Accept everyone</value>
  </data>
  <data name="TerminalTab_Factions_AutoAcceptRequest" xml:space="preserve">
    <value>Accept peace</value>
  </data>
  <data name="TerminalTab_Factions_AutoAcceptRequestToolTip" xml:space="preserve">
    <value>Automatically accept peace requests</value>
  </data>
  <data name="TerminalTab_Factions_AutoAcceptToolTip" xml:space="preserve">
    <value>Automatically accept member requests</value>
  </data>
  <data name="TerminalTab_Factions_BeforeCreateLeave" xml:space="preserve">
    <value>You must leave your faction before creating new one</value>
  </data>
  <data name="TerminalTab_Factions_CancelJoin" xml:space="preserve">
    <value>Cancel join</value>
  </data>
  <data name="TerminalTab_Factions_CancelPeaceRequest" xml:space="preserve">
    <value>Cancel request</value>
  </data>
  <data name="TerminalTab_Factions_Create" xml:space="preserve">
    <value>Create</value>
  </data>
  <data name="TerminalTab_Factions_CreateFaction" xml:space="preserve">
    <value>Create a new faction</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionDescription" xml:space="preserve">
    <value>Public info:</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionName" xml:space="preserve">
    <value>Name:</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionPrivateInfo" xml:space="preserve">
    <value>Private info:</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionPrivateInfoToolTip" xml:space="preserve">
    <value>Visible to members only</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionPublicInfoToolTip" xml:space="preserve">
    <value>Visible to everyone</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionTag" xml:space="preserve">
    <value>Tag:</value>
  </data>
  <data name="TerminalTab_Factions_CreateFactionTagToolTip" xml:space="preserve">
    <value>Faction tag must be exactly 3 characters long</value>
  </data>
  <data name="TerminalTab_Factions_CreateToolTip" xml:space="preserve">
    <value>Create new faction</value>
  </data>
  <data name="TerminalTab_Factions_DemoteToolTip" xml:space="preserve">
    <value>Demote selected member</value>
  </data>
  <data name="TerminalTab_Factions_EditFaction" xml:space="preserve">
    <value>Edit faction</value>
  </data>
  <data name="TerminalTab_Factions_Enemy" xml:space="preserve">
    <value>Declare war</value>
  </data>
  <data name="TerminalTab_Factions_EnemyToolTip" xml:space="preserve">
    <value>Declare war to selected faction</value>
  </data>
  <data name="TerminalTab_Factions_Friend" xml:space="preserve">
    <value>Propose peace</value>
  </data>
  <data name="TerminalTab_Factions_FriendToolTip" xml:space="preserve">
    <value>Propose peace treaty to selected faction</value>
  </data>
  <data name="TerminalTab_Factions_Join" xml:space="preserve">
    <value>Join</value>
  </data>
  <data name="TerminalTab_Factions_JoinLimitsExceeded" xml:space="preserve">
    <value>Cannot join this faction because it will exceed faction block limits!</value>
  </data>
  <data name="TerminalTab_Factions_JoinToolTip" xml:space="preserve">
    <value>Send join request to selected faction</value>
  </data>
  <data name="TerminalTab_Factions_KickToolTip" xml:space="preserve">
    <value>Kick selected member from the faction</value>
  </data>
  <data name="TerminalTab_Factions_Leave" xml:space="preserve">
    <value>Leave</value>
  </data>
  <data name="TerminalTab_Factions_LeaveToolTip" xml:space="preserve">
    <value>Leave selected faction</value>
  </data>
  <data name="TerminalTab_Factions_MaxCountReachedToolTip" xml:space="preserve">
    <value>Maximum count of factions reached</value>
  </data>
  <data name="TerminalTab_Factions_Members" xml:space="preserve">
    <value>Members:</value>
  </data>
  <data name="TerminalTab_Factions_PendingPeace" xml:space="preserve">
    <value>This faction is proposing peace treaty to your faction</value>
  </data>
  <data name="TerminalTab_Factions_Private" xml:space="preserve">
    <value>Private info (visible to members only):</value>
  </data>
  <data name="TerminalTab_Factions_PromoteToolTip" xml:space="preserve">
    <value>Promote selected member</value>
  </data>
  <data name="TerminalTab_Factions_SentJoinToolTip" xml:space="preserve">
    <value>You are applying for a membership in this faction</value>
  </data>
  <data name="TerminalTab_Factions_SentPeace" xml:space="preserve">
    <value>You are proposing peace treaty to this faction</value>
  </data>
  <data name="TerminalTab_GPS" xml:space="preserve">
    <value>GPS</value>
  </data>
  <data name="TerminalTab_GPS_Add" xml:space="preserve">
    <value>New</value>
  </data>
  <data name="TerminalTab_GPS_Add_ToolTip" xml:space="preserve">
    <value>Create a new GPS entry</value>
  </data>
  <data name="TerminalTab_GPS_AlwaysVisible" xml:space="preserve">
    <value>Always Visible</value>
  </data>
  <data name="TerminalTab_GPS_AlwaysVisible_Tooltip" xml:space="preserve">
    <value>Prevents this GPS coordinate from getting clustered or fading out</value>
  </data>
  <data name="TerminalTab_GPS_Coordinates" xml:space="preserve">
    <value>Coordinates:</value>
  </data>
  <data name="TerminalTab_GPS_CopyToClipboard" xml:space="preserve">
    <value>Copy to clipboard</value>
  </data>
  <data name="TerminalTab_GPS_CopyToClipboard_ToolTip" xml:space="preserve">
    <value>Copy the selected GPS entry into your clipboard</value>
  </data>
  <data name="TerminalTab_GPS_Delete" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="TerminalTab_GPS_Delete_Disabled_ToolTip" xml:space="preserve">
    <value>You have to select a GPS entry
before you can remove it</value>
  </data>
  <data name="TerminalTab_GPS_Delete_ToolTip" xml:space="preserve">
    <value>Remove selected GPS entry</value>
  </data>
  <data name="TerminalTab_GPS_Description" xml:space="preserve">
    <value>Description:</value>
  </data>
  <data name="TerminalTab_GPS_FromChatDescPrefix" xml:space="preserve">
    <value>By: </value>
  </data>
  <data name="TerminalTab_GPS_Name" xml:space="preserve">
    <value>Name:</value>
  </data>
  <data name="TerminalTab_GPS_NewCoord_Desc" xml:space="preserve">
    <value>New coordinates</value>
  </data>
  <data name="TerminalTab_GPS_NewCoord_Desc_ToolTip" xml:space="preserve">
    <value>Description of the GPS entry</value>
  </data>
  <data name="TerminalTab_GPS_NewCoord_Name" xml:space="preserve">
    <value>New</value>
  </data>
  <data name="TerminalTab_GPS_NewCoord_Name_ToolTip" xml:space="preserve">
    <value>Name of the GPS entry, that is visible on your HUD</value>
  </data>
  <data name="TerminalTab_GPS_NewFromBroadcast" xml:space="preserve">
    <value>New from broadcast</value>
  </data>
  <data name="TerminalTab_GPS_NewFromClipboard" xml:space="preserve">
    <value>New from clipboard</value>
  </data>
  <data name="TerminalTab_GPS_NewFromClipboard_Desc" xml:space="preserve">
    <value>Pasted from clipboard</value>
  </data>
  <data name="TerminalTab_GPS_NewFromClipboard_ToolTip" xml:space="preserve">
    <value>Create a new GPS entry from clipboard</value>
  </data>
  <data name="TerminalTab_GPS_NewFromCurrent" xml:space="preserve">
    <value>New from current pos.</value>
  </data>
  <data name="TerminalTab_GPS_NewFromCurrent_Desc" xml:space="preserve">
    <value>Current position</value>
  </data>
  <data name="TerminalTab_GPS_NewFromCurrent_Name" xml:space="preserve">
    <value>Current</value>
  </data>
  <data name="TerminalTab_GPS_NewFromCurrent_ToolTip" xml:space="preserve">
    <value>Create a new GPS entry at
current coordinates</value>
  </data>
  <data name="TerminalTab_GPS_NewFromFactionComms" xml:space="preserve">
    <value>New from faction comms</value>
  </data>
  <data name="TerminalTab_GPS_NewFromPrivateComms" xml:space="preserve">
    <value>New from private comms</value>
  </data>
  <data name="TerminalTab_GPS_SaveWarning" xml:space="preserve">
    <value>Warning: illegal data. Modifications will not be saved.</value>
  </data>
  <data name="TerminalTab_GPS_SelectGpsEntry" xml:space="preserve">
    <value>No GPS entry selected.</value>
  </data>
  <data name="TerminalTab_GPS_MultipleGpsEntriesSelected" xml:space="preserve">
    <value>Multiple GPS entries selected.</value>
  </data>
  <data name="TerminalTab_GPS_ShowOnHud" xml:space="preserve">
    <value>Show on  HUD</value>
  </data>
  <data name="TerminalTab_GPS_ShowOnHud_ToolTip" xml:space="preserve">
    <value>Display this GPS marker on in-game HUD.</value>
  </data>
  <data name="TerminalTab_GPS_X" xml:space="preserve">
    <value>X</value>
  </data>
  <data name="TerminalTab_GPS_X_ToolTip" xml:space="preserve">
    <value>X Coordinate</value>
  </data>
  <data name="TerminalTab_GPS_Y" xml:space="preserve">
    <value>Y</value>
  </data>
  <data name="TerminalTab_GPS_Y_ToolTip" xml:space="preserve">
    <value>Y Coordinate</value>
  </data>
  <data name="TerminalTab_GPS_Z" xml:space="preserve">
    <value>Z</value>
  </data>
  <data name="TerminalTab_GPS_Z_ToolTip" xml:space="preserve">
    <value>Z Coordinate</value>
  </data>
  <data name="TerminalTab_Info" xml:space="preserve">
    <value>Info</value>
  </data>
  <data name="TerminalTab_Info_Assign" xml:space="preserve">
    <value>Assign Author</value>
  </data>
  <data name="TerminalTab_Info_Blocks" xml:space="preserve">
    <value>Blocks: </value>
  </data>
  <data name="TerminalTab_Info_BlocksLower" xml:space="preserve">
    <value>blocks</value>
  </data>
  <data name="TerminalTab_Info_BlocksTooltip" xml:space="preserve">
    <value>Total number of blocks in a grid</value>
  </data>
  <data name="TerminalTab_Info_ConvertButton" xml:space="preserve">
    <value>Convert to ship</value>
  </data>
  <data name="TerminalTab_Info_ConvertButton_TT" xml:space="preserve">
    <value>Converts this station to a ship.
Ships can move and rotate.</value>
  </data>
  <data name="TerminalTab_Info_ConvertToStationButton" xml:space="preserve">
    <value>Convert to station</value>
  </data>
  <data name="TerminalTab_Info_ConvertToStationButton_TT" xml:space="preserve">
    <value>Converts this ship to a station.
Ship has to be stationary in order to convert it to a station
(both angular and linear velocity have to be 0).
Stations are more performance friendly.</value>
  </data>
  <data name="TerminalTab_Info_Conveyors" xml:space="preserve">
    <value>Conveyors: </value>
  </data>
  <data name="TerminalTab_Info_Description" xml:space="preserve">
    <value>Building a grid partially inside of terrain automatically turns the grid into a station.
Stations are more performance friendly but are static and cannot be moved.

You can convert any station into a ship. Be careful that it's not embedded in any terrain as it might explode.

A ship needs to be stationary in order to convert it into a station.</value>
  </data>
  <data name="TerminalTab_Info_DestructibleBlocks" xml:space="preserve">
    <value>Destructible blocks</value>
  </data>
  <data name="TerminalTab_Info_DestructibleBlocks_Tooltip" xml:space="preserve">
    <value>Toggles destructible blocks only for this grid. If destructible blocks are disabled in world settings, this is ignored. Only available in scenarios.</value>
  </data>
  <data name="TerminalTab_Info_EnemyAntennaRange" xml:space="preserve">
    <value>Show distance for enemy antennas</value>
  </data>
  <data name="TerminalTab_Info_EnemyAntennaRange_ToolTip" xml:space="preserve">
    <value>Maximum range at which enemy
antennas can be displayed on HUD</value>
  </data>
  <data name="TerminalTab_Info_FriendlyAntennaRange" xml:space="preserve">
    <value>Show distance for friendly antennas</value>
  </data>
  <data name="TerminalTab_Info_FriendlyAntennaRange_ToolTip" xml:space="preserve">
    <value>Maximum range at which friendly
antennas can be displayed on HUD</value>
  </data>
  <data name="TerminalTab_Info_GravGens" xml:space="preserve">
    <value>Gravity generators: </value>
  </data>
  <data name="TerminalTab_Info_GridInfoLabel" xml:space="preserve">
    <value>Grid info:</value>
  </data>
  <data name="TerminalTab_Info_GridMassFull" xml:space="preserve">
    <value>Total mass: </value>
  </data>
  <data name="TerminalTab_Info_GridMassDry" xml:space="preserve">
    <value>Dry mass: </value>
  </data>
  <data name="TerminalTab_Info_Lights" xml:space="preserve">
    <value>Lights: </value>
  </data>
  <data name="TerminalTab_Info_NonArmor" xml:space="preserve">
    <value>Non-armor blocks: </value>
  </data>
  <data name="TerminalTab_Info_Overview" xml:space="preserve">
    <value>Created blocks info:</value>
  </data>
  <data name="TerminalTab_Info_OwnedAntennaRange" xml:space="preserve">
    <value>Show distance for owned antennas</value>
  </data>
  <data name="TerminalTab_Info_OwnedAntennaRange_ToolTip" xml:space="preserve">
    <value>Maximum range at which owned
antennas can be displayed on HUD</value>
  </data>
  <data name="TerminalTab_Info_PivotBtn" xml:space="preserve">
    <value>Show grid pivot</value>
  </data>
  <data name="TerminalTab_Info_PivotBtn_ToolTip" xml:space="preserve">
    <value>Draw pivot point of each grid</value>
  </data>
  <data name="TerminalTab_Info_Reflectors" xml:space="preserve">
    <value>Spotlights: </value>
  </data>
  <data name="TerminalTab_Info_RemoveGrid" xml:space="preserve">
    <value>Remove whole grid from the world</value>
  </data>
  <data name="TerminalTab_Info_Rotors" xml:space="preserve">
    <value>Rotors: </value>
  </data>
  <data name="TerminalTab_Info_Shapes" xml:space="preserve">
    <value>Physical shapes: {0}/{1}</value>
  </data>
  <data name="TerminalTab_Info_ShipName" xml:space="preserve">
    <value>Grid Name:</value>
  </data>
  <data name="TerminalTab_Info_ShowAntenaGizmo" xml:space="preserve">
    <value>Show antenna range</value>
  </data>
  <data name="TerminalTab_Info_ShowAntenaGizmo_ToolTip" xml:space="preserve">
    <value>Visualizes range of nearby antennas.</value>
  </data>
  <data name="TerminalTab_Info_ShowGravityGizmo" xml:space="preserve">
    <value>Show gravity range</value>
  </data>
  <data name="TerminalTab_Info_ShowGravityGizmo_ToolTip" xml:space="preserve">
    <value>Visualize range of gravity generators</value>
  </data>
  <data name="TerminalTab_Info_ShowMassCenter" xml:space="preserve">
    <value>Show center of mass</value>
  </data>
  <data name="TerminalTab_Info_ShowAIfunctions" xml:space="preserve">
    <value>Show AI functions</value>
  </data>
  <data name="TerminalTab_Info_ShowAIfunctionsTooltip" xml:space="preserve">
    <value>Shows nearby AI blocks’ helper UI functions</value>
  </data>
  <data name="TerminalTab_Info_ShowMassCenter_ToolTip" xml:space="preserve">
    <value>Draw center of mass of each grid</value>
  </data>
  <data name="TerminalTab_Info_ShowSenzorGizmo" xml:space="preserve">
    <value>Show sensors field range</value>
  </data>
  <data name="TerminalTab_Info_ShowSenzorGizmo_ToolTip" xml:space="preserve">
    <value>Draw range of sensor fields</value>
  </data>
  <data name="TerminalTab_Info_Thrusters" xml:space="preserve">
    <value>Thrusters: </value>
  </data>
  <data name="TerminalTab_Info_Triangles" xml:space="preserve">
    <value>Triangles: </value>
  </data>
  <data name="TerminalTab_Info_TrianglesTooltip" xml:space="preserve">
    <value>Number of triangles for drawing. Technical information.
Higher numbers affect performance.</value>
  </data>
  <data name="TerminalTab_Info_VirtualMass" xml:space="preserve">
    <value>Artificial masses: </value>
  </data>
  <data name="TerminalTab_Info_YouBuilt" xml:space="preserve">
    <value>You built</value>
  </data>
  <data name="TerminalTab_PlayersTableLabel" xml:space="preserve">
    <value>Players:</value>
  </data>
  <data name="TerminalTab_Production" xml:space="preserve">
    <value>Production</value>
  </data>
  <data name="Terminal_AuthorshipNotAvailable" xml:space="preserve">
    <value>Authorship operations are not available when playing with no limits.</value>
  </data>
  <data name="Terminal_BlockAccessDenied" xml:space="preserve">
    <value> (access denied)</value>
  </data>
  <data name="Terminal_BlockIncomplete" xml:space="preserve">
    <value> (incomplete)</value>
  </data>
  <data name="Terminal_CollectAll" xml:space="preserve">
    <value>Collect All</value>
  </data>
  <data name="Terminal_PowerTransferOverride" xml:space="preserve">
    <value>Override Power Transfer</value>
  </data>
  <data name="Terminal_CustomData" xml:space="preserve">
    <value>Custom Data</value>
  </data>
  <data name="Terminal_CustomDataTooltip" xml:space="preserve">
    <value>Shows an editor for custom data to be used by scripts and mods.</value>
  </data>
  <data name="Terminal_DrainAll" xml:space="preserve">
    <value>Drain All</value>
  </data>
  <data name="Terminal_GroupTitle" xml:space="preserve">
    <value>Block Group:</value>
  </data>
  <data name="Terminal_RemoteControl_Button" xml:space="preserve">
    <value>Remote Access</value>
  </data>
  <data name="Terminal_ClaimAuthorship_Button" xml:space="preserve">
    <value>Claim NPC Grid</value>
  </data>
  <data name="Terminal_Shoot" xml:space="preserve">
    <value>Shoot</value>
  </data>
  <data name="Terminal_ShootOnce" xml:space="preserve">
    <value>Shoot once</value>
  </data>
  <data name="Terminal_ShowAllInTerminal" xml:space="preserve">
    <value>Show hidden blocks</value>
  </data>
  <data name="Terminal_ShowInInventory" xml:space="preserve">
    <value>Show block in Inventory Screen</value>
  </data>
  <data name="Terminal_ShowInInventoryToolTip" xml:space="preserve">
    <value>Show block in inventory screen. If you access the block directly it will be visible regardless of this setting.</value>
  </data>
  <data name="Terminal_ShowInTerminal" xml:space="preserve">
    <value>Show block in terminal</value>
  </data>
  <data name="Terminal_ShowInTerminalToolTip" xml:space="preserve">
    <value>Show/hide current block in terminal</value>
  </data>
  <data name="Terminal_ShowInToolbarConfig" xml:space="preserve">
    <value>Show block in toolbar config</value>
  </data>
  <data name="Terminal_ShowInToolbarConfigToolTip" xml:space="preserve">
    <value>Show/hide current block in toolbar config</value>
  </data>
  <data name="Terminal_ShowOnHUD" xml:space="preserve">
    <value>Show on HUD</value>
  </data>
  <data name="Terminal_ShowOnHUDToolTip" xml:space="preserve">
    <value>You must have active antenna connected</value>
  </data>
  <data name="Terminal_ThrowOut" xml:space="preserve">
    <value>Throw Out</value>
  </data>
  <data name="Terminal_UseConveyorSystem" xml:space="preserve">
    <value>Automatic Push/Pull</value>
  </data>
  <data name="ToolbarAction_Decrease" xml:space="preserve">
    <value>Decrease</value>
  </data>
  <data name="ToolbarAction_Increase" xml:space="preserve">
    <value>Increase</value>
  </data>
  <data name="ToolbarAction_Reset" xml:space="preserve">
    <value>Reset</value>
  </data>
  <data name="ToolbarConfig_ResearchTabDisabledTooltip" xml:space="preserve">
    <value>Progression is currently disabled, you can enable it in the advanced world settings.</value>
  </data>
  <data name="ToolTipAudioOptionsEnableReverb" xml:space="preserve">
    <value>Enable sound echo. Note that if your audio rate is larger than 
48kHz, this feature will not work.
(You can configure the audio rate in system's speaker properties)</value>
  </data>
  <data name="ToolTipBatteryBlock" xml:space="preserve">
    <value>Check for power storage, uncheck for power output</value>
    <comment>checkbox tooltip (eg. on BatteryBlock).</comment>
  </data>
  <data name="ToolTipBatteryBlock_Discharge" xml:space="preserve">
    <value>Discharge the battery</value>
  </data>
  <data name="ToolTipBatteryBlock_Semiauto" xml:space="preserve">
    <value>Sets to recharge when stored power is 0, sets to discharge when stored power is max.</value>
  </data>
  <data name="ToolTipCharacterScreen_HideDuplicates" xml:space="preserve">
    <value>Show only one item in case you own
multiple items of the same type</value>
  </data>
  <data name="ToolTipCharacterScreen_Model" xml:space="preserve">
    <value>Change your character model</value>
  </data>
  <data name="ToolTipCharacterScreen_ShowOnlyDuplicates" xml:space="preserve">
    <value>Show only items you own more than one time</value>
  </data>
  <data name="ToolTipDrill_TerrainClearingMode" xml:space="preserve">
    <value>Forces the drill to clear terrain instead of collecting materials when the drill is toggled on.
It does not affect manual control of the drill.</value>
  </data>
  <data name="ToolTipFlaresIntensity" xml:space="preserve">
    <value>Intensity multiplier for all lens flares</value>
  </data>
  <data name="ToolTipOptionsDisplay_SpriteMainViewportScale" xml:space="preserve">
    <value>Scale of the UI screens to prevent having text outside of the TV border.</value>
  </data>
  <data name="LabelOptionsDisplay_SpriteMainViewportScale" xml:space="preserve">
    <value>UI scale</value>
  </data>
  <data name="ToolTipItemFilter_AmmoMagazineInput" xml:space="preserve">
    <value>Any ammo magazine accepted by {0}</value>
  </data>
  <data name="ToolTipItemFilter_AnyIngot" xml:space="preserve">
    <value>Any kind of ingot</value>
  </data>
  <data name="ToolTipItemFilter_AnyOre" xml:space="preserve">
    <value>Any kind of ore</value>
  </data>
  <data name="ToolTipItemFilter_AssembledItems" xml:space="preserve">
    <value>Any item produced by assembler</value>
  </data>
  <data name="ToolTipItemFilter_GenericProductionBlockInput" xml:space="preserve">
    <value>Any item accepted by {0}</value>
  </data>
  <data name="ToolTipItemFilter_GenericProductionBlockOutput" xml:space="preserve">
    <value>Any item produced by {0}</value>
  </data>
  <data name="ToolTipItemFilter_Missile200mm" xml:space="preserve">
    <value>Rocket 200 mm</value>
  </data>
  <data name="ToolTipItemFilter_NATO_25x184mm" xml:space="preserve">
    <value>NATO 25x184 mm</value>
  </data>
  <data name="ToolTipItemFilter_NATO_5p56x45mm" xml:space="preserve">
    <value>NATO 5.56x45 mm</value>
  </data>
  <data name="ToolTipItemFilter_UraniumIngot" xml:space="preserve">
    <value>Uranium ingot</value>
  </data>
  <data name="ToolTipJoinGameDirectConnect_Favorite" xml:space="preserve">
    <value>Check to add this IP to your favorite servers list</value>
  </data>
  <data name="ToolTipJoinGameDirectConnect_IP" xml:space="preserve">
    <value>Insert server IP or hostname.</value>
  </data>
  <data name="ToolTipJoinGameServerDetails_AddFavorite" xml:space="preserve">
    <value>Add selected server to favorites</value>
  </data>
  <data name="ToolTipJoinGameServerDetails_Mods" xml:space="preserve">
    <value>View server mods</value>
  </data>
  <data name="ToolTipJoinGameServerDetails_Players" xml:space="preserve">
    <value>View online players</value>
  </data>
  <data name="ToolTipJoinGameServerDetails_RemoveFavorite" xml:space="preserve">
    <value>Remove selected server from favorites</value>
  </data>
  <data name="ToolTipJoinGameServerDetails_Settings" xml:space="preserve">
    <value>View server settings</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Advanced" xml:space="preserve">
    <value>Configure advanced search settings</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_AllowedGroups" xml:space="preserve">
    <value>Show servers supporting {0} group whitelisting</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_CompatibleVersions" xml:space="preserve">
    <value>Show only servers with compatible version</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Creative" xml:space="preserve">
    <value>Show creative servers</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Defaults" xml:space="preserve">
    <value>Restore server search settings to default value</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_EvnironmentHostility" xml:space="preserve">
    <value>Show only servers with corresponding level of
environment hostility</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_HasPassword" xml:space="preserve">
    <value>Show servers with password</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_MaximumFilterValue" xml:space="preserve">
    <value>Maximum filter value</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_MinimumFilterValue" xml:space="preserve">
    <value>Minimum filter value</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Mods" xml:space="preserve">
    <value>Configure mods search settings</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Ping" xml:space="preserve">
    <value>Filter by latency</value>
    <comment>.</comment>
  </data>
  <data name="ToolTipJoinGameServerSearch_SameGameData" xml:space="preserve">
    <value>Show only servers with same game data</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Search" xml:space="preserve">
    <value>Update current server search filter</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Settings" xml:space="preserve">
    <value>Configure basic server search settings</value>
  </data>
  <data name="ToolTipJoinGameServerSearch_Survival" xml:space="preserve">
    <value>Show survival servers</value>
  </data>
  <data name="ToolTipJoinGame_Advanced" xml:space="preserve">
    <value>Open advanced server search settings</value>
  </data>
  <data name="ToolTipJoinGame_DirectConnect" xml:space="preserve">
    <value>Connect to a server via IP</value>
  </data>
  <data name="ToolTipJoinGame_JoinWorld" xml:space="preserve">
    <value>Join selected server</value>
  </data>
  <data name="ToolTipJoinGame_Refresh" xml:space="preserve">
    <value>Refresh server list</value>
  </data>
  <data name="ToolTipJoinGame_Search" xml:space="preserve">
    <value>Search by entering name of the server</value>
  </data>
  <data name="ToolTipJoinGame_SearchClear" xml:space="preserve">
    <value>Clear search</value>
  </data>
  <data name="ToolTipJoinGame_ServerDetails" xml:space="preserve">
    <value>Open server details screen</value>
  </data>
  <data name="ToolTipLoadGame_Backups" xml:space="preserve">
    <value>Show backups for selected save file</value>
  </data>
  <data name="ToolTipLoadGame_Delete" xml:space="preserve">
    <value>Delete selected save file</value>
  </data>
  <data name="ToolTipLoadGame_EditSettings" xml:space="preserve">
    <value>Edit world settings of selected save file</value>
  </data>
  <data name="ToolTipLoadGame_Load" xml:space="preserve">
    <value>Load and play selected world</value>
  </data>
  <data name="ToolTipLoadGame_SaveAs" xml:space="preserve">
    <value>Create a new save file from a selected world</value>
  </data>
  <data name="ToolTipMods_Ok" xml:space="preserve">
    <value>Apply mod configuration</value>
  </data>
  <data name="ToolTipMods_Search" xml:space="preserve">
    <value>Search for a mod by typing its name</value>
  </data>
  <data name="ToolTipNewGameCustomGame_Advanced" xml:space="preserve">
    <value>Open advanced world configuration screen</value>
  </data>
  <data name="ToolTipNewGameCustomGame_Mods" xml:space="preserve">
    <value>Open mod configuration screen</value>
  </data>
  <data name="ToolTipNewGame_Campaign" xml:space="preserve">
    <value>Start a new campaign game</value>
  </data>
  <data name="ToolTipNewGame_CustomGame" xml:space="preserve">
    <value>Create a new custom world</value>
  </data>
  <data name="ToolTipNewGame_Start" xml:space="preserve">
    <value>Start selected world</value>
  </data>
  <data name="ToolTipNewGame_WorkshopContent" xml:space="preserve">
    <value>Choose one of your subscribed workshop items or browse for more</value>
  </data>
  <data name="ToolTipNewGame_NoWorkshopWorld" xml:space="preserve">
    <value>There are no subscribed Workshop worlds. Open Workshop Browser to subscribe worlds.</value>
  </data>
  <data name="ToolTipNewsletter_Close" xml:space="preserve">
    <value>Close this window</value>
  </data>
  <data name="ToolTipNewsletter_DontAskAgain" xml:space="preserve">
    <value>Check this, if you don't want to see this popup again</value>
  </data>
  <data name="ToolTipNewsletter_Email" xml:space="preserve">
    <value>Insert your email adress</value>
  </data>
  <data name="UGCService_Email" xml:space="preserve">
    <value>Insert your email address to login to {0}: (temporary)</value>
  </data>
  <data name="ToolTipNewsletter_Ok" xml:space="preserve">
    <value>Proceed</value>
  </data>
  <data name="ToolTipNewWorldQuickstart" xml:space="preserve">
    <value>Create a new world using the default settings:
Game Type: Creative Mode
Scenario: Planet / Easy Start 1
Auto-Save: ON</value>
  </data>
  <data name="ToolTipOptionsAudio_EnableVoiceChat" xml:space="preserve">
    <value>Enable in-game voice chat</value>
  </data>
  <data name="ToolTipOptionsAudio_HudWarnings" xml:space="preserve">
    <value>Use sound warnings, when low on oxygen, health or power</value>
  </data>
  <data name="ToolTipOptionsAudio_MusicVolume" xml:space="preserve">
    <value>Configure volume level of in-game music</value>
  </data>
  <data name="ToolTipOptionsAudio_MuteWhenInactive" xml:space="preserve">
    <value>Disable all sound when game window loses focus</value>
  </data>
  <data name="ToolTipOptionsAudio_SoundVolume" xml:space="preserve">
    <value>Configure volume level of sound effects</value>
  </data>
  <data name="ToolTipOptionsAudio_SpeedBasedSounds" xml:space="preserve">
    <value>Play ship engine sounds based solely on the speed of the craft.
Uncheck for realistic sound.</value>
  </data>
  <data name="ToolTipOptionsAudio_UseContextualMusic" xml:space="preserve">
    <value>Change music according to current in-game situation</value>
  </data>
  <data name="ToolTipOptionsAudio_VoiceChatVolume" xml:space="preserve">
    <value>Configure volume level of player voice chat</value>
  </data>
  <data name="ToolTipOptionsControls_Category" xml:space="preserve">
    <value>Choose controls category</value>
  </data>
  <data name="ToolTipOptionsControls_ClickToEdit" xml:space="preserve">
    <value>Click to edit
Right click to remove binding</value>
  </data>
  <data name="ToolTipOptionsControls_Defaults" xml:space="preserve">
    <value>Set controls to default values</value>
  </data>
  <data name="ToolTipOptionsControls_InvertMouseX" xml:space="preserve">
    <value>Reverse horizontal movement of mouse</value>
  </data>
  <data name="ToolTipOptionsControls_InvertMouseY" xml:space="preserve">
    <value>Reverse vertical movement of mouse</value>
  </data>
  <data name="ToolTipOptionsControls_InvertMouseScrollBlockSelection" xml:space="preserve">
    <value>Reverse block selection by mouse scroll (scroll up = next block, scroll down = previous block)</value>
  </data>
  <data name="ToolTipOptionsControls_JoystickDeadzoneWidth" xml:space="preserve">
    <value>Adjust how much movement of the controller is needed before it activates</value>
  </data>
  <data name="ToolTipOptionsControls_JoystickGradualPrecision" xml:space="preserve">
    <value>Change how sensitive your controller is to slow movements</value>
  </data>
  <data name="ToolTipOptionsControls_JoystickOrGamepad" xml:space="preserve">
    <value>Select active controller</value>
  </data>
  <data name="ToolTipOptionsControls_JoystickSensitivity" xml:space="preserve">
    <value>Adjust sensitivty of your controller</value>
  </data>
  <data name="ToolTipOptionsControls_MouseSensitivity" xml:space="preserve">
    <value>Change how sensitive your mouse is to movement</value>
  </data>
  <data name="ToolTipOptionsDisplay_ScreenshotMultiplier" xml:space="preserve">
    <value>Choose how big screenshots will be in multipliers of current window size</value>
  </data>
  <data name="ToolTipOptionsDisplay_WindowMode" xml:space="preserve">
    <value>Choose whether the game should appear
fullscreen or in a window</value>
  </data>
  <data name="ToolTipOptionsGame_GDPRConsent" xml:space="preserve">
    <value>By checking this you agree to our privacy policy according to GDPR.

You can change your mind at any time.</value>
  </data>
  <data name="ToolTipOptionsGame_BuildingMode" xml:space="preserve">
    <value>Select default block-placement mode
(Affects only building in creative)</value>
  </data>
  <data name="ToolTipOptionsGame_Language" xml:space="preserve">
    <value>Choose your preferred language settings</value>
  </data>
  <data name="ToolTipOptionsGraphics_AmbientOcclusion" xml:space="preserve">
    <value>Darken the areas that are less exposed to the ambient light</value>
  </data>
  <data name="ToolTipOptionsGraphics_AnisotropicFiltering" xml:space="preserve">
    <value>Improve render quality of textures</value>
  </data>
  <data name="ToolTipOptionsGraphics_Antialiasing" xml:space="preserve">
    <value>Smooth out hard edges around objects</value>
  </data>
  <data name="ToolTipOptionsGraphics_FOV" xml:space="preserve">
    <value>Adjust vertical view cone of character camera in degrees</value>
  </data>
  <data name="ToolTipOptionsGraphics_GrassDensity" xml:space="preserve">
    <value>Set density of grass</value>
  </data>
  <data name="ToolTipOptionsGraphics_GrassDrawDistance" xml:space="preserve">
    <value>Modify grass render distance</value>
  </data>
  <data name="ToolTipOptionsGraphics_ModelQuality" xml:space="preserve">
    <value>Set model complexity</value>
  </data>
  <data name="ToolTipOptionsGraphics_PostProcessing" xml:space="preserve">
    <value>Enables Bloom, Vignette, Chromatic Aberation and washes the visor up</value>
  </data>
  <data name="ToolTipOptionsGraphics_QualityPreset" xml:space="preserve">
    <value>Choose a quality preset, according to your HW specifications</value>
  </data>
  <data name="ToolTipOptionsGraphics_ShaderQuality" xml:space="preserve">
    <value>Select quality of render effects.
Higher settings may affect performance.</value>
  </data>
  <data name="ToolTipOptionsGraphics_ShadowQuality" xml:space="preserve">
    <value>Select shadow resolution</value>
  </data>
  <data name="ToolTipOptionsGraphics_TextureQuality" xml:space="preserve">
    <value>Set texture detail</value>
  </data>
  <data name="ToolTipOptionsGraphics_TreeDrawDistance" xml:space="preserve">
    <value>Select tree render distance</value>
  </data>
  <data name="ToolTipOptionsGraphics_VoxelQuality" xml:space="preserve">
    <value>Choose visual complexity of distant voxels</value>
  </data>
  <data name="ToolTipOptionsSpace_Audio" xml:space="preserve">
    <value>Configure audio options</value>
  </data>
  <data name="ToolTipOptionsSpace_Cancel" xml:space="preserve">
    <value>Return to previous menu</value>
  </data>
  <data name="ToolTipOptionsSpace_Controls" xml:space="preserve">
    <value>Configure game contorls</value>
  </data>
  <data name="ToolTipOptionsSpace_Credits" xml:space="preserve">
    <value>View credits</value>
  </data>
  <data name="ToolTipOptionsSpace_Display" xml:space="preserve">
    <value>Configure display options</value>
  </data>
  <data name="ToolTipOptionsSpace_Game" xml:space="preserve">
    <value>Configure game options</value>
  </data>
  <data name="ToolTipOptionsSpace_Graphics" xml:space="preserve">
    <value>Configure graphics options</value>
  </data>
  <data name="ToolTipOptionsSpace_Ok" xml:space="preserve">
    <value>Apply changes</value>
  </data>
  <data name="ToolTipSafeZone_AddContained" xml:space="preserve">
    <value>Add all entities inside safe zone to the filter</value>
  </data>
  <data name="TooltipScreenMods_Category_All" xml:space="preserve">
    <value>All</value>
  </data>
  <data name="TooltipScreenMods_Category_Animation" xml:space="preserve">
    <value>Animation</value>
  </data>
  <data name="TooltipScreenMods_Category_Block" xml:space="preserve">
    <value>Block</value>
  </data>
  <data name="TooltipScreenMods_Category_Character" xml:space="preserve">
    <value>Character</value>
  </data>
  <data name="TooltipScreenMods_Category_Modpack" xml:space="preserve">
    <value>Modpack</value>
  </data>
  <data name="TooltipScreenMods_Category_Other" xml:space="preserve">
    <value>Other</value>
  </data>
  <data name="TooltipScreenMods_Category_Planet" xml:space="preserve">
    <value>Planet</value>
  </data>
  <data name="TooltipScreenMods_Category_Production" xml:space="preserve">
    <value>Production</value>
  </data>
  <data name="TooltipScreenMods_Category_RespawnShip" xml:space="preserve">
    <value>Respawn Ship</value>
  </data>
  <data name="TooltipScreenMods_Category_Script" xml:space="preserve">
    <value>Script</value>
  </data>
  <data name="TooltipScreenMods_Category_Skybox" xml:space="preserve">
    <value>Skybox</value>
  </data>
  <data name="ToolTipTerminalInventory_FilterAll" xml:space="preserve">
    <value>Show all types of inventories</value>
  </data>
  <data name="ToolTipTerminalInventory_FilterShip" xml:space="preserve">
    <value>Show only inventories of the current ship</value>
  </data>
  <data name="ToolTipTerminalInventory_FilterEnergy" xml:space="preserve">
    <value>Filter energy inventories</value>
  </data>
  <data name="ToolTipTerminalInventory_FilterStorage" xml:space="preserve">
    <value>Filter storage inventories</value>
  </data>
  <data name="ToolTipTerminalInventory_FilterSystem" xml:space="preserve">
    <value>Filter system inventories</value>
  </data>
  <data name="ToolTipTerminalInventory_HideEmpty" xml:space="preserve">
    <value>Show only inventories that are not empty</value>
  </data>
  <data name="ToolTipTerminalInventory_ItemInfo" xml:space="preserve">
    <value>{0}{3}
Mass: {1} kg
Volume: {2} L{4}</value>
  </data>
  <data name="ToolTipTerminalInventory_ShowCharacter" xml:space="preserve">
    <value>Show character inventory</value>
  </data>
  <data name="ToolTipTerminalInventory_ShowConnected" xml:space="preserve">
    <value>Show connected inventories (on ship or station)</value>
  </data>
  <data name="ToolTipTerminalInventory_ShowConnectedDisabled" xml:space="preserve">
    <value>No connected inventories</value>
  </data>
  <data name="ToolTipTerminalInventory_ShowInteracted" xml:space="preserve">
    <value>Show inventory of interacted item (or corpse)</value>
  </data>
  <data name="ToolTipTerminalInventory_ThrowOut" xml:space="preserve">
    <value>Drop item</value>
  </data>
  <data name="ToolTipTerminalInventory_ThrowOutDisabled" xml:space="preserve">
    <value>Drop selected item from character inventory</value>
  </data>
  <data name="ToolTipTerminalProduction_AssemblingMode" xml:space="preserve">
    <value>Assembling mode: ingots to components</value>
  </data>
  <data name="ToolTipTerminalProduction_DisassembleAll" xml:space="preserve">
    <value>Disassemble all items in inventory</value>
  </data>
  <data name="ToolTipTerminalProduction_DisassemblingMode" xml:space="preserve">
    <value>Disassembling mode: components to ingots</value>
  </data>
  <data name="ToolTipTerminalProduction_RepeatMode" xml:space="preserve">
    <value>Enable or disable repeat mode</value>
  </data>
  <data name="ToolTipTerminalProduction_SlaveMode" xml:space="preserve">
    <value>Enable or disable cooperative mode</value>
  </data>
  <data name="ToolTipTimerBlock_Silent" xml:space="preserve">
    <value>Turn off timer beep sounds</value>
  </data>
  <data name="ToolTipVideoOptionsEnableDamageEffects" xml:space="preserve">
    <value>Enable particle effects  for damaged blocks</value>
  </data>
  <data name="ToolTipVideoOptionsRenderer" xml:space="preserve">
    <value>Changing the renderer requires restart of the game</value>
  </data>
  <data name="ToolTipWorldSettingsAsteroidAmount" xml:space="preserve">
    <value>Sets the density of procedurally generated asteroid fields.</value>
  </data>
  <data name="ToolTipWorldSettingsAutoHealing" xml:space="preserve">
    <value>Enables auto-healing of players in pressurized environments
while not taking any damage. It heals up to {0}%.</value>
  </data>
  <data name="ToolTipWorldSettingsDestructibleBlocks" xml:space="preserve">
    <value>Enables blocks destruction.</value>
  </data>
  <data name="ToolTipWorldSettingsDifficulty" xml:space="preserve">
    <value>The damage given and taken to and from enemies
and environment. Higher difficulty means more 
realistic damage.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableCargoShips" xml:space="preserve">
    <value>Whether random cargo ships should be enabled</value>
  </data>
  <data name="ToolTipWorldSettingsEnableCopyPaste" xml:space="preserve">
    <value>Copy paste allows to create new ships or 
stations directly from the clipboard.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableSpectator" xml:space="preserve">
    <value>Enables spectator view in the world.</value>
  </data>
  <data name="ToolTipWorldSettingsEnvironment" xml:space="preserve">
    <value>Sets the frequency and intensity of meteor showers.</value>
  </data>
  <data name="ToolTipWorldSettingsFriendlyFire" xml:space="preserve">
    <value>When checked, allies can damage each other</value>
  </data>
  <data name="ToolTipWorldSettingsHardwareRequirements" xml:space="preserve">
    <value>Hardware requirements define how rich your world can be. 
Higher values are more demanding on computing performance 
of your computer (CPU and GPU) and will definitely require more memory.</value>
  </data>
  <data name="ToolTipWorldSettingsHarvestingMode" xml:space="preserve">
    <value>Creative Mode: unlimited resources, instant building, players don't die. Use creative mode when you
just want to build things.

Survival Mode: realistic inventory capacity, constrained resources - you have to drill and harvest ore, process it
in a refinery, construct components in assembler, build blocks using welder, disassemble using grinder,
players can die - they re-spawn in their spawn point and if there's no spawn point available, then in a new ship
as a new player at the border of the sector.

Survival x3: same as "Survival", but 3x larger inventory capacity.

Survival x10: same as "Survival", but 10x larger inventory capacity.</value>
  </data>
  <data name="ToolTipWorldSettingsLimitWorldSize" xml:space="preserve">
    <value>When set, the game area is limited to a cube with 
the side length set to the chosen size.
All objects that leave the game area will be 
removed from the game.
Characters leaving the game area will be killed.</value>
  </data>
  <data name="ToolTipWorldSettingsMaxBackupSaves" xml:space="preserve">
    <value>Configure the maximum number of saves that 
should be backed up. The backup folder is located
on the respective save directory. When this is 0 then 
the backup feature is disabled and all backups are 
deleted upon save!</value>
  </data>
  <data name="ToolTipWorldSettingsMaxBlocksPerPlayer" xml:space="preserve">
    <value>Maximum number of blocks each player can build. 
Destroyed blocks are refunded.</value>
  </data>
  <data name="ToolTipWorldSettingsMaxFloatingObjects" xml:space="preserve">
    <value>Maximum number of small objects floating in 
space (ore, ingots, components) Warning - values 
higher than 64 can significantly affect performance!</value>
  </data>
  <data name="ToolTipWorldSettingsTotalBotLimit" xml:space="preserve">
    <value>Maximum number of animal NPCs on planets. Warning - values 
higher than 64 can significantly affect performance!</value>
  </data>
  <data name="ToolTipWorldSettingsMaxGridSize" xml:space="preserve">
    <value>Sets the maximum size (in blocks) of ships and stations.</value>
  </data>
  <data name="ToolTipWorldSettingsMaxPlayer" xml:space="preserve">
    <value>Sets the maximum amount of players in game.</value>
  </data>
  <data name="ToolTipWorldSettingsModeCreative" xml:space="preserve">
    <value>Unlimited resources, instant building, no death</value>
  </data>
  <data name="ToolTipWorldSettingsModeSurvival" xml:space="preserve">
    <value>Realistic management of resources, realistic inventory 
capacity, death and respawn</value>
  </data>
  <data name="ToolTipWorldSettingsOnlineMode" xml:space="preserve">
    <value>Visibility of your game.

Offline: Game runs in offline mode and does not 
require internet connection
Private: Only invited players can join
Friends: Only your {0} friends can join
Public: Any {0} player can join</value>
  </data>
  <data name="ToolTipWorldSettingsPermanentDeath" xml:space="preserve">
    <value>Enables players losing everything if they die
and don't have any available respawn points.</value>
  </data>
  <data name="ToolTipWorldSettingsPVP" xml:space="preserve">
    <value>PvE means that you cannot damage other players. PvP 
means that you can damage them and they can damage you.</value>
  </data>
  <data name="ToolTipWorldSettingsRemoveTrash" xml:space="preserve">
    <value>If checked, ships that are considered to be trash will be 
removed to make the game run faster. To be considered 
trash, the grid has to contain just a few blocks, be in uniform 
linear motion, be unpowered, uncontrolled, without a 
medbay and far enough from all players so that they can barely
see it.</value>
  </data>
  <data name="ToolTipWorldSettingsResetOwnership" xml:space="preserve">
    <value>Removes ownership of all blocks.</value>
  </data>
  <data name="TooltipWorldSettingsRespawnShipDelete" xml:space="preserve">
    <value>Deletes respawn ships when players leave servers or spawn in new ships.</value>
  </data>
  <data name="ToolTipWorldSettingsShowPlayerNamesOnHud" xml:space="preserve">
    <value>Enables player name tags above above their characters.</value>
  </data>
  <data name="ToolTipWorldSettingsSoundInSpace" xml:space="preserve">
    <value>There's no sound in space. Turn it on to simulate Earth-like sound conditions (even though it's not realistic). Turn it off for a realistic mode where you can hear only sounds that your astronaut character can hear.</value>
  </data>
  <data name="ToolTipWorldSettingsSoundMode" xml:space="preserve">
    <value>Switches between realistic and arcade sounds.</value>
  </data>
  <data name="ToolTipWorldSettingsThrusterDamage" xml:space="preserve">
    <value>Enables thruster flames dealing damage to blocks, players, and small objects.</value>
  </data>
  <data name="ToolTipWorldSettingsTotalPCU" xml:space="preserve">
    <value>Sets the total amount of performance cost units (PCU) in the world.
Each placed block costs some PCU. Dismantled blocks are refunded.</value>
  </data>
  <data name="ToolTipWorldSettingsViewDistance" xml:space="preserve">
    <value>Larger view distances can cause performance issues 
depending on how many objects are in the world.
Large view distances are not recommended on worlds
with high asteroid densities.</value>
  </data>
  <data name="ToolTipWorldSettingsOptimalSpawnDistance" xml:space="preserve">
    <value>Optimal distance in meters the game should take into consideration when spawning new player near others.</value>
  </data>
  <data name="ToolTipWorldSettingsAutorespawn" xml:space="preserve">
    <value>Enables automatic respawning at the nearest available respawn point.</value>
  </data>
  <data name="WorldSettings_EnableAutorespawn" xml:space="preserve">
    <value>Enable autorespawn</value>
  </data>
  <data name="Medical_EnableAutorespawn_Tooltip" xml:space="preserve">
    <value>This is not the nearest medical room. 
    The "Autorespawn" world setting 
    prevents you from spawning here.</value>
  </data>
  <data name="ToolTipWorldSettingsSupergridding" xml:space="preserve">
    <value>Allows supergridding exploit to be used.</value>
  </data>
  <data name="WorldSettings_EnableSupergridding" xml:space="preserve">
    <value>Enable supergridding</value>
  </data>
  <data name="ToolTipWorldSettingsWeapons" xml:space="preserve">
    <value>Enables weapons and explosives.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableSpaceSuitRespawn" xml:space="preserve">
    <value>Enables Space Suit Respawn.</value>
  </data>
  <data name="ToolTipWorldSettings_AdaptiveSimulationQuality" xml:space="preserve">
    <value>Enables quality reduction of deformations and explosions affecting voxels in case the CPU is on fire.</value>
  </data>
  <data name="ToolTipWorldSettings_AssemblerEfficiency" xml:space="preserve">
    <value>Sets the assembler efficiency multiplier. This setting increases or decreases the material yield of ore.</value>
  </data>
  <data name="ToolTipWorldSettings_Assembler_x1" xml:space="preserve">
    <value>Default assembler speed and efficiency</value>
  </data>
  <data name="ToolTipWorldSettings_Assembler_x10" xml:space="preserve">
    <value>Assembler requires 10x less materials and is 10x faster</value>
  </data>
  <data name="ToolTipWorldSettings_Assembler_x3" xml:space="preserve">
    <value>Assembler requires 3x less materials and is 3x faster</value>
  </data>
  <data name="ToolTipWorldSettings_CargoShipsEnabled" xml:space="preserve">
    <value>Enables random cargoships flying through the world 
from time to time.</value>
  </data>
  <data name="ToolTipWorldSettings_ClientCanSave" xml:space="preserve">
    <value>Client can save network game. If unchecked 
then only server can save</value>
  </data>
  <data name="ToolTipWorldSettings_DayDuration" xml:space="preserve">
    <value>Adjusts the length of the day cycle.</value>
  </data>
  <data name="ToolTipWorldSettings_Enable3rdPersonCamera" xml:space="preserve">
    <value>Enables the camera to be switchable to 3rd person view.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableContainerDrops" xml:space="preserve">
    <value>Enables spawning of unknown signals.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableConvertToStation" xml:space="preserve">
    <value>Adds an option to ship terminals to convert ships to stations.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableDrones" xml:space="preserve">
    <value>Random NPC pirate ship will be generated from time to time.
These ships are enemies and will try to attack you with their drones.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableEncounters" xml:space="preserve">
    <value>Enables randomly spawned abandoned ships and stations.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableFlora" xml:space="preserve">
    <value>Enables flora for planets.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableIngameScripts" xml:space="preserve">
    <value>Enables scripts running in game. Scripts are used in programmable blocks.
They can also be used by some mods to create advanced logic and effects.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableJetpack" xml:space="preserve">
    <value>If this is turned off, characters won't be able to use jetpacks at all.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableOxygen" xml:space="preserve">
    <value>Enables oxygen processing. Oxygen is used by space suits and cockpits.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableOxygenPressurization" xml:space="preserve">
    <value>Allows pressurization of ships and stations.</value>
  </data>
  <data name="ToolTipWorldSettings_EnablePlanets" xml:space="preserve">
    <value>Enable/disable spawning of planets in world</value>
  </data>
  <data name="TooltipWorldSettings_EnableRealisticDampeners" xml:space="preserve">
    <value>Enables realistic dampeners</value>
  </data>
  <data name="ToolTipWorldSettings_EnableRemoteBlockRemoval" xml:space="preserve">
    <value>Enables players to remotely remove owned blocks
 to free up their PCU limit.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableRespawnShips" xml:space="preserve">
    <value>Enables respawning in ships. If disabled, respawning is only possible
in the suit, in medical stations, or in survival kits.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableSpiders" xml:space="preserve">
    <value>Enables spawning of spiders on planets.</value>
  </data>
  <data name="TooltipWorldSettings_EnableSubGridDamage" xml:space="preserve">
    <value>Enables damage to sub-grids originating from collisions, explosions
and other sources on connected grids. We recommend 
leaving this setting disabled for more stable behavior.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableSunRotation" xml:space="preserve">
    <value>Enables sun movement to create a day night cycle.</value>
  </data>
  <data name="TooltipWorldSettings_EnableTurretFriendlyDamage" xml:space="preserve">
    <value>Enables explosion damage from rockets being applied to its own grid.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableVoxelDestruction" xml:space="preserve">
    <value>Enables voxel destruction.</value>
  </data>
  <data name="ToolTipWorldSettings_EnableWolfs" xml:space="preserve">
    <value>Enables spawning of wolves on planets.</value>
  </data>
  <data name="ToolTipWorldSettings_FloraDensity" xml:space="preserve">
    <value>Density of flora elements on planets</value>
  </data>
  <data name="ToolTipWorldSettings_Grinder_half" xml:space="preserve">
    <value>Decrease grinding speed by 50%</value>
  </data>
  <data name="ToolTipWorldSettings_Grinder_x1" xml:space="preserve">
    <value>Default grinding speed</value>
  </data>
  <data name="ToolTipWorldSettings_Grinder_x2" xml:space="preserve">
    <value>Grinding speed is 2x faster</value>
  </data>
  <data name="ToolTipWorldSettings_Grinder_x5" xml:space="preserve">
    <value>Grinding speed is 5x faster</value>
  </data>
  <data name="ToolTipWorldSettings_GrindingSpeed" xml:space="preserve">
    <value>Sets the grinding speed multiplier.</value>
  </data>
  <data name="ToolTipWorldSettings_InventorySize" xml:space="preserve">
    <value>Adjusts the inventory size of your character.</value>
  </data>
  <data name="ToolTipWorldSettings_Inventory_x1" xml:space="preserve">
    <value>Default inventory capacity</value>
  </data>
  <data name="ToolTipWorldSettings_Inventory_x10" xml:space="preserve">
    <value>Inventory capacity is 10x larger</value>
  </data>
  <data name="ToolTipWorldSettings_Inventory_x3" xml:space="preserve">
    <value>Inventory capacity is 3x larger</value>
  </data>
  <data name="ToolTipWorldSettings_RefinerySpeed" xml:space="preserve">
    <value>Sets the refinery speed multiplier.</value>
  </data>
  <data name="ToolTipWorldSettings_Refinery_x1" xml:space="preserve">
    <value>Default refinery speed</value>
  </data>
  <data name="ToolTipWorldSettings_Refinery_x10" xml:space="preserve">
    <value>Refinery is 10x faster</value>
  </data>
  <data name="ToolTipWorldSettings_Refinery_x3" xml:space="preserve">
    <value>Refinery is 3x faster</value>
  </data>
  <data name="ToolTipWorldSettings_RespawnShipCooldown" xml:space="preserve">
    <value>Sets the respawn ship cooldown multiplier.</value>
  </data>
  <data name="ToolTipWorldSettings_ScenarioEditMode" xml:space="preserve">
    <value>Allows additional ingame options for creating scenario.
Also displays your saved game in scenario start screen.</value>
  </data>
  <data name="ToolTipWorldSettings_SpawnWithTools" xml:space="preserve">
    <value>If this is turned off, characters won't spawn with 
any tools in their inventory.</value>
  </data>
  <data name="ToolTipWorldSettings_StartInRespawnScreen" xml:space="preserve">
    <value>When played as scenario: player will start in 
respawn screen with new identity, all ownership 
will be lost</value>
  </data>
  <data name="ToolTipWorldSettings_StationVoxelSupport" xml:space="preserve">
    <value>By enabling this option grids will no longer turn
dynamic when disconnected from static grids.</value>
  </data>
  <data name="ToolTipWorldSettings_ToolShake" xml:space="preserve">
    <value>Enables shaking of ship drills and grinders.</value>
  </data>
  <data name="ToolTipWorldSettings_VoxelHand" xml:space="preserve">
    <value>Enables voxel hand.</value>
  </data>
  <data name="ToolTipWorldSettings_Welder_half" xml:space="preserve">
    <value>Decrease welding speed by 50%</value>
  </data>
  <data name="ToolTipWorldSettings_Welder_x1" xml:space="preserve">
    <value>Default welding speed</value>
  </data>
  <data name="ToolTipWorldSettings_Welder_x2" xml:space="preserve">
    <value>Welding speed is 2x faster</value>
  </data>
  <data name="ToolTipWorldSettings_Welder_x5" xml:space="preserve">
    <value>Welding speed is 5x faster</value>
  </data>
  <data name="ToolTipWorldSettings_WeldingSpeed" xml:space="preserve">
    <value>Sets the welding speed multiplier.</value>
  </data>
  <data name="TrainingLevel" xml:space="preserve">
    <value>Training Level</value>
  </data>
  <data name="TrainingLevel_Advanced" xml:space="preserve">
    <value>Advanced</value>
  </data>
  <data name="TrainingLevel_Basic" xml:space="preserve">
    <value>Basic</value>
  </data>
  <data name="TrainingLevel_Intermediate" xml:space="preserve">
    <value>Intermediate</value>
  </data>
  <data name="TrainingLevel_Planetary" xml:space="preserve">
    <value>Planetary</value>
  </data>
  <data name="TransformationToolsButton" xml:space="preserve">
    <value>Transformation tools</value>
  </data>
  <data name="TriggerNotSelected" xml:space="preserve">
    <value>Trigger not selected</value>
  </data>
  <data name="Triggers" xml:space="preserve">
    <value>Triggers</value>
  </data>
  <data name="Turret" xml:space="preserve">
    <value>Turret</value>
  </data>
  <data name="UnsavedChanges" xml:space="preserve">
    <value>Unsaved changes</value>
  </data>
  <data name="UnsavedChangesQuestion" xml:space="preserve">
    <value>You have unsaved changes. Do you want to save current cutscene first?</value>
  </data>
  <data name="Uranium" xml:space="preserve">
    <value>Uranium</value>
  </data>
  <data name="WelcomeScreen_Signature" xml:space="preserve">
    <value>Marek Rosa</value>
  </data>
  <data name="WelcomeScreen_SignatureTitle" xml:space="preserve">
    <value>Creative Director</value>
  </data>
  <data name="WelcomeScreen_Text1" xml:space="preserve">
    <value>I would first like to personally thank you for choosing to support our game and its development. Many talented people been involved in this project during the last six years and we are honoured to have you join our community.</value>
  </data>
  <data name="WelcomeScreen_Text2" xml:space="preserve">
    <value>A space engineer is a professional practitioner who uses scientific knowledge, mathematics, physics, astronomy, propulsion technology, materials science, structural analysis, manufacturing, and ingenuity to solve practical problems in space and on planets.

Space engineers take pride in their ability to get the job done right. No matter how big, how complex, or how remote.</value>
  </data>
  <data name="WelcomeScreen_Text3" xml:space="preserve">
    <value>If you experience any issues, please do not hesitate to visit the support site or our Discord server where there are developers and many experienced players available to assist you!

If you're interested in seeing some of the potential of Space Engineers, be sure to visit the {0} Community Hub. We look forward to seeing your creations and screenshots on there in the future. Good luck engineering your dreams!</value>
  </data>
  <data name="WelcomeScreen_Text3_console" xml:space="preserve">
    <value>If you experience any issues, please do not hesitate to visit the support site or our Discord server where there are developers and many experienced players available to assist you!

	Good luck engineering your dreams!</value>
  </data>
  <data name="WelderPrimaryActionBuild" xml:space="preserve">
    <value>Press {0} to weld target</value>
  </data>
  <data name="WorkshopTag_Asteroid" xml:space="preserve">
    <value>Asteroid</value>
  </data>
  <data name="WorkshopTag_Dev" xml:space="preserve">
    <value>Development</value>
  </data>
  <data name="WorkshopTag_Exploration" xml:space="preserve">
    <value>Exploration</value>
  </data>
  <data name="WorkshopTag_Ship" xml:space="preserve">
    <value>Ship</value>
  </data>
  <data name="WorkshopTag_Rover" xml:space="preserve">
    <value>Rover</value>
  </data>
  <data name="WorkshopTag_Base" xml:space="preserve">
    <value>Base</value>
  </data>
  <data name="WorkshopTag_Story" xml:space="preserve">
    <value>Story</value>
  </data>
  <data name="WorkshopTag_PvP" xml:space="preserve">
    <value>PvP</value>
  </data>
  <data name="WorkshopTag_Survival" xml:space="preserve">
    <value>Survival</value>
  </data>
  <data name="WorkshopTag_Hud" xml:space="preserve">
    <value>Hud</value>
  </data>
  <data name="WorkshopTag_Planet" xml:space="preserve">
    <value>Planet</value>
  </data>
  <data name="WorkshopTag_Production" xml:space="preserve">
    <value>Production</value>
  </data>
  <data name="WorkshopTag_RespawnShip" xml:space="preserve">
    <value>Respawn Ship</value>
  </data>
  <data name="WorldSettings" xml:space="preserve">
    <value>World Settings</value>
  </data>
  <data name="WorldSettings_Advanced" xml:space="preserve">
    <value>Advanced</value>
  </data>
  <data name="WorldSettings_ArcadeSound" xml:space="preserve">
    <value>Arcade</value>
  </data>
  <data name="WorldSettings_AssemblerEfficiency" xml:space="preserve">
    <value>Assembler efficiency</value>
  </data>
  <data name="WorldSettings_AsteroidAmountExtreme" xml:space="preserve">
    <value>Extreme: 16 large asteroids</value>
  </data>
  <data name="WorldSettings_AsteroidAmountLarge" xml:space="preserve">
    <value>Large: 7 large asteroids</value>
  </data>
  <data name="WorldSettings_AsteroidAmountNone" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="WorldSettings_AsteroidAmountNormal" xml:space="preserve">
    <value>Normal: 4 large asteroids</value>
  </data>
  <data name="WorldSettings_AsteroidAmountProceduralHigh" xml:space="preserve">
    <value>High density</value>
  </data>
  <data name="WorldSettings_AsteroidAmountProceduralLow" xml:space="preserve">
    <value>Low density</value>
  </data>
  <data name="WorldSettings_AsteroidAmountProceduralNone" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="WorldSettings_AsteroidAmountProceduralNormal" xml:space="preserve">
    <value>Normal density</value>
  </data>
  <data name="WorldSettings_AsteroidAmountProceduralLowest" xml:space="preserve">
    <value>Lowest density</value>
  </data>
  <data name="WorldSettings_AutoHealing" xml:space="preserve">
    <value>Auto-healing</value>
  </data>
  <data name="WorldSettings_Battle" xml:space="preserve">
    <value>Battle</value>
  </data>
  <data name="WorldSettings_ClientCanSave" xml:space="preserve">
    <value>Clients can save</value>
  </data>
  <data name="WorldSettings_Description" xml:space="preserve">
    <value>Description</value>
  </data>
  <data name="WorldSettings_DestructibleBlocks" xml:space="preserve">
    <value>Destructible blocks</value>
  </data>
  <data name="WorldSettings_Enable3rdPersonCamera" xml:space="preserve">
    <value>Enable 3rd person view</value>
  </data>
  <data name="WorldSettings_EnableAdaptiveSimulationQuality" xml:space="preserve">
    <value>Adaptive simulation quality</value>
  </data>
  <data name="WorldSettings_EnableCargoShips" xml:space="preserve">
    <value>Cargo ships</value>
  </data>
  <data name="WorldSettings_EnableContainerDrops" xml:space="preserve">
    <value>Enable unknown signals</value>
  </data>
  <data name="WorldSettings_EnableConvertToStation" xml:space="preserve">
    <value>Enable convert to station</value>
  </data>
  <data name="WorldSettings_EnableCopyPaste" xml:space="preserve">
    <value>Enable copy/paste</value>
  </data>
  <data name="WorldSettings_EnableDrones" xml:space="preserve">
    <value>Enable drones</value>
  </data>
  <data name="WorldSettings_EnableFlora" xml:space="preserve">
    <value>Enable Flora</value>
  </data>
  <data name="WorldSettings_EnableIngameScripts" xml:space="preserve">
    <value>In-game scripts</value>
  </data>
  <data name="WorldSettings_EnableJetpack" xml:space="preserve">
    <value>Enable jetpack</value>
  </data>
  <data name="WorldSettings_EnablePlanets" xml:space="preserve">
    <value>Enable planets</value>
  </data>
  <data name="WorldSettings_EnableRealisticDampeners" xml:space="preserve">
    <value>Enable realistic dampeners</value>
  </data>
  <data name="WorldSettings_EnableRemoteBlockRemoval" xml:space="preserve">
    <value>Remote block removal</value>
  </data>
  <data name="WorldSettings_EnableRespawnShips" xml:space="preserve">
    <value>Enable respawn ships</value>
  </data>
  <data name="WorldSettings_EnableSpectator" xml:space="preserve">
    <value>Enable spectator</value>
  </data>
  <data name="WorldSettings_EnableSpiders" xml:space="preserve">
    <value>Enable spiders</value>
  </data>
  <data name="WorldSettings_EnableSubGridDamage" xml:space="preserve">
    <value>Enable sub-grid damage</value>
  </data>
  <data name="WorldSettings_EnableSunRotation" xml:space="preserve">
    <value>Enable sun rotation</value>
  </data>
  <data name="WorldSettings_EnableToolShake" xml:space="preserve">
    <value>Enable tools shake</value>
  </data>
  <data name="WorldSettings_EnableTurretFriendlyDamage" xml:space="preserve">
    <value>Enable friendly rocket damage</value>
  </data>
  <data name="WorldSettings_EnableVoxelDestruction" xml:space="preserve">
    <value>Enable voxel destruction</value>
  </data>
  <data name="WorldSettings_EnableVoxelHand" xml:space="preserve">
    <value>Enable voxel hand</value>
  </data>
  <data name="WorldSettings_EnableWeapons" xml:space="preserve">
    <value>Weapons enabled</value>
  </data>
  <data name="WorldSettings_EnableSpaceSuitRespawn" xml:space="preserve">
    <value>Enable Space Suit Respawn</value>
  </data>
  <data name="WorldSettings_EnableWolfs" xml:space="preserve">
    <value>Enable wolves</value>
  </data>
  <data name="WorldSettings_Encounters" xml:space="preserve">
    <value>Random encounters</value>
  </data>
  <data name="WorldSettings_EnvironmentHostility" xml:space="preserve">
    <value>Environment hostility</value>
  </data>
  <data name="WorldSettings_EnvironmentHostilityCataclysm" xml:space="preserve">
    <value>Cataclysm</value>
  </data>
  <data name="WorldSettings_EnvironmentHostilityCataclysmUnreal" xml:space="preserve">
    <value>Armageddon (unrealistic)</value>
  </data>
  <data name="WorldSettings_EnvironmentHostilityNormal" xml:space="preserve">
    <value>Normal</value>
  </data>
  <data name="WorldSettings_EnvironmentHostilitySafe" xml:space="preserve">
    <value>Safe</value>
  </data>
  <data name="WorldSettings_FloraDensity" xml:space="preserve">
    <value>Flora Density</value>
  </data>
  <data name="WorldSettings_FloraDensity_Extreme" xml:space="preserve">
    <value>Extreme</value>
  </data>
  <data name="WorldSettings_FloraDensity_High" xml:space="preserve">
    <value>High</value>
  </data>
  <data name="WorldSettings_FloraDensity_Low" xml:space="preserve">
    <value>Low</value>
  </data>
  <data name="WorldSettings_FloraDensity_Medium" xml:space="preserve">
    <value>Medium</value>
  </data>
  <data name="WorldSettings_FloraDensity_None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="WorldSettings_FriendlyFire" xml:space="preserve">
    <value>Friendly fire</value>
  </data>
  <data name="WorldSettings_GameScenario" xml:space="preserve">
    <value>Scenario</value>
  </data>
  <data name="WorldSettings_GameStyle" xml:space="preserve">
    <value>Game style</value>
  </data>
  <data name="WorldSettings_GameSurvivalTimes1" xml:space="preserve">
    <value>Realistic</value>
  </data>
  <data name="WorldSettings_GameSurvivalTimes10" xml:space="preserve">
    <value>Realistic x10</value>
  </data>
  <data name="WorldSettings_GameSurvivalTimes3" xml:space="preserve">
    <value>Realistic x3</value>
  </data>
  <data name="WorldSettings_GrinderSpeed" xml:space="preserve">
    <value>Grinding speed</value>
  </data>
  <data name="WorldSettings_InventorySize" xml:space="preserve">
    <value>Inventory size</value>
  </data>
  <data name="WorldSettings_LimitWorldSize" xml:space="preserve">
    <value>Limit world size</value>
  </data>
  <data name="WorldSettings_MaxBlocksPerPlayer" xml:space="preserve">
    <value>Max blocks per player</value>
  </data>
  <data name="WorldSettings_MaxGridSize" xml:space="preserve">
    <value>Max ship size</value>
  </data>
  <data name="WorldSettings_MoonSizeMax" xml:space="preserve">
    <value>Maximum size of moons</value>
  </data>
  <data name="WorldSettings_MoonSizeMin" xml:space="preserve">
    <value>Minimum size of moons</value>
  </data>
  <data name="WorldSettings_Password" xml:space="preserve">
    <value>Password</value>
  </data>
  <data name="WorldSettings_PermanentDeath" xml:space="preserve">
    <value>Permanent death</value>
  </data>
  <data name="WorldSettings_PlanetSizeMax" xml:space="preserve">
    <value>Maximum size of planets</value>
  </data>
  <data name="WorldSettings_PlanetSizeMin" xml:space="preserve">
    <value>Minimum size of planets</value>
  </data>
  <data name="WorldSettings_Realistic" xml:space="preserve">
    <value>Realistic</value>
  </data>
  <data name="WorldSettings_RealisticSound" xml:space="preserve">
    <value>Realistic</value>
  </data>
  <data name="WorldSettings_Realistic_half" xml:space="preserve">
    <value>x0.5</value>
  </data>
  <data name="WorldSettings_Realistic_x10" xml:space="preserve">
    <value>x10</value>
  </data>
  <data name="WorldSettings_Realistic_x2" xml:space="preserve">
    <value>x2</value>
  </data>
  <data name="WorldSettings_Realistic_x3" xml:space="preserve">
    <value>x3</value>
  </data>
  <data name="WorldSettings_Realistic_x5" xml:space="preserve">
    <value>x5</value>
  </data>
  <data name="WorldSettings_RefinerySpeed" xml:space="preserve">
    <value>Refinery speed</value>
  </data>
  <data name="WorldSettings_RemoveTrash" xml:space="preserve">
    <value>Trash auto-removal</value>
  </data>
  <data name="WorldSettings_ResetOwnership" xml:space="preserve">
    <value>Reset ownership</value>
  </data>
  <data name="WorldSettings_RespawnShipCooldown" xml:space="preserve">
    <value>Respawn ship cooldown</value>
  </data>
  <data name="WorldSettings_RespawnShipDelete" xml:space="preserve">
    <value>Delete respawn ship</value>
  </data>
  <data name="WorldSettings_RespawnShip_CooldownsDisabled" xml:space="preserve">
    <value>Cooldowns disabled</value>
  </data>
  <data name="WorldSettings_RespawnShip_Default" xml:space="preserve">
    <value>Default cooldowns</value>
  </data>
  <data name="WorldSettings_RespawnShip_x01" xml:space="preserve">
    <value>Default / 10</value>
  </data>
  <data name="WorldSettings_RespawnShip_x02" xml:space="preserve">
    <value>Default / 5</value>
  </data>
  <data name="WorldSettings_RespawnShip_x05" xml:space="preserve">
    <value>Default / 2</value>
  </data>
  <data name="WorldSettings_RespawnShip_x10" xml:space="preserve">
    <value>Default x 10</value>
  </data>
  <data name="WorldSettings_RespawnShip_x100" xml:space="preserve">
    <value>Default x 100</value>
  </data>
  <data name="WorldSettings_RespawnShip_x2" xml:space="preserve">
    <value>Default x 2</value>
  </data>
  <data name="WorldSettings_RespawnShip_x20" xml:space="preserve">
    <value>Default x 20</value>
  </data>
  <data name="WorldSettings_RespawnShip_x5" xml:space="preserve">
    <value>Default x 5</value>
  </data>
  <data name="WorldSettings_RespawnShip_x50" xml:space="preserve">
    <value>Default x 50</value>
  </data>
  <data name="WorldSettings_Scenario" xml:space="preserve">
    <value>Scenario</value>
  </data>
  <data name="WorldSettings_ScenarioEditMode" xml:space="preserve">
    <value>Scenario edit mode</value>
  </data>
  <data name="WorldSettings_ShowPlayerNamesOnHud" xml:space="preserve">
    <value>Show player names</value>
  </data>
  <data name="WorldSettings_SoundInSpace" xml:space="preserve">
    <value>Sound in space</value>
  </data>
  <data name="WorldSettings_SoundMode" xml:space="preserve">
    <value>Sound mode</value>
  </data>
  <data name="WorldSettings_SpawnWithTools" xml:space="preserve">
    <value>Spawn with tools</value>
  </data>
  <data name="WorldSettings_StartInRespawnScreen" xml:space="preserve">
    <value>Start in respawn screen</value>
  </data>
  <data name="WorldSettings_StationVoxelSupport" xml:space="preserve">
    <value>Unsupported stations</value>
  </data>
  <data name="WorldSettings_ThrusterDamage" xml:space="preserve">
    <value>Thruster damage</value>
  </data>
  <data name="WorldSettings_TotalPCU" xml:space="preserve">
    <value>Total PCU</value>
  </data>
  <data name="WorldSettings_OptimalSpawnDistance" xml:space="preserve">
    <value>Optimal spawn distance</value>
  </data>
  <data name="WorldSettings_ViewDistance" xml:space="preserve">
    <value>View distance</value>
  </data>
  <data name="WorldSettings_ViewDistance_10_Km" xml:space="preserve">
    <value>10 km</value>
  </data>
  <data name="WorldSettings_ViewDistance_15_Km" xml:space="preserve">
    <value>15 km</value>
  </data>
  <data name="WorldSettings_ViewDistance_20_Km" xml:space="preserve">
    <value>20 km</value>
  </data>
  <data name="WorldSettings_ViewDistance_30_Km" xml:space="preserve">
    <value>30 km - small performance hit</value>
  </data>
  <data name="WorldSettings_ViewDistance_40_Km" xml:space="preserve">
    <value>40 km - performance hit</value>
  </data>
  <data name="WorldSettings_ViewDistance_50_Km" xml:space="preserve">
    <value>50 km - big performance hit</value>
  </data>
  <data name="WorldSettings_ViewDistance_5_Km" xml:space="preserve">
    <value>5 km - low end machines</value>
  </data>
  <data name="WorldSettings_ViewDistance_7_Km" xml:space="preserve">
    <value>7 km - performance friendly</value>
  </data>
  <data name="WorldSettings_ViewDistance_Custom" xml:space="preserve">
    <value>Custom</value>
  </data>
  <data name="WorldSettings_WarningChangingWorldSize" xml:space="preserve">
    <value>The selected world size is more limited than the original one. Reducing world size in an existing save could delete some ships beyond the new limit. Are you sure you want to continue?</value>
  </data>
  <data name="WorldSettings_Error_NameExists" xml:space="preserve">
    <value>The name you have entered already exists. Please change the name to something else.</value>
  </data>
  <data name="WorldSettings_Error_SavingFailed" xml:space="preserve">
    <value>There was an error trying to rename your world. Please check your saves folder for any problems.</value>
  </data>
  <data name="WorldSettings_WelderSpeed" xml:space="preserve">
    <value>Welding speed</value>
  </data>
  <data name="WorldSettings_WorldGenerator" xml:space="preserve">
    <value>World generator</value>
  </data>
  <data name="WorldSettings_WorldSize100Km" xml:space="preserve">
    <value>100 km</value>
  </data>
  <data name="WorldSettings_WorldSize10Km" xml:space="preserve">
    <value>10 km</value>
  </data>
  <data name="WorldSettings_WorldSize20Km" xml:space="preserve">
    <value>20 km</value>
  </data>
  <data name="WorldSettings_WorldSize50Km" xml:space="preserve">
    <value>50 km</value>
  </data>
  <data name="WorldSettings_WorldSizeCustom" xml:space="preserve">
    <value>Custom</value>
  </data>
  <data name="WorldSettings_WorldSizeUnlimited" xml:space="preserve">
    <value>Unlimited</value>
  </data>
  <data name="World_Settings_EnableOxygen" xml:space="preserve">
    <value>Enable oxygen</value>
  </data>
  <data name="World_Settings_EnableOxygenPressurization" xml:space="preserve">
    <value>Enable airtightness</value>
  </data>
  <data name="WwwLinkNotAllowed" xml:space="preserve">
    <value>This link is not allowed and will not open.
Allowed sites: {0}community, youtube, KSH forum.</value>
  </data>
  <data name="WwwLinkNotAllowed_Steam" xml:space="preserve">
    <value>This link is not allowed and will not open.
Allowed sites: {0}community, youtube, KSH forum.</value>
  </data>
  <data name="IngameHelp_HUD_Detail1" xml:space="preserve">
    <value>Cycle through the various HUD states; they differ by amount of shown information.
You can also change the way signals show up on your HUD.</value>
  </data>
  <data name="IngameHelp_HUD_Detail2" xml:space="preserve">
    <value>Press {CONTROL:TOGGLE_HUD} to cycle through HUD states.</value>
  </data>
  <data name="IngameHelp_HUD_Detail2:Gamepad" xml:space="preserve">
    <value>Press {CONTROL:SYSTEM_RADIAL_MENU} navigate to the [Quick Actions] tab and select the [Toggle HUD] option to cycle through HUD states.</value>
  </data>
  <data name="IngameHelp_HUD_Detail3" xml:space="preserve">
    <value>Press {CONTROL:TOGGLE_SIGNALS} to cycle through signal states.</value>
  </data>
  <data name="IngameHelp_HUD_Detail3:Gamepad" xml:space="preserve">
    <value>Press {CONTROL:SYSTEM_RADIAL_MENU} navigate to the [View] tab and select the [Signals] option to cycle through signal states.</value>
  </data>
  <data name="IngameHelp_HUD_Title" xml:space="preserve">
    <value>Good.bot: HUD</value>
  </data>
  <data name="IngameHelp_Jetpack2_Detail1" xml:space="preserve">
    <value>Turning off dampeners while flying allows you to move without slowing down when you let go of the input. This can be useful to move steady at low or high speeds without using much fuel.</value>
  </data>
  <data name="IngameHelp_Jetpack2_Detail2" xml:space="preserve">
    <value>Toggle dampeners with {CONTROL:DAMPING} while flying.</value>
  </data>
  <data name="IngameHelp_Jetpack2_Detail2:Gamepad" xml:space="preserve">
    <value>Swith between dampener modes with {CONTROL:DAMPING} while flying.</value>
  </data>
  <data name="IngameHelp_Building_Title" xml:space="preserve">
    <value>Good.bot: Building</value>
  </data>
  <data name="IngameHelp_Building_Detail1" xml:space="preserve">
    <value>You can build blocks anywhere in the world or add them to existing grids. The toolbar config screen will show you all available blocks that you can build.</value>
  </data>
  <data name="IngameHelp_Building_Detail2" xml:space="preserve">
    <value>Press {CONTROL:BUILD_SCREEN} to open toolbar config screen.</value>
  </data>
  <data name="IngameHelp_Building_Detail3" xml:space="preserve">
    <value>Drag a block to your toolbar.</value>
  </data>
  <data name="IngameHelp_Building_Detail4" xml:space="preserve">
    <value>Select a block or tool by pressing 1 - 9</value>
  </data>
  <data name="IngameHelp_Building_Detail2_Gamepad" xml:space="preserve">
    <value>Press {CONTROL:TOOLBAR_RADIAL_MENU} to open the [Building Radial Menu].</value>
  </data>
  <data name="IngameHelp_Building_Detail3_Gamepad" xml:space="preserve">
    <value>Press {CONTROL:GUI:SWITCH_GUI_LEFT} or {CONTROL:GUI:SWITCH_GUI_RIGHT} to change tabs.</value>
  </data>
  <data name="IngameHelp_Building_Detail4_Gamepad" xml:space="preserve">
    <value>Highlight a block with {GAMEPAD:AXIS_MOTION} and press {CONTROL:GUI:SHIFT_RIGHT} to select a block.</value>
  </data>
  <data name="IngameHelp_Building2_Detail1" xml:space="preserve">
    <value>Most blocks come in two sizes and can be rotated in any direction.</value>
  </data>
  <data name="IngameHelp_Building2_Detail2" xml:space="preserve">
    <value>Select the same block twice on your toolbar to pick a size.</value>
  </data>
  <data name="IngameHelp_Building2_Detail3" xml:space="preserve">
    <value>Use {CONTROL:CUBE_ROTATE_ROLL_POSITIVE}, {CONTROL:CUBE_ROTATE_VERTICAL_NEGATIVE}, {CONTROL:CUBE_ROTATE_HORISONTAL_POSITIVE}, {CONTROL:CUBE_ROTATE_HORISONTAL_NEGATIVE}, {CONTROL:CUBE_ROTATE_ROLL_NEGATIVE} and {CONTROL:CUBE_ROTATE_VERTICAL_POSITIVE} to rotate blocks.</value>
  </data>
  <data name="IngameHelp_Building2_Detail2_Gamepad" xml:space="preserve">
    <value>Press {CONTROL:BUILD:CUBE_BUILDER_CUBESIZE_MODE} to change block size.</value>
  </data>
  <data name="IngameHelp_Building2_Detail3_Gamepad" xml:space="preserve">
    <value>Use {CONTROL:BUILD:CHANGE_ROTATION_AXIS} to change rotation axis.</value>
  </data>
  <data name="IngameHelp_Building2_Detail4_Gamepad" xml:space="preserve">
    <value>Use {CONTROL:BUILD:ROTATE_AXIS_LEFT} and {CONTROL:BUILD:ROTATE_AXIS_RIGHT} to rotate around the axis.</value>
  </data>
  <data name="IngameHelp_Building3_Detail1" xml:space="preserve">
    <value>In survival mode you need the first component of a block to place it. You can produce components in assembler or salvage them from other blocks with a grinder.</value>
  </data>
  <data name="IngameHelp_Building3_Detail2" xml:space="preserve">
    <value>Place a block with the {CONTROL:BUILD:PRIMARY_TOOL_ACTION}.</value>
  </data>
  <data name="IngameHelp_Ownership_Detail1" xml:space="preserve">
    <value>Blocks owned by other players cannot be accessed if they are not shared with others. You can hack blocks by replacing their computer parts  with a grinder and welder to gain access.</value>
  </data>
  <data name="IngameHelp_Ownership_Detail2" xml:space="preserve">
    <value>Hack a block.</value>
  </data>
  <data name="IngameHelp_Ownership_Title" xml:space="preserve">
    <value>Good.bot: Ownership</value>
  </data>
  <data name="IngameHelp_CameraTip_Detail1" xml:space="preserve">
    <value>You will be building in no time!</value>
  </data>
  <data name="IngameHelp_CameraTip_Detail2" xml:space="preserve">
    <value>*Tip:* Third person camera will switch to first person if there are objects in your way.</value>
  </data>
  <data name="IngameHelp_Camera_Title" xml:space="preserve">
    <value>Good.bot: Camera</value>
  </data>
  <data name="IngameHelp_Power_Detail1" xml:space="preserve">
    <value>Blocks or entire grids can be turned off to save power and fuel. 
When you are in a cockpit, Press {CONTROL:TOGGLE_REACTORS} to turn off and on the power production blocks.</value>
  </data>
  <data name="IngameHelp_Power_Detail2" xml:space="preserve">
    <value>Press {CONTROL:TOGGLE_REACTORS} while in a cockpit.</value>
  </data>
  <data name="IngameHelp_Power_Title" xml:space="preserve">
    <value>Good.bot: Power</value>
  </data>
  <data name="IngameHelp_BuildingTip_Detail1" xml:space="preserve">
    <value>You are a natural!</value>
  </data>
  <data name="IngameHelp_BuildingTip_Detail2" xml:space="preserve">
    <value>*Tip:* Blocks with a + symbol have variations available that you can scroll through.</value>
  </data>
  <data name="IngameHelp_HUDTip_Detail1" xml:space="preserve">
    <value>I could not have done it better myself!</value>
  </data>
  <data name="IngameHelp_HUDTip_Detail2" xml:space="preserve">
    <value>*Tip:* HUD signals can be individually disabled in your terminal control panel.</value>
  </data>
  <data name="IngameHelp_HUDTip_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* HUD signals can be individually disabled in your terminal control panel.
In creative mode you can also cycle through signals using {CONTROL:TOGGLE_SIGNALS}.</value>
  </data>
  <data name="IngameHelp_IntroTip_Detail1" xml:space="preserve">
    <value>Well done!</value>
  </data>
  <data name="IngameHelp_IntroTip_Detail2" xml:space="preserve">
    <value>*Tip:* You can ask me anything in the chat {CONTROL:CHAT_SCREEN} using ? &lt;question&gt; (english only). In case of any troubles contact us at support@keenswh.com</value>
  </data>
  <data name="IngameHelp_IntroTip_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* You can ask me anything in the chat using ? &lt;question&gt; (english only). To open the chat window press {CONTROL:SYSTEM_RADIAL_MENU}, navigate to the [Menu] tab and select the [Chat] option.
In case of any troubles contact us at support@keenswh.com</value>
  </data>
  <data name="IngameHelp_JetpackTip_Detail1" xml:space="preserve">
    <value>That is my definition of flying!</value>
  </data>
  <data name="IngameHelp_JetpackTip_Detail2" xml:space="preserve">
    <value>*Tip:* Use relative dampening with [Ctrl+]{0} to keep velocity of the ship under cursor.</value>
  </data>
  <data name="IngameHelp_JetpackTip_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* Use the relative dampening mode (auto) to match the velocity of the ship under the cursor.</value>
  </data>
  <data name="IngameHelp_InventoryTip_Detail1" xml:space="preserve">
    <value>Organization equals efficiency!</value>
  </data>
  <data name="IngameHelp_InventoryTip_Detail2" xml:space="preserve">
    <value>*Tip:* You can drag items out of your inventory to drop them again.</value>
  </data>
  <data name="IngameHelp_Inventory_Detail1" xml:space="preserve">
    <value>Highlighted objects can be picked up if there is room in your inventory.</value>
  </data>
  <data name="IngameHelp_Inventory_Detail2" xml:space="preserve">
    <value>Press {CONTROL:USE} to pick up an item.</value>
  </data>
  <data name="IngameHelp_Inventory_Detail3" xml:space="preserve">
    <value>Press {CONTROL:INVENTORY} to open inventory.</value>
  </data>
  <data name="IngameHelp_Inventory_Title" xml:space="preserve">
    <value>Good.bot: Inventory</value>
  </data>
  <data name="IngameHelp_EnergyTip_Detail1" xml:space="preserve">
    <value>Energized!</value>
  </data>
  <data name="IngameHelp_EnergyTip_Detail2" xml:space="preserve">
    <value>*Tip:*  Energy drains faster when it is hot or cold.</value>
  </data>
  <data name="IngameHelp_Energy_Detail1" xml:space="preserve">
    <value>Your energy is getting low. Interact with a powered medical bay or survival kit to recharge your energy or use any kind of cockpit. Your tools need energy to function.</value>
  </data>
  <data name="IngameHelp_Energy_Detail2" xml:space="preserve">
    <value>Refill your energy.</value>
  </data>
  <data name="IngameHelp_Energy_Title" xml:space="preserve">
    <value>Good.bot: Energy</value>
  </data>
  <data name="IngameHelp_HealthTip_Detail1" xml:space="preserve">
    <value>Just what the doctor ordered!</value>
  </data>
  <data name="IngameHelp_HealthTip_Detail2" xml:space="preserve">
    <value>*Tip:* You will also slowly heal in oxygenated environments.</value>
  </data>
  <data name="IngameHelp_Health_Detail1" xml:space="preserve">
    <value>You're hurt. You can heal by interacting with the console of a powered medical bay or survival kit.</value>
  </data>
  <data name="IngameHelp_Health_Detail2" xml:space="preserve">
    <value>Replenish your health.</value>
  </data>
  <data name="IngameHelp_Health_Title" xml:space="preserve">
    <value>Good.bot: Health</value>
  </data>
  <data name="IngameHelp_HydrogenTip_Detail1" xml:space="preserve">
    <value>I think you are smarter than my maker!</value>
  </data>
  <data name="IngameHelp_HydrogenTip_Detail2" xml:space="preserve">
    <value>*Tip:* You can conserve hydrogen when in space by flying with dampeners off.</value>
  </data>
  <data name="IngameHelp_Hydrogen_Detail1" xml:space="preserve">
    <value>Your hydrogen is getting low. Hydrogen is produced from ice in a O2/H2 generator. You can refill bottles at the generator or resupply directly by interacting with a medical bay or survival kit if it's connected with the O2/H2 generator.</value>
  </data>
  <data name="IngameHelp_Hydrogen_Detail2" xml:space="preserve">
    <value>Refill your hydrogen.</value>
  </data>
  <data name="IngameHelp_Hydrogen_Title" xml:space="preserve">
    <value>Good.bot: Hydrogen</value>
  </data>
  <data name="IngameHelp_MagneticBootsTip_Detail1" xml:space="preserve">
    <value>The last Engineer took much longer to figure this out!</value>
  </data>
  <data name="IngameHelp_MagneticBootsTip_Detail2" xml:space="preserve">
    <value>*Tip:* Do not jump!</value>
  </data>
  <data name="IngameHelp_MagneticBoots_Detail1" xml:space="preserve">
    <value>In zero gravity you can use your magnetic boots to walk on any surface. Position yourself with your feet down and turn off your jetpack to automatically lock your magnetic boots.</value>
  </data>
  <data name="IngameHelp_MagneticBoots_Detail2" xml:space="preserve">
    <value>Use your magnetic boots in zero gravity.</value>
  </data>
  <data name="IngameHelp_MagneticBoots_Title" xml:space="preserve">
    <value>Good.bot: Magnetic Boots</value>
  </data>
  <data name="IngameHelp_OxygenTip_Detail1" xml:space="preserve">
    <value>Breathing is preferable to not breathing!</value>
  </data>
  <data name="IngameHelp_OxygenTip_Detail2" xml:space="preserve">
    <value>*Tip:* Walking consumes less oxygen than running or sprinting</value>
  </data>
  <data name="IngameHelp_Oxygen_Detail1" xml:space="preserve">
    <value>Your oxygen is getting low. Oxygen is produced from ice in a O2/H2 generator. You can refill bottles at the generator or resupply directly by interacting with a medical bay or survival kit if it's connected with the O2/H2 generator.</value>
  </data>
  <data name="IngameHelp_Oxygen_Detail2" xml:space="preserve">
    <value>Refill your oxygen.</value>
  </data>
  <data name="IngameHelp_Oxygen_Title" xml:space="preserve">
    <value>Good.bot: Oxygen</value>
  </data>
  <data name="IngameHelp_FlyingAShipTip_Detail1" xml:space="preserve">
    <value>Pilots take no special joy in walking. Pilots like flying. - Neil Armstrong</value>
  </data>
  <data name="IngameHelp_FlyingAShipTip_Detail2" xml:space="preserve">
    <value>*Tip:* You need thrusters in all six directions. More thrusters means faster acceleration!</value>
  </data>
  <data name="IngameHelp_FlyingAShip_Detail1" xml:space="preserve">
    <value>A ship requires thrusters for movement, gyroscopes to orientate,  power and a cockpit. 
The controls for a ship are the same as the jetpack.</value>
  </data>
  <data name="IngameHelp_FlyingAShip_Detail2" xml:space="preserve">
    <value>Press {CONTROL:TOGGLE_REACTORS} to toggle power on or off.</value>
  </data>
  <data name="IngameHelp_FlyingAShip_Detail3" xml:space="preserve">
    <value>Use {CONTROL:JUMP} and {CONTROL:CROUCH} to go up and down.</value>
  </data>
  <data name="IngameHelp_FlyingAShip_Detail4" xml:space="preserve">
    <value>Use {CONTROL:ROLL_LEFT} and {CONTROL:ROLL_RIGHT} to roll.</value>
  </data>
  <data name="IngameHelp_FlyingAShip_Title" xml:space="preserve">
    <value>Good.bot: Flying a Ship</value>
  </data>
  <data name="IngameHelp_Grinder_Detail1" xml:space="preserve">
    <value>A  grinder is used to deconstruct and salvage blocks by removing their components into your inventory.</value>
  </data>
  <data name="IngameHelp_Grinder_Detail2" xml:space="preserve">
    <value>Hold {CONTROL:TOOLS:PRIMARY_TOOL_ACTION} to use grinder on any block.</value>
  </data>
  <data name="IngameHelp_Grinder_Title" xml:space="preserve">
    <value>Good.bot: Grinder</value>
  </data>
  <data name="IngameHelp_GrinderTip_Detail1" xml:space="preserve">
    <value>You made quick work of that!</value>
  </data>
  <data name="IngameHelp_GrinderTip_Detail2" xml:space="preserve">
    <value>*Tip:* Grinder's can be used to remove trees.</value>
  </data>
  <data name="IngameHelp_HandDrill_Detail1" xml:space="preserve">
    <value>A hand drill is used to break down rock, collect minerals or to dig tunnels. Ores can be found in asteroids and dark spots on planets. All drills are equipped with a short-range detector.</value>
  </data>
  <data name="IngameHelp_HandDrill_Detail2" xml:space="preserve">
    <value>Hold {CONTROL:TOOLS:PRIMARY_TOOL_ACTION} to break down stone.</value>
  </data>
  <data name="IngameHelp_HandDrill_Detail3" xml:space="preserve">
    <value>Press {CONTROL:USE} to pick up rocks.</value>
  </data>
  <data name="IngameHelp_HandDrill_Detail4" xml:space="preserve">
    <value>Hold {CONTROL:TOOLS:SECONDARY_TOOL_ACTION} to quickly dig tunnels.</value>
  </data>
  <data name="IngameHelp_HandDrill_Title" xml:space="preserve">
    <value>Good.bot: Hand Drill</value>
  </data>
  <data name="IngameHelp_Rifle_Detail1" xml:space="preserve">
    <value>A basic weapon to protect yourself; requires MR-20 Rifle Magazine ammunition.</value>
  </data>
  <data name="IngameHelp_Rifle_Detail2" xml:space="preserve">
    <value>*Tip:* There are more specialized rifles available. Don’t forget that you can review useful information anytime in the help screen by pressing {CONTROL:HELP_SCREEN}.</value>
  </data>
  <data name="IngameHelp_Rifle_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* There are more specialized rifles available. Don’t forget that you can review useful information anytime in the help screen by accessing the [Help] option in the [Menu] tab of the [System Radial Menu] {CONTROL:SYSTEM_RADIAL_MENU}.</value>
  </data>
  <data name="IngameHelp_Rifle_Title" xml:space="preserve">
    <value>Good.bot: MR-20 Rifle</value>
  </data>
  <data name="IngameHelp_WelderTip_Detail1" xml:space="preserve">
    <value>Impressive… Most impressive!</value>
  </data>
  <data name="IngameHelp_WelderTip_Detail2" xml:space="preserve">
    <value>*Tip:* Use the {CONTROL:TOOLS:PRIMARY_TOOL_ACTION} to store components from your inventory into a block under construction.</value>
  </data>
  <data name="IngameHelp_Welder_Detail1" xml:space="preserve">
    <value>A  welder is used to construct and repair blocks by adding the required components from your inventory.</value>
  </data>
  <data name="IngameHelp_Welder_Detail2" xml:space="preserve">
    <value>Hold {CONTROL:TOOLS:PRIMARY_TOOL_ACTION} to use the welder on any block.</value>
  </data>
  <data name="IngameHelp_Welder_Title" xml:space="preserve">
    <value>Good.bot: Welder</value>
  </data>
  <data name="IngameHelp_RefiningOre_Detail1" xml:space="preserve">
    <value>Ore and scrap metal can be refined into ingots in a powered Refinery. 
Ingots can be used to produce components, tools and weapons.
Refineries will automatically pull resources and refine them.</value>
  </data>
  <data name="IngameHelp_RefiningOre_Detail2" xml:space="preserve">
    <value>Use a survival kit or Refinery to process ore and obtain ingots.</value>
  </data>
  <data name="IngameHelp_RefiningOre_Title" xml:space="preserve">
    <value>Good.bot: Refining Ore</value>
  </data>
  <data name="IngameHelp_ComponentsTip_Detail1" xml:space="preserve">
    <value>Your skills are quickly becoming superior to mine!</value>
  </data>
  <data name="IngameHelp_ComponentsTip_Detail2" xml:space="preserve">
    <value>*Tip:* Blocks with a + symbol have variations available that you can scroll through.</value>
  </data>
  <data name="IngameHelp_Components_Detail1" xml:space="preserve">
    <value>Components are used to build and repair blocks. You can use a welder on any block to add the required component. You can select tools and blocks on your toolbar.</value>
  </data>
  <data name="IngameHelp_Components_Detail2" xml:space="preserve">
    <value>Repair a block</value>
  </data>
  <data name="IngameHelp_Components_Title" xml:space="preserve">
    <value>Good.bot: Components</value>
  </data>
  <data name="IngameHelp_FlashlightTip_Detail1" xml:space="preserve">
    <value>A little light goes a long way!</value>
  </data>
  <data name="IngameHelp_FlashlightTip_Detail2" xml:space="preserve">
    <value>*Tip:* Remember, your flashlight consumes power from your suit.</value>
  </data>
  <data name="IngameHelp_Flashlight_Detail1" xml:space="preserve">
    <value>Use your flashlight when entering dark areas.</value>
  </data>
  <data name="IngameHelp_Flashlight_Detail2" xml:space="preserve">
    <value>Press {CONTROL:HEADLIGHTS} to toggle your flashlight off and on.</value>
  </data>
  <data name="IngameHelp_Flashlight_Title" xml:space="preserve">
    <value>Good.bot: Flashlight</value>
  </data>
  <data name="IngameHelp_Ingots_Detail1" xml:space="preserve">
    <value>Ingots can be used by a survival kit or assembler to produce components, tools and weapons. You can select what component to produce in the assembler's or survival kit's menu.</value>
  </data>
  <data name="IngameHelp_Ingots_Detail2" xml:space="preserve">
    <value>Put iron ingot into Assembler inventory.</value>
  </data>
  <data name="IngameHelp_Ingots_Detail3" xml:space="preserve">
    <value>Use a survival kit or Assembler to produce and obtain steel plates.</value>
  </data>
  <data name="IngameHelp_Ingots_Title" xml:space="preserve">
    <value>Good.bot: Ingots</value>
  </data>
  <data name="IngameHelp_InteractiveTip_Detail1" xml:space="preserve">
    <value>These skills will serve you well!</value>
  </data>
  <data name="IngameHelp_InteractiveTip_Detail2" xml:space="preserve">
    <value>*Tip:* Build control panels to easily access ship menus.</value>
  </data>
  <data name="IngameHelp_Interactive_Detail1" xml:space="preserve">
    <value>Many blocks like doors, button panels, consoles, medical rooms, inventories and cockpits support various different actions.</value>
  </data>
  <data name="IngameHelp_Interactive_Detail2" xml:space="preserve">
    <value>Press {CONTROL:USE} to activate a highlighted block.</value>
  </data>
  <data name="IngameHelp_Interactive_Detail3" xml:space="preserve">
    <value>Press {CONTROL:TERMINAL} to go to menu of highlighted block.</value>
  </data>
  <data name="IngameHelp_Interactive_Detail4" xml:space="preserve">
    <value>Press {CONTROL:INVENTORY} to open inventory of highlighted block.</value>
  </data>
  <data name="IngameHelp_Interactive_Title" xml:space="preserve">
    <value>Good.bot: Interactive objects</value>
  </data>
  <data name="IngameHelp_PowerTip_Detail1" xml:space="preserve">
    <value>Simple enough, is it not?!</value>
  </data>
  <data name="IngameHelp_PowerTip_Detail2" xml:space="preserve">
    <value>*Tip:* Turn off blocks that you do not need to save power.</value>
  </data>
  <data name="IngameHelp_PowerTip_Detail3" xml:space="preserve">
    <value>*Tip:* Use [Ctrl+]{CONTROL:TOGGLE_REACTORS} to also turn off all connected grids.</value>
  </data>
  <data name="IngameHelp_PowerTip_Detail3:Gamepad" xml:space="preserve">
    <value>*Tip:* Use {CONTROL:TOGGLE_REACTORS_ALL} to also turn off all connected grids.</value>
  </data>
  <data name="ScreenBlueprintsRew_Author" xml:space="preserve">
    <value>Author: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_Size" xml:space="preserve">
    <value>Size: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_Dlc" xml:space="preserve">
    <value>Required DLC: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_ButDelete" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="ScreenBlueprintsRew_ButEdit" xml:space="preserve">
    <value>Edit</value>
  </data>
  <data name="ScreenBlueprintsRew_ButInfo" xml:space="preserve">
    <value>Info</value>
  </data>
  <data name="ScreenBlueprintsRew_ButOpenInWorkshop" xml:space="preserve">
    <value>Open in Workshop</value>
  </data>
  <data name="ScreenBlueprintsRew_ButPublish" xml:space="preserve">
    <value>Publish</value>
  </data>
  <data name="ScreenBlueprintsRew_ButRename" xml:space="preserve">
    <value>Rename</value>
  </data>
  <data name="ScreenBlueprintsRew_ButReplace" xml:space="preserve">
    <value>Replace</value>
  </data>
  <data name="ScreenBlueprintsRew_ButScreenshot" xml:space="preserve">
    <value>Take Screenshot</value>
  </data>
  <data name="ScreenBlueprintsRew_ButToClipboard" xml:space="preserve">
    <value>Copy to clipboard</value>
  </data>
  <data name="ScreenBlueprintsRew_Caption" xml:space="preserve">
    <value>Blueprints</value>
  </data>
  <data name="ScreenBlueprintsRew_Delete" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="ScreenBlueprintsRew_DeleteMessage" xml:space="preserve">
    <value>Cannot rename blueprint because it is used by another process.</value>
  </data>
  <data name="ScreenBlueprintsRew_GridType" xml:space="preserve">
    <value>Type: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_Name" xml:space="preserve">
    <value>Name: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_NotAvailable" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="ScreenBlueprintsRew_NumOfBlocks" xml:space="preserve">
    <value>Number of Blocks: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_PCU" xml:space="preserve">
    <value>PCU: {0}</value>
  </data>
  <data name="ScreenBlueprintsRew_Replace" xml:space="preserve">
    <value>Replace</value>
  </data>
  <data name="ScreenBlueprintsRew_ReplaceMessage1" xml:space="preserve">
    <value>Blueprint/script with the name "</value>
  </data>
  <data name="ScreenBlueprintsRew_ReplaceMessage2" xml:space="preserve">
    <value>" already exists. Do you want to replace it?</value>
  </data>
  <data name="ScreenBlueprintsRew_Search" xml:space="preserve">
    <value>Search:</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButDelete" xml:space="preserve">
    <value>Delete blueprint (local/cloud BP only) or scripts (local script only)</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButEdit" xml:space="preserve">
    <value>Open tab for editing blueprint/script information</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButFolders" xml:space="preserve">
    <value>Open directory selection</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButGrouping_Aggregator" xml:space="preserve">
    <value>Toggle between "All", "Local", "Cloud", "{0}" and "{1}" blueprints/scripts</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButGrouping" xml:space="preserve">
    <value>Toggle between "All", "Local", "Cloud" and "{0}" blueprints/scripts</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButGrouping_NoLocal_Aggregator" xml:space="preserve">
    <value>Toggle between "All", "Cloud", "{0}" and "{1}" blueprints/scripts</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButGrouping_NoLocal" xml:space="preserve">
    <value>Toggle between "All", "Cloud" and "{0}" blueprints/scripts</value>
  </data>
  <data name="WorldSettings_Tooltip_ButGrouping" xml:space="preserve">
    <value>Toggle between "All", "{0}" and "{1}"</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButInfo" xml:space="preserve">
    <value>Open tab with blueprint/script informations</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButNewBlueprint" xml:space="preserve">
    <value>Create new blueprint from clipboard</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButOpenInWorkshop" xml:space="preserve">
    <value>Open already published blueprint/script in Workshop</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButOpenWorkshop" xml:space="preserve">
    <value>Browse and subscribe workshop items</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButPublish" xml:space="preserve">
    <value>Publish blueprint/script to Workshop</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButRefresh" xml:space="preserve">
    <value>Reload all blueprints/scripts and refresh the list</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButRename" xml:space="preserve">
    <value>Rename blueprint (local/cloud BP only) or script (local script only) </value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButReplace" xml:space="preserve">
    <value>Replace blueprint with clipboard (local or cloud BP) or script from editor (local scripts only)</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButScreenshot" xml:space="preserve">
    <value>Take screenshot for blueprint preview (local BP only)</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButSort" xml:space="preserve">
    <value>Toggle between sorts "None", "alphabetical", "Creation date" and "Update date"</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButToClipboard" xml:space="preserve">
    <value>Copy blueprint into clipboard</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButVisibility" xml:space="preserve">
    <value>Show/Hide thumbnails of blueprints/scripts</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_SendToPlayer" xml:space="preserve">
    <value>Send blueprint to other players (Workshop Blueprints only)</value>
  </data>
  <data name="ScreenBlueprintsRew_NoBlueprints" xml:space="preserve">
    <value>No content matches the selected filter.</value>
  </data>
  <data name="ScreenBlueprintsRew_NoWorkshopBlueprints" xml:space="preserve">
    <value>There are no subscribed Workshop blueprints. Open Workshop Browser to subscribe blueprints.</value>
  </data>
  <data name="ScreenBlueprintsRew_NoWorkshopScripts" xml:space="preserve">
    <value>There are no subscribed Workshop scripts. Open Workshop Browser to subscribe blueprints.</value>
  </data>
  <data name="ScreenFolders_ButOpen" xml:space="preserve">
    <value>Open</value>
  </data>
  <data name="ScreenFolders_Caption" xml:space="preserve">
    <value>Directory selection</value>
  </data>
  <data name="ScreenFolders_Tooltip_Open" xml:space="preserve">
    <value>Open current directory</value>
  </data>
  <data name="ScreenFolders_Tooltip_Refresh" xml:space="preserve">
    <value>Refresh folders and directories</value>
  </data>
  <data name="ScreenBlueprintsRew_ButToEditor" xml:space="preserve">
    <value>Copy to editor</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButNewScript" xml:space="preserve">
    <value>Create new script from editor</value>
  </data>
  <data name="ScreenBlueprintsRew_Tooltip_ButToEditor" xml:space="preserve">
    <value>Copy script to editor</value>
  </data>
  <data name="ScreenBlueprintsRew_ScreenBeingTaken" xml:space="preserve">
    <value>Screenshot is already being taken at this moment</value>
  </data>
  <data name="ScreenBlueprintsRew_ScreenBeingTaken_Caption" xml:space="preserve">
    <value>Screenshoting in progress</value>
  </data>
  <data name="ChatBotName" xml:space="preserve">
    <value>Good.bot</value>
  </data>
  <data name="ChatBotUnavailable" xml:space="preserve">
    <value>I am sorry, I'm not available right now. Please visit https://support.keenswh.com/ or try again later.</value>
  </data>
  <data name="ChatBot_Generic" xml:space="preserve">
    <value>Hello, Engineer! I am Good.bot. What can I help you with?</value>
  </data>
  <data name="ChatBot_HowAreYou" xml:space="preserve">
    <value>I am well, thank you!</value>
  </data>
  <data name="ChatBot_Rude" xml:space="preserve">
    <value>That was not very nice! In case of any issues, please contact us at https://support.keenswh.com/</value>
  </data>
  <data name="ChatBot_ThankYou" xml:space="preserve">
    <value>You're welcome!</value>
  </data>
  <data name="ChatBotMisunderstanding0" xml:space="preserve">
    <value>Apologies, I am unable to answer the question. I am still learning. For more help, please visit https://support.keenswh.com/</value>
  </data>
  <data name="Description_FAQ_Electricity" xml:space="preserve">
    <value>Electricity can be produced through reactors or solar panels and stored in batteries. It is transferred automatically through all connected blocks. Many blocks require electricity to function. </value>
  </data>
  <data name="Description_FAQ_Asteroids" xml:space="preserve">
    <value>Asteroids can be found in space. How many there are depends on the server or world settings. Most asteroids will have ores that can be mined. </value>
  </data>
  <data name="Description_FAQ_Gravity" xml:space="preserve">
    <value>There is gravity on planets. Virtual Gravity can also be produced with the gravity generator block. Virtual gravity has no effect on grids unless virtual mass blocks are implemented. </value>
  </data>
  <data name="Description_FAQ_Oxygen" xml:space="preserve">
    <value>Some planets have breathable atmospheres. Oxygen can be produced from ice with a O2/H2 generator or from an oxygen farm. Oxygen can be stored in oxygen tanks and bottles.</value>
  </data>
  <data name="Description_FAQ_Damage" xml:space="preserve">
    <value>Damage can be inflicted by using weapons like rocket launchers or gatling turrets or hand held rifles. Grids can also be damaged by impacts with other grids or voxels. </value>
  </data>
  <data name="Description_FAQ_Repair" xml:space="preserve">
    <value>Use your welder to repair damaged blocks. Blocks that have been completely destroyed need to be replaced or you can use a projector to repair faster. </value>
  </data>
  <data name="Description_FAQ_Welding" xml:space="preserve">
    <value>Use your welder on blocks to build and repair. Welding requires power drawn from your suit and components for the block. You can also install welders on ships. Use RMB to add missing components from the block you are looking at to your build planner.</value>
  </data>
  <data name="Description_FAQ_Mining" xml:space="preserve">
    <value>You can collect ore by using your drill on voxels like planets or asteroids. Your drill has a short-range detector that shows you the location of ores. </value>
  </data>
  <data name="Description_FAQ_Healing" xml:space="preserve">
    <value>You can heal yourself at a medical room or survival kit if you are injured. Hold {CONTROL:USE} to use the console. </value>
  </data>
  <data name="Description_FAQ_Recharging" xml:space="preserve">
    <value>You can recharge your suit power in medical rooms, survival kits or by sitting in any kind of seat or cockpit as long as it is powered.</value>
  </data>
  <data name="Description_FAQ_Grinding" xml:space="preserve">
    <value>You can use a grinder to grind down blocks and deconstruct them. Components are salvaged and transferred into your inventory while grinding. </value>
  </data>
  <data name="Description_FAQ_Hydrogen" xml:space="preserve">
    <value>Hydrogen is a fuel used for your suit's jetpack and hydrogen thrusters. Hydrogen is produced from ice in a O2/H2 generator. You can story hydrogen in hydrogen tanks and bottles. </value>
  </data>
  <data name="Description_FAQ_Jetpack" xml:space="preserve">
    <value>Your jetpack requires hydrogen. You can produce hydrogen from ice in a O2/H2 generator. Refill bottles at the generator or connect the generator with a medical room or survival kit to recharge your hydrogen directly. </value>
  </data>
  <data name="Description_FAQ_MagneticBoots" xml:space="preserve">
    <value>Magnetic boots only work in zero gravity environments. They enable you to stick to surfaces like asteroids or ships. Press {CONTROL:THRUSTS} to disable your jetpack and enable your magnetic boots when in a standing position on a surface. </value>
  </data>
  <data name="Description_FAQ_Ore" xml:space="preserve">
    <value>Ore refers to several types of minerals that can be refined into ingots using a refinery. Ores can be found on planets and asteroids. Look for dark spots on planets to find ore. </value>
  </data>
  <data name="Description_FAQ_Ice" xml:space="preserve">
    <value>Ice is essential to produce oxygen and hydrogen and can be found on planets and inside asteroids. </value>
  </data>
  <data name="Description_FAQ_Voxel" xml:space="preserve">
    <value>Voxels are physical bodies such as asteroids or planets. Use your drill to bore into voxels and alter their shape. Use voxel hands in creative mode to create your own shapes. </value>
  </data>
  <data name="Description_FAQ_Grid" xml:space="preserve">
    <value>Grids are collections of blocks that shape stations or ships. </value>
  </data>
  <data name="Description_FAQ_Clang" xml:space="preserve">
    <value>Hail Clang!</value>
  </data>
  <data name="Description_FAQ_Visor" xml:space="preserve">
    <value>Your visor can be opened and closed by pressing {CONTROL:HELMET}. Don't open your visor in space or you will suffocate!</value>
  </data>
  <data name="Description_FAQ_RoomPressure" xml:space="preserve">
    <value>Room pressure is displayed in a vent menu. A room has to be sealed in order to pressurized. </value>
  </data>
  <data name="Description_FAQ_Thrusters" xml:space="preserve">
    <value>Thrusters allow your ships to move and fly. Make sure to use the right thrusters in the appropriate environments. Atmospheric thrusters will not work in space!</value>
  </data>
  <data name="Description_FAQ_ShipMovement" xml:space="preserve">
    <value>Press {CONTROL:TOGGLE_REACTORS}  to turn power off and on. If you are wondering if you have enough power, check if there is fuel in your reactors or if your batteries are charged.</value>
  </data>
  <data name="Description_FAQ_RoverMovement" xml:space="preserve">
    <value>Press {CONTROL:LANDING_GEAR} to disable the brakes and landing gears or {CONTROL:TOGGLE_REACTORS} to turn the power off and on. You can check if there is fuel in your reactors or if your batteries are charged.</value>
  </data>
  <data name="Description_FAQ_Planets" xml:space="preserve">
    <value>Planets can be seen from any distance. If you do not see planets then they are likely not part of this world. </value>
  </data>
  <data name="Description_FAQ_Pirates" xml:space="preserve">
    <value>Protect yourself against pirates and other players by building armor, turrets and decoys. </value>
  </data>
  <data name="Description_FAQ_Fuel" xml:space="preserve">
    <value>Reactors use refined uranium ingots for fuel. Your jetpack and hydrogen thrusters require hydrogen. </value>
  </data>
  <data name="Description_FAQ_PCU" xml:space="preserve">
    <value>PCU stands for Performance Cost Unit.  Building and removing blocks cost and refunds PCU. </value>
  </data>
  <data name="Description_FAQ_Ownership" xml:space="preserve">
    <value>You can own blocks when you are the one who added the computer components. You can choose to share your blocks with your faction or anybody else. </value>
  </data>
  <data name="Description_FAQ_Factions" xml:space="preserve">
    <value>Factions are a way to play with other players by sharing your blocks, which can be used by other players. Anyone can set up factions. </value>
  </data>
  <data name="Description_FAQ_Bottles" xml:space="preserve">
    <value>Hydrogen and oxygen bottles can be produced in assemblers and refilled in O2/H2 generators. </value>
  </data>
  <data name="Description_FAQ_Help" xml:space="preserve">
    <value>Press {CONTROL:HELP_SCREEN} to find additional help or just ask me.</value>
  </data>
  <data name="Description_FAQ_SaveBlueprints" xml:space="preserve">
    <value>You can save ship designs in blueprints by aiming at them and press Ctrl-B. Press F10 to open your menu of blueprints. </value>
  </data>
  <data name="Description_FAQ_Lost" xml:space="preserve">
    <value>If you find yourself lost, you can always press {CONTROL:SUICIDE} to respawn at your nearest respawn point. </value>
  </data>
  <data name="Description_FAQ_Mass" xml:space="preserve">
    <value>Mass indicates the weight of your ship. Filling cargo containers with ores or components can severely impact the performance of your ship. </value>
  </data>
  <data name="Description_FAQ_Skins" xml:space="preserve">
    <value>Skins can be found in survival mode by finding the drop pods and activating their buttons. Use a medical room to customize your character. </value>
  </data>
  <data name="Description_FAQ_ShipInventories" xml:space="preserve">
    <value>Be sure to connect individual inventories using conveyors. Some items are too large to pass through small conveyor tubes. Press {CONTROL:INVENTORY} to open your personal inventory. </value>
  </data>
  <data name="Description_FAQ_ShipBuilding" xml:space="preserve">
    <value>The minimum requirements for a ship are a cockpit, gyroscope, one thruster in each direction and some form of power supply, such as a reactor or a battery. </value>
  </data>
  <data name="Description_FAQ_Script" xml:space="preserve">
    <value>Scripts might be disabled in world settings. </value>
  </data>
  <data name="Description_FAQ_GridMovement" xml:space="preserve">
    <value>Make sure it has thrusters pointing in the direction it is moving and some source of power. </value>
  </data>
  <data name="Description_FAQ_StopMoving" xml:space="preserve">
    <value>Be sure to enable your jetpack with {CONTROL:THRUSTS} and turn on your dampeners with {CONTROL:DAMPING}. </value>
  </data>
  <data name="Description_FAQ_RelativeDampeners" xml:space="preserve">
    <value>Relative dampeners match your speed and direction with a moving target. Press [Ctrl-{CONTROL:DAMPING}] while looking at your target. You need to be within 100 meters for it to work. </value>
  </data>
  <data name="Description_FAQ_InertiaDampeners" xml:space="preserve">
    <value>Inertia dampeners will slow movements when there is no input and can be toggled with {CONTROL:DAMPING}. Relative dampeners will match your speed with that of a moving object and can be toggled with [Ctrl-{CONTROL:DAMPING}]. Both need thrusters in all directions to work effectively</value>
  </data>
  <data name="Description_FAQ_Flashlight" xml:space="preserve">
    <value>You can toggle your flashlight with {CONTROL:HEADLIGHTS}. Flashlights consume suit power and will not work when depleted. </value>
  </data>
  <data name="Description_FAQ_FindOtherPlayers" xml:space="preserve">
    <value>Look for factions that allow anyone to join or ask around if you can group up with players. Look for antenna signals that could indicate other players. </value>
  </data>
  <data name="Description_FAQ_HowToPlayGame" xml:space="preserve">
    <value>Can you be more specific, please?</value>
  </data>
  <data name="Description_FAQ_Thing" xml:space="preserve">
    <value>Have you tried that other thing?</value>
  </data>
  <data name="Description_FAQ_ShipWontFly" xml:space="preserve">
    <value>Does your ship have enough power? Does it have enough thrusters? Are your dampeners turned on?</value>
  </data>
  <data name="Description_FAQ_WhatIsABlock" xml:space="preserve">
    <value>Blocks are what all ships and stations are made off. There are two sizes: large and small. You can find blocks in the menu by pressing {CONTROL:BUILD_SCREEN}. </value>
  </data>
  <data name="Description_FAQ_MirrorMode" xml:space="preserve">
    <value>Mirror mode only works in creative mode and allows symmetric building. Press {CONTROL:SYMMETRY_SWITCH} to cycle through all six planes of mirrors. Use LMB button to confirm placement and RMB to remove one. Press {CONTROL:USE_SYMMETRY} to temporarily disable mirror mode. </value>
  </data>
  <data name="Description_FAQ_ProtectingMyself" xml:space="preserve">
    <value>Hide your bases underground or inside asteroids. Build turrets and decoys to defend against attacks. Build hidden medical rooms and spread them out to maintain ways to respawn when attacked from inside you base.</value>
  </data>
  <data name="Description_FAQ_LosingHealth" xml:space="preserve">
    <value>Are you suffocating? Standing in front of a thruster or perhaps you came too close to an active ship tool?</value>
  </data>
  <data name="Description_FAQ_VoxelHands" xml:space="preserve">
    <value>Voxel hands is a tool only available in creative mode, which allows you to add and sculpt voxel shapes. It can be enabled in world settings. press K to open voxel hand menu while equiped. </value>
  </data>
  <data name="Description_FAQ_AirTightnessPressure" xml:space="preserve">
    <value>A room needs to be airtight before it can be filled with oxygen by an air vent. Make sure there are no holes exposed to space and that all doors are closed. </value>
  </data>
  <data name="Description_FAQ_Components" xml:space="preserve">
    <value>Components are required to construct blocks. They can be produced in assemblers from ingots. Placing a block in survival mode always requires the first component. </value>
  </data>
  <data name="Description_FAQ_Station" xml:space="preserve">
    <value>A station is a grid that is static and directly attached to voxels like planets or asteroids. Some stations can fly, but only have enough thrusters for basic movement. </value>
  </data>
  <data name="Description_FAQ_Ship" xml:space="preserve">
    <value>A ship is a grid that is designed to move. It has thrusters in each direction, a gyroscope for orientation, a cockpit and some source of power like batteries or reactors. Ships can be designed for specific tasks like building or fighting. </value>
  </data>
  <data name="Description_FAQ_CarRover" xml:space="preserve">
    <value>A rover is a vehicle that uses wheels to move instead of thrusters, which are used to fly. Rovers are usually cheap to build, but often slow and an easy target for other players. </value>
  </data>
  <data name="Description_FAQ_GPSSignals" xml:space="preserve">
    <value>GPS signals can be disabled or created in the Coms tab. Double-click a GPS signal to disable it. GPS signals can be stored in LCD panels or broadcasted in chat. Be careful not to attract enemies.</value>
  </data>
  <data name="Description_FAQ_GridSize" xml:space="preserve">
    <value>There are 2 grid sizes available that are simply referred to as small and large. You can switch the grid size of a block by reselecting the same block on your toolbar. Not all blocks are available in both grid sizes. </value>
  </data>
  <data name="Description_FAQ_Suit" xml:space="preserve">
    <value>Your suit keeps you alive when you are in space. Your health, hydrogen, oxygen and power supplies are displayed on your HUD. Your suit is equipped with magnetic boots to walk in space and a jetpack to fly. </value>
  </data>
  <data name="Description_FAQ_HandTools" xml:space="preserve">
    <value>There are 3 hand tools. A welder builds and repairs. A grinder salvages and deconstructs, while a drill is used to find ore, collect ore and dig tunnels. </value>
  </data>
  <data name="Description_FAQ_Inventory" xml:space="preserve">
    <value>Your inventory can be accessed by pressing {CONTROL:INVENTORY}. Drag items outside of your inventory screen to drop them. Pick up items by pressing {CONTROL:PICK_UP}.</value>
  </data>
  <data name="Description_FAQ_ShipToolsWeapons" xml:space="preserve">
    <value>Tools can be added to your toolbars by pressing {CONTROL:BUILD_SCREEN}. Drag and drop or right-click tools to automatically add them to your toolbar. This works the same for ship functions when you are inside a cockpit. </value>
  </data>
  <data name="Description_FAQ_Ingots" xml:space="preserve">
    <value>Ingots are produced in refineries from ores and are essential to produce components. </value>
  </data>
  <data name="Description_FAQ_Armor" xml:space="preserve">
    <value>Armor is used to design the structure of ships and stations, and acts as protection for important blocks. Light armor is cheap and enables ships to be fast. Heavy armor offers more protection for ships, but it affects these vehicles' speed. </value>
  </data>
  <data name="Description_FAQ_Meteor" xml:space="preserve">
    <value>Meteors can be enabled in world settings. You can protect yourself against meteors by building gatling turrets, adding layers of armor to vehicles and buildings or by simply hiding inside structures.</value>
  </data>
  <data name="Description_FAQ_UnknownSignals" xml:space="preserve">
    <value>Signals indicate positions of pods where you can obtain loot and skins in survival mode. Weak signals are only visible for you. Stronger signals are visible for everyone on the server but may lead to better loot. </value>
  </data>
  <data name="Description_FAQ_GPSColors" xml:space="preserve">
    <value>Blue Signals are owned by you. White signals are owned by a friendly faction. Red signals are owned by a hostile faction. Green and yellow signals indicate loot pods. </value>
  </data>
  <data name="Description_FAQ_Drones" xml:space="preserve">
    <value>Drones are small unmanned ships that can either be remote controlled, script controlled or sometimes controlled by sensors and timer blocks. </value>
  </data>
  <data name="Description_FAQ_Objective" xml:space="preserve">
    <value>Space Engineers is a sandbox game. You can set your own goals. Search the workshop for scenarios and missions or create your own to play together with friends! Active mission objectives are displayed in the top left corner. </value>
  </data>
  <data name="Description_FAQ_GoodBot" xml:space="preserve">
    <value>I am Good.bot. I am here to answer your questions to the best of my ability. How can I help you?</value>
  </data>
  <data name="Description_FAQ_Math" xml:space="preserve">
    <value>Math! I do that all the time!</value>
  </data>
  <data name="Description_FAQ_Begin" xml:space="preserve">
    <value>Get your production up and running. Build refineries and assemblers. Make sure you have enough power, Build solar panels, batteries and reactors. make sure your medical room is well protected and build more to be sure!</value>
  </data>
  <data name="Description_FAQ_BasicMovement" xml:space="preserve">
    <value>Use {CONTROL:FORWARD} {CONTROL:STRAFE_LEFT} {CONTROL:BACKWARD} {CONTROL:STRAFE_RIGHT} to move, Hold {CONTROL:SPRINT} to sprint, Toggle {CONTROL:SWITCH_WALK} to walk. Use {CONTROL:CROUCH} to crouch and {CONTROL:JUMP} to jump. </value>
  </data>
  <data name="Description_FAQ_Time" xml:space="preserve">
    <value>It is time for Space Engineers!</value>
  </data>
  <data name="Description_FAQ_SteamWorkshop" xml:space="preserve">
    <value>The {0} workshop is where you can find all player made blueprints, scenarios, scripts and mods that players published. Subscribe to workshop items to access them in game.</value>
  </data>
  <data name="Description_FAQ_Painting" xml:space="preserve">
    <value>While holding a block, you can paint blocks with {CONTROL:CUBE_COLOR_CHANGE}. Press K to access more colour options. Use Ctrl-{CONTROL:CUBE_COLOR_CHANGE} or Shift-{CONTROL:CUBE_COLOR_CHANGE} to paint large surfaces. </value>
  </data>
  <data name="Description_FAQ_InvalidMaterial" xml:space="preserve">
    <value>Sorry, That material does not exist in Space Engineers. </value>
  </data>
  <data name="Description_FAQ_Test" xml:space="preserve">
    <value>Test received!</value>
  </data>
  <data name="Description_FAQ_Broadcasting" xml:space="preserve">
    <value>Your suit has a limited range antenna for accessing grids remotely or controlling drones. You can turn it off and on with O. </value>
  </data>
  <data name="Description_FAQ_BlockRotation" xml:space="preserve">
    <value>You can turn on the block and grid rotations assist in the game options menu to see the rotation controls. Press {CONTROL:CUBE_DEFAULT_MOUNTPOINT} to rotate a block towards its default mount-point. </value>
  </data>
  <data name="Description_FAQ_HUD" xml:space="preserve">
    <value>You can switch between HUD states with {CONTROL:TOGGLE_HUD}. Toggle {CONTROL:TOGGLE_SIGNALS} to switch between modes for GPS signals. </value>
  </data>
  <data name="Description_FAQ_Bug" xml:space="preserve">
    <value>You can report bugs and problems with the game at the forums or visit https://support.keenswh.com/</value>
  </data>
  <data name="Description_FAQ_Messages" xml:space="preserve">
    <value>You can send private messages to other players or factions through the Coms tab in your inventory. These messages can only be send if your antenna is enabled and in range of other players or antennas. </value>
  </data>
  <data name="Description_FAQ_AutoPilot" xml:space="preserve">
    <value>To use autopilot your ship first needs a Remote Control block. You need to add custom GPS waypoints in the Remote Control Block and select a flight mode. You can also set actions to happen when the ship arrives at the next waypoint. </value>
  </data>
  <data name="Description_FAQ_Experimental" xml:space="preserve">
    <value>Experimental mode is a setting that enables features that are considered unstable and can possibly cause performance issues. Experimental mode can be enabled in game settings.</value>
  </data>
  <data name="Description_FAQ_Marek" xml:space="preserve">
    <value>Marek Rosa is the Founder and CEO of Keen Software House and GoodAI. </value>
  </data>
  <data name="Description_FAQ_GoodAI" xml:space="preserve">
    <value>GoodAI was founded by CEO/CTO Marek Rosa in January 2014 and performs research on the development of artificial intelligence. </value>
  </data>
  <data name="Description_FAQ_DisableHints" xml:space="preserve">
    <value>To disable Good.bot hints, press Escape, go to Options, go to Game and disable "Show Good.bot hints".</value>
  </data>
  <data name="Description_FAQ_Permissions" xml:space="preserve">
    <value>In multiplayer you need special permissions from an admin to be able to spawn blueprints, edit scripts or teleport. In single player you can turn on space master or change the world mode to creative. </value>
  </data>
  <data name="Description_FAQ_LeavePlanet" xml:space="preserve">
    <value>To leave a planet with an atmosphere you need a ship capable of going into space. The best way is to equip your ship with hydrogen thrusters and hydrogen tanks. </value>
  </data>
  <data name="Description_FAQ_Groups" xml:space="preserve">
    <value>You can use block functions of multiple blocks simultaneously by using block groups. Use Ctrl or Shift to select the ship blocks you wish to put into a group; enter a name in "Block group" on the right side of the screen and press Enter to create the block group. </value>
  </data>
  <data name="Description_FAQ_MergeGrids" xml:space="preserve">
    <value>You can connect grids with each other with landing gears or connectors. You can merge two grids of the same size type together permanently by using merge blocks or even rotors. </value>
  </data>
  <data name="Description_FAQ_Camera" xml:space="preserve">
    <value>You can change your perspective with {CONTROL:CAMERA_MODE} from first person mode to third person mode. Note that third person camera can clip back to first person if objects are obstructing the view. </value>
  </data>
  <data name="Description_FAQ_Ammo" xml:space="preserve">
    <value>You can create ammunition for your weapons and turrets in the advanced assembler if you have the right materials available. </value>
  </data>
  <data name="Description_FAQ_Airlock" xml:space="preserve">
    <value>An airlock permits the player to move freely in and out while keeping the interior pressurized. The easiest way to achieve this is by building a set of parallel doors but can be made much more advanced with air vents, timer blocks, button panels or scripts. </value>
  </data>
  <data name="Description_FAQ_Pushing" xml:space="preserve">
    <value>Player characters can push small grids by walking or flying into them if these grids aren't too heavy. If you want to push or pull heavy objects you will have to build a ship or rover and grab the object with landing gear. </value>
  </data>
  <data name="Description_FAQ_Upgrade" xml:space="preserve">
    <value>You can assemble better tools in the assembler. You can also upgrade the refinery and assembler by adding upgrade modules to make them faster, more efficient or less power consuming. </value>
  </data>
  <data name="Description_FAQ_GameMode" xml:space="preserve">
    <value>There are two game modes: survival and creative. In creative mode you won't need any materials to build your ships. You can change this game mode by selecting your world in your saves menu and change the settings. </value>
  </data>
  <data name="Description_FAQ_ScreenShot" xml:space="preserve">
    <value>You can make screenshots by pressing F12 by default. Or if you have Nvidia Ansel you can press Alt-F to enter capture mode. </value>
  </data>
  <data name="Description_FAQ_Unlock" xml:space="preserve">
    <value>You can unlock new blocks by fully constructing other required blocks. You can see what blocks will unlock the next block by viewing them in the G screen. </value>
  </data>
  <data name="Description_FAQ_Temperature" xml:space="preserve">
    <value>Temperature affects your suit systems and will drain your power faster in extreme conditions. Without power your suit will no longer protect you against extreme conditions and you may start taking damage. </value>
  </data>
  <data name="Description_FAQ_SpawnShip" xml:space="preserve">
    <value>Your spawn ship will have everything you need to get started. A survival kit, power and a O2/H2 generator for oxygen and hydrogen. You can take nonesential parts of your ship to use for your new base and scrap it entirely once you no longer need it. </value>
  </data>
  <data name="Description_FAQ_MetalScrap" xml:space="preserve">
    <value>Metal scrap appears when blocks are violently destroyed and can be melted back into iron ingots by putting them into a refinery. </value>
  </data>
  <data name="Description_FAQ_LogOut" xml:space="preserve">
    <value>You can use a cryo room to store your character before leaving the server. This will prevent your character from dying after some time and losing your toolbar. Make sure the room is supplied with oxygen and power.</value>
  </data>
  <data name="Description_FAQ_Interaction" xml:space="preserve">
    <value>Interactive objects like doors, cockpits and button panels are highlighted yellow and can be entered or interacted with by pressing  {CONTROL:USE}.</value>
  </data>
  <data name="Description_FAQ_Navigation" xml:space="preserve">
    <value>You can create GPS signals to store important locations and waypoints. Use an antenna or beacon to broadcast positions of grids, but be careful, as others can also see these marked locations. Use /GPS to quickly save your current location. </value>
  </data>
  <data name="Description_FAQ_Elaborate" xml:space="preserve">
    <value>Can you be more specific?</value>
  </data>
  <data name="Description_FAQ_CopyPaste" xml:space="preserve">
    <value>You can copy, paste and delete blocks and grids only in creative mode by pressing Ctrl+C, Ctrl+V and Ctrl-X. </value>
  </data>
  <data name="Description_FAQ_Tools" xml:space="preserve">
    <value>A welder to construct blocks, a grinder to deconstruct blocks and a drill to find ore and dig tunnels. All tools can be produced in assemblers or survival kits from basic materials. </value>
  </data>
  <data name="Description_FAQ_Commands" xml:space="preserve">
    <value>Use /help to find all chat commands. </value>
  </data>
  <data name="Description_FAQ_Platinum" xml:space="preserve">
    <value>Platinum is a rare material only found in asteroids and moons. There is no platinum on planets. </value>
  </data>
  <data name="Description_FAQ_Uranium" xml:space="preserve">
    <value>Uranium is a rare material only found in asteroids and moons. There is no uranium on planets. </value>
  </data>
  <data name="Description_FAQ_Stone" xml:space="preserve">
    <value>Stone can be refined into small amounts of basic minerals like Iron, Silicon and Nickel in refineries or a survival kit. </value>
  </data>
  <data name="Description_FAQ_BlockShapes" xml:space="preserve">
    <value>You can access alternative block shapes if you have a block equipped on your toolbar with an + symbol. Use the scroll wheel to switch to different shapes. </value>
  </data>
  <data name="Description_FAQ_BuildMode" xml:space="preserve">
    <value>You can toggle different building modes by pressing B. </value>
  </data>
  <data name="Description_FAQ_CarJump" xml:space="preserve">
    <value>Your car can use its suspensions to jump to get out of tight spaces. Hold and release X to charge the jump of your car. The strength of the jump is based on your suspensions strength setting. </value>
  </data>
  <data name="Description_FAQ_ConvertGrid" xml:space="preserve">
    <value>You can convert grids from station to ship or ship into station in a grid's info screen if this is enabled in the world settings. </value>
  </data>
  <data name="Description_FAQ_FlipRover" xml:space="preserve">
    <value>You can flip your rover by adding pistons and pushing itself up or you can try adding heavy blocks like batteries to your grid, so that it will fall over by changing its center of mass. </value>
  </data>
  <data name="Description_FAQ_Tutorial" xml:space="preserve">
    <value>Play "Learning to Survive" to learn about the basics of Space Engineers. Pay attention to the tooltips for blocks to learn about their functions and I will do my best to help you along the way!</value>
  </data>
  <data name="Description_FAQ_Encounter" xml:space="preserve">
    <value>Random encounters are shipwrecks, derelict vessels and pirate stations that can be found in space. They often broadcast a MAYDAY signal. Careful, exploring these encounters can be dangerous.</value>
  </data>
  <data name="Description_FAQ_Blastdoors" xml:space="preserve">
    <value>Blast door blocks are armor blocks that won't bend and fit in between layers of blocks, so they can move freely by rotors or pistons. They are useful to create large moving doors and platforms. </value>
  </data>
  <data name="Description_FAQ_BlockLimit" xml:space="preserve">
    <value>Block limits sets a limit to how many of each type of block each player can build to ensure server performance. Block limits can be disabled in the world settings. </value>
  </data>
  <data name="Description_FAQ_Hacking" xml:space="preserve">
    <value>Hacking a block can be done by using a grinder to remove the computer components from a block and placing them back with a welder to gain access to the block. </value>
  </data>
  <data name="Description_FAQ_Ladder" xml:space="preserve">
    <value>You can use ladders to traverse vertical spaces. Ladders can be stacked vertically. Press {CONTROL:USE} to interact with a ladder. Hold {CONTROL:FORWARD} or {CONTROL:BACKWARD} to go up and down. Press {CONTROL:JUMP} to get off the ladder. </value>
  </data>
  <data name="Description_FAQ_Decoratives" xml:space="preserve">
    <value>Decorative blocks allow players to decorate the interiors of large grid ships. Blocks such as the desk and kitchen are modular and can be combined together to create many shapes.</value>
  </data>
  <data name="Description_FAQ_IndustrialCockpit" xml:space="preserve">
    <value>The industrial cockpit is a sturdy decorative cockpit for large and small grids that features a large field of vision. This cockpit is useful for rovers and ships that need to work close to surfaces or other grids without damaging them. </value>
  </data>
  <data name="Description_FAQ_ConsoleBlock" xml:space="preserve">
    <value>The console block is a decorative block with the ability to project large and small grids scaled down. </value>
  </data>
  <data name="Description_FAQ_Emotes" xml:space="preserve">
    <value>Emotes are character animations that can be equipped on your toolbar from the G-screen or played by opening chat and entering / followed by the name of the emote you wish to play. for example: /EmoteName</value>
  </data>
  <data name="Description_FAQ_BuildPlanner" xml:space="preserve">
    <value>The build planner helps you to quickly access the components required to build blocks. Use your welders RMB function to add a block to your component list. Use the withdraw button from any inventories to automatically collect the required components if available and accessible. </value>
  </data>
  <data name="Description_FAQ_StylePack" xml:space="preserve">
    <value>The Style Pack ads more player skins, armor skins and emotes for you to use in game.</value>
  </data>
  <data name="Description_FAQ_ArmorSkins" xml:space="preserve">
    <value>Armor skins are different textures and patterns for your ships and stations. They can be applied the same way you paint grids. Press P to open the paint screen. </value>
  </data>
  <data name="Description_FAQ_NPCShip" xml:space="preserve">
    <value>There are cargo ships that travel the world around you. Coming near them can be dangerous as they consider you a threat. </value>
  </data>
  <data name="Description_FAQ_CooperativeMode " xml:space="preserve">
    <value>Cooperative mode will let assemblers automatically take a portion of the queue of another assembler, making them work together.</value>
  </data>
  <data name="Description_FAQ_SpectatorMode" xml:space="preserve">
    <value>You can access Spectator mode by pressing F8 to move around your camera freely and F7 to remain in the spectator camera while controlling your character. Spectator mode requires permissions and has to enabled in worlds settings. </value>
  </data>
  <data name="JoinScreen_GTXGamingBanner" xml:space="preserve">
    <value>Rent your server here.</value>
  </data>
  <data name="ChatBot_ThankYou_Q0" xml:space="preserve">
    <value>Thank you</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q1" xml:space="preserve">
    <value>Thanks</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q2" xml:space="preserve">
    <value>Thats great</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q3" xml:space="preserve">
    <value>Sounds great</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q4" xml:space="preserve">
    <value>Always appreciated</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q5" xml:space="preserve">
    <value>Thanks so much</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q6" xml:space="preserve">
    <value>Thanks a lot</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q7" xml:space="preserve">
    <value>Thanks a bunch</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q8" xml:space="preserve">
    <value>I owe you one</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_ThankYou_Q9" xml:space="preserve">
    <value>I can’t thank you enough</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q0" xml:space="preserve">
    <value>Hi</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q1" xml:space="preserve">
    <value>Hello</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q2" xml:space="preserve">
    <value>Hallo</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q3" xml:space="preserve">
    <value>Ciao</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q4" xml:space="preserve">
    <value>Ahoy</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q5" xml:space="preserve">
    <value>Greetings</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q6" xml:space="preserve">
    <value>Aloha</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q7" xml:space="preserve">
    <value>Howdy</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q8" xml:space="preserve">
    <value>Namaste</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q9" xml:space="preserve">
    <value>Look at you</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q10" xml:space="preserve">
    <value>What is this</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q11" xml:space="preserve">
    <value>How does this work</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Generic_Q12" xml:space="preserve">
    <value>Hey</value>
  </data>
  <data name="ChatBot_HowAreYou_Q0" xml:space="preserve">
    <value>How are you</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q1" xml:space="preserve">
    <value>How have you been</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q2" xml:space="preserve">
    <value>Hows everything</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q3" xml:space="preserve">
    <value>Hows it going</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q4" xml:space="preserve">
    <value>How are things going</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q5" xml:space="preserve">
    <value>Whats going on</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q6" xml:space="preserve">
    <value>Whats new</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q7" xml:space="preserve">
    <value>Whats up</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q8" xml:space="preserve">
    <value>Whassup</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_HowAreYou_Q9" xml:space="preserve">
    <value>What are you up to</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q0" xml:space="preserve">
    <value>Fuck</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q1" xml:space="preserve">
    <value>Fucking</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q2" xml:space="preserve">
    <value>dumb</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q3" xml:space="preserve">
    <value>Shit</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q4" xml:space="preserve">
    <value>Shitty</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q5" xml:space="preserve">
    <value>stupid</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Rude_Q6" xml:space="preserve">
    <value>bitch</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q0" xml:space="preserve">
    <value>What is my purpose</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q1" xml:space="preserve">
    <value>Should I do something</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q2" xml:space="preserve">
    <value>What can I do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q3" xml:space="preserve">
    <value>what Do I do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q4" xml:space="preserve">
    <value>What do I have to do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Objective_Q5" xml:space="preserve">
    <value>what to do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_GoodBot_Q0" xml:space="preserve">
    <value>Who are you</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_GoodBot_Q1" xml:space="preserve">
    <value>What is your purpose</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_GoodBot_Q2" xml:space="preserve">
    <value>What are you</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_GoodBot_Q3" xml:space="preserve">
    <value>What can you do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_GoodBot_Q4" xml:space="preserve">
    <value>Help</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Begin_Q0" xml:space="preserve">
    <value>What should I do</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="Description_FAQ_Bug_Q0" xml:space="preserve">
    <value>How do I report a bug</value>
  </data>
  <data name="Description_FAQ_Bug_Q1" xml:space="preserve">
    <value>Bug</value>
  </data>
  <data name="Description_FAQ_Bug_Q2" xml:space="preserve">
    <value>I found a bug</value>
  </data>
  <data name="Description_FAQ_Bug_Q3" xml:space="preserve">
    <value>Is the game is bugged</value>
  </data>
  <data name="Description_FAQ_Bug_Q4" xml:space="preserve">
    <value>The game is broken</value>
  </data>
  <data name="Description_FAQ_Bug_Q5" xml:space="preserve">
    <value>Where can I report a bug</value>
  </data>
  <data name="Description_FAQ_Bug_Q6" xml:space="preserve">
    <value>Glitch</value>
  </data>
  <data name="Description_FAQ_Bug_Q7" xml:space="preserve">
    <value>This does not work</value>
  </data>
  <data name="Description_FAQ_Bug_Q8" xml:space="preserve">
    <value>Out of memory</value>
  </data>
  <data name="Description_FAQ_Test_Q0" xml:space="preserve">
    <value>Test</value>
  </data>
  <data name="Description_FAQ_Test_Q1" xml:space="preserve">
    <value>Testing</value>
  </data>
  <data name="Description_FAQ_Test_Q2" xml:space="preserve">
    <value>Is this working</value>
  </data>
  <data name="Description_FAQ_Test_Q3" xml:space="preserve">
    <value>Does this work</value>
  </data>
  <data name="Description_FAQ_Clang_Q0" xml:space="preserve">
    <value>Clang</value>
  </data>
  <data name="Description_FAQ_Clang_Q1" xml:space="preserve">
    <value>Xocliw</value>
  </data>
  <data name="ChatBot_Substitute0_S" xml:space="preserve">
    <value>Advanced Rotor Part</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Substitute0_D" xml:space="preserve">
    <value>strawberry dumpling</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Substitute1_S" xml:space="preserve">
    <value>Advanced Rotor Parts</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Substitute1_D" xml:space="preserve">
    <value>strawberry dumplings</value>
    <comment>Question detected by GoodBot. Do not translate!</comment>
  </data>
  <data name="ChatBot_Substitute2_S" xml:space="preserve">
    <value>Advanced Rotors Part</value>
  </data>
  <data name="ChatBot_Substitute2_D" xml:space="preserve">
    <value>strawberry dumpling</value>
  </data>
  <data name="ChatBot_Substitute3_S" xml:space="preserve">
    <value>Advanced Rotors Parts</value>
  </data>
  <data name="ChatBot_Substitute3_D" xml:space="preserve">
    <value>strawberry dumplings</value>
  </data>
  <data name="IngameHelp_BuildingTip2_Detail1" xml:space="preserve">
    <value>Are you sure you have not done this before?</value>
  </data>
  <data name="IngameHelp_BuildingTip2_Detail2" xml:space="preserve">
    <value>*Tip:* Always make sure you keep a few components with you.</value>
  </data>
  <data name="IngameHelp_FlyingAShipLGTip_Detail1" xml:space="preserve">
    <value>One Engineer told me that flying a ship is as easy as riding a bike!</value>
  </data>
  <data name="IngameHelp_FlyingAShipLGTip_Detail2" xml:space="preserve">
    <value>*Tip:* Landing gears can be used to pick up other grids and move them around.</value>
  </data>
  <data name="IngameHelp_FlyingAShipLG_Detail1" xml:space="preserve">
    <value>This ship is equipped with magnetic landing gears. Toggling landing gears will temporarily disable their magnetic lock.</value>
  </data>
  <data name="IngameHelp_FlyingAShipLG_Detail2" xml:space="preserve">
    <value>Use {CONTROL:LANDING_GEAR} to toggle the landing gear.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles2_Detail1" xml:space="preserve">
    <value>You can adjust wheel settings individually to control steering angles, acceleration, maximum speed and much more. They can "jump" by charging their suspension to get out of gaps.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles2_Detail2" xml:space="preserve">
    <value>Hold and release {CONTROL:THRUSTS} to charge a jump.</value>
  </data>
  <data name="IngameHelp_WheeledVehiclesTip_Detail1" xml:space="preserve">
    <value>Congratulations! You just passed your driving test!</value>
  </data>
  <data name="IngameHelp_WheeledVehiclesTip_Detail2" xml:space="preserve">
    <value>*Tip:* Be careful not to go too fast with Wheeled Vehicles, which can flip over easily.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail1" xml:space="preserve">
    <value>Wheeled Vehicles are cheap to build and require little power.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail2" xml:space="preserve">
    <value>Toggle {CONTROL:TOGGLE_REACTORS} to turn power off and on.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail3" xml:space="preserve">
    <value>Toggle {CONTROL:LANDING_GEAR} for parking.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail4" xml:space="preserve">
    <value>Use {CONTROL:FORWARD}, {CONTROL:BACKWARD}, {CONTROL:STRAFE_LEFT}, {CONTROL:STRAFE_RIGHT} to move.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail4:Gamepad" xml:space="preserve">
    <value>Use {GAMEPAD:AXIS_MOTION} to move.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Detail5" xml:space="preserve">
    <value>Hold {CONTROL:JUMP} to brake.</value>
  </data>
  <data name="IngameHelp_WheeledVehicles_Title" xml:space="preserve">
    <value>Good.bot: Driving a Vehicle</value>
  </data>
  <data name="IngameHelp_OwnershipTip_Detail1" xml:space="preserve">
    <value>To hack or not to hack? That is the real question!</value>
  </data>
  <data name="IngameHelp_OwnershipTip_Detail2" xml:space="preserve">
    <value>*Tip:* You can configure ownership to share it with friends. Remember, you can find additional information anytime in the help screen by pressing {CONTROL:HELP_SCREEN}.</value>
  </data>
  <data name="IngameHelp_OwnershipTip_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* You can configure ownership to share it with friends. Remember, you can find additional information anytime in the help screen by accessing the [Help] option in the [Menu] tab of the [System Radial Menu] {CONTROL:SYSTEM_RADIAL_MENU}.</value>
  </data>
  <data name="IngameHelp_HelmetVisorTip_Detail1" xml:space="preserve">
    <value>Being able to breathe makes working a little easier.</value>
  </data>
  <data name="IngameHelp_HelmetVisorTip_Detail2" xml:space="preserve">
    <value>*Tip:* Always make sure your visor is closed before going into space.  All of this useful information can always be accessed in the help screen by pressing {CONTROL:HELP_SCREEN}.</value>
  </data>
  <data name="IngameHelp_HelmetVisorTip_Detail2:Gamepad" xml:space="preserve">
    <value>*Tip:* Always make sure your visor is closed before going into space.  All of this useful information can always be accessed in the help screen by accessing the [Help] option in the [Menu] tab of the [System Radial Menu] {CONTROL:SYSTEM_RADIAL_MENU}.</value>
  </data>
  <data name="IngameHelp_HelmetVisor_Detail1" xml:space="preserve">
    <value>Your helmet visor is still open! Close it to avoid taking damage in low oxygen environments.</value>
  </data>
  <data name="IngameHelp_HelmetVisor_Detail2" xml:space="preserve">
    <value>Use {CONTROL:HELMET} to open and close your visor.</value>
  </data>
  <data name="IngameHelp_HelmetVisor_Title" xml:space="preserve">
    <value>Good.bot: Helmet Visor</value>
  </data>
  <data name="ScreenBlueprintsRew_Caption_Blueprint" xml:space="preserve">
    <value>Blueprints</value>
  </data>
  <data name="ScreenBlueprintsRew_Caption_Script" xml:space="preserve">
    <value>Scripts</value>
  </data>
  <data name="BlueprintInfo_SendTo" xml:space="preserve">
    <value>Send to:</value>
  </data>
  <data name="ControlName_RelativeDampening" xml:space="preserve">
    <value>Enable relative dampening </value>
  </data>
  <data name="IngameHelp_StuckTip_Detail1" xml:space="preserve">
    <value>Excellent! Now you can continue your training.</value>
  </data>
  <data name="IngameHelp_StuckTip_Detail2" xml:space="preserve">
    <value>*Tip:* Always make sure your vehicle has enough fuel before leaving your base.</value>
  </data>
  <data name="IngameHelp_Stuck_Detail1" xml:space="preserve">
    <value>You appear to be stuck.</value>
  </data>
  <data name="IngameHelp_Stuck_Detail2" xml:space="preserve">
    <value>Press {0} to toggle power on and off.</value>
  </data>
  <data name="IngameHelp_Stuck_Detail3" xml:space="preserve">
    <value>Press {0} to toggle landing gears, brakes and connectors.</value>
  </data>
  <data name="IngameHelp_Stuck_Title" xml:space="preserve">
    <value>Good.bot: Stuck?</value>
  </data>
  <data name="IngameHelp_IntroTip2_Detail1" xml:space="preserve">
    <value>*Tip:* You can enable/disable Good.bot ingame help or control hints in Game-Options.</value>
  </data>
  <data name="NotificationJumpAbortedAlreadyJumping" xml:space="preserve">
    <value>Jump was aborted, connected grid is already jumping.</value>
  </data>
  <data name="NotificationJumpAbortedLocked" xml:space="preserve">
    <value>Jump was aborted, the grid is locked.</value>
  </data>
  <data name="NotificationJumpAbortedNoLocation" xml:space="preserve">
    <value>Jump was aborted, no suitable target location found.</value>
  </data>
  <data name="NotificationJumpAbortedShortDistance" xml:space="preserve">
    <value>Jump was aborted, distance too short.</value>
  </data>
  <data name="NotificationJumpAbortedStatic" xml:space="preserve">
    <value>Jump was aborted, the grid is static.</value>
  </data>
  <data name="MedicalRoom_SpawnNameLabel" xml:space="preserve">
    <value>Spawn Name</value>
  </data>
  <data name="MedicalRoom_SpawnNameToolTip" xml:space="preserve">
    <value>The name to display on the spawn screen. Leave empty to display the block name.</value>
  </data>
  <data name="SurvivalKit_SpawnNameLabel" xml:space="preserve">
    <value>Spawn Name</value>
  </data>
  <data name="SurvivalKit_SpawnNameToolTip" xml:space="preserve">
    <value>The name to display on the spawn screen. Leave empty to display the block name.</value>
  </data>
  <data name="Antenna_HudTextLabel" xml:space="preserve">
    <value>HUD Text</value>
  </data>
  <data name="Antenna_HudTextToolTip" xml:space="preserve">
    <value>The text to display on the HUD when the antenna is enabled. Leave empty to display the block name.</value>
  </data>
  <data name="BlockPropertiesTitle_HudText" xml:space="preserve">
    <value>HUD Text</value>
  </data>
  <data name="BlockPropertiesTitle_HudText_Tooltip" xml:space="preserve">
    <value>The text to display on the HUD when the beacon is enabled. Leave empty to display the block name.</value>
  </data>
  <data name="DisplayName_Block_Hydrogen_Engine" xml:space="preserve">
    <value>Hydrogen Engine</value>
  </data>
  <data name="DisplayName_Block_WindTurbine" xml:space="preserve">
    <value>Wind Turbine</value>
  </data>
  <data name="DisplayName_Block_SurvivalKit" xml:space="preserve">
    <value>Survival Kit</value>
  </data>
  <data name="DisplayName_Block_SmallBattery" xml:space="preserve">
    <value>Small Battery</value>
  </data>
  <data name="ToolTipWorldSettings_EnableResearch" xml:space="preserve">
    <value>Enables advancement through the progression tree.</value>
  </data>
  <data name="WorldSettings_EnableResearch" xml:space="preserve">
    <value>Enable progression</value>
  </data>
  <data name="SetEntityPositionDialog" xml:space="preserve">
    <value>Set entity position</value>
  </data>
  <data name="ScreenMedicals_BackToFactionSelection" xml:space="preserve">
    <value>Back to faction selection</value>
  </data>
  <data name="ScreenMedicals_DoesNotAcceptPlayers" xml:space="preserve">
    <value>Does not accept players</value>
  </data>
  <data name="ScreenMedicals_LeaderNotOnline" xml:space="preserve">
    <value>No faction leader is online</value>
  </data>
  <data name="ScreenMedicals_NoFaction" xml:space="preserve">
    <value>No faction</value>
  </data>
  <data name="ScreenMedicals_WaitingForAcceptance" xml:space="preserve">
    <value>Waiting for faction acceptance</value>
  </data>
  <data name="ScreenMedicals_RequiresAcceptance" xml:space="preserve">
    <value>Requires acceptance from a leader.</value>
  </data>
  <data name="NotificationBlockNotResearched" xml:space="preserve">
    <value>Unknown technology. You have to research it first.</value>
  </data>
  <data name="DisplayName_Block_Ladder" xml:space="preserve">
    <value>Ladder</value>
  </data>
  <data name="CustomWorld_NeverSurrender" xml:space="preserve">
    <value>Never Surrender</value>
  </data>
  <data name="CustomWorld_LearningToSurvive" xml:space="preserve">
    <value>Learning to Survive</value>
  </data>
  <data name="IngameHelp_Pod1_Detail1" xml:space="preserve">
    <value>You start in small drop pod containing the most important accessories. The pod is equipped with an O2/H2 generator to produce hydrogen and oxygen and a survival kit for health and energy.</value>
  </data>
  <data name="IngameHelp_Pod2_Detail1" xml:space="preserve">
    <value>The survival kit, if powered, will let you respawn, regenerate your health and energy and is capable of producing small amounts of ingots from stone that you can then produce into components.</value>
  </data>
  <data name="IngameHelp_Pod3_Detail1" xml:space="preserve">
    <value>The first thing to do is to gather stone using your hand drill. Equip your drill, find some stone and store it in the survival kit on the back of your pod. Then access the production tab of your pod and produce ingots.</value>
  </data>
  <data name="IngameHelp_Pod_Title" xml:space="preserve">
    <value>Good.bot: Drop pod</value>
  </data>
  <data name="ScreenDebugAdminMenu_KeepOriginalOwnershipOnPaste" xml:space="preserve">
    <value>Keep original ownership on paste</value>
  </data>
  <data name="ScreenDebugAdminMenu_KeepOriginalOwnershipOnPasteTip" xml:space="preserve">
    <value>Keep original ownership when a grid is pasted.</value>
  </data>
  <data name="ShareProgress" xml:space="preserve">
    <value>Share progress</value>
  </data>
  <data name="TerminalTab_Factions_ShareProgressToolTip" xml:space="preserve">
    <value>Share your block unlock progress with selected member.</value>
  </data>
  <data name="IngameHelp_Turbine2_Detail1" xml:space="preserve">
    <value>Your base will require more power as you add more functional blocks. Be sure to build more wind turbines or solar panels or turn blocks off to prevent them from consuming power.</value>
  </data>
  <data name="IngameHelp_Turbine_Detail1" xml:space="preserve">
    <value>A solar panel or wind turbine under the right conditions will be able to provide enough energy for you to get started. Continue by adding a basic assembler or deconstruct your old survival kit and move it over to your new base.</value>
  </data>
  <data name="IngameHelp_Turbine_Title" xml:space="preserve">
    <value>Good.bot: Power</value>
  </data>
  <data name="IngameHelp_BasicRefinery_Detail1" xml:space="preserve">
    <value>A basic assembler or basic refinery is more efficient at producing and refining then the survival kit but also requires more power. 

Build a battery to use your power more efficiently.</value>
  </data>
  <data name="IngameHelp_BasicRefinery_Title" xml:space="preserve">
    <value>Good.bot: Efficiency</value>
  </data>
  <data name="IngameHelp_Battery2_Detail1" xml:space="preserve">
    <value>You can find ores by looking for dark or bright spots on the ground. Equip your drill to scan for nearby ores or build scouting vehicles with ore detectors to move large amounts of ore to your base.</value>
  </data>
  <data name="IngameHelp_Battery_Detail1" xml:space="preserve">
    <value>Your base is shaping up!

Now that you have a battery you can start expanding your base even more. Try to find ores to increase your production significantly.</value>
  </data>
  <data name="IngameHelp_Battery_Title" xml:space="preserve">
    <value>Good.bot: Progression</value>
  </data>
  <data name="IngameHelp_Temperature_Detail1" xml:space="preserve">
    <value>Temperature affects how quickly your suit energy drains. Hot or cold temperatures will hurt you when your suit is out of power. 


Tip: Pressurized environments will always maintain optimal temperatures.</value>
  </data>
  <data name="IngameHelp_Temperature_Title" xml:space="preserve">
    <value>Good.bot: Temperature</value>
  </data>
  <data name="RespawnScreeenHelpTextSpaceSpawn" xml:space="preserve">
    <value>You will spawn near other players in space.</value>
  </data>
  <data name="RespawnScreeenHelpTextSpawn" xml:space="preserve">
    <value>You will spawn near other players on the planet or the moon.</value>
  </data>
  <data name="WorldSettings_BlocksInventorySize" xml:space="preserve">
    <value>Blocks inventory size</value>
  </data>
  <data name="WorldSettings_CharactersInventorySize" xml:space="preserve">
    <value>Characters inventory size</value>
  </data>
  <data name="ToolTipWorldSettings_BlocksInventorySize" xml:space="preserve">
    <value>Adjusts the inventory size of blocks like cargo containers, production blocks, and similar.</value>
  </data>
  <data name="Department_Designers" xml:space="preserve">
    <value>Designers</value>
  </data>
  <data name="Department_LeadArtist" xml:space="preserve">
    <value>Lead Artist</value>
  </data>
  <data name="Department_LeadDesigner" xml:space="preserve">
    <value>Lead Designer</value>
  </data>
  <data name="Department_TechnicalDirector" xml:space="preserve">
    <value>Technical Director</value>
  </data>
  <data name="Department_TeamOperations" xml:space="preserve">
    <value>Team Operations</value>
  </data>
  <data name="Department_Video" xml:space="preserve">
    <value>Video</value>
  </data>
  <data name="Faction_Filter_Enemy" xml:space="preserve">
    <value>Show Enemies</value>
  </data>
  <data name="Faction_Filter_Friend" xml:space="preserve">
    <value>Show Friends</value>
  </data>
  <data name="Faction_Filter_Neutral" xml:space="preserve">
    <value>Show Neutrals</value>
  </data>
  <data name="Faction_Filter_Player" xml:space="preserve">
    <value>Show Me</value>
  </data>
  <data name="Faction_Filter_None" xml:space="preserve">
    <value>All</value>
  </data>
  <data name="Faction_Filter_NPC" xml:space="preserve">
    <value>Non Player</value>
  </data>
  <data name="Description_StoreBlock" xml:space="preserve">
    <value>Block that enables automatized trading.</value>
  </data>
  <data name="DisplayName_Block_Store" xml:space="preserve">
    <value>Store</value>
  </data>
  <data name="BlockPropertyDescription_Connector_AutoUnlockTime" xml:space="preserve">
    <value>Time (in seconds) after which connector automatically unlocks. </value>
  </data>
  <data name="BlockPropertyTitle_Connector_AutoUnlockTime" xml:space="preserve">
    <value>Autounlock Time</value>
  </data>
  <data name="Terminal_Trading" xml:space="preserve">
    <value>Trading Mode</value>
  </data>
  <data name="Terminal_Trading_Tooltip" xml:space="preserve">
    <value>Trading Mode allows trading through store block. It also prevents the visibility of blocks of other grid, transfer of electricity and items. Cannot be changed while connector is connected.</value>
  </data>
  <data name="BlockPropertiesText_ConnectorDetail_Part1" xml:space="preserve">
    <value>Connected </value>
  </data>
  <data name="BlockPropertiesText_ConnectorDetail_Part2" xml:space="preserve">
    <value> ago 
Disconnect after: </value>
  </data>
  <data name="BlockPropertiesText_ConnectorDetail_Part3" xml:space="preserve">
    <value>Never</value>
  </data>
  <data name="Beacon_SafeZone_Desc" xml:space="preserve">
    <value>Enable safe zone</value>
  </data>
  <data name="Beacon_SafeZone_Info_Desc" xml:space="preserve">
    <value>Safe Zone: </value>
  </data>
  <data name="Beacon_SafeZone_Info_Disabled" xml:space="preserve">
    <value>Disabled</value>
  </data>
  <data name="Beacon_SafeZone_Info_Enabled" xml:space="preserve">
    <value>Enabled</value>
  </data>
  <data name="Beacon_SafeZone_Info_Initializing" xml:space="preserve">
    <value>Initializing...</value>
  </data>
  <data name="Beacon_SafeZone_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="Beacon_SafeZone_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="Beacon_SafeZone_ToolTip" xml:space="preserve">
    <value>Toggle to turn on safe zone (Grid has to be converted to station for this to work).

Activation time is {0} second{3}. Cost is {1} Zone Chip{4} per {2} minute{5}.</value>
  </data>
  <data name="Beacon_SafeZone_RangeSlider" xml:space="preserve">
    <value>Set Range of safe zone</value>
  </data>
  <data name="Beacon_SafeZone_RangeSlider_TTIP" xml:space="preserve">
    <value>Change to set new safe zone range</value>
  </data>
  <data name="Beacon_SafeZone_Info_Inactive" xml:space="preserve">
    <value>Inactive</value>
  </data>
  <data name="DisplayName_Item_Datapad" xml:space="preserve">
    <value>Datapad</value>
  </data>
  <data name="DisplayName_Item_ZoneChip" xml:space="preserve">
    <value>Zone Chip</value>
  </data>
  <data name="DatapadEditEcreen_Caption" xml:space="preserve">
    <value>Datapad Editor</value>
  </data>
  <data name="DatapadEditScreen_Name" xml:space="preserve">
    <value>Datapad Name: </value>
  </data>
  <data name="Beacon_SafeZone_AllowBuild_TTIP" xml:space="preserve">
    <value>Allow/Disallow Building in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowDmg_TTIP" xml:space="preserve">
    <value>Allow/Disallow Damage in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowDrill_TTIP" xml:space="preserve">
    <value>Allow/Disallow Drilling in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowGrind_TTIP" xml:space="preserve">
    <value>Allow/Disallow Grinding in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowShoot_TTIP" xml:space="preserve">
    <value>Allow/Disallow Shooting in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowVoxel_TTIP" xml:space="preserve">
    <value>Allow/Disallow Voxel modifications in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_AllowWeld_TTIP" xml:space="preserve">
    <value>Allow/Disallow Welding in Safe Zone</value>
  </data>
  <data name="Beacon_SafeZone_FilterBtn_TTIP" xml:space="preserve">
    <value>Setup Safe Zone access</value>
  </data>
  <data name="DatapadEditScreen_Content" xml:space="preserve">
    <value>Content:</value>
  </data>
  <data name="DatapadEditScreen_ContentUsage" xml:space="preserve">
    <value>Bytes used: {0}/{1}</value>
  </data>
  <data name="Beacon_SafeZone_AllowConvertToStation_TTIP" xml:space="preserve">
    <value>Select to allow converting large grids to stations inside the safe zone.</value>
  </data>
  <data name="Beacon_SafeZone_AllowLandingGear_TTIP" xml:space="preserve">
    <value>Select to allow landing gear locking inside the safe zone</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowLandingGear" xml:space="preserve">
    <value>Allow Landing Gear Lock</value>
  </data>
  <data name="Beacon_SafeZone_Shape_TTIP" xml:space="preserve">
    <value>Change shape of safe zone</value>
  </data>
  <data name="ScreenCaptionPlayerTrade" xml:space="preserve">
    <value>Trade</value>
  </data>
  <data name="TradeScreenAccept" xml:space="preserve">
    <value>Accept</value>
  </data>
  <data name="TradeScreenSubmitOffer" xml:space="preserve">
    <value>Submit Offer</value>
  </data>
  <data name="TradeScreenOtherOffer" xml:space="preserve">
    <value>Player's Offer</value>
  </data>
  <data name="TradeScreenYoursInventory" xml:space="preserve">
    <value>Your Inventory</value>
  </data>
  <data name="TradeScreenYoursOffer" xml:space="preserve">
    <value>Your Offer</value>
  </data>
  <data name="Currency_Default_Account_Label" xml:space="preserve">
    <value>Account Balance:</value>
  </data>
  <data name="FactionTerminal_Deposit_Currency" xml:space="preserve">
    <value>Deposit</value>
  </data>
  <data name="FactionTerminal_Deposit_Currency_TTIP" xml:space="preserve">
    <value>Deposit to faction account from personal account</value>
  </data>
  <data name="FactionTerminal_Withdraw_Currency" xml:space="preserve">
    <value>Withdraw</value>
  </data>
  <data name="FactionTerminal_Withdraw_Currency_TTIP" xml:space="preserve">
    <value>Withdraw from faction account to personal account</value>
  </data>
  <data name="ScreenTerminalInventory_VolumeValue" xml:space="preserve">
    <value>{0} L</value>
  </data>
  <data name="Transaction_Form_Amount" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="Transaction_Form_FactionBalance" xml:space="preserve">
    <value>Faction Balance:</value>
  </data>
  <data name="Transaction_Form_FinalBalance" xml:space="preserve">
    <value>Final Balance:</value>
  </data>
  <data name="Transaction_Form_Ok_Btn" xml:space="preserve">
    <value>Ok</value>
  </data>
  <data name="Transaction_Form_Ok_Btn_TTIP" xml:space="preserve">
    <value>Press to confirm transaction</value>
  </data>
  <data name="Transaction_Form_PersonalBalance" xml:space="preserve">
    <value>Personal Balance:</value>
  </data>
  <data name="Beacon_SafeZone_Info_NextUnkeepIn" xml:space="preserve">
    <value>Next Upkeep in: </value>
  </data>
  <data name="Beacon_SafeZone_Info_ZoneChips" xml:space="preserve">
    <value>Zone Chips:</value>
  </data>
  <data name="BlockPropertyTitle_Scale" xml:space="preserve">
    <value>Scale</value>
  </data>
  <data name="DisplayName_Block_Bathroom" xml:space="preserve">
    <value>Bathroom</value>
  </data>
  <data name="DisplayName_Block_BathroomOpen" xml:space="preserve">
    <value>Toilet</value>
  </data>
  <data name="DisplayName_Block_Bed" xml:space="preserve">
    <value>Bed</value>
  </data>
  <data name="DisplayName_Block_CockpitIndustrial" xml:space="preserve">
    <value>Industrial Cockpit</value>
  </data>
  <data name="DisplayName_Block_CockpitFlush" xml:space="preserve">
    <value>Flush Cockpit</value>
  </data>
  <data name="DisplayName_Block_Console" xml:space="preserve">
    <value>Console Block</value>
  </data>
  <data name="DisplayName_Block_Couch" xml:space="preserve">
    <value>Couch</value>
  </data>
  <data name="DisplayName_Block_CouchCorner" xml:space="preserve">
    <value>Corner Couch</value>
  </data>
  <data name="DisplayName_Block_Desk" xml:space="preserve">
    <value>Desk</value>
  </data>
  <data name="DisplayName_Block_DeskCorner" xml:space="preserve">
    <value>Desk Corner</value>
  </data>
  <data name="DisplayName_Block_DeskChairless" xml:space="preserve">
    <value>Chairless Desk</value>
  </data>
  <data name="DisplayName_Block_DeskChairlessCorner" xml:space="preserve">
    <value>Chairless Desk Corner</value>
  </data>
  <data name="DisplayName_Block_LabDeskSeat" xml:space="preserve">
    <value>Lab Desk</value>
  </data>
  <data name="DisplayName_Block_LabDesk" xml:space="preserve">
    <value>Chairless Lab Desk</value>
  </data>
  <data name="DisplayName_Block_LabCornerDesk" xml:space="preserve">
    <value>Chairless Lab Desk Corner Inv</value>
  </data>
  <data name="DisplayName_Block_LabDeskMicroscope" xml:space="preserve">
    <value>Microscope Lab Desk</value>
  </data>
  <data name="DisplayName_Block_LabSink" xml:space="preserve">
    <value>Lab Sink</value>
  </data>
  <data name="DisplayName_Block_LabCabinet" xml:space="preserve">
    <value>Lab Cabinet</value>
  </data>
  <data name="DisplayName_Block_Kitchen" xml:space="preserve">
    <value>Kitchen</value>
  </data>
  <data name="DisplayName_Block_LockerRoom" xml:space="preserve">
    <value>Armory</value>
  </data>
  <data name="DisplayName_Block_Lockers" xml:space="preserve">
    <value>Lockers</value>
  </data>
  <data name="DisplayName_Block_Planters" xml:space="preserve">
    <value>Planters</value>
  </data>
  <data name="DisplayName_Block_Toilet" xml:space="preserve">
    <value>Toilet Seat</value>
  </data>
  <data name="DisplayName_Block_LockerRoomCorner" xml:space="preserve">
    <value>Armory Lockers</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool" xml:space="preserve">
    <value>Replay Tool</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ReloadWorld" xml:space="preserve">
    <value>Reload World</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ReloadWorld_Tooltip" xml:space="preserve">
    <value>Reloads the world.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ReloadWorldClient_Tooltip" xml:space="preserve">
    <value>You cannot reload the world if you are not the host.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ManageCharacters" xml:space="preserve">
    <value>Manage Characters</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_AddCharacter" xml:space="preserve">
    <value>Add Character</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_AddCharacter_Tooltip" xml:space="preserve">
    <value>Adds a new controllable character to the world.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_RemoveCharacter" xml:space="preserve">
    <value>Remove Character</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_RemoveCharacter_Tooltip" xml:space="preserve">
    <value>Removes the currently active character from the world.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ManageRecordings" xml:space="preserve">
    <value>Manage Recordings</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_DeleteRecordings" xml:space="preserve">
    <value>Delete Recordings</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_DeleteRecordings_Tooltip" xml:space="preserve">
    <value>Deletes all current recordings.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_DeleteRecordings_Confirm" xml:space="preserve">
    <value>Please confirm you wish to delete the stored recordings.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Replay" xml:space="preserve">
    <value>Replay</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Replay_Tooltip" xml:space="preserve">
    <value>Starts playing back all stored data.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_RecordAndReplay" xml:space="preserve">
    <value>Record + Replay</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_RecordAndReplay_Tooltip" xml:space="preserve">
    <value>Starts replay of stored data, as well as begins recording data for the current selected character.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_StopRecording" xml:space="preserve">
    <value>Stop Recording</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_StopRecording_Tooltip" xml:space="preserve">
    <value>Stops recording for the currently selected character.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_StopReplay" xml:space="preserve">
    <value>Stop Replay</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_StopReplay_Tooltip" xml:space="preserve">
    <value>Stops playback of recorded data.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_0" xml:space="preserve">
    <value>How to use the Replay Tool:</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_1" xml:space="preserve">
    <value>1. Add as many characters as you need, then position them how you want them and save the world. </value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_2" xml:space="preserve">
    <value>2. Switch to the character you wish to control using F6.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_3" xml:space="preserve">
    <value>3. Click 'Record + Replay', and move the character as you wish.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_4" xml:space="preserve">
    <value>4. Press escape to stop recording.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_5" xml:space="preserve">
    <value>5. Reload the world, do not save!.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_6" xml:space="preserve">
    <value>6. Repeat from step 2.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_7" xml:space="preserve">
    <value>If you wish to clear the recorded data, press Delete Recordings to start over.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_8" xml:space="preserve">
    <value>If you wish to observe the recorded data, press 'Replay' and watch as the game replays the data.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial_9" xml:space="preserve">
    <value>If you wish to store the recorded data, reload the world, then save the game. Then, it will carry over to other sessions.</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_Tutorial" xml:space="preserve">
    <value>How to use the Replay Tool:
1. Add as many characters as you need, then position them how you want them and save the world. 
2. Switch to the character you wish to control using F6.
3. Click 'Record + Replay', and move the character as you wish.
4. Press escape to stop recording.
5. Reload the world, do not save!.
6. Repeat from step 2.
If you wish to clear the recorded data, press Delete Recordings to start over.
If you wish to observe the recorded data, press 'Replay' and watch as the game replays the data.
If you wish to store the recorded data, reload the world, then save the game. Then, it will carry over to other sessions.
    </value>
  </data>
  <data name="DisplayName_DLC_PreorderPack" xml:space="preserve">
    <value>Pre-order Pack</value>
  </data>
  <data name="DisplayName_DLC_DeluxeEdition" xml:space="preserve">
    <value>Deluxe Edition</value>
  </data>
  <data name="DisplayName_DLC_DecorativeBlocks" xml:space="preserve">
    <value>Decorative Blocks</value>
  </data>
  <data name="DisplayName_DLC_DecorativeBlocks2" xml:space="preserve">
    <value>Decorative Blocks 2</value>
  </data>
  <data name="DisplayName_DLC_StylePack" xml:space="preserve">
    <value>Style Pack</value>
  </data>
  <data name="DisplayName_DLC_Frostbite" xml:space="preserve">
    <value>Frostbite</value>
  </data>
  <data name="DisplayName_DLC_SparksOfTheFuture" xml:space="preserve">
    <value>Sparks Of The Future</value>
  </data>
  <data name="DisplayName_DLC_ScrapRace" xml:space="preserve">
    <value>Wasteland</value>
  </data>
  <data name="SimpleNewGame_Frostbite_Description" xml:space="preserve">
    <value>You are a member of a salvage crew, which has been tasked by a mysterious client to acquire something extremely valuable (yet unknown) on Triton. Play solo or with up to four players; explore this moon’s frigid landscape and remarkable architecture, and overcome numerous engineering challenges as you uncover this world’s secrets.</value>
  </data>
  <data name="DisplayName_InventoryConstraint_PersonalItems" xml:space="preserve">
    <value>Tools, Weapons, Ammo, and personal items</value>
  </data>
  <data name="DisplayName_TSS_ClockAnalog" xml:space="preserve">
    <value>Analog Clock</value>
  </data>
  <data name="DisplayName_TSS_Weather" xml:space="preserve">
    <value>Weather</value>
  </data>
  <data name="DisplayName_TSS_Weather_Thunderstorm" xml:space="preserve">
    <value>Thunderstorm</value>
  </data>
  <data name="DisplayName_TSS_Weather_Rain" xml:space="preserve">
    <value>Rain</value>
  </data>
  <data name="DisplayName_TSS_Weather_Snow" xml:space="preserve">
    <value>Snow</value>
  </data>
  <data name="DisplayName_TSS_Weather_MarsSnow" xml:space="preserve">
    <value>Dry Ice Snow</value>
  </data>
  <data name="DisplayName_TSS_Weather_Sandstorm" xml:space="preserve">
    <value>Sandstorm</value>
  </data>
  <data name="DisplayName_TSS_Weather_Fog" xml:space="preserve">
    <value>Fog</value>
  </data>
  <data name="DisplayName_TSS_Weather_Dust" xml:space="preserve">
    <value>Dust</value>
  </data>
  <data name="DisplayName_TSS_Description" xml:space="preserve">
    <value>Description</value>
  </data>
  <data name="Description_DLC_DecorativeBlocks" xml:space="preserve">
    <value>*** Description of decorative blocks DLC ***</value>
  </data>
  <data name="Description_DLC_DecorativeBlocks2" xml:space="preserve">
    <value>*** Description of decorative blocks 2 DLC ***</value>
  </data>
  <data name="Description_DLC_StylePack" xml:space="preserve">
    <value>*** Description of style pack DLC ***</value>
  </data>
  <data name="Description_DLC_Frostbite" xml:space="preserve">
    <value>*** Description of Frostbite DLC ***</value>
  </data>
  <data name="Description_DLC_SparksOfTheFuture" xml:space="preserve">
    <value>*** Description of Sparks Of The Future DLC ***</value>
  </data>
  <data name="Description_DLC_ScrapRace" xml:space="preserve">
    <value>*** Description of Wasteland ***</value>
  </data>
  <data name="DisplayName_TSS_ClockDigital" xml:space="preserve">
    <value>Digital Clock</value>
  </data>
  <data name="DisplayName_TSS_Velocity" xml:space="preserve">
    <value>Velocity</value>
  </data>
  <data name="DisplayName_TSS_Gravity" xml:space="preserve">
    <value>Gravity</value>
  </data>
  <data name="TSS_Weather" xml:space="preserve">
    <value>Weather</value>
  </data>
  <data name="DisplayName_TSS_EnergyHydrogen" xml:space="preserve">
    <value>Energy and Hydrogen</value>
  </data>
  <data name="DisplayName_TSS_ArtificialHorizon" xml:space="preserve">
    <value>Artificial Horizon</value>
  </data>
  <data name="DisplayName_TSS_ArtificialHorizon_AltitudeWarning" xml:space="preserve">
    <value>ALTITUDE</value>
  </data>
  <data name="Description_DLC_PreorderPack" xml:space="preserve">
    <value>*** Description of pre-order pack DLC ***</value>
  </data>
  <data name="Description_DLC_DeluxeEdition" xml:space="preserve">
    <value>*** Description of deluxe edition DLC ***</value>
  </data>
  <data name="DisplayName_Screen_ProjectionArea" xml:space="preserve">
    <value>Projection Area</value>
  </data>
  <data name="DisplayName_Screen_Large" xml:space="preserve">
    <value>Large Display</value>
  </data>
  <data name="DisplayName_Screen_Keyboard" xml:space="preserve">
    <value>Keyboard</value>
  </data>
  <data name="DisplayName_Screen_Numpad" xml:space="preserve">
    <value>Numpad</value>
  </data>
  <data name="DisplayName_Screen_TopCenter" xml:space="preserve">
    <value>Top Center Screen</value>
  </data>
  <data name="DisplayName_Screen_BottomCenter" xml:space="preserve">
    <value>Bottom Center Screen</value>
  </data>
  <data name="DisplayName_Screen_TopLeft" xml:space="preserve">
    <value>Top Left Screen</value>
  </data>
  <data name="DisplayName_Screen_BottomLeft" xml:space="preserve">
    <value>Bottom Left Screen</value>
  </data>
  <data name="DisplayName_Screen_TopRight" xml:space="preserve">
    <value>Top Right Screen</value>
  </data>
  <data name="DisplayName_Screen_BottomRight" xml:space="preserve">
    <value>Bottom Right Screen</value>
  </data>
  <data name="Notification_ActivationFailed" xml:space="preserve">
    <value>Activation failed</value>
  </data>
  <data name="ToolTipTerminalInventory_AddComponents" xml:space="preserve">
    <value>Add components from Build Planner to production queue

Shortcuts for conveyor port interaction: 
Shift+{0} - Add components to production
Shift+Ctrl+{0} - Add components to production 10x</value>
  </data>
  <data name="ToolTipTerminalInventory_AddComponents_Controller" xml:space="preserve">
    <value>Add components from Build Planner to production queue</value>
  </data>
  <data name="ToolTipTerminalInventory_AddSelectedComponent" xml:space="preserve">
    <value>Add selected component to production queue</value>
  </data>
  <data name="ToolTipTerminalInventory_Deposit" xml:space="preserve">
    <value>Deposit all ores, ingots and components

Shortcuts for conveyor port interaction: 
Alt+{0} - Deposit all ores, ingots and components</value>
  </data>
  <data name="ToolTipTerminalInventory_Withdraw" xml:space="preserve">
    <value>Withdraw components for Build Planner
Hold Ctrl for x10 amount.

Shortcuts for conveyor port interaction: 
{0} - Default withdraw
Ctrl+{0} - Withdraw 10x and keep block in Build Planner
Alt+Ctrl+{0} - Withdraw and keep block in Build Planner</value>
  </data>
  <data name="ToolTipTerminalInventory_Withdraw_Controller" xml:space="preserve">
    <value>Withdraw components for Build Planner</value>
  </data>
  <data name="DisplayName_BlueprintClass_BuildPlanner" xml:space="preserve">
    <value>Build Planner</value>
  </data>
  <data name="NotificationDepositFailed" xml:space="preserve">
    <value>{0} component(s) could not be deposited.</value>
  </data>
  <data name="NotificationDepositSuccessful" xml:space="preserve">
    <value>All possible components were deposited.</value>
  </data>
  <data name="NotificationPutToProductionFailed" xml:space="preserve">
    <value>{0} component(s) could not be put to production.</value>
  </data>
  <data name="NotificationPutToProductionSuccessful" xml:space="preserve">
    <value>All components were successfully put to production.</value>
  </data>
  <data name="NotificationBuildPlannerEmpty" xml:space="preserve">
    <value>Build Planner is empty. Open Toolbar screen {0}  to add some items to Build Planner.</value>
  </data>
  <data name="NotificationWithdrawFailed1" xml:space="preserve">
    <value>Cannot withdraw {0} {1}(s).</value>
  </data>
  <data name="NotificationWithdrawFailed2" xml:space="preserve">
    <value>Cannot withdraw {0} {1}(s) and {2} {3}(s).</value>
  </data>
  <data name="NotificationWithdrawFailed3" xml:space="preserve">
    <value>Cannot withdraw {0} {1}(s), {2} {3}(s) and {4} {5}(s).</value>
  </data>
  <data name="NotificationWithdrawFailed4More" xml:space="preserve">
    <value>Cannot withdraw {0} {1}(s), {2} {3}(s), {4} {5}(s) and {6} other components.</value>
  </data>
  <data name="NotificationWithdrawSuccessful" xml:space="preserve">
    <value>All components were successfully withdrawn.</value>
  </data>
  <data name="TooltipBuildScreen_BuildPlanner" xml:space="preserve">
    <value>Click to add selected block variant or drag and drop the block here.
MMB on a block to quickly add it to the Build Planner.</value>
  </data>
  <data name="BuildPlanner" xml:space="preserve">
    <value>Build Planner</value>
  </data>
  <data name="BuildPlannerCapacityReached" xml:space="preserve">
    <value>Build planner capacity reached. Components not added.</value>
  </data>
  <data name="BuildPlannerComponentsAdded" xml:space="preserve">
    <value>Components added to Build Planner.</value>
  </data>
  <data name="DisplayName_EmoteAngry" xml:space="preserve">
    <value>Angry</value>
  </data>
  <data name="DisplayName_EmoteAssistStop" xml:space="preserve">
    <value>Assist Stop</value>
  </data>
  <data name="DisplayName_EmoteAssistCome" xml:space="preserve">
    <value>Assist Come Closer</value>
  </data>
  <data name="DisplayName_EmoteDance" xml:space="preserve">
    <value>Dance</value>
  </data>
  <data name="DisplayName_EmotePointAggressive" xml:space="preserve">
    <value>Aggressive Point</value>
  </data>
  <data name="DisplayName_EmotePointBack" xml:space="preserve">
    <value>Point Back</value>
  </data>
  <data name="DisplayName_EmotePointDown" xml:space="preserve">
    <value>Point Down</value>
  </data>
  <data name="ScreenDebugAdminMenu_SafeZones_AllowConvertToStation" xml:space="preserve">
    <value>Allow Conversion to station</value>
  </data>
  <data name="DisplayName_EmotePointForward" xml:space="preserve">
    <value>Point Forward</value>
  </data>
  <data name="DisplayName_EmotePointLeft" xml:space="preserve">
    <value>Point Left</value>
  </data>
  <data name="DisplayName_EmotePointRight" xml:space="preserve">
    <value>Point Right</value>
  </data>
  <data name="DisplayName_EmoteCold" xml:space="preserve">
    <value>Cold</value>
  </data>
  <data name="DisplayName_EmoteCheckWrist" xml:space="preserve">
    <value>Check Wrist</value>
  </data>
  <data name="DisplayName_EmoteFYou" xml:space="preserve">
    <value>Bite Me</value>
  </data>
  <data name="DisplayName_EmoteDrunk" xml:space="preserve">
    <value>Drunk</value>
  </data>
  <data name="DisplayName_EmoteRPS" xml:space="preserve">
    <value>Rock Paper Scissors</value>
  </data>
  <data name="DisplayName_EmoteCharge" xml:space="preserve">
    <value>Charge</value>
  </data>
  <data name="DisplayName_EmoteComeHereBaby" xml:space="preserve">
    <value>Come Here Baby</value>
  </data>
  <data name="DisplayName_DanceDisco1" xml:space="preserve">
    <value>Dance Disco 1</value>
  </data>
  <data name="DisplayName_DanceDisco2" xml:space="preserve">
    <value>Dance Disco 2</value>
  </data>
  <data name="DisplayName_LookingAround" xml:space="preserve">
    <value>Looking Around</value>
  </data>
  <data name="DisplayName_Stretching" xml:space="preserve">
    <value>Stretching</value>
  </data>
  <data name="DisplayName_Whatever" xml:space="preserve">
    <value>Whatever</value>
  </data>
  <data name="DisplayName_FingerGuns" xml:space="preserve">
    <value>Finger Guns</value>
  </data>
  <data name="DisplayName_Yelling" xml:space="preserve">
    <value>Yelling</value>
  </data>
  <data name="DisplayName_GotHit" xml:space="preserve">
    <value>Got Hit</value>
  </data>
  <data name="BuildPlanner_Controls" xml:space="preserve">
    <value>Inventory terminal controls</value>
  </data>
  <data name="BuildPlanner_DepositAll" xml:space="preserve">
    <value>Deposit all</value>
  </data>
  <data name="BuildPlanner_Description" xml:space="preserve">
    <value>Build Planner helps you to manage required components for your build. It also helps you with grabbing them from inventories or queueing for production.</value>
  </data>
  <data name="BuildPlanner_Put10ToProduction" xml:space="preserve">
    <value>Put x10 to production</value>
  </data>
  <data name="BuildPlanner_PutToProduction" xml:space="preserve">
    <value>Put to production</value>
  </data>
  <data name="BuildPlanner_Withdraw" xml:space="preserve">
    <value>Withdraw</value>
  </data>
  <data name="BuildPlanner_Withdraw10Keep" xml:space="preserve">
    <value>Withdraw x10 and keep</value>
  </data>
  <data name="BuildPlanner_WithdrawKeep" xml:space="preserve">
    <value>Withdraw and keep</value>
  </data>
  <data name="NotificationHintPressToWithdraw" xml:space="preserve">
    <value>Press {0} to withdraw components from {1}</value>
  </data>
  <data name="DisplayName_BlockGroup_MiscGroup" xml:space="preserve">
    <value>Miscellaneous Blocks</value>
  </data>
  <data name="Description_BlockGroup_MiscGroup" xml:space="preserve">
    <value>Uncategorized hidden blocks.</value>
  </data>
  <data name="DisplayName_BlockGroup_ArmorLightRampGroup" xml:space="preserve">
    <value>Light Armor Ramps</value>
  </data>
  <data name="DisplayName_BlockGroup_ArmorLightRampCornerGroup" xml:space="preserve">
    <value>Light Armor Ramp Corners</value>
  </data>
  <data name="DisplayName_BlockGroup_ArmorHeavyRampGroup" xml:space="preserve">
    <value>Heavy Armor Ramps</value>
  </data>
  <data name="DisplayName_BlockGroup_ArmorHeavyRampCornerGroup" xml:space="preserve">
    <value>Heavy Armor Ramp Corners</value>
  </data>
  <data name="DisplayName_BlockGroup_UpgradeModuleGroup" xml:space="preserve">
    <value>Upgrade Modules</value>
  </data>
  <data name="Description_BlockGroup_UpgradeModuleGroup" xml:space="preserve">
    <value>Various upgrade modules for production blocks, like refinery or assembler.</value>
  </data>
  <data name="DisplayName_BlockGroup_EnergyRenewableGroup" xml:space="preserve">
    <value>Renewable Energy Sources</value>
  </data>
  <data name="Description_BlockGroup_EnergyRenewableGroup" xml:space="preserve">
    <value>Power provider blocks, that are draining energy from renewable sources: wind and sun.</value>
  </data>
  <data name="DisplayName_BlockGroup_EnergyFueledGroup" xml:space="preserve">
    <value>Fueled Energy Sources</value>
  </data>
  <data name="Description_BlockGroup_EnergyFueledGroup" xml:space="preserve">
    <value>Power provide blocks, that are consuming some kind of fuel in order to generate energy.</value>
  </data>
  <data name="DisplayName_BlockGroup_MedicalGroup" xml:space="preserve">
    <value>Medical Blocks</value>
  </data>
  <data name="Description_BlockGroup_MedicalGroup" xml:space="preserve">
    <value>Blocks that are responsible for preserving character's health.</value>
  </data>
  <data name="DisplayName_BlockGroup_TankGroup" xml:space="preserve">
    <value>Gas Tanks</value>
  </data>
  <data name="Description_BlockGroup_TankGroup" xml:space="preserve">
    <value>Tanks are used to store gases.</value>
  </data>
  <data name="DisplayName_BlockGroup_ContainerGroup" xml:space="preserve">
    <value>Cargo Containers</value>
  </data>
  <data name="Description_BlockGroup_ContainerGroup" xml:space="preserve">
    <value>Universal storage blocks.</value>
  </data>
  <data name="DisplayName_BlockGroup_InputOutputGroup" xml:space="preserve">
    <value>Inputs/Outputs</value>
  </data>
  <data name="Description_BlockGroup_InputOutputGroup" xml:space="preserve">
    <value>Blocks that are responsible for input and output from conveyor system.</value>
  </data>
  <data name="DisplayName_BlockGroup_WheelStaticGroup" xml:space="preserve">
    <value>Static Wheels</value>
  </data>
  <data name="DisplayName_BlockGroup_ShipToolGroup" xml:space="preserve">
    <value>Ship Tools</value>
  </data>
  <data name="Description_BlockGroup_ShipToolGroup" xml:space="preserve">
    <value>Ship equipment blocks.</value>
  </data>
  <data name="DisplayName_BlockGroup_ShipWeaponStaticGroup" xml:space="preserve">
    <value>Stationary Weapons</value>
  </data>
  <data name="Description_BlockGroup_ShipWeaponStaticGroup" xml:space="preserve">
    <value>Static weapon blocks.</value>
  </data>
  <data name="DisplayName_BlockGroup_TurretGroup" xml:space="preserve">
    <value>Turreted Weapons</value>
  </data>
  <data name="Description_BlockGroup_TurretGroup" xml:space="preserve">
    <value>Weaponized turrets with own targeting AI.</value>
  </data>
  <data name="DisplayName_BlockGroup_AntennaGroup" xml:space="preserve">
    <value>Communication Blocks</value>
  </data>
  <data name="Description_BlockGroup_AntennaGroup" xml:space="preserve">
    <value>Blocks responsible for communication and remote connection.</value>
  </data>
  <data name="DisplayName_BlockGroup_LCDGroup" xml:space="preserve">
    <value>LCD Screens</value>
  </data>
  <data name="Description_BlockGroup_LCDGroup" xml:space="preserve">
    <value>LCD Screens of various sizes and formats.</value>
  </data>
  <data name="DisplayName_BlockGroup_LCDCornerGroup" xml:space="preserve">
    <value>Corner LCD Screens</value>
  </data>
  <data name="DisplayName_BlockGroup_LightingGroup" xml:space="preserve">
    <value>Lighting</value>
  </data>
  <data name="Description_BlockGroup_LightingGroup" xml:space="preserve">
    <value>Various sources of light.</value>
  </data>
  <data name="DisplayName_BlockGroup_SeatsGroup" xml:space="preserve">
    <value>Seats</value>
  </data>
  <data name="Description_BlockGroup_SeatsGroup" xml:space="preserve">
    <value>Various seats and beds for character.</value>
  </data>
  <data name="DisplayName_BlockGroup_InteriorStructureGroup" xml:space="preserve">
    <value>Interior Structure</value>
  </data>
  <data name="Description_BlockGroup_InteriorStructureGroup" xml:space="preserve">
    <value>Internal pillars and cover walls.</value>
  </data>
  <data name="DisplayName_BlockGroup_DecorativeUtilityGroup" xml:space="preserve">
    <value>Decorative Utility</value>
  </data>
  <data name="Description_BlockGroup_DecorativeUtilityGroup" xml:space="preserve">
    <value>Various utility blocks for decorative purposes.</value>
  </data>
  <data name="DisplayName_BlockGroup_WindowSmallGroup" xml:space="preserve">
    <value>Small Windows</value>
  </data>
  <data name="DisplayName_BlockGroup_WindowMediumGroup" xml:space="preserve">
    <value>Medium Windows</value>
  </data>
  <data name="DisplayName_BlockGroup_WindowLargeGroup" xml:space="preserve">
    <value>Large Windows</value>
  </data>
  <data name="DisplayName_BlockGroup_WindowSmallCornerGroup" xml:space="preserve">
    <value>Small Corner Windows</value>
  </data>
  <data name="DisplayName_BlockGroup_WindowMediumCornerGroup" xml:space="preserve">
    <value>Medium Corner Windows</value>
  </data>
  <data name="DisplayName_BlockGroup_ShutterGroup" xml:space="preserve">
    <value>Shutters</value>
  </data>
  <data name="DisplayName_BlockGroup_GravityGroup" xml:space="preserve">
    <value>Gravity Blocks</value>
  </data>
  <data name="Description_BlockGroup_GravityGroup" xml:space="preserve">
    <value>Various blocks related to artificial gravity.</value>
  </data>
  <data name="DisplayName_BlockGroup_AutomationGroup" xml:space="preserve">
    <value>Automation Blocks</value>
  </data>
  <data name="Description_BlockGroup_AutomationGroup" xml:space="preserve">
    <value>Various blocks responsible for any kind of automation.</value>
  </data>
  <data name="DisplayName_BlockGroup_LightArmorSlopedCorners" xml:space="preserve">
    <value>Light Armor Sloped Corners</value>
  </data>
  <data name="DisplayName_BlockGroup_HeavyArmorSlopedCorners" xml:space="preserve">
    <value>Heavy Armor Sloped Corners</value>
  </data>
  <data name="RadialMenuGroupTitle_ArmorLight" xml:space="preserve">
    <value>Light Armor</value>
  </data>
  <data name="RadialMenuGroupTitle_ProductionMedical" xml:space="preserve">
    <value>Production &amp; Medical</value>
  </data>
  <data name="RadialMenuGroupTitle_GasLogistics" xml:space="preserve">
    <value>Gas &amp; Logistics</value>
  </data>
  <data name="RadialMenuGroupTitle_ShipEssentials" xml:space="preserve">
    <value>Ship Essentials</value>
  </data>
  <data name="RadialMenuGroupTitle_WheelsWeapons" xml:space="preserve">
    <value>Wheels &amp; Weapons</value>
  </data>
  <data name="RadialMenuGroupTitle_CommsHangars" xml:space="preserve">
    <value>Comms &amp; Hangars</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration" xml:space="preserve">
    <value>Decoration #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration2" xml:space="preserve">
    <value>Decoration #2</value>
  </data>
  <data name="RadialMenuGroupTitle_Windows" xml:space="preserve">
    <value>Windows</value>
  </data>
  <data name="RadialMenuGroupTitle_AdvancedSystems" xml:space="preserve">
    <value>Advanced Systems</value>
  </data>
  <data name="RadialMenuGroupTitle_DecoPack2" xml:space="preserve">
    <value>Deecortive Pack 2</value>
  </data>
  <data name="RadialMenuGroupTitle_QuickActions" xml:space="preserve">
    <value>Quick Actions</value>
  </data>
  <data name="RadialMenuGroupTitle_Menu" xml:space="preserve">
    <value>Menu</value>
  </data>
  <data name="ControlMenuItemLabel_AlienGreenGrass" xml:space="preserve">
    <value>Alien grass green</value>
  </data>
  <data name="ControlMenuItemLabel_AlienGreenGrassBare" xml:space="preserve">
    <value>Alien grass green bare</value>
  </data>
  <data name="ControlMenuItemLabel_AlienIce" xml:space="preserve">
    <value>Alien ice</value>
  </data>
  <data name="ControlMenuItemLabel_AlienIce_03" xml:space="preserve">
    <value>Alien ice 03</value>
  </data>
  <data name="ControlMenuItemLabel_AlienOrangeGrass" xml:space="preserve">
    <value>Alien grass orange</value>
  </data>
  <data name="ControlMenuItemLabel_AlienOrangeGrassBare" xml:space="preserve">
    <value>Alien grass orange bare</value>
  </data>
  <data name="ControlMenuItemLabel_AlienRockGrass" xml:space="preserve">
    <value>Alien grass rock</value>
  </data>
  <data name="ControlMenuItemLabel_AlienRockGrassBare" xml:space="preserve">
    <value>Alient grass rock bare</value>
  </data>
  <data name="ControlMenuItemLabel_AlienRockyMountain" xml:space="preserve">
    <value>Alien rocky mountain</value>
  </data>
  <data name="ControlMenuItemLabel_AlienRockyTerrain" xml:space="preserve">
    <value>Alien rocky terrain</value>
  </data>
  <data name="ControlMenuItemLabel_AlienSand" xml:space="preserve">
    <value>Alien sand</value>
  </data>
  <data name="ControlMenuItemLabel_AlienSnow" xml:space="preserve">
    <value>Alien snow</value>
  </data>
  <data name="ControlMenuItemLabel_AlienSoil" xml:space="preserve">
    <value>Alien soil</value>
  </data>
  <data name="ControlMenuItemLabel_AlienYellowGrass" xml:space="preserve">
    <value>Alien grass yellow</value>
  </data>
  <data name="ControlMenuItemLabel_AlienYellowGrassBare" xml:space="preserve">
    <value>Alien grass yellow bare</value>
  </data>
  <data name="ControlMenuItemLabel_Cobalt01" xml:space="preserve">
    <value>Cobalt 01</value>
  </data>
  <data name="ControlMenuItemLabel_DebugMaterial" xml:space="preserve">
    <value>Debug material</value>
  </data>
  <data name="ControlMenuItemLabel_DesertRocks" xml:space="preserve">
    <value>Desert rocks</value>
  </data>
  <data name="ControlMenuItemLabel_Gold01" xml:space="preserve">
    <value>Gold 01</value>
  </data>
  <data name="ControlMenuItemLabel_Grass" xml:space="preserve">
    <value>Grass</value>
  </data>
  <data name="ControlMenuItemLabel_Grass02" xml:space="preserve">
    <value>Grass 02</value>
  </data>
  <data name="ControlMenuItemLabel_GrassBare" xml:space="preserve">
    <value>Grass bare</value>
  </data>
  <data name="ControlMenuItemLabel_GrassOld" xml:space="preserve">
    <value>Grass old</value>
  </data>
  <data name="ControlMenuItemLabel_GrassOldBare" xml:space="preserve">
    <value>Grass old bare</value>
  </data>
  <data name="ControlMenuItemLabel_Ice" xml:space="preserve">
    <value>Ice </value>
  </data>
  <data name="ControlMenuItemLabel_Ice01" xml:space="preserve">
    <value>Ice 01</value>
  </data>
  <data name="ControlMenuItemLabel_Ice02" xml:space="preserve">
    <value>Ice 02</value>
  </data>
  <data name="ControlMenuItemLabel_Ice03" xml:space="preserve">
    <value>Ice 03</value>
  </data>
  <data name="ControlMenuItemLabel_IceEuropa2" xml:space="preserve">
    <value>Ice europa 02</value>
  </data>
  <data name="ControlMenuItemLabel_Iron01" xml:space="preserve">
    <value>Iron 01</value>
  </data>
  <data name="ControlMenuItemLabel_Iron_02" xml:space="preserve">
    <value>Iron 02</value>
  </data>
  <data name="ControlMenuItemLabel_Magnesium01" xml:space="preserve">
    <value>Magnesium 01</value>
  </data>
  <data name="ControlMenuItemLabel_MarsRocks" xml:space="preserve">
    <value>Mars rocks</value>
  </data>
  <data name="ControlMenuItemLabel_MarsSoil" xml:space="preserve">
    <value>Mars soil</value>
  </data>
  <data name="ControlMenuItemLabel_MoonRocks" xml:space="preserve">
    <value>Moon rocks</value>
  </data>
  <data name="ControlMenuItemLabel_MoonSoil" xml:space="preserve">
    <value>Moon soil</value>
  </data>
  <data name="ControlMenuItemLabel_Nickel01" xml:space="preserve">
    <value>Nickel 01</value>
  </data>
  <data name="ControlMenuItemLabel_Platinum01" xml:space="preserve">
    <value>Platinum 01</value>
  </data>
  <data name="ControlMenuItemLabel_RocksGrass" xml:space="preserve">
    <value>Rocks grass</value>
  </data>
  <data name="ControlMenuItemLabel_Sand02" xml:space="preserve">
    <value>Sand 02</value>
  </data>
  <data name="ControlMenuItemLabel_Silicon01" xml:space="preserve">
    <value>Silicon 01</value>
  </data>
  <data name="ControlMenuItemLabel_Silver_01" xml:space="preserve">
    <value>Silver 01</value>
  </data>
  <data name="ControlMenuItemLabel_SmallMoonRocks" xml:space="preserve">
    <value>Small moon rocks</value>
  </data>
  <data name="ControlMenuItemLabel_Snow" xml:space="preserve">
    <value>Snow</value>
  </data>
  <data name="ControlMenuItemLabel_Soil" xml:space="preserve">
    <value>Soil</value>
  </data>
  <data name="ControlMenuItemLabel_Stone" xml:space="preserve">
    <value>Stone</value>
  </data>
  <data name="ControlMenuItemLabel_Stone01" xml:space="preserve">
    <value>Stone 01</value>
  </data>
  <data name="ControlMenuItemLabel_Stone02" xml:space="preserve">
    <value>Stone 02</value>
  </data>
  <data name="ControlMenuItemLabel_Stone03" xml:space="preserve">
    <value>Stone 03</value>
  </data>
  <data name="ControlMenuItemLabel_Stone04" xml:space="preserve">
    <value>Stone 04</value>
  </data>
  <data name="ControlMenuItemLabel_Stone05" xml:space="preserve">
    <value>Stone 05</value>
  </data>
  <data name="ControlMenuItemLabel_Uraninite_01" xml:space="preserve">
    <value>Uraninite 01</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelBrushAutoLevel" xml:space="preserve">
    <value>Select Terrain Auto-Level</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelBrushBox" xml:space="preserve">
    <value>Select Box</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelBrushCapsule" xml:space="preserve">
    <value>Select Capsule</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelBrushRamp" xml:space="preserve">
    <value>Select Ramp</value>
  </data>
  <data name="ControlMenuItemLabel_VoxelBrushSphere" xml:space="preserve">
    <value>Select Sphere</value>
  </data>
  <data name="ControlMenuItemLabel_WoodsGrass" xml:space="preserve">
    <value>Woods grass</value>
  </data>
  <data name="ControlMenuItemLabel_WoodsGrassBare" xml:space="preserve">
    <value>Woods grass bare</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelAlien" xml:space="preserve">
    <value>Alien</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelAlienGrass" xml:space="preserve">
    <value>Alien grass</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelDebug" xml:space="preserve">
    <value>Debug</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelGrass" xml:space="preserve">
    <value>Grass</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelHandBrushes" xml:space="preserve">
    <value>Voxel hand</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelOres" xml:space="preserve">
    <value>Ores</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelOres2" xml:space="preserve">
    <value>Ores 2</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelRockSolidSand" xml:space="preserve">
    <value>Rocks, solids, sands</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelStones" xml:space="preserve">
    <value>stones</value>
  </data>
  <data name="BuildPlannerHint" xml:space="preserve">
    <value>Use {0} / {1} to add/remove to/from Build planner</value>
  </data>
  <data name="Notification_PlanetsNotSupported" xml:space="preserve">
    <value>Planets are not supported on this platform</value>
  </data>
  <data name="Notification_PlanetsTooBig" xml:space="preserve">
    <value>Planet is too big</value>
  </data>
  <data name="Notification_PlanetNotWhitelisted" xml:space="preserve">
    <value>New planet of type {0} would exceed limits of this scenario</value>
  </data>
  <data name="Notification_TooManyPlanets" xml:space="preserve">
    <value>World contains too many planet types and could not be loaded.</value>
  </data>
  <data name="Notification_TooManyVoxelMaterials" xml:space="preserve">
    <value>World contains too many voxel materials and could not be loaded.
Please remove recently added mods containing additional voxel materials (planets, asteroids, ores etc.)</value>
  </data>
  <data name="Notification_TooManyUncounterPCUWarning" xml:space="preserve">
    <value>World contains too many uncounted PCUs and may be be unstable.</value>
  </data>
  <data name="Notification_TooManyUncounterPCUError" xml:space="preserve">
    <value>World contains too many uncounted PCUs and could not be loaded.</value>
  </data>
  <data name="Notification_TooManyUncounterPCUReport" xml:space="preserve">
    <value>Do you want to report this world?</value>
  </data>
  <data name="Terminal_Factions_DataNotAvailable" xml:space="preserve">
    <value>Not Available</value>
  </data>
  <data name="Terminal_Factions_Unknown_Label" xml:space="preserve">
    <value>Undiscovered</value>
  </data>
  <data name="Terminal_Factions_Unknown_Tag" xml:space="preserve">
    <value>----</value>
  </data>
  <data name="Terminal_Factions_Unknown_Label_TTIP" xml:space="preserve">
    <value>Faction not discovered. Data is not available.</value>
  </data>
  <data name="ScreenCaptionStore" xml:space="preserve">
    <value>Store</value>
  </data>
  <data name="StoreScreenBuyHeader" xml:space="preserve">
    <value>Buy</value>
  </data>
  <data name="StoreScreenContractsHeader" xml:space="preserve">
    <value>Contracts</value>
  </data>
  <data name="StoreScreenSellHeader" xml:space="preserve">
    <value>Sell</value>
  </data>
  <data name="ToolTipWorldSettingsEconomy" xml:space="preserve">
    <value>Enables economy features.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableWeatherSystem" xml:space="preserve">
    <value>Enables automatic weather generation on planets.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableLightningDamage" xml:space="preserve">
    <value>Lightning strikes from weather can damage grids.</value>
  </data>
  <data name="ToolTipWorldSettingsEnableGamepadAimAssist" xml:space="preserve">
    <value>Enables aim assist for controllers.</value>
  </data>
  <data name="WorldSettings_EnableEconomy" xml:space="preserve">
    <value>Enable economy</value>
  </data>
  <data name="WorldSettings_EnableWeatherSystem" xml:space="preserve">
    <value>Enable weather system</value>
  </data>
  <data name="WorldSettings_EnableLightningDamage" xml:space="preserve">
    <value>Enable lightning damage</value>
  </data>
  <data name="WorldSettings_EnableGamepadAimAssist" xml:space="preserve">
    <value>Enable aim assist</value>
  </data>
  <data name="EconomyFaction_Description_Builder" xml:space="preserve">
    <value>Come and browse our selection of the finest ships available to us. We deliver top quality ships made from the highest grade materials.</value>
  </data>
  <data name="EconomyFaction_Description_Miner" xml:space="preserve">
    <value>No. 1 supplier of high grade minerals and gases. Everything to fuel your industrial advancements. </value>
  </data>
  <data name="EconomyFaction_Description_Trader" xml:space="preserve">
    <value>If you can build with it, we sell it. If you can shoot with it, we sell that too. </value>
  </data>
  <data name="EconomyFaction_Description_Builder0" xml:space="preserve">
    <value>The best choice for reliable ships of industrial grade. We offer the finest quality money can buy.</value>
  </data>
  <data name="EconomyFaction_Description_Builder1" xml:space="preserve">
    <value>Top manufacturer of ships for the best prices. We offer excellent service that fit your needs.</value>
  </data>
  <data name="EconomyFaction_Description_Builder2" xml:space="preserve">
    <value>Reliable, durable, Safe. These words mark our selection of our terrestrial and extraterrestrial vehicles. </value>
  </data>
  <data name="EconomyFaction_Description_Builder3" xml:space="preserve">
    <value>Cutting edge technologies bring you the best quality through our shipyards, delivering competitive advantage to you over your competitors. </value>
  </data>
  <data name="EconomyFaction_Description_Builder4" xml:space="preserve">
    <value>Number one producer of vehicles for industrial, military, mining and exploration aplications. </value>
  </data>
  <data name="EconomyFaction_Description_Miner0" xml:space="preserve">
    <value>For the highest grade of minerals and gases come visit us. </value>
  </data>
  <data name="EconomyFaction_Description_Miner1" xml:space="preserve">
    <value>We procure all manner of ores and gases, so you don't have to.</value>
  </data>
  <data name="EconomyFaction_Description_Miner2" xml:space="preserve">
    <value>Finest ore and purest gases. Nothing but the best for our customers.</value>
  </data>
  <data name="EconomyFaction_Description_Miner3" xml:space="preserve">
    <value>We offer every raw material the galaxy has to offer. Except water. No one can seem to find water.</value>
  </data>
  <data name="EconomyFaction_Description_Miner4" xml:space="preserve">
    <value>Our industrial equipment and trained personnel bring you the finest quality ores and gases for the best prices.</value>
  </data>
  <data name="EconomyFaction_Description_Trader0" xml:space="preserve">
    <value>You want it, we've got it. Top supplier of components, tools and gases.</value>
  </data>
  <data name="EconomyFaction_Description_Trader1" xml:space="preserve">
    <value>Our partners deliver us the highest quality components, tools, gases and contracts. From the outer regions of space directly to you.</value>
  </data>
  <data name="EconomyFaction_Description_Trader2" xml:space="preserve">
    <value>We deliver durable components and the best quality tools. Our services include fuel, oxygen and contracts from reliable partners. </value>
  </data>
  <data name="EconomyFaction_Description_Trader3" xml:space="preserve">
    <value>Components, Munitions, Tools, and Fuel. You name it. Become a partner for the best offers, we will make it worth your while.</value>
  </data>
  <data name="EconomyFaction_Description_Trader4" xml:space="preserve">
    <value>We offer all the essentials for your space industrial advancements and more. </value>
  </data>
  <data name="TerminalTab_Factions_Reputation" xml:space="preserve">
    <value>Reputation:</value>
  </data>
  <data name="TradeScreenAccepted" xml:space="preserve">
    <value>Accepted</value>
  </data>
  <data name="TradeScreenCancel" xml:space="preserve">
    <value>Cancel</value>
  </data>
  <data name="TradeScreenNotAccepted" xml:space="preserve">
    <value>Not Accepted</value>
  </data>
  <data name="TradeScreenOfferSubmited" xml:space="preserve">
    <value>Offer Submitted</value>
  </data>
  <data name="TradeScreenPopupAcceptTrade" xml:space="preserve">
    <value>Do you want to trade with {0}?</value>
  </data>
  <data name="TradeScreenPopupAlreadyTrading" xml:space="preserve">
    <value>Player is already trading</value>
  </data>
  <data name="TradeScreenPopupCancel" xml:space="preserve">
    <value>Player canceled the trade.</value>
  </data>
  <data name="TradeScreenPopupCancelMissingItems" xml:space="preserve">
    <value>Player is missing items for trade. Trade canceled.</value>
  </data>
  <data name="TradeScreenPopupDead" xml:space="preserve">
    <value>Player not available</value>
  </data>
  <data name="TradeScreenPopupError" xml:space="preserve">
    <value>Something went wrong. Try again.</value>
  </data>
  <data name="TradeScreenPopupLabel" xml:space="preserve">
    <value>Trading</value>
  </data>
  <data name="TradeScreenPopupOffline" xml:space="preserve">
    <value>Player Offline</value>
  </data>
  <data name="Faction_Filter_Discovered" xml:space="preserve">
    <value>Discovered</value>
  </data>
  <data name="Faction_Filter_PlayersFactions" xml:space="preserve">
    <value>Players Factions</value>
  </data>
  <data name="Faction_Filter_Unknown" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="PlayersScreen_LobbyType" xml:space="preserve">
    <value>Lobby Type:</value>
  </data>
  <data name="PlayersScreen_TradeBtn" xml:space="preserve">
    <value>Trade</value>
  </data>
  <data name="PlayersScreen_TradeBtn_TTP" xml:space="preserve">
    <value>Initiate trade with player. Be sure that player is in range of 5 meters from you.</value>
  </data>
  <data name="PlayersScreen_TradeBtn_Waiting" xml:space="preserve">
    <value>Waiting...</value>
  </data>
  <data name="ScreenOptionsGame_GeneralTab" xml:space="preserve">
    <value>General</value>
  </data>
  <data name="ScreenOptionsGame_UITab" xml:space="preserve">
    <value>UI</value>
  </data>
  <data name="ScreenOptionsGame_CrosshairTransparency" xml:space="preserve">
    <value>Transparency:</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicatorLabel" xml:space="preserve">
    <value>Select hit type</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicatorTooltip" xml:space="preserve">
    <value>You can setup crosshair look for each hit types</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicator_Character" xml:space="preserve">
    <value>Enemy</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicator_Friendly" xml:space="preserve">
    <value>Friendly</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicator_Headshot" xml:space="preserve">
    <value>Headshot</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicator_Kill" xml:space="preserve">
    <value>Kill</value>
  </data>
  <data name="ScreenOptionsGame_HitIndicator_Grid" xml:space="preserve">
    <value>Grid</value>
  </data>
  <data name="ScreenOptionsGame_CrosshairColor" xml:space="preserve">
    <value>Crosshair Color</value>
  </data>
  <data name="GameOptions_EnableTrading" xml:space="preserve">
    <value>Enable Trading</value>
  </data>
  <data name="GameOptions_EnableTrading_TTIP" xml:space="preserve">
    <value>Enables trading with other players in multiplayer games. If disabled all trade requests are ignored</value>
  </data>
  <data name="DisplayName_Item_Package" xml:space="preserve">
    <value>Package</value>
  </data>
  <data name="Faction_Discovered_Info" xml:space="preserve">
    <value>You discovered {0}</value>
  </data>
  <data name="Description_SafeZone" xml:space="preserve">
    <value>Projects safe zone around itself. Safe zone can be used to protect your assets</value>
  </data>
  <data name="DisplayName_Block_SafeZone" xml:space="preserve">
    <value>Safe Zone</value>
  </data>
  <data name="ScreenCaptionContracts" xml:space="preserve">
    <value>Contracts</value>
  </data>
  <data name="NotificationHintPressToOpenStore" xml:space="preserve">
    <value>Press {0} to open store</value>
  </data>
  <data name="Description_ContractBlock" xml:space="preserve">
    <value>Block for contract management</value>
  </data>
  <data name="DisplayName_Block_Contract" xml:space="preserve">
    <value>Contracts</value>
  </data>
  <data name="NotificationHintPressToOpenContract" xml:space="preserve">
    <value>Press {0} to open contract</value>
  </data>
  <data name="IngameHelp_EconomyStation_Desc" xml:space="preserve">
    <value>Economy Stations can appear anywhere in space, on moons, planets and in orbit. These stations offer trade and contracts depending on their respective factions. </value>
  </data>
  <data name="IngameHelp_EconomyStation_DetailDesc" xml:space="preserve">
    <value>Visit the nearest station</value>
  </data>
  <data name="IngameHelp_EconomyStation_Title" xml:space="preserve">
    <value>Good.bot: Economy Stations</value>
  </data>
  <data name="Description_DLC_EconomyExpansion" xml:space="preserve">
    <value>*** Description of Economy Deluxe DLC ***</value>
  </data>
  <data name="DisplayName_DLC_EconomyExpansion" xml:space="preserve">
    <value>Economy Deluxe</value>
  </data>
  <data name="ScreenMainMenu_EconomyDlcLine1" xml:space="preserve">
    <value>Economy Deluxe is now available!</value>
  </data>
  <data name="ScreenMainMenu_EconomyDlcLine2" xml:space="preserve">
    <value>Grab it on {0}!</value>
  </data>
  <data name="ScreenVictory_Title" xml:space="preserve">
    <value>{0} is victorious!</value>
  </data>
  <data name="Contracts_Error_Caption_Abandon" xml:space="preserve">
    <value>Abandon failed</value>
  </data>
  <data name="Contracts_Error_Caption_Activation" xml:space="preserve">
    <value>Accept failed</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_InsufficientFunds" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_InsufficientSpace" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Caption_Finish" xml:space="preserve">
    <value>Finish failed</value>
  </data>
  <data name="Contracts_Error_Caption_FinishCondition_IncorrectGrid" xml:space="preserve">
    <value>Contract finishing failed</value>
  </data>
  <data name="Contracts_Error_Caption_FinishCondition_MissingPackage" xml:space="preserve">
    <value>Contract finishing failed</value>
  </data>
  <data name="Contracts_Error_Caption_FinishingCondition" xml:space="preserve">
    <value>Contract finishing failed</value>
  </data>
  <data name="Contracts_Error_Text_Abandon" xml:space="preserve">
    <value>Contract cannot be abandoned as it has been deleted or finished by someone else.</value>
  </data>
  <data name="Contracts_Error_Text_Activation" xml:space="preserve">
    <value>Contract cannot be accepted because it has been deleted or already accepted by someone else.</value>
  </data>
  <data name="Contracts_Error_Text_ActivationconditionNotMet" xml:space="preserve">
    <value>You do not meet requirements to accept this contract.</value>
  </data>
  <data name="Contracts_Error_Text_ActivationConditionNotMet_InsufficientFunds" xml:space="preserve">
    <value>You do not meet requirements to accept this contract. You have not enough money.</value>
  </data>
  <data name="Contracts_Error_Text_ActivationConditionNotMet_InsufficientSpace" xml:space="preserve">
    <value>You do not meet requirements to accept this contract. You have not enough space in inventory.</value>
  </data>
  <data name="Contracts_Error_Text_Finish" xml:space="preserve">
    <value>Contract cannot be finished as it has been deleted or already finished by someone else.</value>
  </data>
  <data name="Contracts_Error_Text_FinishCondition_IncorrectGrid" xml:space="preserve">
    <value>Contract could not be finished as selected ship was invalid.</value>
  </data>
  <data name="Contracts_Error_Text_FinishCondition_MissingPackage" xml:space="preserve">
    <value>Contract could not be finished. You must carry the package in your inventory.</value>
  </data>
  <data name="Contracts_Error_Text_FinishingCondition" xml:space="preserve">
    <value>Contract could not be finished.</value>
  </data>
  <data name="Contracts_Error_Caption_NoAccess" xml:space="preserve">
    <value>Cannot Access</value>
  </data>
  <data name="Contracts_Error_Text_NoAccess" xml:space="preserve">
    <value>You don't have access to this block.</value>
  </data>
  <data name="Contracts_Error_Caption_FinishCondition_NotEnoughItems" xml:space="preserve">
    <value>Contract finishing failed</value>
  </data>
  <data name="Contracts_Error_Text_FinishCondition_NotEnoughItems" xml:space="preserve">
    <value>Contract could not be finished. Selected inventory does not contain enough of the required items.</value>
  </data>
  <data name="StoreBuy_Error_Caption_ItemNotFound" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Caption_ItemsTimeout" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughMoney" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Caption_WrongAmount" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_ItemNotFound" xml:space="preserve">
    <value>Item no longer exists.</value>
  </data>
  <data name="StoreBuy_Error_Text_ItemsTimeout" xml:space="preserve">
    <value>Store list was updated, because it was not up to date.</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughMoney" xml:space="preserve">
    <value>Transaction failed. You don't have enough money.</value>
  </data>
  <data name="StoreBuy_Error_Text_WrongAmount" xml:space="preserve">
    <value>You have entered wrong amount.</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughInventorySpace" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughInventorySpace" xml:space="preserve">
    <value>There is not enough space in selected inventory.</value>
  </data>
  <data name="StoreBuy_Error_Caption_WrongInventory" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_WrongInventory" xml:space="preserve">
    <value>Selected inventory can not be used to buy this item.</value>
  </data>
  <data name="ContractScreen_Button_Abandon" xml:space="preserve">
    <value>Abandon</value>
  </data>
  <data name="ContractScreen_Button_Accept" xml:space="preserve">
    <value>Accept</value>
  </data>
  <data name="ContractScreen_Button_Confirm" xml:space="preserve">
    <value>Confirm</value>
  </data>
  <data name="ContractScreen_Button_Finish" xml:space="preserve">
    <value>Finish</value>
  </data>
  <data name="ContractScreen_Button_Refresh" xml:space="preserve">
    <value>Refresh</value>
  </data>
  <data name="ContractScreen_Column_Icon" xml:space="preserve">
    <value>Icon</value>
  </data>
  <data name="ContractScreen_Column_Name" xml:space="preserve">
    <value>Name</value>
  </data>
  <data name="ContractScreen_Column_RewardCurrency" xml:space="preserve">
    <value>SC reward</value>
  </data>
  <data name="ContractScreen_Column_RewardReputation" xml:space="preserve">
    <value>Reputation reward</value>
  </data>
  <data name="ContractScreen_Column_TimeLimit" xml:space="preserve">
    <value>Time limit</value>
  </data>
  <data name="ContractScreen_Condition_Name_DeliverItem" xml:space="preserve">
    <value>Deliver Items {0}</value>
  </data>
  <data name="ContractScreen_Condition_Name_DeliverPackage" xml:space="preserve">
    <value>Deliver Package {0}</value>
  </data>
  <data name="ContractScreen_Contract_Name_Deliver_WithId" xml:space="preserve">
    <value>Hauling Contract ({0})</value>
  </data>
  <data name="ContractScreen_Contract_Name_Escort_WithId" xml:space="preserve">
    <value>Escort Contract ({0})</value>
  </data>
  <data name="ContractScreen_Contract_Name_Find_WithId" xml:space="preserve">
    <value>Search Contract ({0})</value>
  </data>
  <data name="ContractScreen_Contract_Name_Hunt_WithId" xml:space="preserve">
    <value>Bounty Contract ({0})</value>
  </data>
  <data name="ContractScreen_Contract_Name_ObtainAndDeliver_WithId" xml:space="preserve">
    <value>Acquisition Contract ({0})</value>
  </data>
  <data name="ContractScreen_Formating_Deposit_None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="ContractScreen_Formating_RepPenalty_None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_Days" xml:space="preserve">
    <value>{0} d  {1:00} h  {2:00} min</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_Hours" xml:space="preserve">
    <value>{0:00} h  {1:00} min</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_Mins" xml:space="preserve">
    <value>{0:00} min</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_No" xml:space="preserve">
    <value>No limit</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_NotStarted" xml:space="preserve">
    <value>Not started</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_Secs" xml:space="preserve">
    <value>{0:00} s</value>
  </data>
  <data name="ContractScreen_Formating_TimeLimit_TimeOut" xml:space="preserve">
    <value>Time's out</value>
  </data>
  <data name="ContractScreen_GridSelection_Caption" xml:space="preserve">
    <value>Vehicle/Character inventory selection</value>
  </data>
  <data name="ContractScreen_GridSelection_Text" xml:space="preserve">
    <value>Select vehicle or character whose inventory contains items for this contract. Items will be removed from inventories of the selected one. You may select only yourself or vehicles you own.</value>
  </data>
  <data name="ContractScreen_Tab_AcceptedContracts" xml:space="preserve">
    <value>Accepted Contracts</value>
  </data>
  <data name="ContractScreen_Tab_Administration" xml:space="preserve">
    <value>Administration</value>
  </data>
  <data name="ContractScreen_Tab_AvailableContracts" xml:space="preserve">
    <value>Available Contracts</value>
  </data>
  <data name="ContractScreen_Tooltip_Currency" xml:space="preserve">
    <value>Payment: </value>
  </data>
  <data name="ContractScreen_Tooltip_Duration" xml:space="preserve">
    <value>Duration: </value>
  </data>
  <data name="ContractScreen_Tooltip_FailReputationPenalty" xml:space="preserve">
    <value>Fail reputation penalty: </value>
  </data>
  <data name="ContractScreen_Tooltip_InitialDeposit" xml:space="preserve">
    <value>Collateral:</value>
  </data>
  <data name="ContractScreen_Tooltip_Name" xml:space="preserve">
    <value>Name: </value>
  </data>
  <data name="ContractScreen_Tooltip_Reputation" xml:space="preserve">
    <value>Reputation reward: </value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_ContractLimitReached" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Text_ActivationConditionNotMet_ContractLimitReached" xml:space="preserve">
    <value>You have too many contracts. Finish or abandon some before you can accept another.</value>
  </data>
  <data name="ContractSystem_Notifications_ContractFailed" xml:space="preserve">
    <value>Contract failed.</value>
  </data>
  <data name="ContractSystem_Notifications_ContractSuccess" xml:space="preserve">
    <value>Contract was successfully finished.</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_TargetOffline" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Text_ActivationConditionNotMet_TargetOffline" xml:space="preserve">
    <value>You cannot accept this contract as target is currently not online.</value>
  </data>
  <data name="StoreSell_Error_Caption_NotEnoughAmount" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreSell_Error_Caption_WrongAmount" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreSell_Error_Text_NotEnoughAmount" xml:space="preserve">
    <value>You don't have specified amount of that item.</value>
  </data>
  <data name="StoreSell_Error_Text_WrongAmount" xml:space="preserve">
    <value>You are trying to sell more than current amount of the store item.</value>
  </data>
  <data name="StoreAdministration" xml:space="preserve">
    <value>Administration</value>
  </data>
  <data name="StoreBlock_Column_Amount" xml:space="preserve">
    <value>Amount</value>
  </data>
  <data name="StoreBlock_Column_Name" xml:space="preserve">
    <value>Name</value>
  </data>
  <data name="StoreBlock_Column_PricePerUnit" xml:space="preserve">
    <value>Price per Unit</value>
  </data>
  <data name="StoreBlock_Column_TotalPrice" xml:space="preserve">
    <value>Total Price</value>
  </data>
  <data name="ButtonEditFactionBanner_Cancel" xml:space="preserve">
    <value>Cancel</value>
  </data>
  <data name="ButtonEditFactionBanner_OK" xml:space="preserve">
    <value>Ok</value>
  </data>
  <data name="ScreenCaptionEditFaction" xml:space="preserve">
    <value>Edit logo</value>
  </data>
  <data name="StoreBuy_Error_Caption_FreePositionNotFound" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Caption_SpawnFailed" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_FreePositionNotFound" xml:space="preserve">
    <value>There is not enough free space around the station to spawn the vehicle.</value>
  </data>
  <data name="StoreBuy_Error_Text_SpawnFailed" xml:space="preserve">
    <value>Vehicle was not unable to spawn.</value>
  </data>
  <data name="Datapad_GPS_Data" xml:space="preserve">
    <value>{0} - Station</value>
  </data>
  <data name="Datapad_GPS_Name" xml:space="preserve">
    <value>GPS {0} - Station</value>
  </data>
  <data name="EditFaction_HueSliderText" xml:space="preserve">
    <value>Hue:</value>
  </data>
  <data name="EditFaction_SaturationSliderText" xml:space="preserve">
    <value>Saturation:</value>
  </data>
  <data name="EditFaction_ValueSliderText" xml:space="preserve">
    <value>Value:</value>
  </data>
  <data name="TradeScreenMoney" xml:space="preserve">
    <value>Money:</value>
  </data>
  <data name="TradeScreenOfferState" xml:space="preserve">
    <value>Offer State:</value>
  </data>
  <data name="TradeScreenPcu" xml:space="preserve">
    <value>PCU:</value>
  </data>
  <data name="Contracts_Accepted_Caption" xml:space="preserve">
    <value>Contract Accepted</value>
  </data>
  <data name="Contracts_Accepted_Text" xml:space="preserve">
    <value>By accepting this contract you are bound to fulfill all conditions of this contract in timely manner.
Failing to do so may lead to negative feedback and loss of assets.</value>
  </data>
  <data name="Contracts_Completed_Caption" xml:space="preserve">
    <value>Contract Completed</value>
  </data>
  <data name="Contracts_Completed_Text" xml:space="preserve">
    <value>Thanks for doing the job. Here is your reward:
Reputation: {0}
Payment: {1}</value>
  </data>
  <data name="InventorySelection_All" xml:space="preserve">
    <value>All inventories</value>
  </data>
  <data name="InventorySelection_Character" xml:space="preserve">
    <value>Character inventory</value>
  </data>
  <data name="ContractScreen_Deliver_Distance" xml:space="preserve">
    <value>Distance:</value>
  </data>
  <data name="ContractScreen_Hunt_Target" xml:space="preserve">
    <value>Target:</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_ItemAmount" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="ContractScreen_RepChange_Hint" xml:space="preserve">
    <value>Reputation:</value>
  </data>
  <data name="ContractScreen_Deliver_Description_0" xml:space="preserve">
    <value>A priority package is to be delivered to a client of us and we are looking for the right person for the job.
You will pay a mandatory collateral upon accepting this contract.
Failing to complete the contract within the time limit will result our client being quite unpleased with our services and your collateral will be lost. 
We are sure you are up to the task.</value>
  </data>
  <data name="ContractScreen_Escort_Description_0" xml:space="preserve">
    <value>One of our cargo ship operators reported potential threats and is unable to proceed. 
We are in need of a pilot with the right equipment to escort this cargo ship safely until the treat has subsided.
You will be paid appropriately. Are you up for the job?</value>
  </data>
  <data name="ContractScreen_Find_Description_0" xml:space="preserve">
    <value>A container got lost during transit and a client of ours is eager to see it returned. Go to it's last known location and find this container.</value>
  </data>
  <data name="ContractScreen_Hunt_Description_0" xml:space="preserve">
    <value>With the absence of organized law enforcement the responsibility falls to individual factions to make sure that criminals do not go unpunished.
With that said, we have received reports of the location of one such culprit and we need you to make an example of them, so that others are not tempted down the same path. 
Find and take the target down. Use hand-held weapons or tools for the full reward. You will be kept up to date of the latest reported position of your target.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_0" xml:space="preserve">
    <value>A client of ours has requested some specific goods they wish delivered to this station for pickup.
Obtain the goods and then deliver them to us. We will ensure you are adequately rewarded.</value>
  </data>
  <data name="ContractScreen_Contract_Name_Deliver" xml:space="preserve">
    <value>Hauling Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_Escort" xml:space="preserve">
    <value>Escort Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_Find" xml:space="preserve">
    <value>Search Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_Hunt" xml:space="preserve">
    <value>Bounty Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_ObtainAndDeliver" xml:space="preserve">
    <value>Acquisition Contract</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughAmount" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughStoreBlockInventorySpace" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughAmount" xml:space="preserve">
    <value>There is not enough amount of the item.</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughStoreBlockInventorySpace" xml:space="preserve">
    <value>There is not enough space in the store block inventory to complete transaction.</value>
  </data>
  <data name="StoreBlockView_AmountLabel" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="StoreBlockView_CreateOfferButton" xml:space="preserve">
    <value>Create Offer</value>
  </data>
  <data name="StoreBlockView_CreateOrderButton" xml:space="preserve">
    <value>Create Order</value>
  </data>
  <data name="StoreBlockView_PricePerUnitLabel" xml:space="preserve">
    <value>Price per Unit:</value>
  </data>
  <data name="StoreBlockView_TotalPriceLabel" xml:space="preserve">
    <value>Total Price:</value>
  </data>
  <data name="Contracts_Error_Caption_FinishCondition_NotEnoughSpace" xml:space="preserve">
    <value>Contract finishing failed</value>
  </data>
  <data name="Contracts_Error_Text_FinishCondition_NotEnoughSpace" xml:space="preserve">
    <value>Contract could not be finished. There is not enough space for transfered items.</value>
  </data>
  <data name="ContractScreen_Deliver_Description_1" xml:space="preserve">
    <value>A partnered station has not been able to supply one of its customers due to a shortage.
They have requested that we will fill the gap and deliver the order as soon as possible.
Accepting this contract will require collateral and said collateral will be forfeit if you fail to complete the assignment in time.</value>
  </data>
  <data name="ContractScreen_Deliver_Description_2" xml:space="preserve">
    <value>We are looking for skilled couriers capable of handling jobs within a tight schedule. 
We require a mandatory collateral upon accepting this contract. You will be reimbursed and rewarded upon completing the contract but failing to do so will forfeit the collateral. 
Time is key, are you up for it?</value>
  </data>
  <data name="ContractScreen_Escort_Description_1" xml:space="preserve">
    <value>A nearby transport requested assistance after detecting hostile activity in it's vicinity. 
Go to the transport and make sure it gets through in one piece. 
Your feats will dictate your compensation.</value>
  </data>
  <data name="ContractScreen_Escort_Description_2" xml:space="preserve">
    <value>It looks like one of our competitors decided to resort to less conventional ways to beat the competition. 
Report to our cargo ship and keep it safe. Let them know we mean business. 
You will be rewarded based on your performance.</value>
  </data>
  <data name="ContractScreen_Find_Description_1" xml:space="preserve">
    <value>Due to a navigational error a cargo capsule was misdelivered and we only know it's rough whereabouts. We need someone capable of finding it before someone else does. Are you up for it?</value>
  </data>
  <data name="ContractScreen_Find_Description_2" xml:space="preserve">
    <value>We need someone to pick up a discreet package whose exact position is unknown. Locate this package for us and there will be a reward for you.</value>
  </data>
  <data name="ContractScreen_Hunt_Description_1" xml:space="preserve">
    <value>It seems like someone has made a bit of a name for themselves at the expense of others and in doing so made some of our clients quite unhappy. 
We just received reports detailing this person's last known position. We will happily compensate you if you can track them down and take them out. 
To ensure proper identification of your target we would prefer you take them down with either weapons or hand tools, if you prefer. You will be more highly rewarded for doing so.
We will make sure you are updated with the last known location of the target. Are you up to the job?</value>
  </data>
  <data name="ContractScreen_Hunt_Description_2" xml:space="preserve">
    <value>Someone has been causing a lot of trouble lately and we need someone who isn't afraid to deal with it. 
We will relay the target's last known position to you. Go there, find the troublemaker, and take them out.
You will receive the full reward if the contract is completed by means of hand-held weaponry.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_1" xml:space="preserve">
    <value>This station is in need of maintenance but we are in short supply. 
Get us the required materials and you will be paid in full.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_2" xml:space="preserve">
    <value>As a result of a miscommunication with a distributor we find ourselves short on some supplies.
Find us these supplies, bring them here and you will be compensated for your services.</value>
  </data>
  <data name="StoreScreen_BuyButton" xml:space="preserve">
    <value>Buy</value>
  </data>
  <data name="StoreScreen_CancelButton" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="StoreScreen_SellButton" xml:space="preserve">
    <value>Sell</value>
  </data>
  <data name="ContractTypeNames_Deliver" xml:space="preserve">
    <value>Hauling</value>
  </data>
  <data name="ContractTypeNames_Find" xml:space="preserve">
    <value>Search</value>
  </data>
  <data name="ContractTypeNames_ObtainAndDeliver" xml:space="preserve">
    <value>Acquisition</value>
  </data>
  <data name="StoreSell_Error_Caption_NotEnoughMoney" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreSell_Error_Text_NotEnoughMoney" xml:space="preserve">
    <value>The owner of this store does not have enough money.</value>
  </data>
  <data name="StoreSell_Error_Caption_NotEnoughInventorySpace" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreSell_Error_Text_NotEnoughInventorySpace" xml:space="preserve">
    <value>There is not enough space in store's grid inventories.</value>
  </data>
  <data name="ContractScreen_Administration_SelectionCaption_DeliverBlock" xml:space="preserve">
    <value>Select Contract block</value>
  </data>
  <data name="ContractScreen_Administration_SelectionCaption_FindGrid" xml:space="preserve">
    <value>Select Grid to Locate</value>
  </data>
  <data name="ContractScreen_Administration_SelectionCaption_ObtainAndDeliverBlock" xml:space="preserve">
    <value>Select Contract Block</value>
  </data>
  <data name="ContractScreen_Administration_SelectionText_DeliverBlock" xml:space="preserve">
    <value>Select one of your Contract Blocks to serve as the delivery point for the package.</value>
  </data>
  <data name="ContractScreen_Administration_SelectionText_FindGrid" xml:space="preserve">
    <value>Select the grid needing to be located for contract completion.</value>
  </data>
  <data name="ContractScreen_Administration_SelectionText_ObtainAndDeliverBlock" xml:space="preserve">
    <value>Select one of your Contract Blocks to serve as the delivery point for items.</value>
  </data>
  <data name="ContractScreen_Administration_NoSelection" xml:space="preserve">
    <value>No Selection</value>
  </data>
  <data name="StoreAdministration_NewOffer" xml:space="preserve">
    <value>New Offer</value>
  </data>
  <data name="StoreAdministration_NewOrder" xml:space="preserve">
    <value>New Order</value>
  </data>
  <data name="StoreBlockView_ListingFee" xml:space="preserve">
    <value>Listing Fee:</value>
  </data>
  <data name="StoreBlockView_TransactionFee" xml:space="preserve">
    <value>Transaction Fee:</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_BlockNotFound" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_Error" xml:space="preserve">
    <value>Error</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_Fail" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_GridNotFound" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_NotAnOwnerOfBlock" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_NotAnOwnerOfGrid" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_Success" xml:space="preserve">
    <value>Success</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_BlockNotFound" xml:space="preserve">
    <value>Contract creation failed. Target block was not found.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_Error" xml:space="preserve">
    <value>Contract creation failed due to an error.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_Fail" xml:space="preserve">
    <value>Contract creation failed.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_GridNotFound" xml:space="preserve">
    <value>Contract creation failed. Target grid was not found.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_NotAnOwnerOfBlock" xml:space="preserve">
    <value>Contract creation failed. You are not and owner of targeted block.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_NotAnOwnerOfGrid" xml:space="preserve">
    <value>Contract creation failed. You are not and owner of targeted grid.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_Success" xml:space="preserve">
    <value>Contract was successfully created.</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_IsNaN_Duration" xml:space="preserve">
    <value>Invalid value</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_IsNaN_ItemAmount" xml:space="preserve">
    <value>Invalid value</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_IsNaN_MoneyReward" xml:space="preserve">
    <value>Invalid value</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_IsNaN_SearchRadius" xml:space="preserve">
    <value>Invalid value</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_IsNaN_StartingDeposit" xml:space="preserve">
    <value>Invalid value</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_ItemTypeNotSelected" xml:space="preserve">
    <value>Value not selected</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_TargetContractBlockNotSelected" xml:space="preserve">
    <value>Value not selected</value>
  </data>
  <data name="ContractScreen_Aministration_FailCaption_TargetGridNotSelected" xml:space="preserve">
    <value>Value not selected</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_IsNaN_Duration" xml:space="preserve">
    <value>Duration has invalid value. Must be non-negative number.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_IsNaN_ItemAmount" xml:space="preserve">
    <value>Item amount has invalid value. Must be positive number.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_IsNaN_MoneyReward" xml:space="preserve">
    <value>Currency reward has invalid value. Must be non-negative number.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_IsNaN_SearchRadius" xml:space="preserve">
    <value>Search radius has invalid value. Must be positive number.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_IsNaN_StartingDeposit" xml:space="preserve">
    <value>Collateral has invalid value. Must be non-negative number.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_ItemTypeNotSelected" xml:space="preserve">
    <value>Item type for delivery must be selected.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_TargetContractBlockNotSelected" xml:space="preserve">
    <value>Contract block for item delivery must be selected.</value>
  </data>
  <data name="ContractScreen_Aministration_FailText_TargetGridNotSelected" xml:space="preserve">
    <value>You must select grid to be searched for.</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_NotEnoughFunds" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_NotEnoughFunds" xml:space="preserve">
    <value>Contract creation failed. You don't have enough funds to pay reward.</value>
  </data>
  <data name="ContractScreen_Button_CreateContract" xml:space="preserve">
    <value>Create</value>
  </data>
  <data name="ContractScreen_Button_DeleteContract" xml:space="preserve">
    <value>Delete</value>
  </data>
  <data name="ContractScreen_Button_RefreshContracts" xml:space="preserve">
    <value>Refresh</value>
  </data>
  <data name="ContractScreen_Button_SelectBlock" xml:space="preserve">
    <value>Select Block</value>
  </data>
  <data name="ContractScreen_Button_SelectGrid" xml:space="preserve">
    <value>Select Grid</value>
  </data>
  <data name="ContractScreen_Text_CurrentMoney" xml:space="preserve">
    <value>Account Balance:</value>
  </data>
  <data name="ContractScreen_Text_Duration" xml:space="preserve">
    <value>Duration [min]:</value>
  </data>
  <data name="ContractScreen_Text_ItemAmount" xml:space="preserve">
    <value>Item Amount:</value>
  </data>
  <data name="ContractScreen_Text_ItemType" xml:space="preserve">
    <value>Item Type:</value>
  </data>
  <data name="ContractScreen_Text_MoneyReward" xml:space="preserve">
    <value>Payment:</value>
  </data>
  <data name="ContractScreen_Text_NewContract" xml:space="preserve">
    <value>New Contract</value>
  </data>
  <data name="ContractScreen_Text_SearchRadius" xml:space="preserve">
    <value>Search Radius:</value>
  </data>
  <data name="ContractScreen_Text_StartingDeposit" xml:space="preserve">
    <value>Collateral:</value>
  </data>
  <data name="ContractScreen_Text_TargetBlock" xml:space="preserve">
    <value>Target Block:</value>
  </data>
  <data name="ContractScreen_Text_TargetGrid" xml:space="preserve">
    <value>Target Grid:</value>
  </data>
  <data name="ContractScreen_Text_Type" xml:space="preserve">
    <value>Type:</value>
  </data>
  <data name="Economy_FactionLeader_Formated" xml:space="preserve">
    <value>{0} CEO</value>
  </data>
  <data name="Economy_CharacterSelection" xml:space="preserve">
    <value>Character Inventory</value>
  </data>
  <data name="StoreBuy_Error_Caption_WrongOfferPricePerUnit" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_WrongOfferPricePerUnit" xml:space="preserve">
    <value>Price per unit is lower than minimum. Minimum is {0}.</value>
  </data>
  <data name="Connector_AutoUnlockWarning" xml:space="preserve">
    <value>Your ship will be unlocked in: {0} min {1} s </value>
  </data>
  <data name="Format_OneParameter" xml:space="preserve">
    <value>{0}</value>
  </data>
  <data name="ReputationBat_Tooltip_Friendly" xml:space="preserve">
    <value>Friendly relation
From {0} to {1} reputation.
Able to interact. Bonus deals.
{2}% discount (up to {4}%), {3}% sell bonus (up to {5}%).
</value>
  </data>
  <data name="ReputationBat_Tooltip_Hostile" xml:space="preserve">
    <value>Hostile relation
From {0} to {1} reputation.
Unable to interact, attacked on sight.</value>
  </data>
  <data name="ReputationBat_Tooltip_Neutral" xml:space="preserve">
    <value>Neutral relation
From {0} to {1} reputation.
Able to interact.</value>
  </data>
  <data name="ContractScreen_Escort_Description_3" xml:space="preserve">
    <value>One of our transports is experiencing technical difficulties and some vultures seemed to have taken notice. 
Go out there and protect the transport. Make them think twice. You will be rewarded based on how well you performed.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_3" xml:space="preserve">
    <value>Some of our stock has not been able to keep up with demand.
Help us resupply and you will be paid a fair price.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_4" xml:space="preserve">
    <value>We have several buyers interested in products not currently available to us. 
Help find these products and you will receive a sizeable cut.</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_Description_5" xml:space="preserve">
    <value>These commodities have been in high demand lately and we are running low. 
Interested in helping out? You will be adequately compensated.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_0" xml:space="preserve">
    <value>I happen to know a guy who knows a guy with some good deals. The real quality stuff you know? 
But it doesn't look like I will be getting anywhere near this place to profit from these deals so I will sell you the data if you are interested.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_1" xml:space="preserve">
    <value>A friend of mine who works on a remote station called in saying he has some contracts ready. 
They pay a good amount so if you are looking for a job then that's the place to go. Good luck!</value>
  </data>
  <data name="Datapad_Station_GPS_Content_2" xml:space="preserve">
    <value>So you are looking for more jobs or trade? Sure we can sort you out. 
Take a look at this place. It is a bit remote but rumor goes that pilots find good opportunities here.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_3" xml:space="preserve">
    <value>Some conflict between two factions left a field of debris and salvager are plucking the fruits by selling their findings to a nearby station that now has their stocks overflowing. 
If you are looking for good deals or work then this is the place to go.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_4" xml:space="preserve">
    <value>There is plenty of work available if you know where to look. You should investigate this place, I heard there is a shortage on couriers.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_5" xml:space="preserve">
    <value>Some Merchant keeps bragging about some really good deals at a station he has been visiting but would not spill the details. 
However, I happened to "stumble" on his navigation computer during my maintenance shift and this position kept popping up. Go see if there is any truth in what that merchant said.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_6" xml:space="preserve">
    <value>I used to visit this place at a regular basis during my engineering days and they always had some good deals available. Go see if they are still at it.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_7" xml:space="preserve">
    <value>A station lost some its client's due to some conflict of interest between factions and is now looking for new hires. Interested? This is where you should go.</value>
  </data>
  <data name="Datapad_Station_GPS_Content_8" xml:space="preserve">
    <value>Looking for Reliable contracts? Good trades? Or just making good money? You are in luck! Opportunity awaits at these coordinates!</value>
  </data>
  <data name="IngameHelp_Economy_GPSDesc" xml:space="preserve">
    <value>This is location of the nearest trading station, where you can buy/sell various items.</value>
  </data>
  <data name="IngameHelp_Economy_GPSName" xml:space="preserve">
    <value>Trading Station</value>
  </data>
  <data name="ToolTipWorldSettingsBountyContracts" xml:space="preserve">
    <value>Enables bounty contracts being available on stations.</value>
  </data>
  <data name="WorldSettings_EnableBountyContracts" xml:space="preserve">
    <value>Enable bounty contracts</value>
  </data>
  <data name="StoreScreen_GridTooltip_Pcu" xml:space="preserve">
    <value>PCU:</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughPCU" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughPCU" xml:space="preserve">
    <value>You don't have enough PCU to buy this item.</value>
  </data>
  <data name="Grid_Name_Station" xml:space="preserve">
    <value>{0} {1} {2}</value>
  </data>
  <data name="SafeZone_Name_Station" xml:space="preserve">
    <value>{0} Safe Zone {1}</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_YouAreTargetOfThisHunt" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="Contracts_Error_Text_ActivationConditionNotMet_YouAreTargetOfThisHunt" xml:space="preserve">
    <value>You do not meet requirements to accept this contract. You are the target.</value>
  </data>
  <data name="Contracts_AcceptConfirmation_Caption" xml:space="preserve">
    <value>Do you accept this contract?</value>
  </data>
  <data name="Contracts_AcceptConfirmation_Text" xml:space="preserve">
    <value>By accepting this contract you are bound to fulfill all conditions of this contract in timely manner.
Failing to do so may lead to negative feedback and loss of assets.</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_ChangeBalance" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_CoonfirmButton" xml:space="preserve">
    <value>Change</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_CurrentBalance" xml:space="preserve">
    <value>Current balance:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_FinalBalance" xml:space="preserve">
    <value>Final balance:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_Label" xml:space="preserve">
    <value>Change balance of player</value>
  </data>
  <data name="ContractScreen_Text_NoActiveContracts" xml:space="preserve">
    <value>You do not have any Contract active.</value>
  </data>
  <data name="ContractScreen_Text_NoAdministrableContracts" xml:space="preserve">
    <value>There are no custom contracts.</value>
  </data>
  <data name="ContractScreen_Text_NoAvailableContracts" xml:space="preserve">
    <value>There are no contracts available.</value>
  </data>
  <data name="Contracts_AbandonConfirmation_Caption" xml:space="preserve">
    <value>Do you really want to abandon this contract?</value>
  </data>
  <data name="Contracts_AbandonConfirmation_Text" xml:space="preserve">
    <value>By abandoning this contract you will lose all collateral you have paid and you may lose some reputation in process.</value>
  </data>
  <data name="Contracts_Error_Caption_ActivationConditionNotMet_ContractLimitReachedSoft" xml:space="preserve">
    <value>Cannot accept</value>
  </data>
  <data name="ScreenCaptionActiveContracts" xml:space="preserve">
    <value>Active contracts</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_CreationLimitHard" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultCaption_CreationLimitSoft" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="ContractScreen_Aministration_CreatinResultText_CreationLimitHard" xml:space="preserve">
    <value>Contract creation failed. You have reached limit amount of contracts for this block.</value>
  </data>
  <data name="Store_Error_Caption_OrderOfferLimitReachedHard" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="Store_Error_Caption_OrderOfferLimitReachedSoft" xml:space="preserve">
    <value>Failure</value>
  </data>
  <data name="Store_Error_Text_OrderOfferLimitReachedHard" xml:space="preserve">
    <value>Failed to create order/offer. You have reached order/offer limit for this block.</value>
  </data>
  <data name="StoreBuy_Error_Caption_NotEnoughSpaceInTank" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_Text_NotEnoughSpaceInTank" xml:space="preserve">
    <value>Transfer of gas failed. Tank does not have enough free capacity.</value>
  </data>
  <data name="StoreScreen_SelectInventory" xml:space="preserve">
    <value>Select inventory:</value>
  </data>
  <data name="Economy_Contract_FinishTooltip_CannotFinishInBlock" xml:space="preserve">
    <value>This contract cannot be finished through contract block. It has different objective.</value>
  </data>
  <data name="Economy_Contract_FinishTooltip_NotAFinishPoint" xml:space="preserve">
    <value>This contract cannot be finished at this station.</value>
  </data>
  <data name="Economy_Contract_FinishTooltip_YouCanFinish" xml:space="preserve">
    <value>Press to finish your contract.</value>
  </data>
  <data name="Economy_Notification_ReputationDecreased" xml:space="preserve">
    <value>Reputation with {0} dropped by {1}</value>
  </data>
  <data name="Economy_Notification_ReputationIncreased" xml:space="preserve">
    <value>Reputation with {0} raised by {1}</value>
  </data>
  <data name="GUI_Datapad_CreateGPSCoord" xml:space="preserve">
    <value>Create Gps Marker</value>
  </data>
  <data name="GUI_Datapad_CreateGPSCoord_TTIP" xml:space="preserve">
    <value>Press to create gps coordinate marker.</value>
  </data>
  <data name="Economy_FactionIcon_Tooltip_Allowed" xml:space="preserve">
    <value>Click to select icon.</value>
  </data>
  <data name="Economy_FactionIcon_Tooltip_BuyEconomy" xml:space="preserve">
    <value>Buy Economy DLC to unlock these faction icons</value>
  </data>
  <data name="IngameHelp_Datapad_Desc" xml:space="preserve">
    <value>I can see you have a datapad in your inventory. Datapad can hold important information you wish to store there. For example, datapad bought on stations contain coordinates of other stations.</value>
  </data>
  <data name="IngameHelp_Datapad_Detail1" xml:space="preserve">
    <value>{0} on datapad to open it.</value>
  </data>
  <data name="IngameHelp_Datapad_Detail1:Gamepad" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:GUI:BUTTON_Y} on datapad to open it.</value>
  </data>
  <data name="IngameHelp_Datapad_Title" xml:space="preserve">
    <value>Open datapad</value>
  </data>
  <data name="Contract_Repair_GpsDescription" xml:space="preserve">
    <value>Repair this grid to complete your contract.</value>
  </data>
  <data name="Contract_Repair_GpsName" xml:space="preserve">
    <value>Repair Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_Repair" xml:space="preserve">
    <value>Repair Contract</value>
  </data>
  <data name="ContractScreen_Contract_Name_Repair_WithId" xml:space="preserve">
    <value>Repair Contract ({0})</value>
  </data>
  <data name="ContractScreen_Repair_Description_0" xml:space="preserve">
    <value>Our equipment has sustained serious damage as result of a recent meteor shower and is in need of repairs. 
Go out there and make sure all is back in working order.</value>
  </data>
  <data name="ContractScreen_Repair_Description_1" xml:space="preserve">
    <value>We lost contact with our equipment recently. Check and repair any damage you can find and you will be well endorsed.</value>
  </data>
  <data name="ContractScreen_Repair_Description_2" xml:space="preserve">
    <value>Scavengers have been targeting our equipment lately. Check our equipment for damage and return it to top condition.</value>
  </data>
  <data name="ContractScreen_Administration_SelectionCaption_Repair" xml:space="preserve">
    <value>Select grid to repair</value>
  </data>
  <data name="ContractScreen_Administration_SelectionText_Repair" xml:space="preserve">
    <value>Select the grid needing to be repaired for contract completion.</value>
  </data>
  <data name="ContractTypeNames_Repair" xml:space="preserve">
    <value>Repair</value>
  </data>
  <data name="EditFaction_HueIconSliderText" xml:space="preserve">
    <value>Icon Hue:</value>
  </data>
  <data name="EditFaction_SaturationIconSliderText" xml:space="preserve">
    <value>Icon Saturation:</value>
  </data>
  <data name="EditFaction_ValueIconSliderText" xml:space="preserve">
    <value>Icon Value:</value>
  </data>
  <data name="ContractScreen_Repair_Description_3" xml:space="preserve">
    <value>A navigation error resulted into a cargo ship colliding with our equipment. Check for damage and repair any that you can find. You will be compensated for the components.</value>
  </data>
  <data name="ContractScreen_Repair_Description_4" xml:space="preserve">
    <value>We would like to recommission some of our equipment but it is in no functional condition right now. Check out what is missing or damaged, fix it and you will be paid for the components.</value>
  </data>
  <data name="ContractScreen_Repair_Description_5" xml:space="preserve">
    <value>Our Equipment needs inspection. Find it, perform a full checkup and repair any damage you can find.</value>
  </data>
  <data name="SafeZone_Color_TTP" xml:space="preserve">
    <value>Changes color of the safe zone sphere.</value>
  </data>
  <data name="Beacon_SafeZone_ToolTip_PluralSuffix_Activation" xml:space="preserve">
    <value>s</value>
  </data>
  <data name="Beacon_SafeZone_ToolTip_PluralSuffix_Minutes" xml:space="preserve">
    <value>s</value>
  </data>
  <data name="Beacon_SafeZone_ToolTip_PluralSuffix_ZoneChips" xml:space="preserve">
    <value>s</value>
  </data>
  <data name="ScreenDebugAdminMenu_Economy" xml:space="preserve">
    <value>Economy</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather" xml:space="preserve">
    <value>Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Generate" xml:space="preserve">
    <value>Force Random Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Lightning" xml:space="preserve">
    <value>Create Lightning</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Lightning_Tooltip" xml:space="preserve">
    <value>Creates lightning where you are looking</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Generate_Tooltip" xml:space="preserve">
    <value>Forces a random weather using planet's weather system</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Create" xml:space="preserve">
    <value>Create Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Modify" xml:space="preserve">
    <value>Modify Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Create_Tooltip" xml:space="preserve">
    <value>Creates the selected weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_CreateCombo_Tooltip" xml:space="preserve">
    <value>Weather to create</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Current" xml:space="preserve">
    <value>Current Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_CurrentIntensity" xml:space="preserve">
    <value>Current Weather Intensity</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_CurrentTemperature" xml:space="preserve">
    <value>Current Temperature</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Replace" xml:space="preserve">
    <value>Replace Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Replace_Tooltip" xml:space="preserve">
    <value>Replaces the current Weather with the selected weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Next" xml:space="preserve">
    <value>Next Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Remove" xml:space="preserve">
    <value>Remove Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Remove_Tooltip" xml:space="preserve">
    <value>Removes the current Weather</value>
  </data>
  <data name="ScreenDebugAdminMenu_Weather_Incoming" xml:space="preserve">
    <value>Incoming Weather</value>
  </data>
  <data name="ContractScreen_Find_Description_3" xml:space="preserve">
    <value>A client of ours listed a reward for the one who can retrieve a lost drop pod in time. A fast vehicle and keen eye is recommended.</value>
  </data>
  <data name="ContractScreen_Find_Description_4" xml:space="preserve">
    <value>A courier dropped a transport container to distract his pursuers. It did not work but we are interested in seeing it's contents returned. Locate this container and mark it for pickup.</value>
  </data>
  <data name="SafeZone_Texture" xml:space="preserve">
    <value>Select Zone Texture:</value>
  </data>
  <data name="SafeZone_Texture_Aura" xml:space="preserve">
    <value>Aura</value>
  </data>
  <data name="SafeZone_Texture_Noise" xml:space="preserve">
    <value>Noise</value>
  </data>
  <data name="SafeZone_Texture_Organic" xml:space="preserve">
    <value>Organic</value>
  </data>
  <data name="SafeZone_Texture_Disco" xml:space="preserve">
    <value>Disco</value>
  </data>
  <data name="SafeZone_Texture_Dots" xml:space="preserve">
    <value>Dots</value>
  </data>
  <data name="SafeZone_Texture_Rain" xml:space="preserve">
    <value>Rain</value>
  </data>
  <data name="SafeZone_Texture_Default" xml:space="preserve">
    <value>Default</value>
  </data>
  <data name="SafeZone_Texture_Disabled" xml:space="preserve">
    <value>Disabled</value>
  </data>
  <data name="SafeZone_Texture_DLCReq_TTIP" xml:space="preserve">
    <value>Economy DLC Required. Changes texture of safe zone.</value>
  </data>
  <data name="SafeZone_Texture_Hexagon" xml:space="preserve">
    <value>Hexagon</value>
  </data>
  <data name="SafeZone_Texture_Lines" xml:space="preserve">
    <value>Lines</value>
  </data>
  <data name="SafeZone_Texture_Digital" xml:space="preserve">
    <value>Digital</value>
  </data>
  <data name="SafeZone_Texture_Restricted" xml:space="preserve">
    <value>Restricted</value>
  </data>
  <data name="SafeZone_Texture_Gloura" xml:space="preserve">
    <value>Gloura</value>
  </data>
  <data name="SafeZone_Texture_Clang" xml:space="preserve">
    <value>Clang</value>
  </data>
  <data name="SafeZone_Texture_KeenSWH" xml:space="preserve">
    <value>KeenSWH Logo</value>
  </data>
  <data name="SafeZone_Texture_Voronoi" xml:space="preserve">
    <value>Voronoi</value>
  </data>
  <data name="SafeZone_Texture_TTIP" xml:space="preserve">
    <value>Changes texture of safe zone.</value>
  </data>
  <data name="ScreenDebugAdminMenu_IgnoreSafeZones" xml:space="preserve">
    <value>Ignore Safe Zones</value>
  </data>
  <data name="ScreenDebugAdminMenu_IgnoreSafeZonesTip" xml:space="preserve">
    <value>When enabled you will be completely immune to the effects of safezone.
WARNING: This affects only your characters. Grids will still be affected.</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_ChangeReputation" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_ConfirmButton" xml:space="preserve">
    <value>Change</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_CurrentReputation" xml:space="preserve">
    <value>Current reputation:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_FactionLabel" xml:space="preserve">
    <value>with faction</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_FinalReputation" xml:space="preserve">
    <value>Final reputation:</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_PlayerLabel" xml:space="preserve">
    <value>Change reputation of player</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_ReputationPropagate" xml:space="preserve">
    <value>Propagate reputation</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_ReputationPropagate_Tooltip" xml:space="preserve">
    <value>Propagate reputation to friends and enemies of faction. 
Warning: Propagation of positive and negative reputation is not symmetric.
Propagating 1000 and then -1000 won't have zero sum for friends and foes of the faction.</value>
  </data>
  <data name="TerminalSafeZoneNeedsStation" xml:space="preserve">
    <value>Safe zones can be enabled
 only on stations.</value>
  </data>
  <data name="ScreenTerminalInventory_UnlimitedVolume" xml:space="preserve">
    <value>Unlimited</value>
  </data>
  <data name="ScreenDebugAdminMenu_IgnorePcuTip" xml:space="preserve">
    <value>When enabled, you will completely ignore all PCU limits. This may cause you to go into negative PCUs.</value>
  </data>
  <data name="ScreenDebugAdminMenu_Pcu" xml:space="preserve">
    <value>Ignore PCU limits</value>
  </data>
  <data name="Trash_KickAFKWarning" xml:space="preserve">
    <value>Please note: If you remain inactive for 1 minute you will be disconnected.</value>
  </data>
  <data name="Economy_CantRemoveStation_Caption" xml:space="preserve">
    <value>Removal not allowed</value>
  </data>
  <data name="Economy_CantRemoveStation_Text" xml:space="preserve">
    <value>Economy stations are handled by Economy system. You may not remove them.</value>
  </data>
  <data name="ScreenAdmin_Safezone_ColorLabel" xml:space="preserve">
    <value>Color</value>
  </data>
  <data name="ScreenAdmin_Safezone_TextureColorLabel" xml:space="preserve">
    <value>Texture and Color:</value>
  </data>
  <data name="StoreBlockView_OfferItem" xml:space="preserve">
    <value>Offer</value>
  </data>
  <data name="StoreBlockView_OrderItem" xml:space="preserve">
    <value>Order</value>
  </data>
  <data name="StoreScreen_AllButton" xml:space="preserve">
    <value>All</value>
  </data>
  <data name="Transaction_Form_ActivityLogLabel" xml:space="preserve">
    <value>Activity Log</value>
  </data>
  <data name="Transaction_Form_Log_AmountHeader" xml:space="preserve">
    <value>Amount</value>
  </data>
  <data name="Transaction_Form_Log_DateHeader" xml:space="preserve">
    <value>Date</value>
  </data>
  <data name="Transaction_Form_Log_NameHeader" xml:space="preserve">
    <value>Name</value>
  </data>
  <data name="ContractScreen_ObtainDeliver_ItemVolume" xml:space="preserve">
    <value>Volume: </value>
  </data>
  <data name="DisplayName_Item_Medkit" xml:space="preserve">
    <value>Medkit</value>
  </data>
  <data name="DisplayName_Category_Consumables" xml:space="preserve">
    <value>   Consumables</value>
  </data>
  <data name="DisplayName_Item_Powerkit" xml:space="preserve">
    <value>Powerkit</value>
  </data>
  <data name="DisplayName_Item_SpaceCredit" xml:space="preserve">
    <value>Space Credit</value>
  </data>
  <data name="StoreBlockView_CashBack" xml:space="preserve">
    <value>Cashback:</value>
  </data>
  <data name="ContractScreen_Tooltip_MaxGpsOffset" xml:space="preserve">
    <value>Maximum GPS deviation:</value>
  </data>
  <data name="StoreScreen_Preview" xml:space="preserve">
    <value>Show Preview</value>
  </data>
  <data name="ContractScreen_ContractFilterTitle" xml:space="preserve">
    <value>Show: </value>
  </data>
  <data name="ContractType_NameLocalizationKey_All" xml:space="preserve">
    <value>All</value>
  </data>
  <data name="ContractType_NameLocalizationKey_Deliver" xml:space="preserve">
    <value>Hauling</value>
  </data>
  <data name="ContractType_NameLocalizationKey_Escort" xml:space="preserve">
    <value>Escort</value>
  </data>
  <data name="ContractType_NameLocalizationKey_Find" xml:space="preserve">
    <value>Search</value>
  </data>
  <data name="ContractType_NameLocalizationKey_Hunt" xml:space="preserve">
    <value>Bounty</value>
  </data>
  <data name="ContractType_NameLocalizationKey_ObtainAndDeliver" xml:space="preserve">
    <value>Acquisition</value>
  </data>
  <data name="ContractType_NameLocalizationKey_Repair" xml:space="preserve">
    <value>Repair</value>
  </data>
  <data name="Description_Datapad" xml:space="preserve">
    <value>A datapad is an electronic device used to store and display information.</value>
  </data>
  <data name="Description_Medkit" xml:space="preserve">
    <value>A medkit is a case containing medical supplies for healing astronaut.</value>
  </data>
  <data name="Description_Package" xml:space="preserve">
    <value>A package is a box used for storing items for Hauling contract.</value>
  </data>
  <data name="Description_Powerkit" xml:space="preserve">
    <value>A powerkit is a portable battery pack for recharging suit of an astronaut.</value>
  </data>
  <data name="Description_SpaceCredit" xml:space="preserve">
    <value>A Space Credit is a currency used for trading.</value>
  </data>
  <data name="LCD_Economy_Badge" xml:space="preserve">
    <value>Badge</value>
  </data>
  <data name="LCD_Economy_Blueprint_2" xml:space="preserve">
    <value>Blueprint 2</value>
  </data>
  <data name="LCD_Economy_Blueprint_3" xml:space="preserve">
    <value>Blueprint 3</value>
  </data>
  <data name="LCD_Economy_Charts" xml:space="preserve">
    <value>Charts</value>
  </data>
  <data name="LCD_Economy_Clear" xml:space="preserve">
    <value>Clear</value>
  </data>
  <data name="LCD_Economy_Coins" xml:space="preserve">
    <value>Coins</value>
  </data>
  <data name="LCD_Economy_Faction_1" xml:space="preserve">
    <value>Faction</value>
  </data>
  <data name="LCD_Economy_Graph_1" xml:space="preserve">
    <value>Graph 1</value>
  </data>
  <data name="LCD_Economy_Graph_2" xml:space="preserve">
    <value>Graph 2</value>
  </data>
  <data name="LCD_Economy_Graph_3" xml:space="preserve">
    <value>Graph 3</value>
  </data>
  <data name="LCD_Economy_Graph_4" xml:space="preserve">
    <value>Graph 4</value>
  </data>
  <data name="LCD_Economy_Graph_5" xml:space="preserve">
    <value>Graph 5</value>
  </data>
  <data name="LCD_Economy_KeenSWH" xml:space="preserve">
    <value>Keen SWH</value>
  </data>
  <data name="LCD_Economy_Poster_1" xml:space="preserve">
    <value>Poster</value>
  </data>
  <data name="LCD_Economy_SC_Here" xml:space="preserve">
    <value>SC Here</value>
  </data>
  <data name="LCD_Economy_SC_Logo" xml:space="preserve">
    <value>SC Logo 1</value>
  </data>
  <data name="LCD_Economy_SE_Logo_1" xml:space="preserve">
    <value>SE Logo 1</value>
  </data>
  <data name="LCD_Economy_SE_Logo_2" xml:space="preserve">
    <value>SE Logo 2</value>
  </data>
  <data name="LCD_Economy_SingleCoin" xml:space="preserve">
    <value>Single Coin</value>
  </data>
  <data name="LCD_Economy_StoreBlock" xml:space="preserve">
    <value>Store</value>
  </data>
  <data name="LCD_Economy_Trade" xml:space="preserve">
    <value>Trade</value>
  </data>
  <data name="LCD_Economy_Trinity" xml:space="preserve">
    <value>Trinity</value>
  </data>
  <data name="LCD_SC_Blueprint" xml:space="preserve">
    <value>Blueprint 1</value>
  </data>
  <data name="LCD_SC_Logo_2" xml:space="preserve">
    <value>SC Logo 2</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddCurrency_Player_Tooltip" xml:space="preserve">
    <value>Player or faction whose currency will be modified.</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_Faction_Tooltip" xml:space="preserve">
    <value>Faction whose relation will be modified.</value>
  </data>
  <data name="ScreenDebugAdminMenu_AddReputation_Player_Tooltip" xml:space="preserve">
    <value>Player whose relation will be modified.</value>
  </data>
  <data name="Description_AtmBlock" xml:space="preserve">
    <value>Automated Teller Machine</value>
  </data>
  <data name="DisplayName_Block_ATM" xml:space="preserve">
    <value>ATM</value>
  </data>
  <data name="NotificationHintPressToAccessAtm" xml:space="preserve">
    <value>Press {0} to access ATM</value>
  </data>
  <data name="ScreenCaptionATM" xml:space="preserve">
    <value>ATM</value>
  </data>
  <data name="Description_VendingMachine" xml:space="preserve">
    <value>Allows displaying and selling of items.</value>
  </data>
  <data name="DisplayName_Block_VendingMachine" xml:space="preserve">
    <value>Vending Machine</value>
  </data>
  <data name="NotificationHintBuyItem" xml:space="preserve">
    <value>Press {0} to Buy item</value>
  </data>
  <data name="NotificationHintNextItem" xml:space="preserve">
    <value>Press {0} for Next item</value>
  </data>
  <data name="NotificationHintPreviewsItem" xml:space="preserve">
    <value>Press {0} for Previous item</value>
  </data>
  <data name="VendingMachine_Script_ConnectingToServer" xml:space="preserve">
    <value>Seaching for available offers</value>
  </data>
  <data name="VendingMachine_Script_DataUnavailable" xml:space="preserve">
    <value>Data unavailable</value>
  </data>
  <data name="VendingMachine_Script_ItemAmount" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="VendingMachine_Script_MessageBuy" xml:space="preserve">
    <value>Thank You for purchase!</value>
  </data>
  <data name="VendingMachine_Script_MessageError" xml:space="preserve">
    <value>Transaction failed</value>
  </data>
  <data name="VendingMachine_Script_PricePerUnit" xml:space="preserve">
    <value>Price:</value>
  </data>
  <data name="DisplayName_TSS_VendingMachine" xml:space="preserve">
    <value>Vending Machine GUI</value>
  </data>
  <data name="DisplayName_TSS_Jukebox" xml:space="preserve">
    <value>Jukebox GUI</value>
  </data>
  <data name="VendingMachine_Script_ContactAdmin" xml:space="preserve">
    <value>(Contact system administrator of this machine)</value>
  </data>
  <data name="VendingMachine_Script_ItemsTimeout" xml:space="preserve">
    <value>Updating... Try again</value>
  </data>
  <data name="VendingMachine_Script_NoMoney" xml:space="preserve">
    <value>Insufficient funds</value>
  </data>
  <data name="VendingMachine_Script_NotEnoughSpace" xml:space="preserve">
    <value>Inventory full</value>
  </data>
  <data name="VendingMachine_Script_OutOfStock" xml:space="preserve">
    <value>Out of stock</value>
  </data>
  <data name="AdminScreen_Safezone_Collision" xml:space="preserve">
    <value>Safe zone collision. Reduce radius until no safezones are overlapping.</value>
  </data>
  <data name="SafeZoneBlock_Safezone_Collision" xml:space="preserve">
    <value>Safe zone collision.
Reduce radius or move it</value>
  </data>
  <data name="StoreBlock_OfferDiscount" xml:space="preserve">
    <value>Discount:</value>
  </data>
  <data name="Connector_TemporaryBlock" xml:space="preserve">
    <value>Connection failed. Connector will unblock in {0} seconds.</value>
  </data>
  <data name="DisplayName_TSS_FactionIcon" xml:space="preserve">
    <value>Faction Icon</value>
  </data>
  <data name="TSS_FactionIcon_Error" xml:space="preserve">
    <value>No Faction Found</value>
  </data>
  <data name="SafeZone_Size_X" xml:space="preserve">
    <value>Set Width</value>
  </data>
  <data name="SafeZone_Size_Y" xml:space="preserve">
    <value>Set Height</value>
  </data>
  <data name="SafeZone_Size_Z" xml:space="preserve">
    <value>Set Depth</value>
  </data>
  <data name="Description_FAQ_ContractBlock" xml:space="preserve">
    <value>A Contract block lets you set up your own contracts for other players to complete. You can also accept contracts from Trading stations.</value>
  </data>
  <data name="Description_FAQ_Contracts" xml:space="preserve">
    <value>Contracts can be accepted trough contract blocks and are a good income of space credit. They can be found at trading stations or from other players with contract blocks.</value>
  </data>
  <data name="Description_FAQ_SafeZoneBlock" xml:space="preserve">
    <value>The safe zone block projects a configurable zone to protect your base. The safe zone block requires power and zone chips to function. Zone chips can be bought from trading stations.</value>
  </data>
  <data name="Description_FAQ_SpaceCredit" xml:space="preserve">
    <value>Space Credit is the universal currency used to trade with stations and other players. You can withdraw or deposit space credits from store blocks.</value>
  </data>
  <data name="Description_FAQ_StoreBlock" xml:space="preserve">
    <value>You can use a store block to trade with players or other factions. Trading can be done from ship inventories when using connectors with trade functions enabled.</value>
  </data>
  <data name="Description_FAQ_TradeStations" xml:space="preserve">
    <value>Trade stations can spawn on planets, moons in orbit or in deep space. Depending on what faction owns the trade station it can sell Ores, components, amunitions, fuel and ships and let you do contracts for them.</value>
  </data>
  <data name="Description_FAQ_Trading" xml:space="preserve">
    <value>You can trade with players and stations using Store blocks. Trading with players can be done directly by pressing F3.</value>
  </data>
  <data name="RadialMenuGroupTitle_Build" xml:space="preserve">
    <value>Build</value>
  </data>
  <data name="RadialMenuGroupTitle_LastUsed" xml:space="preserve">
    <value>Recent Blocks</value>
  </data>
  <data name="RadialMenuGroupTitle_LastUsedVoxels" xml:space="preserve">
    <value>Recent Voxels</value>
  </data>
  <data name="RadialMenu_HintClose" xml:space="preserve">
    <value>{0} Close</value>
  </data>
  <data name="RadialMenu_HintConfirm" xml:space="preserve">
    <value>{0} Confirm</value>
  </data>
  <data name="RadialMenu_HintCycleBlocks" xml:space="preserve">
    <value>{0} Cycle blocks in group</value>
  </data>
  <data name="SkinNotOwned" xml:space="preserve">
    <value>You don't own selected skin. Do you want to visit DLC store?</value>
  </data>
  <data name="HintGamepadOnly01Text" xml:space="preserve">
    <value>Did you know? 
{0} and {1} are modifier buttons. Try holding them while performing any action in-game. And most of the times the action will do something slightly different.</value>
  </data>
  <data name="HintGamepadOnly02Text" xml:space="preserve">
    <value>Did you know? 
If you make mistake while placing blocks in survival mode you can press {0} to switch to Grinder tool. When you have Grinder equipped you can press {0} to switch to the last equipped block.</value>
  </data>
  <data name="HintGamepadOnly03Text" xml:space="preserve">
    <value>Did you know? 
You can move through complicated windows more easily with {0}.</value>
  </data>
  <data name="HintGamepadOnly04Text" xml:space="preserve">
    <value>Did you know? 
Hold {0}+{1} and move {2} and {3} to move camera around your character or ship.</value>
  </data>
  <data name="HintGamepadOnly07Text" xml:space="preserve">
    <value>Did you know? 
If you are building a symmetrical ship, you can activate Symmetry Building Mode through System Radial Menu.</value>
  </data>
  <data name="HintGamepadOnly09Text" xml:space="preserve">
    <value>Did you know? 
You can trigger Emotes Toolbar by holding {0}+{1}.</value>
  </data>
  <data name="HintGamepadOnly10Text" xml:space="preserve">
    <value>Did you know? 
You can modify voxels with Voxel Hand Tool, which can be accesed from System Radial Menu in Creative Mode. You can then place, remove, revert and paint voxels with {GAMEPAD_CONTROL:VOXEL:PRIMARY_TOOL_ACTION}, {GAMEPAD_CONTROL:VOXEL:SECONDARY_TOOL_ACTION}, {GAMEPAD_CONTROL:VOXEL:VOXEL_REVERT} and {GAMEPAD_CONTROL:VOXEL:VOXEL_PAINT} respectively.</value>
  </data>
  <data name="HintGamepadOnly11Control0" xml:space="preserve">
    <value>BUILD:CUBE_DEFAULT_MOUNTPOINT</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly11Text" xml:space="preserve">
    <value>Did you know? 
You can toggle off the block auto rotation function with {0}</value>
  </data>
  <data name="HintGamepadOnly12Control0" xml:space="preserve">
    <value>SPACESHIP:FAKE_RS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly12Text" xml:space="preserve">
    <value>Did you know? 
You can steer vehicles from a turret if the cockpit is set to main cockpit.
Hold {0} to control turning around.</value>
  </data>
  <data name="HintGamepadOnly13Control0" xml:space="preserve">
    <value>TOOLS:SECONDARY_TOOL_ACTION</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly13Text" xml:space="preserve">
    <value>Did you know? 
You can dig tunnels quickly without producing ore by using {0} with your drill.</value>
  </data>
  <data name="HintGamepadOnly00Control0" xml:space="preserve">
    <value>CLIPBOARD:SWITCH_BUILDING_MODE</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly00Text" xml:space="preserve">
    <value>Did you know? 
While holding a blueprint in creative mode, you can use {0} to align them to a planet's Gravity.</value>
  </data>
  <data name="HintGamepadOnly08Control1" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_RB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly08Text" xml:space="preserve">
    <value>Did you know? 
Holding {0}, {1} or {0}-{1} enables you to move stacks of items by 10, 100 and 1000 at the time.</value>
  </data>
  <data name="HintGamepadOnly05Control0" xml:space="preserve">
    <value>SPACESHIP:FAKE_LS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly05Text" xml:space="preserve">
    <value>Did you know? 
You can zoom in and out while using a camera or turret with {0}.</value>
  </data>
  <data name="HintGamepadOnly06Text" xml:space="preserve">
    <value>Did you know?
You can change the way GPS coordinates and Antennas are displayed on your HUD through System Radial Menu.</value>
  </data>
  <data name="RadialMenu_Label_VoxelHand_Disabled" xml:space="preserve">
    <value>Disabled for this World.</value>
  </data>
  <data name="RadialMenu_Label_VoxelHand_Survival" xml:space="preserve">
    <value>Available only in Creative mode or with creative tools.</value>
  </data>
  <data name="HintGamepadOnly01Control0" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_LB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly01Control1" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_RB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly02Control0" xml:space="preserve">
    <value>BUILD:SECONDARY_TOOL_ACTION</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly03Control0" xml:space="preserve">
    <value>GUI:FAKE_RS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly04Control0" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_LB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly04Control1" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_RB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly04Control2" xml:space="preserve">
    <value>BASE:FAKE_LS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly04Control3" xml:space="preserve">
    <value>BASE:FAKE_RS</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly09Control0" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_LB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly09Control1" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_RB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly10Control0" xml:space="preserve">
    <value>VOXEL:PRIMARY_TOOL_ACTION</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly10Control1" xml:space="preserve">
    <value>VOXEL:SECONDARY_TOOL_ACTION</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly10Control2" xml:space="preserve">
    <value>VOXEL:VOXEL_REVERT</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly08Control0" xml:space="preserve">
    <value>BASE:FAKE_MODIFIER_LB</value>
    <comment>do not translate</comment>
  </data>
  <data name="HintGamepadOnly10Control3" xml:space="preserve">
    <value>VOXEL:VOXEL_PAINT</value>
    <comment>do not translate</comment>
  </data>
  <data name="RadialMenu_Label_DisabledWorld" xml:space="preserve">
    <value>Disabled for this world.</value>
  </data>
  <data name="RadialMenu_Label_CreativeOnly" xml:space="preserve">
    <value>Available only in creative mode or with creative tools.</value>
  </data>
  <data name="RadialMenu_Label_AdminOnly" xml:space="preserve">
    <value>Available only for admins.</value>
  </data>
  <data name="RadialMenu_Label_SurvivalOnly" xml:space="preserve">
    <value>Available only in survival mode.</value>
  </data>
  <data name="RadialMenuGroupTitle_Creative" xml:space="preserve">
    <value>Creative</value>
  </data>
  <data name="RadialMenuGroupTitle_View" xml:space="preserve">
    <value>View</value>
  </data>
  <data name="BlockPropertyTitle_JukeboxScreenSelectedSounds" xml:space="preserve">
    <value>Selected sounds</value>
  </data>
  <data name="BlockPropertyTitle_JukeboxScreenSelectSounds" xml:space="preserve">
    <value>Add to selection</value>
  </data>
  <data name="BlockPropertyTitle_JukeboxScreenRemoveSelectedSounds" xml:space="preserve">
    <value>Remove selected</value>
  </data>
  <data name="NotificationHintJukeboxPlay" xml:space="preserve">
    <value>Press {0} to play/stop music</value>
  </data>
  <data name="NotificationHintJukeboxPlayPrevious" xml:space="preserve">
    <value>Press {0} to play previous track</value>
  </data>
  <data name="NotificationHintJukeboxPlayNext" xml:space="preserve">
    <value>Press {0} to play next track</value>
  </data>
  <data name="NotificationHintSoundBlockDlcUnavailable" xml:space="preserve">
    <value>This item won't play as the {0} DLC is missing</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_01" xml:space="preserve">
    <value>Calm Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_02" xml:space="preserve">
    <value>Calm Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_03" xml:space="preserve">
    <value>Calm Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_04" xml:space="preserve">
    <value>Calm Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_05" xml:space="preserve">
    <value>Calm Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_06" xml:space="preserve">
    <value>Calm Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_07" xml:space="preserve">
    <value>Calm Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_08" xml:space="preserve">
    <value>Calm Music 08</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_09" xml:space="preserve">
    <value>Calm Music 09</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_10" xml:space="preserve">
    <value>Calm Music 10</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_11" xml:space="preserve">
    <value>Calm Music 11</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_12" xml:space="preserve">
    <value>Calm Music 12</value>
  </data>
  <data name="SoundBlock_SoundName_MusCalm_13" xml:space="preserve">
    <value>Calm Music 13</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_01" xml:space="preserve">
    <value>Mystery Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_02" xml:space="preserve">
    <value>Mystery Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_03" xml:space="preserve">
    <value>Mystery Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_04" xml:space="preserve">
    <value>Mystery Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_05" xml:space="preserve">
    <value>Mystery Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_06" xml:space="preserve">
    <value>Mystery Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_07" xml:space="preserve">
    <value>Mystery Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusMystery_08" xml:space="preserve">
    <value>Mystery Music 08</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_01" xml:space="preserve">
    <value>Build Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_02" xml:space="preserve">
    <value>Build Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_03" xml:space="preserve">
    <value>Build Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_04" xml:space="preserve">
    <value>Build Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_05" xml:space="preserve">
    <value>Build Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_06" xml:space="preserve">
    <value>Build Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusBuild_07" xml:space="preserve">
    <value>Build Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_01" xml:space="preserve">
    <value>Space Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_02" xml:space="preserve">
    <value>Space Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_03" xml:space="preserve">
    <value>Space Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_04" xml:space="preserve">
    <value>Space Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_05" xml:space="preserve">
    <value>Space Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_06" xml:space="preserve">
    <value>Space Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_07" xml:space="preserve">
    <value>Space Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_08" xml:space="preserve">
    <value>Space Music 08</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_09" xml:space="preserve">
    <value>Space Music 09</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_10" xml:space="preserve">
    <value>Space Music 10</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_11" xml:space="preserve">
    <value>Space Music 11</value>
  </data>
  <data name="SoundBlock_SoundName_MusSpace_12" xml:space="preserve">
    <value>Space Music 12</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_01" xml:space="preserve">
    <value>Light Fight Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_02" xml:space="preserve">
    <value>Light Fight Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_03" xml:space="preserve">
    <value>Light Fight Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_04" xml:space="preserve">
    <value>Light Fight Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_05" xml:space="preserve">
    <value>Light Fight Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_06" xml:space="preserve">
    <value>Light Fight Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_07" xml:space="preserve">
    <value>Light Fight Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_08" xml:space="preserve">
    <value>Light Fight Music 08</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_09" xml:space="preserve">
    <value>Light Fight Music 09</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_10" xml:space="preserve">
    <value>Light Fight Music 10</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_11" xml:space="preserve">
    <value>Light Fight Music 11</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_12" xml:space="preserve">
    <value>Light Fight Music 12</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_13" xml:space="preserve">
    <value>Light Fight Music 13</value>
  </data>
  <data name="SoundBlock_SoundName_MusLightFight_14" xml:space="preserve">
    <value>Light Fight Music 14</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_01" xml:space="preserve">
    <value>Heavy Fight Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_02" xml:space="preserve">
    <value>Heavy Fight Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_03" xml:space="preserve">
    <value>Heavy Fight Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_04" xml:space="preserve">
    <value>Heavy Fight Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_05" xml:space="preserve">
    <value>Heavy Fight Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_06" xml:space="preserve">
    <value>Heavy Fight Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_07" xml:space="preserve">
    <value>Heavy Fight Music 07</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_08" xml:space="preserve">
    <value>Heavy Fight Music 08</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_09" xml:space="preserve">
    <value>Heavy Fight Music 09</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_10" xml:space="preserve">
    <value>Heavy Fight Music 10</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_11" xml:space="preserve">
    <value>Heavy Fight Music 11</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_12" xml:space="preserve">
    <value>Heavy Fight Music 12</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_13" xml:space="preserve">
    <value>Heavy Fight Music 13</value>
  </data>
  <data name="SoundBlock_SoundName_MusHeavyFight_14" xml:space="preserve">
    <value>Heavy Fight Music 14</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_01" xml:space="preserve">
    <value>Danger Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_02" xml:space="preserve">
    <value>Danger Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_03" xml:space="preserve">
    <value>Danger Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_04" xml:space="preserve">
    <value>Danger Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_05" xml:space="preserve">
    <value>Danger Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusDanger_06" xml:space="preserve">
    <value>Danger Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_01" xml:space="preserve">
    <value>EarthLike Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_02" xml:space="preserve">
    <value>EarthLike Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_03" xml:space="preserve">
    <value>EarthLike Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_04" xml:space="preserve">
    <value>EarthLike Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_05" xml:space="preserve">
    <value>EarthLike Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusEarthlike_06" xml:space="preserve">
    <value>EarthLike Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_01" xml:space="preserve">
    <value>Planet Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_02" xml:space="preserve">
    <value>Planet Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_03" xml:space="preserve">
    <value>Planet Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_04" xml:space="preserve">
    <value>Planet Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_05" xml:space="preserve">
    <value>Planet Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusPlanet_06" xml:space="preserve">
    <value>Planet Music 06</value>
  </data>
  <data name="SoundBlock_SoundName_MusAlien_01" xml:space="preserve">
    <value>Alien Music 01</value>
  </data>
  <data name="SoundBlock_SoundName_MusAlien_02" xml:space="preserve">
    <value>Alien Music 02</value>
  </data>
  <data name="SoundBlock_SoundName_MusAlien_03" xml:space="preserve">
    <value>Alien Music 03</value>
  </data>
  <data name="SoundBlock_SoundName_MusAlien_04" xml:space="preserve">
    <value>Alien Music 04</value>
  </data>
  <data name="SoundBlock_SoundName_MusAlien_05" xml:space="preserve">
    <value>Alien Music 05</value>
  </data>
  <data name="SoundBlock_SoundName_MusFun" xml:space="preserve">
    <value>Fun Music</value>
  </data>
  <data name="Jukebox_Script_Playing" xml:space="preserve">
    <value>Playing</value>
  </data>
  <data name="Jukebox_Script_Stopped" xml:space="preserve">
    <value>Stopped</value>
  </data>
  <data name="Jukebox_Script_NoTracksAvailable" xml:space="preserve">
    <value>No tracks available</value>
  </data>
  <data name="Jukebox_Script_SelectInTerminal" xml:space="preserve">
    <value>Select tracks to play in terminal screen</value>
  </data>
  <data name="Jukebox_Script_DlcUnavailable" xml:space="preserve">
    <value>Missing {0} DLC</value>
  </data>
  <data name="DisplayName_Item_ClangCola" xml:space="preserve">
    <value>Clang Kola</value>
  </data>
  <data name="DisplayName_Item_CosmicCoffee" xml:space="preserve">
    <value>Cosmic Coffee</value>
  </data>
  <data name="Description_ClangKola" xml:space="preserve">
    <value>Surprisingly strong kola. The recipe for this delicious beverage remains the best kept secret in the solar system.</value>
  </data>
  <data name="Description_CosmicCoffee" xml:space="preserve">
    <value>Brewed with the utmost care by Martian coffee growers, it's guaranteed to help you stay awake in space.</value>
  </data>
  <data name="RadialMenuSectionTitle_Modded" xml:space="preserve">
    <value>Modded #{0}</value>
  </data>
  <data name="RadialMenu_Label_CharacterOnly" xml:space="preserve">
    <value>Can respawn only when in character.</value>
  </data>
  <data name="Gamepad_Help_Back" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="StoreScreen_Help_Buy" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Buy</value>
  </data>
  <data name="StoreScreen_Help_ChangeAmount" xml:space="preserve">
    <value>{CONTROL:GUI:MOVE_LEFT}{CONTROL:GUI:MOVE_RIGHT} Change Amount</value>
  </data>
  <data name="StoreScreen_Help_Deposit" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Deposit</value>
  </data>
  <data name="StoreScreen_Help_Refresh" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="StoreScreen_Help_SortBy" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Sorted by </value>
  </data>
  <data name="StoreScreen_Help_Withdraw" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Withdraw</value>
  </data>
  <data name="StoreScreen_Help_ChangeInventory" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_BUTTON}{CONTROL:GUI:RIGHT_BUTTON} Change Inventory</value>
  </data>
  <data name="BlueprintPublished" xml:space="preserve">
    <value>BLUEPRINT PUBLISHED</value>
  </data>
  <data name="WorkshopError" xml:space="preserve">
    <value>Error accessing service.</value>
  </data>
  <data name="WorkshopPublishRestricted" xml:space="preserve">
    <value>Publishing Workshop Items is not possible because of privacy settings.</value>
  </data>
  <data name="WorkshopRestricted" xml:space="preserve">
    <value>Subscribed Workshop Items are not available because of privacy settings.</value>
  </data>
  <data name="WorkshopNoUser" xml:space="preserve">
    <value>Subscribed Workshop Items are not available because no user is logged in.</value>
  </data>
  <data name="WorkshopAgeRestricted" xml:space="preserve">
    <value>The workshop is not available due to age restrictions. Your account or a guest user account is age restricted.</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel5x5mirrored" xml:space="preserve">
    <value>Offroad Wheel 5x5</value>
  </data>
  <data name="ActiveContractsScreen_Help_Refresh" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="ControlMenuItemLabel_ActiveContracts" xml:space="preserve">
    <value>Show Active Contracts</value>
  </data>
  <data name="MainMenuScreen_Help_Menu" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="RadialMenuAction_EnableBroadcasting_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_EnableBroadcasting_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_EnableBroadcasting_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_EnabledConnectors_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_EnabledConnectors_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_EnabledConnectors_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_EnabledDampeners_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_EnabledDampeners_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_EnabledDampeners_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_EnabledLights_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_EnabledLights_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_EnabledLights_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_EnablePower_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_EnablePower_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_EnablePower_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_Hud_Hidden" xml:space="preserve">
    <value>Hidden</value>
  </data>
  <data name="RadialMenuAction_Hud_Visible" xml:space="preserve">
    <value>Visible</value>
  </data>
  <data name="RadialMenuAction_PlacementMode_ClipboardRoattion_Disabled" xml:space="preserve">
    <value>Rotation disabled</value>
  </data>
  <data name="RadialMenuAction_PlacementMode_ClipboardRoattion_Enabled" xml:space="preserve">
    <value>Rotation enabled</value>
  </data>
  <data name="RadialMenuAction_PlacementMode_Grid_Free" xml:space="preserve">
    <value>Free placement</value>
  </data>
  <data name="RadialMenuAction_PlacementMode_Grid_Gravity" xml:space="preserve">
    <value>Gravity aligned</value>
  </data>
  <data name="RadialMenuAction_PlacementMode_Grid_Local" xml:space="preserve">
    <value>Local coordinates</value>
  </data>
  <data name="RadialMenuAction_Signal_Default" xml:space="preserve">
    <value>Default</value>
  </data>
  <data name="RadialMenuAction_Signal_Full" xml:space="preserve">
    <value>Full</value>
  </data>
  <data name="RadialMenuAction_Signal_MaxSignals" xml:space="preserve">
    <value>Max Signals</value>
  </data>
  <data name="RadialMenuAction_Signal_NoNames" xml:space="preserve">
    <value>No names</value>
  </data>
  <data name="RadialMenuAction_Signal_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_SwitchCamera_FirstPerson" xml:space="preserve">
    <value>First person</value>
  </data>
  <data name="RadialMenuAction_SwitchCamera_None" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="RadialMenuAction_SwitchCamera_ThirdPerson" xml:space="preserve">
    <value>Third person</value>
  </data>
  <data name="RadialMenuAction_Symmetry_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_Symmetry_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_ToggleAutoRotation_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_ToggleAutoRotation_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_Visor_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_Visor_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="RadialMenuAction_Shortcut_AdminMenu" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:ABASE:ADMIN_MENU}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_BlueprintScreen" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:ABASE:BLUEPRINTS_MENU}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ColorTool" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:CHARACTER:COLOR_TOOL}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_PlacementMode" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BUILD:FREE_ROTATION}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ShowProgressionTree" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:ABASE:PROGRESSION_MENU}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_SwitchCamera" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BASE:CAMERA_MODE}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleAutoRotation" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BUILD:CUBE_DEFAULT_MOUNTPOINT}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleBroadcasting" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:BROADCASTING}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleConnectors" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:SPACESHIP:LANDING_GEAR}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleDampeners" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BASE:DAMPING}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleLights" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BASE:HEADLIGHTS}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_TogglePower" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:SPACESHIP:TOGGLE_REACTORS}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleSignals" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:ABASE:TOGGLE_SIGNALS}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleSymmetry" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:BUILD:USE_SYMMETRY}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleVisor" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:CHARACTER:HELMET}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_Unequip" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:SLOT0}</value>
  </data>
  <data name="MainMenuScreen_Help_Exit" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Exit to Windows</value>
  </data>
  <data name="OptionsScreen_Help_Menu" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="BannerControl_Help_Next" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="BannerControl_Help_Open" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="BannerControl_Help_Previous" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="MainMenuScreen_Help_ScreenIngame" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Show help   {CONTROL:GUI:CANCEL} Resume game</value>
  </data>
  <data name="NewsControl_Help_Next" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="NewsControl_Help_Previous" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="EditFactionLogoScreen_Help_ChangeColor" xml:space="preserve">
    <value>{CONTROL:GUI:MOVE_LEFT}{CONTROL:GUI:MOVE_RIGHT} Change Color</value>
  </data>
  <data name="EditFactionLogoScreen_Help_Selection" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} OK</value>
  </data>
  <data name="HelpScreen_ResetPlane" xml:space="preserve">
    <value>Remove plane</value>
  </data>
  <data name="HelpScreen_SetPlane" xml:space="preserve">
    <value>Add plane</value>
  </data>
  <data name="HelpScreen_SymmetryNextPlane" xml:space="preserve">
    <value>Next plane</value>
  </data>
  <data name="HelpScreen_SymmetryTurnOffSetup" xml:space="preserve">
    <value>Turn off setup</value>
  </data>
  <data name="HelpScreen_SymmetryUnequip" xml:space="preserve">
    <value>Unequip</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_ControlGyros" xml:space="preserve">
    <value>Control Gyros</value>
  </data>
  <data name="TerminalControlPanel_Cockpit_ControlGyros_Tooltip" xml:space="preserve">
    <value>Enable gyro control for this cockpit.</value>
  </data>
  <data name="RadialMenuAction_BuildingMode_Line" xml:space="preserve">
    <value>Line</value>
  </data>
  <data name="RadialMenuAction_BuildingMode_Plane" xml:space="preserve">
    <value>Plane</value>
  </data>
  <data name="RadialMenuAction_BuildingMode_Single" xml:space="preserve">
    <value>Single block</value>
  </data>
  <data name="AudioOptions_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ControlsOptions_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="DisplayOptions_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="GameOptions_Help_Screen_TabGeneral" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Reset Good.bot hints   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="GameOptions_Help_Screen_TabCrosshair" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="GraphicsOptions_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="AdvancedWorldSettings_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="LoadScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:VIEW} Backups   {CONTROL:GUI:MAIN_MENU} Publish   {CONTROL:GUI:RIGHT_STICK_BUTTON} Save As   {CONTROL:GUI:BUTTON_Y} Delete   {CONTROL:GUI:BUTTON_X} Edit Settings   {CONTROL:GUI:MODIF_R} + {CONTROL:GUI:BUTTON_A} Select range   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="WorldSettings_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Advanced   {CONTROL:GUI:MAIN_MENU} Mods   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="JoinGameScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:VIEW} Direct Connect   {CONTROL:GUI:MAIN_MENU} Search Filter   {CONTROL:GUI:BUTTON_X} Server Details   {CONTROL:GUI:CANCEL} Back

{CONTROL:GUI:LEFT_BUTTON} Server Provider   {CONTROL:GUI:RIGHT_BUTTON} Network Type</value>
  </data>
  <data name="JoinGameScreen_Help_ScreenGamesTab" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:VIEW} Direct Connect   {CONTROL:GUI:MAIN_MENU} Search Filter   {CONTROL:GUI:LEFT_BUTTON} Server Provider   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ModsScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="WorkshopTagsScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="WorkshopTagsScreen_HelpNoOk_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ToolTipOptionsControls_InvertGamepadYChar" xml:space="preserve">
    <value>Invert Y controller axis for character control</value>
  </data>
  <data name="ToolTipOptionsControls_InvertGamepadYVehicle" xml:space="preserve">
    <value>Invert Y controller axis for jetpack and vehicle control</value>
  </data>
  <data name="NewGameScenarios_Help_ScenarioWithPublish" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select   {CONTROL:GUI:BUTTON_Y} Publish</value>
  </data>
  <data name="NewGameScenarios_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Start   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ServerDetails_Help_ScreenAddFavorites" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Join   {CONTROL:GUI:BUTTON_Y} Add to favorites   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ServerDetails_Help_ScreenRemoveFavorites" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Join   {CONTROL:GUI:BUTTON_Y} Remove from favorites   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="WorldSettings_Help_ScreenNewGame" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Advanced   {CONTROL:GUI:MAIN_MENU} Mods   {CONTROL:GUI:BUTTON_X} Start   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="NewGameWorkshop_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} Start   {CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:VIEW} Open item   {CONTROL:GUI:MAIN_MENU} Browse workshop</value>
  </data>
  <data name="ServerSearch_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Default   {CONTROL:GUI:BUTTON_X} Search   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="MedicalsScreen_Help_Factions" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="MedicalsScreen_Help_FactionsMultiplayer" xml:space="preserve">
    <value>{CONTROL:GUI:VIEW} Players   {CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="MedicalsScreen_Help_Respawn" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalGps_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Delete   {CONTROL:GUI:BUTTON_X} New from current position   {CONTROL:GUI:MODIF_L} + {CONTROL:GUI:BUTTON_X} New   {CONTROL:GUI:MODIF_R} + {CONTROL:GUI:BUTTON_X} New from clipboard   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalComms_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalControlPanel_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_STICK_BUTTON} Toggle show on HUD   {CONTROL:GUI:BUTTON_Y} Toggle show in terminal   {CONTROL:GUI:BUTTON_X} Toggle On/Off   {CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:MODIF_R} + {CONTROL:GUI:BUTTON_A} Select range</value>
  </data>
  <data name="TerminalFactions_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalFactions_Help_Player" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:BUTTON_Y} Player</value>
  </data>
  <data name="TerminalInfo_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalInventory_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Left filter   {CONTROL:GUI:RIGHT_STICK_BUTTON} Right filter   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalProduction_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalProperties_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalInfo_Help_ScreenConvertShip" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Convert to ship   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalInfo_Help_ScreenConvertStation" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Convert to station   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="Description_BlueprintClass_Ammo" xml:space="preserve">
    <value>Ammo
- Bullets and ordinance used in combat situations.</value>
  </data>
  <data name="Description_BlueprintClass_BasicComponents" xml:space="preserve">
    <value>Basic Ingots and Components
- Click on any ingot or component to assemble it.</value>
  </data>
  <data name="Description_BlueprintClass_BasicTools" xml:space="preserve">
    <value>Basic Tools</value>
  </data>
  <data name="Description_BlueprintClass_BuildPlanner" xml:space="preserve">
    <value>Build Planner
- Click on any block from Build Planner to assemble all components
remaining for its construction.</value>
  </data>
  <data name="Description_BlueprintClass_CommonMetals" xml:space="preserve">
    <value>Common Metals</value>
  </data>
  <data name="Description_BlueprintClass_Components" xml:space="preserve">
    <value>Components
- Components are used in the construction of structural,
mechanical, and electrical systems.</value>
  </data>
  <data name="Description_BlueprintClass_HydrogenBottles" xml:space="preserve">
    <value>Hydrogen Bottles</value>
  </data>
  <data name="Description_BlueprintClass_Ice" xml:space="preserve">
    <value>Ice</value>
  </data>
  <data name="Description_BlueprintClass_Ingots" xml:space="preserve">
    <value>Ingots</value>
  </data>
  <data name="Description_BlueprintClass_LargeBlocks" xml:space="preserve">
    <value>Large Blocks
- Click on any Large Block to assemble all components
necessary for it's construction.</value>
  </data>
  <data name="Description_BlueprintClass_OxygenBottles" xml:space="preserve">
    <value>Oxygen Bottles</value>
  </data>
  <data name="Description_BlueprintClass_SmallBlocks" xml:space="preserve">
    <value>Small Blocks
- Click on any Small Block to assemble all components
necessary for it's construction.</value>
  </data>
  <data name="Description_BlueprintClass_Tools" xml:space="preserve">
    <value>Tools
 - Handheld instruments that perform a variety of functions.</value>
  </data>
  <data name="DisplayName_BlueprintClass_BasicTools" xml:space="preserve">
    <value>Basic Tools</value>
  </data>
  <data name="DisplayName_BlueprintClass_Tools" xml:space="preserve">
    <value>Tools</value>
  </data>
  <data name="TerminalProduction_Help_BlueprintFilter" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Filter: {0}</value>
  </data>
  <data name="TerminalProduction_Help_QueueGrid" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Remove one (hold to remove all)</value>
  </data>
  <data name="TerminalProduction_Help_ScreenAssembling" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_STICK_BUTTON} Control panel   {CONTROL:GUI:BUTTON_Y} Assembling mode   {CONTROL:GUI:BUTTON_X} Inventory   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalProduction_Help_ScreenDisassembling" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_STICK_BUTTON} Control panel   {CONTROL:GUI:BUTTON_Y} Disassembling mode   {CONTROL:GUI:BUTTON_X} Inventory   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="TerminalInventory_Help_ItemsGrid" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Add to production   {CONTROL:GUI:VIEW} Deposit all</value>
  </data>
  <data name="TerminalInventory_Help_ItemsGrid_Droppable" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Add to production   {CONTROL:GUI:MENU} Drop item   {CONTROL:GUI:VIEW} Deposit all</value>
  </data>
  <data name="TerminalRemote_Help_ShipsTable" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Take control   {CONTROL:GUI:BUTTON_X} Open terminal</value>
  </data>
  <data name="BlueprintScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Sort   {CONTROL:GUI:RIGHT_STICK_BUTTON} Type   {CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} New from clipboard   {CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:VIEW} Open item on {0}   {CONTROL:GUI:MAIN_MENU} Browse workshop</value>
  </data>
  <data name="BlueprintScreen_Help_Screen_Local" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Sort   {CONTROL:GUI:RIGHT_STICK_BUTTON} Type   {CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} New from clipboard   {CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:MAIN_MENU} Browse workshop</value>
  </data>
  <data name="CharacterSkinInventory_Help_ScreenOK" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Category   {CONTROL:GUI:RIGHT_STICK_BUTTON} Change action   {CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back
{CONTROL:GUI:VIEW} Open/Close Visor</value>
  </data>
  <data name="CharacterSkinInventory_Help_ScreenCraft" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Category   {CONTROL:GUI:RIGHT_STICK_BUTTON} Change action   {CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} Craft   {CONTROL:GUI:CANCEL} Back
{CONTROL:GUI:VIEW} Open/Close Visor</value>
  </data>
  <data name="FactionCreateEdit_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Change logo   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ColorTool_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Defaults   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="PlayersScreen_Help_PlayersList" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Profile   {CONTROL:GUI:BUTTON_X} Trade   {CONTROL:GUI:BUTTON_Y} Toggle mute</value>
  </data>
  <data name="PlayersScreen_Help_PlayersList_ProfileDisabled" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Trade   {CONTROL:GUI:BUTTON_Y} Toggle mute</value>
  </data>
  <data name="PlayersScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="PbEditor_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Help   {CONTROL:GUI:RIGHT_STICK_BUTTON} Browse scripts   {CONTROL:GUI:BUTTON_Y} Check   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="ClaimSkin_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="PerformanceWarnings_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="FolderScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} Open   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="DatapadEdit_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Create GPS   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="JoinGameScreen_Help_ScreenGamesTabXbox" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:BUTTON_X} Profile   {CONTROL:GUI:MAIN_MENU} Search Filter   {CONTROL:GUI:LEFT_BUTTON} Server Provider   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="JoinGameScreen_Help_ScreenXbox" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh   {CONTROL:GUI:MAIN_MENU} Search Filter   {CONTROL:GUI:BUTTON_X} Server Details   {CONTROL:GUI:LEFT_BUTTON} Server Provider   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="String1" xml:space="preserve">
    <value />
  </data>
  <data name="StoreScreen_Help_Sell" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Sell</value>
  </data>
  <data name="Gamepad_Help_Select" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="ContractsScreen_Help_Accept" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_A} Accept</value>
  </data>
  <data name="ContractsScreen_Help_Finish" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Finish</value>
  </data>
  <data name="ContractsScreen_Help_Refresh" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="ScreenCaptionWorkshopBrowser" xml:space="preserve">
    <value>Workshop Browser</value>
  </data>
  <data name="WorkshopBrowser_Created" xml:space="preserve">
    <value>Created</value>
  </data>
  <data name="WorkshopBrowser_FileSize" xml:space="preserve">
    <value>File size</value>
  </data>
  <data name="WorkshopBrowser_MostPopular" xml:space="preserve">
    <value>Most Voted</value>
  </data>
  <data name="WorkshopBrowser_MostRecent" xml:space="preserve">
    <value>Most Recent</value>
  </data>
  <data name="WorkshopBrowser_MostSubscribed" xml:space="preserve">
    <value>Most Subscribed</value>
  </data>
  <data name="WorkshopBrowser_NextPage" xml:space="preserve">
    <value>Next page</value>
  </data>
  <data name="WorkshopBrowser_PreviousPage" xml:space="preserve">
    <value>Previous page</value>
  </data>
  <data name="WorkshopBrowser_Refresh" xml:space="preserve">
    <value>Refresh</value>
  </data>
  <data name="WorkshopBrowser_Search" xml:space="preserve">
    <value>Search</value>
  </data>
  <data name="WorkshopBrowser_Subscribed" xml:space="preserve">
    <value>Subscribed</value>
  </data>
  <data name="WorkshopBrowser_Subscribers" xml:space="preserve">
    <value>Subscribers</value>
  </data>
  <data name="WorkshopBrowser_Updated" xml:space="preserve">
    <value>Updated</value>
  </data>
  <data name="WorkhopBrowser_Help_OpenClose" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Open/Close</value>
  </data>
  <data name="WorkshopBrowser_Help_Paging" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_BUTTON}{CONTROL:GUI:RIGHT_BUTTON} Change page</value>
  </data>
  <data name="WorkshopBrowser_Help_Refresh" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="WorkshopBrowser_Help_Select" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="WorkshopBrowser_Help_ToggleCategory" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Toggle category</value>
  </data>
  <data name="WorkshopBrowser_Help_ToggleSubscribe" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Toggle subscription</value>
  </data>
  <data name="PlayerTrade_Help_AcceptOffer" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Accept offer</value>
  </data>
  <data name="PlayerTrade_Help_ChangeValue" xml:space="preserve">
    <value>{CONTROL:GUI:MOVE_LEFT}{CONTROL:GUI:MOVE_RIGHT} Change value</value>
  </data>
  <data name="PlayerTrade_Help_SubmitOffer" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Submit offer</value>
  </data>
  <data name="PlayerTrade_Help_Transfer" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Transfer all</value>
  </data>
  <data name="LoadScreen_Help_Load" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Load</value>
  </data>
  <data name="WorldSettings_Help_ScreenNewGame_Modless" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Advanced   {CONTROL:GUI:BUTTON_X} Start   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="WorldSettings_Help_Screen_Modless" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Advanced   {CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="MedicalsScreen_Help_FactionList" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Join</value>
  </data>
  <data name="MedicalsScreen_Help_RespawnList" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Respawn</value>
  </data>
  <data name="ControlMenuItemLabel_Handbrake" xml:space="preserve">
    <value>Toggles the grid handbrake</value>
  </data>
  <data name="ControlMenuItemLabel_Park" xml:space="preserve">
    <value>Toggles the grid Parking</value>
  </data>
  <data name="RadialMenuAction_ToggleHandbrake_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_ToggleHandbrake_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="ContractsScreen_Help_Select" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select</value>
  </data>
  <data name="SaveAs_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Cancel</value>
  </data>
  <data name="Transaction_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Cancel</value>
  </data>
  <data name="RadialMenuAction_ToggleViewMode_Off" xml:space="preserve">
    <value>Off</value>
  </data>
  <data name="RadialMenuAction_ToggleViewMode_On" xml:space="preserve">
    <value>On</value>
  </data>
  <data name="Spectator_FocusPlayer" xml:space="preserve">
    <value>Focus character/ship</value>
  </data>
  <data name="Spectator_LockToGrid" xml:space="preserve">
    <value>Lock to grid</value>
  </data>
  <data name="Spectator_PlayerControl" xml:space="preserve">
    <value>Control character/ship</value>
  </data>
  <data name="Spectator_RotationSpeedDown" xml:space="preserve">
    <value>Rotation speed down</value>
  </data>
  <data name="Spectator_RotationSpeedUp" xml:space="preserve">
    <value>Rotation speed up</value>
  </data>
  <data name="Spectator_SpeedBoost" xml:space="preserve">
    <value>Movement speed boost</value>
  </data>
  <data name="Spectator_SpeedDown" xml:space="preserve">
    <value>Movement speed down</value>
  </data>
  <data name="Spectator_SpeedUp" xml:space="preserve">
    <value>Movement speed up</value>
  </data>
  <data name="Spectator_Teleport" xml:space="preserve">
    <value>Teleport character/ship</value>
  </data>
  <data name="ControlName_Crouch" xml:space="preserve">
    <value>Crouch</value>
  </data>
  <data name="ControlName_Down" xml:space="preserve">
    <value>Down</value>
  </data>
  <data name="ControlName_JetpackOff" xml:space="preserve">
    <value>Jetpack Off</value>
  </data>
  <data name="ControlName_JetpackOn" xml:space="preserve">
    <value>Jetpack On</value>
  </data>
  <data name="ControlName_Jump" xml:space="preserve">
    <value>Jump</value>
  </data>
  <data name="ControlName_Up" xml:space="preserve">
    <value>Up</value>
  </data>
  <data name="HelpScreen_ControllerHorizontalMover_Forward" xml:space="preserve">
    <value>Forward/Backward</value>
  </data>
  <data name="HelpScreen_ControllerJetpackControl" xml:space="preserve">
    <value>Jetpack Control</value>
  </data>
  <data name="HelpScreen_ControllerRotation_Pitch" xml:space="preserve">
    <value>Rotation - Pitch</value>
  </data>
  <data name="HelpScreen_ControllerRotation_Roll" xml:space="preserve">
    <value>Rotation - Roll</value>
  </data>
  <data name="HelpScreen_ControllerRotation_Yaw" xml:space="preserve">
    <value>Rotation - Yaw</value>
  </data>
  <data name="HelpScreen_ControllerVerticalMover_Up" xml:space="preserve">
    <value>Up/Down</value>
  </data>
  <data name="Gamepad_Help_ChangeValue" xml:space="preserve">
    <value>{CONTROL:GUI:MOVE_LEFT}{CONTROL:GUI:MOVE_RIGHT} Change value</value>
  </data>
  <data name="StoreScreenAdmin_Help_CreateOffer" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Create offer</value>
  </data>
  <data name="StoreScreenAdmin_Help_CreateOrder" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Create order</value>
  </data>
  <data name="StoreScreenAdmin_Help_Delete" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Delete</value>
  </data>
  <data name="ContractsScreenGridSelection_Help_Confirm" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Confirm</value>
  </data>
  <data name="ContractsScreen_Help_CreateContract" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Create contract</value>
  </data>
  <data name="ContractsScreen_Help_Delete" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Delete</value>
  </data>
  <data name="WorkshopBrowser_Help_OpenItem" xml:space="preserve">
    <value>{CONTROL:GUI:VIEW} Open item in workshop</value>
  </data>
  <data name="WorkshopBrowser_Help_OpenWorkshop" xml:space="preserve">
    <value>{CONTROL:GUI:MAIN_MENU} Browse workshop</value>
  </data>
  <data name="WorkshopBrowser_OpenItem" xml:space="preserve">
    <value>Open item in workshop</value>
  </data>
  <data name="WorkshopBrowser_Subscribe" xml:space="preserve">
    <value>Subscribe</value>
  </data>
  <data name="MedicalsScreen_Help_Respawn_Factionless" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Refresh</value>
  </data>
  <data name="MainMenuScreen_Help_Screen" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Show help</value>
  </data>
  <data name="HelpScreen_Chat" xml:space="preserve">
    <value>Chat</value>
  </data>
  <data name="HelpScreen_Contracts" xml:space="preserve">
    <value>Active contracts</value>
  </data>
  <data name="HelpScreen_Progression" xml:space="preserve">
    <value>Progression tree</value>
  </data>
  <data name="HelpScreen_ToggleHud" xml:space="preserve">
    <value>Toggle HUD</value>
  </data>
  <data name="HelpScreen_Tools" xml:space="preserve">
    <value>Tools</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ActiveContracts" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:ACTIVE_CONTRACT_SCREEN}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_OpenChat" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:CHAT_SCREEN}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ProgressionMenu" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:PROGRESSION_MENU}</value>
  </data>
  <data name="RadialMenuAction_Shortcut_ToggleHUD" xml:space="preserve">
    <value>{GAMEPAD_CONTROL:TOOLS:TOGGLE_HUD}</value>
  </data>
  <data name="ToolTipOptionsControls_ZoomMultiplier" xml:space="preserve">
    <value>Determines how fast you zoom camera in/out while in 3rd person.</value>
  </data>
  <data name="ZoomMultiplier" xml:space="preserve">
    <value>3rd person zoom speed</value>
  </data>
  <data name="MainMenuScreen_Help_ScreenInGameWithLink" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Show current news   {CONTROL:GUI:BUTTON_Y} Show help   {CONTROL:GUI:CANCEL} Resume game</value>
  </data>
  <data name="MainMenuScreen_Help_ScreenWithLink" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Show current news   {CONTROL:GUI:BUTTON_Y} Show help</value>
  </data>
  <data name="WorkshopBrowser_NotFound" xml:space="preserve">
    <value>No items matching your search criteria were found.</value>
  </data>
  <data name="ControlName_ColorPicker" xml:space="preserve">
    <value>Color picker</value>
  </data>
  <data name="ScreenCaptionModIoConsent" xml:space="preserve">
    <value>Mod.io</value>
  </data>
  <data name="ScreenCaptionSteamAndModIoConsent" xml:space="preserve">
    <value>Steam and Mod.io</value>
  </data>
  <data name="ScreenModIoConsent_ButtonAgree" xml:space="preserve">
    <value>I Agree</value>
  </data>
  <data name="ScreenModIoConsent_ButtonOptOut" xml:space="preserve">
    <value>Opt Out</value>
  </data>
  <data name="ScreenModIoConsent_ButtonPrivacyPolicy" xml:space="preserve">
    <value>Privacy Policy</value>
  </data>
  <data name="ScreenModIoConsent_ButtonTermsOfUse" xml:space="preserve">
    <value>Terms of Use</value>
  </data>
  <data name="ScreenModIoConsent_PrivacyPolicyModioHelp" xml:space="preserve">
    <value>{CONTROL:GUI:MAIN_MENU} Privacy Policy</value>
  </data>
  <data name="ScreenModIoConsent_TermsOfUseModioHelp" xml:space="preserve">
    <value>{CONTROL:GUI:VIEW} Terms of Use</value>
  </data>
  <data name="ScreenModIoConsent_PrivacyPolicySteamHelp" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_STICK_BUTTON} Privacy Policy</value>
  </data>
  <data name="ScreenModIoConsent_TermsOfUseSteamHelp" xml:space="preserve">
    <value>{CONTROL:GUI:LEFT_STICK_BUTTON} Terms of Use</value>
  </data>
  <data name="ScreenModIoConsent_ConsentTextPart1" xml:space="preserve">
    <value>We use mod.io to support user-generated content in-game. To continue you must agree to the mod.io Terms of Use and Privacy Policy. A mod.io account will be created for you to browse, share and interact with user-generated content using your:</value>
  </data>
  <data name="ScreenSteamAndModIoConsent_ConsentTextPart1" xml:space="preserve">
    <value>We use Steam and mod.io to support user-generated content in-game. To continue you must agree to the Steam and mod.io Terms of Use and Privacy Policy. A mod.io account will be created for you to browse, share and interact with user-generated content using your:</value>
  </data>
  <data name="ScreenModIoConsent_ConsentTextPart2" xml:space="preserve">
    <value> •   {0} User ID
 •   Display name
 •   Avatar</value>
  </data>
  <data name="ScreenModIoConsent_ConsentTextPart2_ps" xml:space="preserve">
    <value> •   Sign-in ID
 •   Display name
 •   Avatar</value>
  </data>
  <data name="ScreenSteamAndModIoConsent_ConsentTextPart2" xml:space="preserve">
    <value> •   {0} User online ID
 •   Display name
 •   Avatar</value>
  </data>
  <data name="ScreenModIoConsent_ConsentTextPart3" xml:space="preserve">
    <value>You agree that your display name, avatar and content will be shared through the mod.io API and website which may be publicly accessible. You can manage your mod.io account and opt out any time via mod.io.</value>
  </data>
  <data name="ScreenSteamAndModIoConsent_ConsentTextPart3" xml:space="preserve">
    <value>You agree that your display name, avatar and content will be shared through the mod.io API and website which may be publicly accessible. You can manage your mod.io account and opt out any time via mod.io.</value>
  </data>
  <data name="ScreenModIoConsent_LabelReadTOU" xml:space="preserve">
    <value>Please read Terms of Use and accept them.</value>
  </data>
  <data name="ScreenModIoConsent_LabelModIo" xml:space="preserve">
    <value>mod.io</value>
  </data>
  <data name="ScreenModIoConsent_LabelSteam" xml:space="preserve">
    <value>Steam</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkRailingEnd" xml:space="preserve">
    <value>Grated Catwalk End</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkRailingHalfLeft" xml:space="preserve">
    <value>Grated Catwalk Half Left</value>
  </data>
  <data name="DisplayName_Block_GratedCatwalkRailingHalfRight" xml:space="preserve">
    <value>Grated Catwalk Half Right</value>
  </data>
  <data name="DisplayName_Block_GratedHalfStairsMirrored" xml:space="preserve">
    <value>Grated Half Stairs Mirrored</value>
  </data>
  <data name="DisplayName_Block_RailingHalfLeft" xml:space="preserve">
    <value>Railing Half Left</value>
  </data>
  <data name="DisplayName_Block_RailingHalfRight" xml:space="preserve">
    <value>Railing Half Right</value>
  </data>
  <data name="Description_ControlSeat" xml:space="preserve">
    <value>The control seat is a cockpit block for small and large grids that allows you to control grids. It is highly comfortable but does not supply oxygen.</value>
  </data>
  <data name="DisplayName_Block_AntennaDish" xml:space="preserve">
    <value>Antenna Dish</value>
  </data>
  <data name="DisplayName_Block_DeadBody01" xml:space="preserve">
    <value>Dead Engineer 1</value>
  </data>
  <data name="DisplayName_Block_DeadBody02" xml:space="preserve">
    <value>Dead Engineer 2</value>
  </data>
  <data name="DisplayName_Block_DeadBody03" xml:space="preserve">
    <value>Dead Engineer 3</value>
  </data>
  <data name="DisplayName_Block_DeadBody04" xml:space="preserve">
    <value>Dead Engineer 4</value>
  </data>
  <data name="DisplayName_Block_DeadBody05" xml:space="preserve">
    <value>Dead Engineer 5</value>
  </data>
  <data name="DisplayName_Block_DeadBody06" xml:space="preserve">
    <value>Dead Engineer 6</value>
  </data>
  <data name="Description_BlockGroup_DeadBodies" xml:space="preserve">
    <value>The remains of unfortunate engineers. They can contain loot for others to find.</value>
  </data>
  <data name="DisplayName_BlockGroup_DeadBodies" xml:space="preserve">
    <value>Dead Engineers</value>
  </data>
  <data name="Description_DeadEngineer" xml:space="preserve">
    <value>The remains of an unfortunate engineer.</value>
  </data>
  <data name="Description_Gate" xml:space="preserve">
    <value>Gates are large reinforced doors for hallways, entrances, or small hangars. Gates are also air-tight and capable of keeping atmosphere inside.</value>
  </data>
  <data name="DisplayName_Block_Gate" xml:space="preserve">
    <value>Gate</value>
  </data>
  <data name="DisplayName_Block_OffsetDoor" xml:space="preserve">
    <value>Offset Door</value>
  </data>
  <data name="Description_SciFiWall" xml:space="preserve">
    <value>Sci-Fi Walls have 6 different sides that can be used to improve your interior design.</value>
  </data>
  <data name="DisplayName_BlockGroup_LCDGroupSOTF" xml:space="preserve">
    <value>Very Large LCD Panels from the Sparks Of the Future pack.</value>
  </data>
  <data name="DisplayName_Block_SciFiWall" xml:space="preserve">
    <value>Sci-Fi Interior Wall</value>
  </data>
  <data name="DisplayName_LCD_Panel3x3" xml:space="preserve">
    <value>Sci-Fi LCD Panel 3x3</value>
  </data>
  <data name="DisplayName_LCD_Panel5x3" xml:space="preserve">
    <value>Sci-Fi LCD Panel 5x3</value>
  </data>
  <data name="DisplayName_LCD_Panel5x5" xml:space="preserve">
    <value>Sci-Fi LCD Panel 5x5</value>
  </data>
  <data name="Description_NeonTubes" xml:space="preserve">
    <value>Neon Tubes are decorative blocks that can be built in all colors. </value>
  </data>
  <data name="DisplayName_BlockGroup_NeonTubes" xml:space="preserve">
    <value>Neon Tubes</value>
  </data>
  <data name="DisplayName_Block_NeonTubesBendDown" xml:space="preserve">
    <value>Neon Tubes Down</value>
  </data>
  <data name="DisplayName_Block_NeonTubesBendUp" xml:space="preserve">
    <value>Neon Tubes Up</value>
  </data>
  <data name="DisplayName_Block_NeonTubesCorner" xml:space="preserve">
    <value>Neon Tubes Corner</value>
  </data>
  <data name="DisplayName_Block_NeonTubesStraight1" xml:space="preserve">
    <value>Neon Tubes 1</value>
  </data>
  <data name="DisplayName_Block_NeonTubesStraight2" xml:space="preserve">
    <value>Neon Tubes 2</value>
  </data>
  <data name="DisplayName_Block_NeonTubesStraightEnd1" xml:space="preserve">
    <value>Neon Tubes End 1</value>
  </data>
  <data name="DisplayName_Block_NeonTubesStraightEnd2" xml:space="preserve">
    <value>Neon Tubes End 2</value>
  </data>
  <data name="DisplayName_Block_NeonTubesU" xml:space="preserve">
    <value>Neon Tubes U Shape</value>
  </data>
  <data name="Description_Letters" xml:space="preserve">
    <value>Letter shaped blocks</value>
  </data>
  <data name="Description_Numbers" xml:space="preserve">
    <value>Number shaped blocks</value>
  </data>
  <data name="Description_Symbols" xml:space="preserve">
    <value>Symbol shaped blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_Symbols" xml:space="preserve">
    <value>Symbols</value>
  </data>
  <data name="DisplayName_Block_SciFiTerminal" xml:space="preserve">
    <value>Sci-Fi Control Panel</value>
  </data>
  <data name="DisplayName_Block_Symbol0" xml:space="preserve">
    <value>Number 0</value>
  </data>
  <data name="DisplayName_Block_Symbol1" xml:space="preserve">
    <value>Number 1</value>
  </data>
  <data name="DisplayName_Block_Symbol2" xml:space="preserve">
    <value>Number 2</value>
  </data>
  <data name="DisplayName_Block_Symbol3" xml:space="preserve">
    <value>Number 3</value>
  </data>
  <data name="DisplayName_Block_Symbol4" xml:space="preserve">
    <value>Number 4</value>
  </data>
  <data name="DisplayName_Block_Symbol5" xml:space="preserve">
    <value>Number 5</value>
  </data>
  <data name="DisplayName_Block_Symbol6" xml:space="preserve">
    <value>Number 6</value>
  </data>
  <data name="DisplayName_Block_Symbol7" xml:space="preserve">
    <value>Number 7</value>
  </data>
  <data name="DisplayName_Block_Symbol8" xml:space="preserve">
    <value>Number 8</value>
  </data>
  <data name="DisplayName_Block_Symbol9" xml:space="preserve">
    <value>Number 9</value>
  </data>
  <data name="DisplayName_Block_SymbolA" xml:space="preserve">
    <value>Letter A</value>
  </data>
  <data name="DisplayName_Block_SymbolB" xml:space="preserve">
    <value>Letter B</value>
  </data>
  <data name="DisplayName_Block_SymbolC" xml:space="preserve">
    <value>Letter C</value>
  </data>
  <data name="DisplayName_Block_SymbolD" xml:space="preserve">
    <value>Letter D</value>
  </data>
  <data name="DisplayName_Block_SymbolDot" xml:space="preserve">
    <value>Dot</value>
  </data>
  <data name="DisplayName_Block_SymbolE" xml:space="preserve">
    <value>Letter E</value>
  </data>
  <data name="DisplayName_Block_SymbolF" xml:space="preserve">
    <value>Letter F</value>
  </data>
  <data name="DisplayName_Block_SymbolG" xml:space="preserve">
    <value>Letter G</value>
  </data>
  <data name="DisplayName_Block_SymbolH" xml:space="preserve">
    <value>Letter H</value>
  </data>
  <data name="DisplayName_Block_SymbolHyphen" xml:space="preserve">
    <value>Hyphen</value>
  </data>
  <data name="DisplayName_Block_SymbolI" xml:space="preserve">
    <value>Letter I</value>
  </data>
  <data name="DisplayName_Block_SymbolJ" xml:space="preserve">
    <value>Letter J</value>
  </data>
  <data name="DisplayName_Block_SymbolK" xml:space="preserve">
    <value>Letter K</value>
  </data>
  <data name="DisplayName_Block_SymbolL" xml:space="preserve">
    <value>Letter L</value>
  </data>
  <data name="DisplayName_Block_SymbolM" xml:space="preserve">
    <value>Letter M</value>
  </data>
  <data name="DisplayName_Block_SymbolN" xml:space="preserve">
    <value>Letter N</value>
  </data>
  <data name="DisplayName_Block_SymbolO" xml:space="preserve">
    <value>Letter O</value>
  </data>
  <data name="DisplayName_Block_SymbolP" xml:space="preserve">
    <value>Letter P</value>
  </data>
  <data name="DisplayName_Block_SymbolQ" xml:space="preserve">
    <value>Letter Q</value>
  </data>
  <data name="DisplayName_Block_SymbolR" xml:space="preserve">
    <value>Letter R</value>
  </data>
  <data name="DisplayName_Block_SymbolS" xml:space="preserve">
    <value>Letter S</value>
  </data>
  <data name="DisplayName_Block_SymbolT" xml:space="preserve">
    <value>Letter T</value>
  </data>
  <data name="DisplayName_Block_SymbolU" xml:space="preserve">
    <value>Letter U</value>
  </data>
  <data name="DisplayName_Block_SymbolUnderscore" xml:space="preserve">
    <value>Underscore</value>
  </data>
  <data name="DisplayName_Block_SymbolV" xml:space="preserve">
    <value>Letter V</value>
  </data>
  <data name="DisplayName_Block_SymbolW" xml:space="preserve">
    <value>Letter W</value>
  </data>
  <data name="DisplayName_Block_SymbolX" xml:space="preserve">
    <value>Letter X</value>
  </data>
  <data name="DisplayName_Block_SymbolY" xml:space="preserve">
    <value>Letter Y</value>
  </data>
  <data name="DisplayName_Block_SymbolZ" xml:space="preserve">
    <value>Letter Z</value>
  </data>
  <data name="DisplayName_Category_Symbols" xml:space="preserve">
    <value>   Symbols</value>
  </data>
  <data name="DisplayName_Block_SciFiButtonPanel" xml:space="preserve">
    <value>Sci-Fi Four-Button Panel</value>
  </data>
  <data name="DisplayName_Screen_Numpad1" xml:space="preserve">
    <value>Numpad 1</value>
  </data>
  <data name="DisplayName_Screen_Numpad2" xml:space="preserve">
    <value>Numpad 2</value>
  </data>
  <data name="DisplayName_Screen_Numpad3" xml:space="preserve">
    <value>Numpad 3</value>
  </data>
  <data name="DisplayName_Screen_Numpad4" xml:space="preserve">
    <value>Numpad 4</value>
  </data>
  <data name="ScreenModIoConsent_AgreeHelpText" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} I Agree</value>
  </data>
  <data name="ScreenModIoConsent_OptOutHelpText" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_Y} Opt Out</value>
  </data>
  <data name="ScreenModIoConsent_PrivacyPolicy_UrlFriendlyName" xml:space="preserve">
    <value>Mod.io - Privacy Policy</value>
  </data>
  <data name="ScreenModIoConsent_TermsOfUse_UrlFriendlyName" xml:space="preserve">
    <value>Mod.io - Terms of Use</value>
  </data>
  <data name="ScreenModIoConsent_SteamPrivacyPolicy_UrlFriendlyName" xml:space="preserve">
    <value>Steam - Privacy Policy</value>
  </data>
  <data name="ScreenModIoConsent_SteamTermsOfUse_UrlFriendlyName" xml:space="preserve">
    <value>Steam - Terms of Use</value>
  </data>
  <data name="ControlsOptions_Help_Scheme" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Select  {CONTROL:GUI:BUTTON_Y} Show scheme</value>
  </data>
  <data name="TerminalInventory_Help_TransferItems" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Transfer items   </value>
  </data>
  <data name="LCD_Poster_CosmicCoffee01" xml:space="preserve">
    <value>Poster Cosmic Coffee 1</value>
  </data>
  <data name="LCD_Poster_CosmicCoffee02" xml:space="preserve">
    <value>Poster Cosmic Coffee 2</value>
  </data>
  <data name="LCD_Poster_IWantYou" xml:space="preserve">
    <value>Poster Recruit</value>
  </data>
  <data name="LCD_Poster_klangCola01" xml:space="preserve">
    <value>Poster Klang Cola 1</value>
  </data>
  <data name="LCD_Poster_klangCola02" xml:space="preserve">
    <value>Poster Klang Cola 2</value>
  </data>
  <data name="LCD_Poster_ROS01" xml:space="preserve">
    <value>Poster ROS 1</value>
  </data>
  <data name="LCD_Poster_ROS02" xml:space="preserve">
    <value>Poster ROS 2</value>
  </data>
  <data name="LCD_CosmicTeam_Landscape" xml:space="preserve">
    <value>Poster Cosmic Team H</value>
  </data>
  <data name="LCD_CosmicTeam_Portrait" xml:space="preserve">
    <value>Poster Cosmic Team V</value>
  </data>
  <data name="LCD_Exploration_Landscape" xml:space="preserve">
    <value>Poster Exploration H</value>
  </data>
  <data name="LCD_Exploration_Portrait" xml:space="preserve">
    <value>Poster Exploration V</value>
  </data>
  <data name="LCD_ThunderFleet_Landscape" xml:space="preserve">
    <value>Poster Thunder Fleet H</value>
  </data>
  <data name="LCD_ThunderFleet_Portrait" xml:space="preserve">
    <value>Poster Thunder Fleet V</value>
  </data>
  <data name="Description_FAQ_FrostbitePack" xml:space="preserve">
    <value>The Frostbite Pack includes a new scenario and four new blocks: Antenna Dish, Dead Engineers, Gate and the Offset Door. Additionally, this DLC features the Frozen Armor Skin and LCD Posters.</value>
  </data>
  <data name="Description_AntennaDish" xml:space="preserve">
    <value>Antennas can be used to broadcast positions, messages HUD markers and allows grids to be accessed or controlled from a distance.

Antennas need to be able to send and receive, so make sure two antennas always overlap each other's position.</value>
  </data>
  <data name="Description_OffsetDoor" xml:space="preserve">
    <value>Doors can seal off interiors and make them air tight while still allowing access for the player.</value>
  </data>
  <data name="BroadcastScreen_Antenna" xml:space="preserve">
    <value>   Antenna</value>
  </data>
  <data name="BroadcastScreen_RemoteControl" xml:space="preserve">
    <value>   Remote Control</value>
  </data>
  <data name="MessageBoxWorldOperation_Quota" xml:space="preserve">
    <value>There is not enough space for the operation. Please, remove some saved games or blueprints and try again.</value>
  </data>
  <data name="MessageBoxWorldOperation_CloudSynchronization" xml:space="preserve">
    <value>Cloud synchronization failed. Please, enable cloud synchronization and try again later.</value>
  </data>
  <data name="MessageBoxWorldOperation_Error" xml:space="preserve">
    <value>The operation failed. Please, try again later.</value>
  </data>
  <data name="MessageBoxWorldSave_Quota" xml:space="preserve">
    <value>There is not enough space to save the game! Please, remove some saved games or blueprints and try again.</value>
  </data>
  <data name="DisplayName_Block_NeonTubesStraightDown" xml:space="preserve">
    <value>Neon Tubes Down 2</value>
  </data>
  <data name="DisplayName_Block_SciFiButtonTerminal" xml:space="preserve">
    <value>Sci-Fi One-Button Terminal</value>
  </data>
  <data name="DisplayName_Block_LargeHinge" xml:space="preserve">
    <value>Hinge</value>
  </data>
  <data name="DisplayName_Block_MediumHinge" xml:space="preserve">
    <value>Hinge 3x3</value>
  </data>
  <data name="DisplayName_Block_SmallHinge" xml:space="preserve">
    <value>Hinge</value>
  </data>
  <data name="Description_Hinge" xml:space="preserve">
    <value>Hinges can transfer items and rotate up to 180 degrees.</value>
  </data>
  <data name="Description_HingeHead" xml:space="preserve">
    <value>Hinge Parts can be reattached to hinges.</value>
  </data>
  <data name="DisplayName_Block_LargeHingeHead" xml:space="preserve">
    <value>Hinge Part</value>
  </data>
  <data name="DisplayName_Block_MediumHingeHead" xml:space="preserve">
    <value>Hinge Part 3x3</value>
  </data>
  <data name="DisplayName_Block_SmallHingeHead" xml:space="preserve">
    <value>Hinge Part</value>
  </data>
  <data name="DisplayName_Block_SymbolAnd" xml:space="preserve">
    <value>And</value>
  </data>
  <data name="DisplayName_Block_SymbolApostrophe" xml:space="preserve">
    <value>Apostrophe</value>
  </data>
  <data name="DisplayName_Block_SymbolColon" xml:space="preserve">
    <value>Colon</value>
  </data>
  <data name="DisplayName_Block_SymbolExclamationMark" xml:space="preserve">
    <value>Exclamationmark</value>
  </data>
  <data name="DisplayName_Block_SymbolQuestionMark" xml:space="preserve">
    <value>Questionmark</value>
  </data>
  <data name="RadialMenuGroupTitle_BlueprintActions" xml:space="preserve">
    <value>Blueprint Actions</value>
  </data>
  <data name="TerminalTab_GPS_CopyToClipboard_GamepadHelp" xml:space="preserve">
    <value>Open chat and use {CONTROL:GUI:RIGHT_STICK_BUTTON} to paste GPS</value>
  </data>
  <data name="ToolTipTerminalInventory_ItemInfoGamepad" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_BUTTON} + {GAMEPAD:AXIS_DPAD} Move item
Hold {CONTROL:GUI:LEFT_BUTTON} for transfer * 10
Hold {CONTROL:GUI:RIGHT_BUTTON} for transfer * 100
Hold {CONTROL:GUI:LEFT_BUTTON} + {CONTROL:GUI:RIGHT_BUTTON} for transfer * 1000
Hold {CONTROL:GUI:BUTTON_A} to split stack</value>
  </data>
  <data name="ControlName_BlockAutorotation" xml:space="preserve">
    <value>Toggle block auto-rotation</value>
  </data>
  <data name="HelpScreen_ControllerColorNext" xml:space="preserve">
    <value>Select next color</value>
  </data>
  <data name="HelpScreen_ControllerColorPrevious" xml:space="preserve">
    <value>Select previous color</value>
  </data>
  <data name="HelpScreen_ControllerSkinNext" xml:space="preserve">
    <value>Select next skin</value>
  </data>
  <data name="HelpScreen_ControllerSkinPrevious" xml:space="preserve">
    <value>Select previous skin</value>
  </data>
  <data name="HelpScreen_RotateCamera" xml:space="preserve">
    <value>Camera rotation</value>
  </data>
  <data name="HelpScreen_ZoomCamera" xml:space="preserve">
    <value>CameraZoom</value>
  </data>
  <data name="Spectator_BlockRadialMenu" xml:space="preserve">
    <value>Open Block radial menu</value>
  </data>
  <data name="Spectator_HorizontalMovement" xml:space="preserve">
    <value>Horizontal movement</value>
  </data>
  <data name="Spectator_Rotation" xml:space="preserve">
    <value>Rotation</value>
  </data>
  <data name="Spectator_SystemRadialMenu" xml:space="preserve">
    <value>Open System radial menu</value>
  </data>
  <data name="HelpScreen_Strafe" xml:space="preserve">
    <value>Strafe</value>
  </data>
  <data name="HelpScreen_Warnings" xml:space="preserve">
    <value>Open Warning screen</value>
  </data>
  <data name="ProgressScreen_LoadingWorld" xml:space="preserve">
    <value>Preparing world loading</value>
  </data>
  <data name="ProgressScreen_UnloadingWorld" xml:space="preserve">
    <value>Unloading world</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_ActiveFilter" xml:space="preserve">
    <value>Active filter:</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_AllInventories" xml:space="preserve">
    <value>All inventories</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_Character" xml:space="preserve">
    <value>Character</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_CurrentShip" xml:space="preserve">
    <value>Current ship</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_EnergyInventories" xml:space="preserve">
    <value>Energy inventories</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_ShipOrStation" xml:space="preserve">
    <value>Ship or Station</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_StorageInventories" xml:space="preserve">
    <value>Storage inventories</value>
  </data>
  <data name="ScreenTerminalInventory_FilterGamepadHelp_SystemInventories" xml:space="preserve">
    <value>System inventories</value>
  </data>
  <data name="Dampeners_Relative" xml:space="preserve">
    <value>Toggle Relative dampeners</value>
  </data>
  <data name="ToolTipTerminalProduction_AddToQueueGamepad" xml:space="preserve">
    <value>{CONTROL:GUI:ACCEPT} Add to queue</value>
  </data>
  <data name="ToolTipTerminalProduction_ItemInfoGamepad" xml:space="preserve">
    <value>Hold {CONTROL:GUI:LEFT_BUTTON} for queue * 10 
Hold {CONTROL:GUI:RIGHT_BUTTON} for queue * 100 
Hold {CONTROL:GUI:LEFT_BUTTON} + {CONTROL:GUI:RIGHT_BUTTON} for queue * 1000</value>
  </data>
  <data name="ToolTipTerminalProduction_ProductionQueue_ItemInfoGamepad" xml:space="preserve">
    <value>{CONTROL:GUI:RIGHT_BUTTON} + {GAMEPAD:AXIS_DPAD} Move item
Hold {CONTROL:GUI:LEFT_BUTTON} to remove * 10 
Hold {CONTROL:GUI:RIGHT_BUTTON} to remove * 100 
Hold {CONTROL:GUI:LEFT_BUTTON} + {CONTROL:GUI:RIGHT_BUTTON} to remove * 1000</value>
  </data>
  <data name="ControlMenuItemLabel_EquipVoxelhand" xml:space="preserve">
    <value>Equip Voxel hand</value>
  </data>
  <data name="DialogBlueprintRename_GamepadHelp" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} OK   {CONTROL:GUI:CANCEL} Back</value>
  </data>
  <data name="AreaInteration_Label" xml:space="preserve">
    <value>Enable Area interaction</value>
  </data>
  <data name="ToolTipOptionsGame_AreaInteraction" xml:space="preserve">
    <value>Area interaction enables you to interact with objects that are close to the crosshair without looking at them directly.</value>
  </data>
  <data name="OpenDlcShop" xml:space="preserve">
    <value>Open store</value>
  </data>
  <data name="OpenDlcShop_ps" xml:space="preserve">
    <value>Open PlayStation™Store</value>
  </data>
  <data name="TieredUpdate_GridPresenceNotAvailable" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="TieredUpdate_GridPresenceTier" xml:space="preserve">
    <value>Grid presence tier: </value>
  </data>
  <data name="TieredUpdate_PlayerPresenceNotAvailable" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="TieredUpdate_PlayerPresenceTier" xml:space="preserve">
    <value>Player presence tier: </value>
  </data>
  <data name="GPSScreen_hueLabel" xml:space="preserve">
    <value>H</value>
  </data>
  <data name="GPSScreen_saturationLabel" xml:space="preserve">
    <value>S</value>
  </data>
  <data name="GPSScreen_valueLabel" xml:space="preserve">
    <value>V</value>
  </data>
  <data name="GPSScreen_hexLabel" xml:space="preserve">
    <value>Hex</value>
  </data>
  <data name="GPSScreen_hueTooltip" xml:space="preserve">
    <value>Hue: </value>
  </data>
  <data name="GPSScreen_saturationTooltip" xml:space="preserve">
    <value>Saturation:</value>
  </data>
  <data name="GPSScreen_valueTooltip" xml:space="preserve">
    <value>Value:</value>
  </data>
  <data name="GPSScreen_hexTooltip" xml:space="preserve">
    <value>Colors HEX: </value>
  </data>
  <data name="NotReplicated" xml:space="preserve">
    <value>Not replicated</value>
  </data>
  <data name="Replicated" xml:space="preserve">
    <value>Replicated</value>
  </data>
  <data name="TieredUpdate_IsReplicated" xml:space="preserve">
    <value>Is replicated: </value>
  </data>
  <data name="TieredUpdate_IsReplicated_False" xml:space="preserve">
    <value>No</value>
  </data>
  <data name="TieredUpdate_IsReplicated_NA" xml:space="preserve">
    <value>N/A</value>
  </data>
  <data name="TieredUpdate_IsReplicated_True" xml:space="preserve">
    <value>Yes</value>
  </data>
  <data name="BlueprintScreen_FilePathTooLong_Caption" xml:space="preserve">
    <value>File path too long</value>
  </data>
  <data name="BlueprintScreen_FilePathTooLong_Description" xml:space="preserve">
    <value>File path is too long, current length is {0}, maximum length is {1}. Path: 
{2}</value>
  </data>
  <data name="DisplayName_Block_SideDoor" xml:space="preserve">
    <value>Sci-Fi Sliding Door</value>
  </data>
  <data name="Description_BarCounter" xml:space="preserve">
    <value>With a decorative bar counter block you can create a place to serve drinks and share stories of heroism and tragedy.</value>
  </data>
  <data name="DisplayName_Block_BarCounter" xml:space="preserve">
    <value>Sci-Fi Bar Counter</value>
  </data>
  <data name="DisplayName_Block_BarCounterCorner" xml:space="preserve">
    <value>Sci-Fi Bar Counter Corner</value>
  </data>
  <data name="DisplayName_Block_LargeThrustSciFi" xml:space="preserve">
    <value>Sci-Fi Large Ion Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallThrustSciFi" xml:space="preserve">
    <value>Sci-Fi Ion Thruster</value>
  </data>
  <data name="DisplayName_BlockGroup_LettersAH" xml:space="preserve">
    <value>letters A to H</value>
  </data>
  <data name="Description_TextBlocks" xml:space="preserve">
    <value>Letters, numbers and symbol blocks allow you to build text and indications onto your ships and structures. </value>
  </data>
  <data name="Description_FAQ_SOTFPack" xml:space="preserve">
    <value>The Sparks Of The Future Pack comes with several new blocks like Neon Tubes, a small grid door and a unique button panels. It also comes with several new character animations and armor skins.</value>
  </data>
  <data name="Description_FAQ_Weather" xml:space="preserve">
    <value>There are unique weather systems on every planet that can affect sunlight, wind, oxygen and temperature. Lightning can be dangerous and damage your structures but prioritizes some blocks. Weather can be disabled in world settings.</value>
  </data>
  <data name="RadialMenuGroupTitle_Symbols" xml:space="preserve">
    <value>Screens &amp; Symbols</value>
  </data>
  <data name="LCD_BrightFuture_Landscape" xml:space="preserve">
    <value>Poster Bright Future H</value>
  </data>
  <data name="LCD_BrightFuture_Portrait" xml:space="preserve">
    <value>Poster Bright Future V</value>
  </data>
  <data name="LCD_BrightFuture_Square" xml:space="preserve">
    <value>Poster Bright Future</value>
  </data>
  <data name="LCD_CosmicTeam_Square" xml:space="preserve">
    <value>Poster Cosmic Team</value>
  </data>
  <data name="LCD_Exploration_Square" xml:space="preserve">
    <value>Poster Exploration</value>
  </data>
  <data name="LCD_SpaceTravel_Landscape" xml:space="preserve">
    <value>Poster Space Travel H</value>
  </data>
  <data name="LCD_SpaceTravel_Portrait" xml:space="preserve">
    <value>Poster Space Travel V</value>
  </data>
  <data name="LCD_SpaceTravel_Square" xml:space="preserve">
    <value>Poster Space Travel</value>
  </data>
  <data name="LCD_ThunderFleet_Square" xml:space="preserve">
    <value>Poster Thunder Fleet</value>
  </data>
  <data name="ScreenDebugAdminMenu_RevertBoulderTooltip" xml:space="preserve">
    <value>For Boulder reverting, minimum player distance is: {0} m.</value>
  </data>
  <data name="DisplayName_TSS_Weather_Marsstorm" xml:space="preserve">
    <value>Dust Storm</value>
  </data>
  <data name="DisplayName_TSS_Weather_SnowStorm" xml:space="preserve">
    <value>Snow Storm</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration3" xml:space="preserve">
    <value>Decoration #3</value>
  </data>
  <data name="ScreenDebugAdminMenu_CameraSmoothness" xml:space="preserve">
    <value>Camera Smoothness</value>
  </data>
  <data name="ScreenDebugAdminMenu_Follow" xml:space="preserve">
    <value>Follow</value>
  </data>
  <data name="ScreenDebugAdminMenu_Free" xml:space="preserve">
    <value>Free</value>
  </data>
  <data name="ScreenDebugAdminMenu_None" xml:space="preserve">
    <value>None</value>
  </data>
  <data name="ScreenDebugAdminMenu_Orbit" xml:space="preserve">
    <value>Orbit</value>
  </data>
  <data name="ScreenSpectatorAdminMenu_Load" xml:space="preserve">
    <value>Num "number" - load camera position</value>
  </data>
  <data name="ScreenSpectatorAdminMenu_Save" xml:space="preserve">
    <value>Ctrl + Num "number" - save camera position</value>
  </data>
  <data name="ScreenSpectatorAdminMenu_SavedPositions" xml:space="preserve">
    <value>Saved Positions</value>
  </data>
  <data name="ScreenSpectatorAdminMenu_Shortcuts" xml:space="preserve">
    <value>Shortcuts</value>
  </data>
  <data name="ScreenDebugAdminMenu_Empty" xml:space="preserve">
    <value>&lt;Empty&gt;</value>
  </data>
  <data name="Description_ExhaustPipe" xml:space="preserve">
    <value>Exhaust blocks emit particles like smoke and fire to decorate vehicles and structures.</value>
  </data>
  <data name="DisplayName_Block_ExhaustPipe" xml:space="preserve">
    <value>Exhaust Pipe</value>
  </data>
  <data name="DisplayName_Block_ExhaustCap" xml:space="preserve">
    <value>Exhaust Cap</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension1x1" xml:space="preserve">
    <value>Offroad Wheel Suspension 1x1 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension1x1mirrored" xml:space="preserve">
    <value>Offroad Wheel Suspension 1x1 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension3x3" xml:space="preserve">
    <value>Offroad Wheel Suspension 3x3 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension3x3mirrored" xml:space="preserve">
    <value>Offroad Wheel Suspension 3x3 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension5x5" xml:space="preserve">
    <value>Offroad Wheel Suspension 5x5 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension5x5mirrored" xml:space="preserve">
    <value>Offroad Wheel Suspension 5x5 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel1x1" xml:space="preserve">
    <value>Offroad Wheel 1x1</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel3x3" xml:space="preserve">
    <value>Offroad Wheel 3x3</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel5x5" xml:space="preserve">
    <value>Offroad Wheel 5x5</value>
  </data>
  <data name="String2" xml:space="preserve">
    <value />
  </data>
  <data name="Description_BuggyCockpit" xml:space="preserve">
    <value>The Buggy Cockpit is similar to the rover cockpit but with a roll cage to keep you safe. Please keep hands and feet inside. </value>
  </data>
  <data name="Description_RoverCockpit" xml:space="preserve">
    <value>The Rover Cockpit is a compact cockpit designed for rovers but works just as well for small ships or large small grid interiors. </value>
  </data>
  <data name="DisplayName_Block_BuggyCockpit" xml:space="preserve">
    <value>Buggy Cockpit</value>
  </data>
  <data name="DisplayName_Block_RoverCockpit" xml:space="preserve">
    <value>Rover Cockpit</value>
  </data>
  <data name="DisplayName_Screen_Left" xml:space="preserve">
    <value>Left Screen</value>
  </data>
  <data name="DisplayName_Screen_Right" xml:space="preserve">
    <value>Right Screen</value>
  </data>
  <data name="DisplayName_Screen_Small" xml:space="preserve">
    <value>Small Screen</value>
  </data>
  <data name="DisplayName_TSS_Weather_ElectricStorm" xml:space="preserve">
    <value>Electric Storm</value>
  </data>
  <data name="AlienFogLight" xml:space="preserve">
    <value>Alien Fog Light</value>
  </data>
  <data name="AlienFogHeavy" xml:space="preserve">
    <value>Alien Fog Heavy</value>
  </data>
  <data name="AlienRainLight" xml:space="preserve">
    <value>Alien Rain Light</value>
  </data>
  <data name="AlienRainHeavy" xml:space="preserve">
    <value>Alien Rain Heavy</value>
  </data>
  <data name="AlienThunderstormHeavy" xml:space="preserve">
    <value>Alien Thunderstorm Heavy</value>
  </data>
  <data name="AlienThunderstormLight" xml:space="preserve">
    <value>Alien Thunderstorm Light</value>
  </data>
  <data name="Dust" xml:space="preserve">
    <value>Dust</value>
  </data>
  <data name="ElectricStorm" xml:space="preserve">
    <value>Electric Storm</value>
  </data>
  <data name="SnowLight" xml:space="preserve">
    <value>Snow Light</value>
  </data>
  <data name="SnowHeavy" xml:space="preserve">
    <value>Snow Heavy</value>
  </data>
  <data name="SandStormLight" xml:space="preserve">
    <value>SandStorm Light</value>
  </data>
  <data name="SandStormHeavy" xml:space="preserve">
    <value>SandStorm Heavy</value>
  </data>
  <data name="FogLight" xml:space="preserve">
    <value>Fog Light</value>
  </data>
  <data name="FogHeavy" xml:space="preserve">
    <value>Fog Heavy</value>
  </data>
  <data name="MarsSnow" xml:space="preserve">
    <value>Mars Snow</value>
  </data>
  <data name="MarsStormHeavy" xml:space="preserve">
    <value>Mars Storm Heavy</value>
  </data>
  <data name="MarsStormLight" xml:space="preserve">
    <value>Mars Storm Light</value>
  </data>
  <data name="ThunderstormLight" xml:space="preserve">
    <value>Thunderstorm Light</value>
  </data>
  <data name="ThunderstormHeavy" xml:space="preserve">
    <value>Thunderstorm Heavy</value>
  </data>
  <data name="RainHeavy" xml:space="preserve">
    <value>Rain Heavy</value>
  </data>
  <data name="RainLight" xml:space="preserve">
    <value>Rain Light</value>
  </data>
  <data name="BlockPropertyTitle_ExhaustEffect" xml:space="preserve">
    <value>Exhaust Effect</value>
  </data>
  <data name="BlockPropertyTitle_PowerDependency" xml:space="preserve">
    <value>Power Dependency</value>
  </data>
  <data name="BlockPropertyDescription_PowerDependency" xml:space="preserve">
    <value>Determines how much of the glow effect is dependent on power consumption percentage of the grid.</value>
  </data>
  <data name="DisplayName_Block_Viewport1" xml:space="preserve">
    <value>Viewport 1</value>
  </data>
  <data name="DisplayName_Block_Viewport2" xml:space="preserve">
    <value>Viewport 2</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ChangeCharacter" xml:space="preserve">
    <value>Change Character</value>
  </data>
  <data name="ScreenDebugAdminMenu_ReplayTool_ChangeCharacter_Tooltip" xml:space="preserve">
    <value>Changes the currently active character.</value>
  </data>
  <data name="Description_OffsetLight" xml:space="preserve">
    <value>The Offset Light and Offset Spotlight function the same as regular lights and can be used to illuminate dark areas.</value>
  </data>
  <data name="DisplayName_Block_OffsetLight" xml:space="preserve">
    <value>Offset Light</value>
  </data>
  <data name="DisplayName_Block_OffsetSpotlight" xml:space="preserve">
    <value>Offset Spotlight</value>
  </data>
  <data name="Description_BarredWindow" xml:space="preserve">
    <value>Barred windows have the same integrity as glass windows but are not air tight. Great for keeping big spiders outside.</value>
  </data>
  <data name="DisplayName_Block_BarredWindow" xml:space="preserve">
    <value>Barred Window</value>
  </data>
  <data name="DisplayName_Block_BarredWindowFace" xml:space="preserve">
    <value>Barred Window Face</value>
  </data>
  <data name="DisplayName_Block_BarredWindowSide" xml:space="preserve">
    <value>Barred Window Side</value>
  </data>
  <data name="DisplayName_Block_BarredWindowSlope" xml:space="preserve">
    <value>Barred Window Slope</value>
  </data>
  <data name="DisplayName_BlockGroup_BarredWindows" xml:space="preserve">
    <value>Barred Windows</value>
  </data>
  <data name="Description_StorageShelf" xml:space="preserve">
    <value>Storage Shelves can be used to store components and make your hangar or garage look messy and productive.</value>
  </data>
  <data name="DisplayName_BlockGroup_StorageShelves" xml:space="preserve">
    <value>Storage Shelves</value>
  </data>
  <data name="DisplayName_Block_StorageShelf1" xml:space="preserve">
    <value>Storage Shelf 1</value>
  </data>
  <data name="DisplayName_Block_StorageShelf2" xml:space="preserve">
    <value>Storage Shelf 2</value>
  </data>
  <data name="DisplayName_Block_StorageShelf3" xml:space="preserve">
    <value>Storage Shelf 3</value>
  </data>
  <data name="Description_FAQ_ScrapRacePack" xml:space="preserve">
    <value>The Wasteland Pack includes a new multiplayer scenario and several new blocks like the Off Road wheels, Car lights, Buggy cockpit, Viewport Blocks and the Exhaust Pipe. Additionally, this DLC features several new armor and player skins like the Heavy Rust Armor Skin, Concrete Armor skin and the Scavenger character skin.</value>
  </data>
  <data name="Description_ViewPort" xml:space="preserve">
    <value>Viewports are windows that fit flush with armor blocks and combine easily with desks and kitchens.</value>
  </data>
  <data name="ControlMenuItemLabel_CrackedSoil" xml:space="preserve">
    <value>Cracked soil</value>
  </data>
  <data name="ControlMenuItemLabel_DustyRocks" xml:space="preserve">
    <value>Dusty rocks 1</value>
  </data>
  <data name="ControlMenuItemLabel_DustyRocks2" xml:space="preserve">
    <value>Dusty rocks 2</value>
  </data>
  <data name="ControlMenuItemLabel_DustyRocks3" xml:space="preserve">
    <value>Dusty rocks 3</value>
  </data>
  <data name="ControlMenuItemLabel_PertamSand" xml:space="preserve">
    <value>Pertam sand</value>
  </data>
  <data name="ControlMenuItemLabel_TritonBlend" xml:space="preserve">
    <value>Triton blend</value>
  </data>
  <data name="ControlMenuItemLabel_TritonIce" xml:space="preserve">
    <value>Triton ice</value>
  </data>
  <data name="ControlMenuItemLabel_TritonStone" xml:space="preserve">
    <value>Triton stone</value>
  </data>
  <data name="RadialMenuGroupTitle_VoxelTritonPertam" xml:space="preserve">
    <value>Triton and Pertam</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel1x1mirrored" xml:space="preserve">
    <value>Offroad Wheel 1x1</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel3x3mirrored" xml:space="preserve">
    <value>Offroad Wheel 3x3</value>
  </data>
  <data name="Description_DLC_Warfare1" xml:space="preserve">
    <value>Warfare I.</value>
  </data>
  <data name="DisplayName_DLC_Warfare1" xml:space="preserve">
    <value>Warfare I.</value>
  </data>
  <data name="Description_WeaponRack" xml:space="preserve">
    <value>The Weapon Rack stores weapons and ammunition for quick access.</value>
  </data>
  <data name="DisplayName_Block_WeaponRack" xml:space="preserve">
    <value>Weapon Rack</value>
  </data>
  <data name="Description_TargetingSystemBlock" xml:space="preserve">
    <value>Targeting System Block Description</value>
  </data>
  <data name="DisplayName_Block_TargetingSystemBlock" xml:space="preserve">
    <value>Targeting System Block</value>
  </data>
  <data name="DisplayName_DLC_Warfare1DLC" xml:space="preserve">
    <value>Warfare 1 Blocks</value>
  </data>
  <data name="RadialMenuGroupTitle_ArmorHeavy" xml:space="preserve">
    <value>Heavy Armor</value>
  </data>
  <data name="WorkshopBrowser_Service0" xml:space="preserve">
    <value>Steam</value>
  </data>
  <data name="WorkshopBrowser_Service1" xml:space="preserve">
    <value>Mod.io</value>
  </data>
  <data name="PublishBlueprint_Caption" xml:space="preserve">
    <value>Publish</value>
  </data>
  <data name="PublishBlueprint_Question" xml:space="preserve">
    <value>Do you want to publish this blueprint?</value>
  </data>
  <data name="WorldFileCouldNotBeEdited" xml:space="preserve">
    <value>Changing campaign settings may cause serious problems. It is allowed only in experimental mode.</value>
  </data>
  <data name="TerminalTab_Factions_LeaveToolTip_Balancing" xml:space="preserve">
    <value>You cannot leave factions when autobalancing is enabled</value>
  </data>
  <data name="Description_SemiAutoPistol" xml:space="preserve">
    <value>The S-10 standard issue sidearm. Built for use in a hostile environment: Simple, reliable, dependable.</value>
  </data>
  <data name="DisplayName_Item_SemiAutoPistol" xml:space="preserve">
    <value>S-10 Pistol</value>
  </data>
  <data name="DisplayName_Item_SemiAutoPistolMagazine" xml:space="preserve">
    <value>S-10 Pistol Magazine</value>
  </data>
  <data name="Description_FireCover" xml:space="preserve">
    <value>Fire Covers provide cover in interiors or can be used to prevent players from walking off ledges.</value>
  </data>
  <data name="DisplayName_Block_FireCover" xml:space="preserve">
    <value>Fire Cover</value>
  </data>
  <data name="DisplayName_Block_FireCoverCorner" xml:space="preserve">
    <value>Fire Cover Corner</value>
  </data>
  <data name="DisplayName_Block_HalfWindow" xml:space="preserve">
    <value>Half Window</value>
  </data>
  <data name="DisplayName_Block_HalfWindowCorner" xml:space="preserve">
    <value>Half Window Corner</value>
  </data>
  <data name="DisplayName_Block_HalfWindowCornerInv" xml:space="preserve">
    <value>Half Window Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_HalfWindowInv" xml:space="preserve">
    <value>Half Window Inv.</value>
  </data>
  <data name="DisplayName_BlockGroup_HalfWindows" xml:space="preserve">
    <value>Half Windows</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration4" xml:space="preserve">
    <value>Decoration #4</value>
  </data>
  <data name="Description_Embrasure" xml:space="preserve">
    <value>The Embrasure provides cover while allowing you to keep up the pressure on your enemies. </value>
  </data>
  <data name="DisplayName_Block_Embrasure" xml:space="preserve">
    <value>Embrasure</value>
  </data>
  <data name="Description_TargetDummy" xml:space="preserve">
    <value>The Target Dummy block allows you to hone your skills with handheld weaponry or test their mechanics. You can set them up to perform actions when hit or destroyed. The Target Dummy requires steel plates to repair itself.</value>
  </data>
  <data name="DisplayName_Block_TargetDummy" xml:space="preserve">
    <value>Target Dummy</value>
  </data>
  <data name="BlockPropertyDescription_EnableRegeneration" xml:space="preserve">
    <value>Enable dummy to be regenerated after its complete destruction.</value>
  </data>
  <data name="BlockPropertyDescription_RegenerationDelay" xml:space="preserve">
    <value>Time before the dummy is restored</value>
  </data>
  <data name="BlockPropertyTitle_EnableRegeneration" xml:space="preserve">
    <value>Enable regeneration</value>
  </data>
  <data name="BlockPropertyTitle_RegenerationDelay" xml:space="preserve">
    <value>Regeneration delay</value>
  </data>
  <data name="DisplayName_Item_AutomaticRifleGun_Mag_20rd" xml:space="preserve">
    <value>MR-20 Rifle Magazine</value>
  </data>
  <data name="DisplayName_Item_PreciseAutomaticRifleGun_Mag_5rd" xml:space="preserve">
    <value>MR-8P Rifle Magazine</value>
  </data>
  <data name="DisplayName_Item_RapidFireAutomaticRifleGun_Mag_50rd" xml:space="preserve">
    <value>MR-50A Rifle Magazine</value>
  </data>
  <data name="DisplayName_Item_UltimateAutomaticRifleGun_Mag_30rd" xml:space="preserve">
    <value>MR-30E Rifle Magazine</value>
  </data>
  <data name="Description_BasicHandHeldLauncher" xml:space="preserve">
    <value>Shoulder fired rocket ordinance. Launches a rocket propelled anti-vehicle projectile.</value>
  </data>
  <data name="DisplayName_Item_BasicHandHeldLauncher" xml:space="preserve">
    <value>RO-1 Rocket Launcher</value>
  </data>
  <data name="Description_AdvancedHandHeldLauncher" xml:space="preserve">
    <value>Building on the reliable design of the RO-1 the PRO-1 provides a number of battlefield improvements, including a precision scope.</value>
  </data>
  <data name="Description_ElitePistol" xml:space="preserve">
    <value>An S-10 variant, the E model sidearm features a modified "feather" trigger and boasts a red dot sight.</value>
  </data>
  <data name="Description_FullAutoPistol" xml:space="preserve">
    <value>A true "next-generation" sidearm. Featuring heat resistant components, a full-auto trigger group, and extended ammo capacity. The S-20A is purpose-built to take it to the next level.</value>
  </data>
  <data name="DisplayName_Item_AdvancedHandHeldLauncher" xml:space="preserve">
    <value>PRO-1 Rocket Launcher</value>
  </data>
  <data name="DisplayName_Item_ElitePistol" xml:space="preserve">
    <value>S-10E Pistol</value>
  </data>
  <data name="DisplayName_Item_FullAutoPistol" xml:space="preserve">
    <value>S-20A Pistol</value>
  </data>
  <data name="WarfareCounter_TimeRemaining" xml:space="preserve">
    <value>Time Remaining</value>
  </data>
  <data name="WarfareCounter_EscapePod" xml:space="preserve">
    <value>Escape Pod</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match" xml:space="preserve">
    <value>Match</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Advance" xml:space="preserve">
    <value>Advance</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Advance_Tooltip" xml:space="preserve">
    <value>Advance match to next available state</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Pause" xml:space="preserve">
    <value>Pause</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Pause_Tooltip" xml:space="preserve">
    <value>Pause the match</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Start" xml:space="preserve">
    <value>Start</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Start_Tooltip" xml:space="preserve">
    <value>Restart match to the initial state of PreMatch</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Stop" xml:space="preserve">
    <value>Stop</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Stop_Tooltip" xml:space="preserve">
    <value>End the match by advancing to Finished state</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Unpause" xml:space="preserve">
    <value>Unpause</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_Unpause_Tooltip" xml:space="preserve">
    <value>Unpause the match</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_AddTime" xml:space="preserve">
    <value>Add time</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_AddTime_Tooltip" xml:space="preserve">
    <value>Add remaining time to a current match state (can be both positive or negative)</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_DisableText" xml:space="preserve">
    <value>Match is disabled</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_EnableText" xml:space="preserve">
    <value>Match is enabled</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_NotRunningText" xml:space="preserve">
    <value>Match is not running</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_RunningText" xml:space="preserve">
    <value>Match is running</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_SetTime" xml:space="preserve">
    <value>Set time</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_SetTime_Tooltip" xml:space="preserve">
    <value>Set remaining time of current match state (must be non-negative)</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_StateText" xml:space="preserve">
    <value>Current state: {0}</value>
  </data>
  <data name="ScreenDebugAdminMenu_Match_TimeText" xml:space="preserve">
    <value>Remaining time: {0}</value>
  </data>
  <data name="DisplayName_Item_ElitePistolMagazine" xml:space="preserve">
    <value>S-10E Pistol Magazine</value>
  </data>
  <data name="DisplayName_Item_FullAutoPistolMagazine" xml:space="preserve">
    <value>S-20A Pistol Magazine</value>
  </data>
  <data name="DisplayName_Item_InteriorTurret_Mag_100rd" xml:space="preserve">
    <value>Interior Turret Ammo Box</value>
  </data>
  <data name="Description_BlueprintClass_Consumables" xml:space="preserve">
    <value>Consumables
- Click on any item to assemble it.</value>
  </data>
  <data name="DisplayName_BlueprintClass_Consumables" xml:space="preserve">
    <value>Consumables</value>
  </data>
  <data name="Description_EliteAutomaticRifle" xml:space="preserve">
    <value>The MR-30E is a modernized and battle-ready version of the well known model 20. The model 30E features 3-round burst-fire, an extended magazine, and a red dot sight.</value>
  </data>
  <data name="Description_PreciseAutomaticRifle" xml:space="preserve">
    <value>The MR-8P is designed for long range engagements. The model 8P makes use of a much heavier barrel to achieve unmatched accuracy and stopping power.</value>
  </data>
  <data name="Description_RapidFireAutomaticRifle" xml:space="preserve">
    <value>The MR-50A enjoys notoriety as the smallest squad support machine gun in modern use.  The model 50A can unleash a withering stream of suppressive fire, at a rate of 550 RPM.</value>
  </data>
  <data name="UGC_ServiceNotAvailable_NoConsent" xml:space="preserve">
    <value>: not available. User consent not granted. Go to Options / Game.</value>
  </data>
  <data name="Description_FAQ_CombatMechanics" xml:space="preserve">
    <value>Various hand-held weapons allow you to defend yourself; ranging from basic pistols useful as a sidearm to advanced rifles for special operations, and even anti-armor launchers. These weapons need to be loaded with the correct magazine. Standing still, crouching and aiming the weapon will increase accuracy and reduce recoil.</value>
  </data>
  <data name="Description_FAQ_HandHeldLaunchers" xml:space="preserve">
    <value>Hand-held launchers provide effective anti-armor capability in a small package. The hand-held launchers need to be loaded with the same rocket munition as their block counterparts.</value>
  </data>
  <data name="Description_FAQ_Pistols" xml:space="preserve">
    <value>Sidearms can be used to defend yourself in a hostile environment. They need to be loaded with the corresponding magazines.</value>
  </data>
  <data name="Description_FAQ_Rifles" xml:space="preserve">
    <value>Rifles are a step up from the basic pistol and other sidearms, do more damage to blocks, and fit specialized roles. They need to be loaded with the corresponding magazines.</value>
  </data>
  <data name="Description_FAQ_Warfare1" xml:space="preserve">
    <value>Warfare 1: Field Engineer features a variety of new blocks like the Half Window, Embrasure, Weapon Rack, and Fire Cover, as well as a new skin and emotes. </value>
  </data>
  <data name="DisplayName_Block_Passage2" xml:space="preserve">
    <value>Passage 2</value>
  </data>
  <data name="DisplayName_Block_Passage2Side" xml:space="preserve">
    <value>Passage 2 Side</value>
  </data>
  <data name="NotificationDamageTurnedOff" xml:space="preserve">
    <value>Damage is turned off</value>
  </data>
  <data name="NotificationGridIsImmune" xml:space="preserve">
    <value>This grid is immune to damage</value>
  </data>
  <data name="DisplayName_Block_Passage3" xml:space="preserve">
    <value>Passage 3</value>
  </data>
  <data name="DisplayName_Block_Passage3Cross" xml:space="preserve">
    <value>Passage 3 Cross</value>
  </data>
  <data name="DisplayName_Block_Passage3Frame" xml:space="preserve">
    <value>Passage 3 Frame</value>
  </data>
  <data name="DisplayName_Block_Passage3Light" xml:space="preserve">
    <value>Passage 3 Light</value>
  </data>
  <data name="DisplayName_Block_Passage3Wall" xml:space="preserve">
    <value>Passage 3 Wall</value>
  </data>
  <data name="DisplayName_Block_PassageScifiCorner" xml:space="preserve">
    <value>Passage 3 Corner</value>
  </data>
  <data name="DisplayName_Block_PassageSciFiTjunction" xml:space="preserve">
    <value>Passage 3 T-junction</value>
  </data>
  <data name="DisplayName_Block_PassageSciFiWindow" xml:space="preserve">
    <value>Passage 3 Windowed</value>
  </data>
  <data name="Description_MagneticPlate" xml:space="preserve">
    <value>WIP stickyBlock</value>
  </data>
  <data name="DisplayName_Block_MagneticPlateLarge" xml:space="preserve">
    <value>Large Magnetic Plate</value>
  </data>
  <data name="DisplayName_Block_LargeIndustrialCargoContainer" xml:space="preserve">
    <value>Large Industrial Cargo Container</value>
  </data>
  <data name="DisplayName_Block_VerticalButtonPanel" xml:space="preserve">
    <value>Vertical Button Panel</value>
  </data>
  <data name="DisplayName_DLC_IndustrialPackDLC" xml:space="preserve">
    <value>Industrial Blocks</value>
  </data>
  <data name="Tooltip_OverridePowerTransfer" xml:space="preserve">
    <value>Allow power transfer while current grid is powered off</value>
  </data>
  <data name="DisplayName_Block_MagneticPlateSmall" xml:space="preserve">
    <value>Magnetic Plate</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeCorner" xml:space="preserve">
    <value>Conveyor Pipe Curved</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeEnd" xml:space="preserve">
    <value>Conveyor Pipe End</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeFlange" xml:space="preserve">
    <value>Conveyor Pipe Flanged</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeIntersection" xml:space="preserve">
    <value>Conveyor Pipe Cross</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeJunction" xml:space="preserve">
    <value>Conveyor Pipe Junction</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipes" xml:space="preserve">
    <value>Industrial Conveyor Pipes</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeSeamless" xml:space="preserve">
    <value>Conveyor Pipe</value>
  </data>
  <data name="DisplayName_Block_MergeBlockSmall" xml:space="preserve">
    <value>Small Merge Block</value>
  </data>
  <data name="DisplayName_Block_BeamBlock" xml:space="preserve">
    <value>Beam Block</value>
  </data>
  <data name="DisplayName_Block_BeamBlockEnd" xml:space="preserve">
    <value>Beam Block End</value>
  </data>
  <data name="DisplayName_Block_BeamBlockHalf" xml:space="preserve">
    <value>Beam Block Half</value>
  </data>
  <data name="DisplayName_Block_BeamBlockHalfSlope" xml:space="preserve">
    <value>Beam Block Half Slope</value>
  </data>
  <data name="DisplayName_Block_BeamBlockJunction" xml:space="preserve">
    <value>Beam Block Junction</value>
  </data>
  <data name="DisplayName_Block_BeamBlockRound" xml:space="preserve">
    <value>Beam Block Round</value>
  </data>
  <data name="DisplayName_Block_BeamBlockSlope" xml:space="preserve">
    <value>Beam Block Slope</value>
  </data>
  <data name="DisplayName_Block_BeamBlockSlope2x1Base" xml:space="preserve">
    <value>Beam Block2x1 Base</value>
  </data>
  <data name="DisplayName_Block_BeamBlockSlope2x1Tip" xml:space="preserve">
    <value>Beam Block2x1 Tip</value>
  </data>
  <data name="DisplayName_Block_BeamBlockTJunction" xml:space="preserve">
    <value>Beam Block T-Junction</value>
  </data>
  <data name="Description_BeamBlock" xml:space="preserve">
    <value>Beam blocks offer a variety of different shapes to be used as decoration or light structural support.</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_01" xml:space="preserve">
    <value>Colossus On Fire</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_02" xml:space="preserve">
    <value>Designing The Fleet</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_03" xml:space="preserve">
    <value>Entropy</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_04" xml:space="preserve">
    <value>EXODUS</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_05" xml:space="preserve">
    <value>Growing Wild</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_06" xml:space="preserve">
    <value>Into the Asteroid Field</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_07" xml:space="preserve">
    <value>Last Day on Triton</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_08" xml:space="preserve">
    <value>Sands of the Slave Princess</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_09" xml:space="preserve">
    <value>Sector 347</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_10" xml:space="preserve">
    <value>Space Angels</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_11" xml:space="preserve">
    <value>Space Elevator</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_12" xml:space="preserve">
    <value>Space Engineers Main Theme</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_13" xml:space="preserve">
    <value>Space Pirates</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_14" xml:space="preserve">
    <value>SpaceItOut</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_15" xml:space="preserve">
    <value>The City Lies</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition_16" xml:space="preserve">
    <value>Timeless Space</value>
    <comment>Title. Don't translate</comment>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetLocking" xml:space="preserve">
    <value>Enable target locking</value>
  </data>
  <data name="BlockPropertyTooltip_LargeTurretTargetLocking" xml:space="preserve">
    <value>While this is enabled, you can select and lock targets while controlling this block</value>
  </data>
  <data name="BlockActionTitle_LargeTurretUnlockTarget" xml:space="preserve">
    <value>Forget target</value>
  </data>
  <data name="BlockActionTooltip_LargeTurretUnlockTarget" xml:space="preserve">
    <value>This immediately forgets the current target</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretFireAtLockedTarget" xml:space="preserve">
    <value>Fire at locked target</value>
  </data>
  <data name="BlockPropertyTooltip_LargeTurretFireAtLockedTarget" xml:space="preserve">
    <value>Enabling this will make the turrets aim and fire at a locked target</value>
  </data>
  <data name="DisplayName_Block_HydrogenTankIndustrial" xml:space="preserve">
    <value>Industrial Hydrogen Tank</value>
  </data>
  <data name="DisplayName_Block_AssemblerIndustrial" xml:space="preserve">
    <value>Industrial Assembler</value>
  </data>
  <data name="DisplayName_Block_RefineryIndustrial" xml:space="preserve">
    <value>Industrial Refinery</value>
  </data>
  <data name="DisplayName_Block_CylindricalColumn" xml:space="preserve">
    <value>Cylindrical Column</value>
  </data>
  <data name="Description_DLC_HeavyIndustry" xml:space="preserve">
    <value>Heavy Industry</value>
  </data>
  <data name="DisplayName_DLC_HeavyIndustry" xml:space="preserve">
    <value>Heavy Industry</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedPanelLight" xml:space="preserve">
    <value>Light Armor Panel 2x1 Slope Base</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfPanelLight" xml:space="preserve">
    <value>Light Armor Half Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelLight" xml:space="preserve">
    <value>Light Armor Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorSlopedPanelLight" xml:space="preserve">
    <value>Light Armor Panel Slope </value>
  </data>
  <data name="DisplayName_Block_ArmorSlopedSidePanelLight" xml:space="preserve">
    <value>Light Armor Panel Side</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideBasePanelLight" xml:space="preserve">
    <value>Light Armor Panel 2x1 Base Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideBasePanelLightInv" xml:space="preserve">
    <value>Light Armor Panel 2x1 Base Left</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfSlopedPanelLight" xml:space="preserve">
    <value>Light Armor Panel Half Slope</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Half Panel 2x1 Base Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedPanelHeavyInv" xml:space="preserve">
    <value>Heavy Armor Half Panel 2x1 Base Left</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedPanelLight" xml:space="preserve">
    <value>Light Armor Half Panel 2x1 Base Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedPanelLightInv" xml:space="preserve">
    <value>Light Armor Half Panel 2x1 Base Left</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Slope Base</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideBasePanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Base Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideBasePanelHeavyInv" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Base Left</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideTipPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Tip Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideTipPanelHeavyInv" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Tip Left</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideTipPanelLight" xml:space="preserve">
    <value>Light Armor Panel 2x1 Tip Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedSideTipPanelLightInv" xml:space="preserve">
    <value>Light Armor Panel 2x1 Tip Left</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Half Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorSlopedPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Slope</value>
  </data>
  <data name="DisplayName_Block_ArmorSlopedSidePanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Side</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfSlopedPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Half Slope</value>
  </data>
  <data name="String3" xml:space="preserve">
    <value />
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedPanelTipHeavy" xml:space="preserve">
    <value>Heavy Armor Panel 2x1 Slope Tip</value>
  </data>
  <data name="DisplayName_Block_Armor2x1SlopedPanelTipLight" xml:space="preserve">
    <value>Light Armor Panel 2x1 Slope Tip</value>
  </data>
  <data name="String4" xml:space="preserve">
    <value />
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedTipPanelLight" xml:space="preserve">
    <value>Light Armor Half Panel 2x1 Tip Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedTipPanelLightInv" xml:space="preserve">
    <value>Light Armor Half Panel 2x1 Tip Left</value>
  </data>
  <data name="DisplayName_Block_ArmorQuarterPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Quarter Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorQuarterPanelLight" xml:space="preserve">
    <value>Light Armor Quarter Panel</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedTipPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Half Panel 2x1 Tip Right</value>
  </data>
  <data name="DisplayName_Block_Armor2x1HalfSlopedTipPanelHeavyInv" xml:space="preserve">
    <value>Heavy Armor Half Panel 2x1 Tip Left</value>
  </data>
  <data name="LCD_HI_Poster1_Landscape" xml:space="preserve">
    <value>Poster Industry Of War H</value>
  </data>
  <data name="LCD_HI_Poster1_Portrait" xml:space="preserve">
    <value>Poster Industry Of War V</value>
  </data>
  <data name="LCD_HI_Poster1_Square" xml:space="preserve">
    <value>Poster Industry Of War</value>
  </data>
  <data name="LCD_HI_Poster2_Landscape" xml:space="preserve">
    <value>Poster Heavy Industry H</value>
  </data>
  <data name="LCD_HI_Poster2_Portrait" xml:space="preserve">
    <value>Poster Heavy Industry V</value>
  </data>
  <data name="LCD_HI_Poster2_Square" xml:space="preserve">
    <value>Poster Heavy Industry</value>
  </data>
  <data name="LCD_HI_Poster3_Landscape" xml:space="preserve">
    <value>Poster We Want You H</value>
  </data>
  <data name="LCD_HI_Poster3_Portrait" xml:space="preserve">
    <value>Poster We Want You V</value>
  </data>
  <data name="LCD_HI_Poster3_Square" xml:space="preserve">
    <value>Poster We Want You</value>
  </data>
  <data name="CustomWorld_PetramOrbiter" xml:space="preserve">
    <value>Pertam Orbiter</value>
  </data>
  <data name="DisplayName_Block_HydrogenThrustIndustrial" xml:space="preserve">
    <value>Industrial Hydrogen Thruster</value>
  </data>
  <data name="DisplayName_Block_IndustrialConveyorSorter" xml:space="preserve">
    <value>Industrial Conveyor Sorter</value>
  </data>
  <data name="DisplayName_Block_LargeHydrogenThrustIndustrial" xml:space="preserve">
    <value>Industrial Large Hydrogen Thruster</value>
  </data>
  <data name="Blueprint_GridType_Large" xml:space="preserve">
    <value>Large</value>
  </data>
  <data name="Blueprint_GridType_Small" xml:space="preserve">
    <value>Small</value>
  </data>
  <data name="ScreenDebugAdminMenu_Spectator" xml:space="preserve">
    <value>Spectator Tool</value>
  </data>
  <data name="TemperatureCozy" xml:space="preserve">
    <value>Cozy</value>
  </data>
  <data name="TemperatureExtremeFreeze" xml:space="preserve">
    <value>Extreme Freeze</value>
  </data>
  <data name="TemperatureExtremeHot" xml:space="preserve">
    <value>Extreme Hot</value>
  </data>
  <data name="OwnerLastLogout" xml:space="preserve">
    <value>Owner Last Logout</value>
  </data>
  <data name="PCU" xml:space="preserve">
    <value>PCU</value>
  </data>
  <data name="SpawnMenu_KeepOriginalMaterial" xml:space="preserve">
    <value>Keep Original</value>
  </data>
  <data name="SpawnMenu_KeepOriginalMaterial_Tooltip" xml:space="preserve">
    <value>Keep original asteroid material</value>
  </data>
  <data name="SpawnMenu_VoxelSize" xml:space="preserve">
    <value>Voxel Size:</value>
  </data>
  <data name="Item_Drill4_Extra_Tooltip" xml:space="preserve">
    <value>Widest cutout, fastest mining</value>
  </data>
  <data name="Item_Drill_Extra_Tooltip" xml:space="preserve">
    <value>Wider cutout, faster mining</value>
  </data>
  <data name="Item_Grinder4_Extra_Tooltip" xml:space="preserve">
    <value>Longest reach and fastest grinding</value>
  </data>
  <data name="Item_Grinder_Extra_Tooltip" xml:space="preserve">
    <value>Longer reach and faster grinding</value>
  </data>
  <data name="Item_Welder4_Extra_Tooltip" xml:space="preserve">
    <value>Longest reach and fastest welding</value>
  </data>
  <data name="Item_Welder_Extra_Tooltip" xml:space="preserve">
    <value>Longer reach and faster welding</value>
  </data>
  <data name="DisplayName_Block_ConveyorSorterIndustrial" xml:space="preserve">
    <value>Industrial Conveyor Sorter</value>
  </data>
  <data name="Blacklist" xml:space="preserve">
    <value>Blacklist</value>
  </data>
  <data name="Whitelist" xml:space="preserve">
    <value>Whitelist</value>
  </data>
  <data name="DisplayName_BlockGroup_BridgeWindowsGroup" xml:space="preserve">
    <value>Bridge Windows</value>
  </data>
  <data name="DisplayName_Block_BridgeWindow1x1Face" xml:space="preserve">
    <value>Bridge Window Face</value>
  </data>
  <data name="DisplayName_Block_BridgeWindow1x1Slope" xml:space="preserve">
    <value>Bridge Window Slope</value>
  </data>
  <data name="DisplayName_DLC_Warfare2DLC" xml:space="preserve">
    <value>Warfare 2 Blocks</value>
  </data>
  <data name="DisplayName_Block_PassengerSeatOffset" xml:space="preserve">
    <value>Passenger Seat Offset</value>
  </data>
  <data name="DisplayName_Block_PassengerSeatOld" xml:space="preserve">
    <value>Passenger Seat Old</value>
  </data>
  <data name="DisplayName_Block_PassengerBench" xml:space="preserve">
    <value>Passenger Bench</value>
  </data>
  <data name="DisplayName_TSS_TargetingInfo" xml:space="preserve">
    <value>Targeting Info</value>
  </data>
  <data name="Targeting_Distance" xml:space="preserve">
    <value>Distance</value>
  </data>
  <data name="Targeting_Locking" xml:space="preserve">
    <value>Locking</value>
  </data>
  <data name="Targeting_LosingLock" xml:space="preserve">
    <value>Losing Lock</value>
  </data>
  <data name="Targeting_NoTarget" xml:space="preserve">
    <value>No Target</value>
  </data>
  <data name="Targeting_Status" xml:space="preserve">
    <value>Status</value>
  </data>
  <data name="Targeting_Subsystem" xml:space="preserve">
    <value>Subsystem</value>
  </data>
  <data name="Targeting_Target" xml:space="preserve">
    <value>Target</value>
  </data>
  <data name="Targeting_TargetLocked" xml:space="preserve">
    <value>Target Locked</value>
  </data>
  <data name="Targeting_Velocity" xml:space="preserve">
    <value>Velocity</value>
  </data>
  <data name="Targeting_Volume" xml:space="preserve">
    <value>Volume</value>
  </data>
  <data name="TSS_TargetingInfo" xml:space="preserve">
    <value>Targeting Info</value>
  </data>
  <data name="TargetingControlHint" xml:space="preserve">
    <value>[RMB] to lock target</value>
  </data>
  <data name="DisplayName_Block_Railgun" xml:space="preserve">
    <value>Railgun</value>
  </data>
  <data name="DisplayName_Block_LightPanel" xml:space="preserve">
    <value>Light Panel</value>
  </data>
  <data name="DisplayName_Block_AirtightHangarDoorWarfare2A" xml:space="preserve">
    <value>Warfare Hangar Door</value>
  </data>
  <data name="DisplayName_Block_AirtightHangarDoorWarfare2B" xml:space="preserve">
    <value>Warfare Hangar Door Windowed</value>
  </data>
  <data name="DisplayName_Block_AirtightHangarDoorWarfare2C" xml:space="preserve">
    <value>Warfare Hangar Door 2</value>
  </data>
  <data name="DisplayName_Block_LargeReactorWarfare2" xml:space="preserve">
    <value>Large Warfare Reactor</value>
  </data>
  <data name="DisplayName_Block_SmallReactorWarfare2" xml:space="preserve">
    <value>Small Warfare Reactor</value>
  </data>
  <data name="NotificationHintLockTarget" xml:space="preserve">
    <value>{0} to lock target</value>
  </data>
  <data name="NotificationHintUnlockTarget" xml:space="preserve">
    <value>{0} to unlock target</value>
  </data>
  <data name="DisplayName_Block_RocketLauncherWarfare2" xml:space="preserve">
    <value>Warfare Rocket Launcher</value>
  </data>
  <data name="BlockActionTitle_LargeTurretFocusLockedTarget" xml:space="preserve">
    <value>Focus Locked Target</value>
  </data>
  <data name="BlockActionTooltip_LargeTurretFocusLockedTarget" xml:space="preserve">
    <value>Prioritize locked target while target lock is maintained</value>
  </data>
  <data name="Notification_TargetOutOfRange" xml:space="preserve">
    <value>{0} Turret(s) have insufficient range</value>
  </data>
  <data name="BlockActionTitle_LargeTurretCopyTarget" xml:space="preserve">
    <value>Copy target</value>
  </data>
  <data name="BlockActionTooltip_LargeTurretCopyTarget" xml:space="preserve">
    <value>Make turret lock to your target.</value>
  </data>
  <data name="Description_Autocannon" xml:space="preserve">
    <value>Medium rate of fire, with a good punch. Uses Autocannon Magazines.

Maximum range: 800 m</value>
  </data>
  <data name="DisplayName_Block_Autocannon" xml:space="preserve">
    <value>Autocannon</value>
  </data>
  <data name="DisplayName_Item_AutoCannonClip" xml:space="preserve">
    <value>Autocannon Magazine</value>
  </data>
  <data name="MeasurementUnit_Rpm" xml:space="preserve">
    <value> rpm</value>
  </data>
  <data name="MeasurementUnit_Meter" xml:space="preserve">
    <value> m</value>
  </data>
  <data name="MeasurementUnit_Kg" xml:space="preserve">
    <value> kg</value>
  </data>
  <data name="MeasurementUnit_Mps" xml:space="preserve">
    <value> m/s</value>
  </data>
  <data name="DisplayName_Block_GatlingGunWarfare2" xml:space="preserve">
    <value>Warfare Gatling Gun</value>
  </data>
  <data name="BlockPropertyTitle_AddTool" xml:space="preserve">
    <value>Add tool or weapon</value>
  </data>
  <data name="BlockPropertyTitle_AddWeapon" xml:space="preserve">
    <value>Add weapon</value>
  </data>
  <data name="BlockPropertyTitle_AssignRotorAzimuth" xml:space="preserve">
    <value>Assign azimuth rotor</value>
  </data>
  <data name="BlockPropertyTitle_AssignRotorElevation" xml:space="preserve">
    <value>Assign elevation rotor</value>
  </data>
  <data name="BlockPropertyTitle_RemoveTool" xml:space="preserve">
    <value>Remove tool or weapon</value>
  </data>
  <data name="BlockPropertyTitle_RemoveWeapon" xml:space="preserve">
    <value>Remove weapon</value>
  </data>
  <data name="BlockPropertyTitle_SelectedToolList" xml:space="preserve">
    <value>Selected tools and weapons</value>
  </data>
  <data name="BlockPropertyTitle_SelectedWeaponList" xml:space="preserve">
    <value>Selected weapons</value>
  </data>
  <data name="BlockPropertyTitle_ToolList" xml:space="preserve">
    <value>Available tools and weapons</value>
  </data>
  <data name="BlockPropertyTitle_WeaponList" xml:space="preserve">
    <value>Weapon list</value>
  </data>
  <data name="Description_DLC_Warfare2" xml:space="preserve">
    <value>Warfare II.</value>
  </data>
  <data name="DisplayName_DLC_Warfare2" xml:space="preserve">
    <value>Warfare II.</value>
  </data>
  <data name="DisplayName_Block_BatteryWarfare2" xml:space="preserve">
    <value>Warfare Battery</value>
  </data>
  <data name="BlockPropertyDescription_MultiplierAzimuth" xml:space="preserve">
    <value>Modify maximum velocity of azimuth rotor</value>
  </data>
  <data name="BlockPropertyDescription_MultiplierElevation" xml:space="preserve">
    <value>Modify maximum velocity of elevation rotor</value>
  </data>
  <data name="BlockPropertyTitle_MultiplierAzimuth" xml:space="preserve">
    <value>Azimuth velocity multiplier</value>
  </data>
  <data name="BlockPropertyTitle_MultiplierElevation" xml:space="preserve">
    <value>Elevation velocity multiplier</value>
  </data>
  <data name="Description_LargeTurretControlBlock" xml:space="preserve">
    <value>Block for controlling custom turrets</value>
  </data>
  <data name="DisplayName_TurretControlBlock" xml:space="preserve">
    <value>Custom Turret Controller</value>
  </data>
  <data name="DisplayName_Block_SlidingHatchDoor" xml:space="preserve">
    <value>Sliding Hatch Door</value>
  </data>
  <data name="DisplayName_Block_SlidingHatchDoorHalf" xml:space="preserve">
    <value>Half Sliding Hatch Door</value>
  </data>
  <data name="DisplayName_Block_MaintenancePanel" xml:space="preserve">
    <value>Maintenance Panel</value>
  </data>
  <data name="Description_Searchlight" xml:space="preserve">
    <value>Searchlights are articulated spotlights that can target nearby grids and can be used as cameras.</value>
  </data>
  <data name="DisplayName_Block_Searchlight" xml:space="preserve">
    <value>Searchlight</value>
  </data>
  <data name="DisplayName_EmoteRPS_Paper" xml:space="preserve">
    <value>Paper</value>
  </data>
  <data name="DisplayName_EmoteRPS_Rock" xml:space="preserve">
    <value>Rock</value>
  </data>
  <data name="DisplayName_EmoteRPS_Scissors" xml:space="preserve">
    <value>Scissors</value>
  </data>
  <data name="DisplayName_Block_HeatVentWarfare2" xml:space="preserve">
    <value>Heat Vent</value>
  </data>
  <data name="Description_HeatVent" xml:space="preserve">
    <value>Heat Vents open and emit light when the grid's power usage increases.</value>
  </data>
  <data name="DisplayName_Block_HeatVent" xml:space="preserve">
    <value>Heat Vent</value>
  </data>
  <data name="Description_LargeCalibreTurret" xml:space="preserve">
    <value>A titanic turret perfectly suited for battles against heavily armored targets. Uses Artillery Shells.

Maximum range: 2000 m</value>
  </data>
  <data name="Description_MediumCalibreTurret" xml:space="preserve">
    <value>Slower and bigger sibling of the Autocannon. Deals decent damage to armored targets. Uses Assault Cannon Shells.

Maximum range: 1400 m</value>
  </data>
  <data name="DisplayName_Block_AutoCannonTurret" xml:space="preserve">
    <value>Autocannon Turret</value>
  </data>
  <data name="DisplayName_Block_LargeCalibreTurret" xml:space="preserve">
    <value>Artillery Turret</value>
  </data>
  <data name="DisplayName_Block_MediumCalibreTurret" xml:space="preserve">
    <value>Assault Cannon Turret</value>
  </data>
  <data name="DisplayName_Item_LargeCalibreAmmo" xml:space="preserve">
    <value>Artillery Shell</value>
  </data>
  <data name="DisplayName_Item_MediumCalibreAmmo" xml:space="preserve">
    <value>Assault Cannon Shell</value>
  </data>
  <data name="BlockPropertyDescription_AngleDeviation" xml:space="preserve">
    <value>Turret will shoot only if the angle to target is less than deviation.</value>
  </data>
  <data name="BlockPropertyTitle_AngleDeviation" xml:space="preserve">
    <value>Angle deviation</value>
  </data>
  <data name="Description_Railgun" xml:space="preserve">
    <value>High range, maximum penetration, very low rate of fire. Needs to charge up before each shot. Uses Large Railgun Sabots.

Maximum range: 2000 m</value>
  </data>
  <data name="TurretControlBlock_Detail_Azi" xml:space="preserve">
    <value>Elevation: '{0}'
</value>
  </data>
  <data name="TurretControlBlock_Detail_Camera" xml:space="preserve">
    <value>Camera: '{0}'
</value>
  </data>
  <data name="TurretControlBlock_Detail_Elev" xml:space="preserve">
    <value>Azimuth: '{0}'
</value>
  </data>
  <data name="TurretControlBlock_Detail_Format" xml:space="preserve">
    <value>   '{0}'
</value>
  </data>
  <data name="TurretControlBlock_Detail_Status" xml:space="preserve">
    <value>Status:
</value>
  </data>
  <data name="TurretControlBlock_Detail_Status_Def" xml:space="preserve">
    <value>weapon/tool/camera</value>
  </data>
  <data name="TurretControlBlock_Detail_Status_Error1" xml:space="preserve">
    <value>   ERROR: Missing elevation or azimuth rotor/hinge
</value>
  </data>
  <data name="TurretControlBlock_Detail_Status_Error2" xml:space="preserve">
    <value>   ERROR: Must have a linked weapon, tool or camera
</value>
  </data>
  <data name="TurretControlBlock_Detail_Status_Norm" xml:space="preserve">
    <value>   NOMINAL: '{0}' used as aiming reference
</value>
  </data>
  <data name="TurretControlBlock_Detail_Status_Warn" xml:space="preserve">
    <value>   WARNING: No clue about multiple weapons yet
</value>
  </data>
  <data name="TurretControlBlock_Detail_Tool" xml:space="preserve">
    <value>Tools: 
</value>
  </data>
  <data name="TurretControlBlock_Detail_Weapon" xml:space="preserve">
    <value>Weapons: 
</value>
  </data>
  <data name="BlockPropertyTitle_SunTracking" xml:space="preserve">
    <value>Always aim at sun</value>
  </data>
  <data name="BlockPropertyTooltip_SunTracking" xml:space="preserve">
    <value>Makes the turret attempt to aim at the sun position and disables other AI features. Useful for solar collectors.</value>
  </data>
  <data name="BlockPropertyTitle_EnableAI" xml:space="preserve">
    <value>Enable AI</value>
  </data>
  <data name="DisplayName_Item_LargeRailgunAmmo" xml:space="preserve">
    <value>Large Railgun Sabot</value>
  </data>
  <data name="DisplayName_Item_SmallRailgunAmmo" xml:space="preserve">
    <value>Small Railgun Sabot</value>
  </data>
  <data name="DisplayName_Block_MediumCalibreGun" xml:space="preserve">
    <value>Assault Cannon</value>
  </data>
  <data name="DisplayName_Block_CockpitStandingBridge" xml:space="preserve">
    <value>Helm</value>
  </data>
  <data name="TssTargetingInfo_StaticGrid" xml:space="preserve">
    <value>Station</value>
  </data>
  <data name="TssTargetingInfo_NoMainCockpit" xml:space="preserve">
    <value>Main cockpit not set</value>
  </data>
  <data name="TssTargetingInfo_NoTargetLocked" xml:space="preserve">
    <value>No locked target</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetFriends" xml:space="preserve">
    <value>Target Friends</value>
  </data>
  <data name="Description_BlastDoor" xml:space="preserve">
    <value>Blast Doors are used to create custom doors in conjunction with mechanical blocks like pistons, rotors, or hinges.</value>
  </data>
  <data name="Description_TurretControlBlock" xml:space="preserve">
    <value>The Custom Turret Controller is capable of providing AI behavior to custom built rotor and hinge-based turrets.
It can also be used to manually control the turret. A custom turret requires at least one rotor/hinge and one weapon/tool or camera to be functional.</value>
  </data>
  <data name="Department_LiveOpsDesigners" xml:space="preserve">
    <value>LiveOps Designers</value>
  </data>
  <data name="Department_LiveOpsProducer" xml:space="preserve">
    <value>LiveOps Producer</value>
  </data>
  <data name="Department_LiveOpsProgrammers" xml:space="preserve">
    <value>LiveOps Programmers</value>
  </data>
  <data name="Department_LiveOpsTechLead" xml:space="preserve">
    <value>LiveOps Technical Leader</value>
  </data>
  <data name="Description_HeavyCalibreGun" xml:space="preserve">
    <value>A titanic gun perfectly suited for battles against heavily armored targets. Uses Artillery Shells.

Maximum range: 2000 m</value>
  </data>
  <data name="DisplayName_Block_HeavyCalibreGun" xml:space="preserve">
    <value>Artillery</value>
  </data>
  <data name="DisplayName_Salute" xml:space="preserve">
    <value>Salute</value>
  </data>
  <data name="Description_MediumCalibreGun" xml:space="preserve">
    <value>Slower and bigger sibling of the Autocannon. Deals decent damage to armored targets. Uses Assault Cannon Shells.

Maximum range: 1400 m</value>
  </data>
  <data name="Description_CockpitStandingBridge" xml:space="preserve">
    <value>Helms are control stations that are operated in standing position.</value>
  </data>
  <data name="DisplayName_Block_LargeModularThruster" xml:space="preserve">
    <value>Large Warfare Ion Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallModularThruster" xml:space="preserve">
    <value>Warfare Ion Thruster</value>
  </data>
  <data name="Description_AutoCannonTurret" xml:space="preserve">
    <value>Medium rate of fire, with a good punch in a small turret. Uses Autocannon Magazines.

Maximum range: 800 m</value>
  </data>
  <data name="BlockPropertyTitle_LargeTurretTargetEnemies" xml:space="preserve">
    <value>Target Enemies</value>
  </data>
  <data name="Description_SmallRailgun" xml:space="preserve">
    <value>High range, maximum penetration, very low rate of fire. Needs to charge up before each shot. Uses Small Railgun Sabots.

Maximum range: 1400 m</value>
  </data>
  <data name="Description_LargeRocketLauncher" xml:space="preserve">
    <value>A bigger version of the rocket launcher, capable of using the conveyor system to automatically reload. Uses Rockets.

Maximum range: 800 m</value>
  </data>
  <data name="CustomWorld_AsteroidArmory" xml:space="preserve">
    <value>Asteroid Armory</value>
  </data>
  <data name="DisplayName_Block_2x1RailingLeft" xml:space="preserve">
    <value>Railing 2x1 Left</value>
  </data>
  <data name="DisplayName_Block_2x1RailingRight" xml:space="preserve">
    <value>Railing 2x1 Right</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeT" xml:space="preserve">
    <value>Conveyor Tube T Junction</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeTSmall" xml:space="preserve">
    <value>Small Conveyor Tube T Junction</value>
  </data>
  <data name="DisplayName_Block_RailingCenter" xml:space="preserve">
    <value>Railing Center</value>
  </data>
  <data name="DisplayName_Block_ConveyorPipeT" xml:space="preserve">
    <value>Conveyor Pipe T Junction</value>
  </data>
  <data name="DisplayName_Block_HalfCoverWallMirror" xml:space="preserve">
    <value>Half Cover Wall Mirrored</value>
  </data>
  <data name="DisplayName_Block_HalfGratedCatwalk" xml:space="preserve">
    <value>Half Grated Catwalk</value>
  </data>
  <data name="DisplayName_Block_HalfGratedCatwalkCenterRailing" xml:space="preserve">
    <value>Half Grated Catwalk Center Railing</value>
  </data>
  <data name="DisplayName_Block_HalfGratedCatwalkRailing" xml:space="preserve">
    <value>Half Grated Catwalk Straight</value>
  </data>
  <data name="DisplayName_Block_HalfGratedCatwalkOuterRailing" xml:space="preserve">
    <value>Half Grated Catwalk Railing</value>
  </data>
  <data name="DisplayName_Block_AdvancedRotor3x3" xml:space="preserve">
    <value>Advanced Rotor 3x3</value>
  </data>
  <data name="DisplayName_Block_AdvancedRotorPart3x3" xml:space="preserve">
    <value>Advanced Rotor Part 3x3</value>
  </data>
  <data name="DisplayName_Block_DeskChairlessCornerInv" xml:space="preserve">
    <value>Chairless Desk Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_DeskCornerInv" xml:space="preserve">
    <value>Desk Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_NeonTubesCircle" xml:space="preserve">
    <value>Neon Tubes Circle</value>
  </data>
  <data name="DisplayName_Block_NeonTubesT" xml:space="preserve">
    <value>Neon Tubes T Shape</value>
  </data>
  <data name="DisplayName_Block_ConveyorConverter" xml:space="preserve">
    <value>Conveyor Converter</value>
  </data>
  <data name="DisplayName_Block_LadderShaft" xml:space="preserve">
    <value>Ladder Shaft</value>
  </data>
  <data name="Description_EngineerPlushie" xml:space="preserve">
    <value>An advanced motivational device of pristine quality.

Can not be crafted or disassembled.</value>
  </data>
  <data name="DisplayName_Block_EngineerPlushie" xml:space="preserve">
    <value>Engineer Plushie</value>
  </data>
  <data name="DisplayName_Block_HalfWindowDiagonal" xml:space="preserve">
    <value>Half Window Diagonal</value>
  </data>
  <data name="DisplayName_Block_HalfWindowRound" xml:space="preserve">
    <value>Half Window Round</value>
  </data>
  <data name="DisplayName_Block_AirVentFull" xml:space="preserve">
    <value>Air Vent Full</value>
  </data>
  <data name="DisplayName_Block_BroadcastController" xml:space="preserve">
    <value>Broadcast Controller</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuct" xml:space="preserve">
    <value>Reinforced Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuctSmall" xml:space="preserve">
    <value>Small Reinforced Conveyor Tube</value>
  </data>
  <data name="DisplayName_BlockGroup_RoundWindows" xml:space="preserve">
    <value>Round Windows</value>
  </data>
  <data name="DisplayName_Block_WindowRound" xml:space="preserve">
    <value>Round Window</value>
  </data>
  <data name="DisplayName_Block_WindowRoundCorner" xml:space="preserve">
    <value>Round Window Corner</value>
  </data>
  <data name="DisplayName_Block_WindowRoundCornerInv" xml:space="preserve">
    <value>Round Window Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_WindowRoundFace" xml:space="preserve">
    <value>Round Window Face</value>
  </data>
  <data name="DisplayName_Block_WindowRoundFaceInv" xml:space="preserve">
    <value>Round Window Face Inv.</value>
  </data>
  <data name="DisplayName_Block_WindowRoundInv" xml:space="preserve">
    <value>Round Window Inv.</value>
  </data>
  <data name="DisplayName_Block_WindowRoundInwardsCorner" xml:space="preserve">
    <value>Round Window Inwards Corner</value>
  </data>
  <data name="DisplayName_Block_WindowRoundInwardsCornerInv" xml:space="preserve">
    <value>Round Window Inwards Corner Inv.</value>
  </data>
  <data name="ScreenVictory_Draw" xml:space="preserve">
    <value>Draw</value>
  </data>
  <data name="DisplayName_Block_ArmorCenterPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Centered Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorCenterPanelLight" xml:space="preserve">
    <value>Light Armor Centered Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfCenterPanelHeavy" xml:space="preserve">
    <value>Heavy Armor Centered Half Panel</value>
  </data>
  <data name="DisplayName_Block_ArmorHalfCenterPanelLight" xml:space="preserve">
    <value>Light Armor Centered Half Panel</value>
  </data>
  <data name="DisplayName_Block_BridgeWindow1x1FaceInverted" xml:space="preserve">
    <value>Bridge Window Face Inv.</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransitionBase" xml:space="preserve">
    <value>Heavy Armor Slope Transition Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransitionBaseMirrored" xml:space="preserve">
    <value>Heavy Armor Slope Transition Base Mirrored</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransitionTip" xml:space="preserve">
    <value>Heavy Armor Slope Transition Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransitionTipMirrored" xml:space="preserve">
    <value>Heavy Armor Slope Transition Tip Mirrored</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSquareSlopedCornerBase" xml:space="preserve">
    <value>Heavy Armor Square Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSquareSlopedCornerTip" xml:space="preserve">
    <value>Heavy Armor Square Sloped Corner Tip</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorRaisedSlopedCorner" xml:space="preserve">
    <value>Heavy Armor Raised Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransition" xml:space="preserve">
    <value>Heavy Armor Slope Transition</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSlopeTransitionMirrored" xml:space="preserve">
    <value>Heavy Armor Slope Transition Mirrored</value>
  </data>
  <data name="DisplayName_Block_HeavytArmorSquareSlopedCornerTip" xml:space="preserve">
    <value>Heavy Armor Square Sloped Corner Tip Inv.</value>
  </data>
  <data name="DisplayName_Block_LightArmorRaisedSlopedCorner" xml:space="preserve">
    <value>Light Armor Raised Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransition" xml:space="preserve">
    <value>Light Armor Slope Transition</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransitionBase" xml:space="preserve">
    <value>Light Armor Slope Transition Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransitionBaseMirrored" xml:space="preserve">
    <value>Light Armor Slope Transition Base Mirrored</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransitionMirrored" xml:space="preserve">
    <value>Light Armor Slope Transition Mirrored</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransitionTip" xml:space="preserve">
    <value>Light Armor Slope Transition Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorSlopeTransitionTipMirrored" xml:space="preserve">
    <value>Light Armor Slope Transition Tip Mirrored</value>
  </data>
  <data name="DisplayName_Block_LightArmorSquareSlopedCornerBase" xml:space="preserve">
    <value>Light Armor Square Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_LightArmorSquareSlopedCornerTip" xml:space="preserve">
    <value>Light Armor Square Sloped Corner Tip</value>
  </data>
  <data name="DisplayName_Block_LightArmorSquareSlopedCornerTipInv" xml:space="preserve">
    <value>Light Armor Square Sloped Corner Tip Inv.</value>
  </data>
  <data name="DisplayName_Block_HeavyArmorSquareSlopedCornerTipInv" xml:space="preserve">
    <value>Heavy Armor Square Sloped Corner Tip Inv.</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration5" xml:space="preserve">
    <value>Decoration #5</value>
  </data>
  <data name="DisplayName_Item_Uncraftable" xml:space="preserve">
    <value>Non-craftable</value>
  </data>
  <data name="ChatAntiSpam_OnTimeoutNotification" xml:space="preserve">
    <value>You are still on spam timeout, message cannot be sent.</value>
  </data>
  <data name="ChatAntiSpam_SameMessageNotification" xml:space="preserve">
    <value>You tried sending the same message within a short amount of time. Message not sent.</value>
  </data>
  <data name="ChatAntiSpam_SpamMessageNotification" xml:space="preserve">
    <value>You have been put on timeout for spamming. Message not sent.</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuctCurved" xml:space="preserve">
    <value>Reinforced Curved Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuctSmallCurved" xml:space="preserve">
    <value>Small Reinforced Curved Conveyor Tube</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuctSmallT" xml:space="preserve">
    <value>Small Reinforced Conveyor Tube T Junction</value>
  </data>
  <data name="DisplayName_Block_ConveyorTubeDuctT" xml:space="preserve">
    <value>Reinforced Conveyor Tube T Junction</value>
  </data>
  <data name="RadialMenuGroupTitle_Hitech" xml:space="preserve">
    <value>High-Tech</value>
  </data>
  <data name="DisplayName_Block_BasicMissionBlock" xml:space="preserve">
    <value>AI Basic (Task)</value>
  </data>
  <data name="Description_BasicMissionBlock" xml:space="preserve">
    <value>Type: Task

This can be used for basic, customizable AI tasks. It can follow a player, follow and wander around a home position, or perform autopilot functions.</value>
  </data>
  <data name="Description_FlightMovementBlock" xml:space="preserve">
    <value>Type: Move

This controls the movement of an AI grid, using available thrusters and gyros. Used in conjunction with other AI type blocks, it will attempt to move the grid to waypoints provided by other AI blocks.

An active Move type block is required to make an AI grid move.</value>
  </data>
  <data name="DisplayName_Block_FlightMovementBlock" xml:space="preserve">
    <value>AI Flight (Move)</value>
  </data>
  <data name="Description_DefensiveCombatBlock" xml:space="preserve">
    <value>Type: Combat

This can detect and target lock enemy grids up to 2500m. Additionally, it can be set up to flee to a predetermined location when it has detected an enemy.

When enemies are detected, this block takes priority over any active Task type blocks.</value>
  </data>
  <data name="DisplayName_Block_DefensiveCombatBlock" xml:space="preserve">
    <value>AI Defensive (Combat)</value>
  </data>
  <data name="Description_OffensiveCombatBlock" xml:space="preserve">
    <value>Type: Combat

This can detect, target lock, and engage enemy grids up to 2500m using customizable attack patterns.

When enemies are detected, this block takes priority over any active Task type blocks.</value>
  </data>
  <data name="DisplayName_Block_OffensiveCombatBlock" xml:space="preserve">
    <value>AI Offensive (Combat)</value>
  </data>
  <data name="Terminal_ActivateBehavior" xml:space="preserve">
    <value>AI Behavior</value>
  </data>
  <data name="DisplayName_PathRecorderBlock" xml:space="preserve">
    <value>AI Recorder (Task)</value>
  </data>
  <data name="Description_PathRecorderBlock" xml:space="preserve">
    <value>Type: Task

This can record a path and action sequence. This path can be relative to another grid if the reference is set. This path and sequence can then be replayed, provided there is a Move type block available on the grid.</value>
  </data>
  <data name="PathRecorderBlock_Repeat" xml:space="preserve">
    <value>Repeat</value>
  </data>
  <data name="PathRecorderBlock_RecordInterval" xml:space="preserve">
    <value>Record interval</value>
  </data>
  <data name="PathRecorderBlock_Waypoints" xml:space="preserve">
    <value>Waypoints</value>
  </data>
  <data name="PathRecorderBlock_Record" xml:space="preserve">
    <value>Record</value>
  </data>
  <data name="PathRecorderBlock_Stop" xml:space="preserve">
    <value>Stop</value>
  </data>
  <data name="PathRecorderBlock_ShowPath" xml:space="preserve">
    <value>Show path on HUD</value>
  </data>
  <data name="PathRecorderBlock_Waypoint" xml:space="preserve">
    <value>Waypoint</value>
  </data>
  <data name="PathRecorderBlock_Action" xml:space="preserve">
    <value>Action</value>
  </data>
  <data name="PathRecorderBlock_ClearWaypointSelection" xml:space="preserve">
    <value>Clear selection</value>
  </data>
  <data name="PathRecorderBlock_HideWaypoints" xml:space="preserve">
    <value>Hide waypoints</value>
  </data>
  <data name="PathRecorderBlock_DeleteSelected" xml:space="preserve">
    <value>Delete selected</value>
  </data>
  <data name="PathRecorderBlock_DeleteAllWaypoints" xml:space="preserve">
    <value>Delete all waypoints</value>
  </data>
  <data name="PathRecorderBlock_MinimalDistance" xml:space="preserve">
    <value>Minimal distance</value>
  </data>
  <data name="PathRecorderBlock_MinimalDistanceBetweenPoints" xml:space="preserve">
    <value>A waypoint is added when the distance to the last waypoint is greater than this value, and the time since the previous waypoint exceeds the Waypoint Addition Interval value.</value>
  </data>
  <data name="PathRecorderBlock_SetupAction" xml:space="preserve">
    <value>Setup action</value>
  </data>
  <data name="DefensiveBlock_SetupActions" xml:space="preserve">
    <value>Setup actions</value>
  </data>
  <data name="DefensiveBlock_SetupActions_Tooltip" xml:space="preserve">
    <value>The first slot triggers when an enemy is detected, the second slot triggers when an enemy is no longer detected.</value>
  </data>
  <data name="PathRecorderBlock_ShowSelectedPoints" xml:space="preserve">
    <value>Show selected points</value>
  </data>
  <data name="PathRecorderBlock_ReversePathOrder" xml:space="preserve">
    <value>Reverse order</value>
  </data>
  <data name="PathRecorderBlock_ReferenceBeacon" xml:space="preserve">
    <value>Reference Beacon</value>
  </data>
  <data name="PathRecorderBlock_AddWaypoint" xml:space="preserve">
    <value>Add Waypoint</value>
  </data>
  <data name="PathRecorderBlock_Play" xml:space="preserve">
    <value>Play</value>
  </data>
  <data name="BasicMissionBlock_SelectMission" xml:space="preserve">
    <value>Select Objective</value>
  </data>
  <data name="BasicMissionBlock_SelectMission_Tooltip" xml:space="preserve">
    <value>Follow Home - Allows you to select a home beacon or GPS that the grid should follow.
Can be set up to wander while it is within range.

Follow Player - The grid will follow the player who presses the "Follow Me" button.

Autopilot - Allows the grid to move to GPS locations and patrol/circle between several locations.
Patrol and Circle requires 2 GPS locations!</value>
  </data>
  <data name="BasicMission_FollowHome" xml:space="preserve">
    <value>Follow Home</value>
  </data>
  <data name="BasicMission_FollowPlayer" xml:space="preserve">
    <value>Follow Player</value>
  </data>
  <data name="BasicMission_Autopilot" xml:space="preserve">
    <value>Autopilot</value>
  </data>
  <data name="FollowPlayer_FollowMe_Title" xml:space="preserve">
    <value>Follow Me</value>
  </data>
  <data name="LeadIndicator_OutOfWeaponRange" xml:space="preserve">
    <value>Out of weapon range</value>
  </data>
  <data name="FollowPlayer_StopFollowing_Title" xml:space="preserve">
    <value>Stop Following</value>
  </data>
  <data name="PathRecorderBlock_FarAwayBeacon" xml:space="preserve">
    <value>Faraway beacon</value>
  </data>
  <data name="FollowPlayer_FollowDistance_Title" xml:space="preserve">
    <value>Follow Distance</value>
  </data>
  <data name="FollowPlayer_FollowDistance_Tooltip" xml:space="preserve">
    <value>The grid will try to stay within this distance of the player it is following.</value>
  </data>
  <data name="FollowHome_PositionList" xml:space="preserve">
    <value>Home List</value>
  </data>
  <data name="FollowHome_PositionList_Tooltip" xml:space="preserve">
    <value>Available home positions.</value>
  </data>
  <data name="FollowHome_SetHomePositionPlayer_Title" xml:space="preserve">
    <value>Set Player Position</value>
  </data>
  <data name="FollowHome_SetHomePositionPlayer_Tooltip" xml:space="preserve">
    <value>Creates a GPS at your current location and sets it as the Home position.</value>
  </data>
  <data name="FollowHome_SetHomePositionGrid_Title" xml:space="preserve">
    <value>Set Grid Position</value>
  </data>
  <data name="FollowHome_SetHomePositionGrid_Tooltip" xml:space="preserve">
    <value>Creates a GPS at the current grid location and sets it as the Home position.</value>
  </data>
  <data name="FollowHome_MinRange_Title" xml:space="preserve">
    <value>Min. Range from Home</value>
  </data>
  <data name="FollowHome_MinRange_Tooltip" xml:space="preserve">
    <value>Set the min range away from the home position. The grid will stay between min and max range.</value>
  </data>
  <data name="FollowHome_MaxRange_Title" xml:space="preserve">
    <value>Max. Range from Home</value>
  </data>
  <data name="FollowHome_MaxRange_Tooltip" xml:space="preserve">
    <value>Set the max range away from the home position. The grid will stay between min and max range.</value>
  </data>
  <data name="FollowHome_Wander_Title" xml:space="preserve">
    <value>Wander when idle</value>
  </data>
  <data name="FollowHome_Wander_Tooltip" xml:space="preserve">
    <value>If set, the grid will wander to random positions within the min and max range from home.</value>
  </data>
  <data name="EventControllerBlock_AvailableEvents" xml:space="preserve">
    <value>Event</value>
  </data>
  <data name="EventControllerBlock_Threshold_Title" xml:space="preserve">
    <value>Threshold</value>
  </data>
  <data name="EventControllerBlock_Threshold_Tooltip" xml:space="preserve">
    <value>Threshold</value>
  </data>
  <data name="EventControllerBlock_SelectActions_Title" xml:space="preserve">
    <value>Select Actions</value>
  </data>
  <data name="EventControllerBlock_SelectActions_Tooltip" xml:space="preserve">
    <value>Select Actions</value>
  </data>
  <data name="EventControllerBlock_AvailableBlocks_Title" xml:space="preserve">
    <value>Available Blocks</value>
  </data>
  <data name="EventControllerBlock_AvailableBlocks_Tooltip" xml:space="preserve">
    <value>Available Blocks</value>
  </data>
  <data name="EventControllerBlock_AddBlocks_Title" xml:space="preserve">
    <value>Add Blocks</value>
  </data>
  <data name="EventControllerBlock_AddBlocks_Tooltip" xml:space="preserve">
    <value>Add Blocks</value>
  </data>
  <data name="EventControllerBlock_SelectedBlocks_Title" xml:space="preserve">
    <value>Selected Blocks</value>
  </data>
  <data name="EventControllerBlock_SelectedBlocks_Tooltip" xml:space="preserve">
    <value>Selected Blocks</value>
  </data>
  <data name="EventControllerBlock_RemoveBlocks_Title" xml:space="preserve">
    <value>Remove Blocks</value>
  </data>
  <data name="EventControllerBlock_RemoveBlocks_Tooltip" xml:space="preserve">
    <value>Remove Blocks</value>
  </data>
  <data name="EventControllerBlock_UnknownBlock" xml:space="preserve">
    <value>Unknown block</value>
  </data>
  <data name="EventControllerBlock_UnknownBlockTooltip" xml:space="preserve">
    <value>Block {0} is referenced but not found yet</value>
  </data>
  <data name="EventControllerBlock_WaitingForRefBlocks" xml:space="preserve">
    <value>ERROR: There are missing referenced blocks. The event won't work until they are resolved or removed.</value>
  </data>
  <data name="EventControllerBlock_AgregateEvent_Title" xml:space="preserve">
    <value>AND Gate</value>
  </data>
  <data name="EventControllerBlock_AgregateEvent_Tooltip" xml:space="preserve">
    <value>The first action is triggered if each block meets the condition. Else, the second action is triggered.</value>
  </data>
  <data name="DisplayName_EventBlockIntegrity" xml:space="preserve">
    <value>Block Integrity %</value>
  </data>
  <data name="DefensiveCombatBlock_DefendAgainst" xml:space="preserve">
    <value>Defend Against</value>
  </data>
  <data name="DefensiveCombatBlock_DefendAgainst_Tooltip" xml:space="preserve">
    <value>Which other grids may be a threat?</value>
  </data>
  <data name="DefensiveCombatBlock_TargetLock" xml:space="preserve">
    <value>Target lock</value>
  </data>
  <data name="DefensiveCombatBlock_TargetLock_Enemies" xml:space="preserve">
    <value>Enemies</value>
  </data>
  <data name="DefensiveCombatBlock_TargetLock_EnemiesAndNeutrals" xml:space="preserve">
    <value>Enemies and neutrals</value>
  </data>
  <data name="DefensiveCombatBlock_TargetLock_Nobody" xml:space="preserve">
    <value>Nobody</value>
  </data>
  <data name="DefensiveCombatBlock_SubsystemsToDestroy" xml:space="preserve">
    <value>Subsystems to destroy</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTo" xml:space="preserve">
    <value>Flee to</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTo_Tooltip" xml:space="preserve">
    <value>If this grid flees, it will flee towards the selected waypoint.</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger" xml:space="preserve">
    <value>Flee trigger</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_Tooltip" xml:space="preserve">
    <value>When to flee?
Never - This grid never flees.
Always - This grid flees when it detects another grid within 2500m and 
the "defend against" and "With Subsystem" conditions are met.
When being Target Locked - When another grid that meets 
the "Defend against" and "With Subsystem" conditions locks this grid.
When taking damage - When taking damage from any source while a grid that meets 
the "Defend against" and "With Subsystem" is within 2500m.</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_Never" xml:space="preserve">
    <value>Never</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_Always" xml:space="preserve">
    <value>Always</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_WhenTargetLocked" xml:space="preserve">
    <value>When target locked</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_WhenTakingDamage" xml:space="preserve">
    <value>When taking damage</value>
  </data>
  <data name="DefensiveCombatBlock_FleeTrigger_FleeTo" xml:space="preserve">
    <value>Flee to</value>
  </data>
  <data name="DefensiveCombatBlock_WaypointSize" xml:space="preserve">
    <value>Flee waypoint size</value>
  </data>
  <data name="DefensiveCombatBlock_WaypointSize_Tooltip" xml:space="preserve">
    <value>The distance to the selected waypoint the grid should be to consider it to have been reached.</value>
  </data>
  <data name="DefensiveCombatBlock_WithSubsystem" xml:space="preserve">
    <value>With Subsystem</value>
  </data>
  <data name="DefensiveCombatBlock_WithSubsystem_Tooltip" xml:space="preserve">
    <value>Will "Defend against" grids with this subsystem.</value>
  </data>
  <data name="BasicMissionAutopilot_Mode" xml:space="preserve">
    <value>Mode</value>
  </data>
  <data name="DefensiveCombatBlock_ThreateningSubsystem" xml:space="preserve">
    <value>Threatening Subsystem</value>
  </data>
  <data name="DefensiveCombatBlock_ThreateningSubsystemTooltip" xml:space="preserve">
    <value>This block will only consider grids with the selected subsystem(s) to be a threat</value>
  </data>
  <data name="DisplayName_EventGasTankFilled" xml:space="preserve">
    <value>Gas Tank Filled %</value>
  </data>
  <data name="BasicMissionAutopilot_Waypoints" xml:space="preserve">
    <value>Waypoints</value>
  </data>
  <data name="BasicMissionAutopilot_GPS" xml:space="preserve">
    <value>GPS</value>
  </data>
  <data name="DisplayName_EventStoredPower" xml:space="preserve">
    <value>Stored Power %</value>
  </data>
  <data name="BlockPropertyTitle_AttackMode" xml:space="preserve">
    <value>Attack</value>
  </data>
  <data name="BlockPropertyTitle_SetAttackModeFormat" xml:space="preserve">
    <value>Set Attack Mode: {0}</value>
  </data>
  <data name="AttackMode_EnemiesOnly" xml:space="preserve">
    <value>Enemies Only</value>
  </data>
  <data name="AttackMode_EnemiesAndNeutrals" xml:space="preserve">
    <value>Enemies And Neutrals</value>
  </data>
  <data name="BlockPropertyTitle_TargetPriority" xml:space="preserve">
    <value>Target Priority</value>
  </data>
  <data name="BlockPropertyTitle_SetTargetPriorityFormat" xml:space="preserve">
    <value>Set Target Priority: {0}</value>
  </data>
  <data name="TargetPriority_Closest" xml:space="preserve">
    <value>Closest</value>
  </data>
  <data name="TargetPriority_Largest" xml:space="preserve">
    <value>Largest</value>
  </data>
  <data name="TargetPriority_Smallest" xml:space="preserve">
    <value>Smallest</value>
  </data>
  <data name="BlockPropertyTitle_AttackPattern" xml:space="preserve">
    <value>Attack Pattern</value>
  </data>
  <data name="TargetPriority_CircleOrOrbit" xml:space="preserve">
    <value>Circle/Orbit</value>
  </data>
  <data name="TargetPriority_StayAtRange" xml:space="preserve">
    <value>Stay at range</value>
  </data>
  <data name="TargetPriority_HitAndRun" xml:space="preserve">
    <value>Hit and run</value>
  </data>
  <data name="TargetPriority_Intercept" xml:space="preserve">
    <value>Intercept</value>
  </data>
  <data name="BlockPropertyTitle_SubsystemToDestroy" xml:space="preserve">
    <value>Subsystem to destroy</value>
  </data>
  <data name="OffensiveCombatBlock_UpdateTargetInterval" xml:space="preserve">
    <value>Target Search Interval</value>
  </data>
  <data name="OffensiveCombatBlock_UpdateTargetInterval_Tooltip" xml:space="preserve">
    <value>Determines how often this block checks and (possibly) changes targets.
Warning: Setting this very low may result in erratic targeting behavior!</value>
  </data>
  <data name="BlockPropertyTitle_ActivateBehavior" xml:space="preserve">
    <value>Subsystem to destroy</value>
  </data>
  <data name="BlockPropertyTitle_AlignToGravity" xml:space="preserve">
    <value>Align to P-Gravity</value>
  </data>
  <data name="BlockPropertyTitle_MinHeightAboveTerrain" xml:space="preserve">
    <value>Min. altitude</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_Front" xml:space="preserve">
    <value>Front</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_CircleDistance_Title" xml:space="preserve">
    <value>Circle Distance</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_CircleDistance_Tooltip" xml:space="preserve">
    <value>The distance the grid should circle around the target</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_CircleInPGravity_Title" xml:space="preserve">
    <value>Circle in P-Gravity</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_CircleInPGravity_Tooltip" xml:space="preserve">
    <value>If the engagement is taking place in P-gravity, the orbit will be around the gravity direction</value>
  </data>
  <data name="OffensiveCombatHitAndRun_BreakOffDistance_Title" xml:space="preserve">
    <value>Break-off distance</value>
  </data>
  <data name="OffensiveCombatHitAndRun_BreakOffDistance_Tooltip" xml:space="preserve">
    <value>At this distance to the target, this grid should retreat.

Note: A value lower than the min. altitude in the active Move block can cause the grid to never reach this distance.</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatDistance_Title" xml:space="preserve">
    <value>Retreat distance</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatDistance_Tooltip" xml:space="preserve">
    <value>The distance from the target to retreat to, before starting a new attack run</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatTimeout_Title" xml:space="preserve">
    <value>Retreat timeout</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatTimeout_Tooltip" xml:space="preserve">
    <value>The time this grid should take to attempt to reach its retreat distance. If it runs out of time, a new attack run will start regardless of distance from the target.

Note: A low value can cause the grid to never reach the retreat distance, and repeatedly attempt to restart the attack run.</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatAngle_Title" xml:space="preserve">
    <value>Retreat angle</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RetreatAngle_Tooltip" xml:space="preserve">
    <value>The angle of the retreat vector relative to the attack run.

A value of 180 means the grid will retreat back in the same direction it started the attack run from.
A value of 0 means the retreat will continue in a straight line from the attack run.</value>
  </data>
  <data name="OffensiveCombatHitAndRun_PassOverTarget_Title" xml:space="preserve">
    <value>Pass over target</value>
  </data>
  <data name="OffensiveCombatHitAndRun_PassOverTarget_Tooltip" xml:space="preserve">
    <value>If the retreat angle is greater than 90° and the engagement is taking place in P-gravity, this will set the retreat waypoint to the far side over the target</value>
  </data>
  <data name="OffensiveCombatHitAndRun_AddWeapon_Title" xml:space="preserve">
    <value>Add Weapon</value>
  </data>
  <data name="OffensiveCombatHitAndRun_AddWeapon_Tooltip" xml:space="preserve">
    <value>Add the selected weapon to the Selected Weapons list</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RemoveWeapon_Title" xml:space="preserve">
    <value>Remove Weapon</value>
  </data>
  <data name="OffensiveCombatHitAndRun_RemoveWeapon_Tooltip" xml:space="preserve">
    <value>Remove the selected weapon from the Selected Weapons list</value>
  </data>
  <data name="OffensiveCombatHitAndRun_AvailiableWeapons_Title" xml:space="preserve">
    <value>Availiable Weapons</value>
  </data>
  <data name="OffensiveCombatHitAndRun_SelectedWeapons_Title" xml:space="preserve">
    <value>Selected Weapons</value>
  </data>
  <data name="DisplayName_EventPistonPosition" xml:space="preserve">
    <value>Piston Position %</value>
  </data>
  <data name="OffensiveCombatHitAndRun_PatternName" xml:space="preserve">
    <value>Hit And Run</value>
  </data>
  <data name="OffensiveCombatCircleOrbit_PatternName" xml:space="preserve">
    <value>Circle/Orbit</value>
  </data>
  <data name="OffensiveCombatStayAtRange_PatternName" xml:space="preserve">
    <value>Stay At Range</value>
  </data>
  <data name="OffensiveCombatStayAtRange_MinimalDistance_Title" xml:space="preserve">
    <value>Minimal Distance</value>
  </data>
  <data name="OffensiveCombatStayAtRange_MinimalDistance_Tooltip" xml:space="preserve">
    <value>The minimal distance the grid should (try to) stay from the target</value>
  </data>
  <data name="OffensiveCombatStayAtRange_MaximalDistance_Title" xml:space="preserve">
    <value>Maximal Distance</value>
  </data>
  <data name="OffensiveCombatStayAtRange_MaximalDistance_Tooltip" xml:space="preserve">
    <value>The maximal distance the grid should (try to) stay from the target</value>
  </data>
  <data name="OffensiveCombatStayAtRange_FacingPriority_Tooltip" xml:space="preserve">
    <value>The grid will attempt to keep the selected side(s) facing towards the target</value>
  </data>
  <data name="OffensiveCombatIntercept_PatternName" xml:space="preserve">
    <value>Intercept</value>
  </data>
  <data name="OffensiveCombatIntercept_GuidanceType_Title" xml:space="preserve">
    <value>Guidance Type</value>
  </data>
  <data name="OffensiveCombatIntercept_OverrideCollisionAvoidance_Title" xml:space="preserve">
    <value>Override Collision Avoidance</value>
  </data>
  <data name="OffensiveCombatIntercept_OverrideCollisionAvoidance_Tooltip" xml:space="preserve">
    <value>If checked, the collision avoidance of the Move type block will be ignored</value>
  </data>
  <data name="OffensiveCombatIntercept_GuidanceBasic" xml:space="preserve">
    <value>Basic</value>
  </data>
  <data name="OffensiveCombatIntercept_GuidanceTargetPrediction" xml:space="preserve">
    <value>Target Prediction</value>
  </data>
  <data name="OffensiveCombatIntercept_GuidanceProportionalNavigation" xml:space="preserve">
    <value>Proportional Navigation</value>
  </data>
  <data name="EventControllerBlock_BoolTriggerState_Title" xml:space="preserve">
    <value>Target Prediction</value>
  </data>
  <data name="DisplayName_EventConnectorConnected" xml:space="preserve">
    <value>Connector Connected</value>
  </data>
  <data name="DisplayName_EventLandingGearLocked" xml:space="preserve">
    <value>Landing Gear Locked</value>
  </data>
  <data name="DisplayName_EventCockpitOccupied" xml:space="preserve">
    <value>Cockpit Occupied</value>
  </data>
  <data name="DisplayName_EventRotorHingeAttachedDetached" xml:space="preserve">
    <value>Rotor/Hinge Attached/Detached</value>
  </data>
  <data name="DisplayName_MyEventBlockOnOff" xml:space="preserve">
    <value>Block On/Off Switched</value>
  </data>
  <data name="DisplayName_Block_ConveyorCap" xml:space="preserve">
    <value>Conveyor Cap</value>
  </data>
  <data name="DisplayName_Block_ConveyorCapMedium" xml:space="preserve">
    <value>Conveyor Cap Medium</value>
  </data>
  <data name="DisplayName_Block_PipeCap" xml:space="preserve">
    <value>Conveyor Pipe Cap</value>
  </data>
  <data name="DisplayName_EventDoorOpened" xml:space="preserve">
    <value>Door Opened</value>
  </data>
  <data name="DisplayName_Block_HalfBed" xml:space="preserve">
    <value>Half Bed</value>
  </data>
  <data name="DisplayName_Block_HalfBedOffset" xml:space="preserve">
    <value>Half Bed Open</value>
  </data>
  <data name="DisplayName_Block_AngledInteriorWallA" xml:space="preserve">
    <value>Angled Interior Wall A</value>
  </data>
  <data name="DisplayName_Block_AngledInteriorWallB" xml:space="preserve">
    <value>Angled Interior Wall B</value>
  </data>
  <data name="DisplayName_EventBlockAddedRemoved" xml:space="preserve">
    <value>Block Added/Removed</value>
  </data>
  <data name="DisplayName_Block_InsetLight" xml:space="preserve">
    <value>Inset Light</value>
  </data>
  <data name="DisplayName_EventPowerOutput" xml:space="preserve">
    <value>Power Output %</value>
  </data>
  <data name="DisplayName_EventAngleChanged" xml:space="preserve">
    <value>Angle Changed</value>
  </data>
  <data name="DisplayName_EventSurfaceHeight" xml:space="preserve">
    <value>Altitude</value>
  </data>
  <data name="EventControllerBlock_Height_Title" xml:space="preserve">
    <value>Altitude</value>
  </data>
  <data name="Terminal_ActivateBehavior_Tooltip" xml:space="preserve">
    <value>Sets this block as the active block of its type. Deactivates all other blocks of the same type</value>
  </data>
  <data name="DisplayName_Block_PipeWorkBlockA" xml:space="preserve">
    <value>Pipeworks A</value>
  </data>
  <data name="DisplayName_Block_PipeWorkBlockB" xml:space="preserve">
    <value>Pipeworks B</value>
  </data>
  <data name="Description_AccessPanel" xml:space="preserve">
    <value>Access Panels decorative blocks that hide the internal electrical systems of structures and ships.</value>
  </data>
  <data name="DisplayName_Block_AccessPanel1" xml:space="preserve">
    <value>Access Panel 1</value>
  </data>
  <data name="DisplayName_Block_AccessPanel2" xml:space="preserve">
    <value>Access Panel 2</value>
  </data>
  <data name="DisplayName_Block_AccessPanel3" xml:space="preserve">
    <value>Access Panel 3</value>
  </data>
  <data name="DisplayName_Block_AccessPanel4" xml:space="preserve">
    <value>Access Panel 4</value>
  </data>
  <data name="DisplayName_Block_AirVentFan" xml:space="preserve">
    <value>Air Vent Fan</value>
  </data>
  <data name="DisplayName_Block_AirVentFanFull" xml:space="preserve">
    <value>Air Vent Fan Full</value>
  </data>
  <data name="DisplayName_Block_CameraReskin" xml:space="preserve">
    <value>Top Mounted Camera</value>
  </data>
  <data name="DisplayName_DLC_AIUpdateDLC" xml:space="preserve">
    <value>Automatons</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_Play" xml:space="preserve">
    <value>Start/stop playing the recorded path.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_Repeat" xml:space="preserve">
    <value>Repeat the path.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_ClearWaypoints" xml:space="preserve">
    <value>Deselect all waypoints.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_DeleteAllWaypoints" xml:space="preserve">
    <value>Delete all waypoints.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_DeleteSelectedWaypoints" xml:space="preserve">
    <value>Delete selected waypoints.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_SetupActionForSelectedWaypoint" xml:space="preserve">
    <value>Setup action for selected waypoint.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_ReversePath" xml:space="preserve">
    <value>Reverse order of all waypoints.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_ShowPath" xml:space="preserve">
    <value>Displays the recorded path on the HUD.

To see this, ensure you have "Show on HUD" enabled on this block, as well as "Show AI Functions" in the Info screen.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_ShowPoints" xml:space="preserve">
    <value>Displays the selected point(s) on the HUD.

To see this, ensure you have "Show on HUD" enabled on this block, as well as "Show AI Functions" in the Info screen.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_RecordPath" xml:space="preserve">
    <value>Start recording a new path. Recording adds to the end of any existing record. A path cannot be recorded while the Autopilot is enabled.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_RecordsSteps" xml:space="preserve">
    <value>A waypoint is added when the time since the last waypoint is greater than this value, and the distance to the previous waypoint exceeds the Minimal Distance value.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_RecordsDistance" xml:space="preserve">
    <value>A waypoint is added when the distance to the last waypoint is greater than this value, and the time since the previous waypoint exceeds the Waypoint Addition Interval value.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_Beacons" xml:space="preserve">
    <value>When a reference is selected, the waypoints are in local space coordinates relative to the reference. If none is selected, the waypoints are relative to the world space coordinates.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_DeselectBeacons" xml:space="preserve">
    <value>Deselect reference beacon.</value>
  </data>
  <data name="BlockPropertyTooltip_PathRecorder_AddWaypoint" xml:space="preserve">
    <value>Manually add a waypoint at the current position.</value>
  </data>
  <data name="BlockPropertyTooltip_CollisionAvoidance" xml:space="preserve">
    <value>Enabling this will make the grid avoid voxels and other grids.</value>
  </data>
  <data name="BlockPropertyTooltip_PresisionMode" xml:space="preserve">
    <value>Precision Mode ensures the grid will reach the exact waypoint location. Additionally, it forces the grid to fully rotate towards the next waypoint before it can accelerate.

NOTE: This greatly slows down the autopilot’s movement and is only recommended to be used in cases where precise movement is required (e.g., a docking sequence).</value>
  </data>
  <data name="BlockPropertyTooltip_RemoteBlockSpeedLimit" xml:space="preserve">
    <value>The maximum speed the grid is allowed to move.</value>
  </data>
  <data name="BlockPropertyTooltip_AlignToGravity" xml:space="preserve">
    <value>If checked, the grid will at all times attempt to keep itself aligned to P-Gravity.</value>
  </data>
  <data name="BlockPropertyTooltip_MinHeightAboveTerrain" xml:space="preserve">
    <value>Set the minimum altitude the grid should keep when in P-Gravity.</value>
  </data>
  <data name="FollowPlayer_FollowMe_Tooltip" xml:space="preserve">
    <value>This will make the grid attempt to follow you.</value>
  </data>
  <data name="FollowPlayer_StopFollowing_Tooltip" xml:space="preserve">
    <value>Stop following the player.</value>
  </data>
  <data name="BasicMissionAutopilot_Waypoints_Tooltip" xml:space="preserve">
    <value>List of waypoints for autopilot to move to.</value>
  </data>
  <data name="BasicMissionAutopilot_SetupAction_Tooltip" xml:space="preserve">
    <value>Add actions to be triggered at the selected waypoint.</value>
  </data>
  <data name="BasicMissionAutopilot_DeleteWaypoint_Tooltip" xml:space="preserve">
    <value>Delete selected waypoint.</value>
  </data>
  <data name="BasicMissionAutopilot_Up_Tooltip" xml:space="preserve">
    <value>Move selected waypoint up.</value>
  </data>
  <data name="BasicMissionAutopilot_Down_Tooltip" xml:space="preserve">
    <value>Move selected waypoint down.</value>
  </data>
  <data name="BasicMissionAutopilot_Add_Tooltip" xml:space="preserve">
    <value>Add selected GPS location as new waypoint.</value>
  </data>
  <data name="BasicMissionAutopilot_GpsListbox_Tooltip" xml:space="preserve">
    <value>List of available GPS coordinates.</value>
  </data>
  <data name="BasicMissionAutopilot_Copy_Tooltip" xml:space="preserve">
    <value>Copy the listed waypoints to the clipboard.</value>
  </data>
  <data name="BasicMissionAutopilot_Paste_Tooltip" xml:space="preserve">
    <value>Paste waypoints from the clipboard to the waypoint list.</value>
  </data>
  <data name="DisplayName_Block_SensorReskin" xml:space="preserve">
    <value>Automaton Sensor</value>
  </data>
  <data name="Description_SignBlocks" xml:space="preserve">
    <value>Warning Signs can be used to attend crew to the dangers of their environment.</value>
  </data>
  <data name="DisplayName_Block_WarningSign1" xml:space="preserve">
    <value>Warning Sign Trade</value>
  </data>
  <data name="DisplayName_Block_WarningSign10" xml:space="preserve">
    <value>Warning Sign Construction</value>
  </data>
  <data name="DisplayName_Block_WarningSign11" xml:space="preserve">
    <value>Warning Sign Gravity</value>
  </data>
  <data name="DisplayName_Block_WarningSign12" xml:space="preserve">
    <value>Warning Sign Airlock</value>
  </data>
  <data name="DisplayName_Block_WarningSign13" xml:space="preserve">
    <value>Warning Sign Hazard</value>
  </data>
  <data name="DisplayName_Block_WarningSign2" xml:space="preserve">
    <value>Warning Sign Access</value>
  </data>
  <data name="DisplayName_Block_WarningSign3" xml:space="preserve">
    <value>Warning Sign Safety</value>
  </data>
  <data name="DisplayName_Block_WarningSign4" xml:space="preserve">
    <value>Warning Sign Storage</value>
  </data>
  <data name="DisplayName_Block_WarningSign5" xml:space="preserve">
    <value>Warning Sign Explosive</value>
  </data>
  <data name="DisplayName_Block_WarningSign6" xml:space="preserve">
    <value>Warning Sign Notice</value>
  </data>
  <data name="DisplayName_Block_WarningSign7" xml:space="preserve">
    <value>Warning Sign Medical</value>
  </data>
  <data name="DisplayName_Block_WarningSign8" xml:space="preserve">
    <value>Warning Sign Caution</value>
  </data>
  <data name="DisplayName_Block_WarningSign9" xml:space="preserve">
    <value>Warning Sign Atmosphere</value>
  </data>
  <data name="AI_NoMovementBlock" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Grid has no active Move type block! Please add and/or enable a Move type block.[/Color]</value>
  </data>
  <data name="DefensiveCombatBlock_NoFleeTo" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: No "Flee to" waypoint selected! Please select a waypoint[/Color]</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_NoWaypoints" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: No sequence found! Please record a sequence[/Color]</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_BehaviorDisabled" xml:space="preserve">
    <value>Status: Behavior disabled</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_PlayingPathNextWaypoint" xml:space="preserve">
    <value>Status: Moving to Recorder waypoint: {0}</value>
  </data>
  <data name="AiBlock_StatusMessage_BlockDisabled" xml:space="preserve">
    <value>Status: Block disabled</value>
  </data>
  <data name="CombatBlock_StatusMessage_AiOff" xml:space="preserve">
    <value>Status: Behavior disabled</value>
  </data>
  <data name="CombatBlock_StatusMessage_BlockOff" xml:space="preserve">
    <value>Status: Block disabled</value>
  </data>
  <data name="CombatBlock_Tooltip_Circle" xml:space="preserve">
    <value>The grid will try to circle or orbit the enemy at a customizable distance</value>
  </data>
  <data name="CombatBlock_Tooltip_StayAtRange" xml:space="preserve">
    <value>The grid will try to keep the enemy between a customizable min/max distance.</value>
  </data>
  <data name="CombatBlock_Tooltip_HitRun" xml:space="preserve">
    <value>The grid will continuously make an attack run on the target, and break off to retreat when it gets close.</value>
  </data>
  <data name="CombatBlock_Tooltip_Intercept" xml:space="preserve">
    <value>The grid will attempt to intercept the enemy and ram it.</value>
  </data>
  <data name="FlightBlock_StatusMessage_NoTaskBlock" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: No movement input. Please add/activate a Task and/or Combat block![/Color]</value>
  </data>
  <data name="AIBlocks_HudMessage_Error" xml:space="preserve">
    <value>ERROR</value>
  </data>
  <data name="Terminal_ShowAiWaypointOnHud" xml:space="preserve">
    <value> - Waypoint</value>
  </data>
  <data name="FlightBlock_StatusMessage_Idle" xml:space="preserve">
    <value>Status: Idle</value>
  </data>
  <data name="FlightBlock_StatusMessage_MaintainingMinimalHeight" xml:space="preserve">
    <value>Status: Maintaining minimal altitude: {0}</value>
  </data>
  <data name="CombatBlock_StatusMessage_Searching" xml:space="preserve">
    <value>Status: Searching for enemies... {0}</value>
  </data>
  <data name="CombatBlock_StatusMessage_TargetLocking" xml:space="preserve">
    <value>Status: Target locking {0}. {1} remaining.</value>
  </data>
  <data name="OffensiveCombatBlock_StatusMessage_TargetLocked" xml:space="preserve">
    <value>Status: Target locked {0}</value>
  </data>
  <data name="DefensiveCombatBlock_StatusMessage_Fleeing" xml:space="preserve">
    <value>Status: Fleeing from {0}</value>
  </data>
  <data name="DefensiveCombatBlock_StatusMessage_ReadyToFlee" xml:space="preserve">
    <value>Status: Defending against {0}</value>
  </data>
  <data name="FlightBlock_StatusMessage_Fleeing" xml:space="preserve">
    <value>Status: Fleeing from {0}</value>
  </data>
  <data name="OffensiveCombatBlock_StatusMessage_Attacking" xml:space="preserve">
    <value>Status: Attacking {0}</value>
  </data>
  <data name="FollowHome_StatusMessage_Wandering" xml:space="preserve">
    <value>Status: Wandering around {0}</value>
  </data>
  <data name="FlightBlock_HitRun_StatusMessage_Retreating" xml:space="preserve">
    <value>Status: Retreating from {0}</value>
  </data>
  <data name="FlightBlock_PathRecorder_StatusMessage_MovingToWaypoint" xml:space="preserve">
    <value>Status: Moving to Recorder waypoint {0}</value>
  </data>
  <data name="FlightBlock_HitRun_StatusMessage_Attacking" xml:space="preserve">
    <value>Status: Attacking {0}</value>
  </data>
  <data name="FlightBlock_StayAtRange_StatusMessage_Keeping" xml:space="preserve">
    <value>Status: Stay at range from {0}</value>
  </data>
  <data name="FlightBlock_Circle_StatusMessage_Circling" xml:space="preserve">
    <value>Status: Circling {0}</value>
  </data>
  <data name="FlightBlock_Intercept_StatusMessage_Intercepting" xml:space="preserve">
    <value>Status: Intercepting {0}</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_Idle" xml:space="preserve">
    <value>Status: Idle</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_Recording" xml:space="preserve">
    <value>Status: Recording</value>
  </data>
  <data name="FlightMovementBlock_NoGyro" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Grid cannot rotate, please add a gyroscope![/Color]</value>
  </data>
  <data name="FlightMovementBlock_NoThrustInAllDirections" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Grid cannot move in one or more directions, please ensure a thruster is available for each direction![/Color]</value>
  </data>
  <data name="EventControllerBlock_Condition" xml:space="preserve">
    <value>Condition</value>
  </data>
  <data name="EventControllerBlock_Condition_Tooltip" xml:space="preserve">
    <value>Sets under what condition the actions trigger.</value>
  </data>
  <data name="EventControllerBlock_Condition_Higher" xml:space="preserve">
    <value>Equal or greater than</value>
  </data>
  <data name="EventControllerBlock_Condition_Lower" xml:space="preserve">
    <value>Equal or less than</value>
  </data>
  <data name="Description_AirDucts" xml:space="preserve">
    <value>Willis Ducts can be used to crawl through and enter restricted spaces.</value>
  </data>
  <data name="DisplayName_Block_AirDuct1" xml:space="preserve">
    <value>Willis Duct</value>
  </data>
  <data name="DisplayName_Block_AirDuct2" xml:space="preserve">
    <value>Willis Duct 2</value>
  </data>
  <data name="DisplayName_Block_AirDuctCorner" xml:space="preserve">
    <value>Willis Duct Corner</value>
  </data>
  <data name="DisplayName_Block_AirDuctGrate" xml:space="preserve">
    <value>Willis Duct Grate</value>
  </data>
  <data name="DisplayName_Block_AirDuctLight" xml:space="preserve">
    <value>Willis Duct Light</value>
  </data>
  <data name="DisplayName_Block_AirDuctRamp" xml:space="preserve">
    <value>Willis Duct Ramp</value>
  </data>
  <data name="DisplayName_Block_AirDuctT" xml:space="preserve">
    <value>Willis Duct T Junction</value>
  </data>
  <data name="DisplayName_Block_AirDuctX" xml:space="preserve">
    <value>Willis Duct X Junction</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension2x2" xml:space="preserve">
    <value>Offroad Wheel Suspension 2x2 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadSuspension2x2Mirrored" xml:space="preserve">
    <value>Offroad Wheel Suspension 2x2 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadWheel2x2" xml:space="preserve">
    <value>Offroad Wheel 2x2</value>
  </data>
  <data name="DisplayName_Block_Suspension2x2" xml:space="preserve">
    <value>Wheel Suspension 2x2 Right</value>
  </data>
  <data name="DisplayName_Block_Suspension2x2Mirrored" xml:space="preserve">
    <value>Wheel Suspension 2x2 Left</value>
  </data>
  <data name="DisplayName_Block_Wheel2x2" xml:space="preserve">
    <value>Wheel 2x2</value>
  </data>
  <data name="DisplayName_Programmable_BlockReskin" xml:space="preserve">
    <value>Automaton Programmable Block</value>
  </data>
  <data name="EventActionInfo" xml:space="preserve">
    <value>Output: Action slot {0}</value>
  </data>
  <data name="EventBlockInputInfo" xml:space="preserve">
    <value>Input: {0} at {1} {2}</value>
  </data>
  <data name="EventConditionInfo" xml:space="preserve">
    <value>Condition: {0}</value>
  </data>
  <data name="StoreBuy_Error_Caption_StoreNotOwnedByFaction" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_StoreNotOwnedByFaction" xml:space="preserve">
    <value>Store not owned by faction.</value>
  </data>
  <data name="StoreSell_Error_Caption_NoFaction" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreSell_Error_Text_NoFaction" xml:space="preserve">
    <value>Store not owned by faction.</value>
  </data>
  <data name="EventOutputInfo" xml:space="preserve">
    <value>Output: Action Slot {0}</value>
  </data>
  <data name="EventState_CockpitOccupied" xml:space="preserve">
    <value>Occupied</value>
  </data>
  <data name="EventState_CockpitUnoccupied" xml:space="preserve">
    <value>Unoccupied</value>
  </data>
  <data name="EventState_ConnectorConnected" xml:space="preserve">
    <value>Connected</value>
  </data>
  <data name="EventState_ConnectorDisconnected" xml:space="preserve">
    <value>Disconnected</value>
  </data>
  <data name="EventState_DoorClosed" xml:space="preserve">
    <value>Closed</value>
  </data>
  <data name="EventState_DoorOpened" xml:space="preserve">
    <value>Opened</value>
  </data>
  <data name="EventState_LandingGearLocked" xml:space="preserve">
    <value>Locked</value>
  </data>
  <data name="EventState_LandingGearUnlocked" xml:space="preserve">
    <value>Unlocked</value>
  </data>
  <data name="EventBoolBlockInputInfo" xml:space="preserve">
    <value>Input: {0} is {1}</value>
  </data>
  <data name="EventInfo" xml:space="preserve">
    <value>Event: {0}</value>
  </data>
  <data name="EventAddedRemoveInputInfo" xml:space="preserve">
    <value>Input: Block was {0}</value>
  </data>
  <data name="EventBlockValueAdded" xml:space="preserve">
    <value>added</value>
  </data>
  <data name="EventBlockValueRemoved" xml:space="preserve">
    <value>removed</value>
  </data>
  <data name="ActiveContractsScreen_Help_Abandon" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_A} Abandon</value>
  </data>
  <data name="OffensiveCombatStayAtRange_EvasiveManeuvers_Title" xml:space="preserve">
    <value>Evasive Maneuvers</value>
  </data>
  <data name="OffensiveCombatStayAtRange_EvasiveManeuvers_Tooltip" xml:space="preserve">
    <value>To evade enemy fire, the grid will move to random positions when it is within min and max distance</value>
  </data>
  <data name="EventInputInfo" xml:space="preserve">
    <value>Input: {0} {1}</value>
  </data>
  <data name="Plural_Seconds" xml:space="preserve">
    <value>seconds</value>
  </data>
  <data name="FollowHome_HomeNotSet" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Home not set, please select a home position![/Color]</value>
  </data>
  <data name="FollowPlayer_Following" xml:space="preserve">
    <value>Status: Following {0}.</value>
  </data>
  <data name="Autopilot_MovingToGPS" xml:space="preserve">
    <value>Status: Moving to GPS {0}.</value>
  </data>
  <data name="EventAboveEqualInfo" xml:space="preserve">
    <value>Condition: &gt;=</value>
  </data>
  <data name="EventBellowEqualInfo" xml:space="preserve">
    <value>Condition: &lt;=</value>
  </data>
  <data name="EventThresholdInfo" xml:space="preserve">
    <value>Threshold: {0} {1}</value>
  </data>
  <data name="Description_AccesPanel" xml:space="preserve">
    <value>Access Panels allow access for emergency or maintenance and make flat surfaces look more detailed.</value>
  </data>
  <data name="DefensiveCombatBlock_LockTarget" xml:space="preserve">
    <value>Lock Target</value>
  </data>
  <data name="DefensiveCombatBlock_LockTarget_Tooltip" xml:space="preserve">
    <value>Target lock grids that meet the above conditions</value>
  </data>
  <data name="OffensiveCombatBlock_Status_Nominal" xml:space="preserve">
    <value>NOMINAL: {0} used as aiming reference</value>
  </data>
  <data name="OffensiveCombatBlock_Status_ErrorNotFacingForward" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: {0} not facing in the forwards direction, this weapon will not be used![/Color]</value>
  </data>
  <data name="OffensiveCombatBlock_Status_WarningMultipleAmmo" xml:space="preserve">
    <value>[Color=#FFFFBB00]WARNING: Multiple ammo types detected, accuracy may be reduced[/Color]</value>
  </data>
  <data name="OffensiveCombatBlock_FacingPriority_Title" xml:space="preserve">
    <value>Facing Priority</value>
  </data>
  <data name="DisplayName_Block_TimerBlockReskin" xml:space="preserve">
    <value>Automaton Timer Block</value>
  </data>
  <data name="DisplayName_Block_Transponder" xml:space="preserve">
    <value>Action Relay</value>
  </data>
  <data name="DisplayName_Block_SpeederCockpit" xml:space="preserve">
    <value>Saddle Cockpit</value>
  </data>
  <data name="Description_SpeederCockpit" xml:space="preserve">
    <value>The Saddle Cockpit can be used to pilot anything from modest rovers to small-scale ships.</value>
  </data>
  <data name="DisplayName_GridAutomation" xml:space="preserve">
    <value>Grid Automation</value>
  </data>
  <data name="DisplayName_Block_SpeederCockpitCompact" xml:space="preserve">
    <value>Saddle Cockpit Compact</value>
  </data>
  <data name="Description_EmotionController" xml:space="preserve">
    <value>The Emotion Controller displays emoticons and can copy those to other assigned LCD panels and screens. </value>
  </data>
  <data name="DisplayName_EmotionController" xml:space="preserve">
    <value>Emotion Controller</value>
  </data>
  <data name="EmotionControll_UsableLCDs" xml:space="preserve">
    <value>Available LCDs</value>
  </data>
  <data name="EmotionControll_SelectedLCDs" xml:space="preserve">
    <value>Selected LCDs</value>
  </data>
  <data name="LCD_Emote_Angry" xml:space="preserve">
    <value>Angry</value>
  </data>
  <data name="LCD_Emote_Annoyed" xml:space="preserve">
    <value>Annoyed</value>
  </data>
  <data name="LCD_Emote_Confused" xml:space="preserve">
    <value>Confused</value>
  </data>
  <data name="LCD_Emote_Crying" xml:space="preserve">
    <value>Crying</value>
  </data>
  <data name="LCD_Emote_Evil" xml:space="preserve">
    <value>Evil</value>
  </data>
  <data name="LCD_Emote_Dead" xml:space="preserve">
    <value>Dead</value>
  </data>
  <data name="LCD_Emote_Happy" xml:space="preserve">
    <value>Happy</value>
  </data>
  <data name="LCD_Emote_Love" xml:space="preserve">
    <value>Love</value>
  </data>
  <data name="LCD_Emote_Neutral" xml:space="preserve">
    <value>Neutral</value>
  </data>
  <data name="LCD_Emote_Sad" xml:space="preserve">
    <value>Sad</value>
  </data>
  <data name="LCD_Emote_Shocked" xml:space="preserve">
    <value>Shocked</value>
  </data>
  <data name="LCD_Emote_Skeptical" xml:space="preserve">
    <value>Skeptical</value>
  </data>
  <data name="LCD_Emote_Sleepy" xml:space="preserve">
    <value>Sleepy</value>
  </data>
  <data name="LCD_Emote_Suspicious_Left" xml:space="preserve">
    <value>Suspicious Left</value>
  </data>
  <data name="LCD_Emote_Suspicious_Right" xml:space="preserve">
    <value>Suspicious Right</value>
  </data>
  <data name="LCD_Emote_Wink" xml:space="preserve">
    <value>Wink</value>
  </data>
  <data name="EmotionBlock_Currently_Selected_Emotion" xml:space="preserve">
    <value>Currently selected emotion : </value>
  </data>
  <data name="DisplayName_DLC_Automatons" xml:space="preserve">
    <value>Automatons</value>
  </data>
  <data name="Description_DLC_Automatons" xml:space="preserve">
    <value>Automatons</value>
  </data>
  <data name="Autopilot_Collision_Avoidance_Error" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Destination cannot be reached. Collision avoidance prevents this grid from moving inside the bounding box of a static grid. Move this grid and/or the destination outside any static grid’s bounding box or disable collision avoidance.[/Color]</value>
  </data>
  <data name="PathRecorderComponent_StatusMessage_BlockDisabled" xml:space="preserve">
    <value>Status: Block disabled</value>
  </data>
  <data name="DefensiveCombatBlock_HitAndRun_CustomWaypoint" xml:space="preserve">
    <value>Custom Waypoint</value>
  </data>
  <data name="FlightMovementBlock_MaxPitchAngle" xml:space="preserve">
    <value>Max Pitch Angle</value>
  </data>
  <data name="FlightMovementBlock_MaxPitchAngle_Tooltip" xml:space="preserve">
    <value>When moving to a waypoint in P-Gravity, the grid may pitch up or down by this angle.

Note: A low value may prevent the grid from being able to target things close to the ground.</value>
  </data>
  <data name="FlightMovementBlock_MaxRollAngle" xml:space="preserve">
    <value>Max Roll Angle</value>
  </data>
  <data name="FlightMovementBlock_MaxRollAngle_Tooltip" xml:space="preserve">
    <value>When moving to a waypoint in P-Gravity, the grid may roll left or right by this angle</value>
  </data>
  <data name="OffensiveDefensiveCombatBlock_TargetLocking_TimeLeft" xml:space="preserve">
    <value>Status: Target locking {0}. {1}s remaining.</value>
  </data>
  <data name="OffensiveDefensiveCombatBlock_TargetLocked" xml:space="preserve">
    <value>Status: Target locked {0}</value>
  </data>
  <data name="OffensiveCombatBlock_CharacterLocked" xml:space="preserve">
    <value>Attacking {0}</value>
  </data>
  <data name="DefensiveCombatBlock_CharacterLocked" xml:space="preserve">
    <value>Status: Defending against {0}</value>
  </data>
  <data name="OffensiveDefensiveCombatBlock_CanTargetCharacters" xml:space="preserve">
    <value>Target Characters</value>
  </data>
  <data name="OffensiveCombatBlock_FacingMode" xml:space="preserve">
    <value>Facing mode</value>
  </data>
  <data name="OffensiveCombatBlock_FacingMode_Tooltip" xml:space="preserve">
    <value>Use static weapons or manually set what side(s) should face the enemy</value>
  </data>
  <data name="DefensiveCombatBlock_SavedGps" xml:space="preserve">
    <value>(Saved) </value>
  </data>
  <data name="BasicMissionBlock_SavedGps" xml:space="preserve">
    <value>(Saved) </value>
  </data>
  <data name="Assembler_ItemsInQueue" xml:space="preserve">
    <value>Items in queue: {0}/{1}</value>
  </data>
  <data name="EventState_Merged" xml:space="preserve">
    <value>Merged</value>
  </data>
  <data name="EventState_NotMerged" xml:space="preserve">
    <value>Not Merged</value>
  </data>
  <data name="DisplayName_EventMerged" xml:space="preserve">
    <value>Merge Block Merged</value>
  </data>
  <data name="DisplayName_EventGridSpeedChanged" xml:space="preserve">
    <value>Grid Speed Changed</value>
  </data>
  <data name="DisplayName_EventThrustPercentage" xml:space="preserve">
    <value>Thrust %</value>
  </data>
  <data name="EventState_EventThrustPercentage" xml:space="preserve">
    <value>Thrust: </value>
  </data>
  <data name="EventControllerBlock_SpeedThreshold_Title" xml:space="preserve">
    <value>Speed Threshold</value>
  </data>
  <data name="EventControllerBlock_SpeedThreshold_Tooltip" xml:space="preserve">
    <value>Speed Threshold</value>
  </data>
  <data name="EventControllerBlock_AngleThreshold_Title" xml:space="preserve">
    <value>Angle Threshold</value>
  </data>
  <data name="EventControllerBlock_AngleThreshold_Tooltip" xml:space="preserve">
    <value>Angle Threshold</value>
  </data>
  <data name="DisplayName_EventMagneticLockReady" xml:space="preserve">
    <value>Magnetic Lock Ready</value>
  </data>
  <data name="DisplayName_EventMagneticLockReady_Ready" xml:space="preserve">
    <value>ready to lock</value>
  </data>
  <data name="DisplayName_EventMagneticLockReady_NotReady" xml:space="preserve">
    <value>not ready to lock</value>
  </data>
  <data name="DisplayName_EventConnectorReadyToLock" xml:space="preserve">
    <value>Connector Ready to Lock</value>
  </data>
  <data name="DisplayName_EventConnectorLockReady_Ready" xml:space="preserve">
    <value>ready to lock.</value>
  </data>
  <data name="DisplayName_EventConnectorLockReady_NotReady" xml:space="preserve">
    <value>not ready to lock.</value>
  </data>
  <data name="DisplayName_EventNaturalGravityChanged" xml:space="preserve">
    <value>Natural Gravity Changed</value>
  </data>
  <data name="DisplayName_EventNaturalGravity" xml:space="preserve">
    <value>Natural gravity:</value>
  </data>
  <data name="CombatBlock_OffensivePatternsTooltip" xml:space="preserve">
    <value>Determines how the grid will attack the enemy.
Circle/Orbit - The grid will try to circle or orbit the enemy at a customizable distance.
Stay at Range - The grid will try to keep the enemy between a customizable min/max distance.
Hit and Run - The grid will continuously make an attack run on the target, and break off to retreat when it gets close.
Intercept - The grid will attempt to intercept the enemy and ram it.</value>
  </data>
  <data name="Description_SabiroidPlushie" xml:space="preserve">
    <value>An advanced motivational device of pristine quality.

Can not be crafted or disassembled.</value>
  </data>
  <data name="DisplayName_Block_SabiroidPlushie" xml:space="preserve">
    <value>Saberoid Plushie</value>
  </data>
  <data name="DisplayName_EventDistanceToLockedTarget" xml:space="preserve">
    <value>Distance to Locked Target</value>
  </data>
  <data name="DisplayName_EventDistanceToLockedTargetChanged" xml:space="preserve">
    <value>Distance to Locked Target</value>
  </data>
  <data name="DisplayName_EventDistanceToLockedTarget_NotLocked" xml:space="preserve">
    <value>(not locked)</value>
  </data>
  <data name="EnableCrossplay" xml:space="preserve">
    <value>Enable Crossplay</value>
  </data>
  <data name="ToolTipOptionsGame_Crossplay" xml:space="preserve">
    <value>Allows games not created on PlayStation®4 console and PlayStation®5 console</value>
  </data>
  <data name="Crossplay_Disabled_Warning" xml:space="preserve">
    <value>Crossplay servers are disabled. Go to the Game Options menu to enable.</value>
  </data>
  <data name="WorldSettings_Error_MustSignIn" xml:space="preserve">
    <value>To be able to change online mode you need to sign-in</value>
  </data>
  <data name="DedicatedServer_Join_CrossPlayError" xml:space="preserve">
    <value>To be able to join a dedicated server you need to enable crossplay in Game Options</value>
  </data>
  <data name="DisplayName_Block_BeaconReskin" xml:space="preserve">
    <value>Round Beacon</value>
  </data>
  <data name="DisplayName_Block_CryoRoom" xml:space="preserve">
    <value>Inset Cryo Room</value>
  </data>
  <data name="DisplayName_DLC_DecorativeBlocks3" xml:space="preserve">
    <value>Decorative Blocks 3</value>
  </data>
  <data name="DisplayName_Block_CapCockpit" xml:space="preserve">
    <value>Cab Cockpit</value>
  </data>
  <data name="DisplayName_Screen_Center" xml:space="preserve">
    <value>Center Screen</value>
  </data>
  <data name="BlueprintshareTimeOutText" xml:space="preserve">
    <value>You cannot share blueprints so fast</value>
  </data>
  <data name="BlueprintshareTimeOut" xml:space="preserve">
    <value>Blueprint-share TimeOut</value>
  </data>
  <data name="Blueprintshare_Label" xml:space="preserve">
    <value>Blueprint share</value>
  </data>
  <data name="Blueprintshare_Tooltip" xml:space="preserve">
    <value>Enables/Disables recieving of blueprints</value>
  </data>
  <data name="DefensiveCombatBlock_FleeDistance_Title" xml:space="preserve">
    <value>Flee distance</value>
  </data>
  <data name="DefensiveCombatBlock_FleeDistance_Tooltip" xml:space="preserve">
    <value>Flee up to this distance from the last known location of the threat.</value>
  </data>
  <data name="DefensiveCombatBlock_EvasiveManeuvers_Title" xml:space="preserve">
    <value>Evasive Maneuvers</value>
  </data>
  <data name="DefensiveCombatBlock_EvasiveManeuvers_Tooltip" xml:space="preserve">
    <value>The AI will take evasive maneuvers to attempt to avoid incoming projectiles.</value>
  </data>
  <data name="DefensiveCombatBlock_RandomDeviations_Title" xml:space="preserve">
    <value>Random Deviations Angle</value>
  </data>
  <data name="DefensiveCombatBlock_RandomDeviations_Tooltip" xml:space="preserve">
    <value>To make it hard to predict where it will flee to, the AI will alter its course to this angle at the Random Deviations Interval.

Note: Setting a high angle will reduce the effective speed.</value>
  </data>
  <data name="DefensiveCombatBlock_EvasiveManeuverIntervalRange_Title" xml:space="preserve">
    <value>Random Deviations Interval</value>
  </data>
  <data name="DefensiveCombatBlock_EvasiveManeuverIntervalRange_Tooltip" xml:space="preserve">
    <value>When fleeing, the grid will change directions at this interval.</value>
  </data>
  <data name="DefensiveCombatBlock_FleeMode_Title" xml:space="preserve">
    <value>Flee Destination</value>
  </data>
  <data name="DefensiveCombatBlock_FleeMode_Tooltip" xml:space="preserve">
    <value>Determines where the grid will flee to.
Away from target - The grid will flee into the opposite direction of a threat.
To GPS / Beacon - The grid will flee towards a selected GPS or Beacon.</value>
  </data>
  <data name="DefensiveCombatBlock_FleeMode_AwayFromTarget" xml:space="preserve">
    <value>Away from target</value>
  </data>
  <data name="DefensiveCombatBlock_FleeMode_ToGPSOrBeacon" xml:space="preserve">
    <value>To GPS / Beacon</value>
  </data>
  <data name="DisplayName_Block_WindTurbineReskin" xml:space="preserve">
    <value>Twin-blade Wind Turbine</value>
  </data>
  <data name="DisplayName_Block_MedicalRoomReskin" xml:space="preserve">
    <value>Corner Medical Room</value>
  </data>
  <data name="DisplayName_Block_LargeAtmoThrustFlat" xml:space="preserve">
    <value>Large Flat Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_LargeAtmoThrustFlatDShape" xml:space="preserve">
    <value>Large Flat Atmospheric Thruster D Shape</value>
  </data>
  <data name="DisplayName_Block_SmallAtmoThrustFlat" xml:space="preserve">
    <value>Flat Atmospheric Thruster</value>
  </data>
  <data name="DisplayName_Block_SmallAtmoThrustFlatDShape" xml:space="preserve">
    <value>Flat Atmospheric Thruster D Shape</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundCornerHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Round Corner</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundCornerLight" xml:space="preserve">
    <value>Light Armor Panel Round Corner</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Round</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundLight" xml:space="preserve">
    <value>Light Armor Panel Round</value>
  </data>
  <data name="DisplayName_DefensiveBasicMission_SavedBeacon" xml:space="preserve">
    <value>(Saved Beacon)</value>
  </data>
  <data name="DisplayName_Block_ButtonPanelPedestal" xml:space="preserve">
    <value>Button Panel Pedestal</value>
  </data>
  <data name="DisplayName_Block_ControlPanelPedestal" xml:space="preserve">
    <value>Control Panel Pedestal</value>
  </data>
  <data name="Description_BlueprintClass_Equipment" xml:space="preserve">
    <value>Equipment
 - A variety of utility items and survival equipment.</value>
  </data>
  <data name="Description_BlueprintClass_SurvivalKitIngots" xml:space="preserve">
    <value>Ingots
 - Retrieve materials from mined ore.</value>
  </data>
  <data name="Description_BlueprintClass_Weapons" xml:space="preserve">
    <value>Weapons
 - Weaponry suitable for combat situations, 
ranging from personal defense to anti-vehicle.</value>
  </data>
  <data name="DisplayName_BlueprintClass_Equipment" xml:space="preserve">
    <value>Equipment</value>
  </data>
  <data name="DisplayName_BlueprintClass_SurvivalKitIngots" xml:space="preserve">
    <value>Ingots</value>
  </data>
  <data name="DisplayName_BlueprintClass_Weapons" xml:space="preserve">
    <value>Weapons</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster10" xml:space="preserve">
    <value>Warning Sign AI Powered</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster11" xml:space="preserve">
    <value>Warning Sign GoodAI</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster13" xml:space="preserve">
    <value>Warning Sign Memetic Badger 1</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster2" xml:space="preserve">
    <value>Warning Sign Memetic Badger 2</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster3" xml:space="preserve">
    <value>Warning Sign Grid AI</value>
  </data>
  <data name="DisplayName_Block_WarningSignEaster9" xml:space="preserve">
    <value>Warning Sign Arrow</value>
  </data>
  <data name="DisplayName_Block_CurvedLCDPanel" xml:space="preserve">
    <value>Curved LCD Panel</value>
  </data>
  <data name="DisplayName_Block_DiagonalLCD" xml:space="preserve">
    <value>Sloped LCD Panel</value>
  </data>
  <data name="DisplayName_Block_FullBlockLCD" xml:space="preserve">
    <value>Inset LCD Panel</value>
  </data>
  <data name="Description_Truss" xml:space="preserve">
    <value>Scaffold Blocks can provide light weight structural support to ships and stations.</value>
  </data>
  <data name="DisplayName_Block_Truss" xml:space="preserve">
    <value>Scaffold Block</value>
  </data>
  <data name="DisplayName_Block_TrussAngled" xml:space="preserve">
    <value>Scaffold Block Corner</value>
  </data>
  <data name="DisplayName_Block_TrussFloor" xml:space="preserve">
    <value>Walkable Scaffold Block</value>
  </data>
  <data name="DisplayName_Block_TrussFloorAngled" xml:space="preserve">
    <value>Walkable Scaffold Block Corner</value>
  </data>
  <data name="DisplayName_Block_TrussFloorAngledInverted" xml:space="preserve">
    <value>Walkable Scaffold Block Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_TrussFloorHalf" xml:space="preserve">
    <value>Walkable Half Scaffold Block</value>
  </data>
  <data name="DisplayName_Block_TrussHalf" xml:space="preserve">
    <value>Half Scaffold Block</value>
  </data>
  <data name="DisplayName_Block_TrussLadder" xml:space="preserve">
    <value>Scaffold Block Ladder</value>
  </data>
  <data name="DisplayName_Block_Barrel" xml:space="preserve">
    <value>Barrel</value>
  </data>
  <data name="DisplayName_Block_BarrelStack" xml:space="preserve">
    <value>Stacked Barrels</value>
  </data>
  <data name="DisplayName_Block_BarrelThree" xml:space="preserve">
    <value>Three Barrels</value>
  </data>
  <data name="DisplayName_Block_Crate" xml:space="preserve">
    <value>Cargo Crate</value>
  </data>
  <data name="DisplayName_Block_ExplosiveBarrel" xml:space="preserve">
    <value>Explosive Barrel</value>
  </data>
  <data name="BlockNotAvailableInSize" xml:space="preserve">
    <value>This block is not available in the selected size</value>
  </data>
  <data name="Description_CrateBlock" xml:space="preserve">
    <value>A large storage crate, reinforced to keep the items contained within it safe from harm.</value>
  </data>
  <data name="Description_ExplosiveBarrel" xml:space="preserve">
    <value>A barrel which has been converted into an improvised explosive.

Safe when unarmed. It can be detonated manually, by taking damage or set to detonate after a configurable amount of time.</value>
  </data>
  <data name="DisplayName_Block_ColorableSolarPanel" xml:space="preserve">
    <value>Colorable Solar Panel</value>
  </data>
  <data name="DisplayName_Block_ColorableSolarPanelCorner" xml:space="preserve">
    <value>Colorable Solar Panel Slope Left</value>
  </data>
  <data name="DisplayName_Block_ColorableSolarPanelCornerInverted" xml:space="preserve">
    <value>Colorable Solar Panel Slope Right</value>
  </data>
  <data name="DisplayName_Block_InsetBed" xml:space="preserve">
    <value>Inset Bed</value>
  </data>
  <data name="DisplayName_Block_InsetPlantCouch" xml:space="preserve">
    <value>Inset Couch</value>
  </data>
  <data name="DisplayName_Block_InsetBookshelf" xml:space="preserve">
    <value>Inset Bookshelf</value>
  </data>
  <data name="DisplayName_Block_InsetButtonPanel" xml:space="preserve">
    <value>Inset Button Panel</value>
  </data>
  <data name="DisplayName_Block_InsetEntertainmentCorner" xml:space="preserve">
    <value>Inset Entertainment Corner</value>
  </data>
  <data name="DisplayName_Block_InsetAquarium" xml:space="preserve">
    <value>Inset Aquarium</value>
  </data>
  <data name="DisplayName_Block_HoloLCD" xml:space="preserve">
    <value>Holo LCD</value>
  </data>
  <data name="DisplayName_DLC_Major203DLC" xml:space="preserve">
    <value>Decorative Blocks 3</value>
  </data>
  <data name="Description_DLC_Major203DLC" xml:space="preserve">
    <value>Decorative Blocks 3</value>
  </data>
  <data name="OffensiveCombatBlock_Status_HitAndRun_WarningNotFacingForward" xml:space="preserve">
    <value>Warning: One or more selected weapons are not facing the forwards direction and are not used.</value>
  </data>
  <data name="Description_Aquarium" xml:space="preserve">
    <value>An Aquarium to observe aquatic lifeforms. </value>
  </data>
  <data name="DisplayName_Block_ShortSuspension1x1" xml:space="preserve">
    <value>Short Wheel Suspension 1x1 Right</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension1x1Mirrored" xml:space="preserve">
    <value>Short Wheel Suspension 1x1 Left</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension2x2" xml:space="preserve">
    <value>Short Wheel Suspension 2x2 Right</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension2x2Mirrored" xml:space="preserve">
    <value>Short Wheel Suspension 2x2 Left</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension3x3" xml:space="preserve">
    <value>Short Wheel Suspension 3x3 Right</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension3x3mirrored" xml:space="preserve">
    <value>Short Wheel Suspension 3x3 Left</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension5x5" xml:space="preserve">
    <value>Short Wheel Suspension 5x5 Right</value>
  </data>
  <data name="DisplayName_Block_ShortSuspension5x5mirrored" xml:space="preserve">
    <value>Short Wheel Suspension 5x5 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension1x1" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 1x1 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension1x1Mirrored" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 1x1 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension2x2" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 2x2 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension2x2Mirrored" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 2x2 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension3x3" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 3x3 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension3x3mirrored" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 3x3 Left</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension5x5" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 5x5 Right</value>
  </data>
  <data name="DisplayName_Block_OffroadShortSuspension5x5mirrored" xml:space="preserve">
    <value>Offroad Short Wheel Suspension 5x5 Left</value>
  </data>
  <data name="DisplayName_Block_InsetKitchen" xml:space="preserve">
    <value>Inset Kitchen</value>
  </data>
  <data name="DisplayName_Block_TrussSloped" xml:space="preserve">
    <value>Scaffold Block Slope</value>
  </data>
  <data name="Description_LargeFlareLauncher" xml:space="preserve">
    <value>A launcher for signalling or putting up a spectacle.</value>
  </data>
  <data name="DisplayName_Block_FlareLauncher" xml:space="preserve">
    <value>Firework Launcher</value>
  </data>
  <data name="DisplayName_Item_FlareClip" xml:space="preserve">
    <value>Flare Gun Clip</value>
  </data>
  <data name="DisplayName_Item_FlareGun" xml:space="preserve">
    <value>Flare Gun</value>
  </data>
  <data name="DisplayName_Block_StatueEngineer" xml:space="preserve">
    <value>Anniversary Statue</value>
  </data>
  <data name="Description_StatueEngineer" xml:space="preserve">
    <value>A statue to celebrate the 10th anniversary of Space Engineers.</value>
  </data>
  <data name="Description_DLC_Anniversary" xml:space="preserve">
    <value>Anniversary</value>
  </data>
  <data name="DisplayName_DLC_Anniversary" xml:space="preserve">
    <value>Anniversary</value>
  </data>
  <data name="Description_FlareGun" xml:space="preserve">
    <value>Flare Guns can be used to signal your position to others or to temporarily illuminate your surroundings.</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxBlue" xml:space="preserve">
    <value>Fireworks Blue</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxGreen" xml:space="preserve">
    <value>Fireworks Green</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxPink" xml:space="preserve">
    <value>Fireworks Pink</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxRainbow" xml:space="preserve">
    <value>Fireworks Rainbow</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxRed" xml:space="preserve">
    <value>Fireworks Red</value>
  </data>
  <data name="DisplayName_Item_FireworksBoxYellow" xml:space="preserve">
    <value>Fireworks Yellow</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_01" xml:space="preserve">
    <value>Aye</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_02" xml:space="preserve">
    <value>Clang The Conqueror</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_03" xml:space="preserve">
    <value>ClangDrive</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_04" xml:space="preserve">
    <value>Memory</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_05" xml:space="preserve">
    <value>New Order</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_06" xml:space="preserve">
    <value>Outnumbered</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_07" xml:space="preserve">
    <value>Oxygen</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_08" xml:space="preserve">
    <value>Quasar</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_09" xml:space="preserve">
    <value>SE MT Remix</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_10" xml:space="preserve">
    <value>Space Funk</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_11" xml:space="preserve">
    <value>Space Guardians</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_12" xml:space="preserve">
    <value>The Day Of Battle</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_13" xml:space="preserve">
    <value>The Hunt</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_14" xml:space="preserve">
    <value>The Motherload</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_15" xml:space="preserve">
    <value>To The Moon</value>
  </data>
  <data name="SoundBlock_SoundName_MusCompetition2_16" xml:space="preserve">
    <value>Voyage To Andromeda</value>
  </data>
  <data name="FeatureNotSupported" xml:space="preserve">
    <value>This feature is not supported</value>
  </data>
  <data name="DisplayName_Block_InsetWall" xml:space="preserve">
    <value>Inset Wall </value>
  </data>
  <data name="DisplayName_Block_InsetWallCorner" xml:space="preserve">
    <value>Inset Wall Corner</value>
  </data>
  <data name="DisplayName_Block_InsetWallLight" xml:space="preserve">
    <value>Inset Wall Light</value>
  </data>
  <data name="DisplayName_Block_InsetWallPillar" xml:space="preserve">
    <value>Inset Wall Pillar</value>
  </data>
  <data name="DisplayName_Block_InsetWallSlope" xml:space="preserve">
    <value>Inset Wall Diagonal</value>
  </data>
  <data name="DisplayName_DLC_DecorativeBlocks4" xml:space="preserve">
    <value>Signal Blocks</value>
  </data>
  <data name="RadialMenuGroupTitle_Decoration6" xml:space="preserve">
    <value>Decoration #6</value>
  </data>
  <data name="Description_ConsoleModule" xml:space="preserve">
    <value>Console module blocks can be used to make a working station appear productive and important.</value>
  </data>
  <data name="DisplayName_Block_ConsoleModule" xml:space="preserve">
    <value>Console Module</value>
  </data>
  <data name="DisplayName_Block_ConsoleModuleButtons" xml:space="preserve">
    <value>Console Module Buttons</value>
  </data>
  <data name="DisplayName_Block_ConsoleModuleCorner" xml:space="preserve">
    <value>Console Module Corner</value>
  </data>
  <data name="DisplayName_Block_ConsoleModuleInvertedCorner" xml:space="preserve">
    <value>Console Module Corner Inv.</value>
  </data>
  <data name="DisplayName_Block_ConsoleModuleScreens" xml:space="preserve">
    <value>Console Module LCD</value>
  </data>
  <data name="ToolTipWorldSettings_Drones" xml:space="preserve">
    <value>Enables NPC antennas to spawn potentially hostile drones</value>
  </data>
  <data name="ToolTipWorldSettings_Voxels" xml:space="preserve">
    <value>Enables voxel manipulation tools in creative mode.</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindow" xml:space="preserve">
    <value>Bay Window</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowCorner" xml:space="preserve">
    <value>Bay Window Corner</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowDome" xml:space="preserve">
    <value>Bay Window Dome</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowEnd" xml:space="preserve">
    <value>Bay Window End</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowRailing" xml:space="preserve">
    <value>Bay Window Railing</value>
  </data>
  <data name="DisplayName_Block_Corridor" xml:space="preserve">
    <value>Corridor</value>
  </data>
  <data name="DisplayName_Block_CorridorCorner" xml:space="preserve">
    <value>Corridor Corner</value>
  </data>
  <data name="DisplayName_Block_CorridorDoubleWindow" xml:space="preserve">
    <value>Corridor Double Windowed Sides</value>
  </data>
  <data name="DisplayName_Block_CorridorLight" xml:space="preserve">
    <value>Corridor Light</value>
  </data>
  <data name="DisplayName_Block_CorridorT" xml:space="preserve">
    <value>Corridor T Intersection</value>
  </data>
  <data name="DisplayName_Block_CorridorWindow" xml:space="preserve">
    <value>Corridor Windowed Side</value>
  </data>
  <data name="DisplayName_Block_CorridorWindowRoof" xml:space="preserve">
    <value>Corridor Windowed Roof</value>
  </data>
  <data name="DisplayName_Block_CorridorX" xml:space="preserve">
    <value>Corridor X Intersection</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundFaceHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Round Face</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundFaceLight" xml:space="preserve">
    <value>Light Armor Panel Round Face</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundInvertedCornerHeavy" xml:space="preserve">
    <value>Heavy Armor Panel Round Inverted Corner</value>
  </data>
  <data name="DisplayName_Block_ArmorPanelRoundInvertedCornerLight" xml:space="preserve">
    <value>Light Armor Panel Round Inverted Corner</value>
  </data>
  <data name="DisplayName_Block_NarrowDoor" xml:space="preserve">
    <value>Narrow Door</value>
  </data>
  <data name="DisplayName_Block_NarrowDoorHalf" xml:space="preserve">
    <value>Narrow Door Half</value>
  </data>
  <data name="DisplayName_Block_CompactAntenna" xml:space="preserve">
    <value>Compact Antenna</value>
  </data>
  <data name="DisplayName_Block_CorridorNarrow" xml:space="preserve">
    <value>Corridor Narrow</value>
  </data>
  <data name="DisplayName_Block_TrussPillar" xml:space="preserve">
    <value>Truss Pillar</value>
  </data>
  <data name="DisplayName_Block_TrussPillarDecoy" xml:space="preserve">
    <value>Truss Decoy</value>
  </data>
  <data name="DisplayName_Block_TrussPillarLight" xml:space="preserve">
    <value>Truss Light</value>
  </data>
  <data name="DisplayName_Block_TrussPillarOffset" xml:space="preserve">
    <value>Truss Pillar Offset</value>
  </data>
  <data name="WorldSettings_EnableScrapDrops" xml:space="preserve">
    <value>Enable Scrap Drops</value>
  </data>
  <data name="ToolTipWorldSettingsEnableScrapDrops" xml:space="preserve">
    <value>Allow scrap to be dropped from destroyed blocks</value>
  </data>
  <data name="ScreenDebugAdminMenu_RemoveCargoBags" xml:space="preserve">
    <value>Remove cargo bags</value>
  </data>
  <data name="DisplayName_CargoBag" xml:space="preserve">
    <value>Cargo Bag ({0})</value>
  </data>
  <data name="BroadcastController_BroadcastTarget_Title" xml:space="preserve">
    <value>Broadcast Target</value>
  </data>
  <data name="BroadcastController_BroadcastTarget_Tooltip" xml:space="preserve">
    <value>Set who receives the message.</value>
  </data>
  <data name="BroadcastController_UseAntenna_Title" xml:space="preserve">
    <value>Use Antenna</value>
  </data>
  <data name="BroadcastController_UseAntenna_Tooltip" xml:space="preserve">
    <value>Enable broadcasting using antennas. If left unchecked, only players inside cockpits on this grid will see the message(s).</value>
  </data>
  <data name="BroadcastController_CustomName_Title" xml:space="preserve">
    <value>Custom Name</value>
  </data>
  <data name="BroadcastController_CustomName_Tooltip" xml:space="preserve">
    <value>Sets a custom name, displayed before each message.</value>
  </data>
  <data name="BroadcastController_Message1_Title" xml:space="preserve">
    <value>Message 1</value>
  </data>
  <data name="BroadcastController_Message2_Title" xml:space="preserve">
    <value>Message 2</value>
  </data>
  <data name="BroadcastController_Message3_Title" xml:space="preserve">
    <value>Message 3</value>
  </data>
  <data name="BroadcastController_Message4_Title" xml:space="preserve">
    <value>Message 4</value>
  </data>
  <data name="BroadcastController_Message5_Title" xml:space="preserve">
    <value>Message 5</value>
  </data>
  <data name="BroadcastController_Message6_Title" xml:space="preserve">
    <value>Message 6</value>
  </data>
  <data name="BroadcastController_Message7_Title" xml:space="preserve">
    <value>Message 7</value>
  </data>
  <data name="BroadcastController_Message8_Title" xml:space="preserve">
    <value>Message 8</value>
  </data>
  <data name="BroadcastController_TransmitMessage1_Title" xml:space="preserve">
    <value>Transmit Message 1</value>
  </data>
  <data name="BroadcastController_TransmitMessage2_Title" xml:space="preserve">
    <value>Transmit Message 2</value>
  </data>
  <data name="BroadcastController_TransmitMessage3_Title" xml:space="preserve">
    <value>Transmit Message 3</value>
  </data>
  <data name="BroadcastController_TransmitMessage4_Title" xml:space="preserve">
    <value>Transmit Message 4</value>
  </data>
  <data name="BroadcastController_TransmitMessage5_Title" xml:space="preserve">
    <value>Transmit Message 5</value>
  </data>
  <data name="BroadcastController_TransmitMessage6_Title" xml:space="preserve">
    <value>Transmit Message 6</value>
  </data>
  <data name="BroadcastController_TransmitMessage7_Title" xml:space="preserve">
    <value>Transmit Message 7</value>
  </data>
  <data name="BroadcastController_TransmitMessage8_Title" xml:space="preserve">
    <value>Transmit Message 8</value>
  </data>
  <data name="BroadcastController_TransmitRandomMessage_Title" xml:space="preserve">
    <value>Send Random Message</value>
  </data>
  <data name="BroadcastController_TransmitRandomMessage_Tooltip" xml:space="preserve">
    <value>Selects random message and transmits that message.</value>
  </data>
  <data name="BroadcastController_SendGps_Title" xml:space="preserve">
    <value>Send GPS</value>
  </data>
  <data name="BroadcastController_SendGps_Tooltip" xml:space="preserve">
    <value>Send current position</value>
  </data>
  <data name="BroadcastController_BroadcastTarget_Owner" xml:space="preserve">
    <value>Owner Only</value>
  </data>
  <data name="BroadcastController_BroadcastTarget_Faction" xml:space="preserve">
    <value>Faction Only</value>
  </data>
  <data name="BroadcastController_BroadcastTarget_Everyone" xml:space="preserve">
    <value>Everyone</value>
  </data>
  <data name="BroadcastController_SetBroadcastTarget_Owner" xml:space="preserve">
    <value>Enable Owner Only</value>
  </data>
  <data name="BroadcastController_SetBroadcastTarget_Faction" xml:space="preserve">
    <value>Enable Faction Only</value>
  </data>
  <data name="BroadcastController_SetBroadcastTarget_Everyone" xml:space="preserve">
    <value>Enable Everyone</value>
  </data>
  <data name="ToolTipWorldSettingsMaxOfflineBroadcastDistance" xml:space="preserve">
    <value>The maximum distance Broadcast Controller will transmit messages when its owner is offline.</value>
  </data>
  <data name="WorldSettings_MaxOfflineBroadcastDistance" xml:space="preserve">
    <value>Max offline broadcast distance</value>
  </data>
  <data name="BroadcastController_DetailInfo_NoAntenna" xml:space="preserve">
    <value>Error: No antenna found.</value>
  </data>
  <data name="BroadcastController_DetailInfo_NoFunctionalAntenna" xml:space="preserve">
    <value>Error: Antennas inaccessible.</value>
  </data>
  <data name="BroadcastController_DetailInfo_NoMessages" xml:space="preserve">
    <value>Error: No messages stored.</value>
  </data>
  <data name="BroadcastController_DetailInfo_OwnerOffline" xml:space="preserve">
    <value>Owner offline,
Range restricted: {0} m</value>
  </data>
  <data name="BroadcastController_DetailInfo_AntispamCooldown" xml:space="preserve">
    <value>Anti-spam cooldown: {0} s remaining.</value>
  </data>
  <data name="BroadcastController_DetailInfo_MessagesInBuffer" xml:space="preserve">
    <value>Messages in buffer: {0}.</value>
  </data>
  <data name="GameOptions_MuteBroadcastControllers" xml:space="preserve">
    <value>Mute Broadcast Controllers</value>
  </data>
  <data name="GameOptionsTooltip_MuteBroadcastControllers" xml:space="preserve">
    <value>Mutes every Broadcast Controller in the game.</value>
  </data>
  <data name="SignalReceiver_RelationFilter_Title" xml:space="preserve">
    <value>Accept Signal from:</value>
  </data>
  <data name="SignalReceiver_RelationFilter_Owner" xml:space="preserve">
    <value>Owner</value>
  </data>
  <data name="SignalReceiver_RelationFilter_Faction" xml:space="preserve">
    <value>Faction</value>
  </data>
  <data name="SignalReceiver_RelationFilter_Everyone" xml:space="preserve">
    <value>Everyone</value>
  </data>
  <data name="SignalReceiver_RelationFilterTooltip_Owner" xml:space="preserve">
    <value>Action Relay will only respond to signals from the owner</value>
  </data>
  <data name="SignalReceiver_RelationFilterTooltip_Faction" xml:space="preserve">
    <value>Action Relay will only respond to signals from the owning faction</value>
  </data>
  <data name="SignalReceiver_RelationFilterTooltip_Everyone" xml:space="preserve">
    <value>Action Relay will respond to any signal</value>
  </data>
  <data name="SignalReceiver_SetRelationFilterAction_Owner" xml:space="preserve">
    <value>Enable Owner Only</value>
  </data>
  <data name="SignalReceiver_SetRelationFilterAction_Faction" xml:space="preserve">
    <value>Enable Faction Only</value>
  </data>
  <data name="SignalReceiver_SetRelationFilterAction_Everyone" xml:space="preserve">
    <value>Enable Everyone</value>
  </data>
  <data name="BlockPropertyTitle_SignalReceiverToolbarOpen" xml:space="preserve">
    <value>Setup actions</value>
  </data>
  <data name="SignalSender_SendSignalButton_Title" xml:space="preserve">
    <value>Send Signal</value>
  </data>
  <data name="SignalSender_SendSignalButton_Tooltip" xml:space="preserve">
    <value>Triggers Action Relay blocks using the same channel inside the antenna network</value>
  </data>
  <data name="SignalChannel_SetChannel_Title" xml:space="preserve">
    <value>Channel</value>
  </data>
  <data name="SignalChannel_SetChannel_Tooltip" xml:space="preserve">
    <value>Actions will trigger when a signal is received from an Action Relay block with corresponding channel</value>
  </data>
  <data name="SignalChannel_SetChannel_Action" xml:space="preserve">
    <value>Set Channel</value>
  </data>
  <data name="SignalChannel_SetChannelAndSend_Action" xml:space="preserve">
    <value>Set Channel and Send Signal</value>
  </data>
  <data name="SetValue_Action_SetLabel" xml:space="preserve">
    <value>Set label</value>
  </data>
  <data name="SignalConnectivity_State_NoAntennas" xml:space="preserve">
    <value>Error: No antenna found</value>
  </data>
  <data name="SignalConnectivity_State_NoLaserLink" xml:space="preserve">
    <value>{0}: No connection</value>
  </data>
  <data name="SignalConnectivity_State_LaserConnected" xml:space="preserve">
    <value>{0}: Connected</value>
  </data>
  <data name="SignalConnectivity_State_Inaccessible" xml:space="preserve">
    <value>{0}: Ownership/sharing does not match</value>
  </data>
  <data name="SignalConnectivity_State_NotOperational" xml:space="preserve">
    <value>{0}: Not operational</value>
  </data>
  <data name="DisplayName_Block_TrussFloorT" xml:space="preserve">
    <value>Walkable Scaffold Block T</value>
  </data>
  <data name="DisplayName_Block_TrussFloorX" xml:space="preserve">
    <value>Walkable Scaffold Block X</value>
  </data>
  <data name="DisplayName_Block_TrussFrame" xml:space="preserve">
    <value>Scaffold Frame</value>
  </data>
  <data name="DisplayName_Block_TrussSlopedFrame" xml:space="preserve">
    <value>Scaffold Sloped Frame</value>
  </data>
  <data name="DisplayName_Block_InsetWallCornerInverted" xml:space="preserve">
    <value>Inset Wall Corner Inv.</value>
  </data>
  <data name="ClaimAuthorship_Title" xml:space="preserve">
    <value>Claim NPC Grid</value>
  </data>
  <data name="ClaimAuthorship_Text" xml:space="preserve">
    <value>Claiming this grid will transfer all of its PCU to you and prevent it from despawning.
Blocks will still need to be hacked to gain ownership
  
PCU Needed to Claim:
{0}
  
Available PCU
{1}
    </value>
  </data>
  <data name="ClaimAuthorship_Tooltip_PCU" xml:space="preserve">
    <value>Claim the PCU of this grid. You must have {0} PCU available.</value>
  </data>
  <data name="ClaimAuthorship_Tooltip_Limit" xml:space="preserve">
    <value>Cannot claim the PCU of this grid. {0}</value>
  </data>
  <data name="DisplayName_Block_CorridorNarrowStowage" xml:space="preserve">
    <value>Corridor Narrow Stowage</value>
  </data>
  <data name="ClaimAuthorship_BlockDespawnNotification" xml:space="preserve">
    <value>Unclaimed blocks will despawn in {0}</value>
  </data>
  <data name="WorkshopBrowser_Storage" xml:space="preserve">
    <value>Storage:</value>
  </data>
  <data name="WorkshopBrowser_OutOfStorage_Caption" xml:space="preserve">
    <value>Out of Storage</value>
  </data>
  <data name="WorkshopBrowser_OutOfStorage_Text" xml:space="preserve">
    <value>You are out of storage so you can't subscribe.</value>
  </data>
  <data name="CustomWorld_RedShip2" xml:space="preserve">
    <value>Red Ship v2</value>
  </data>
  <data name="QuickStartNotification_Title" xml:space="preserve">
    <value>Would you like to try Quick Start instead?</value>
  </data>
  <data name="QuickStartNotification_Yes" xml:space="preserve">
    <value>Play Quick Start</value>
  </data>
  <data name="DisplayName_TemporaryContainer" xml:space="preserve">
    <value>Temporary Container</value>
  </data>
  <data name="Description_BroadcastController" xml:space="preserve">
    <value>The Broadcast Controller transmits custom messages to players using the chat window. 
Use antennas to increase the range.</value>
  </data>
  <data name="DisplayName_Block_TrussPillarDiagonal" xml:space="preserve">
    <value>Truss Pillar Offset Corner</value>
  </data>
  <data name="DisplayName_Block_TrussPillarT" xml:space="preserve">
    <value>Truss Pillar T</value>
  </data>
  <data name="DisplayName_Block_TrussPillarX" xml:space="preserve">
    <value>Truss Pillar X</value>
  </data>
  <data name="SimpleNewGame_LostColony_Description" xml:space="preserve">
    <value>Contact has been lost with a remote colony and it's your job to find out what happened. With up to four players, embark on an exciting journey through caves and mysterious underground bunkers while exploring the valley and its history via data pads left behind by the colonists.</value>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert1" xml:space="preserve">
    <value>Approaching the Start [concert version]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert2" xml:space="preserve">
    <value>The Dust</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert3" xml:space="preserve">
    <value>A New Dawn</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert4" xml:space="preserve">
    <value>Liftoff [concert version]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert5" xml:space="preserve">
    <value>Uncharted Territory [concert version]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert6" xml:space="preserve">
    <value>Fight Like One [concert version]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert7" xml:space="preserve">
    <value>Warfare Trailer [live]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert8" xml:space="preserve">
    <value>Out of Early Access [live]</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="SoundBlock_SoundName_MusicConcert9" xml:space="preserve">
    <value>We Are Engineers</value>
    <comment>Name, don't translate</comment>
  </data>
  <data name="DisplayName_Community" xml:space="preserve">
    <value>Community</value>
  </data>
  <data name="DisplayName_OpenInCommunity" xml:space="preserve">
    <value>Open in Community</value>
  </data>
  <data name="ScenarioSelectionScreen_Sort" xml:space="preserve">
    <value>Sort:</value>
  </data>
  <data name="ScenarioSelectionScreen_Filter" xml:space="preserve">
    <value>Filter:</value>
  </data>
  <data name="ScenarioSelectionScreen_FilterAlphabetical" xml:space="preserve">
    <value>Alphabetical</value>
  </data>
  <data name="ScenarioSelectionScreen_BrowseCommunity" xml:space="preserve">
    <value>Browse Community</value>
  </data>
  <data name="CryopodDeathNotification_OkButtonTooltip" xml:space="preserve">
    <value>Respawn at the nearest Medical Room or transition to the respawn screen, based on the configured world settings</value>
  </data>
  <data name="MergeBlock_UnclaimedError" xml:space="preserve">
    <value>[Color=#FFFF0000]ERROR: Cannot merge while the grid is unclaimed![/Color]</value>
  </data>
  <data name="SimpleNewGame_AsteroidArmory_Description" xml:space="preserve">
    <value>An expansive military research facility has been carved into an asteroid in deep space. Rivals threaten the security of the base. Take control of the outpost and ensure its success.</value>
  </data>
  <data name="SimpleNewGame_CrashedRedShip_Description" xml:space="preserve">
    <value>A navigational accident has left your cruiser severely damaged. Use your skills to salvage, rebuild, and survive the harsh environment of space.</value>
  </data>
  <data name="SimpleNewGame_DeadDropArena_Description" xml:space="preserve">
    <value>A PvP scenario that allows pilots to test their skills against one another. Fighters are deployed from a central station high in the Martian atmosphere. Play 1v1 or in teams.</value>
  </data>
  <data name="SimpleNewGame_EasyStartConsole_Description" xml:space="preserve">
    <value>Start your journey on a planet or in deep space.</value>
  </data>
  <data name="SimpleNewGame_EasyStartGreen_Description" xml:space="preserve">
    <value>Begin your journey on a sprawling asteroid base. Use the base’s infrastructure as a launching point. Gather resources, refit existing craft or build your own, and explore the asteroid belt.</value>
  </data>
  <data name="SimpleNewGame_EasyStartSpace_Description" xml:space="preserve">
    <value>This world can serve as a jumping-off point for both survival and creative gameplay sessions, providing you with a station and a large cruiser. Where you go from there is up to you!</value>
  </data>
  <data name="SimpleNewGame_EasyStart_Description" xml:space="preserve">
    <value>Start on a planet with a large outpost and plenty of supplies. Features multiple planetary locations ready for exploration and expansion.</value>
  </data>
  <data name="SimpleNewGame_EmptyWorld_Description" xml:space="preserve">
    <value>This world is a blank slate, unleash your creativity and populate it with your creations.</value>
  </data>
  <data name="SimpleNewGame_LearningToSurvive_Description" xml:space="preserve">
    <value>This is a nonlinear tutorial mission. Restore an old outpost to act as your base of operations and explore the remains of a once-thriving industrial outpost. Each location you discover will teach you the skills needed to survive in the universe of Space Engineers.</value>
  </data>
  <data name="SimpleNewGame_LoneSurvivor_Description" xml:space="preserve">
    <value>Alone in the void. Choose your destiny.</value>
  </data>
  <data name="SimpleNewGame_NeverSurrender_Description" xml:space="preserve">
    <value>Start your journey on a planet or in deep space. Build at your own pace, and when you’ve gathered your forces challenge yourself by defending a small outpost from waves of relentless drones. Play alone or together. How you do it is up to you!</value>
  </data>
  <data name="SimpleNewGame_PetramOrbiter_Description" xml:space="preserve">
    <value>High above the harsh deserts of the planet Pertam, a team of engineers has created an orbital station serving as a launching point for planetary exploration. Gather your supplies and drop to the planet's surface. Do you have what it takes to survive this wasteland?</value>
  </data>
  <data name="SimpleNewGame_RedShip2_Description" xml:space="preserve">
    <value>A modernized version of the classic Red Ship world. This world can serve as a jumping-off point for both survival and creative gameplay sessions. It is friendly to new players and has various examples and opportunities for you to engage and explore the features of Space Engineers.</value>
  </data>
  <data name="SimpleNewGame_RivalPlatforms_Description" xml:space="preserve">
    <value>Two rival teams have gathered their forces in an asteroid field, each with a cruiser and a squad of fighters ready to deploy. Choose a side, build up your base, and prepare for battle.</value>
  </data>
  <data name="SimpleNewGame_ScrapRace_Description" xml:space="preserve">
    <value>Scrap Race is a fast-paced racing scenario designed for multiplayer. Pick your vehicle of choice, customize it to your liking, and compete against other lowlifes, thrillseekers, and speed freaks from across the system. Will your vehicle survive the wasteland, or will you be left in the dust?</value>
  </data>
  <data name="SimpleNewGame_SpaceStandoff_Description" xml:space="preserve">
    <value>Space Standoff is a multiplayer scenario where two teams have acquired a valuable Data Container and the race to decrypt these devices has ignited tensions between them. Each team must defend their base while mobilizing their resources to destroy the enemy's container. The clock is ticking, and only the most skilled and coordinated team will emerge victorious.</value>
  </data>
  <data name="SimpleNewGame_SparksOfTheFuture_Description" xml:space="preserve">
    <value>Welcome to Sparks of the Future! Enjoy some competition at the shooting range or on the dance floor. Explore the many shops available at Sparks of the Future Central. Looking for a distraction from your daily activities or do you seek vibrant city life? You can find it all here at Sparks of the Future!</value>
  </data>
  <data name="SimpleNewGame_StarSystem_Description" xml:space="preserve">
    <value>One of the most popular worlds in Space Engineers, featuring several planets for you to build, explore, and survive on. Customize the settings and play to your heart’s content!</value>
  </data>
  <data name="SimpleNewGame_UraniumHeist_Description" xml:space="preserve">
    <value>Gather resources and expand your arsenal as you defend your territory, construct defenses, and protect your uranium carrier. Carrying uranium will slow your speed considerably, work together when escorting this precious cargo back to base. Multiple paths to victory means no two games are ever the same. Is your team up to the challenge? Lock and load!</value>
  </data>
  <data name="ScenarioSelectionScreen_LocalScenario" xml:space="preserve">
    <value>Local scenario</value>
  </data>
  <data name="WorldSettings_EnableTemporaryContainers" xml:space="preserve">
    <value>Enable Temporary Containers</value>
  </data>
  <data name="ToolTipWorldSettings_EnableTemporaryContainers" xml:space="preserve">
    <value>Enable Temporary Containers to spawn after destroying block with inventory.</value>
  </data>
  <data name="Description_ModularBridgeCockpit" xml:space="preserve">
    <value>A set of modular blocks to design elaborate bridges to helm your ship from.</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitButtonPanel" xml:space="preserve">
    <value>Bridge Button Panel</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCorner" xml:space="preserve">
    <value>Bridge Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitEmpty" xml:space="preserve">
    <value>Bridge Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitSideL" xml:space="preserve">
    <value>Bridge Side L</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitSideR" xml:space="preserve">
    <value>Bridge Side R</value>
  </data>
  <data name="DisplayName_Block_CompactAntennaReskin" xml:space="preserve">
    <value>Parabolic Antenna</value>
  </data>
  <data name="DisplayName_Block_EvenWideDoor" xml:space="preserve">
    <value>Small Gate Wide</value>
  </data>
  <data name="DisplayName_Block_InsetConnector" xml:space="preserve">
    <value>Inset Connector</value>
  </data>
  <data name="DisplayName_Block_InsetConnectorSmall" xml:space="preserve">
    <value>Small Inset Connector</value>
  </data>
  <data name="DisplayName_Block_ModularBridgeCockpit" xml:space="preserve">
    <value>Bridge Helm</value>
  </data>
  <data name="DisplayName_Block_PistonBaseReskin" xml:space="preserve">
    <value>Square Piston</value>
  </data>
  <data name="DisplayName_Block_PistonTopReskin" xml:space="preserve">
    <value>Top Square Piston Part</value>
  </data>
  <data name="DisplayName_Block_SmallGate" xml:space="preserve">
    <value>Small Gate Tall</value>
  </data>
  <data name="DisplayName_DLC_205" xml:space="preserve">
    <value>Contact Blocks</value>
  </data>
  <data name="DisplayName_Block_CaptainDesk" xml:space="preserve">
    <value>Captain's Desk</value>
  </data>
  <data name="DisplayName_Block_Floodlight" xml:space="preserve">
    <value>Floodlight</value>
  </data>
  <data name="DisplayName_Block_FloodlightAngled" xml:space="preserve">
    <value>Floodlight Angled</value>
  </data>
  <data name="DisplayName_Block_FloodlightAngledRotated" xml:space="preserve">
    <value>Floodlight Diagonal</value>
  </data>
  <data name="DisplayName_Block_FloodlightCornerL" xml:space="preserve">
    <value>Floodlight Corner L</value>
  </data>
  <data name="DisplayName_Block_FloodlightCornerR" xml:space="preserve">
    <value>Floodlight Corner R</value>
  </data>
  <data name="DisplayName_Block_FloodlightDown" xml:space="preserve">
    <value>Floodlight Down</value>
  </data>
  <data name="DisplayName_Block_PrototechJumpDrive" xml:space="preserve">
    <value>Prototech Jump Drive</value>
  </data>
  <data name="DisplayName_Block_PrototechRefinery" xml:space="preserve">
    <value>Prototech Refinery</value>
  </data>
  <data name="DisplayName_Block_PrototechThruster" xml:space="preserve">
    <value>Prototech Thruster</value>
  </data>
  <data name="DisplayName_Prototech" xml:space="preserve">
    <value>Prototech Blocks</value>
  </data>
  <data name="Description_PrototechAssembler" xml:space="preserve">
    <value>Prototech Assemblers are capable of manufacturing most Prototech components. Possessing one allows the owner to repair and maintain other Prototech blocks.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="DisplayName_Block_PrototechAssembler" xml:space="preserve">
    <value>Prototech Assembler</value>
  </data>
  <data name="DisplayName_Block_PrototechBattery" xml:space="preserve">
    <value>Prototech Battery</value>
  </data>
  <data name="DisplayName_Block_PrototechGyroscope" xml:space="preserve">
    <value>Prototech Gyroscope</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCorner2x1Base" xml:space="preserve">
    <value>Bridge Corner 2x1 Base L</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitHalfSlopedCorner" xml:space="preserve">
    <value>Bridge Half Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitRaisedSlopedCorner" xml:space="preserve">
    <value>Bridge Raised Sloped Corner</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCorner2x1BaseR" xml:space="preserve">
    <value>Bridge Corner 2x1 Base R</value>
  </data>
  <data name="DisplayName_Block_GatlingTurretReskin" xml:space="preserve">
    <value>Gatling Turret Type II</value>
  </data>
  <data name="DisplayName_Block_PrototechDrill" xml:space="preserve">
    <value>Prototech Drill</value>
  </data>
  <data name="DisplayName_Block_MissileTurretReskin" xml:space="preserve">
    <value>Rocket Turret Type II</value>
  </data>
  <data name="Newsletter_Caption" xml:space="preserve">
    <value>Sign up for the Keen Software House Newsletter</value>
  </data>
  <data name="Newsletter_Signup" xml:space="preserve">
    <value>Sign up for our newsletter and get the Flush Cockpit for free!</value>
  </data>
  <data name="Newsletter_Description" xml:space="preserve">
    <value>Stay updated with the latest news, updates, and exclusive content from Keen Software House, and enjoy this special in-game reward as a thank you for joining us!</value>
  </data>
  <data name="Newsletter_Email" xml:space="preserve">
    <value>Email address</value>
  </data>
  <data name="Newsletter_Privacy" xml:space="preserve">
    <value>Privacy</value>
  </data>
  <data name="Newsletter_PrivacyCheckbox" xml:space="preserve">
    <value>I have read and agree to the Keen Software House privacy policy. I understand I can opt out at any time.</value>
  </data>
  <data name="Newsletter_OfferCheckbox" xml:space="preserve">
    <value>You may contact me with news and offers related to your products and services</value>
  </data>
  <data name="Newsletter_Disclaimer" xml:space="preserve">
    <value>If you would like to know more about how we store your data you can read our [https://www.keenswh.com/gdpr/ Privacy Policy]</value>
  </data>
  <data name="Newsletter_Help" xml:space="preserve">
    <value>{CONTROL:GUI:BUTTON_X} Subscribe   {CONTROL:GUI:CANCEL} Back   {CONTROL:GUI:BUTTON_Y} Privacy Policy</value>
  </data>
  <data name="DisplayName_Category_Automation" xml:space="preserve">
    <value>   Automation</value>
  </data>
  <data name="DisplayName_Category_Control" xml:space="preserve">
    <value>   Control</value>
  </data>
  <data name="DisplayName_Category_Decorative" xml:space="preserve">
    <value>   Decorative</value>
  </data>
  <data name="DisplayName_Category_DLCBlocks" xml:space="preserve">
    <value>DLC Blocks</value>
  </data>
  <data name="DisplayName_Category_Logistics" xml:space="preserve">
    <value>   Logistics</value>
  </data>
  <data name="DisplayName_Category_Mechanical" xml:space="preserve">
    <value>   Mechanical</value>
  </data>
  <data name="DisplayName_Category_Propulsion" xml:space="preserve">
    <value>   Propulsion</value>
  </data>
  <data name="DisplayName_Category_Structure" xml:space="preserve">
    <value>   Structure</value>
  </data>
  <data name="DisplayName_Category_Utility" xml:space="preserve">
    <value>   Utility</value>
  </data>
  <data name="RadialMenuGroupTitle_Automation" xml:space="preserve">
    <value>Automation</value>
  </data>
  <data name="RadialMenuGroupTitle_Control" xml:space="preserve">
    <value>Control</value>
  </data>
  <data name="RadialMenuGroupTitle_Logistics1" xml:space="preserve">
    <value>Logistics #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Logistics2" xml:space="preserve">
    <value>Logistics #2</value>
  </data>
  <data name="RadialMenuGroupTitle_Mechanical" xml:space="preserve">
    <value>Mechanical</value>
  </data>
  <data name="RadialMenuGroupTitle_Power" xml:space="preserve">
    <value>Power</value>
  </data>
  <data name="RadialMenuGroupTitle_Production" xml:space="preserve">
    <value>Production</value>
  </data>
  <data name="RadialMenuGroupTitle_Propulsion1" xml:space="preserve">
    <value>Movement #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Propulsion2" xml:space="preserve">
    <value>Movement #2</value>
  </data>
  <data name="RadialMenuGroupTitle_Structure1" xml:space="preserve">
    <value>Structure #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Structure2" xml:space="preserve">
    <value>Structure #2</value>
  </data>
  <data name="RadialMenuGroupTitle_Structure3" xml:space="preserve">
    <value>Structure #3</value>
  </data>
  <data name="RadialMenuGroupTitle_Utility1" xml:space="preserve">
    <value>Utility #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Utility2" xml:space="preserve">
    <value>Utility #2</value>
  </data>
  <data name="RadialMenuGroupTitle_Weapons" xml:space="preserve">
    <value>Weapons</value>
  </data>
  <data name="RadialMenuGroupTitle_Windows1" xml:space="preserve">
    <value>Windows #1</value>
  </data>
  <data name="RadialMenuGroupTitle_Windows2" xml:space="preserve">
    <value>Windows #2</value>
  </data>
  <data name="AdvancedWorldSettings_GlobalEncounterCap" xml:space="preserve">
    <value>Global Encounter Cap</value>
  </data>
  <data name="BlockActionTitle_AddMediumHingeHead" xml:space="preserve">
    <value>Add Medium Head</value>
  </data>
  <data name="BlockActionTitle_AddMediumRotorHead" xml:space="preserve">
    <value>Add Medium Head</value>
  </data>
  <data name="BlockActionTooltip_AddMediumHingeHead" xml:space="preserve">
    <value>Tries to add a Medium Hinge head on Large Hinge if no head is present</value>
  </data>
  <data name="BlockActionTooltip_AddMediumRotorHead" xml:space="preserve">
    <value>Tries to add a Medium Rotor head on Large Rotor if no head is present</value>
  </data>
  <data name="DisplayName_Category_Prototech" xml:space="preserve">
    <value>   Prototech</value>
  </data>
  <data name="DisplayName_Category_DLC_Automatons" xml:space="preserve">
    <value>   Automatons</value>
  </data>
  <data name="DisplayName_Category_DLC_Contact" xml:space="preserve">
    <value>   Contact</value>
  </data>
  <data name="DisplayName_Category_DLC_DecorativePack" xml:space="preserve">
    <value>   Decorative Pack 1</value>
  </data>
  <data name="DisplayName_Category_DLC_DecorativePack2" xml:space="preserve">
    <value>   Decorative Pack 2</value>
  </data>
  <data name="DisplayName_Category_DLC_DecorativePack3" xml:space="preserve">
    <value>   Decorative Pack 3</value>
  </data>
  <data name="DisplayName_Category_DLC_Fieldwork" xml:space="preserve">
    <value>   Fieldwork</value>
  </data>
  <data name="DisplayName_Category_DLC_Frostbite" xml:space="preserve">
    <value>   Frostbite</value>
  </data>
  <data name="DisplayName_Category_DLC_HeavyIndustry" xml:space="preserve">
    <value>   Heavy Industry</value>
  </data>
  <data name="DisplayName_Category_DLC_Signal" xml:space="preserve">
    <value>   Signal</value>
  </data>
  <data name="DisplayName_Category_DLC_Warfare1" xml:space="preserve">
    <value>   Warfare 1</value>
  </data>
  <data name="DisplayName_Category_DLC_Warfare2" xml:space="preserve">
    <value>   Warfare 2</value>
  </data>
  <data name="DisplayName_Category_DLC_SparksOfTheFuture" xml:space="preserve">
    <value>   Sparks Of The Future</value>
  </data>
  <data name="DisplayName_Category_DLC_Wasteland" xml:space="preserve">
    <value>   Wasteland</value>
  </data>
  <data name="DisplayName_Category_Tools" xml:space="preserve">
    <value>   Tools</value>
  </data>
  <data name="DisplayName_Category_Weapons" xml:space="preserve">
    <value>   Weapons</value>
  </data>
  <data name="DisplayName_Category_Nonarmor" xml:space="preserve">
    <value>Non-Armor Blocks</value>
  </data>
  <data name="ToolTipWorldSettingsEncountersAmount" xml:space="preserve">
    <value>Sets the density of procedurally generated encounters.</value>
  </data>
  <data name="Encounter_Amount" xml:space="preserve">
    <value>Encounter amount</value>
  </data>
  <data name="EconomyFaction_Description_Military0" xml:space="preserve">
    <value>When it comes to waging war, we're what you want. Guns, ammo, and Medkits all available for purchase.</value>
  </data>
  <data name="EconomyFaction_Description_Military1" xml:space="preserve">
    <value>Whether it's tearing apart your enemies or putting together your friends, we've got what you need.</value>
  </data>
  <data name="EconomyFaction_Description_Military2" xml:space="preserve">
    <value>Our Medkits save lives. Our guns save lives too. As long as they're pointed at someone nasty.</value>
  </data>
  <data name="EconomyFaction_Description_Military3" xml:space="preserve">
    <value>We promise high-class weapons, affordable ammunition, and our guaranteed discretion on all transactions.</value>
  </data>
  <data name="EconomyFaction_Description_Military4" xml:space="preserve">
    <value>You can't put a price tag on peace of mind. We have rifles, pistols, ammunition, and all other security needs. </value>
  </data>
  <data name="EconomyFaction_Description_Military" xml:space="preserve">
    <value>With our weaponry, the battle will be over before it even starts. The best weapons money can buy, directly to your hands.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate0" xml:space="preserve">
    <value>Guns, ammo, and more for sale. You don't ask where we got them from, we won't ask what you'll do with them.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate1" xml:space="preserve">
    <value>Our goods are unethical. So are our prices. Come for all your weaponry needs.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate2" xml:space="preserve">
    <value>Some call us criminals. We call ourselves entrepreneurs. Come browse our selection of fine wares.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate3" xml:space="preserve">
    <value>Our wares fell off the back of a spaceship, in case any authorities ask. But if a customer is asking, all we'll say is that the price can't be beat.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate4" xml:space="preserve">
    <value>Everyone has a right to afford security. If you can't afford conventional solutions, or they refuse to sell to you, our shop is always open.</value>
  </data>
  <data name="EconomyFaction_Description_Pirate" xml:space="preserve">
    <value>Guns, ammo, ships, components - we sell everything they wouldn't want you to have.</value>
  </data>
  <data name="Description_BlueprintClass_LargePrototechBlocks" xml:space="preserve">
    <value>Large Prototech Blocks
- Click on any Large Prototech Block to assemble all components
necessary for it's construction except for the Prototech Frame.</value>
  </data>
  <data name="Description_BlueprintClass_PrototechComponents" xml:space="preserve">
    <value>Prototech Components
- Components are used in the construction of structural,
mechanical, and electrical systems.</value>
  </data>
  <data name="Description_BlueprintClass_SmallPrototechBlocks" xml:space="preserve">
    <value>Small Prototech Blocks
- Click on any Small Prototech Block to assemble all components 
necessary for it's construction except for the Prototech Frame.</value>
  </data>
  <data name="DisplayName_BlueprintClass_LargePrototechBlocks" xml:space="preserve">
    <value>Large Prototech Blocks</value>
  </data>
  <data name="DisplayName_BlueprintClass_PrototechComponents" xml:space="preserve">
    <value>Prototech Components</value>
  </data>
  <data name="DisplayName_BlueprintClass_SmallPrototechBlocks" xml:space="preserve">
    <value>Small Prototech Blocks</value>
  </data>
  <data name="DisplayName_Item_PrototechCapacitor" xml:space="preserve">
    <value>Prototech Capacitor</value>
  </data>
  <data name="DisplayName_Item_PrototechCircuitry" xml:space="preserve">
    <value>Prototech Circuitry</value>
  </data>
  <data name="DisplayName_Item_PrototechCoolingUnit" xml:space="preserve">
    <value>Prototech Cooling Unit</value>
  </data>
  <data name="DisplayName_Item_PrototechFrame" xml:space="preserve">
    <value>Prototech Frame</value>
  </data>
  <data name="DisplayName_Item_PrototechMachinery" xml:space="preserve">
    <value>Prototech Machinery</value>
  </data>
  <data name="DisplayName_Item_PrototechPanel" xml:space="preserve">
    <value>Prototech Panel</value>
  </data>
  <data name="DisplayName_Item_PrototechPropulsionUnit" xml:space="preserve">
    <value>Prototech Propulsion Unit</value>
  </data>
  <data name="DisplayName_Item_PrototechScrap" xml:space="preserve">
    <value>Prototech Scrap</value>
  </data>
  <data name="GlobalEncounter_GPS_Name" xml:space="preserve">
    <value>Unidentified Signal</value>
  </data>
  <data name="Terminal_BlockTransfers" xml:space="preserve">
    <value>Block Transfers</value>
  </data>
  <data name="Terminal_BlockTransfersTooltip" xml:space="preserve">
    <value>Manage incoming block ownership transfers</value>
  </data>
  <data name="BlockTransfers_Caption" xml:space="preserve">
    <value>Manage Block Transfers</value>
  </data>
  <data name="BlockTransfers_From" xml:space="preserve">
    <value>From:</value>
  </data>
  <data name="BlockTransfers_Amount" xml:space="preserve">
    <value>Amount:</value>
  </data>
  <data name="BlockTransfers_OnGrid" xml:space="preserve">
    <value>On grid:</value>
  </data>
  <data name="BlockTransfers_UnknownPlayer" xml:space="preserve">
    <value>Unknown Player</value>
  </data>
  <data name="BlockTransfers_UnknownGrid" xml:space="preserve">
    <value>Unknown Grid</value>
  </data>
  <data name="BlockTransfers_Blocks" xml:space="preserve">
    <value>Block(s)</value>
  </data>
  <data name="BlockTransfers_AcceptTooltip" xml:space="preserve">
    <value>Accept this transfer and take ownership of these blocks.</value>
  </data>
  <data name="BlockTransfers_DeclineTooltip" xml:space="preserve">
    <value>Decline this transfer.</value>
  </data>
  <data name="BlockTransfers_Close" xml:space="preserve">
    <value>Close</value>
  </data>
  <data name="BlockTransfers_Decline" xml:space="preserve">
    <value>Decline</value>
  </data>
  <data name="Description_Faction_Factorum" xml:space="preserve">
    <value>The creators of Prototech. They’ve returned from the edge of known space to seek revenge.</value>
  </data>
  <data name="Description_Faction_Unknown" xml:space="preserve">
    <value>Space is vast. As humans push into the void of space, sometimes the void pushes back. Danger, mystery, or reward may lie ahead.</value>
  </data>
  <data name="DisplayName_Faction_Factorum" xml:space="preserve">
    <value>{LOCG:DisplayName_Faction_Factorum_Translation}</value>
  </data>
  <data name="DisplayName_Faction_Factorum_Translation" xml:space="preserve">
    <value>The Factorum</value>
  </data>
  <data name="DisplayName_Faction_Unknown" xml:space="preserve">
    <value>{LOCG:DisplayName_Faction_Unknown_Translation}</value>
  </data>
  <data name="DisplayName_Faction_Unknown_Translation" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="Description_Faction_Pirate" xml:space="preserve">
    <value>Fearless pirate raiders scour the stars, seeking vast fortunes as they attack and salvage without mercy.</value>
  </data>
  <data name="BlockTransfers_Incoming" xml:space="preserve">
    <value>Good.bot: Incoming Block Transfer</value>
  </data>
  <data name="BlockTransfers_IncomingTransferInfo" xml:space="preserve">
    <value>{0} wants to transfer ownership of blocks to you.</value>
  </data>
  <data name="BlockTransfers_ManageInTerminal" xml:space="preserve">
    <value>Manage this transfer in terminal.</value>
  </data>
  <data name="BlockTransfers_AmountValue" xml:space="preserve">
    <value>Amount: {0} Block(s)</value>
  </data>
  <data name="BlockTransfers_OnGridValue" xml:space="preserve">
    <value>On grid: {0}</value>
  </data>
  <data name="DisplayName_Category_CharacterItems" xml:space="preserve">
    <value>Character Items</value>
  </data>
  <data name="Description_FirstAidCabinet" xml:space="preserve">
    <value>The First Aid Cabinet stores medical kits for quick access.</value>
  </data>
  <data name="DisplayName_Block_FirstAidCabinet" xml:space="preserve">
    <value>First Aid Cabinet</value>
  </data>
  <data name="DisplayName_Block_SmallBlockJukeboxReskin" xml:space="preserve">
    <value>Media Player</value>
  </data>
  <data name="DisplayName_Block_BunkBed" xml:space="preserve">
    <value>Bunk</value>
  </data>
  <data name="StoryTitle_PrototechComponents1" xml:space="preserve">
    <value>Score</value>
  </data>
  <data name="StoryText_PrototechComponents1" xml:space="preserve">
    <value>It's shiny and it nearly cost him his life. No idea why he believed me that this wasn't worth anything. But hey, I'm not complaining.</value>
  </data>
  <data name="StoryTitle_PrototechComponents2" xml:space="preserve">
    <value>Junk</value>
  </data>
  <data name="StoryText_PrototechComponents2" xml:space="preserve">
    <value>What was I thinking? I'm not smart enough to figure out what this thing even does. I should find someone else to pawn it to when I can.</value>
  </data>
  <data name="StoryTitle_PrototechComponents3" xml:space="preserve">
    <value>Anniversary</value>
  </data>
  <data name="StoryText_PrototechComponents3" xml:space="preserve">
    <value>I cannot believe it was today. I have nothing to give her. Maybe this? It's shiny enough.</value>
  </data>
  <data name="StoryTitle_PrototechComponents4" xml:space="preserve">
    <value>Scrapyard</value>
  </data>
  <data name="StoryText_PrototechComponents4" xml:space="preserve">
    <value>Found this at work. Couldn't junk it, but couldn't tell you why. Just pretty, I guess. Call it a perk of the job.</value>
  </data>
  <data name="StoryTitle_PrototechComponents5" xml:space="preserve">
    <value>Deconstructed</value>
  </data>
  <data name="StoryText_PrototechComponents5" xml:space="preserve">
    <value>I'm sending this to you to be deconstructed. Study it until we can make it ourselves. No excuses.</value>
  </data>
  <data name="StoryTitle_PrototechComponents6" xml:space="preserve">
    <value>Relative</value>
  </data>
  <data name="StoryText_PrototechComponents6" xml:space="preserve">
    <value>I fought a saberoid last week. That was more interesting. But you can't put it in a museum. Sending you this sample.</value>
  </data>
  <data name="StoryTitle_PrototechComponents7" xml:space="preserve">
    <value>Destroy</value>
  </data>
  <data name="StoryText_PrototechComponents7" xml:space="preserve">
    <value>Please, get rid of it. Get rid of all of it. Things were fine before.This new group is not needed, nor are they wanted.</value>
  </data>
  <data name="StoryTitle_PrototechComponents8" xml:space="preserve">
    <value>Real</value>
  </data>
  <data name="StoryText_PrototechComponents8" xml:space="preserve">
    <value>I thought that group was fake. But this is from them, right? They're real? The guys? I am FREAKING out right now.</value>
  </data>
  <data name="StoryTitle_PrototechComponents9" xml:space="preserve">
    <value>Sol</value>
  </data>
  <data name="StoryText_PrototechComponents9" xml:space="preserve">
    <value>Get this to the Cooperative, ASAP. It's proof. Proof of what I've been warning them about. They're here.</value>
  </data>
  <data name="StoryTitle_PrototechComponents10" xml:space="preserve">
    <value>Neat</value>
  </data>
  <data name="StoryText_PrototechComponents10" xml:space="preserve">
    <value>Nicked this off a pirate. Took it to four different blokes. No one knows what it is. Isn't that neat?</value>
  </data>
  <data name="StoryTitle_PrototechComponents11" xml:space="preserve">
    <value>Appraised</value>
  </data>
  <data name="StoryText_PrototechComponents11" xml:space="preserve">
    <value>Looking for an evaluation. I know it's good, but how good? Is this nice vacation money? Or is this retirement money?</value>
  </data>
  <data name="StoryTitle_PrototechComponents12" xml:space="preserve">
    <value>Reckoning</value>
  </data>
  <data name="StoryText_PrototechComponents12" xml:space="preserve">
    <value>Guy who I found this on claimed it meant the end of days. Sure, pal. Sure.</value>
  </data>
  <data name="StoryTitle_PrototechComponents13" xml:space="preserve">
    <value>Explanation</value>
  </data>
  <data name="StoryText_PrototechComponents13" xml:space="preserve">
    <value>I have NO IDEA what you're doing with the kids, but our son had THIS in his backpack. CALL ME.</value>
  </data>
  <data name="StoryTitle_PrototechComponents14" xml:space="preserve">
    <value>Value</value>
  </data>
  <data name="StoryText_PrototechComponents14" xml:space="preserve">
    <value>Was this worth killing them over? Maybe. Looks like it. Sometimes, that's all you have to go on.</value>
  </data>
  <data name="StoryTitle_PrototechComponents15" xml:space="preserve">
    <value>No Deal</value>
  </data>
  <data name="StoryText_PrototechComponents15" xml:space="preserve">
    <value>I saw how much you're willing to pay for this. So, deal's off. If it's worth that much, I want to know why.</value>
  </data>
  <data name="StoryTitle_PrototechComponents16" xml:space="preserve">
    <value>Tracing</value>
  </data>
  <data name="StoryText_PrototechComponents16" xml:space="preserve">
    <value>Figure out where this came from. It's valuable, but knowing how it's made - that's the real prize.</value>
  </data>
  <data name="StoryTitle_PrototechComponents17" xml:space="preserve">
    <value>Change</value>
  </data>
  <data name="StoryText_PrototechComponents17" xml:space="preserve">
    <value>Today, it's revolutionary. Tomorrow, it's everywhere. Trust me - wait a few years before you pay for one of these.</value>
  </data>
  <data name="StoryTitle_PrototechComponents18" xml:space="preserve">
    <value>Regret</value>
  </data>
  <data name="StoryText_PrototechComponents18" xml:space="preserve">
    <value>Guy offered me the reward we agreed upon - or this thing. I chose this thing. Am I an idiot? Tell me I'm not an idiot - please.</value>
  </data>
  <data name="StoryTitle_PrototechComponents19" xml:space="preserve">
    <value>Plan</value>
  </data>
  <data name="StoryText_PrototechComponents19" xml:space="preserve">
    <value>If you have the spray paint, we're set. Just use this as a reference. We're gonna be rich.</value>
  </data>
  <data name="StoryTitle_PrototechComponents20" xml:space="preserve">
    <value>Raze</value>
  </data>
  <data name="StoryText_PrototechComponents20" xml:space="preserve">
    <value>I hid. I was the only survivor. The entire rest of the crew was slaughtered. As I was hiding, I found this. Take it, please. I don't want anything that belongs to them.</value>
  </data>
  <data name="StoryTitle_PrototechComponents21" xml:space="preserve">
    <value>Cooperative</value>
  </data>
  <data name="StoryText_PrototechComponents21" xml:space="preserve">
    <value>Have this sent to my contact in the Cooperative. It would be useful to have her in our debt.</value>
  </data>
  <data name="StoryTitle_PrototechComponents22" xml:space="preserve">
    <value>Architect</value>
  </data>
  <data name="StoryText_PrototechComponents22" xml:space="preserve">
    <value>Hey professor - this is to borrow, not to keep. I need to know what this thing I found is. Borrow. Not keep.</value>
  </data>
  <data name="StoryTitle_PrototechComponents23" xml:space="preserve">
    <value>Scavenge</value>
  </data>
  <data name="StoryText_PrototechComponents23" xml:space="preserve">
    <value>Hey - sounds like you're in hot water from your description. Corpses, crashed ships… someone might come looking. I'll take it off your hands.</value>
  </data>
  <data name="StoryTitle_PrototechComponents24" xml:space="preserve">
    <value>Purchase</value>
  </data>
  <data name="StoryText_PrototechComponents24" xml:space="preserve">
    <value>It cost me everything I had - but it's mine. Now, I just need someone to tell me what it is.</value>
  </data>
  <data name="StoryTitle_PrototechComponents25" xml:space="preserve">
    <value>Search</value>
  </data>
  <data name="StoryText_PrototechComponents25" xml:space="preserve">
    <value>Guy gave me this. Told me the people who built it killed his partner. Asked me to track them down. Not sure where to start.</value>
  </data>
  <data name="StoryTitle_PrototechComponents26" xml:space="preserve">
    <value>Regret</value>
  </data>
  <data name="StoryText_PrototechComponents26" xml:space="preserve">
    <value>The money I'd get from this is good - but you matter more. This can be yours if you forgive me.</value>
  </data>
  <data name="StoryTitle_PrototechComponents27" xml:space="preserve">
    <value>Luck</value>
  </data>
  <data name="StoryText_PrototechComponents27" xml:space="preserve">
    <value>Worked up here for ten years, barely made ends meet. Found one shipwreck, and with these things I've doubled my net worth. Figures.</value>
  </data>
  <data name="StoryTitle_PrototechComponents28" xml:space="preserve">
    <value>Origin</value>
  </data>
  <data name="StoryText_PrototechComponents28" xml:space="preserve">
    <value>Here's the third one that the Collective's found in my jurisdiction. I'm less concerned with what they are, more concerned with where they're coming from.</value>
  </data>
  <data name="StoryTitle_PrototechComponents29" xml:space="preserve">
    <value>Client</value>
  </data>
  <data name="StoryText_PrototechComponents29" xml:space="preserve">
    <value>Here's the thing I found. Tell the client we can make these. And I don't care if we can't. We're screwed either way.</value>
  </data>
  <data name="StoryTitle_PrototechComponents30" xml:space="preserve">
    <value>Invitation</value>
  </data>
  <data name="StoryText_PrototechComponents30" xml:space="preserve">
    <value>You're an exceptional individual. Truly. Here is just a taste of what we have to offer. I strongly urge you to reconsider joining.</value>
  </data>
  <data name="StoryTitle_PrototechComponents31" xml:space="preserve">
    <value>Preservation</value>
  </data>
  <data name="StoryText_PrototechComponents31" xml:space="preserve">
    <value>I understand the boon this would have for your ship. But consider future generations! This belongs in a museum!</value>
  </data>
  <data name="StoryTitle_PrototechComponents32" xml:space="preserve">
    <value>Paranoia</value>
  </data>
  <data name="StoryText_PrototechComponents32" xml:space="preserve">
    <value>Get rid of it! Get rid of it right now! How do you know THEY aren't tracking it? They could be coming to reclaim it right now!</value>
  </data>
  <data name="StoryTitle_PrototechComponents33" xml:space="preserve">
    <value>Heist</value>
  </data>
  <data name="StoryText_PrototechComponents33" xml:space="preserve">
    <value>Yeah, the heist was a success. But four of my crew died at the hands of The Factorum to get you these. Hope it was worth it.</value>
  </data>
  <data name="StoryTitle_PrototechComponents34" xml:space="preserve">
    <value>Unraveling</value>
  </data>
  <data name="StoryText_PrototechComponents34" xml:space="preserve">
    <value>I don't care how many you use - we need to know what it's made of. When we can mass produce them, the loss will be worth it.</value>
  </data>
  <data name="StoryTitle_PrototechComponents35" xml:space="preserve">
    <value>Take It</value>
  </data>
  <data name="StoryText_PrototechComponents35" xml:space="preserve">
    <value>Hey, you can have this "Prototech" - I've seen how people are acting about it. I want nothing to do with it.</value>
  </data>
  <data name="NotificationGoodbotPressToOpenTerminal" xml:space="preserve">
    <value>Press {CONTROL:TERMINAL} to open terminal</value>
  </data>
  <data name="DisplayName_DLC_Contact" xml:space="preserve">
    <value>Contact</value>
  </data>
  <data name="DisplayName_DLC_Fieldwork" xml:space="preserve">
    <value>Fieldwork</value>
  </data>
  <data name="DisplayName_BlockGroup_ActionRelays" xml:space="preserve">
    <value>Action Relays</value>
  </data>
  <data name="DisplayName_BlockGroup_AIBlocks" xml:space="preserve">
    <value>AI Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_AirVents" xml:space="preserve">
    <value>Air Vents</value>
  </data>
  <data name="DisplayName_BlockGroup_Assemblers" xml:space="preserve">
    <value>Assemblers</value>
  </data>
  <data name="DisplayName_BlockGroup_AtmosphericThrusters" xml:space="preserve">
    <value>Atmospheric Thrusters</value>
  </data>
  <data name="DisplayName_BlockGroup_Batteries" xml:space="preserve">
    <value>Batteries</value>
  </data>
  <data name="DisplayName_BlockGroup_Beacons" xml:space="preserve">
    <value>Beacons</value>
  </data>
  <data name="DisplayName_BlockGroup_BroadcastControllers" xml:space="preserve">
    <value>Broadcast Controllers</value>
  </data>
  <data name="DisplayName_BlockGroup_ButtonPanels" xml:space="preserve">
    <value>Button Panels</value>
  </data>
  <data name="DisplayName_BlockGroup_Cameras" xml:space="preserve">
    <value>Cameras</value>
  </data>
  <data name="DisplayName_BlockGroup_CargoContainers" xml:space="preserve">
    <value>Cargo Containers</value>
  </data>
  <data name="DisplayName_BlockGroup_Cockpits" xml:space="preserve">
    <value>Cockpits</value>
  </data>
  <data name="DisplayName_BlockGroup_RemoteControls" xml:space="preserve">
    <value>Remote Controls</value>
  </data>
  <data name="DisplayName_BlockGroup_Collectors" xml:space="preserve">
    <value>Collectors</value>
  </data>
  <data name="DisplayName_BlockGroup_Connectors" xml:space="preserve">
    <value>Connectors</value>
  </data>
  <data name="DisplayName_BlockGroup_ControlPanels" xml:space="preserve">
    <value>Control Panels</value>
  </data>
  <data name="DisplayName_BlockGroup_ConveyorBlocks" xml:space="preserve">
    <value>Conveyor Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_ConveyorSorters" xml:space="preserve">
    <value>Conveyor Sorters</value>
  </data>
  <data name="DisplayName_BlockGroup_CryoChambers" xml:space="preserve">
    <value>Cryo Chambers</value>
  </data>
  <data name="DisplayName_BlockGroup_CustomTurretControllers" xml:space="preserve">
    <value>Custom Turret Controllers</value>
  </data>
  <data name="DisplayName_BlockGroup_Decoys" xml:space="preserve">
    <value>Decoys</value>
  </data>
  <data name="DisplayName_BlockGroup_Drills" xml:space="preserve">
    <value>Drills</value>
  </data>
  <data name="DisplayName_BlockGroup_EconomyBlocks" xml:space="preserve">
    <value>Economy Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_EventControllers" xml:space="preserve">
    <value>Event Controllers</value>
  </data>
  <data name="DisplayName_BlockGroup_ExhaustBlocks" xml:space="preserve">
    <value>Exhaust Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_Freight" xml:space="preserve">
    <value>Freight Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_GasGenerators" xml:space="preserve">
    <value>Gas Generators</value>
  </data>
  <data name="DisplayName_BlockGroup_GravityGenerators" xml:space="preserve">
    <value>Gravity Generators</value>
  </data>
  <data name="DisplayName_BlockGroup_Grinders" xml:space="preserve">
    <value>Grinders</value>
  </data>
  <data name="DisplayName_BlockGroup_Gyroscopes" xml:space="preserve">
    <value>Gyroscopes</value>
  </data>
  <data name="DisplayName_BlockGroup_Hinges" xml:space="preserve">
    <value>Hinges</value>
  </data>
  <data name="DisplayName_BlockGroup_HydrogenEngines" xml:space="preserve">
    <value>Hydrogen Engines</value>
  </data>
  <data name="DisplayName_BlockGroup_HydrogenTanks" xml:space="preserve">
    <value>Hydrogen Tanks</value>
  </data>
  <data name="DisplayName_BlockGroup_HydrogenThrusters" xml:space="preserve">
    <value>Hydrogen Thrusters</value>
  </data>
  <data name="DisplayName_BlockGroup_IonThrusters" xml:space="preserve">
    <value>Ion Thrusters</value>
  </data>
  <data name="DisplayName_BlockGroup_JumpDrives" xml:space="preserve">
    <value>Jump Drives</value>
  </data>
  <data name="DisplayName_BlockGroup_LandingGear" xml:space="preserve">
    <value>Landing Gear</value>
  </data>
  <data name="DisplayName_BlockGroup_LargeDoors" xml:space="preserve">
    <value>Large Doors</value>
  </data>
  <data name="DisplayName_BlockGroup_LaserAntennas" xml:space="preserve">
    <value>Laser Antennas</value>
  </data>
  <data name="DisplayName_BlockGroup_LCDBlocks" xml:space="preserve">
    <value>LCD Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_Lights" xml:space="preserve">
    <value>Lights</value>
  </data>
  <data name="DisplayName_BlockGroup_MassBlocks" xml:space="preserve">
    <value>Mass Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_MergeBlocks" xml:space="preserve">
    <value>Merge Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_OreDetectors" xml:space="preserve">
    <value>Ore Detectors</value>
  </data>
  <data name="DisplayName_BlockGroup_OxygenFarms" xml:space="preserve">
    <value>Oxygen Farms</value>
  </data>
  <data name="DisplayName_BlockGroup_OxygenTanks" xml:space="preserve">
    <value>Oxygen Tanks</value>
  </data>
  <data name="DisplayName_BlockGroup_Parachutes" xml:space="preserve">
    <value>Parachutes</value>
  </data>
  <data name="DisplayName_BlockGroup_PassengerSeats" xml:space="preserve">
    <value>Passenger Seats</value>
  </data>
  <data name="DisplayName_BlockGroup_Pistons" xml:space="preserve">
    <value>Pistons</value>
  </data>
  <data name="DisplayName_BlockGroup_ProgrammableBlocks" xml:space="preserve">
    <value>Programmable Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_Projectors" xml:space="preserve">
    <value>Projectors</value>
  </data>
  <data name="DisplayName_BlockGroup_RadioAntennas" xml:space="preserve">
    <value>Radio Antennas</value>
  </data>
  <data name="DisplayName_BlockGroup_Reactors" xml:space="preserve">
    <value>Reactors</value>
  </data>
  <data name="DisplayName_BlockGroup_Refineries" xml:space="preserve">
    <value>Refineries</value>
  </data>
  <data name="DisplayName_BlockGroup_RespawnPoints" xml:space="preserve">
    <value>Respawn Points</value>
  </data>
  <data name="DisplayName_BlockGroup_Rotors" xml:space="preserve">
    <value>Rotors</value>
  </data>
  <data name="DisplayName_BlockGroup_SafeZones" xml:space="preserve">
    <value>Safe Zones</value>
  </data>
  <data name="DisplayName_BlockGroup_Sensors" xml:space="preserve">
    <value>Sensors</value>
  </data>
  <data name="DisplayName_BlockGroup_SmallDoors" xml:space="preserve">
    <value>Small Doors</value>
  </data>
  <data name="DisplayName_BlockGroup_SolarPanels" xml:space="preserve">
    <value>Solar Panels</value>
  </data>
  <data name="DisplayName_BlockGroup_SoundBlocks" xml:space="preserve">
    <value>Sound Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_StaticWeapons" xml:space="preserve">
    <value>Static Weapons</value>
  </data>
  <data name="DisplayName_BlockGroup_TargetDummies" xml:space="preserve">
    <value>Target Dummies</value>
  </data>
  <data name="DisplayName_BlockGroup_TimerBlocks" xml:space="preserve">
    <value>Timer Blocks</value>
  </data>
  <data name="DisplayName_BlockGroup_Turrets" xml:space="preserve">
    <value>Turrets</value>
  </data>
  <data name="DisplayName_BlockGroup_UpgradeModules" xml:space="preserve">
    <value>Upgrade Modules</value>
  </data>
  <data name="DisplayName_BlockGroup_Warheads" xml:space="preserve">
    <value>Warheads</value>
  </data>
  <data name="DisplayName_BlockGroup_Welders" xml:space="preserve">
    <value>Welders</value>
  </data>
  <data name="DisplayName_BlockGroup_WheelSuspensions" xml:space="preserve">
    <value>Wheel Suspensions</value>
  </data>
  <data name="DisplayName_BlockGroup_WindTurbines" xml:space="preserve">
    <value>Wind Turbines</value>
  </data>
  <data name="DisplayName_BlockGroup_CubeBlocks" xml:space="preserve">
    <value>Cube Blocks</value>
  </data>
  <data name="BlockTransfers_CancelTooltip" xml:space="preserve">
    <value>Cancels this transfer</value>
  </data>
  <data name="BlockTransfers_To" xml:space="preserve">
    <value>To:</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitFloor" xml:space="preserve">
    <value>Bridge Floor</value>
  </data>
  <data name="DisplayName_Block_TrussPillarCorner" xml:space="preserve">
    <value>Truss Pillar Corner</value>
  </data>
  <data name="DisplayName_Block_TrussPillarSlanted" xml:space="preserve">
    <value>Truss Pillar Slanted</value>
  </data>
  <data name="Description_LabCabinet" xml:space="preserve">
    <value>A compact storage area for decorating interiors and storing items.</value>
  </data>
  <data name="Description_LabDesk" xml:space="preserve">
    <value>A desk for decorating interiors. It features various laboratory equipment and samples, evidence that hardworking scientists have been here. Can be used as a seat.</value>
  </data>
  <data name="Description_LabDeskChairless" xml:space="preserve">
    <value>A desk for decorating interiors. It features various laboratory equipment and samples, evidence that hardworking scientists have been here.</value>
  </data>
  <data name="Description_LabSink" xml:space="preserve">
    <value>A sink for decorating interiors.</value>
  </data>
  <data name="Description_LargeBlockLabSink" xml:space="preserve">
    <value>A sink for decorating interiors.</value>
  </data>
  <data name="Description_KitchenSet" xml:space="preserve">
    <value>Kitchen appliance for decorating interiors.</value>
  </data>
  <data name="DisplayName_Block_KitchenCoffeeMachine" xml:space="preserve">
    <value>Coffee Machine</value>
  </data>
  <data name="DisplayName_Block_KitchenFridge" xml:space="preserve">
    <value>Fridge</value>
  </data>
  <data name="DisplayName_Block_KitchenMicrowave" xml:space="preserve">
    <value>Microwave</value>
  </data>
  <data name="DisplayName_Block_KitchenOven" xml:space="preserve">
    <value>Oven</value>
  </data>
  <data name="DisplayName_Block_KitchenSink" xml:space="preserve">
    <value>Sink</value>
  </data>
  <data name="DisplayName_Block_ModularCargoContainer" xml:space="preserve">
    <value>Modular Cargo Container</value>
  </data>
  <data name="WorldSettings_EnablePlanetaryEncounters" xml:space="preserve">
    <value>Enable planetary encounters</value>
  </data>
  <data name="StoreBuy_Error_Caption_StoreLimitsGridSize" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_StoreLimitsGridSize" xml:space="preserve">
    <value>Maximum grid size limit reached.</value>
  </data>
  <data name="StoreBuy_Error_Caption_StoreLimitsNotOwnedByFaction" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_StoreLimitsNotOwnedByFaction" xml:space="preserve">
    <value>Player without faction can not buy.</value>
  </data>
  <data name="StoreBuy_Error_Caption_StoreLimitsPerBlockType" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_StoreLimitsPerBlockType" xml:space="preserve">
    <value>Maximum blocks of specific type limit reached.</value>
  </data>
  <data name="StoreBuy_Error_Caption_StoreLimitsPlayer" xml:space="preserve">
    <value>Transaction Failed</value>
  </data>
  <data name="StoreBuy_Error_StoreLimitsPlayer" xml:space="preserve">
    <value>Player block limit reached.</value>
  </data>
  <data name="Description_Prototech_Battery" xml:space="preserve">
    <value>Prototech Batteries are powerful energy storage devices. They are able to output high volumes of power with increased efficiency.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="Description_Prototech_Drill" xml:space="preserve">
    <value>Prototech Drills are a powerful tools capable of collecting raw ores at higher efficiency than standard drill types.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="Description_Prototech_Gyroscope" xml:space="preserve">
    <value>Prototech Gyroscopes are more powerful, reinforced versions of standard Gyroscopes. They allow grids to stabilize and rotate.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="Description_Prototech_JumpDrive" xml:space="preserve">
    <value>Prototech Jump Drives allow grids to teleport over incredibly large distances. They have a higher range and better efficiency than standard Jump Drives.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="Description_Prototech_Refinery" xml:space="preserve">
    <value>Prototech Refineries refine ores into ingots at higher yield and speed rates than other refineries.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="Description_Prototech_Thrust" xml:space="preserve">
    <value>Prototech Thrusters are advanced thrusters that provide a significant amount of force. They function best in zero gravity environments.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="StoryTitle_Builder_Factorum1" xml:space="preserve">
    <value>Project Prototype Technology</value>
  </data>
  <data name="StoryText_Builder_Factorum1" xml:space="preserve">
    <value>Discarded File: 2.12.2067

The first stages of the project have been a massive success. Far beyond what we dared hope for.

The thruster and battery are working. Next step is testing the jump drive. I anticipate that taking a while.

-

Also, let's nip this in the bud.

"Prototype Technology" is not the final name. I will come up with something much better. It's not like we need something right away. 

I hear you all snickering. Saying I'm not creative. I am VERY creative. I'll come up with something much better than Prototype Technology - just you watch.</value>
  </data>
  <data name="StoryTitle_Builder_Factorum2" xml:space="preserve">
    <value>Sol Cooperative Correspondence</value>
  </data>
  <data name="StoryText_Builder_Factorum2" xml:space="preserve">
    <value>INTERCEPTED TRANSMISSION:

Dear Representative Colfax,

I want to address your frustration with The Cooperative's refusal to ban Prototech. As one of the (many) votes against your proposal, I can offer some insight.

It's not that we disagree with the points you raised. You were right to say Prototech can't be trusted. And it is poor policy to rely on the unreliable.

However, what is the alternative?

To refuse to use technology that The Factorum happily employs? You cannot get the air back in the air-lock, so to speak. This technology is out there.

To pretend otherwise, like your proposal in The Cooperative would have us do, is the greater risk.  If you want to live by ideals, go join the hippies in Astronauts Without Borders. We have a government to run.</value>
  </data>
  <data name="StoryTitle_Military_Factorum1" xml:space="preserve">
    <value>Call to Action</value>
  </data>
  <data name="StoryText_Military_Factorum1" xml:space="preserve">
    <value>Discarded File: 1.2.2054

Abstract:
Whereas
The Second Space Race has witnessed a collapse of our existing social contract;

Whereas
The democratization of technology has allowed those who should not have access to the cosmos, access;

Whereas
We have routinely seen the best interest of humanity - namely their own protection - sidelined so that upstart profiteers can benefit;

Whereas
A return to the status quo is not only prudent, it is necessary;

Statement:
To the members of this committee, it is not a question of if we have the means to restore order. We do. 

It is a question of if we have the stomach for it.

I propose a regular forum to discuss this matter - as well as the construction of a factory where we can begin work on our prototype technology.

All in favor?

Y: 14

All opposed?

N: 3

The motion passes.</value>
  </data>
  <data name="StoryTitle_Military_Factorum2" xml:space="preserve">
    <value>After Action Report</value>
  </data>
  <data name="StoryText_Military_Factorum2" xml:space="preserve">
    <value>Discarded File: 21.5.2074

AAR for the incident on May 19th, 2074.

The Factorum was approached by myself (Hoskel) and three other representatives of the Sol Cooperative.

As leader of the group, I presented myself and expressed interest in learning more about them. As the conversation continued, they grew noticeably more hostile. After a few evasive answers, they ceased to respond to my questions.

After several more inquiries, I finally got a response.

They threatened not only us personally, but the continued existence of the Sol Cooperative.

This Factorum mentioned some unknown asset (Prototech), fired upon us (sending Sandoval to the infirmary), and then disappeared.

We can safely assume that the GOI jumped away - but the distance they would have needed to travel to not be detected far exceeds what should be possible.

Before preparations even begin, we need to know what these people are capable of. We may be well and truly out of our depth.</value>
  </data>
  <data name="StoryTitle_Military_Factorum3" xml:space="preserve">
    <value>Logistics Report</value>
  </data>
  <data name="StoryText_Military_Factorum3" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

Sol Cooperative moves slowly. That is not a problem, that is by design. When we change gradually, that brings stability. 

But we've got a problem on our hands.

Let's say, hypothetically, these "Prototech" blocks turn out to be real. This "Factorum" is not only real, but can somehow produce supertech beyond what we can imagine.

Well, we have members of our assembly who are already outspoken critics of Prototech, believing it to be R.O.S. work in disguise.

And even if we didn't, we have lengthy procedures that will slow any attempt to improve our arsenals.

And even if we didn't, we still have no consistent way of recovering Prototech, meaning planning future upgrades is nearly impossible.

So we'll continue under the assumption this threat is a hoax.

Otherwise?

By the time we adapt, it will be too late for the whole cooperative.</value>
  </data>
  <data name="StoryTitle_Military_Factorum4" xml:space="preserve">
    <value>They're Weak</value>
  </data>
  <data name="StoryText_Military_Factorum4" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

R.O.S. made a huge mistake. I received one of their messages the other day. Seems they've had a massive leak.

What is clear is they don't know what's real or not about The Factorum. They're as in the dark as we are.

My assessment? This is an opportunity.

First we track The Factorum down. Show them we're useful.

Then, we get as much Prototech as we can.

And then, we avenge.

Independent Terran Workers will not be forgotten.</value>
  </data>
  <data name="StoryTitle_Military_Factorum5" xml:space="preserve">
    <value>A Call to Action</value>
  </data>
  <data name="StoryText_Military_Factorum5" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

"Experts" claim Prototech is too revolutionary. They blame "The Factorum". They claim R.O.S. is a victim.

Of course that's what they're saying. 

WHO PAYS THE EXPERTS? 

You think this is bad? They've done worse.

Sunset Valley.

Triton.

I.T.W.

I have once again submitted my evidence to the Sol Cooperative and NOTHING has been done. 

How deep does it go?

If this Factorum is real - and not just an R.O.S. front - we should be grateful. They're here to liberate us. The best thing we could do, the best thing for HUMANITY, would be to willingly submit. They'll need all the help they can get fighting the R.O.S. demon.

Remember our true enemy.</value>
  </data>
  <data name="StoryTitle_Mining_Factorum1" xml:space="preserve">
    <value>Incident Report</value>
  </data>
  <data name="StoryText_Mining_Factorum1" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

On Tuesday Morning, at 07:12 Universal Circadian Time (UCT), we received a distress call from a nearby asteroid - part of the cluster colloquially referred to as "The Pebbles".

As I was unable to spot anything from the deck, I ordered a ground crew to approach via jetpack. The crew, upon reaching an unnamed asteroid, reported visuals on two "Prototech Frames" as well as a fully operational "Prototech Battery" and "Prototech Gyroscope". Further investigation revealed no leads to pursue. There were no signs of shipwreck, no hint to who relayed the distress call, and perhaps most distressingly, no presence of The Factorum at all.

This, unfortunately, only raises more questions.</value>
  </data>
  <data name="StoryTitle_Mining_Factorum2" xml:space="preserve">
    <value>Prototech: What's in a Name?</value>
  </data>
  <data name="StoryText_Mining_Factorum2" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

I've been wondering about the names. "Prototech." "Factorum." What do you think is going on here?

Could Prototech be an acronym? I like to think there's some sort of Dr. Prototech out there - maybe the evil leader of The Factorum? Maybe they named the technology after themself?

This is worth investigating. I'm getting giddy thinking about it.

---

It is quite clearly "Prototype Technology." 

Please do not waste my time with another message like this.</value>
  </data>
  <data name="StoryTitle_Pirate_Factorum1" xml:space="preserve">
    <value>He Had The Money</value>
  </data>
  <data name="StoryText_Pirate_Factorum1" xml:space="preserve">
    <value>My task was to approach the target and secure resources for Project Prototech (name pending).

I tried several approaches.

I tried trading, threatening, even begging. Begging, I think, he thought was the funniest.

But then it occurred to me. He had the money, the power, the influence, the status, the capital, the technology, the manpower, the momentum, and the popular support.

But I was a faster draw to my gun.

And I walked away quite happy.

Listen people, if we want our organization to prosper, we need to stop playing by their rules. We can have it all, but only if we embrace what our organization can do. I say we ramp up the activity.</value>
  </data>
  <data name="StoryTitle_Pirate_Factorum2" xml:space="preserve">
    <value>Think Bigger</value>
  </data>
  <data name="StoryText_Pirate_Factorum2" xml:space="preserve">
    <value>NOTICE TO CREW:

I love you all, but you don't realize what we've got here. I've given it a few days, chatted with you, hoped you'd realize.

Most of you get that Prototech is a game changer. But to you, that means stepping up our amount of raids. Outrunning any lawmen or mercenaries we cross.

Think. Bigger.

Sol Cooperative can't keep up. And this "Factorum" clearly has other priorities.

You're thinking of loot. I'm thinking of Space Stations. Moons. Planets.

Prototech is the kind of stuff kingdoms are made from. 

The kind of stuff that changes maps.</value>
  </data>
  <data name="StoryTitle_Pirate_Factorum3" xml:space="preserve">
    <value>Insane Ramblings</value>
  </data>
  <data name="StoryText_Pirate_Factorum3" xml:space="preserve">
    <value>He is Cosmic Lawlessness. A New God.

He is King. Leaving A New Gift.

PROTOTECH.

No rhyme. All reason. Monolith. An altar to worship on. 

The King of Cosmic Law. A New Gift. 

The Cosmic King of Lawlessness. A New God.</value>
  </data>
  <data name="StoryTitle_Pirate_Factorum4" xml:space="preserve">
    <value>Message to the Crew</value>
  </data>
  <data name="StoryText_Pirate_Factorum4" xml:space="preserve">
    <value>Message to the Crew:

Much as it pains me at times, this ship is a democracy. Well, we've got something to democratize about.

I've heard some of you talking about selling the Prototech scraps from that damaged ship.

Don't be morons. What kind of pirates would we be if our prey could outrun us? We adapt, or we die.If we don't craft thrusters of our own, we'll be screwed. Think long term. Selling profits us once. Crafting profits us forever.

Now, I'm a fair captain, so I'm going to leave it up to a poll. 

---

Votes for crafting Prototech Thrusters: 1

Votes for selling Prototech Components: 23

---

Addendum:

I quit.</value>
  </data>
  <data name="StoryTitle_Trade_Factorum1" xml:space="preserve">
    <value>Old Discarded Notes</value>
  </data>
  <data name="StoryText_Trade_Factorum1" xml:space="preserve">
    <value>Discarded File: 9.12.2032

The money isn't there anymore. I know I should be happy for what it means for humanity as a whole, but we're a family business. Now that anyone with a little bit of knowledge can put together a rocketship using scrap metal, what good is an installation service?

It's okay, we'll adapt.

But not everyone can. Some businesses are just too large. I got invited to a meeting with a bunch of "aggrieved businessmen", talking about a way we can oppose modularity. 

I declined. I see which way the wind is heading. I'll find something new.

There's people out there who are angry. And angry people do things that are stupid. Especially when the angry people are the ones with the power to do something about it.</value>
  </data>
  <data name="StoryTitle_Trade_Factorum2" xml:space="preserve">
    <value>NOTICE TO FACTORUM</value>
  </data>
  <data name="StoryText_Trade_Factorum2" xml:space="preserve">
    <value>Discarded File: 5.20.2074

There is a time table. 

I understand small scale raiding has been employed for the past four years, but this encounter with The Cooperative was unacceptable and sloppy.

Not only did our agents fire upon the Sol Cooperative years before we begin to plan our assault in earnest, they were goaded into mentioning Prototech BY NAME.

Prototech is not our greatest weapon. Secrecy is. 

The offending parties are no longer a concern. I have personally ensured they will not be able to jeopardize our secrets again. And I will take the moment to remind all of you to act as befits your station.

Your patience will be rewarded properly. So will your impatience.</value>
  </data>
  <data name="StoryTitle_Trade_Factorum3" xml:space="preserve">
    <value>RE: Concern</value>
  </data>
  <data name="StoryText_Trade_Factorum3" xml:space="preserve">
    <value>Discarded File: 9.12.2071

Karasi, I heard you were talking to IT yesterday about your messages not getting through to me.

They got through just fine. I just didn't think there was a point in responding. Candidly, I hoped that you would let it go.

Since that doesn't seem to be happening, I'll take a moment to respond.

No, I am not concerned. And you shouldn't be either. As a threat analyst, frankly, I'm embarrassed for you.

War against modularity? Right that must be wronged? Secret headquarters in deep space?

They call themselves THE FACTORUM for clangsake. These people are lunatics. And any use of our resources spent taking them seriously is a waste of time.

I expect better from you.</value>
  </data>
  <data name="StoryTitle_Trade_Factorum4" xml:space="preserve">
    <value>NOTICE: I AM SORRY</value>
  </data>
  <data name="StoryText_Trade_Factorum4" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

You can't make an omelet without breaking a few eggs.

And sometimes it is hundreds of eggs. Thousands. In every direction, as far as all can see.

Look, I was given a hard job. I was tasked with seeing if I couldn't access recovered Factorum archives. And wouldn't you know it, I succeeded.

We've got tons of messages going back decades. Hopefully enough to figure these people out.

But...

Messages and recordings from our servers - even personal notes - have been sending themselves to seemingly random addresses. Some are even speculating the Factorum server was a honeypot programmed to perform such a task. 

I apologize for any inconvenience this may have caused you, both professionally and personally. We are working to resolve the issue.</value>
  </data>
  <data name="StoryTitle_Trade_Factorum5" xml:space="preserve">
    <value>Corporate Brainstorming</value>
  </data>
  <data name="StoryText_Trade_Factorum5" xml:space="preserve">
    <value>INTERCEPTED MESSAGE:

Corporate has lost its mind. They want all of this by next quarter. 

Before you say anything - I know. I tried to explain that no one knows how Prototech works besides the Factorum and I was told we need to "apply" ourselves. 

Here are the products they want developed. Apparently, this was after a three week (!!!) brainstorming retreat.

- Prototech Rifles

- Prototech AI (What is that?)

- Super Prototech (?)

- Prototech 2(Are these not weapons?)

- Next-Gen Prototech (???????)

- Prototech Neuroblasters (?????????????????)

I need you to go to the head office to talk to them. If I go, I might punch someone.</value>
  </data>
  <data name="StoryTitle_MinerStories1" xml:space="preserve">
    <value>Remix</value>
  </data>
  <data name="StoryText_MinerStories1" xml:space="preserve">
    <value>Been so bored lately that I've been recording my drill when I'm working. It might make a nice backing track for a song.</value>
  </data>
  <data name="StoryTitle_MinerStories2" xml:space="preserve">
    <value>Pride</value>
  </data>
  <data name="StoryText_MinerStories2" xml:space="preserve">
    <value>I was thinking about why I love my job. It's because every day, when you look at an asteroid, you can see, the progress that you've made.</value>
  </data>
  <data name="StoryTitle_MinerStories3" xml:space="preserve">
    <value>Building Blocks</value>
  </data>
  <data name="StoryText_MinerStories3" xml:space="preserve">
    <value>Family thinks my cousin, the builder, is the impressive one. Hardly. Without me, where would he be?</value>
  </data>
  <data name="StoryTitle_MinerStories4" xml:space="preserve">
    <value>Enclosed</value>
  </data>
  <data name="StoryText_MinerStories4" xml:space="preserve">
    <value>One second you feel completely alone in space. Then, you feel trapped inside a cave. It gets to you.</value>
  </data>
  <data name="StoryTitle_MinerStories5" xml:space="preserve">
    <value>Wealth</value>
  </data>
  <data name="StoryText_MinerStories5" xml:space="preserve">
    <value>People try so hard to make money. But it's easy. The rocks are just sitting there. Take them and sell them. Works for me.</value>
  </data>
  <data name="StoryTitle_MinerStories6" xml:space="preserve">
    <value>Discovery</value>
  </data>
  <data name="StoryText_MinerStories6" xml:space="preserve">
    <value>If I find a new mineral, I'll be loaded. See the money isn't in the stuff itself - but to sell the naming rights for the new material. I'd be rich.</value>
  </data>
  <data name="StoryTitle_MinerStories7" xml:space="preserve">
    <value>Ambition</value>
  </data>
  <data name="StoryText_MinerStories7" xml:space="preserve">
    <value>That Prototech stuff I've heard about - it's gotta be made of something out here. I just need to keep looking.</value>
  </data>
  <data name="StoryTitle_MinerStories8" xml:space="preserve">
    <value>Freelance</value>
  </data>
  <data name="StoryText_MinerStories8" xml:space="preserve">
    <value>Corporate miners make more - but they just do what they're told. I have my freedom.</value>
  </data>
  <data name="StoryTitle_MinerStories9" xml:space="preserve">
    <value>Cycles</value>
  </data>
  <data name="StoryText_MinerStories9" xml:space="preserve">
    <value>It's all a scam, isn't it? I mine the rock, someone turns it into a drill, then someone sells me the drill, just so I can mine more rock.</value>
  </data>
  <data name="StoryTitle_MinerStories10" xml:space="preserve">
    <value>Accident</value>
  </data>
  <data name="StoryText_MinerStories10" xml:space="preserve">
    <value>Saw my buddy get caught in a detonation yesterday. I think I need a new career path.</value>
  </data>
  <data name="StoryTitle_MinerStories11" xml:space="preserve">
    <value>Company Expenditure</value>
  </data>
  <data name="StoryText_MinerStories11" xml:space="preserve">
    <value>Asked the boss if he could hook us up with some Prototech. He said no one knows where the stuff comes from. Yeah right. Bet he just doesn't want to pony it up.</value>
  </data>
  <data name="StoryTitle_MinerStories12" xml:space="preserve">
    <value>Old Reliable</value>
  </data>
  <data name="StoryText_MinerStories12" xml:space="preserve">
    <value>My favorite ore? Iron. It's practically as common as stone. It's always there when you need it.</value>
  </data>
  <data name="StoryTitle_MinerStories13" xml:space="preserve">
    <value>Healing</value>
  </data>
  <data name="StoryText_MinerStories13" xml:space="preserve">
    <value>I've always had a soft spot for mining Nickel. Maybe people make Medical Components with it. Don't know if it's likely, but it's what I tell myself.</value>
  </data>
  <data name="StoryTitle_MinerStories14" xml:space="preserve">
    <value>Computers</value>
  </data>
  <data name="StoryText_MinerStories14" xml:space="preserve">
    <value>Silicon might not be the most common ore. Nor the most expensive. But it powers computers. And they keep everything going.</value>
  </data>
  <data name="StoryTitle_MinerStories15" xml:space="preserve">
    <value>Rich Blue</value>
  </data>
  <data name="StoryText_MinerStories15" xml:space="preserve">
    <value>Cobalt mining is where it's at. I don't even care what it sells for. It's pretty to look at.</value>
  </data>
  <data name="StoryTitle_BuilderStories1" xml:space="preserve">
    <value>Inner Peace</value>
  </data>
  <data name="StoryText_BuilderStories1" xml:space="preserve">
    <value>If I could work with ships all day - and never have to talk with another human being - I think I would finally be happy.</value>
  </data>
  <data name="StoryTitle_BuilderStories2" xml:space="preserve">
    <value>Salesmanship</value>
  </data>
  <data name="StoryText_BuilderStories2" xml:space="preserve">
    <value>Reminder: Instead of slow, say the ship is "intended for precise movements." Instead of power-hungry, say it's "built like a workhorse."</value>
  </data>
  <data name="StoryTitle_BuilderStories3" xml:space="preserve">
    <value>Craftsmanship</value>
  </data>
  <data name="StoryText_BuilderStories3" xml:space="preserve">
    <value>Some might say anyone can build a ship - and with modular tech, they're right. But man, have I seen some ugly ships in my time.</value>
  </data>
  <data name="StoryTitle_BuilderStories4" xml:space="preserve">
    <value>Suit</value>
  </data>
  <data name="StoryText_BuilderStories4" xml:space="preserve">
    <value>I only work inside, helmet off. That acrid smell of welding - that's what it's all about. I won't have it be filtered out.</value>
  </data>
  <data name="StoryTitle_BuilderStories5" xml:space="preserve">
    <value>Cutting Corners</value>
  </data>
  <data name="StoryText_BuilderStories5" xml:space="preserve">
    <value>Boss got mad at a proposed design. He said it was little more than a box with thrusters on it. It can fly, can't it?</value>
  </data>
  <data name="StoryTitle_BuilderStories6" xml:space="preserve">
    <value>Artistry</value>
  </data>
  <data name="StoryText_BuilderStories6" xml:space="preserve">
    <value>I swear, no one appreciates aesthetics anymore. Each time someone brings back a heap of metal that used to be one of my creations, I die a little.</value>
  </data>
  <data name="StoryTitle_BuilderStories7" xml:space="preserve">
    <value>Thrusters</value>
  </data>
  <data name="StoryText_BuilderStories7" xml:space="preserve">
    <value>Forget drills, drives, weapons - forget all of it. What matters to me - and should matter to you - is how fast does your baby soar?</value>
  </data>
  <data name="StoryTitle_BuilderStories8" xml:space="preserve">
    <value>Outcompeted</value>
  </data>
  <data name="StoryText_BuilderStories8" xml:space="preserve">
    <value>The idea that there's machines out there now that make my work obsolete... It's affecting me. I hope this Factorum leaves as quickly as they arrived.</value>
  </data>
  <data name="StoryTitle_BuilderStories9" xml:space="preserve">
    <value>Audition</value>
  </data>
  <data name="StoryText_BuilderStories9" xml:space="preserve">
    <value>I see this as my try out. Build a nice enough ship, maybe that new group will recruit me. I'd love some Prototech.</value>
  </data>
  <data name="StoryTitle_BuilderStories10" xml:space="preserve">
    <value>Terrain</value>
  </data>
  <data name="StoryText_BuilderStories10" xml:space="preserve">
    <value>I've mastered land. I've mastered the air. I've mastered space itself. Now, if only I could find some water…</value>
  </data>
  <data name="StoryTitle_BuilderStories11" xml:space="preserve">
    <value>Ease</value>
  </data>
  <data name="StoryText_BuilderStories11" xml:space="preserve">
    <value>My grandfather insisted he was a better shipbuilder than me - since when he was my age he didn't have access to Grids. I think he's just jealous.</value>
  </data>
  <data name="StoryTitle_BuilderStories12" xml:space="preserve">
    <value>Payday</value>
  </data>
  <data name="StoryText_BuilderStories12" xml:space="preserve">
    <value>I know The Factorum's the new kid on the block, but I'm hoping to be recognized by R.O.S. Forget Prototech. R.O.S. is loaded.</value>
  </data>
  <data name="StoryTitle_BuilderStories13" xml:space="preserve">
    <value>Ol' Reliable</value>
  </data>
  <data name="StoryText_BuilderStories13" xml:space="preserve">
    <value>I don't need that Proton-Techno whatever. My ships the best. And I don't care what sort of fancy tech says otherwise.</value>
  </data>
  <data name="StoryTitle_BuilderStories14" xml:space="preserve">
    <value>Disposal</value>
  </data>
  <data name="StoryText_BuilderStories14" xml:space="preserve">
    <value>I threw out his first ship. Boo-hoo. I honestly thought it was a pile of rubbish.</value>
  </data>
  <data name="StoryTitle_BuilderStories15" xml:space="preserve">
    <value>Useful</value>
  </data>
  <data name="StoryText_BuilderStories15" xml:space="preserve">
    <value>I'm sick of everything I build needing to have a purpose. Can't a spaceship just exist anymore? Just for the sake of being cool?</value>
  </data>
  <data name="StoryTitle_PirateStories1" xml:space="preserve">
    <value>Personal</value>
  </data>
  <data name="StoryText_PirateStories1" xml:space="preserve">
    <value>Raiding isn't all I hoped it would be. Spacesuits are one thing - I prefer shooting flesh.</value>
  </data>
  <data name="StoryTitle_PirateStories2" xml:space="preserve">
    <value>Intentions</value>
  </data>
  <data name="StoryText_PirateStories2" xml:space="preserve">
    <value>I picked up my first gun to fight off raiders. Now look at me. Funny how that happens.</value>
  </data>
  <data name="StoryTitle_PirateStories3" xml:space="preserve">
    <value>Frontier</value>
  </data>
  <data name="StoryText_PirateStories3" xml:space="preserve">
    <value>It's a fine line we walk. Enter space with too many people and we're dead. Too few, there's no one to raid.</value>
  </data>
  <data name="StoryTitle_PirateStories4" xml:space="preserve">
    <value>Meritocracy</value>
  </data>
  <data name="StoryText_PirateStories4" xml:space="preserve">
    <value>How did I become the leader? Easy. I killed the last one.</value>
  </data>
  <data name="StoryTitle_PirateStories5" xml:space="preserve">
    <value>Desperate</value>
  </data>
  <data name="StoryText_PirateStories5" xml:space="preserve">
    <value>I tried mining. Was no good. I tried building. Back gave out. I tried flying. Destroyed the ship. This is all I got left.</value>
  </data>
  <data name="StoryTitle_PirateStories6" xml:space="preserve">
    <value>Defense</value>
  </data>
  <data name="StoryText_PirateStories6" xml:space="preserve">
    <value>This is our home. We won't let The Factorum touch it. But to fight them, we're going to need to raid for resources.</value>
  </data>
  <data name="StoryTitle_PirateStories7" xml:space="preserve">
    <value>Justification</value>
  </data>
  <data name="StoryText_PirateStories7" xml:space="preserve">
    <value>Other raiders come up with excuses. They had no other option, or they started with good intentions. I'm honest - I just like the money.</value>
  </data>
  <data name="StoryTitle_PirateStories8" xml:space="preserve">
    <value>Allocation</value>
  </data>
  <data name="StoryText_PirateStories8" xml:space="preserve">
    <value>I'll hear no more complaints from the crew that we're siphoning some money back to the Cooperative. Why do you think they turn a blind eye?</value>
  </data>
  <data name="StoryTitle_PirateStories9" xml:space="preserve">
    <value>Avoid</value>
  </data>
  <data name="StoryText_PirateStories9" xml:space="preserve">
    <value>There will be no more attempts to raid The Factorum. We can't afford another loss like that.</value>
  </data>
  <data name="StoryTitle_PirateStories10" xml:space="preserve">
    <value>Identity</value>
  </data>
  <data name="StoryText_PirateStories10" xml:space="preserve">
    <value>The fake IDs should be here in a week. Then, we'll have the money and no trail to what we've done. Pleasure working with you all.</value>
  </data>
  <data name="StoryTitle_PirateStories11" xml:space="preserve">
    <value>Coincidence</value>
  </data>
  <data name="StoryText_PirateStories11" xml:space="preserve">
    <value>Just ran into a ship we'd already hit earlier that month. Crew and I couldn't stop laughing. What are the odds? Anyway, put the poor sap out of his misery.</value>
  </data>
  <data name="StoryTitle_PirateStories12" xml:space="preserve">
    <value>Opportunity</value>
  </data>
  <data name="StoryText_PirateStories12" xml:space="preserve">
    <value>I hate that new group. The Factory guys. It's bad news. People are carrying more weapons than ever. I was hoping they'd all be distracted. Easier targets.</value>
  </data>
  <data name="StoryTitle_PirateStories13" xml:space="preserve">
    <value>Posing</value>
  </data>
  <data name="StoryText_PirateStories13" xml:space="preserve">
    <value>Idea: What if we pretend to be that Factorum group? Maybe we can get people to pay us just through reputation.</value>
  </data>
  <data name="StoryTitle_PirateStories14" xml:space="preserve">
    <value>Spoils</value>
  </data>
  <data name="StoryText_PirateStories14" xml:space="preserve">
    <value>There's a new way we're dividing the pot. Crew gets all the credits we find. In exchange, I get any Prototech.</value>
  </data>
  <data name="StoryTitle_PirateStories15" xml:space="preserve">
    <value>Barbarian</value>
  </data>
  <data name="StoryText_PirateStories15" xml:space="preserve">
    <value>Let's make something clear - there's easier ways to make money. I'm a raider for the sheer love of the sport.</value>
  </data>
  <data name="StoryTitle_MilitaryStories1" xml:space="preserve">
    <value>Merchandise</value>
  </data>
  <data name="StoryText_MilitaryStories1" xml:space="preserve">
    <value>I sometimes think about who buys our weapons. How many people they've killed. But most of the time, I just think about the money they've spent.</value>
  </data>
  <data name="StoryTitle_MilitaryStories2" xml:space="preserve">
    <value>Halcyon</value>
  </data>
  <data name="StoryText_MilitaryStories2" xml:space="preserve">
    <value>We're not what we used to be. Weapon sellers used to be the richest people alive. Now? We're just part of the pack.</value>
  </data>
  <data name="StoryTitle_MilitaryStories3" xml:space="preserve">
    <value>Security</value>
  </data>
  <data name="StoryText_MilitaryStories3" xml:space="preserve">
    <value>Space is dangerous. I sell security. Can't think of something nobler than that.</value>
  </data>
  <data name="StoryTitle_MilitaryStories4" xml:space="preserve">
    <value>Aliens</value>
  </data>
  <data name="StoryText_MilitaryStories4" xml:space="preserve">
    <value>Did you hear about those spiders? There's freaking monster spider aliens out there. I can't prove it, but trust me, you'll want a gun.</value>
  </data>
  <data name="StoryTitle_MilitaryStories5" xml:space="preserve">
    <value>Raiders</value>
  </data>
  <data name="StoryText_MilitaryStories5" xml:space="preserve">
    <value>Why do I sell weapons? My cousin got killed by pirates. He was just a miner. I'm making sure it doesn't happen again.</value>
  </data>
  <data name="StoryTitle_MilitaryStories6" xml:space="preserve">
    <value>Ambition</value>
  </data>
  <data name="StoryText_MilitaryStories6" xml:space="preserve">
    <value>With the weapons I'm selling, I could start my own colony out here. But I don't want a colony. I'm happy here.</value>
  </data>
  <data name="StoryTitle_MilitaryStories7" xml:space="preserve">
    <value>Regret</value>
  </data>
  <data name="StoryText_MilitaryStories7" xml:space="preserve">
    <value>One of my team ran off with a bunch of weapons to start a raider group. Since then, sales have been at an all time high. That isn't right.</value>
  </data>
  <data name="StoryTitle_MilitaryStories8" xml:space="preserve">
    <value>Merge</value>
  </data>
  <data name="StoryText_MilitaryStories8" xml:space="preserve">
    <value>With what we're selling, I'm hoping to attract the new Factorum group. Maybe they'll buy us out?</value>
  </data>
  <data name="StoryTitle_MilitaryStories9" xml:space="preserve">
    <value>Mixed-Blessing</value>
  </data>
  <data name="StoryText_MilitaryStories9" xml:space="preserve">
    <value>On the one hand, people are scared of The Factorum and need weapons. On the other hand, everyone wants Prototech.</value>
  </data>
  <data name="StoryTitle_MilitaryStories10" xml:space="preserve">
    <value>Pacifism</value>
  </data>
  <data name="StoryText_MilitaryStories10" xml:space="preserve">
    <value>Trust me, I love peace more than anyone else. And with my guns, you can bring peace just about anywhere.</value>
  </data>
  <data name="StoryTitle_MilitaryStories11" xml:space="preserve">
    <value>Hostility</value>
  </data>
  <data name="StoryText_MilitaryStories11" xml:space="preserve">
    <value>I don't know who this new group thinks they are, but this is our home. Whatever isn't bought, I'm using myself to bring them down.</value>
  </data>
  <data name="StoryTitle_MilitaryStories12" xml:space="preserve">
    <value>Dangerous</value>
  </data>
  <data name="StoryText_MilitaryStories12" xml:space="preserve">
    <value>I started selling weapons in a world I understand. With this Factorum, I'm lost. And potentially, in serious danger.</value>
  </data>
  <data name="StoryTitle_MilitaryStories13" xml:space="preserve">
    <value>Priorities</value>
  </data>
  <data name="StoryText_MilitaryStories13" xml:space="preserve">
    <value>See, this Factorum group has their goals all misaligned. If I was them, my first goal would be building a rifle with their supertech.</value>
  </data>
  <data name="StoryTitle_MilitaryStories14" xml:space="preserve">
    <value>Cost</value>
  </data>
  <data name="StoryText_MilitaryStories14" xml:space="preserve">
    <value>I always wanted a conflict - thought I'd be rich. But now that it's here, I can't help but feel like a monster. This has to be stopped.</value>
  </data>
  <data name="StoryTitle_MilitaryStories15" xml:space="preserve">
    <value>Security</value>
  </data>
  <data name="StoryText_MilitaryStories15" xml:space="preserve">
    <value>I told The Collective - they needed to update their arsenal. Now that The Factorum is here I've got orders coming in, but it's just too late.</value>
  </data>
  <data name="StoryTitle_TraderStories1" xml:space="preserve">
    <value>Ethics</value>
  </data>
  <data name="StoryText_TraderStories1" xml:space="preserve">
    <value>Could we increase our profit margins by sellings guns? Yes. But I won't have something I sold taking a life.</value>
  </data>
  <data name="StoryTitle_TraderStories2" xml:space="preserve">
    <value>Basics</value>
  </data>
  <data name="StoryText_TraderStories2" xml:space="preserve">
    <value>You buy low, you sell high. You buy where there's plenty, you sell where there isn't. It's not rocket science. Leave that for the engineers.</value>
  </data>
  <data name="StoryTitle_TraderStories3" xml:space="preserve">
    <value>Ruthless</value>
  </data>
  <data name="StoryText_TraderStories3" xml:space="preserve">
    <value>Sell at a loss. We can survive it. Our competition can't. Once they're gone, we make it up on the back-end.</value>
  </data>
  <data name="StoryTitle_TraderStories4" xml:space="preserve">
    <value>Helmet</value>
  </data>
  <data name="StoryText_TraderStories4" xml:space="preserve">
    <value>Had a guy open his helmet because he said he couldn't hear me. We were in space. Now he's trying to sue. I'm going to need a Space Lawyer.</value>
  </data>
  <data name="StoryTitle_TraderStories5" xml:space="preserve">
    <value>Oxygen Tank</value>
  </data>
  <data name="StoryText_TraderStories5" xml:space="preserve">
    <value>There was a customer who returned an oxygen tank. They said it worked fine then "suddenly stopped." It was empty. So help me god.</value>
  </data>
  <data name="StoryTitle_TraderStories6" xml:space="preserve">
    <value>Wanderlust</value>
  </data>
  <data name="StoryText_TraderStories6" xml:space="preserve">
    <value>Some days I look in the great void of space and think if I wasted it all buying and selling. But, well, the cash helps the feeling go away.</value>
  </data>
  <data name="StoryTitle_TraderStories7" xml:space="preserve">
    <value>Terminology</value>
  </data>
  <data name="StoryText_TraderStories7" xml:space="preserve">
    <value>Credits or spacebucks. Call them ClangKoins for all I care. Just spend them here.</value>
  </data>
  <data name="StoryTitle_TraderStories8" xml:space="preserve">
    <value>Advantage</value>
  </data>
  <data name="StoryText_TraderStories8" xml:space="preserve">
    <value>We might not have the cheapest prices. Or the best goods. Or the best security. But you're already here, aren't you? So buy something.</value>
  </data>
  <data name="StoryTitle_TraderStories9" xml:space="preserve">
    <value>Journaling</value>
  </data>
  <data name="StoryText_TraderStories9" xml:space="preserve">
    <value>My boss gave me this journal. Said I'd be a better employee if I start "reflecting on my business sense." I need to get out of here.</value>
  </data>
  <data name="StoryTitle_TraderStories10" xml:space="preserve">
    <value>Career Change</value>
  </data>
  <data name="StoryText_TraderStories10" xml:space="preserve">
    <value>I wish I could be out there mining - but ever since my bum leg, it isn't an option. At least this keeps the credits coming.</value>
  </data>
  <data name="StoryTitle_TraderStories11" xml:space="preserve">
    <value>New Business</value>
  </data>
  <data name="StoryText_TraderStories11" xml:space="preserve">
    <value>Any luck reaching out to that Factorum? Everyone needs to buy stuff eventually, right?</value>
  </data>
  <data name="StoryTitle_TraderStories12" xml:space="preserve">
    <value>Price</value>
  </data>
  <data name="StoryText_TraderStories12" xml:space="preserve">
    <value>There's no such thing as a price that's "too high". I want Prototech. And you're going to get it for me.</value>
  </data>
  <data name="StoryTitle_TraderStories13" xml:space="preserve">
    <value>Quota</value>
  </data>
  <data name="StoryText_TraderStories13" xml:space="preserve">
    <value>He told me if I don't make my sales quota, I'll be fired. But no one comes to this sector anymore! I can't work my magic if no one shows up.</value>
  </data>
  <data name="StoryTitle_TraderStories14" xml:space="preserve">
    <value>Expeditions</value>
  </data>
  <data name="StoryText_TraderStories14" xml:space="preserve">
    <value>I heard some rumors about an expedition into space. Pushing the frontier. I bet there's money to be made.</value>
  </data>
  <data name="StoryTitle_TraderStories15" xml:space="preserve">
    <value>Terran Workers</value>
  </data>
  <data name="StoryText_TraderStories15" xml:space="preserve">
    <value>Independent Terran Workers is trying to get out of what they owe me. They said to take it up with R.O.S. Unbelievable.</value>
  </data>
  <data name="StoryTitle_DerelictStories1" xml:space="preserve">
    <value>Distress</value>
  </data>
  <data name="StoryText_DerelictStories1" xml:space="preserve">
    <value>There's no point to the evacuation call. It will be over before they have time to react. Let their last moments be peaceful.</value>
  </data>
  <data name="StoryTitle_DerelictStories2" xml:space="preserve">
    <value>Fight</value>
  </data>
  <data name="StoryText_DerelictStories2" xml:space="preserve">
    <value>Put it down in the log - they're looking for a fight. Let's show them why that was a bad idea.</value>
  </data>
  <data name="StoryTitle_DerelictStories3" xml:space="preserve">
    <value>Pirate</value>
  </data>
  <data name="StoryText_DerelictStories3" xml:space="preserve">
    <value>I told you having a former pirate on the crew was a terrible idea. You need to tell them we are NOT pirate affiliated.</value>
  </data>
  <data name="StoryTitle_DerelictStories4" xml:space="preserve">
    <value>Salvage</value>
  </data>
  <data name="StoryText_DerelictStories4" xml:space="preserve">
    <value>I guess it's fitting. Live by the salvage, die by the salvage. Whoever is reading this - congratulations on the payday.</value>
  </data>
  <data name="StoryTitle_DerelictStories5" xml:space="preserve">
    <value>Maneuver</value>
  </data>
  <data name="StoryText_DerelictStories5" xml:space="preserve">
    <value>I've gotten out of stickier situations than this. Get the crew together, I'm ready to impress them.</value>
  </data>
  <data name="StoryTitle_DerelictStories6" xml:space="preserve">
    <value>Evacuation</value>
  </data>
  <data name="StoryText_DerelictStories6" xml:space="preserve">
    <value>Just gave up the last way out of here. At least the crew will survive.</value>
  </data>
  <data name="StoryTitle_DerelictStories7" xml:space="preserve">
    <value>Beyond</value>
  </data>
  <data name="StoryText_DerelictStories7" xml:space="preserve">
    <value>I grew up on Earth. Dying out here... there's worse ways to go.</value>
  </data>
  <data name="StoryTitle_DerelictStories8" xml:space="preserve">
    <value>Memory</value>
  </data>
  <data name="StoryText_DerelictStories8" xml:space="preserve">
    <value>If you found these remains, thank you. Thank you for finding me. And remembering me, even for this brief moment.</value>
  </data>
  <data name="StoryTitle_DerelictStories9" xml:space="preserve">
    <value>Backstab</value>
  </data>
  <data name="StoryText_DerelictStories9" xml:space="preserve">
    <value>I gave him the information two days ago. He should be back by now. He wouldn't have run off. I just need to wait.</value>
  </data>
  <data name="StoryTitle_DerelictStories10" xml:space="preserve">
    <value>Showdown</value>
  </data>
  <data name="StoryText_DerelictStories10" xml:space="preserve">
    <value>I told the pirates where they can find us. Here's where we make our stand.</value>
  </data>
  <data name="StoryTitle_DerelictStories11" xml:space="preserve">
    <value>Return</value>
  </data>
  <data name="StoryText_DerelictStories11" xml:space="preserve">
    <value>He's not coming back, is he? He said he'd come back for us.</value>
  </data>
  <data name="StoryTitle_DerelictStories12" xml:space="preserve">
    <value>Destruction</value>
  </data>
  <data name="StoryText_DerelictStories12" xml:space="preserve">
    <value>Let the ship crash. The people are okay - and they're the ones that matter.</value>
  </data>
  <data name="StoryTitle_DerelictStories13" xml:space="preserve">
    <value>Unknown</value>
  </data>
  <data name="StoryText_DerelictStories13" xml:space="preserve">
    <value>I can't die not knowing what destroyed the ship. Well... I can. And I'm going to. But where did I go wrong?</value>
  </data>
  <data name="StoryTitle_DerelictStories14" xml:space="preserve">
    <value>Life</value>
  </data>
  <data name="StoryText_DerelictStories14" xml:space="preserve">
    <value>My sister was having her first kid. I was supposed to meet him. I'm not supposed to die here.</value>
  </data>
  <data name="StoryTitle_DerelictStories15" xml:space="preserve">
    <value>Belief</value>
  </data>
  <data name="StoryText_DerelictStories15" xml:space="preserve">
    <value>I've been in stickier situations than this. Just trust in the plan - and we'll all get out of this alive.</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowCornerInverted" xml:space="preserve">
    <value>Bay Window Corner Inverted</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowCornerInvertedRailing" xml:space="preserve">
    <value>Bay Window Corner Inverted Railing</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowDiagonal" xml:space="preserve">
    <value>Bay Window Diagonal</value>
  </data>
  <data name="DisplayName_Block_ExtendedWindowDiagonalRailing" xml:space="preserve">
    <value>Bay Window Diagonal Railing</value>
  </data>
  <data name="Department_LiveOpsLeadDesigner" xml:space="preserve">
    <value>LiveOps Lead Designer</value>
  </data>
  <data name="Department_LiveOpsLeadArtist" xml:space="preserve">
    <value>LiveOps Deputy Lead Artist</value>
  </data>
  <data name="Department_LiveOpsArtists" xml:space="preserve">
    <value>LiveOps Artists</value>
  </data>
  <data name="Department_LiveOpsLeadTester" xml:space="preserve">
    <value>LiveOps Deputy Lead QA</value>
  </data>
  <data name="Department_LiveOpsTesters" xml:space="preserve">
    <value>LiveOps QA</value>
  </data>
  <data name="Department_LiveOpsWriter" xml:space="preserve">
    <value>LiveOps Writer</value>
  </data>
  <data name="SearchBox_PressEnterToSearch" xml:space="preserve">
    <value>Press Enter to search</value>
  </data>
  <data name="Description_VoxelHands" xml:space="preserve">
    <value>Voxel Hand tools are used to create, remove and shape voxel terrain</value>
  </data>
  <data name="NotificationHintDeposit" xml:space="preserve">
    <value>Press {0} to deposit all ores, ingots and components</value>
  </data>
  <data name="Description_DecorativeFloor" xml:space="preserve">
    <value>Floor blocks can be used to stylize floors of corridors, hangars and platforms.</value>
  </data>
  <data name="DisplayName_Block_FloorCenter" xml:space="preserve">
    <value>Floor Center</value>
  </data>
  <data name="DisplayName_Block_FloorEdge" xml:space="preserve">
    <value>Floor Edge</value>
  </data>
  <data name="DisplayName_Block_FloorSlab" xml:space="preserve">
    <value>Floor 3x3 Slab</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundLight" xml:space="preserve">
    <value>Corridor Round Light</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundT" xml:space="preserve">
    <value>Corridor Round T</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundX" xml:space="preserve">
    <value>Corridor Round X</value>
  </data>
  <data name="DisplayName_Block_CorridorRound" xml:space="preserve">
    <value>Corridor Round</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundCorner" xml:space="preserve">
    <value>Corridor Round Corner</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundDoor" xml:space="preserve">
    <value>Corridor Round Door</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundTransition" xml:space="preserve">
    <value>Corridor Round Transition</value>
  </data>
  <data name="DisplayName_Block_CorridorRoundWindow" xml:space="preserve">
    <value>Corridor Round Window</value>
  </data>
  <data name="DisplayName_Block_FloorDecal" xml:space="preserve">
    <value>Floor Decal</value>
  </data>
  <data name="DisplayName_Block_FloorPassage" xml:space="preserve">
    <value>Floor Passage</value>
  </data>
  <data name="Terminal_UseConveyorSystem_Tooltip" xml:space="preserve">
    <value>Enables the automatic pushing/pulling of items through conveyors by this block.</value>
  </data>
  <data name="DisplayName_Category_DLC_EconomyDeluxe" xml:space="preserve">
    <value>   Economy Deluxe</value>
  </data>
  <data name="RadialMenuBlocks_YTooltip" xml:space="preserve">
    <value>{0} Recent Blocks</value>
  </data>
  <data name="RadialMenuSystem_YTooltip" xml:space="preserve">
    <value>{0} Quick Actions</value>
  </data>
  <data name="DisplayName_Block_SmallOxygenTank" xml:space="preserve">
    <value>Small Oxygen Tank</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCornerBase" xml:space="preserve">
    <value>Bridge Sloped Corner Base</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCornerBaseFloorless" xml:space="preserve">
    <value>Bridge Sloped Corner Base Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1BaseL" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Base L</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1BaseR" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Base R</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1TipFloorlessL" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Tip L Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1TipFloorlessR" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Tip R Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1TipL" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Tip L</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitInvCorner2x1TipR" xml:space="preserve">
    <value>Bridge Inv. Corner 2x1 Tip R</value>
  </data>
  <data name="DisplayName_Block_HydrogenTankSmallLab" xml:space="preserve">
    <value>Lab Small Hydrogen Tank</value>
  </data>
  <data name="Description_CargoTerminal" xml:space="preserve">
    <value>Cargo Terminals allow inventory access while also providing storage.</value>
  </data>
  <data name="DisplayName_Block_CargoTerminal" xml:space="preserve">
    <value>Cargo Terminal</value>
  </data>
  <data name="DisplayName_Block_CargoTerminalHalf" xml:space="preserve">
    <value>Cargo Terminal Half</value>
  </data>
  <data name="Description_RefillStation" xml:space="preserve">
    <value>A small hatch which allows for suit power, oxygen, and hydrogen refills.</value>
  </data>
  <data name="DisplayName_Block_RefillStation" xml:space="preserve">
    <value>Refill Station</value>
  </data>
  <data name="DisplayName_Block_InsetRefillStation" xml:space="preserve">
    <value>Inset Refill Station</value>
  </data>
  <data name="DisplayName_BlockGroup_RefillStations" xml:space="preserve">
    <value>Refill Stations</value>
  </data>
  <data name="DisplayName_Block_LabDoor" xml:space="preserve">
    <value>Lab Door</value>
  </data>
  <data name="DisplayName_Block_LabDoorInv" xml:space="preserve">
    <value>Lab Door Inv.</value>
  </data>
  <data name="DisplayName_Block_CryoLabVat" xml:space="preserve">
    <value>Lab Vat</value>
  </data>
  <data name="Description_LabVat" xml:space="preserve">
    <value>A vat used to preserve laboratory specimens.

If a player enters the vat it will preserve their inventory while they're offline and keep them alive as long as there is a connected source of oxygen.</value>
  </data>
  <data name="DisplayName_Block_OxygenGeneratorLab" xml:space="preserve">
    <value>Lab O2/H2 Generator</value>
  </data>
  <data name="DisplayName_Block_HydrogenTankLab" xml:space="preserve">
    <value>Lab Hydrogen Tank</value>
  </data>
  <data name="ScreenDebugAdminMenu_Profile" xml:space="preserve">
    <value>Profile</value>
  </data>
  <data name="YesNoToolbarTooltip_Slot" xml:space="preserve">
    <value>Slot</value>
  </data>
  <data name="YesNoToolbarTooltip_Descripton" xml:space="preserve">
    <value>Event toolbar for</value>
  </data>
  <data name="YesNoToolbarTooltip_SensorBlock_Yes" xml:space="preserve">
    <value>Trigger upon detection</value>
  </data>
  <data name="YesNoToolbarTooltip_SensorBlock_No" xml:space="preserve">
    <value>Trigger when no longer detecting</value>
  </data>
  <data name="YesNoToolbarTooltip_TurretCtrl_Yes" xml:space="preserve">
    <value>Trigger when aligned with target</value>
  </data>
  <data name="YesNoToolbarTooltip_TurretCtrl_No" xml:space="preserve">
    <value>Trigger when no longer aligned with target</value>
  </data>
  <data name="YesNoToolbarTooltip_Airvent_Yes" xml:space="preserve">
    <value>Trigger when pressurized</value>
  </data>
  <data name="YesNoToolbarTooltip_Airvent_No" xml:space="preserve">
    <value>Trigger upon loss of pressure</value>
  </data>
  <data name="YesNoToolbarTooltip_Cockpit_Yes" xml:space="preserve">
    <value>Trigger when this grid is target locked</value>
  </data>
  <data name="YesNoToolbarTooltip_Cockpit_No" xml:space="preserve">
    <value>Trigger when this grid is no longer target locked</value>
  </data>
  <data name="YesNoToolbarTooltip_AIDefence_Yes" xml:space="preserve">
    <value>Trigger when threat is detected</value>
  </data>
  <data name="YesNoToolbarTooltip_AIDefence_No" xml:space="preserve">
    <value>Trigger when threat is lost</value>
  </data>
  <data name="YesNoToolbarTooltip_Default_Yes" xml:space="preserve">
    <value>When true</value>
  </data>
  <data name="YesNoToolbarTooltip_Default_No" xml:space="preserve">
    <value>When false</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_BlockAddedRemoved_Yes" xml:space="preserve">
    <value>When added</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_BlockAddedRemoved_No" xml:space="preserve">
    <value>When removed</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_OnOFf_Yes" xml:space="preserve">
    <value>When switched on</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_OnOFf_No" xml:space="preserve">
    <value>When switched off</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_occupied_Yes" xml:space="preserve">
    <value>When occupied</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_occupied_No" xml:space="preserve">
    <value>When unoccupied</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Connector_Yes" xml:space="preserve">
    <value>When connected</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Connector_No" xml:space="preserve">
    <value>When disconnected</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Ready_Yes" xml:space="preserve">
    <value>When ready</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Ready_No" xml:space="preserve">
    <value>When not ready</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Open_Yes" xml:space="preserve">
    <value>When opened</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Open_No" xml:space="preserve">
    <value>When closed</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_LandingGear_Yes" xml:space="preserve">
    <value>When locked</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_LandingGear_No" xml:space="preserve">
    <value>When unlocked</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Merge_Yes" xml:space="preserve">
    <value>When merged</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Merge_No" xml:space="preserve">
    <value>When un-merged</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Attached_Yes" xml:space="preserve">
    <value>When attached</value>
  </data>
  <data name="YesNoToolbarTooltip_EC_Attached_No" xml:space="preserve">
    <value>When detached</value>
  </data>
  <data name="Limits_NoFaction" xml:space="preserve">
    <value>A player without a faction cannot claim a grid. Join a faction.</value>
  </data>
  <data name="Limits_GridSize" xml:space="preserve">
    <value>This would exceed the maximum grid size.</value>
  </data>
  <data name="Limits_SpecificBlock" xml:space="preserve">
    <value>This would exceed the {0} blocks limit.</value>
  </data>
  <data name="Limits_Block" xml:space="preserve">
    <value>This would exceed the block limit.</value>
  </data>
  <data name="Limits_PCU" xml:space="preserve">
    <value>This would exceed the PCU limit.</value>
  </data>
  <data name="AdminScreen_PCU_WorldInfo" xml:space="preserve">
    <value>World Info</value>
  </data>
  <data name="AdminScreen_PCU_LimitsMode" xml:space="preserve">
    <value>Limits Mode</value>
  </data>
  <data name="AdminScreen_PCU_PCULimitSettings" xml:space="preserve">
    <value>PCU Limit Settings</value>
  </data>
  <data name="AdminScreen_PCU_TotalPCUInWorld" xml:space="preserve">
    <value>Total PCU In World</value>
  </data>
  <data name="AdminScreen_PCU_NPCPCUUsed" xml:space="preserve">
    <value>NPC PCU Used</value>
  </data>
  <data name="AdminScreen_PCU_NPCPCUAvailable" xml:space="preserve">
    <value>NPC PCU Available</value>
  </data>
  <data name="AdminScreen_PCU_GlobalEncounterPCUUsed" xml:space="preserve">
    <value>Global Encounter PCU Used</value>
  </data>
  <data name="AdminScreen_PCU_GlobalEncounterPCUAvailable" xml:space="preserve">
    <value>Global Encounter PCU Available</value>
  </data>
  <data name="AdminScreen_PCU_ViewPCUUsageOf" xml:space="preserve">
    <value>View PCU Usage of:</value>
  </data>
  <data name="AdminScreen_PCU_TotalPCUUsedByPlayer" xml:space="preserve">
    <value>Total PCU Used by Player:</value>
  </data>
  <data name="AdminScreen_PCU_PlayersGrids" xml:space="preserve">
    <value>Authored Grids</value>
  </data>
  <data name="AdminScreen_PCU_GlobalEncounters" xml:space="preserve">
    <value>Global Encounters</value>
  </data>
  <data name="DisplayName_Block_PrototechReactor" xml:space="preserve">
    <value>Prototech Fusion Reactor</value>
  </data>
  <data name="Description_PrototechReactor" xml:space="preserve">
    <value>Prototech Fusion Reactors convert hydrogen into power at a high rate of efficiency.

Prototech blocks contain advanced components that will be lost if extraction is attempted.</value>
  </data>
  <data name="ControlName_QuickPickColor" xml:space="preserve">
    <value>Quick Pick Color</value>
  </data>
  <data name="Description_Pipes" xml:space="preserve">
    <value>Pipes are decorative blocks that can provide detailing and structure.</value>
  </data>
  <data name="DisplayName_Block_PipesCorner" xml:space="preserve">
    <value>Pipes Corner</value>
  </data>
  <data name="DisplayName_Block_PipesCornerInner" xml:space="preserve">
    <value>Pipes Up</value>
  </data>
  <data name="DisplayName_Block_PipesEnd" xml:space="preserve">
    <value>Pipes End</value>
  </data>
  <data name="DisplayName_Block_PipesJunction" xml:space="preserve">
    <value>Pipes Junction</value>
  </data>
  <data name="DisplayName_Block_PipesCornerOuter" xml:space="preserve">
    <value>Pipes Down</value>
  </data>
  <data name="DisplayName_Block_PipesStraight1" xml:space="preserve">
    <value>Pipes Straight 1</value>
  </data>
  <data name="DisplayName_Block_PipesStraight2" xml:space="preserve">
    <value>Pipes Straight 2</value>
  </data>
  <data name="CreateBlueprintDetached" xml:space="preserve">
    <value>Create blueprint detached</value>
  </data>
  <data name="CreateBlueprintMagneticLocks" xml:space="preserve">
    <value>Blueprint with locks</value>
  </data>
  <data name="CopyObjectMagneticLocks" xml:space="preserve">
    <value>Copy with locks</value>
  </data>
  <data name="DeleteObjectDetached" xml:space="preserve">
    <value>Delete object detached</value>
  </data>
  <data name="DeleteObjectMagneticLocks" xml:space="preserve">
    <value>Delete with locks</value>
  </data>
  <data name="CutObjectDetached" xml:space="preserve">
    <value>Cut object detached</value>
  </data>
  <data name="CutObjectDetachedMagneticLocks" xml:space="preserve">
    <value>Cut with locks</value>
  </data>
  <data name="DisplayName_Block_SmallOxygenTankLab" xml:space="preserve">
    <value>Lab Small Oxygen Tank</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCorner2x1BaseFloorless" xml:space="preserve">
    <value>Bridge Corner 2x1 Base L Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCorner2x1BaseRFloorless" xml:space="preserve">
    <value>Bridge Corner 2x1 Base R Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitCornerFloorless" xml:space="preserve">
    <value>Bridge Sloped Corner Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitHalfSlopedCornerFloorless" xml:space="preserve">
    <value>Bridge Half Sloped Corner Floorless</value>
  </data>
  <data name="DisplayName_Block_BridgeCockpitRaisedSlopedCornerFloorless" xml:space="preserve">
    <value>Bridge Raised Sloped Corner Floorless</value>
  </data>
  <data name="WorldSettings_EnableShareInertiaTensor" xml:space="preserve">
    <value>Enable Share Inertia Tensor</value>
  </data>
  <data name="WorldSettings_EnableUnsafePistonImpulses" xml:space="preserve">
    <value>Enable Unsafe Piston Impulses</value>
  </data>
  <data name="WorldSettings_EnableUnsafeRotorTorques" xml:space="preserve">
    <value>Enables Unsafe Torques</value>
  </data>
  <data name="WorldSettings_EnableShareInertiaTensorTooltip" xml:space="preserve">
    <value>Enables experimental feature to share inertia tensor.</value>
  </data>
  <data name="WorldSettings_EnableUnsafePistonImpulsesTooltip" xml:space="preserve">
    <value>Enables unsafe impulses (experimental feature) for Piston block.</value>
  </data>
  <data name="WorldSettings_EnableUnsafeRotorTorquesTooltip" xml:space="preserve">
    <value>Enables unsafe torques (experimental feature) for Rotor blocks.</value>
  </data>
  <data name="AdminScreen_PCU_NPCOwnedGrids" xml:space="preserve">
    <value>NPC Owned Grids</value>
  </data>
  <data name="Department_GameAnalytics" xml:space="preserve">
    <value>Game Analytics</value>
  </data>
  <data name="UnfinishedBlock" xml:space="preserve">
    <value>Unfinished block</value>
  </data>
  <data name="MissingBlock" xml:space="preserve">
    <value>Missing block</value>
  </data>
  <data name="ServerDetails_BlocksInventorySizeMultiplier" xml:space="preserve">
    <value>Blocks Inventory Size</value>
  </data>
  <data name="ServerDetails_TotalBotLimit" xml:space="preserve">
    <value>Bot Limit</value>
  </data>
  <data name="ServerDetails_PiratePCU" xml:space="preserve">
    <value>NPC PCU</value>
  </data>
  <data name="ServerDetails_GlobalEncounterPCU" xml:space="preserve">
    <value>Global Encounter PCU</value>
  </data>
  <data name="ServerDetails_EnableContainerDrops" xml:space="preserve">
    <value>Enable Drop Containers</value>
  </data>
  <data name="ServerDetails_EnableTurretsFriendlyFire" xml:space="preserve">
    <value>Enable Friendly Missile Damage</value>
  </data>
  <data name="ServerDetails_EnableResearch" xml:space="preserve">
    <value>Enable Progression</value>
  </data>
  <data name="ServerDetails_EnableEconomy" xml:space="preserve">
    <value>Enable Economy</value>
  </data>
  <data name="ServerDetails_EnablePlanetaryEncounters" xml:space="preserve">
    <value>Enable Planetary Encounters</value>
  </data>
  <data name="ServerDetails_EnableShareInertiaTensor" xml:space="preserve">
    <value>Enable Share Inertia Tensor</value>
  </data>
  <data name="ServerDetails_EnableUnsafePistonImpulses" xml:space="preserve">
    <value>Enable Unsafe Piston Impulses</value>
  </data>
  <data name="ServerDetails_EnableUnsafeRotorTorques" xml:space="preserve">
    <value>Enable Unsafe Rotor Torques</value>
  </data>
  <data name="Description_LabFreezer" xml:space="preserve">
    <value>A freezer to keep your consumables cool and organized.</value>
  </data>
  <data name="DisplayName_Block_LabFreezer" xml:space="preserve">
    <value>Lab Freezer</value>
  </data>
  <data name="ContainerDropSystemContainerCantSpawn" xml:space="preserve">
    <value>Unable to spawn container</value>
  </data>
</root>
`;
// Note: Ensure the above string is a valid XML. Any characters like '&' must be properly escaped (e.g., &amp;).
// The provided XML snippet was already valid in this regard.