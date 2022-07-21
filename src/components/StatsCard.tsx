//import './ExploreContainer.css';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from "@ionic/react"
import React from "react"

interface StatsProps {
  sessionTime?: number,
  currentRunTime?: number
}

const StatsCard: React.FC<StatsProps> = ({ sessionTime, currentRunTime }) => {
  
  const convertToHhMmSs = (s: number): string => {
    let seconds = s
    const hours = Math.trunc(seconds / 3600)
    seconds = seconds % 3600
    const minutes = Math.trunc(seconds / 60)
    seconds = seconds % 60
    
    return hours.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) 
    + ":" 
    + minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) 
    + ":" 
    + seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
  }

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
                <IonCardTitle>33</IonCardTitle>
              </IonCol>
              <IonCol>
                <IonCardSubtitle>Total Runs</IonCardSubtitle>
                <IonCardTitle>1337</IonCardTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </IonCardContent>
      </IonCard>
  )
}

export default StatsCard
