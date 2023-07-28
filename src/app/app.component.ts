import { Component } from '@angular/core';

import { init as onfidoInit, SdkHandle as onfidoSdkHandle } from 'onfido-sdk-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private onfido: onfidoSdkHandle;

  title = 'of-example';

  constructor() {

    this.onfido = onfidoInit({
      token: 'token',
      containerId: 'onfido-mount',
      onComplete: response => {
        console.log('onComplete: ', response);
      },
      onError: data => {
        console.log('onError: ', data);
      },
      onUserExit: _ => {
        console.log('onUserExit');
      },
      steps: [
        'welcome',
        {
          type: 'document',
          options: {
            documentTypes: {
              passport: true,
              driving_licence: true
            },
            forceCrossDevice: true
          }
        },
        {
          type: 'face',
          options: {
            requestedVariant: 'video'
          }
        },
        'complete'
      ]
    });
  }
}
