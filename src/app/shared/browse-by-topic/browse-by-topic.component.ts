import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Topic {
  id: string;
  name: string;
  mark?: string;  
}


@Component({
  selector: 'app-browse-by-topic',
  imports: [CommonModule  ],
  templateUrl: './browse-by-topic.component.html',
  styleUrl: './browse-by-topic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrowseByTopicComponent {
  topics: Topic[] = [
    { id: 't1', name: 'Cardiology', mark: '(4)' },
    { id: 't2', name: 'Emergency Medicine', mark: '(4)' },
    { id: 't3', name: 'General Medicine', mark: '(4)' },
    { id: 't4', name: 'Pediatrics', mark: '(4)' },
    { id: 't5', name: 'Endocrinology', mark: '(6)' },
    { id: 't6', name: 'Infectious Diseases', mark: '(4)' },
    { id: 't7', name: 'Oncology', mark: '(4)' },
    { id: 't8', name: 'Dermatology', mark: '(4)' },
    { id: 't9', name: 'Orthopedics', mark: '(4)' },
    { id: 't10', name: 'Neurology', mark: '(4)' },
    { id: 't4', name: 'Pediatrics', mark: '(4)' },
    { id: 't5', name: 'Endocrinology', mark: '(6)' },
    { id: 't6', name: 'Infectious Diseases', mark: '(4)' },
    { id: 't7', name: 'Oncology', mark: '(4)' },
    { id: 't8', name: 'Dermatology', mark: '(4)' },
    { id: 't9', name: 'Orthopedics', mark: '(4)' },
    { id: 't10', name: 'Neurology', mark: '(4)' }
  ];

  selectTopic(topic: Topic) {
    // replace with navigation or filter logic
    alert(`Browsing webinars about: ${topic.name}`);
  }

  trackById(_: number, item: Topic) {
    return item.id;
  }
}
