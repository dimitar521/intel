import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule  // Make sure the Firebase Database module is imported
  ],
  exports: [
    AngularFireModule,  // Export AngularFireModule so it can be accessed globally
    AngularFireDatabaseModule  // Export AngularFireDatabaseModule
  ]
})
export class FirebaseModule {}