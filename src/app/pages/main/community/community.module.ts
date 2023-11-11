import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPageRoutingModule } from './community-routing.module';

import { CommunityPage } from './community.page';
import { PostListComponent } from './components/post-list/post-list.component';
import { SocialListComponent } from './components/social-list/social-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CommunityPageRoutingModule],
  declarations: [CommunityPage, PostListComponent, SocialListComponent],
})
export class CommunityPageModule {}
