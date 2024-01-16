import {HttpClientModule}  from "@angular/common/http"
import { NgModule } from "@angular/core";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { QuillModule } from "ngx-quill";
import { ToastrModule } from "ngx-toastr";

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,AngularEditorModule,QuillModule,ToastrModule.forRoot()
        ]
})

export class AppModule {}