import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from "@ionic/react";
import { play, pause, add, stop } from "ionicons/icons";
import React from "react";
import { useRecoilState } from "recoil";
import { counterTrackingState } from "../atoms";

interface ControlProps {

}

const CounterControl: React.FC<ControlProps> = () => {
    const [counterTracking, setCounterTracking] = useRecoilState(counterTrackingState);

  const onPlayPauseClick = (event: any) => {
    setCounterTracking({ isRunning: !counterTracking.isRunning });
  };

    return (
        <IonCard>
            <IonCardHeader>
            <IonCardTitle>Controls</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="ion-text-center">  
            <IonButton expand="block" fill="solid" size="large" color="secondary" data-testid="nextGameButton" disabled={!counterTracking.isRunning}>Next Game</IonButton>
            {/* <IonButton fill="solid" size="default" color="primary">Play/Pause</IonButton>
            <IonButton fill="solid" size="default" color="primary">Stop</IonButton> */}
            <IonButton fill="solid" size="default" color="primary" data-testid="playPauseButton" onClick={onPlayPauseClick}>
                <IonIcon icon={play} />
                &nbsp;
                <IonIcon icon={pause} />
            </IonButton>
            <IonButton fill="solid" size="default" color="primary">
                <IonIcon icon={stop} />
            </IonButton>
            <IonButton fill="solid" size="default" color="primary">
                <IonIcon icon={add} /> 
                Add Drop
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default CounterControl;