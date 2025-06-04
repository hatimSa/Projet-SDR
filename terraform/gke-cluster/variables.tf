variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "Region to deploy GKE cluster"
  default     = "us-central1"
}

variable "cluster_name" {
  description = "Name of the GKE cluster"
  default     = "springboot-cluster"
}
