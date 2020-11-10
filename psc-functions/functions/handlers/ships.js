
const { db } = require('../util/admin');

exports.getAllShips = (req, res) => {
    db
        .collection('Ships')
        .orderBy('initializedAt', 'desc')
        .get()
        .then((data) => {
            let Ships = [];
            data.forEach((doc) => {
                Ships.push({
                    shipId: doc.id,

                    //Block 1
                    name: doc.data().name,
                    formerNames: doc.data().formerNames,
                    callSign: doc.data().callSign,
                    shipType: doc.data().shipType,
                    owner: doc.data().owner,
                    manager: doc.data().manager,
                    charterer: doc.data().charterer,
                    agent: doc.data().agent,
                    lastSpecialSurvey: doc.data().lastSpecialSurvey,
                    inspectionDate: doc.data().inspectionDate,
                    inspectionPort: doc.data().inspectionPort,
                    charterType: doc.data().charterType,
                    cargoType: doc.data().cargoType,
                    certificatesValid: doc.data().certificatesValid,
                    qualificationsValid: doc.data().qualificationsValid,
                    IMONumber: doc.data().IMONumber,
                    officialNumber: doc.data().officialNumber,
                    flag: doc.data().flag,
                    GRT: doc.data().GRT,
                    summerDWT: doc.data().summerDWT,
                    yearOfBuild: doc.data().yearOfBuild,
                    classSociety: doc.data().classSociety,
                    serviceType: doc.data().serviceType,
                    subStandard: doc.data().subStandard,
                    shipDetained: doc.data().shipDetained,
                    timeDelayed: doc.data().timeDelayed,
                    deficiencies: doc.data().deficiencies,
                    
                    //Block 2
                    // All Ships
                    internationalTonnage: doc.data().internationalTonnage,
                    internationalLoadLine: doc.data().internationalLoadLine,
                    internationalLoadLineExemption: doc.data().internationalLoadLineExemption,
                    intactStabilityBooklet: doc.data().intactStabilityBooklet,
                    damageControlPlans: doc.data().damageControlPlans,
                    minimumSafeManning: doc.data().minimumSafeManning,
                    fireSafetyTrainingManual: doc.data().fireSafetyTrainingManual,
                    fireControlPlan: doc.data().fireControlPlan,
                    onBoardTrainingAndDrills: doc.data().onBoardTrainingAndDrills,
                    fireSafetyOperational: doc.data().fireSafetyOperational,
                    mastersOfficersOrRatings: doc.data().mastersOfficersOrRatings,
                    internationalOilPollutionPrevention: doc.data().internationalOilPollutionPrevention,
                    oilRecordBook: doc.data().oilRecordBook,
                    shipboardOilPolutionEmergencyPlan: doc.data().shipboardOilPolutionEmergencyPlan,
                    internationalSewagePollutionPrevention: doc.data().internationalSewagePollutionPrevention,
                    garbageMangementPlan: doc.data().garbageMangementPlan,
                    garbageRecordBook: doc.data().garbageRecordBook,
                    voyageDataRecorder: doc.data().voyageDataRecorder,
                    cargoSecuringManual: doc.data().cargoSecuringManual,
                    documentOfCompliance: doc.data().documentOfCompliance,
                    safetyManagement: doc.data().safetyManagement,
                    internationalShipSecurity: doc.data().internationalShipSecurity,
                    shipSecurityPlanAndRecords: doc.data().shipSecurityPlanAndRecords,
                    continuousSynopsisRecord: doc.data().continuousSynopsisRecord,

                    // Passenger Ships
                    passengerShipSafety: doc.data().passengerShipSafety,
                    exemptionPassenger: doc.data().exemptionPassenger,
                    specialTradePassengerShipSafety: doc.data().specialTradePassengerShipSafety,
                    SpecialTradePassengerShipSpace: doc.data().SpecialTradePassengerShipSpace,
                    searchAndRescueCoOpPlan: doc.data().searchAndRescueCoOpPlan,
                    listOfOperationalLimitations: doc.data().listOfOperationalLimitations,
                    decisionSupportSystemForMasters: doc.data().decisionSupportSystemForMasters,

                    //Cargo Ships
                    cargoShipSafetyConstruction: doc.data().cargoShipSafetyConstruction,
                    cargoShipSafetyEquipment: doc.data().cargoShipSafetyEquipment,
                    cargoShipSafetyRadio: doc.data().cargoShipSafetyRadio,
                    cargoShipSafety: doc.data().cargoShipSafety,
                    exemptionCargo: doc.data().exemptionCargo,
                    grainCarriage: doc.data().grainCarriage,
                    liabilitySecurityForOilPollution: doc.data().liabilitySecurityForOilPollution,
                    enhancedSurveyReportFile: doc.data().enhancedSurveyReportFile,
                    ODMCSystem: doc.data().ODMCSystem,
                    cargoInfo: doc.data().cargoInfo,
                    bulkCarrierBooklet: doc.data().bulkCarrierBooklet,
                    dedicatedCleanBallastTank: doc.data().dedicatedCleanBallastTank,
                    COWManual: doc.data().COWManual,
                    CASComplianceStatementAndFinalReportAndReviewRecord: doc.data().CASComplianceStatementAndFinalReportAndReviewRecord,
                    HBLOperationalManual: doc.data().HBLOperationalManual,
                    ODMCManual: doc.data().ODMCManual,
                    subdivisionAndStabilityInfo: doc.data().subdivisionAndStabilityInfo,

                    //Ships with Noxious liquid chemical substances in bulk
                    NLS: doc.data().NLS,
                    cargoRecordBook: doc.data().cargoRecordBook,
                    PAndAManual: doc.data().PAndAManual,
                    marinePollutionEmergencyPlan: doc.data().marinePollutionEmergencyPlan,

                    //Chemical Tankers
                    dangerousChemicalsInBulk: doc.data().dangerousChemicalsInBulk,
                    dangerousChemicalsInBulkInternational: doc.data().dangerousChemicalsInBulkInternational,

                    //Gas Carriers
                    carriageOfLiquefiedGasesInBulk: doc.data().carriageOfLiquefiedGasesInBulk,
                    carriageOfLiquefiedGasesInBulkInternational: doc.data().carriageOfLiquefiedGasesInBulkInternational,

                    //High Speed Craft
                    highSpeedCraftSafety: doc.data().highSpeedCraftSafety,
                    highSpeedCraftPermit: doc.data().highSpeedCraftPermit,

                    //Ship Carrying Dangerous Goods
                    dangerousGoodsDoc: doc.data().dangerousGoodsDoc,

                    //Ship Carrying packaged dangerous goods
                    dangerousGoodsStowage: doc.data().dangerousGoodsStowage,

                    //Ship carrying INF cargo
                    INFCarriage: doc.data().INFCarriage,

                    //Nuclear Ships
                    nuclearShipSafety: doc.data().nuclearShipSafety,

                    //Not mandatory
                    specialPurposeShipSafety: doc.data().specialPurposeShipSafety,
                    offshoreSupportFitness: doc.data().offshoreSupportFitness,
                    divingSystemSafety: doc.data().divingSystemSafety,
                    dynamicallySupportedCraft: doc.data().dynamicallySupportedCraft,
                    mobileOffshoreDrillingUnitSafety: doc.data().mobileOffshoreDrillingUnitSafety,
                    WIGCraftSafety: doc.data().WIGCraftSafety,
                    noiseSurveyReport: doc.data().noiseSurveyReport,


                    //CHECKLIST
                    //Area 1
                    hullCondition: doc.data().hullCondition,
                    tankLeakageEvidence: doc.data().tankLeakageEvidence,
                    hullMarkings: doc.data().hullMarkings,
                    accommodationLadderSideNetting: doc.data().accommodationLadderSideNetting,
                    //Area 2
                    shipsCertificates: doc.data().shipsCertificates,
                    ISMDPD: doc.data().ISMDPD,
                    ISMMADC: doc.data().ISMMADC,
                    ISMDEP: doc.data().ISMDEP,
                    //Area 3
                    voyageCharts: doc.data().voyageCharts,
                    ARPARadar: doc.data().ARPARadar,
                    appropriatePublications: doc.data().appropriatePublications,
                    compassDeviationRecords: doc.data().compassDeviationRecords,
                    echoSounder: doc.data().echoSounder,
                    fireDetectionPanel: doc.data().fireDetectionPanel,
                    navigationLightPanel: doc.data().navigationLightPanel,
                    //Area 4
                    MSIReception: doc.data().MSIReception,
                    OARCRadiotelephony: doc.data().OARCRadiotelephony,
                    OARCDSC: doc.data().OARCDSC,
                    antennaInspection: doc.data().antennaInspection,
                    batteryInspection: doc.data().batteryInspection,
                    EPIRB: doc.data().EPIRB,
                    SART: doc.data().SART,
                    portableVHF: doc.data().portableVHF,
                    //Area 5
                    mastsAttachments: doc.data().mastsAttachments,
                    ventClosures: doc.data().ventClosures,
                    standardCompass: doc.data().standardCompass,
                    //Area 6
                    accommodationVentClosures: doc.data().accommodationVentClosures,
                    batteryRoomVents: doc.data().batteryRoomVents,
                    batteryStowageCondition: doc.data().batteryStowageCondition,
                    weatherDoorsFrames: doc.data().weatherDoorsFrames,
                    hydrantsHosesNozzlesEX: doc.data().hydrantsHosesNozzlesEX,
                    engineRoomDampers: doc.data().engineRoomDampers,
                    externalAccommodationStairs: doc.data().externalAccommodationStairs,
                    emergencyPowerSource: doc.data().emergencyPowerSource,
                    funnelFlapOperation: doc.data().funnelFlapOperation,
                    manOverboardLightSmoke: doc.data().manOverboardLightSmoke,
                    fireControlPlanOA: doc.data().fireControlPlanOA,
                    lifebuoyLinesLights: doc.data().lifebuoyLinesLights,
                    //Area 7
                    boatPreparationOversideLights: doc.data().boatPreparationOversideLights,
                    stowageRelease: doc.data().stowageRelease,
                    launchingInstructions: doc.data().launchingInstructions,
                    embarkationLadder: doc.data().embarkationLadder,
                    //Area 8
                    launchingArrangments: doc.data().launchingArrangements,
                    lifeboatRescueBoatHullAttachments: doc.data().lifeboatRescueBoatHullAttachments,
                    lifeboatRescueBoatEquipment: doc.data().lifeboatRescueBoatEquipment,
                    lifeboatRescueBoatEngine: doc.data().lifeboatRescueBoatEngine,
                    //Area 9
                    loadLineClosingDevices: doc.data().loadLineClosingDevices,
                    crewProtection: doc.data().crewProtection,
                    deskStructuresMachinery: doc.data().deskStructuresMachinery,
                    pilotBoardingArrangements: doc.data().pilotBoardingArrangements,
                    //Area 10
                    operatingInstructions: doc.data().operatingInstructions,
                    overallConditionFF: doc.data().overallConditionFF,
                    //Area 11
                    emergencyFirePump: doc.data().emergencyFirePump,
                    engineRoomFireMainIsolatingValve: doc.data().engineRoomFireMainIsolatingValve,
                    fireMainCondition: doc.data().fireMainCondition,
                    //Area 12
                    changeOverInstructions: doc.data().changeOverInstructions,
                    emergencySteering: doc.data().emergencySteering,
                    overallCondition: doc.data().overallCondition,
                    communicationsWheelhouse: doc.data().communicationsWheelhouse,
                    //Area 13
                    hydrantsHosesNozzlesER: doc.data().hydrantsHosesNozzlesER,
                    quickClosingValves: doc.data().quickClosingValves,
                    engineRoomDoors: doc.data().engineRoomDoors,
                    fireAppliances: doc.data().fireAppliances,
                    emergencyEscapeRoutes: doc.data().emergencyEscapeRoutes,
                    electricalSafety: doc.data().electricalSafety,
                    bilgesTankTopsCleanliness: doc.data().bilgesTankTopsCleanliness,
                    selfClosingCocksValves: doc.data().selfClosingCocksValves,
                    //Area 14
                    oilyWaterSeparator: doc.data().oilyWaterSeparator,
                    PPMAlarm: doc.data().PPMAlarm,
                    garbageArrangements: doc.data().garbageArrangements,
                    //Area 15
                    cleanlinessHygiene: doc.data().cleanlinessHygeine,
                    sanitaryArrangements: doc.data().sanitaryArrangements,
                    messRecFacilities: doc.data().messRecFacilities,
                    foodStorage: doc.data().foodStorage,
                    fireFightingArrangements: doc.data().fireFightingArrangements,
                    overallConditionsAC: doc.data().overallConditionsAC,
                    fireDampers: doc.data().fireDampers,
                    //Area 16
                    firemansOutfit: doc.data().firemansOutfit,
                    remoteStopsFuelShutoffs: doc.data().remoteStopsFuelShutoffs,
                    internationalShoreConnection: doc.data().internationalShoreConnection,
                    fixedFireSuppSystemControls: doc.data().fixedFireSuppSystemControls,
                    //Area 17 Passneger Ships
                    emergencyPlans: doc.data().emergencyPlans,
                    zoneIsolationOperation: doc.data().zoneIsolationOperation,
                    sprinklerAutoPumpCutIn: doc.data().sprinklerAutoPumpCutIn,
                    sprinklerStationAlarms: doc.data().sprinklerStationAlarms,
                    lifeboats: doc.data().lifeboats,
                    passCabinEmergencyInfo: doc.data().passCabinEmergencyInfo,
                    evacDirectionSigns: doc.data().evacDirectionSigns,
                    emergencyLighting: doc.data().emergencyLighting,
                    watertightDoorsLocalRemote: doc.data().watertightDoorsLocalRemote,
                    rescueBoat: doc.data().rescueBoat,
                    emergencyDrillsDemo: doc.data().emergencyDrillsDemo,
                    //Area 18
                    gasSamplingPointsAndEE: doc.data().gasSamplingPointsAndEE,
                    enhancedSurveyRecords: doc.data().enhancedSurveyRecords,
                    topsideBallastTank: doc.data().topsideBallastTank,
                    //Area 19
                    shellDoorsLockingIndicators: doc.data().shellDoorsLockingIndicators,
                    shellDoorsSealingArrangements: doc.data().shellDoorsSealingArrangements,
                    cargoDeckDrainage: doc.data().cargoDeckDrainage,
                    rampBulwarksGuardRails: doc.data().rampBulwarksGuardRails,
                    internalWaterBarriers: doc.data().internalWaterBarriers,
                    lowerDeckSealing: doc.data().lowerDeckSealing,
                    cargoSecuringArrangements: doc.data().cargoSecuringArrangements,
                    fireFightingArrangementsRoRos: doc.data().fireFightingArrangementsRoRos,
                    //Area 20
                    IGSystem: doc.data().IGSystem
                });
            });
            return res.json(Ships);
        })
        .catch(err => console.error(err));
}

exports.postShip = (req, res) => {      

    const newShip = {
        //Block 1
        name: req.body.name,
        formerNames: req.body.formerNames,
        callSign: req.body.callSign,
        shipType: req.body.shipType,
        owner: req.body.owner,
        manager: req.body.manager,
        charterer: req.body.charterer,
        agent: req.body.agent,
        lastSpecialSurvey: req.body.lastSpecialSurvey,
        inspectionDate: req.body.inspectionDate,
        inspectionPort: req.body.inspectionPort,
        charterType: req.body.charterType,
        cargoType: req.body.cargoType,
        certificatesValid: req.body.certificatesValid,
        qualificationsValid: req.body.qualificationsValid,
        IMONumber: req.body.IMONumber,
        officialNumber: req.body.officialNumber,
        flag: req.body.flag,
        GRT: req.body.GRT,
        summerDWT: req.body.summerDWT,
        yearOfBuild: req.body.yearOfBuild,
        classSociety: req.body.classSociety,
        serviceType: req.body.serviceType,
        subStandard: req.body.subStandard,
        shipDetained: req.body.shipDetained,
        timeDelayed: req.body.timeDelayed,
        deficiencies: req.body.deficiencies,
        
        //Block 2
        // All Ships
        internationalTonnage: req.body.internationalTonnage,
        internationalLoadLine: req.body.internationalLoadLine,
        internationalLoadLineExemption: req.body.internationalLoadLineExemption,
        intactStabilityBooklet: req.body.intactStabilityBooklet,
        damageControlPlans: req.body.damageControlPlans,
        minimumSafeManning: req.body.minimumSafeManning,
        fireSafetyTrainingManual: req.body.fireSafetyTrainingManual,
        fireControlPlan: req.body.fireControlPlan,
        onBoardTrainingAndDrills: req.body.onBoardTrainingAndDrills,
        fireSafetyOperational: req.body.fireSafetyOperational,
        mastersOfficersOrRatings: req.body.mastersOfficersOrRatings,
        internationalOilPollutionPrevention: req.body.internationalOilPollutionPrevention,
        oilRecordBook: req.body.oilRecordBook,
        shipboardOilPolutionEmergencyPlan: req.body.shipboardOilPolutionEmergencyPlan,
        internationalSewagePollutionPrevention: req.body.internationalSewagePollutionPrevention,
        garbageMangementPlan: req.body.garbageMangementPlan,
        garbageRecordBook: req.body.garbageRecordBook,
        voyageDataRecorder: req.body.voyageDataRecorder,
        cargoSecuringManual: req.body.cargoSecuringManual,
        documentOfCompliance: req.body.documentOfCompliance,
        safetyManagement: req.body.safetyManagement,
        internationalShipSecurity: req.body.internationalShipSecurity,
        shipSecurityPlanAndRecords: req.body.shipSecurityPlanAndRecords,
        continuousSynopsisRecord: req.body.continuousSynopsisRecord,

        // Passenger Ships
        passengerShipSafety: req.body.passengerShipSafety,
        exemptionPassenger: req.body.exemptionPassenger,
        specialTradePassengerShipSafety: req.body.specialTradePassengerShipSafety,
        SpecialTradePassengerShipSpace: req.body.SpecialTradePassengerShipSpace,
        searchAndRescueCoOpPlan: req.body.searchAndRescueCoOpPlan,
        listOfOperationalLimitations: req.body.listOfOperationalLimitations,
        decisionSupportSystemForMasters: req.body.decisionSupportSystemForMasters,

        //Cargo Ships
        cargoShipSafetyConstruction: req.body.cargoShipSafetyConstruction,
        cargoShipSafetyEquipment: req.body.cargoShipSafetyEquipment,
        cargoShipSafetyRadio: req.body.cargoShipSafetyRadio,
        cargoShipSafety: req.body.cargoShipSafety,
        exemptionCargo: req.body.exemptionCargo,
        grainCarriage: req.body.grainCarriage,
        liabilitySecurityForOilPollution: req.body.liabilitySecurityForOilPollution,
        enhancedSurveyReportFile: req.body.enhancedSurveyReportFile,
        ODMCSystem: req.body.ODMCSystem,
        cargoInfo: req.body.cargoInfo,
        bulkCarrierBooklet: req.body.bulkCarrierBooklet,
        dedicatedCleanBallastTank: req.body.dedicatedCleanBallastTank,
        COWManual: req.body.COWManual,
        CASComplianceStatementAndFinalReportAndReviewRecord: req.body.CASComplianceStatementAndFinalReportAndReviewRecord,
        HBLOperationalManual: req.body.HBLOperationalManual,
        ODMCManual: req.body.ODMCManual,
        subdivisionAndStabilityInfo: req.body.subdivisionAndStabilityInfo,

        //Ships with Noxious liquid chemical substances in bulk
        NLS: req.body.NLS,
        cargoRecordBook: req.body.cargoRecordBook,
        PAndAManual: req.body.PAndAManual,
        marinePollutionEmergencyPlan: req.body.marinePollutionEmergencyPlan,

        //Chemical Tankers
        dangerousChemicalsInBulk: req.body.dangerousChemicalsInBulk,
        dangerousChemicalsInBulkInternational: req.body.dangerousChemicalsInBulkInternational,

        //Gas Carriers
        carriageOfLiquefiedGasesInBulk: req.body.carriageOfLiquefiedGasesInBulk,
        carriageOfLiquefiedGasesInBulkInternational: req.body.carriageOfLiquefiedGasesInBulkInternational,

        //High Speed Craft
        highSpeedCraftSafety: req.body.highSpeedCraftSafety,
        highSpeedCraftPermit: req.body.highSpeedCraftPermit,

        //Ship Carrying Dangerous Goods
        dangerousGoodsDoc: req.body.dangerousGoodsDoc,

        //Ship Carrying packaged dangerous goods
        dangerousGoodsStowage: req.body.dangerousGoodsStowage,

        //Ship carrying INF cargo
        INFCarriage: req.body.INFCarriage,

        //Nuclear Ships
        nuclearShipSafety: req.body.nuclearShipSafety,

        //Not mandatory
        specialPurposeShipSafety: req.body.specialPurposeShipSafety,
        offshoreSupportFitness: req.body.offshoreSupportFitness,
        divingSystemSafety: req.body.divingSystemSafety,
        dynamicallySupportedCraft: req.body.dynamicallySupportedCraft,
        mobileOffshoreDrillingUnitSafety: req.body.mobileOffshoreDrillingUnitSafety,
        WIGCraftSafety: req.body.WIGCraftSafety,
        noiseSurveyReport: req.body.noiseSurveyReport,


        //CHECKLIST
        //Area 1
        hullCondition: req.body.hullCondition,
        tankLeakageEvidence: req.body.tankLeakageEvidence,
        hullMarkings: req.body.hullMarkings,
        accommodationLadderSideNetting: req.body.accommodationLadderSideNetting,
        //Area 2
        shipsCertificates: req.body.shipsCertificates,
        ISMDPD: req.body.ISMDPD,
        ISMMADC: req.body.ISMMADC,
        ISMDEP: req.body.ISMDEP,
        //Area 3
        voyageCharts: req.body.voyageCharts,
        ARPARadar: req.body.ARPARadar,
        appropriatePublications: req.body.appropriatePublications,
        compassDeviationRecords: req.body.compassDeviationRecords,
        echoSounder: req.body.echoSounder,
        fireDetectionPanel: req.body.fireDetectionPanel,
        navigationLightPanel: req.body.navigationLightPanel,
        //Area 4
        MSIReception: req.body.MSIReception,
        OARCRadiotelephony: req.body.OARCRadiotelephony,
        OARCDSC: req.body.OARCDSC,
        antennaInspection: req.body.antennaInspection,
        batteryInspection: req.body.batteryInspection,
        EPIRB: req.body.EPIRB,
        SART: req.body.SART,
        portableVHF: req.body.portableVHF,
        //Area 5
        mastsAttachments: req.body.mastsAttachments,
        ventClosures: req.body.ventClosures,
        standardCompass: req.body.standardCompass,
        //Area 6
        accommodationVentClosures: req.body.accommodationVentClosures,
        batteryRoomVents: req.body.batteryRoomVents,
        batteryStowageCondition: req.body.batteryStowageCondition,
        weatherDoorsFrames: req.body.weatherDoorsFrames,
        hydrantsHosesNozzlesEX: req.body.hydrantsHosesNozzlesEX,
        engineRoomDampers: req.body.engineRoomDampers,
        externalAccommodationStairs: req.body.externalAccommodationStairs,
        emergencyPowerSource: req.body.emergencyPowerSource,
        funnelFlapOperation: req.body.funnelFlapOperation,
        manOverboardLightSmoke: req.body.manOverboardLightSmoke,
        fireControlPlanOA: req.body.fireControlPlanOA,
        lifebuoyLinesLights: req.body.lifebuoyLinesLights,
        //Area 7
        boatPreparationOversideLights: req.body.boatPreparationOversideLights,
        stowageRelease: req.body.stowageRelease,
        launchingInstructions: req.body.launchingInstructions,
        embarkationLadder: req.body.embarkationLadder,
        //Area 8
        launchingArrangments: req.body.launchingArrangements,
        lifeboatRescueBoatHullAttachments: req.body.lifeboatRescueBoatHullAttachments,
        lifeboatRescueBoatEquipment: req.body.lifeboatRescueBoatEquipment,
        lifeboatRescueBoatEngine: req.body.lifeboatRescueBoatEngine,
        //Area 9
        loadLineClosingDevices: req.body.loadLineClosingDevices,
        crewProtection: req.body.crewProtection,
        deskStructuresMachinery: req.body.deskStructuresMachinery,
        pilotBoardingArrangements: req.body.pilotBoardingArrangements,
        //Area 10
        operatingInstructions: req.body.operatingInstructions,
        overallCondition: req.body.overallCondition,
        //Area 11
        emergencyFirePump: req.body.emergencyFirePump,
        engineRoomFireMainIsolatingValve: req.body.engineRoomFireMainIsolatingValve,
        fireMainCondition: req.body.fireMainCondition,
        //Area 12
        changeOverInstructions: req.body.changeOverInstructions,
        emergencySteering: req.body.emergencySteering,
        overallCondition: req.body.overallCondition,
        communicationsWheelhouse: req.body.communicationsWheelhouse,
        //Area 13
        hydrantsHosesNozzlesER: req.body.hydrantsHosesNozzlesER,
        quickClosingValves: req.body.quickClosingValves,
        engineRoomDoors: req.body.engineRoomDoors,
        fireAppliances: req.body.fireAppliances,
        emergencyEscapeRoutes: req.body.emergencyEscapeRoutes,
        electricalSafety: req.body.electricalSafety,
        bilgesTankTopsCleanliness: req.body.bilgesTankTopsCleanliness,
        selfClosingCocksValves: req.body.selfClosingCocksValves,
        //Area 14
        oilyWaterSeparator: req.body.oilyWaterSeparator,
        PPMAlarm: req.body.PPMAlarm,
        garbageArrangements: req.body.garbageArrangements,
        //Area 15
        cleanlinessHygiene: req.body.cleanlinessHygeine,
        sanitaryArrangements: req.body.sanitaryArrangements,
        messRecFacilities: req.body.messRecFacilities,
        foodStorage: req.body.foodStorage,
        fireFightingArrangements: req.body.fireFightingArrangements,
        overallConditionsAC: req.body.overallConditionsAC,
        fireDampers: req.body.fireDampers,
        //Area 16
        firemansOutfit: req.body.firemansOutfit,
        remoteStopsFuelShutoffs: req.body.remoteStopsFuelShutoffs,
        internationalShoreConnection: req.body.internationalShoreConnection,
        fixedFireSuppSystemControls: req.body.fixedFireSuppSystemControls,
        //Area 17 Passneger Ships
        emergencyPlans: req.body.emergencyPlans,
        zoneIsolationOperation: req.body.zoneIsolationOperation,
        sprinklerAutoPumpCutIn: req.body.sprinklerAutoPumpCutIn,
        sprinklerStationAlarms: req.body.sprinklerStationAlarms,
        lifeboats: req.body.lifeboats,
        passCabinEmergencyInfo: req.body.passCabinEmergencyInfo,
        evacDirectionSigns: req.body.evacDirectionSigns,
        emergencyLighting: req.body.emergencyLighting,
        watertightDoorsLocalRemote: req.body.watertightDoorsLocalRemote,
        rescueBoat: req.body.rescueBoat,
        emergencyDrillsDemo: req.body.emergencyDrillsDemo,
        //Area 18
        gasSamplingPointsAndEE: req.body.gasSamplingPointsAndEE,
        enhancedSurveyRecords: req.body.enhancedSurveyRecords,
        topsideBallastTank: req.body.topsideBallastTank,
        //Area 19
        shellDoorsLockingIndicators: req.body.shellDoorsLockingIndicators,
        shellDoorsSealingArrangements: req.body.shellDoorsSealingArrangements,
        cargoDeckDrainage: req.body.cargoDeckDrainage,
        rampBulwarksGuardRails: req.body.rampBulwarksGuardRails,
        internalWaterBarriers: req.body.internalWaterBarriers,
        lowerDeckSealing: req.body.lowerDeckSealing,
        cargoSecuringArrangements: req.body.cargoSecuringArrangements,
        fireFightingArrangementsRoRos: req.body.fireFightingArrangementsRoRos,
        //Area 20
        IGSystem: req.body.IGSystem,
    };

    db
        .collection('Ships')
        .add(newShip)
        .then(doc => {
            const resShip = newShip;
            resShip.shipId = doc.id;
            res.json(resShip);
        })
        .catch(err =>{
            res.status(500).json({error: `A problem occured`});
            console.error(err);
        });
}

exports.deleteShip = (req, res) => {
    const document = db.doc(`/Ships/${req.params.shipId}`);
        document.get()
            .then((doc) => {
                if(!doc.exists){
                    return res.status(404).json({ error: 'Ship not found'});
                }
                else{
                    return document.delete();
                }
            })
            .then(() => {
                res.json({ message: 'Ship deleted successfully'});
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).json({ error: err.code});
            })
}
