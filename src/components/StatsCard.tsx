//import './ExploreContainer.css';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react"
import React from "react"
import { convertToHhMmSs } from '../util/timeDisplay'

interface StatsProps {
  sessionTime?: number,
  currentRunTime?: number,
  runCount?: number,
  totalRuns?: number
}

const StatsCard: React.FC<StatsProps> = 
  ({ sessionTime, currentRunTime, runCount, totalRuns }) => {

  let formattedSessionTime: string = convertToHhMmSs(sessionTime as number)
  let formattedCurrentRunTime: string = convertToHhMmSs(currentRunTime as number)

  return (
    <IonCard>
        <IonCardHeader>
          <IonCardTitle>Stats</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-center">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardSubtitle>Session</IonCardSubtitle>
                <h1 data-testid="sessionTime">{ formattedSessionTime }</h1>
              </IonCol>
              <IonCol>
                <IonCardSubtitle>Current Run</IonCardSubtitle>
                <h1 data-testid="currentRunTime">{ formattedCurrentRunTime }</h1>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardSubtitle>Run Count</IonCardSubtitle>
                <IonCardTitle data-testid="runCount">{ runCount }</IonCardTitle>
              </IonCol>
              <IonCol>
                <IonCardSubtitle>Total Runs</IonCardSubtitle>
                <IonCardTitle data-testid="totalRuns">{ totalRuns }</IonCardTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </IonCardContent>
      </IonCard>
  )
}

export default StatsCard
