/**
 * setter -> dep.notify -> watcher.update 
 * -> queue watcher(watcher has unique id) -> pushed in global queue
 * -> nextTick(flushScheduleQueue) -> create async task to flushQueue -> watcher run
 * -> call our getter to update component -> render and patch
 * 
 */
// nextTick ==> data changes but have DOM not been updated yet
// we just put watcher into queue waiting for next event loop