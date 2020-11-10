import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

// MUI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia'; (Dont need images)

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    content: {
        padding: 25
    }
}

export class Ship extends Component {
    render() {
        const { classes, ship: {
                    name,
                    formerNames,
                    callSign,
                    shipType,
                    owner,
                    manager,
                    charterer,
                    agent,
                    lastSpecialSurvey,
                    inspectionDate,
                    inspectionPort,
                    charterType,
                    cargoType,
                    certificatesValid,
                    qualificationsValid,
                    IMONumber,
                    officialNumber,
                    flag,
                    GRT,
                    summerDWT,
                    yearOfBuild,
                    classSociety,
                    serviceType,
                    subStandard,
                    shipDetained,
                    timeDelayed,
                    deficiencies,
                    //Block 2
                    // All Ships
                    internationalTonnage,
                    internationalLoadLine,
                    internationalLoadLineExemption,
                    intactStabilityBooklet,
                    damageControlPlans,
                    minimumSafeManning,
                    fireSafetyTrainingManual,
                    fireControlPlan,
                    onBoardTrainingAndDrills,
                    fireSafetyOperational,
                    mastersOfficersOrRatings,
                    internationalOilPollutionPrevention,
                    oilRecordBook,
                    shipboardOilPolutionEmergencyPlan,
                    internationalSewagePollutionPrevention,
                    garbageMangementPlan,
                    garbageRecordBook,
                    voyageDataRecorder,
                    cargoSecuringManual,
                    documentOfCompliance,
                    safetyManagement,
                    internationalShipSecurity,
                    shipSecurityPlanAndRecords,
                    continuousSynopsisRecord,
                    // Passenger Ships
                    passengerShipSafety,
                    exemptionPassenger,
                    specialTradePassengerShipSafety,
                    SpecialTradePassengerShipSpace,
                    searchAndRescueCoOpPlan,
                    listOfOperationalLimitations,
                    decisionSupportSystemForMasters,
                    //Cargo Ships
                    cargoShipSafetyConstruction,
                    cargoShipSafetyEquipment,
                    cargoShipSafetyRadio,
                    cargoShipSafety,
                    exemptionCargo,
                    grainCarriage,
                    liabilitySecurityForOilPollution,
                    enhancedSurveyReportFile,
                    ODMCSystem,
                    cargoInfo,
                    bulkCarrierBooklet,
                    dedicatedCleanBallastTank,
                    COWManual,
                    CASComplianceStatementAndFinalReportAndReviewRecord,
                    HBLOperationalManual,
                    ODMCManual,
                    subdivisionAndStabilityInfo,
                    //Ships with Noxious liquid chemical substances in bulk
                    NLS,
                    cargoRecordBook,
                    PAndAManual,
                    marinePollutionEmergencyPlan,
                    //Chemical Tankers
                    dangerousChemicalsInBulk,
                    dangerousChemicalsInBulkInternational,
                    //Gas Carriers
                    carriageOfLiquefiedGasesInBulk,
                    carriageOfLiquefiedGasesInBulkInternational,
                    //High Speed Craft
                    highSpeedCraftSafety,
                    highSpeedCraftPermit,
                    //Ship Carrying Dangerous Goods
                    dangerousGoodsDoc,
                    //Ship Carrying packaged dangerous goods
                    dangerousGoodsStowage,
                    //Ship carrying INF cargo
                    INFCarriage,
                    //Nuclear Ships
                    nuclearShipSafety,
                    //Not mandatory
                    specialPurposeShipSafety,
                    offshoreSupportFitness,
                    divingSystemSafety,
                    dynamicallySupportedCraft,
                    mobileOffshoreDrillingUnitSafety,
                    WIGCraftSafety,
                    noiseSurveyReport,
                    //CHECKLIST
                    //Area 1
                    hullCondition,
                    tankLeakageEvidence,
                    hullMarkings,
                    accommodationLadderSideNetting,
                    //Area 2
                    shipsCertificates,
                    ISMDPD,
                    ISMMADC,
                    ISMDEP,
                    //Area 3
                    voyageCharts,
                    ARPARadar,
                    appropriatePublications,
                    compassDeviationRecords,
                    echoSounder,
                    fireDetectionPanel,
                    navigationLightPanel,
                    //Area 4
                    MSIReception,
                    OARCRadiotelephony,
                    OARCDSC,
                    antennaInspection,
                    batteryInspection,
                    EPIRB,
                    SART,
                    portableVHF,
                    //Area 5
                    mastsAttachments,
                    ventClosures,
                    standardCompass,
                    //Area 6
                    accommodationVentClosures,
                    batteryRoomVents,
                    batteryStowageCondition,
                    weatherDoorsFrames,
                    hydrantsHosesNozzlesEX,
                    engineRoomDampers,
                    externalAccommodationStairs,
                    emergencyPowerSource,
                    funnelFlapOperation,
                    manOverboardLightSmoke,
                    fireControlPlanOA,
                    lifebuoyLinesLights,
                    //Area 7
                    boatPreparationOversideLights,
                    stowageRelease,
                    launchingInstructions,
                    embarkationLadder,
                    //Area 8
                    launchingArrangments,
                    lifeboatRescueBoatHullAttachments,
                    lifeboatRescueBoatEquipment,
                    lifeboatRescueBoatEngine,
                    //Area 9
                    loadLineClosingDevices,
                    crewProtection,
                    deskStructuresMachinery,
                    pilotBoardingArrangements,
                    //Area 10
                    operatingInstructions,
                    overallConditionFF,
                    //Area 11
                    emergencyFirePump,
                    engineRoomFireMainIsolatingValve,
                    fireMainCondition,
                    //Area 12
                    changeOverInstructions,
                    emergencySteering,
                    overallCondition,
                    communicationsWheelhouse,
                    //Area 13
                    hydrantsHosesNozzlesER,
                    quickClosingValves,
                    engineRoomDoors,
                    fireAppliances,
                    emergencyEscapeRoutes,
                    electricalSafety,
                    bilgesTankTopsCleanliness,
                    selfClosingCocksValves,
                    //Area 14
                    oilyWaterSeparator,
                    PPMAlarm,
                    garbageArrangements,
                    //Area 15
                    cleanlinessHygiene,
                    sanitaryArrangements,
                    messRecFacilities,
                    foodStorage,
                    fireFightingArrangements,
                    overallConditionsAC,
                    fireDampers,
                    //Area 16
                    firemansOutfit,
                    remoteStopsFuelShutoffs,
                    internationalShoreConnection,
                    fixedFireSuppSystemControls,
                    //Area 17 Passneger Ships
                    emergencyPlans,
                    zoneIsolationOperation,
                    sprinklerAutoPumpCutIn,
                    sprinklerStationAlarms,
                    lifeboats,
                    passCabinEmergencyInfo,
                    evacDirectionSigns,
                    emergencyLighting,
                    watertightDoorsLocalRemote,
                    rescueBoat,
                    emergencyDrillsDemo,
                    //Area 18
                    gasSamplingPointsAndEE,
                    enhancedSurveyRecords,
                    topsideBallastTank,
                    //Area 19
                    shellDoorsLockingIndicators,
                    shellDoorsSealingArrangements,
                    cargoDeckDrainage,
                    rampBulwarksGuardRails,
                    internalWaterBarriers,
                    lowerDeckSealing,
                    cargoSecuringArrangements,
                    fireFightingArrangementsRoRos,
                    //Area 20
                    IGSystem
        } } = this.props;
        const layout = (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h3">Ship Info</Typography>
                    <Typography variant="body1">Name: {name}</Typography>
                    <Typography variant="body1">Former Names: {formerNames}</Typography>
                    <Typography variant="body1">Call Sign: {callSign}</Typography>
                    <Typography variant="body1">Ship Type: {shipType}</Typography>
                    <Typography variant="body1">Owner: {owner}</Typography>
                    <Typography variant="body1">Manager: {manager}</Typography>
                    <Typography variant="body1">Charterer: {charterer}</Typography>
                    <Typography variant="body1">Agent: {agent}</Typography>
                    <Typography variant="body1">Last Special Survey: {lastSpecialSurvey}</Typography>
                    <Typography variant="body1">Inspection Date: {inspectionDate}</Typography>
                    <Typography variant="body1">Inspection Port: {inspectionPort}</Typography>
                    <Typography variant="body1">Charter Type: {charterType}</Typography>
                    <Typography variant="body1">Cargo Type: {cargoType}</Typography>
                    <Typography variant="body1">Certificates Valid: {certificatesValid}</Typography>
                    <Typography variant="body1">Qualifications Valid: {qualificationsValid}</Typography>
                    <Typography variant="body1">IMO Number: {IMONumber}</Typography>
                    <Typography variant="body1">Official Number: {officialNumber}</Typography>
                    <Typography variant="body1">Flag: {flag}</Typography>
                    <Typography variant="body1">GRT: {GRT}</Typography>
                    <Typography variant="body1">Summer DWT: {summerDWT}</Typography>
                    <Typography variant="body1">Year Of Build: {yearOfBuild}</Typography>
                    <Typography variant="body1">Class Society: {classSociety}</Typography>
                    <Typography variant="body1">Service Type: {serviceType}</Typography>
                    <Typography variant="body1">Substandard: {subStandard}</Typography>
                    <Typography variant="body1">Ship Detained: {shipDetained}</Typography>
                    <Typography variant="body1">Time Delayed: {timeDelayed}</Typography>
                    <Typography variant="body1">Deficiencies: {deficiencies}</Typography>
                </CardContent>

                <CardContent className={classes.content}>
                    <Typography variant="h3">Certificates</Typography>
                    
                    <Typography variant="h5">All Ships</Typography>
                    <Typography variant="body1">{internationalTonnage}</Typography>
                    <Typography variant="body1">{internationalLoadLine}</Typography>
                    <Typography variant="body1">{internationalLoadLineExemption}</Typography>
                    <Typography variant="body1">{intactStabilityBooklet}</Typography>
                    <Typography variant="body1">{damageControlPlans}</Typography>
                    <Typography variant="body1">{minimumSafeManning}</Typography>
                    <Typography variant="body1">{fireSafetyTrainingManual}</Typography>
                    <Typography variant="body1">{fireControlPlan}</Typography>
                    <Typography variant="body1">{onBoardTrainingAndDrills}</Typography>
                    <Typography variant="body1">{fireSafetyOperational}</Typography>
                    <Typography variant="body1">{mastersOfficersOrRatings}</Typography>
                    <Typography variant="body1">{internationalOilPollutionPrevention}</Typography>
                    <Typography variant="body1">{oilRecordBook}</Typography>
                    <Typography variant="body1">{shipboardOilPolutionEmergencyPlan}</Typography>
                    <Typography variant="body1">{internationalSewagePollutionPrevention}</Typography>
                    <Typography variant="body1">{garbageMangementPlan}</Typography>
                    <Typography variant="body1">{garbageRecordBook}</Typography>
                    <Typography variant="body1">{voyageDataRecorder}</Typography>
                    <Typography variant="body1">{cargoSecuringManual}</Typography>
                    <Typography variant="body1">{documentOfCompliance}</Typography>
                    <Typography variant="body1">{safetyManagement}</Typography>
                    <Typography variant="body1">{internationalShipSecurity}</Typography>
                    <Typography variant="body1">{shipSecurityPlanAndRecords}</Typography>
                    <Typography variant="body1">{continuousSynopsisRecord}</Typography>
                    
                    <Typography variant="h5">Passenger Ships</Typography>
                    <Typography variant="body1">{passengerShipSafety}</Typography>
                    <Typography variant="body1">{exemptionPassenger}</Typography>
                    <Typography variant="body1">{specialTradePassengerShipSafety}</Typography>
                    <Typography variant="body1">{SpecialTradePassengerShipSpace}</Typography>
                    <Typography variant="body1">{searchAndRescueCoOpPlan}</Typography>
                    <Typography variant="body1">{listOfOperationalLimitations}</Typography>
                    <Typography variant="body1">{decisionSupportSystemForMasters}</Typography>

                    <Typography variant="h5">Cargo Ships</Typography>
                    <Typography variant="body1">{cargoShipSafetyConstruction}</Typography>
                    <Typography variant="body1">{cargoShipSafetyEquipment}</Typography>
                    <Typography variant="body1">{cargoShipSafetyRadio}</Typography>
                    <Typography variant="body1">{cargoShipSafety}</Typography>
                    <Typography variant="body1">{exemptionCargo}</Typography>
                    <Typography variant="body1">{grainCarriage}</Typography>
                    <Typography variant="body1">{liabilitySecurityForOilPollution}</Typography>
                    <Typography variant="body1">{enhancedSurveyReportFile}</Typography>
                    <Typography variant="body1">{ODMCSystem}</Typography>
                    <Typography variant="body1">{cargoInfo}</Typography>
                    <Typography variant="body1">{bulkCarrierBooklet}</Typography>
                    <Typography variant="body1">{dedicatedCleanBallastTank}</Typography>
                    <Typography variant="body1">{COWManual}</Typography>
                    <Typography variant="body1">{CASComplianceStatementAndFinalReportAndReviewRecord}</Typography>
                    <Typography variant="body1">{HBLOperationalManual}</Typography>
                    <Typography variant="body1">{ODMCManual}</Typography>
                    <Typography variant="body1">{subdivisionAndStabilityInfo}</Typography>
                    
                    <Typography variant="h5">Ships with Noxious Liquid Chemical Substances in Bulk</Typography>
                    <Typography variant="body1">{NLS}</Typography>
                    <Typography variant="body1">{cargoRecordBook}</Typography>
                    <Typography variant="body1">{PAndAManual}</Typography>
                    <Typography variant="body1">{marinePollutionEmergencyPlan}</Typography>
        
                    <Typography variant="h5">Chemical Tankers</Typography>
                    <Typography variant="body1">{dangerousChemicalsInBulk}</Typography>
                    <Typography variant="body1">{dangerousChemicalsInBulkInternational}</Typography>
                    
                    <Typography variant="h5">Gas Carriers</Typography>
                    <Typography variant="body1">{carriageOfLiquefiedGasesInBulk}</Typography>
                    <Typography variant="body1">{carriageOfLiquefiedGasesInBulkInternational}</Typography>
                    
                    <Typography variant="h5">High Speed Craft</Typography>
                    <Typography variant="body1">{highSpeedCraftSafety}</Typography>
                    <Typography variant="body1">{highSpeedCraftPermit}</Typography>
                    
                    <Typography variant="h5">Ship Carrying Dangerous Goods</Typography>
                    <Typography variant="body1">{dangerousGoodsDoc}</Typography>
                    
                    <Typography variant="h5">Ship Carrying packaged dangerous goods</Typography>
                    <Typography variant="body1">{dangerousGoodsStowage}</Typography>
                    
                    <Typography variant="h5">Ship carrying INF cargo</Typography>
                    <Typography variant="body1">{INFCarriage}</Typography>
                    
                    <Typography variant="h5">Nuclear Ships</Typography>
                    <Typography variant="body1">{nuclearShipSafety}</Typography>
                    
                    <Typography variant="h5">Not Mandatory</Typography>
                    <Typography variant="body1">{specialPurposeShipSafety}</Typography>
                    <Typography variant="body1">{offshoreSupportFitness}</Typography>
                    <Typography variant="body1">{divingSystemSafety}</Typography>
                    <Typography variant="body1">{dynamicallySupportedCraft}</Typography>
                    <Typography variant="body1">{mobileOffshoreDrillingUnitSafety}</Typography>
                    <Typography variant="body1">{WIGCraftSafety}</Typography>
                    <Typography variant="body1">{noiseSurveyReport}</Typography>
                </CardContent>
                <CardContent className={classes.content}>
                    <Typography variant="h3">Checklist</Typography>
                    
                    <Typography variant="h5">Area 1</Typography>
                    <Typography variant="body1">{hullCondition}</Typography>
                    <Typography variant="body1">{tankLeakageEvidence}</Typography>
                    <Typography variant="body1">{hullMarkings}</Typography>
                    <Typography variant="body1">{accommodationLadderSideNetting}</Typography>
                    
                    <Typography variant="h5">Area 2</Typography>
                    <Typography variant="body1">{shipsCertificates}</Typography>
                    <Typography variant="body1">{ISMDPD}</Typography>
                    <Typography variant="body1">{ISMMADC}</Typography>
                    <Typography variant="body1">{ISMDEP}</Typography>
                    
                    <Typography variant="h5">Area 3</Typography>
                    <Typography variant="body1">{voyageCharts}</Typography>
                    <Typography variant="body1">{ARPARadar}</Typography>
                    <Typography variant="body1">{appropriatePublications}</Typography>
                    <Typography variant="body1">{compassDeviationRecords}</Typography>
                    <Typography variant="body1">{echoSounder}</Typography>
                    <Typography variant="body1">{fireDetectionPanel}</Typography>
                    <Typography variant="body1">{navigationLightPanel}</Typography>

                    <Typography variant="h5">Area 4</Typography>
                    <Typography variant="body1">{MSIReception}</Typography>
                    <Typography variant="body1">{OARCRadiotelephony}</Typography>
                    <Typography variant="body1">{OARCDSC}</Typography>
                    <Typography variant="body1">{antennaInspection}</Typography>
                    <Typography variant="body1">{batteryInspection}</Typography>
                    <Typography variant="body1">{EPIRB}</Typography>
                    <Typography variant="body1">{SART}</Typography>
                    <Typography variant="body1">{portableVHF}</Typography>

                    <Typography variant="h5">Area 5</Typography>
                    <Typography variant="body1">{mastsAttachments}</Typography>
                    <Typography variant="body1">{ventClosures}</Typography>
                    <Typography variant="body1">{standardCompass}</Typography>

                    <Typography variant="h5">Area 6</Typography>
                    <Typography variant="body1">{accommodationVentClosures}</Typography>
                    <Typography variant="body1">{batteryRoomVents}</Typography>
                    <Typography variant="body1">{batteryStowageCondition}</Typography>
                    <Typography variant="body1">{weatherDoorsFrames}</Typography>
                    <Typography variant="body1">{hydrantsHosesNozzlesEX}</Typography>
                    <Typography variant="body1">{engineRoomDampers}</Typography>
                    <Typography variant="body1">{externalAccommodationStairs}</Typography>
                    <Typography variant="body1">{emergencyPowerSource}</Typography>
                    <Typography variant="body1">{funnelFlapOperation}</Typography>
                    <Typography variant="body1">{manOverboardLightSmoke}</Typography>
                    <Typography variant="body1">{fireControlPlanOA}</Typography>
                    <Typography variant="body1">{lifebuoyLinesLights}</Typography>

                    <Typography variant="h5">Area 7</Typography>
                    <Typography variant="body1">{boatPreparationOversideLights}</Typography>
                    <Typography variant="body1">{stowageRelease}</Typography>
                    <Typography variant="body1">{launchingInstructions}</Typography>
                    <Typography variant="body1">{embarkationLadder}</Typography>

                    <Typography variant="h5">Area 8</Typography>
                    <Typography variant="body1">{launchingArrangments}</Typography>
                    <Typography variant="body1">{lifeboatRescueBoatHullAttachments}</Typography>
                    <Typography variant="body1">{lifeboatRescueBoatEquipment}</Typography>
                    <Typography variant="body1">{lifeboatRescueBoatEngine}</Typography>
                    
                    <Typography variant="h5">Area 9</Typography>
                    <Typography variant="body1">{loadLineClosingDevices}</Typography>
                    <Typography variant="body1">{crewProtection}</Typography>
                    <Typography variant="body1">{deskStructuresMachinery}</Typography>
                    <Typography variant="body1">{pilotBoardingArrangements}</Typography>
                    
                    <Typography variant="h5">Area 10</Typography>
                    <Typography variant="body1">{operatingInstructions}</Typography>
                    <Typography variant="body1">{overallConditionFF}</Typography>
                    
                    <Typography variant="h5">Area 11</Typography>
                    <Typography variant="body1">{emergencyFirePump}</Typography>
                    <Typography variant="body1">{engineRoomFireMainIsolatingValve}</Typography>
                    <Typography variant="body1">{fireMainCondition}</Typography>
                    
                    <Typography variant="h5">Area 12</Typography>
                    <Typography variant="body1">{changeOverInstructions}</Typography>
                    <Typography variant="body1">{emergencySteering}</Typography>
                    <Typography variant="body1">{overallCondition}</Typography>
                    <Typography variant="body1">{communicationsWheelhouse}</Typography>

                    <Typography variant="h5">Area 13</Typography>
                    <Typography variant="body1">{hydrantsHosesNozzlesER}</Typography>
                    <Typography variant="body1">{quickClosingValves}</Typography>
                    <Typography variant="body1">{engineRoomDoors}</Typography>
                    <Typography variant="body1">{fireAppliances}</Typography>
                    <Typography variant="body1">{emergencyEscapeRoutes}</Typography>
                    <Typography variant="body1">{electricalSafety}</Typography>
                    <Typography variant="body1">{bilgesTankTopsCleanliness}</Typography>
                    <Typography variant="body1">{selfClosingCocksValves}</Typography>
                    <Typography variant="h5">Area 14</Typography>
                    <Typography variant="body1">{oilyWaterSeparator}</Typography>
                    <Typography variant="body1">{PPMAlarm}</Typography>
                    <Typography variant="body1">{garbageArrangements}</Typography>
                    
                    <Typography variant="h5">Area 15</Typography>
                    <Typography variant="body1">{cleanlinessHygiene}</Typography>
                    <Typography variant="body1">{sanitaryArrangements}</Typography>
                    <Typography variant="body1">{messRecFacilities}</Typography>
                    <Typography variant="body1">{foodStorage}</Typography>
                    <Typography variant="body1">{fireFightingArrangements}</Typography>
                    <Typography variant="body1">{overallConditionsAC}</Typography>
                    <Typography variant="body1">{fireDampers}</Typography>
                    
                    <Typography variant="h5">Area 16</Typography>
                    <Typography variant="body1">{firemansOutfit}</Typography>
                    <Typography variant="body1">{remoteStopsFuelShutoffs}</Typography>
                    <Typography variant="body1">{internationalShoreConnection}</Typography>
                    <Typography variant="body1">{fixedFireSuppSystemControls}</Typography>
                    
                    <Typography variant="h5">Area 17</Typography>
                    <Typography variant="body1">{emergencyPlans}</Typography>
                    <Typography variant="body1">{zoneIsolationOperation}</Typography>
                    <Typography variant="body1">{sprinklerAutoPumpCutIn}</Typography>
                    <Typography variant="body1">{sprinklerStationAlarms}</Typography>
                    <Typography variant="body1">{lifeboats}</Typography>
                    <Typography variant="body1">{passCabinEmergencyInfo}</Typography>
                    <Typography variant="body1">{evacDirectionSigns}</Typography>
                    <Typography variant="body1">{emergencyLighting}</Typography>
                    <Typography variant="body1">{watertightDoorsLocalRemote}</Typography>
                    <Typography variant="body1">{rescueBoat}</Typography>
                    <Typography variant="body1">{emergencyDrillsDemo}</Typography>
                    
                    <Typography variant="h5">Area 18</Typography>
                    <Typography variant="body1">{gasSamplingPointsAndEE}</Typography>
                    <Typography variant="body1">{enhancedSurveyRecords}</Typography>
                    <Typography variant="body1">{topsideBallastTank}</Typography>
                    
                    <Typography variant="h5">Area 19</Typography>
                    <Typography variant="body1">{shellDoorsLockingIndicators}</Typography>
                    <Typography variant="body1">{shellDoorsSealingArrangements}</Typography>
                    <Typography variant="body1">{cargoDeckDrainage}</Typography>
                    <Typography variant="body1">{rampBulwarksGuardRails}</Typography>
                    <Typography variant="body1">{internalWaterBarriers}</Typography>
                    <Typography variant="body1">{lowerDeckSealing}</Typography>
                    <Typography variant="body1">{cargoSecuringArrangements}</Typography>
                    <Typography variant="body1">{fireFightingArrangementsRoRos}</Typography>
                    
                    <Typography variant="h5">Area 20</Typography>
                    <Typography variant="body1">{IGSystem}</Typography>
                </CardContent>
            </Card>
        </div>
        )
        return layout;
    }
}

export default withStyles(styles)(Ship);
