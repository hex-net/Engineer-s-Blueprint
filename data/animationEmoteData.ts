// data/animationEmoteData.ts

// Raw XML string for Animation and Emote definitions
export const animationEmoteRawXml: string[] = [
`
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <Animations>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="test_emote" />
            <AnimationModel>Models\\Characters\\Animations\\facepalm.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>

        <!-- FEMALE -->
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Idle_Female" />
            <DisplayName>Idle</DisplayName>
            <Description>Idle</Description>
            <Icon>Textures\\GUI\\Icons\\Fake.dds</Icon>
            <AnimationModel>Models\\Characters\\Animations\\Female\\idle.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body</InfluenceArea>
            <Public>false</Public>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Angry_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Angry.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Cold_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Cold.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="CheckWrist_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\IdleWrist.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="AssistEnd_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\AssistEnd.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="AssistCome_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\AssistLoop.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Dance_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Dance.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointAggressive_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointAgressive.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointBack_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointBack.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointDown_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointDown.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointForward_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointForward.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointLeft_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointLeft.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointRight_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\PointRight.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Charge_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Charge.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Yelling_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Yelling.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="GotHit_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\GotHit.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Whatever_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Whatever.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="FingerGuns_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\FingerGuns.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="DanceDisco1_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\DanceDisco1.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="DanceDisco2_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\DanceDisco2.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="LookingAround_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\LookAround.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Stretching_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Stretching.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="ComeHereBaby_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\ComeHereBaby.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="FYou_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\FYou.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Drunk_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Drunk.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Paper_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\RockPaperScissors_Paper.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Rock_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\RockPaperScissors_Rock.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Scissor_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\RockPaperScissors_Scissor.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Salute_Female" />
            <AnimationModel>Models\\Characters\\Animations\\Female\\Salute.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>

        <!-- MALE -->
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Angry" />
            <AnimationModel>Models\\Characters\\Animations\\Angry.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="AssistEnd" />
            <AnimationModel>Models\\Characters\\Animations\\AssistEnd.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="AssistCome" />
            <AnimationModel>Models\\Characters\\Animations\\AssistLoop.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Dance" />
            <AnimationModel>Models\\Characters\\Animations\\Dance.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Charge" />
            <AnimationModel>Models\\Characters\\Animations\\Charge.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="ComeHereBaby" />
            <AnimationModel>Models\\Characters\\Animations\\ComeHereBaby.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="DanceDisco1" />
            <AnimationModel>Models\\Characters\\Animations\\DanceDisco1.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="DanceDisco2" />
            <AnimationModel>Models\\Characters\\Animations\\DanceDisco2.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>false</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="LookingAround" />
            <AnimationModel>Models\\Characters\\Animations\\LookAround.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Stretching" />
            <AnimationModel>Models\\Characters\\Animations\\Stretching.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Whatever" />
            <AnimationModel>Models\\Characters\\Animations\\Whatever.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="FingerGuns" />
            <AnimationModel>Models\\Characters\\Animations\\FingerGuns.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Yelling" />
            <AnimationModel>Models\\Characters\\Animations\\Yelling.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="GotHit" />
            <AnimationModel>Models\\Characters\\Animations\\GotHit.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointAggressive" />
            <AnimationModel>Models\\Characters\\Animations\\PointAgressive.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointBack" />
            <AnimationModel>Models\\Characters\\Animations\\PointBack.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointDown" />
            <AnimationModel>Models\\Characters\\Animations\\PointDown.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointForward" />
            <AnimationModel>Models\\Characters\\Animations\\PointForward.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointLeft" />
            <AnimationModel>Models\\Characters\\Animations\\PointLeft.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="PointRight" />
            <AnimationModel>Models\\Characters\\Animations\\PointRight.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Spine RightHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Cold" />
            <AnimationModel>Models\\Characters\\Animations\\Cold.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="CheckWrist" />
            <AnimationModel>Models\\Characters\\Animations\\IdleWrist.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="FYou" />
            <AnimationModel>Models\\Characters\\Animations\\FYou.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Drunk" />
            <AnimationModel>Models\\Characters\\Animations\\Drunk.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>true</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Paper" />
            <AnimationModel>Models\\Characters\\Animations\\RockPaperScissors_Paper.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Rock" />
            <AnimationModel>Models\\Characters\\Animations\\RockPaperScissors_Rock.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="RPS_Scissor" />
            <AnimationModel>Models\\Characters\\Animations\\RockPaperScissors_Scissor.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
        <Animation>
            <Id Type="AnimationDefinition" Subtype="Salute" />
            <AnimationModel>Models\\Characters\\Animations\\Salute.mwm</AnimationModel>
            <ClipIndex>0</ClipIndex>
            <InfluenceArea>Body Spine RightHand LeftHand</InfluenceArea>
            <Public>false</Public>
            <AllowInCockpit>true</AllowInCockpit>
            <AllowWithWeapon>false</AllowWithWeapon>
        </Animation>
    </Animations>
    <Emotes>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="test_emote" />
            <DisplayName>DisplayName_TestEmote</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Facepalm.dds</Icon>
            <Icon>Textures\\GUI\\Controls\\checkbox_green_checked.png</Icon>
            <AnimationId Type="AnimationDefinition" Subtype="test_emote" />
            <Priority>0</Priority>
            <Public>false</Public>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteAngry" />
            <DisplayName>DisplayName_EmoteAngry</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Angry.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Angry" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Angry_Female" />
            </Override>
            <ChatCommand>/angry</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Angry</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Angry</ChatCommandDescription>
            <Priority>700</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteAssist" />
            <DisplayName>DisplayName_EmoteAssistStop</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\AssistStop.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="AssistEnd" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="AssistEnd_Female" />
            </Override>
            <ChatCommand>/assistEnd</ChatCommand>
            <ChatCommandName>ChatCommand_Help_AssistStop</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_AssistStop</ChatCommandDescription>
            <Priority>900</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteAssistCome" />
            <DisplayName>DisplayName_EmoteAssistCome</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Assist.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="AssistCome" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="AssistCome_Female" />
            </Override>
            <ChatCommand>/assistCome</ChatCommand>
            <ChatCommandName>ChatCommand_Help_AssistCome</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_AssistCome</ChatCommandDescription>
            <Priority>1000</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteDance" />
            <DisplayName>DisplayName_EmoteDance</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Dance.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Dance" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Dance_Female" />
            </Override>
            <ChatCommand>/dance</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Dance</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Dance</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteCharge" />
            <DisplayName>DisplayName_EmoteCharge</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Charge.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Charge" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Charge_Female" />
            </Override>
            <ChatCommand>/charge</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Charge</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Charge</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteComeHereBaby" />
            <DisplayName>DisplayName_EmoteComeHereBaby</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\ComeHereBaby.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="ComeHereBaby" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="ComeHereBaby_Female" />
            </Override>
            <ChatCommand>/comeherebaby</ChatCommand>
            <ChatCommandName>ChatCommand_Help_ComeHereBaby</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_ComeHereBaby</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteDanceDisco1" />
            <DisplayName>DisplayName_DanceDisco1</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\DanceDisco1.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="DanceDisco1" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="DanceDisco1_Female" />
            </Override>
            <ChatCommand>/dancedisco1</ChatCommand>
            <ChatCommandName>ChatCommand_Help_DanceDisco1</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_DanceDisco1</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteDanceDisco2" />
            <DisplayName>DisplayName_DanceDisco2</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\DanceDisco2.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="DanceDisco2" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="DanceDisco2_Female" />
            </Override>
            <ChatCommand>/dancedisco2</ChatCommand>
            <ChatCommandName>ChatCommand_Help_DanceDisco2</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_DanceDisco2</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteLookingAround" />
            <DisplayName>DisplayName_LookingAround</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\LookingAround.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="LookingAround" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="LookingAround_Female" />
            </Override>
            <ChatCommand>/lookingaround</ChatCommand>
            <ChatCommandName>ChatCommand_Help_LookingAround</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_LookingAround</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteStretching" />
            <DisplayName>DisplayName_Stretching</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Stretching.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Stretching" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Stretching_Female" />
            </Override>
            <ChatCommand>/stretching</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Stretching</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Stretching</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteWhatever" />
            <DisplayName>DisplayName_Whatever</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Whatever.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Whatever" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Whatever_Female" />
            </Override>
            <ChatCommand>/whatever</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Whatever</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Whatever</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteFingerGuns" />
            <DisplayName>DisplayName_FingerGuns</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\FingerGuns.dds</Icon>
            <DLC>Warfare1</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="FingerGuns" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="FingerGuns_Female" />
            </Override>
            <ChatCommand>/fingerGuns</ChatCommand>
            <ChatCommandName>ChatCommand_Help_FingerGuns</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_FingerGuns</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteYelling" />
            <DisplayName>DisplayName_Yelling</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Yelling.dds</Icon>
            <DLC>SparksOfTheFuture</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Yelling" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Yelling_Female" />
            </Override>
            <ChatCommand>/yelling</ChatCommand>
            <ChatCommandName>ChatCommand_Help_yelling</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_yelling</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteGotHit" />
            <DisplayName>DisplayName_GotHit</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\GotHit.dds</Icon>
            <DLC>Warfare1</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="GotHit" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="GotHit_Female" />
            </Override>
            <ChatCommand>/gotHit</ChatCommand>
            <ChatCommandName>ChatCommand_Help_GotHit</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_GotHit</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointAggressive" />
            <DisplayName>DisplayName_EmotePointAggressive</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointAggressive.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointAggressive" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointAggressive_Female" />
            </Override>
            <ChatCommand>/pointAggressive</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointAggressive</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointAggressive</ChatCommandDescription>
            <Priority>100</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointBack" />
            <DisplayName>DisplayName_EmotePointBack</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointBack.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointBack" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointBack_Female" />
            </Override>
            <ChatCommand>/pointBack</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointBack</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointBack</ChatCommandDescription>
            <Priority>200</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointDown" />
            <DisplayName>DisplayName_EmotePointDown</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointDown.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointDown" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointDown_Female" />
            </Override>
            <ChatCommand>/pointDown</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointDown</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointDown</ChatCommandDescription>
            <Priority>500</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointForward" />
            <DisplayName>DisplayName_EmotePointForward</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointForward.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointForward" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointForward_Female" />
            </Override>
            <ChatCommand>/pointForward</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointForward</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointForward</ChatCommandDescription>
            <Priority>600</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointLeft" />
            <DisplayName>DisplayName_EmotePointLeft</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointLeft.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointLeft" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointLeft_Female" />
            </Override>
            <ChatCommand>/pointLeft</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointLeft</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointLeft</ChatCommandDescription>
            <Priority>400</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmotePointRight" />
            <DisplayName>DisplayName_EmotePointRight</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\PointRight.dds</Icon>
            <DLC>StylePack</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="PointRight" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="PointRight_Female" />
            </Override>
            <ChatCommand>/pointRight</ChatCommand>
            <ChatCommandName>ChatCommand_Help_PointRight</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_PointRight</ChatCommandDescription>
            <Priority>300</Priority>
            <Public>true</Public>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteCold" />
            <DisplayName>DisplayName_EmoteCold</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Cold.dds</Icon>
            <DLC>Frostbite</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Cold" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Cold_Female" />
            </Override>
            <ChatCommand>/cold</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Cold</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Cold</ChatCommandDescription>
            <Priority>700</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteCheckWrist" />
            <DisplayName>DisplayName_EmoteCheckWrist</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Wrist.DDS</Icon>
            <DLC>Frostbite</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="CheckWrist" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="CheckWrist_Female" />
            </Override>
            <ChatCommand>/checkwrist</ChatCommand>
            <ChatCommandName>ChatCommand_Help_CheckWrist</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_CheckWrist</ChatCommandDescription>
            <Priority>700</Priority>
            <Public>true</Public>
        </Definition>

        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteGoClangYourself" />
            <DisplayName>DisplayName_EmoteFYou</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\FYou.dds</Icon>
            <DLC>ScrapRace</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="FYou" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="FYou_Female" />
            </Override>
            <ChatCommand>/clangyourself</ChatCommand>
            <ChatCommandName>ChatCommand_Help_FYou</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_FYou</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteDrunk" />
            <DisplayName>DisplayName_EmoteDrunk</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Drunk.dds</Icon>
            <DLC>ScrapRace</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Drunk" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Drunk_Female" />
            </Override>
            <ChatCommand>/drunk</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Drunk</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Drunk</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteRPS_Paper" />
            <DisplayName>DisplayName_EmoteRPS_Paper</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\RockPaperScissor_Paper.dds</Icon>
            <DLC>Warfare2</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="RPS_Paper" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="RPS_Paper_Female" />
            </Override>
            <ChatCommand>/paper</ChatCommand>
            <ChatCommandName>ChatCommand_Help_RPS</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_RPS_Paper</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>false</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteRPS_Rock" />
            <DisplayName>DisplayName_EmoteRPS_Rock</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\RockPaperScissor_Rock.dds</Icon>
            <DLC>Warfare2</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="RPS_Rock" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="RPS_Rock_Female" />
            </Override>
            <ChatCommand>/rock</ChatCommand>
            <ChatCommandName>ChatCommand_Help_RPS</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_RPS_Rock</ChatCommandDescription>
            <Priority>1400</Priority>
            <Public>false</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteRPS_Scissor" />
            <DisplayName>DisplayName_EmoteRPS_Scissors</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\RockPaperScissor_Scissor.dds</Icon>
            <DLC>Warfare2</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="RPS_Scissor" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="RPS_Scissor_Female" />
            </Override>
            <ChatCommand>/scissor</ChatCommand>
            <ChatCommandName>ChatCommand_Help_RPS</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_RPS_Scissors</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>false</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteRPS" />
            <DisplayName>DisplayName_EmoteRPS</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\RockPaperScissor_Random.dds</Icon>
            <DLC>Warfare2</DLC>
            <!-- <AnimationId Type="AnimationDefinition" Subtype="RPS" /> No primary animation, only random ones below -->
            <Animations>
                <Animation>
                    <Probability>0.33</Probability>
                    <AnimationId Type="EmoteDefinition" Subtype="EmoteRPS_Paper" />
                </Animation>
                <Animation>
                    <Probability>0.33</Probability>
                    <AnimationId Type="EmoteDefinition" Subtype="EmoteRPS_Rock" />
                </Animation>
                <Animation>
                    <Probability>0.33</Probability>
                    <AnimationId Type="EmoteDefinition" Subtype="EmoteRPS_Scissor" />
                </Animation>
            </Animations>
            <ChatCommand>/rps</ChatCommand>
            <ChatCommandName>ChatCommand_Help_RPS</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_RPS</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
        <Definition xsi:type="MyObjectBuilder_EmoteDefinition">
            <Id Type="EmoteDefinition" Subtype="EmoteSalute" />
            <DisplayName>DisplayName_Salute</DisplayName>
            <Icon>Textures\\GUI\\Icons\\Animations\\Salute.dds</Icon>
            <DLC>Warfare2</DLC>
            <AnimationId Type="AnimationDefinition" Subtype="Salute" />
            <Override>
                <CharacterId Type="Character" Subtype="Default_Astronaut_Female"/>
                <AnimationId Type="AnimationDefinition" Subtype="Salute_Female" />
            </Override>
            <ChatCommand>/Salute</ChatCommand>
            <ChatCommandName>ChatCommand_Help_Salute</ChatCommandName>
            <ChatCommandDescription>ChatCommand_HelpSimple_Salute</ChatCommandDescription>
            <Priority>800</Priority>
            <Public>true</Public>
        </Definition>
    </Emotes>
</Definitions>
`
];
