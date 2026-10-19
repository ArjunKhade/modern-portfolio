import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ANGULAR_TOPICS, Topic, TopicItem, CodeBlock } from './angular-fundamentals.data';

@Component({
  selector: 'app-angular-fundamentals',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrl: './angular-fundamentals.css',
  templateUrl: './angular-fundamentals.html',
})
export class AngularFundamentals {
  searchQuery = signal('');
  activeTopicId = signal('custom-directives');
  expandedItems = signal<Set<string>>(new Set());
  copiedCode = signal<string | null>(null);

  readonly topics: Topic[] = ANGULAR_TOPICS;

  constructor() {
    this.expandAllForCurrentTopic(this.activeTopicId());
  }

  private expandAllForCurrentTopic(topicId: string) {
    const topic = this.topics.find((t) => t.id === topicId);
    if (topic && topic.items.length > 0) {
      const allKeys = new Set<string>();
      topic.items.forEach((_, i) => allKeys.add(`${topicId}-${i}`));
      this.expandedItems.set(allKeys);
    }
  }

  filteredTopics = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.topics;
    return this.topics.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.items.some(
          (item) =>
            item.heading.toLowerCase().includes(q) ||
            item.content.some((c) => c.toLowerCase().includes(q))
        )
    );
  });

  activeTopic = computed(() =>
    this.filteredTopics().find((t) => t.id === this.activeTopicId()) ??
    this.filteredTopics()[0] ??
    this.topics[0]
  );

  setActiveTopic(id: string) {
    this.activeTopicId.set(id);
    this.expandAllForCurrentTopic(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleItem(key: string) {
    const current = new Set(this.expandedItems());
    if (current.has(key)) {
      current.delete(key);
    } else {
      current.add(key);
    }
    this.expandedItems.set(current);
  }

  isExpanded(key: string): boolean {
    return this.expandedItems().has(key);
  }

  expandAllForTopic() {
    const topic = this.activeTopic();
    if (!topic) return;
    const allKeys = new Set<string>();
    topic.items.forEach((_, i) => allKeys.add(`${topic.id}-${i}`));
    this.expandedItems.set(allKeys);
  }

  collapseAllForTopic() {
    this.expandedItems.set(new Set());
  }

  async copyCode(code: string, id: string) {
    try {
      await navigator.clipboard.writeText(code);
      this.copiedCode.set(id);
      setTimeout(() => this.copiedCode.set(null), 2000);
    } catch {}
  }

  @HostListener('window:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const el = document.getElementById('af-search');
      el?.focus();
    }
  }
}
