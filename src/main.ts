import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication } from "@angular/platform-browser";

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
