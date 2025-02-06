export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-26'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skXeVrOK89u6ABBAlliMVgNAxZ6EiZzAZJdGsxfcXRbwYo9E2xlipCQwMKsPC6K9XZkcV695p8P0iIRwg8rV6J5gxgyQcEsq3str9gPbc4YmxBL9tWvzunYjwDRy9KYBdPLHWoVUwPKCODTkRZnTqvI2fwdsUKtZAQabs6V3R0oBmk8ffPec",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
