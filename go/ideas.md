## 🔥 High-Performance API Gateway (Go)

A production-grade API Gateway built in Go, designed to sit in front of microservices at scale.

### Core Responsibilities
- Reverse proxy with dynamic routing
- JWT / OAuth2 token authentication
- Per-user and per-IP rate limiting
- Response caching with TTL & invalidation
- Request/response transformation

### Advanced Features
- Lock-free / low-contention concurrency design
- Circuit breakers & upstream health checks
- Config hot-reload without downtime
- Backpressure handling & graceful degradation
- Structured logging & distributed tracing (OpenTelemetry)
- Prometheus metrics, dashboards & alerting

### Performance Goals
- Sustains **50k–100k RPS** in load tests
- P99 latency within strict SLA
- Memory-efficient request handling

### Tech Stack
- Go, HTTP/2, gRPC
- Redis (rate limiting & cache)
- OpenTelemetry, Prometheus

### Proves
- High-performance networking
- Concurrency & memory management
- Production observability
- Systems-level optimization

---

## 🔥 Distributed Task Queue / Job Processing System

A horizontally scalable background job system inspired by **Celery / Sidekiq / SQS**.

### Core Components
- Job producers (API / SDK)
- Distributed workers
- Persistent job store
- Scheduler & dispatcher

### Features
- At-least-once delivery semantics
- Configurable retry policies (backoff & jitter)
- Dead Letter Queue (DLQ)
- Job prioritization & delayed execution
- Idempotency guarantees
- Worker auto-scaling based on queue depth
- Graceful worker shutdown & job recovery

### Reliability & Scaling
- Crash-safe job persistence
- Leader election for schedulers
- Horizontal scaling across nodes
- Fault injection & chaos testing

### Tech Stack
- Go / Java / Python
- Redis / PostgreSQL / Kafka
- gRPC / HTTP APIs

### Proves
- Asynchronous system design
- Distributed reliability patterns
- Failure handling & recovery
- Throughput vs durability tradeoffs

---

## 🔥 Real-Time System (Low-Latency Backend)

A real-time backend handling thousands of concurrent connections.

### Example Implementations
- Real-time chat server
- Live collaboration backend (documents, cursors)
- Real-time analytics streaming pipeline

### Core Features
- WebSocket connections
- Pub/Sub messaging
- Event fan-out & broadcast
- Presence & session tracking
- Message ordering & delivery guarantees
- Connection lifecycle management

### Advanced Features
- Sharded connection management
- Sticky sessions & reconnection logic
- Backpressure & slow-client handling
- Horizontal scaling using pub/sub backbone
- Message compression & batching

### Performance Goals
- Sub-100ms end-to-end latency
- Tens of thousands of concurrent clients per node

### Tech Stack
- Go / Node.js
- WebSockets
- Redis / NATS / Kafka

### Proves
- Stateful systems
- Low-latency communication
- Concurrency under load
- Real-time data flow design

---

## 🔥 Optional Project: Distributed Key-Value Store

A mini distributed database inspired by **Redis / Dynamo / etcd**.

### Core Features
- Consistent hashing & data partitioning
- Replication & leader election
- Read/write consistency levels
- Failure detection & rebalancing
- Snapshotting & write-ahead logging (WAL)

### Advanced Concepts
- Raft or gossip protocol
- Conflict resolution strategies
- Network partition handling & recovery
- Performance benchmarking & load testing

### Proves
- Distributed consensus
- Data consistency tradeoffs
- Storage engine fundamentals
- Deep systems design knowledge
