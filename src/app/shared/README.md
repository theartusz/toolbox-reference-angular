Do declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

Do import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.

# Index.shared.ts (i.e. Barrel)
This file contains the expoxt statement of files of shared folder. This is to avoid cubersome 
of large number of export statements.
