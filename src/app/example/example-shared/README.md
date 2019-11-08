Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

Do import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.

# Index.shared.ts (i.e. Barrel)
This file contains the exports statement of files of shared folder. This is to avoid cumbersome 
of large number of export statements.
